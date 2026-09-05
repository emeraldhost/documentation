---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Sons Of The Forest Server"
description: "Add a savegame to a Sons Of The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/sons-of-the-forest/add-admin", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/download-savegame", "gameserver/sons-of-the-forest/join-server"]
---

You can transfer a local save to your server to continue playing with an existing world.

> [!WARNING]
> Sons Of The Forest does **not** store player data such as inventory, position and clothing in the world savegame. After the import your buildings and the world state are preserved, but all players start with a new character.

## Find the local savegame

1. **Open savegame folder**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %userprofile%\AppData\LocalLow\Endnight\SonsOfTheForest\Saves
   ```

2. **Choose the right subfolder**\
   Open the folder named after your SteamID64 and inside it the folder `Multiplayer`. It contains all worlds in which you were the host yourself.

   > [!NOTE]
   > `MultiplayerClient` contains worlds in which you were only a guest, `Singleplayer` holds your single player worlds. For a dedicated server you need a save from `Multiplayer`.

3. **Identify the save**\
   Each save is a separate folder named with a random number (e.g. `1833122971`). It contains several files – among them various `.json` files and a `SaveData.zip` – that all belong together.

## Upload and apply the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Rename the folder**\
   Rename the save folder to a ten-digit number with leading zeros. This number will be your save slot.

   > [!TIP]
   > **Example**
   >
   > ```text
   > 0000000002
   > ```

4. **Upload the save**\
   Upload the complete folder including all files it contains to the following directory:

   ```text
   /serverconfig/Saves/DedicatedServer/Multiplayer/
   ```

5. **Set the save slot**\
   Open the file `/serverconfig/dedicatedserver.cfg` and adjust the following values:

   ```json
   "SaveSlot": 2,
   "SaveMode": "Continue",
   ```

   The number in `SaveSlot` must match the folder name without the leading zeros (`0000000002` therefore corresponds to `2`).

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the configuration unreadable for the server.

6. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> `SaveMode` must be set to `Continue`. If it is set to `New`, the slot will be overwritten with a freshly generated world on the next server start and your uploaded save will be lost.

> [!TIP]
> **Without renaming**
>
> You can also leave the folder name unchanged and instead enter the folder number directly as the save slot – for a folder named `1833122971` that would be `"SaveSlot": 1833122971`. All that matters is that the folder name and `SaveSlot` match.

> [!WARNING]
> If the folder `/serverconfig/Saves/DedicatedServer/Multiplayer/` does not exist yet, start the server once so the folder structure is created automatically. Stop the server again before uploading the files.

> [!TIP]
> Create a [backup](/tutorials/gameserver/sons-of-the-forest/create-backup) of your existing server savegame before uploading, in case you want to switch back later.
