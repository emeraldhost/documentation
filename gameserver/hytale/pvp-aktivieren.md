---
description: PvP auf einem Hytale Server aktivieren oder deaktivieren
---

# So aktivierst du PvP auf einem Hytale Server

PvP (Player versus Player) ermöglicht es Spielern, gegeneinander zu kämpfen. Diese Einstellung wird pro Welt konfiguriert und ist standardmäßig deaktiviert.

:::: info Hinweis
Stoppe deinen Server, bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
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
   - `false` - PvP deaktiviert (Standard)

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## So aktivierst du PvP per Befehl

Per Befehl schaltest du PvP im laufenden Betrieb um. Die Änderung gilt sofort und wird in der Welt-Konfiguration gespeichert, ein Neustart ist nicht nötig.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   world config pvp true --world default
   ```
   Ersetze `default` durch den Namen deiner Welt. Um PvP zu deaktivieren, verwende `false`:
   ```
   world config pvp false --world default
   ```
   Die Konsole antwortet derzeit in beiden Fällen mit `PvP disabled for default`, auch wenn du PvP aktivierst. Die Einstellung wird trotzdem richtig gespeichert. Den tatsächlichen Stand zeigt dir `world settings pvp --world default` an, z.B. `PvP in world "default" is currently true`.

Admins können PvP auch direkt im Spiel umschalten. Ohne `--world` gilt der Befehl für die Welt, in der du dich gerade befindest:

```
/world config pvp true
```

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Option `--world`, sonst antwortet der Server mit `Sender must be a player or provide the --world option!`. Im Spiel benötigst du den `/` und Admin-Rechte, siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: tip Tipp
Alternativ funktioniert auch `world settings pvp set true --world default`. Dieser Befehl meldet den neuen Wert korrekt zurück, z.B. `PvP in world "default" set to "true" (was "false")`.
::::
