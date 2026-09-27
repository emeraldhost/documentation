---
slug: "motd-aendern"
language: "de"
title: "So änderst Du die MOTD auf einem Hytale Server"
description: "MOTD auf einem Hytale Server ändern"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "MOTD ändern"
sort: 9
related: ["gameserver/hytale/change-max-players", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-server-name", "gameserver/hytale/change-time"]
---

Die MOTD (Message of the Day) ist eine kurze Nachricht, die Spielern beim Beitreten angezeigt wird.

> [!NOTE]
> Stoppe Deinen Server, bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So änderst Du die MOTD

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **MOTD festlegen**\
   Suche nach der Einstellung `MOTD` und ändere den Wert:

   ```json
   "MOTD": "Willkommen auf meinem Server!"
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

Dein Server übermittelt die neue MOTD an Spieler, die ihm beitreten. Standardmäßig ist der Wert leer (`"MOTD": ""`).

> [!NOTE]
> In der **Server Discovery** erscheint nicht die MOTD, sondern die Beschreibung aus Deinem Server-Profil im Hytale-Account.
