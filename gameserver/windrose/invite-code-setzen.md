---
description: Invite Code auf einem Windrose Server setzen
---

# So setzt du den Invite Code auf deinem Windrose Server

Der Invite Code wird von Spielern benötigt, um deinen Server im Spiel zu finden. Du kannst ihn entweder über die Verwaltung oder über die Datei `ServerDescription.json` setzen.

:::: info Hinweis
Der Invite Code muss mindestens 6 Zeichen lang sein und darf nur die Zeichen `0-9`, `a-z` und `A-Z` enthalten. Er unterscheidet zwischen Groß- und Kleinschreibung. Wenn du keinen eigenen Code festlegst, wird beim Serverstart automatisch einer in der Datei `ServerDescription.json` erzeugt.
::::

## Über die Verwaltung

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Invite Code setzen</b><br>
   Trage den gewünschten Code im Feld **Invite Code** ein und speichere die Einstellung.

4. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderung übernommen wird.

## Über die Config-Datei

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>ServerDescription.json öffnen</b><br>
   Öffne die Datei `ServerDescription.json` unter:

   ```
   /R5/ServerDescription.json
   ```

4. <b>Invite Code ändern</b><br>
   Passe den Wert des Invite Codes in der Datei an.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.
