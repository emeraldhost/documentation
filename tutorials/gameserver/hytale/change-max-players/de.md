---
slug: "max-spieler-aendern"
language: "de"
title: "So änderst Du die maximale Spieleranzahl auf einem Hytale Server"
description: "Maximale Spieleranzahl auf einem Hytale Server ändern"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Max Spieler ändern"
sort: 6
related: ["gameserver/hytale/add-admin", "gameserver/hytale/change-gamemode", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd"]
---

> [!TIP]
> **Hinweis**
>
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So änderst Du die maximale Spieleranzahl

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **Spieleranzahl festlegen**\
   Suche nach der Einstellung `MaxPlayers` und ändere den Wert:

   ```json
   "MaxPlayers": 20
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

> [!WARNING]
> Eine höhere Spieleranzahl bedeutet nicht automatisch, dass der Server so viele Spieler verarbeiten kann. Der verfügbare RAM ist entscheidend für die tatsächliche Performance.
