#!/usr/bin/env node
// Validates frontmatter for all tutorials/**/<lang>.md files.
//
// Required fields: slug, language, title, date.
// Date fields: date (required) and updated (optional), both YYYY-MM-DD.
// Optional boolean flags: is_deprecated, is_featured, is_highlighted.
//
// Layout: tutorials/<group>/[<game>/][<subcategory>/]<topic>/{de,en}.md
//   - The folder path is the canonical anchor (cross-language).
//   - For en.md: slug MUST equal the leaf folder name (canonical anchor).
//   - For non-en files: slug is a kebab-case single-segment string (no slashes).
//   - Every parent path segment (group, game, subcategory, ...) must have a matching
//     categories/<...>.yaml file.
//   - The category field on tutorials is GONE: the folder path replaces it.
//   - Global uniqueness is checked on (language, full-folder-path), not on slug.

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, basename, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const repoRoot = resolve(dirname(__filename), '..', '..');
const tutorialsDir = join(repoRoot, 'tutorials');
const categoriesDir = join(repoRoot, 'categories');

const REQUIRED_FIELDS = ['slug', 'language', 'title', 'date'];
const DATE_FIELDS = ['date', 'updated'];
const BOOLEAN_FIELDS = ['is_deprecated', 'is_featured', 'is_highlighted'];

/**
 * Recursively walk a directory and yield absolute file paths.
 */
function* walk(dir) {
    if (!existsSync(dir)) {
        return;
    }
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        const st = statSync(full);
        if (st.isDirectory()) {
            yield* walk(full);
        } else {
            yield full;
        }
    }
}

/**
 * Extract YAML frontmatter from a markdown file.
 * Returns { data, error } where data is the parsed object or null.
 */
function parseFrontmatter(content) {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) {
        return { data: null, error: 'Missing frontmatter block (--- ... ---)' };
    }
    try {
        const data = yaml.load(match[1]);
        if (data === null || typeof data !== 'object') {
            return { data: null, error: 'Frontmatter is not a YAML mapping' };
        }
        return { data, error: null };
    } catch (e) {
        return { data: null, error: `YAML parse error: ${e.message}` };
    }
}

/**
 * Collect known category paths from categories/**\/<slug>.yaml files.
 * Nested files become slash-joined paths (e.g. categories/gameserver/aloft.yaml
 * registers as "gameserver/aloft").
 */
function loadKnownCategoryPaths() {
    const known = new Set();
    if (!existsSync(categoriesDir)) {
        return known;
    }
    for (const file of walk(categoriesDir)) {
        if (file.endsWith('.yaml') || file.endsWith('.yml')) {
            const rel = relative(categoriesDir, file).replace(/\\/g, '/');
            known.add(rel.replace(/\.(ya?ml)$/, ''));
        }
    }
    return known;
}

const errors = [];
const knownCategoryPaths = loadKnownCategoryPaths();
// Track (language, folder-path) uniqueness globally. Two tutorials can share
// a slug across different game folders, but they cannot share the same folder.
const seenFolders = new Map(); // key = `${language}:${folderPath}`, value = first file rel path

let mdCount = 0;
for (const file of walk(tutorialsDir)) {
    if (!file.endsWith('.md')) {
        continue;
    }
    mdCount++;
    const rel = relative(repoRoot, file).replace(/\\/g, '/');
    const fileName = basename(file, '.md');
    const leafFolder = basename(dirname(file));
    // folderPath = path under tutorials/ to the leaf folder, e.g.
    // "gameserver/aloft/add-admin".
    const folderPath = relative(tutorialsDir, dirname(file)).replace(/\\/g, '/');
    const parentSegments = folderPath.split('/').slice(0, -1); // group [+ game]

    const content = readFileSync(file, 'utf8');
    const { data, error } = parseFrontmatter(content);

    if (error) {
        errors.push(`${rel}: ${error}`);
        continue;
    }

    for (const field of REQUIRED_FIELDS) {
        if (data[field] === undefined || data[field] === null || data[field] === '') {
            errors.push(`${rel}: missing required field "${field}"`);
        }
    }

    if (data.language !== undefined && data.language !== fileName) {
        errors.push(`${rel}: language "${data.language}" does not match filename "${fileName}"`);
    }
    if (data.slug !== undefined) {
        const slugStr = String(data.slug);
        if (!/^[a-z0-9-]+$/.test(slugStr)) {
            errors.push(`${rel}: slug "${slugStr}" must be a kebab-case single segment ([a-z0-9-]+, no slashes)`);
        }
        if (fileName === 'en' && slugStr !== leafFolder) {
            errors.push(`${rel}: en.md slug "${slugStr}" must equal leaf folder name "${leafFolder}" (canonical anchor)`);
        }
    }

    // Global uniqueness on (language, folder-path).
    if (data.language) {
        const key = `${data.language}:${folderPath}`;
        if (seenFolders.has(key)) {
            errors.push(`${rel}: folder path "${folderPath}" (${data.language}) already used by ${seenFolders.get(key)}`);
        } else {
            seenFolders.set(key, rel);
        }
    }

    // Every parent path segment (group, optional game) must have a
    // categories/<...>.yaml file.
    {
        let acc = '';
        for (const seg of parentSegments) {
            acc = acc ? `${acc}/${seg}` : seg;
            if (!knownCategoryPaths.has(acc)) {
                errors.push(`${rel}: missing category YAML for path segment "${acc}" (expected categories/${acc}.yaml)`);
            }
        }
    }

    // Both dates feed the monthly freshness report, so both need a real value.
    // An empty or malformed `updated` would otherwise hide the guide from it.
    for (const field of DATE_FIELDS) {
        if (data[field] === undefined) {
            continue;
        }
        const value = data[field];
        const dateStr = value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
        if (!/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
            errors.push(`${rel}: ${field} "${dateStr}" is not in YYYY-MM-DD format`);
        }
    }

    // Flags have to be real booleans, a quoted "false" would switch the flag on.
    for (const field of BOOLEAN_FIELDS) {
        if (data[field] !== undefined && typeof data[field] !== 'boolean') {
            errors.push(`${rel}: ${field} "${String(data[field])}" is not a boolean (true or false, unquoted)`);
        }
    }
}

if (errors.length > 0) {
    console.error(`Frontmatter validation failed with ${errors.length} error(s):\n`);
    for (const err of errors) {
        console.error(`  - ${err}`);
    }
    process.exit(1);
}

console.log(`Frontmatter validation passed (${mdCount} files checked).`);
