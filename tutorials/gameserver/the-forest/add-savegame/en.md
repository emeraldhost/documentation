---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your The Forest Server"
description: "Add a savegame to a The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/the-forest/add-admin", "gameserver/the-forest/create-backup", "gameserver/the-forest/download-savegame", "gameserver/the-forest/join-server"]
---

The Forest has **no world name**, it uses five fixed **save slots** (`1` to `5`) instead. A savegame is always a complete folder named `Slot1` to `Slot5` – not a single file. You upload that folder with all of its contents to your server and then set which slot should be loaded.

> [!TIP]
> Create a [backup](/tutorials/gameserver/the-forest/create-backup) of your current server save before uploading, in case you want to switch back later.

## Find your local savegame

1. **Open the savegame folder**\
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %userprofile%\AppData\LocalLow\SKS\TheForest
   ```

2. **Choose the right subfolder**\
   Open the folder whose name is a long sequence of numbers – that is your SteamID64. Inside it, switch to the `Multiplayer` folder.

   > [!NOTE]
   > `Multiplayer` contains the worlds in which you were the host yourself, `SinglePlayer` your singleplayer worlds. For a dedicated server you use a savegame from `Multiplayer`.

3. **Select the slot folder**\
   Inside you find the folders `Slot1` to `Slot5`. Choose the folder of the savegame you want to transfer – you need the **complete folder** including its contents.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /TheForestDedicatedServer_Data/Multiplayer/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.

4. **Upload the slot folder**\
   Upload the complete folder `Slot1` (or `Slot2` to `Slot5`) with all of its files into this directory. If a folder with the same name already exists there, delete it first or rename your uploaded folder to a free slot number.

5. **Set the slot in the configuration**\
   Open the following file:

   ```text
   /TheForestDedicatedServer_Data/forest/config/config.cfg
   ```

   Enter the number of the slot you uploaded:

   ```text
   slot 1
   ```

6. **Set Init Type to Continue**\
   Open the **dashboard**, switch to the **Settings** and change the **Init Type** field from `New` to `Continue`.

7. **Start the server**\
   Save all changes and start your server. On startup it now loads your uploaded savegame.

> [!IMPORTANT]
> **Init Type** has to be set to `Continue`. If the value stays on `New`, the server generates a fresh world on every start and your progress is not saved – your uploaded savegame would be lost.

> [!WARNING]
> Some values in `config.cfg` are rewritten on server start from the fields in the dashboard – among them `initType`, `serverName`, `serverPassword`, `serverPlayers`, `difficulty`, the ports and `serverSteamAccount`. Only change those values in the dashboard. The `slot` value is not affected and stays in the file.

> [!CAUTION]
> **Do not forget the Steam Account Token**
>
> Without a valid Steam Game Server Login Token (GSLT) your server runs anonymously – player data and savegames may then not be stored correctly. Create a token with **App ID 242760** at [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) and enter it in the dashboard under **Settings** in the **Steam Account Token** field.

> [!NOTE]
> The server saves automatically. How often is controlled by the `serverAutoSaveInterval` value in `config.cfg` – the value is given in minutes, and values below `15` are not possible.
