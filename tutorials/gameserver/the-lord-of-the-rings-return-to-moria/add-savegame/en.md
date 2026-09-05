---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your The Lord of the Rings Return to Moria Server"
description: "Add a savegame to a The Lord of the Rings Return to Moria server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/the-lord-of-the-rings-return-to-moria/create-backup", "gameserver/the-lord-of-the-rings-return-to-moria/download-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/join-server", "gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players"]
---

A world in Return to Moria is a single file with the prefix `MW_` and the extension `.sav`, for example `MW_BAD1ED294904FE2C24A8ED8BC98145AB.sav`. You upload this file to your server and then define in the configuration which world should be loaded.

> [!TIP]
> Create a [backup](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/create-backup) of your current server savegame before uploading, in case you want to switch back later.

## Find your local savegame

1. **Open the savegame folder**\
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %localappdata%\Moria\Saved
   ```

2. **Choose the folder of your platform**\
   Open the folder for your platform: `SaveGamesSteam` on Steam, `SaveGamesEpic` for the Epic Games Store.

3. **Select the world file**\
   Your worlds are stored there as individual `MW_*.sav` files. Choose the file of the world you want to move to the server.

> [!NOTE]
> Only worlds from PC (Steam or Epic Games Store) can be transferred. There is no documented way to move savegames from PlayStation 5 or Xbox to a server.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. The server saves while stopping and shuts down cleanly – as long as it runs it keeps writing to the world file.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /Moria/Saved/SaveGamesDedicated/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start the server once completely so the folder structure and the configuration files are created. Stop it again before uploading the file.

4. **Upload the world file**\
   Upload your `MW_*.sav` file into this directory. Keep the file name unchanged – if a file with the same name already exists there, rename one of the two beforehand.

5. **Set the world in the configuration**\
   Open the file `MoriaServerConfig.ini` in the main directory of your server and define in the `[World]` section which world should be loaded:

   ```text
   [World]
   OptionalWorldFilename=MW_BAD1ED294904FE2C24A8ED8BC98145AB.sav
   ```

   This makes the server load exactly that file – including the `.sav` extension.

   > [!NOTE]
   > If the line `OptionalWorldFilename` is missing from your configuration, simply add it below `[World]`.

6. **Start the server**\
   Save the change and start your server. Your uploaded world is now loaded on startup.

## Why you should not use the world name

The `[World]` section also contains a `Name` entry. A world can be selected through it as well, but for your server that is not the right approach.

> [!WARNING]
> **Caution**
>
> The `Name` entry is applied automatically from your server settings on every start. Changing it directly in `MoriaServerConfig.ini` therefore does not persist. Always use `OptionalWorldFilename` to load an uploaded savegame.

> [!IMPORTANT]
> If the server does not find a world with the configured world name, it automatically creates a **new** world using the values from the `[World.Create]` section – with the game mode, seed and difficulty configured there. Your uploaded savegame stays on the disk but is not loaded.

> [!TIP]
> `OptionalWorldFilename` is also the right choice if you have several worlds with the same name in the folder. Always enter the exact file name including `.sav`.

## Important notes

> [!WARNING]
> **Caution**
>
> Changes to `MoriaServerConfig.ini` are only read on the next start. Always edit the file while the server is stopped and restart it afterwards.

> [!WARNING]
> **Caution**
>
> Only stop your server through the dashboard. This is the only way the current state is saved and the server shuts down cleanly. A forced shutdown can cost progress and leave the online session hanging, which makes the next start take several minutes.

> [!NOTE]
> There is no automatic synchronization between the world on your PC and the world on the server. Changes made on the server do not end up in your local savegame and vice versa – you have to transfer the file manually every time.
