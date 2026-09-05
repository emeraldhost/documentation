---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Necesse Server"
description: "Add a savegame to a Necesse server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/necesse/add-admin", "gameserver/necesse/add-mods", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame"]
---

A Necesse world is **a single `.zip` file** named after the world – for example `My_World.zip`. You upload this file to your server and then enter its name in the dashboard.

> [!TIP]
> Create a [backup](/tutorials/gameserver/necesse/create-backup) of your current server world before uploading, in case you want to switch back later.

## Find your local world

1. **Open the savegame folder**\
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %appdata%\Necesse\saves\worlds
   ```

2. **Select the world file**\
   Every world is stored as its own `.zip` file in this folder. Pick the file of the world you want to transfer.

   > [!NOTE]
   > Do **not** extract the file. Necesse expects the world as a packed archive.

## Upload the world

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the world file itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change into the following directory:

   ```text
   /saves/worlds/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start the server once so the folder structure is created. Stop it again before uploading the file. If the existing worlds of your server are located directly in `/saves/`, use that existing folder instead of `/saves/worlds/`.

4. **Upload the world file**\
   Upload your `.zip` file into this directory. If a file with the same name already exists, rename your uploaded file or download the existing one first.

5. **Enter the world name in the dashboard**\
   Open the dashboard, go to the **settings** and enter the name of your world file in the **Save Name** field – **without** the `.zip` extension (e.g. `My_World` for `My_World.zip`).

6. **Start the server**\
   Save the settings and start your server. Your uploaded world is now loaded on startup.

> [!CAUTION]
> **Mind upper and lower case**
>
> Your server runs on Linux and is case sensitive. `My_World` and `my_world` are two different worlds. If the name you entered does not match the file name exactly, the server creates a **new, empty world** under that name instead.

> [!WARNING]
> **Caution**
>
> The world name is passed as a startup parameter. Only set it in the dashboard – a different entry in `/cfg/server.cfg` has no effect.

> [!NOTE]
> **Adjust world settings**
>
> The settings of a world (file `worldSettings.cfg`) are located **inside** the `.zip` file. To change them, download the file, extract it, edit `worldSettings.cfg` and pack the contents back into a `.zip` archive with the same name and the same structure.

> [!TIP]
> The name your server currently loads is shown in the dashboard in the **Save Name** field. If you name your uploaded file exactly the same way, you do not have to change anything there – but make sure to back up the previous world file first.
