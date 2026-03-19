## Beschreibung

<!-- Beschreibe kurz, was dieser Pull Request ändert oder hinzufügt. -->

## Art der Änderung

- [ ] Neue Anleitung
- [ ] Bestehende Anleitung aktualisiert
- [ ] Fehlerbehebung
- [ ] Sidebar / Navigation
- [ ] Sonstiges

## Checkliste

### Allgemein
- [ ] Artikel existiert in **DE und EN**
- [ ] Artikel ist in der **Sidebar** eingetragen (DE + EN)
- [ ] Sidebar-Einträge sind **alphabetisch** sortiert
- [ ] Keine `title:` im Frontmatter (nur `description:`)

### Titel
- [ ] DE-Titel: `# So [verb] du ... auf deinem [Game] Server`
- [ ] EN-Titel: `# How to [Verb] ... on Your [Game] Server`
- [ ] Sidebar-Text DE: Kleinschreibung nach erstem Wort (z.B. "Mods hinzufügen")
- [ ] Sidebar-Text EN: Title Case (z.B. "Add Mods")

### Formatierung
- [ ] Schritte nutzen `<b>Kurzer Titel</b><br>` (2-4 Wörter)
- [ ] Beschreibung auf der **nächsten Zeile** mit 3 Leerzeichen Einrückung
- [ ] Admonitions nutzen `::::` (4 Colons), nicht `:::`
- [ ] Keine `<strong>` Tags
- [ ] Keine `**bold**` für Schritt-Titel
- [ ] Code-Blöcke mit Sprachangabe (z.B. ```bash, ```xml, ```json)

### Inhalt
- [ ] Verwaltung = "Verwaltung" (DE) / "dashboard" (EN)
- [ ] SFTP-Links: `[SFTP](../sftp-verbindung-herstellen.md)` (DE) / `[SFTP](../establish-sftp-connection.md)` (EN)
- [ ] Einstellungen die vom Webinterface überschrieben werden: Verwaltung nutzen, nicht Config-Datei
- [ ] Config-Änderungen: Warnung "Server vor Bearbeitung stoppen" vorhanden

### URLs
- [ ] Dateiname passt zum Inhalt (z.B. `mods-hinzufuegen.md`, `add-mods.md`)
- [ ] Einheitliche Benennung (Singular: `admin-hinzufuegen`, nicht `admins-hinzufuegen`)
- [ ] Keine Unterstriche in URLs (Bindestriche verwenden)
