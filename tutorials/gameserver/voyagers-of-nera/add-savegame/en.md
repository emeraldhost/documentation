---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Voyagers of Nera Server"
description: "Add a savegame to a Voyagers of Nera server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["voyagers-of-nera"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/voyagers-of-nera/create-backup", "gameserver/voyagers-of-nera/download-savegame", "gameserver/voyagers-of-nera/join-server"]
---

Voyagers of Nera has **no world name in the configuration**. Which world is loaded is decided solely by the folder placed inside `PersistedData`. A savegame is always a complete folder named after the server ID – not a single file.

> [!TIP]
> Create a [backup](/tutorials/gameserver/voyagers-of-nera/create-backup) of your current server save before uploading, in case you want to switch back later.

## Find your local savegame

You only need this section if you want to transfer a savegame from your own PC. If the savegame comes from another server, you already have the folder from [Download Savegame](/tutorials/gameserver/voyagers-of-nera/download-savegame).

1. **Open the savegame folder**\
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %localappdata%\BoatGame\Saved\PersistedData\nera
   ```

2. **Choose the right folder**\
   Inside you find one folder per world, each named after its server ID. Choose the folder of the savegame you want to transfer – you need the **complete folder** including its contents.

   > [!TIP]
   > **Which ID belongs to which world?**
   >
   > The server ID is shown in the game on the right next to each entry in the save selection screen. That way you can tell which folder belongs to which world.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /BoatGame/Saved/PersistedData/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.

4. **Remove the current savegame**\
   Delete the existing folder with the random string in its name. That is the world your server generated itself on the first start.

   > [!IMPORTANT]
   > Do **not** delete the `CustomConfig` folder. It holds your server settings – without it your server resets the game settings to their defaults.

5. **Upload the savegame**\
   Upload your complete savegame folder with all of its files into this directory.

   > [!WARNING]
   > **Caution**
   >
   > Make sure the folder does not end up nested. Correct is `/BoatGame/Saved/PersistedData/<server ID>/`, wrong would be `/BoatGame/Saved/PersistedData/<server ID>/<server ID>/`. Extract archives on your PC first and upload the savegame folder itself – not the archive and no additional parent folder.

6. **Start the server**\
   Start your server. On startup it now loads your uploaded savegame.

> [!WARNING]
> **Only one savegame folder**
>
> Besides `CustomConfig` there should be exactly one savegame folder inside `PersistedData`. If several worlds remain there, it is not clear which one your server loads.

> [!NOTE]
> The server saves automatically. The interval is set in the **dashboard** through the autosave value – it is given in seconds.
