---
description: Serverbeschreibung und Server-Links auf einem The Bus Server ändern
---

# So änderst du die Serverbeschreibung auf deinem The Bus Server

Auf deinem The Bus Server kannst du eine **Serverbeschreibung** und **Server-Links** festlegen, z.B. zu deiner Website oder deinem Discord. Beides legst du in der Datei `ServerSettings.cfg` fest.

:::: info Hinweis
Anders als Servername, Server-Passwort, Admin-Passwort, Serverliste und maximale Spieleranzahl überschreibt die Verwaltung die Serverbeschreibung und die Server-Links beim Start nicht. Deine Änderungen in der Datei bleiben also erhalten.
::::

:::: tip Tipp
Erstelle vor dem Bearbeiten ein [Backup](backup-erstellen.md) deines Servers. So kannst du die Datei bei einem Fehler schnell wiederherstellen.
::::

## Serverbeschreibung in der ServerSettings.cfg ändern

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen</b><br>
   Öffne die Datei `/TheBus/Settings/ServerSettings.cfg` (JSON-Format) und suche den Eintrag `serverDescription`.

4. <b>Beschreibung und Links eintragen</b><br>
   Trage unter `description` deinen Beschreibungstext und unter `externalLinks` deine Links ein, zum Beispiel:

   ```json
   "serverDescription": {
       "description": "Entspannte Linienfahrten in Berlin – jeden Abend ab 19 Uhr",
       "externalLinks": [
           { "type": "Website", "link": "https://example.com" },
           { "type": "Discord", "link": "https://discord.gg/beispiel" },
           { "type": "YouTube", "link": "https://youtube.com/@beispiel" }
       ]
   }
   ```

   Der Eintrag steht innerhalb der bestehenden Datei. Folgt danach noch ein weiterer Schlüssel, bleibt das Komma nach der schließenden geschweiften Klammer stehen.

   Neben `Website`, `Discord` und `YouTube` sind als `type` auch `FACEBOOK` (in Großbuchstaben) und `Instagram` möglich. Übernimm die Schreibweise der Werte genau so. Brauchst du einen Link nicht, entferne die ganze Zeile und achte darauf, dass nach dem letzten Eintrag in der Liste kein Komma steht.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Einstellungen nicht mehr einlesen kann.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server wieder.

:::: info Hinweis
TML Studios dokumentiert den Aufbau dieses Eintrags nicht offiziell. Die Schlüssel `serverDescription`, `description` und `externalLinks` sowie die möglichen `type`-Werte stammen aus einer Community-Quelle. Sieht der Eintrag in deiner Datei anders aus, übernimm den Aufbau aus deiner Datei und ändere nur die Texte und Links.
::::
