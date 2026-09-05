---
slug: "spieler-schaden-deaktivieren"
language: "de"
title: "So deaktivierst Du Spieler-Schaden auf Deinem American Truck Simulator Server"
description: "Schritt-für-Schritt-Anleitung, wie Du in American Truck Simulator den Spieler-Schaden deaktivieren kannst."
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["american-truck-simulator"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler-Schaden deaktivieren"
sort: 6
related: ["gameserver/american-truck-simulator/add-mods", "gameserver/american-truck-simulator/create-backup", "gameserver/american-truck-simulator/join-server", "gameserver/american-truck-simulator/kick-ban-players"]
---

1. **Dashboard öffnen**\
   Öffne Dein Dashboard und wähle Deinen American Truck Simulator Server aus.

2. **Datei-Browser öffnen**\
   Gehe zum Datei-Browser.

3. **Datei öffnen**\
   Öffne die Datei `server_config.sii`.

4. **Eintrag suchen**\
   Suche den folgenden Eintrag:

   ```text
   player_damage: true
   ```

5. **Wert ändern**\
   Ändere den Wert auf `false`.
