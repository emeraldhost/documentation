#!/usr/bin/env node
// Offline internal-link check: resolves /tutorials/... links and local media
// paths against the repository, without any network access.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const tutorials = join(repoRoot, 'tutorials');

function* walk(dir) {
    for (const entry of readdirSync(dir).sort()) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) yield* walk(full);
        else yield full;
    }
}

// Only markdown link/image destinations: an angle autolink is always absolute,
// and `<details>` / `<server-ip>` are HTML and placeholders, not links.
const LINK = /!?\[[^\]]*\]\(\s*([^)\s]+)/g;
const errors = [];
let checked = 0;
let files = 0;

for (const file of walk(tutorials)) {
    if (!file.endsWith('.md')) continue;
    files++;
    const rel = file.slice(repoRoot.length + 1).replace(/\\/g, '/');
    const leaf = dirname(file);
    // Code is not markup: drop fenced blocks and inline spans before scanning.
    // A fence may be indented inside a list step or prefixed with `> ` in an alert.
    const content = readFileSync(file, 'utf8')
        .replace(/^(?:[ \t]*>[ \t]?)*[ \t]*```[\s\S]*?^(?:[ \t]*>[ \t]?)*[ \t]*```/gm, '')
        .replace(/`+[^`\n]*`+/g, '');

    for (const match of content.matchAll(LINK)) {
        const target = match[1].split('#')[0];
        if (target === '' || /^(https?:|mailto:|#)/.test(target)) continue;
        checked++;

        if (target.startsWith('/tutorials/')) {
            if (!existsSync(join(repoRoot, target.slice(1)))) {
                errors.push(`${rel}: missing tutorial for ${target}`);
            }
            continue;
        }
        if (target.startsWith('/')) {
            continue;
        }
        if (target.endsWith('.md')) {
            errors.push(`${rel}: raw .md link ${target}`);
            continue;
        }
        if (!existsSync(join(leaf, target))) {
            errors.push(`${rel}: missing local file ${target}`);
        }
    }
}

if (errors.length) {
    console.error(`Link check failed with ${errors.length} error(s):\n`);
    for (const error of errors) console.error(`  - ${error}`);
    process.exit(1);
}

console.log(`Link check passed (${files} files, ${checked} links).`);
