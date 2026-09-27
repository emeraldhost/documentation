---
slug: "server-name-aendern"
language: "de"
title: "So änderst Du den Server-Namen auf einem Hytale Server"
description: "Server-Name auf einem Hytale Server ändern"
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
short_title: "Server Name ändern"
sort: 16
related: ["gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd", "gameserver/hytale/change-time", "gameserver/hytale/change-weather"]
---

> [!NOTE]
> Stoppe Deinen Server, bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So änderst Du den Server-Namen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **Name ändern**\
   Suche nach der Einstellung `ServerName` und ändere den Wert. Standardmäßig steht dort `Hytale Server`:

   ```json
   "ServerName": "Mein Hytale Server"
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

Dein Server übermittelt den neuen Namen an Spieler, die ihm beitreten.

> [!NOTE]
> In der gespeicherten Server-Liste steht der Name, den jeder Spieler beim Hinzufügen des Servers selbst vergibt (siehe [Server beitreten](/tutorials/gameserver/hytale/join-server)). In der **Server Discovery** zeigt Hytale den Namen aus Deinem Server-Profil im Hytale-Account an.
