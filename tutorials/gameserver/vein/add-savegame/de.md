---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem VEIN Server hinzu"
description: "Savegame auf einen VEIN Server hochladen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["vein"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/vein/add-admin", "gameserver/vein/create-backup", "gameserver/vein/download-savegame", "gameserver/vein/enable-whitelist"]
---

Du kannst Dein lokales Savegame auf Deinen Server übertragen und dort weiterspielen. Das Savegame besteht aus `.vns` Dateien (z.B. `Server.vns`).

> [!WARNING]
> Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls Du das aktuelle Savegame behalten möchtest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deine `.vns` Dateien (z.B. `Server.vns`) in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /Vein/Saved/SaveGames/
   ```

4. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.

> [!TIP]
> Dein lokales Savegame findest Du auf Deinem PC im Steam-Verzeichnis unter `<Steam>\steamapps\common\VEIN\Saved\SaveGames\`.
