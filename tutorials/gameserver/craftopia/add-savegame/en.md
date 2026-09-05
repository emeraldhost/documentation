---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Craftopia Server"
description: "Add a savegame to a Craftopia server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/craftopia/create-backup", "gameserver/craftopia/download-savegame", "gameserver/craftopia/join-server", "gameserver/craftopia/kick-ban-players"]
---

The worlds of your Craftopia server are stored in the folder `DedicatedServerSave` in the main directory of your server – the same place where the `ServerSetting.ini` is stored. The actual world files are located in its subfolder `Worlds`.

> [!IMPORTANT]
> In addition to uploading the file you have to enter the **world name** in the `ServerSetting.ini`. If the name does not match the uploaded world, the server will simply create a new, empty world on startup.

## Where is the data stored?

| Path on the server | Content |
|--------------------|---------|
| `/DedicatedServerSave/Worlds/` | The world files of your server |
| `/ServerSetting.ini` | Server settings, including the world name |

> [!NOTE]
> Where the save is stored is controlled by the value `savePath` in the `[Save]` section of the `ServerSetting.ini`. By default it is set to `DedicatedServerSave/`. If you changed the value, the folder you entered applies instead.

## Find your local savegame

1. **Open the savegame folder**\
   Press `Windows key + R` on your PC, enter the following path and confirm with Enter:

   ```text
   %userprofile%\AppData\LocalLow\PocketPair\Craftopia\PPSave
   ```

2. **Open the Worlds folder**\
   Open the subfolder `Worlds`. It contains one database file per world.

   > [!NOTE]
   > `PPSave` is the save format used since the Seamless update. The folder `Save` next to it contains old saves from before that update – those cannot be transferred to a current server.

3. **Note down the world name**\
   Remember the name of the world you want to transfer – exactly as it is shown in the game. You will need it for the `ServerSetting.ini` in a moment.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the save files itself.

2. **Create a backup**\
   Save your current state in case you want to switch back: [Create backup](/tutorials/gameserver/craftopia/create-backup).

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the directory**\
   Navigate to the following directory:

   ```text
   /DedicatedServerSave/Worlds/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start your server once so the folder structure is created. Stop it again afterwards before uploading any files.

5. **Upload the world file**\
   Upload the file of your world from your local `PPSave\Worlds` folder into `/DedicatedServerSave/Worlds/`.

   > [!NOTE]
   > The `Worlds` folder can hold several worlds next to each other. The server loads the world whose name is entered in the `ServerSetting.ini`.

6. **Enter the world name**\
   Open the file `/ServerSetting.ini` and enter the name of your world in the `[GameWorld]` section at the value `name`:

   ```ini
   [GameWorld]
   name=MyWorld
   ```

7. **Start the server**\
   Save all changes and start your server. Your uploaded world is now loaded on startup.

> [!CAUTION]
> **The world name has to match exactly**
>
> Upper and lower case as well as spaces have to match exactly. If the server cannot find a world under the name you entered, it silently creates a new one – your uploaded world then stays on the disk but is never loaded.

> [!WARNING]
> **Always make changes in the ServerSetting.ini**
>
> Only make your changes in the `ServerSetting.ini`. A `DefaultServerSetting.ini` next to it is just the template shipped with the server and is not used as your configuration.

> [!WARNING]
> **Transferring a single player world**
>
> There is **no official procedure by the developer** for moving a single player world to a dedicated server. The steps described here come from host and community guides and can differ depending on the game version. Only work with copies of your saves and create a backup beforehand.

> [!TIP]
> Switching between two saves works most reliably when both of them come from a dedicated server – for example when moving to another server. To do so, download and re-upload the complete `DedicatedServerSave` folder: [Download savegame](/tutorials/gameserver/craftopia/download-savegame).
