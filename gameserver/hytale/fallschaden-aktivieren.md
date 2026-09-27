---
description: Fallschaden auf einem Hytale Server aktivieren oder deaktivieren
---

# So aktivierst du Fallschaden auf einem Hytale Server

Fallschaden bestimmt, ob Spieler und NPCs beim Fallen aus großer Höhe Schaden nehmen. Diese Einstellung wird pro Welt in der Welt-Konfiguration festgelegt.

:::: info Hinweis
Stoppe deinen Server, bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So aktivierst oder deaktivierst du Fallschaden per Konfiguration

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zu:
   ```
   /universe/worlds/<weltname>/config.json
   ```
   Ersetze `<weltname>` durch den Namen deiner Welt (z.B. `default`). Jede Welt hat ihre eigene `config.json`. Hast du mehrere Welten, passt du die Einstellung in jeder Welt einzeln an.

3. <b>Fallschaden-Einstellung ändern</b><br>
   Suche nach der Einstellung `IsFallDamageEnabled` und ändere den Wert:
   ```json
   "IsFallDamageEnabled": true
   ```
   - `true` - Fallschaden aktiviert (Standard)
   - `false` - Fallschaden deaktiviert

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

:::: info Hinweis
Für den Fallschaden gibt es keinen Befehl, weder unter `/world config` noch unter `/world settings`. Du kannst ihn nur über die Welt-Konfiguration ändern.
::::

:::: tip Tipp
Fallschaden zu deaktivieren ist besonders nützlich für Bau-Server oder kreative Welten, in denen Spieler ohne Risiko bauen können.
::::
