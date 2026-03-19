## Description

<!-- Briefly describe what this pull request changes or adds. -->

## Type of Change

- [ ] New guide
- [ ] Updated guide
- [ ] Bug fix
- [ ] Sidebar / Navigation
- [ ] Other

## Checklist

### General
- [ ] Article exists in **DE and EN**
- [ ] Article is added to the **sidebar** (DE + EN)
- [ ] Sidebar entries are **alphabetically** sorted
- [ ] No `title:` in frontmatter (only `description:`)

### Titles
- [ ] DE title: `# So [verb] du ... auf deinem [Game] Server`
- [ ] EN title: `# How to [Verb] ... on Your [Game] Server`
- [ ] Sidebar text DE: lowercase after first word (e.g. "Mods hinzufügen")
- [ ] Sidebar text EN: Title Case (e.g. "Add Mods")

### Formatting
- [ ] Steps use `<b>Short Title</b><br>` (2-4 words)
- [ ] Description on **next line** with 3-space indent
- [ ] Admonitions use `::::` (4 colons), not `:::`
- [ ] No `<strong>` tags
- [ ] No `**bold**` for step titles
- [ ] Code blocks with language identifier (e.g. ```bash, ```xml, ```json)

### Content
- [ ] Dashboard = "Verwaltung" (DE) / "dashboard" (EN)
- [ ] SFTP links: `[SFTP](../sftp-verbindung-herstellen.md)` (DE) / `[SFTP](../establish-sftp-connection.md)` (EN)
- [ ] Settings overwritten by webinterface: use dashboard, not config file
- [ ] Config changes: warning "stop server before editing" present

### URLs
- [ ] Filename matches content (e.g. `mods-hinzufuegen.md`, `add-mods.md`)
- [ ] Consistent naming (singular: `admin-hinzufuegen`, not `admins-hinzufuegen`)
- [ ] No underscores in URLs (use hyphens)
