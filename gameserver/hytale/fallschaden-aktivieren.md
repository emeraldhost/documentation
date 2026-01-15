---
description: Fallschaden auf einem Hytale Server aktivieren oder deaktivieren
---

# So aktivierst du Fallschaden auf einem Hytale Server

Fallschaden bestimmt, ob Spieler beim Fallen aus großer Höhe Schaden nehmen. Diese Einstellung wird pro Welt konfiguriert.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So aktivierst oder deaktivierst du Fallschaden per Konfiguration

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zu:
   ```
   /universe/worlds/<weltname>/config.json
   ```
   Ersetze `<weltname>` durch den Namen deiner Welt (z.B. `default`).

3. <b>Fallschaden-Einstellung ändern</b><br>
   Suche nach der Einstellung `IsFallDamageEnabled` und ändere den Wert:
   ```json
   "IsFallDamageEnabled": true
   ```
   - `true` - Fallschaden aktiviert (Standard)
   - `false` - Fallschaden deaktiviert

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## So aktivierst du Fallschaden per Befehl

Admins können Fallschaden auch direkt im Spiel aktivieren oder deaktivieren:

```
/world config falldamage true
```

Um Fallschaden zu deaktivieren:

```
/world config falldamage false
```

:::: tip Hinweis
Fallschaden zu deaktivieren ist besonders nützlich für Bau-Server oder kreative Welten, in denen Spieler ohne Risiko bauen können.
::::
