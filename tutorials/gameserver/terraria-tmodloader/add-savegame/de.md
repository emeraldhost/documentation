---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Terraria tModLoader Server hinzu"
description: "Savegame auf einen Terraria tModLoader Server hochladen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/terraria-tmodloader/add-admin", "gameserver/terraria-tmodloader/add-mods", "gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup"]
---

Du kannst Dein lokales Savegame auf Deinen Server übertragen und dort weiterspielen. Das Savegame besteht aus den `.wld` und `.twld` Dateien.

> [!WARNING]
> Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls Du das aktuelle Savegame behalten möchtest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deine `.wld` und `.twld` Dateien in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /.local/share/Terraria/tModLoader/Worlds/
   ```

4. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.

> [!TIP]
> Dein lokales Savegame findest Du auf Deinem PC unter `%USERPROFILE%\Documents\My Games\Terraria\tModLoader\Worlds\`.
