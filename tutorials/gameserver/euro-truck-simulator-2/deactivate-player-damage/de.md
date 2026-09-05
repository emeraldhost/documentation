---
slug: "spieler-schaden-deaktivieren"
language: "de"
title: "So deaktivierst Du Spieler-Schaden auf Deinem Euro Truck Simulator 2 Server"
description: "Schritt-für-Schritt-Anleitung, wie Du in Euro Truck Simulator 2 den Spieler-Schaden deaktivieren kannst."
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["euro-truck-simulator-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler-Schaden deaktivieren"
sort: 6
related: ["gameserver/euro-truck-simulator-2/add-mods", "gameserver/euro-truck-simulator-2/create-backup", "gameserver/euro-truck-simulator-2/join-server", "gameserver/euro-truck-simulator-2/kick-ban-players"]
---

1. **Server auswählen**\
   Öffne Dein Dashboard und wähle Deinen Euro Truck Simulator 2 Server aus.

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
