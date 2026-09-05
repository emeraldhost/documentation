---
slug: "add-mods"
language: "en"
title: "How to Install Mods on Your Barotrauma Server"
description: "Install mods on a Barotrauma server"
tags: []
date: "2026-03-07"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 4
related: ["gameserver/barotrauma/add-bots", "gameserver/barotrauma/add-custom-ranks", "gameserver/barotrauma/add-savegame", "gameserver/barotrauma/change-game-mode"]
---

You can install Steam Workshop mods on your server to enhance the gameplay experience.

> [!WARNING]
> Stop your server before installing mods. After a game update, mods may be incompatible and cause crashes.

## Download mods

1. **Subscribe in Steam Workshop**\
   Open the [Steam Workshop for Barotrauma](https://steamcommunity.com/app/602960/workshop/) and subscribe to the desired mods.

2. **Launch the game**\
   Launch Barotrauma on your PC so the mods are downloaded.

3. **Find mod folders**\
   The downloaded mods can be found on your PC at:

   ```text
   %LocalAppData%/Daedalic Entertainment GmbH/Barotrauma/WorkshopMods/Installed
   ```

   Each mod is stored in a folder with a numeric ID.

## Upload mods to the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload mods**\
   Upload the mod folders to the following directory:

   ```text
   /LocalMods/
   ```

   > [!TIP]
   > Rename the folders from the numeric ID to the mod name so you can identify them more easily. You can find the name in the `filelist.xml` inside each mod folder.

## Enable mods

1. **Open config_player.xml**\
   Open the file `config_player.xml` in the root directory of your server.

2. **Add mod entries**\
   Add an entry for each mod within the `<regularpackages>` section:

   ```xml
   <regularpackages>
     ...
     <package path="LocalMods/ModName/filelist.xml" enabled="true"/>
   </regularpackages>
   ```

   Replace `ModName` with the name of the mod folder. For multiple mods, simply add multiple entries:

   ```xml
   <regularpackages>
     ...
     <package path="LocalMods/HaloWeapons/filelist.xml" enabled="true"/>
     <package path="LocalMods/MoreMonsters/filelist.xml" enabled="true"/>
   </regularpackages>
   ```

3. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> Some mods need to be installed on both the server and all players. Check the mod description to see if a client-side installation is required.

> [!IMPORTANT]
> Do **not** place mods in the `WorkshopMods` folder on the server. This folder is managed by Steam and should not be modified manually.
