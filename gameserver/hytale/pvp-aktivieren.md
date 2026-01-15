---
description: PvP auf einem Hytale Server aktivieren oder deaktivieren
---

# So aktivierst du PvP auf einem Hytale Server

PvP (Player versus Player) ermöglicht es Spielern, gegeneinander zu kämpfen. Diese Einstellung wird pro Welt konfiguriert.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So aktivierst oder deaktivierst du PvP per Konfiguration

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zu:
   ```
   /universe/worlds/<weltname>/config.json
   ```
   Ersetze `<weltname>` durch den Namen deiner Welt (z.B. `default`).

3. <b>PvP-Einstellung ändern</b><br>
   Suche nach der Einstellung `IsPvpEnabled` und ändere den Wert:
   ```json
   "IsPvpEnabled": true
   ```
   - `true` - PvP aktiviert
   - `false` - PvP deaktiviert

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## So aktivierst du PvP per Befehl

Admins können PvP auch direkt im Spiel aktivieren oder deaktivieren:

```
/world config pvp true
```

Um PvP zu deaktivieren:

```
/world config pvp false
```

:::: tip Hinweis
Der Befehl erfordert Admin-Rechte und wirkt sich nur auf die aktuelle Welt aus.
::::
