---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Citadel Forged with Fire Server"
description: "Add a savegame to a Citadel Forged with Fire server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/citadel-forged-with-fire/add-admin", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/join-server"]
---

In Citadel Forged with Fire a save is **not a single file but a complete folder**. It contains the world data as well as the data of all players – the character data is named after the **SteamID64** of the respective player.

> [!NOTE]
> You do **not** have to enter a world or save name in any configuration file. Your server always loads the save that is present in the savegame folder – the server name has nothing to do with it.

> [!TIP]
> Create a [backup](/tutorials/gameserver/citadel-forged-with-fire/create-backup) of your current save before uploading, in case you want to switch back later.

## Find your local savegame

If you want to transfer a save from your PC, you can find it in the installation folder of the game – **not** in the `AppData` directory:

1. **Open your Steam library**\
   Open Steam and switch to your **Library**.

2. **Open the local files**\
   Right-click **Citadel Forged with Fire**, select **Manage** and then **Browse local files**.

3. **Open the savegame folder**\
   In the window that opens, navigate to the following directory:

   ```text
   Citadel\Saved\SaveGames
   ```

4. **Copy the entire content**\
   You need the **entire content** of this folder. Individual files from it do not make a usable save.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it keeps saving automatically and would overwrite your uploaded files again.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Citadel/Saved/SaveGames/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start your server once so the folder structure gets created. Stop it again afterwards, before uploading the files.

4. **Remove the old save**\
   Delete the existing content of the folder.

   > [!WARNING]
   > This removes the current save of your server. Download it beforehand or create a [backup](/tutorials/gameserver/citadel-forged-with-fire/create-backup) in case you want to switch back.

5. **Upload the new save**\
   Upload the entire content of your savegame folder into this directory. Make sure to keep the folder structure unchanged.

6. **Start the server**\
   Start your server. Your uploaded save is now loaded on startup.

## Restore a save on your PC

If you want to use a save on your PC instead, the procedure is the same:

1. **Close the game**\
   Close Citadel Forged with Fire completely.

2. **Replace the files**\
   Copy the content of the save into the folder `Citadel\Saved\SaveGames` inside your game installation folder.

3. **Start the game**\
   Restart the game – the save is now available to you.

> [!IMPORTANT]
> The character data is named after the SteamID64 of the respective player. If you take over a save from another server or from another PC, the characters remain tied to the same Steam accounts. A player with a different SteamID64 starts with a new character on that save.

> [!WARNING]
> Always transfer the **entire folder content**. World and player data belong together – if individual files are missing, the save can be incomplete or fail to load at all.

> [!TIP]
> See [Download savegame](/tutorials/gameserver/citadel-forged-with-fire/download-savegame) for how to back up the save of your server.
