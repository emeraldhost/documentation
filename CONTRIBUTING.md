# Contributing to the EmeraldHost guides

*Read this in [Deutsch](./CONTRIBUTING.de.md).*

Welcome, and thanks for taking the time to write a guide for EmeraldHost. This
repository is the source for every guide about **game servers**, **root
servers**, **TeamSpeak**, **domains** and everything else our customers run.
What you commit here is what readers see on
[emeraldhost.de/de/anleitungen](https://emeraldhost.de/de/anleitungen) and
[emeraldhost.de/en/guides](https://emeraldhost.de/en/guides).

This document is the authoring guide. Read it before your first pull request,
and keep it open while you write.

---

## Table of contents

1. [Quick start](#quick-start)
2. [Folder structure](#folder-structure)
3. [Frontmatter](#frontmatter)
4. [Markdown style guide](#markdown-style-guide)
5. [Cross-references](#cross-references)
6. [Images and screenshots](#images-and-screenshots)
7. [Translations](#translations)
8. [Naming conventions](#naming-conventions)
9. [Checks](#checks)
10. [PR checklist](#pr-checklist)
11. [Code of conduct and license](#code-of-conduct-and-license)

---

## Quick start

If you already know your way around Git and Markdown, here is the short version.

1. **Fork** this repository to your own GitHub account. If your fork still has a
   flat `tutorials/` folder that is not nested by category, it predates the
   restructure and every file shows up as changed. Fork again, or sync your fork
   from this repository with GitHub's **Sync fork** button or on the command
   line:

   ```bash
   git remote add upstream https://github.com/emeraldhost/documentation.git
   git fetch upstream
   git reset --hard upstream/main
   ```

2. **Clone** your fork and create a branch:

   ```bash
   git clone https://github.com/<your-user>/documentation.git
   cd documentation
   git checkout -b tutorial/install-minecraft-datapacks
   ```

3. **Copy the template** into a new guide folder. Use an English, kebab-case
   folder name that does not exist yet, so you create a guide instead of
   overwriting one:

   ```bash
   mkdir -p tutorials/gameserver/minecraft/install-datapacks/images
   cp tutorial-template.en.md tutorials/gameserver/minecraft/install-datapacks/en.md
   cp tutorial-template.de.md tutorials/gameserver/minecraft/install-datapacks/de.md
   ```

4. **Write the guide, in both languages.** Fill in the frontmatter, drop
   screenshots into the `images/` subfolder, and follow the
   [style guide](#markdown-style-guide).
5. **Open a pull request** against `main`. Fill in the pull request template and
   tick the [checklist](#pr-checklist).

You do not need to build anything locally. The automated checks on the pull
request report a missing field, a broken link or a missing translation. If you
want to run them yourself, see [Checks](#checks).

A reviewer reads the draft, suggests changes if needed, and merges once it is
ready. After the merge the website picks the guide up within a few minutes.

---

## Folder structure

Guides live in a **nested folder layout** under `tutorials/`. The full path
encodes the category: `tutorials/<group>/[<section>/][<subcategory>/]<topic>/`.
The leaf folder name is the canonical English topic slug. Inside that leaf
folder, each language gets its own Markdown file and all images live in a shared
`images/` subfolder.

```text
tutorials/
  gameserver/
    aloft/
      add-admin/
        en.md
        de.md
        images/
          admin-panel.webp
      enable-whitelist/
        en.md
        de.md
    minecraft/               # here the <section> segment is the product key
      install-plugins/
        en.md
        de.md
        images/
          plugin-upload.webp
        videos/
          plugin-upload.mp4
      plugins/               # optional <subcategory> below the game
        install-essentialsx/
          en.md
          de.md
    create-database/         # shared gameserver helper, no middle segment
      en.md
      de.md
  rootserver/
    services-tools/
      install-certbot/
        en.md
        de.md
    basic-configuration/
      change-ssh-port/
        en.md
        de.md
  teamspeak/
    setup-teamspeak-server/
      en.md
      de.md
      images/
        teamspeak-firewall.webp
  general/
    create-network-trace/
      en.md
      de.md
```

The tree above shows the shape of the layout. Not every leaf in it exists today,
so browse `tutorials/` for real examples.

Allowed top-level groups: `gameserver`, `rootserver`, `teamspeak`, `domains`,
`general`. The middle segment is optional and holds a sub-section: under
`gameserver/` it is the game, under `rootserver/` and `domains/` it groups a
topic, for example `linux`, `services-tools` or `dns-records`. A section may
hold one further optional subcategory before the guide folder.

Rules:

- **One leaf folder per guide.** Never mix two topics in one folder.
- **`<lang>.md` only, and both of them.** Allowed languages today: `en.md`,
  `de.md`; every leaf carries both. Propose a new language in an issue first.
- **The segment directly below `gameserver/` is the product key**, for example
  `minecraft`, not `minecraft-java-edition`. A further optional subcategory may
  sit between the game and the guide, for example
  `gameserver/minecraft/plugins/<guide>`; it needs its own
  `categories/gameserver/minecraft/plugins.yaml` with `parent: "gameserver/minecraft"`.
  A game with no product keeps its own slug and its guides carry no
  `product_keys`. Outside `gameserver/` the middle segment is a topic group and
  has nothing to do with product keys.
- **Shared images.** All languages of a guide reference the same images. Do not
  duplicate screenshots per language.
- **The folder path is the category.** Every parent segment of the path must
  have a matching `categories/<...>.yaml` file, for example
  `categories/gameserver.yaml` and `categories/gameserver/aloft.yaml`.

---

## Frontmatter

Every Markdown file starts with a YAML frontmatter block, fenced by `---`. The
frontmatter is the contract between your guide and the website: it controls the
page title, the ordering, the search keywords and the metadata.
[`tutorial-template.en.md`](./tutorial-template.en.md) and
[`tutorial-template.de.md`](./tutorial-template.de.md) carry the same field set
in the same order, ready to copy.

### Required fields

| Field         | Type   | Description                                                                                                                                                                   |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`        | string | Per-language single-segment kebab-case slug. For `en.md` it **must** equal the leaf folder name (the canonical anchor); for `de.md` it is the German slug for that language.   |
| `language`    | string | Language code of this file. Must match the filename: `en.md` gives `en`, `de.md` gives `de`.                                                                                    |
| `title`       | string | Human-readable title. Becomes the heading of the page. Do not repeat it as a heading in the body.                                                                              |
| `description` | string | One-sentence summary, under 160 characters. Used as the meta description and on guide cards.                                                                                   |
| `date`        | date   | Publication date, `YYYY-MM-DD`.                                                                                                                                                |

The website itself only refuses a file that is missing `slug`, `language`,
`title` or `date`, but a guide without a `description` gets an empty teaser, so
treat it as required.

There is **no `category` field**. The folder path
`tutorials/<group>/[<section>/][<subcategory>/]<topic>/` determines
categorisation, and every parent segment must have a matching
`categories/<...>.yaml`.

### Optional fields

| Field                 | Type     | Description                                                                                                                                     |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `tags`                | string[] | Free-form tags for search and related content. Most guides carry an empty list.                                                                    |
| `visibility`          | string   | `public`, `internal` or `draft`. Defaults to `public`.                                                                                             |
| `is_deprecated`       | boolean  | Marks the guide as outdated and awaiting a rewrite. The article page shows a warning banner below the header that points readers to support and the community Discord; the guide stays listed and indexed. The monthly review report lists flagged guides separately. Leave it out (or set `false`) for current guides. Do not combine it with `is_featured`. |
| `updated`             | date     | Date of the last content change, `YYYY-MM-DD` like `date`. Leave the line out entirely while it would repeat `date`, an empty value is rejected.    |
| `cta`                 | string   | Which call-to-action block the page ends with: `gameserver`, `rootserver`, `domain` or `teamspeak`. Guides under `general/` carry none.             |
| `product_keys`        | string[] | Product keys this guide belongs to, for example `["minecraft"]`. Leave it out when no product exists for the topic.                                 |
| `author`              | string   | Display name shown on the page. Use `EmeraldHost Team` unless you want your own name on the page.                                                  |
| `author_link`         | string   | URL behind the author name, `https://emeraldhost.de` for the team.                                                                                 |
| `author_img`          | string   | Avatar key, `emeraldhost-team` for the team. That key is rendered with the site's own avatar; any other key needs a matching `header-images/authors/<key>.webp` file in this repository. |
| `author_description`  | string   | One sentence about the author, in this file's language.                                                                                            |
| `available_languages` | string[] | Languages this guide exists in. Every guide ships `["de", "en"]`; the language check fails otherwise.                                               |
| `short_title`         | string   | Label for lists and the sidebar. Shorter than `title`.                                                                                             |
| `sort`                | number   | Position inside the category, per language. Ask in the pull request if you are unsure.                                                             |
| `is_featured`         | boolean  | Lifts the guide to the top of its category page and into the overview group of the sidebar. An optional `featured_until` date (`YYYY-MM-DD`) ends the lift again. Reserved for a handful of guides, so propose it in the pull request. |
| `is_highlighted`      | boolean  | Gives the guide a star icon in the sidebar and in the search palette. Nothing else changes.                                                        |
| `related`             | string[] | Path-like references to sibling guides: the guide's folder path without the leading `/tutorials`, for example `gameserver/minecraft/install-plugins` or `general/create-network-trace`. |

The author block is four separate fields, not a nested object. There is no
`difficulty`, `estimated_time`, `last_reviewed`, `requires`, `product` or
`cover_image` field: none of them is read.

### Minimal valid example

File location: `tutorials/gameserver/minecraft/install-datapacks/en.md`

```yaml
---
slug: "install-datapacks"
language: "en"
title: "Install Data Packs on Your Minecraft Server"
description: "Add data packs to a Minecraft server hosted at EmeraldHost and check that they loaded."
date: "2026-05-20"
---
```

### Fuller example

This is the shape the whole corpus uses, in the order the files write it:

```yaml
---
slug: "install-datapacks"
language: "en"
title: "Install Data Packs on Your Minecraft Server"
description: "Add data packs to a Minecraft server hosted at EmeraldHost and check that they loaded."
tags: []
date: "2026-05-20"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install data packs"
sort: 12
related: ["gameserver/minecraft/install-plugins", "gameserver/minecraft/create-backup"]
---
```

---

## Markdown style guide

Guides are plain GitHub-flavoured Markdown: CommonMark, the GitHub extension
(tables, task lists, strikethrough, autolinks), footnotes and attribute blocks.
There is no MDX and no component compiler, so a tag that looks like a component
is not one. The website unwraps it and only its text survives.

[`tutorials/general/markdown-showcase/en.md`](./tutorials/general/markdown-showcase/en.md)
demonstrates every construct that actually renders, and
[the rendered page on the website](https://emeraldhost.de/en/guides/general/markdown-showcase)
shows how each one looks. If it is not in the showcase, do not use it.

### Headings

- **Do not write a level-one heading in the body.** The page heading comes from
  `title` in the frontmatter. A second one breaks the table of contents.
- **Use `##` for top-level sections.** A typical guide runs: a short intro
  paragraph, `## Prerequisites`, one `##` section per part of the procedure, an
  optional `## Troubleshooting`, and a closing section.
- **Use `###` for subsections.** Avoid going deeper than `####`.
- Headings are sentence case: "Install the mods", not "Install The Mods".

### Paragraphs and tone

- Write short paragraphs. One idea per paragraph.
- Address the reader as "you". In German, capitalize "Du", "Dich", "Dir",
  "Dein".
- Be friendly but precise. Guides are reference material, not blog posts.
- Avoid filler ("simply", "just", "obviously"). The reader is here because they
  do not yet know.
- **No em-dashes.** Replace them with a comma, a colon or a period.

### Code fences

Every code fence **must** carry a language tag. The tag drives syntax
highlighting and the copy button. Common tags:

- `bash` for shell commands
- `powershell` for PowerShell
- `yaml` for config and frontmatter
- `json` for JSON
- `ini` for `.ini`, `.conf` and `.env` style files
- `properties` for Java `.properties`
- `nginx`, `apache` for webserver configs
- `text` for plain output, ASCII art or content with no language

A fence can also carry a title, which renders as a filename above the block:

````markdown
```bash title="install.sh"
apt update
apt install -y nginx
```
````

Inline code uses single backticks: `server.properties`, `25565`,
`systemctl restart sshd`.

### Highlighted boxes (GitHub alerts)

Highlighted boxes are GitHub alert blockquotes. Five types render, and the page
supplies the heading itself, so **do not write the label into the body**:

```markdown
> [!NOTE]
> This guide applies to every plan.

> [!TIP]
> Take a snapshot before every update.

> [!IMPORTANT]
> The `--purge` option also removes configuration files.

> [!WARNING]
> A restart disconnects active SFTP sessions.

> [!CAUTION]
> `rm -rf /var/lib/minecraft` deletes your whole world.
```

| Alert          | Heading in `en.md` | Heading in `de.md` |
| -------------- | ------------------ | ------------------ |
| `[!NOTE]`      | Note               | Hinweis            |
| `[!TIP]`       | Tip                | Tipp               |
| `[!IMPORTANT]` | Important          | Wichtig            |
| `[!WARNING]`   | Warning            | Achtung            |
| `[!CAUTION]`   | Caution            | Vorsicht           |

The website prints the heading in the language of the file, so never write the
label into the body yourself. The marker itself stays English in both languages:
write `> [!WARNING]` in `de.md` too.

An alert can hold several paragraphs, lists and fences. Every line needs the
blockquote prefix, and the block needs a blank line above and below it. When the
box needs its own title, one the alert type does not already say, write it as a
bold first line inside the alert.

`<Callout type="…">` is **not** a component. It is a leftover from the older
website; the website unwraps it, and the box, the colour and the icon are all
lost. A few old guides still contain it. Replace it with the matching alert when
you touch one.

### Steps

Numbered procedures are ordinary Markdown ordered lists. The step title is bold
and ends with a backslash: that is the hard line break, so the description starts
on the next line inside the same list item.

````markdown
1. **Download the modpack**\
   Open the [CurseForge modpack page](https://www.curseforge.com/minecraft/modpacks)
   and download the server-side ZIP.

   ```bash
   wget https://example.com/modpacks/foo-server.zip
   ```

2. **Upload to the server**\
   Use SFTP to upload the ZIP into your game server's root directory.

   ![SFTP upload dialog](images/sftp-upload.webp)
````

The trailing backslash matters. Without it a plain newline is only a soft break
and the title and the description collapse into one line. `<Step title="…">` is
not a component either, for the same reason as `<Callout>`.

### Tables

Standard GitHub-flavoured Markdown tables work. Keep them narrow enough to be
readable on a phone:

```markdown
| Port  | Protocol | Purpose          |
| ----- | -------- | ---------------- |
| 25565 | TCP      | Minecraft client |
| 25575 | TCP      | RCON             |
```

### Lists

- Use `-` for unordered lists. Consistency over variety.
- Use `1.` for ordered lists; rendered numbers do not have to match the source.
- Indent nested lists by two spaces.

### Task lists, footnotes and anchors

```markdown
- [x] Server stopped
- [ ] Backup created

An inline reference[^1] with its definition at the end of the file.

[^1]: Run every command as root or via `sudo`.

<a name="custom-anchor"></a>

### My section
```

The attribute-block form (`### My section {#custom-anchor}`) renders the same
here but shows up as literal text on github.com, so prefer the `<a name>` form.

### Raw HTML

Markdown first: if a construct has a Markdown equivalent, use it. `**bold**`,
never `<b>`; a hard break (trailing backslash), never `<br>`; `![alt](src)`,
never `<img>`.

Allowed, because the showcase demonstrates them and the website keeps them:

- `<details>` and `<summary>` for collapsible blocks
- `<kbd>` for keys, `<mark>` for highlights, `<u>` for underline, `<sub>` and
  `<sup>`
- `<a name="…"></a>` for a custom heading anchor
- `<video controls …>` when you need attributes the `![clip](videos/x.mp4)`
  shorthand does not offer

Everything else falls into three groups, none of them worth writing:

- `<Callout>` and `<Step>` are unwrapped by the website. The text survives; the
  box, the colour and the title are lost. Use an alert or a bold step title.
- `<script>` and `<style>` are dropped with their content.
- `<div>`, `<span>` and a raw `<table>` do survive on the website, but nothing in
  the showcase uses them and no styling exists for them, so write Markdown
  instead. A Markdown table renders through that same `<table>`.

If you need something this guide does not cover, open an issue rather than
inventing a tag.

### Screenshot filenames

Screenshots come out of browsers and screen recorders with names like
`chrome_AbCd123.png` or `Screenshot 2026-05-31 at 14.22.png`. **Rename them
before you commit.** Use semantic, kebab-case names that describe what the image
shows:

| Bad                                  | Good                         |
| ------------------------------------ | ---------------------------- |
| `chrome_AbCd123.png`                 | `modpack-search.webp`        |
| `Screenshot 2026-05-31 at 14.22.png` | `forge-installer-step3.webp` |
| `image1.png`                         | `sshd-config-port.webp`      |

---

## Cross-references

Linking between guides makes the documentation feel like one product instead of
a pile of articles.

- **Use the canonical folder path, not file paths.** Link to `/tutorials/`
  followed by the guide's folder path, the same path the folder has under
  `tutorials/`, with the English leaf name in both languages. The website
  resolves the link to the reader's current language automatically.
- **Do not include a language prefix** (`/en/`, `/de/`) in cross-references
  inside guides. The website handles it.
- **Do not link `.md` files directly.** Those URLs do not exist on the website,
  and the link check fails on them.
- **`related` is not a link.** It carries the same path *without* the
  `/tutorials` prefix: `gameserver/minecraft/install-plugins`.

Examples:

```markdown
Before you start, make sure you have followed
[Accept the Minecraft EULA](/tutorials/gameserver/minecraft/accept-minecraft-eula).

If something breaks, see [Create a Backup](/tutorials/gameserver/minecraft/create-backup).
```

External links use full URLs and open in the same tab by default. Only mark an
external link explicitly if the context is ambiguous.

---

## Images and screenshots

Images live next to the Markdown that references them, in the guide's `images/`
subfolder.

```text
tutorials/gameserver/minecraft/install-datapacks/
  en.md
  de.md
  images/
    01-datapacks-folder.webp
    02-console-pack-loaded.webp
```

Both languages share the `images/` folder. Filenames are language-neutral and
prefixed with a two-digit step number (`01-`, `02-`, …) so they sort naturally in
the file tree.

Reference them with a **relative** path:

```markdown
![Forge installer, with "Install server" selected](images/forge-installer-step3.webp)
```

Never hard-code an absolute URL to raw GitHub content. Relative is correct.

Videos follow the same rule in a `videos/` folder next to the Markdown files,
referenced relatively as `![Clip](videos/clip.mp4)`.

### Image rules

- **Format:** WebP wherever possible. PNG only when transparency or pixel
  precision matters. Avoid JPEG for interface screenshots; it muddies text.
- **Size:** Keep each file under **500 KB**. Most screenshots compress to
  100 to 300 KB as WebP at quality 80.
- **Dimensions:** Max 1920px wide. Resize before you commit.
- **Alt text:** Required by review. Describe what the image shows, not
  "screenshot of the modpack page". Screen readers and search engines both read
  it.
- **No animated GIFs.** If you need motion, use a short video (see the showcase)
  or break the motion into numbered steps.
- **Crop tight.** Do not include the whole browser window unless the address bar
  or the tab title is part of the lesson.
- **Redact secrets.** Tokens, IP addresses of other customers, real email
  addresses. When in doubt, blur.

---

## Translations

**Every guide ships in both languages.** The language check walks the tree and
fails when a leaf is missing `de.md` or `en.md`, or when either file declares
something other than `available_languages: ["de", "en"]`. It runs locally with
`npm run check-languages`, and a reviewer does not merge a guide that exists in
one language only.

If you can write only one of the two languages, open the pull request anyway and
say so in the description. Someone will help with the second file before the
merge.

- **One file per language**, named by language code: `en.md`, `de.md`.
- **Same frontmatter keys, translated values.** `title`, `description`,
  `short_title`, `author_description` and the body get translated. `slug` differs
  per language (see [Per-language slugs](#per-language-slugs)); the leaf folder
  name stays English in both.
- **`available_languages` is written into the file**, not derived. Keep it
  `["de", "en"]`.
- **Translation status notice.** If a German page lags behind English after a
  content update, say so in an alert at the top of the outdated page:

  ```markdown
  > [!NOTE]
  > Diese Seite wurde zuletzt am 2026-03-01 aktualisiert. Die englische Version ist neuer.
  ```

---

## Naming conventions

Consistent names make the URLs predictable and the repository navigable.

### Canonical leaf folder name (the English slug)

- **Language:** English.
- **Case:** lowercase, kebab-case.
- **Single segment**, no slashes.
- **Verbs:** start with an action verb when it fits: `install-`, `configure-`,
  `change-`, `migrate-`, `restore-`, `secure-`.
- **No version numbers** in slugs unless the guide is genuinely version-specific
  and a newer version has its own guide. Prefer evergreen slugs and date the
  body content instead.
- **Examples:**
  - `install-minecraft-mods`
  - `change-ssh-port`
  - `setup-teamspeak-server`
  - `migrate-domain-to-emeraldhost`
  - `secure-rootserver-with-fail2ban`

### Per-language slugs

The `slug` frontmatter field is the single-segment slug for that language. The
English file uses the same value as the leaf folder name (the canonical anchor);
the German file uses the German topic slug, for example `admin-hinzufuegen` for
an English folder called `add-admin`.

### File names

- **Always `<lang>.md`** at the root of the guide folder.
- **The folder path is English.** The German title and the German `slug` in the
  frontmatter are what readers see for the German page; the folder path stays
  English so cross-language links line up.

### Image names

- kebab-case, describing the content: `modpack-search.webp`,
  `firewall-rule-22.webp`.
- WebP extension where possible. PNG is fine for diagrams.

### Branch names

- `tutorial/<slug>` for new guides: `tutorial/change-ssh-port`.
- `fix/<slug>-<short>` for fixes: `fix/install-minecraft-mods-broken-link`.
- `translate/<slug>-<lang>` for translations: `translate/change-ssh-port-de`.

### Commit messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
docs(install-minecraft-mods): add Forge 1.20.4 instructions
fix(change-ssh-port): correct firewall command for Debian 12
docs(change-ssh-port): translate to German
```

---

## Checks

You can open a pull request without installing anything: the checks below run on
it automatically. If you would rather see the result before you push, you need
Node and one command:

```bash
npm install
npm run check
```

That runs four checks:

| Command                    | What it checks                                                          | On the pull request |
| -------------------------- | ----------------------------------------------------------------------- | ------------------- |
| `npm run frontmatter`      | Required fields, slug rules, and a category file for every path segment | Blocks the merge    |
| `npm run lint`             | Markdown formatting                                                     | Blocks the merge    |
| `npm run check-links`      | Internal links and image paths                                          | Blocks the merge    |
| `npm run check-languages`  | Both languages present, with matching `available_languages`             | Blocks the merge    |

Each one also runs on its own if you want to narrow down a failure.

All four block the merge, so running `npm run check` before you push is the
fastest way to avoid a red pull request.

---

## PR checklist

Before you mark your pull request ready for review, walk through this list.
Reviewers use the same list, so checking it yourself shortens the round trip.

Accepted contributions are rewarded with EmeraldHost credit. The amounts and the
way your customer number reaches us are in
[Your reward](./README.md#your-reward).

- [ ] Branch name follows the [naming convention](#branch-names).
- [ ] Folder path is `tutorials/<group>/[<section>/][<subcategory>/]<topic>/`,
      all kebab-case, with `<topic>` being the canonical English slug.
- [ ] Every parent segment of the path has a matching `categories/<...>.yaml`
      file.
- [ ] File name is `<lang>.md`, so `en.md` or `de.md`.
- [ ] Frontmatter contains `slug`, `language`, `title`, `description` and
      `date`.
- [ ] `slug` is a single-segment kebab-case string with no slashes. For `en.md`
      it equals the leaf folder name; for `de.md` it is the German topic slug.
- [ ] `language` matches the filename.
- [ ] `description` is one sentence, under 160 characters.
- [ ] Both `de.md` and `en.md` exist and declare
      `available_languages: ["de", "en"]`.
- [ ] The body has no level-one heading. Top-level sections use `##`.
- [ ] Every code fence has a language tag.
- [ ] Steps are ordered-list items with a bold title and a trailing backslash.
- [ ] Highlighted boxes are GitHub alerts (`> [!NOTE]` and friends), not
      `<Callout>`.
- [ ] Raw HTML is limited to the tags the showcase demonstrates; `<b>`, `<br>`
      and `<img>` are written as Markdown instead.
- [ ] No em-dashes anywhere in the prose.
- [ ] Cross-references use `/tutorials/` plus the guide's folder path, not file
      paths; `related` uses the same path without the `/tutorials` prefix.
- [ ] Screenshots renamed from `chrome_AbCd123.png` to semantic names.
- [ ] All images live in the guide's `images/` folder and are referenced
      relatively as `images/foo.webp`.
- [ ] Images are WebP where possible, each under 500 KB, with descriptive alt
      text.
- [ ] No secrets, tokens or other customers' IP addresses in screenshots.
- [ ] You have read the guide once in full and it makes sense end to end.
- [ ] Commit messages follow Conventional Commits.
- [ ] The pull request description explains the "why", not only the "what".
- [ ] If you want the EmeraldHost credit, your customer number from
      [Account](https://emeraldhost.de/en/dashboard/account) is in the pull
      request.

---

## Code of conduct and license

### Code of conduct

Be respectful, be patient, assume good intent. We do not tolerate harassment or
discriminatory behaviour, in issues, in pull requests or in reviews. Reviewers
hold themselves to the same standard. The full text is in the repository as the
[Code of Conduct](./CODE_OF_CONDUCT.md).

### License

Everything in this repository is published under the
[MIT license](./LICENSE). By opening a pull request you agree that your
contribution is licensed under it and that you have the right to submit it.

Screenshots of third-party software, for example the Minecraft launcher,
CurseForge or the TeamSpeak client, remain owned by their respective vendors. We
use them for instructional purposes.

If any of that is unclear, ask in the pull request before merging.

---

Thanks for contributing. Every guide you write saves dozens of support tickets
and helps the next person who runs into the same problem at 2 a.m.
