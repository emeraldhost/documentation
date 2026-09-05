---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Terraria Server"
description: "Add a savegame to a Terraria server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/terraria/create-backup", "gameserver/terraria/download-savegame", "gameserver/terraria/join-server", "gameserver/terraria/kick-ban-players"]
---

You can transfer a local world to your server to continue playing with an existing world. In regular Terraria a world consists of **a single `.wld` file**.

## Find the local savegame

1. **Open the worlds folder**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %userprofile%\Documents\My Games\Terraria\Worlds
   ```

   > [!NOTE]
   > On Linux the worlds are located in `~/.local/share/Terraria/Worlds`, on macOS in `~/Library/Application Support/Terraria/Worlds`.

2. **Select the world**\
   Pick the desired `.wld` file, e.g. `MyWorld.wld`. Avoid spaces in the file name and use underscores instead, e.g. `My_World.wld`.

## Upload and apply the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the world**\
   Upload the `.wld` file to the following directory:

   ```text
   /saves/Worlds/
   ```

4. **Set the world name**\
   Open the dashboard, navigate to the **Settings** and enter the file name of your world in the **World Name** field – **without** the `.wld` extension (e.g. `My_World` for `My_World.wld`).

5. **Start the server**\
   Save the settings and start your server.

> [!IMPORTANT]
> The world name is matched **exactly** as you enter it, including upper and lower case. If the server does not find a matching `.wld` file in `/saves/Worlds/`, it automatically generates a **new, empty world** with that name on startup. So if your file is named `MyWorld.wld` and you enter `myworld`, you end up in a freshly generated world instead of your uploaded one.

> [!WARNING]
> Do not edit the file `serverconfig.txt` by hand to switch worlds. The values `worldpath`, `worldname`, `world`, `difficulty`, `autocreate`, `port`, `maxplayers`, `motd`, `seed`, `password` and `npcstream` are rewritten from the dashboard settings on **every server start**. Always change the matching setting in the panel instead.

> [!WARNING]
> **Switching worlds**
>
> If you want to replace an old world completely, also remove the old `.wld` file and its `.bak` backup files from the `/saves/Worlds/` folder. This prevents mix-ups later on.

> [!NOTE]
> If the folder `/saves/Worlds/` does not exist yet, start the server once so the folder structure is created. Stop the server again before uploading the file.

> [!WARNING]
> **tModLoader**
>
> `.twld` files belong to tModLoader and are not used by a regular Terraria server. A tModLoader world belongs on a tModLoader server: [Add savegame (tModLoader)](/tutorials/gameserver/terraria-tmodloader/add-savegame).

> [!TIP]
> Create a [backup](/tutorials/gameserver/terraria/create-backup) of your existing server world before uploading, in case you want to switch back later.
