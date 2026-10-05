---
slug: "server-beschreibung-aendern"
language: "de"
title: "So änderst Du die Serverbeschreibung auf Deinem The Bus Server"
description: "Serverbeschreibung und Server-Links auf einem The Bus Server ändern"
tags: []
date: "2026-10-05"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Serverbeschreibung ändern"
sort: 23
related: ["gameserver/the-bus/configure-server", "gameserver/the-bus/join-server", "gameserver/the-bus/add-admin", "gameserver/the-bus/troubleshoot-server"]
---
Auf Deinem The Bus Server kannst Du eine **Serverbeschreibung** und **Server-Links** festlegen, z.B. zu Deiner Website oder Deinem Discord. Beides legst Du in der Datei `ServerSettings.cfg` fest.

> [!NOTE]
> Anders als Servername, Server-Passwort, Admin-Passwort, Serverliste und maximale Spieleranzahl überschreibt die Verwaltung die Serverbeschreibung und die Server-Links beim Start nicht. Deine Änderungen in der Datei bleiben also erhalten.

> [!TIP]
> Erstelle vor dem Bearbeiten ein [Backup](/tutorials/gameserver/the-bus/create-backup) Deines Servers. So kannst Du die Datei bei einem Fehler schnell wiederherstellen.

## Serverbeschreibung in der ServerSettings.cfg ändern

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen**\
   Öffne die Datei `/TheBus/Settings/ServerSettings.cfg` (JSON-Format) und suche den Eintrag `serverDescription`.

4. **Beschreibung und Links eintragen**\
   Trage unter `description` Deinen Beschreibungstext und unter `externalLinks` Deine Links ein, zum Beispiel:

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

   Neben `Website`, `Discord` und `YouTube` sind als `type` auch `FACEBOOK` (in Großbuchstaben) und `Instagram` möglich. Übernimm die Schreibweise der Werte genau so. Brauchst Du einen Link nicht, entferne die ganze Zeile und achte darauf, dass nach dem letzten Eintrag in der Liste kein Komma steht.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Einstellungen nicht mehr einlesen kann.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server wieder.

> [!NOTE]
> TML Studios dokumentiert den Aufbau dieses Eintrags nicht offiziell. Die Schlüssel `serverDescription`, `description` und `externalLinks` sowie die möglichen `type`-Werte stammen aus einer Community-Quelle. Sieht der Eintrag in Deiner Datei anders aus, übernimm den Aufbau aus Deiner Datei und ändere nur die Texte und Links.
