#!/usr/bin/env node
// Every tutorial leaf must exist in both languages.
//
// A leaf is a folder holding de.md or en.md. Both files must be there, and both
// must declare available_languages ["de", "en"], so the language switcher never
// points at a page that does not exist.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const tutorials = join(repoRoot, 'tutorials');

const LANGUAGES = ['de', 'en'];
const errors = [];
let leaves = 0;

function frontmatter(file) {
    const match = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return null;
    try {
        return yaml.load(match[1]);
    } catch {
        return null;
    }
}

function walk(dir, rel) {
    const entries = readdirSync(dir).sort();
    const present = LANGUAGES.filter((language) => entries.includes(`${language}.md`));

    if (present.length > 0) {
        leaves++;
        for (const language of LANGUAGES) {
            if (!present.includes(language)) {
                errors.push(`${rel}: missing ${language}.md`);
                continue;
            }
            const data = frontmatter(join(dir, `${language}.md`));
            if (!data) {
                errors.push(`${rel}/${language}.md: unreadable frontmatter`);
                continue;
            }
            const declared = Array.isArray(data.available_languages) ? [...data.available_languages].sort() : [];
            if (declared.join(',') !== LANGUAGES.join(',')) {
                errors.push(`${rel}/${language}.md: available_languages is [${declared.join(', ')}], expected ["de", "en"]`);
            }
        }
    }

    for (const entry of entries) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) {
            walk(full, rel ? `${rel}/${entry}` : entry);
        }
    }
}

if (!existsSync(tutorials)) {
    console.error('No tutorials/ directory.');
    process.exit(1);
}
walk(tutorials, '');

if (errors.length) {
    console.error(`Language check failed with ${errors.length} error(s):\n`);
    for (const error of errors) console.error(`  - ${error}`);
    process.exit(1);
}

console.log(`Language check passed (${leaves} leaves, de + en).`);
