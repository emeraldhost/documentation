---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Project Zomboid Server hinzu"
description: "Mods auf einem Project Zomboid Server hinzufügen"
tags: []
date: "2025-11-03"
visibility: "public"
updated: "2026-04-10"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 4
related: ["gameserver/project-zomboid/add-admin", "gameserver/project-zomboid/add-savegame", "gameserver/project-zomboid/change-max-players", "gameserver/project-zomboid/change-server-description"]
---

Du kannst Steam Workshop Mods auf Deinem Server installieren, um das Spielerlebnis zu erweitern.

## Workshop-ID und Mod-ID herausfinden

1. **Steam Workshop öffnen**\
   Öffne den [Steam Workshop für Project Zomboid](https://steamcommunity.com/app/108600/workshop/) und suche den gewünschten Mod.

2. **Workshop-ID kopieren**\
   Die Workshop-ID findest Du in der URL der Workshop-Seite. Kopiere die Zahl nach `?id=`.

   > [!TIP]
   > **Beispiel**
   >
   > In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=2392709985` ist die Workshop-ID `2392709985`.

3. **Mod-ID finden**\
   Die Mod-ID findest Du auf der Workshop-Seite in der Beschreibung des Mods (oft als „Mod ID“ angegeben).

## Mods zum Server hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Config öffnen**\
   Öffne die Datei `ProjectZomboid.ini` unter:

   ```text
   /.cache/Server/ProjectZomboid.ini
   ```

4. **Mods eintragen**\
   Füge die Mod-IDs und Workshop-IDs hinzu, getrennt durch `;`:

   ```ini
   Mods=ModID1;ModID2;ModID3
   WorkshopItems=WorkshopID1;WorkshopID2;WorkshopID3
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```ini
   > Mods=jiggasGreenfireMelee;tsarslib
   > WorkshopItems=2392709985;2392987599
   > ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Die Mods werden beim Start automatisch heruntergeladen.

> [!IMPORTANT]
> Alle Spieler müssen die **gleichen Mods** über den Steam Workshop abonniert haben, um dem Server beitreten zu können.
