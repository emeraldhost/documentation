---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Smalland Survive the Wilds Server"
description: "Add a savegame to a Smalland Survive the Wilds server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["smalland-survive-the-wilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/smalland-survive-the-wilds/create-backup", "gameserver/smalland-survive-the-wilds/download-savegame", "gameserver/smalland-survive-the-wilds/join-server"]
---

The complete savegame of a world is stored in a single file with the `.wld` extension. The file name matches the **world name** you enter in the dashboard of your server exactly: if your world is called `MyWorld`, the server loads the file `MyWorld.wld`.

> [!NOTE]
> Characters are **not** stored on the server. They are saved locally on each player's PC and tied to their account. Only the world data such as terrain, structures and tamed creatures is stored on the server.

> [!TIP]
> Create a [backup](/tutorials/gameserver/smalland-survive-the-wilds/create-backup) of your current savegame before uploading, in case you want to switch back later.

## Find your local savegame

If you want to transfer a world from your PC to the server, you find it here:

1. **Open the savegame folder**\
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %LOCALAPPDATA%\SMALLAND\Saved\SaveGames\Worlds\
   ```

2. **Select the world**\
   This folder contains one `<worldname>.wld` file per world. Select the file of the world you want to transfer.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the world file itself and would overwrite your upload again.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /SMALLAND/Saved/SaveGames/Worlds/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the file.

4. **Upload the world file**\
   Upload your `.wld` file into this directory. If a file with the same name already exists there, delete it first or rename your uploaded file.

5. **Set the world name in the dashboard**\
   Open the **dashboard** of your server and enter the file name **without the** `.wld` **extension** in the world name field (**World Name**).

   > [!TIP]
   > **Example**
   >
   > | File in the `Worlds` folder | World name entry |
   > |-----------------------------|------------------|
   > | `MyWorld.wld` | `MyWorld` |
   > | `World.wld` | `World` |

6. **Start the server**\
   Start your server. On startup it now loads your uploaded savegame.

> [!IMPORTANT]
> The world name has to match the file name exactly, including upper and lower case. If it does not match, the server simply creates a **new, empty world** under the name you entered. Your uploaded file is kept, but it is not loaded.

> [!WARNING]
> **No spaces in the world name**
>
> The world name must **not contain spaces**. If your uploaded file contains any, rename it first – for example `My World.wld` to `MyWorld.wld` – and then enter the new name in the dashboard.

## Create a new world

If you want to start fresh without deleting your current savegame:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Enter a new world name**\
   Enter a world name in the dashboard that has not been used yet.

3. **Start the server**\
   On the next start the server creates a new world with that name. Your old `.wld` file stays in the `Worlds` folder – you can switch back at any time by entering the old world name again.

## Reset a world

> [!WARNING]
> **Caution**
>
> If you want to reset a world completely, stop the server, delete the matching `.wld` file in the `Worlds` folder and start the server again. The server then generates the world from scratch. This step cannot be undone – back up the file beforehand if you might still need it.
