---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem The Bus Server hinzu"
description: "Savegame auf einen The Bus Server hochladen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 12
related: ["gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-mods", "gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players"]
---

Du kannst ein Savegame auf Deinen Server übertragen und dort weiterspielen.

> [!WARNING]
> Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls Du das aktuelle Savegame behalten möchtest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deine Save-Dateien in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /TheBus/Saved/SaveGames/
   ```

4. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.
