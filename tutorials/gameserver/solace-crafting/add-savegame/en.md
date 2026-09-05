---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Solace Crafting Server"
description: "Add a savegame to a Solace Crafting server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["solace-crafting"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/solace-crafting/create-backup", "gameserver/solace-crafting/download-savegame", "gameserver/solace-crafting/join-server"]
---

In Solace Crafting a world is always a **complete folder** – the folder name is also the world name. Which world your server loads is defined in the configuration file `servercfg.dat` under `worldSaveToUse`.

> [!NOTE]
> By default the dedicated server uses the world folder `MultiplayerWorld`. If no world with that name exists, the server automatically creates a new world with the default settings on startup.

> [!TIP]
> Create a [backup](/tutorials/gameserver/solace-crafting/create-backup) of your current server save before uploading, in case you want to switch back later.

## Prepare the world in the client

The world settings – difficulty, seed, biomes and the various rates – are only defined when **creating a world inside the game**. They cannot be changed on the server afterwards. If you want to use your own settings, take the detour via the client:

1. **Create the world**\
   Launch Solace Crafting on your PC and create a new world with the settings you want.

2. **Close the game**\
   Leave the world and close the game so that all files are written completely.

## Find your local savegame

Your worlds are stored on your PC under:

```text
%USERPROFILE%\AppData\LocalLow\Big Kitty Games\Solace Crafting\Worlds
```

> [!TIP]
> Press `Windows key + R`, enter the path and confirm with Enter. Every subfolder in `Worlds` is one world – you need the **complete folder** including its contents.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /.config/unity3d/Big Kitty Games/Solace Crafting/Worlds/
   ```

   > [!NOTE]
   > The folder `.config` starts with a dot and is therefore hidden. Enable the display of hidden files in your SFTP client if you cannot see it. If the directory does not exist yet, start your server once so the folder structure is created, then stop it again.

4. **Upload the world folder**\
   Upload the complete world folder including all its files into this directory.

5. **Enter the world in the configuration**\
   Open the following file:

   ```text
   /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
   ```

   Set `worldSaveToUse` to the name of the world folder you uploaded:

   ```json
   "worldSaveToUse": "MyWorld",
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the configuration unreadable for the server.

   > [!TIP]
   > **Alternative**
   >
   > Instead of changing the value you can simply rename your uploaded folder to `MultiplayerWorld`. The default configuration then stays untouched.

6. **Start the server**\
   Save all changes and start your server. Your uploaded world is now loaded on startup.

> [!IMPORTANT]
> The folder name and the value of `worldSaveToUse` have to match exactly, including upper and lower case. If the name does not match, the server creates a new, empty world instead.

> [!WARNING]
> If a folder with the same name already exists in the target directory, the current save is overwritten. Download it beforehand if you want to keep it: [Download savegame](/tutorials/gameserver/solace-crafting/download-savegame).
