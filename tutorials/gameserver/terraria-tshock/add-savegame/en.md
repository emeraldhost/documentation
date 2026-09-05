---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Terraria tShock Server"
description: "Add a savegame to a Terraria tShock server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/terraria-tshock/add-admin", "gameserver/terraria-tshock/add-mods", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame"]
---

You can transfer an existing world to your server to continue playing there. tShock uses the regular Terraria world format – so a world consists of **a single `.wld` file**. You can use a single player world, the world of a regular Terraria server or the world of another tShock server.

> [!TIP]
> Create a [backup](/tutorials/gameserver/terraria-tshock/create-backup) of your existing server world before uploading, in case you want to switch back later.

## Find the local savegame

1. **Open the worlds folder**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %userprofile%\Documents\My Games\Terraria\Worlds
   ```

   > [!NOTE]
   > On Linux the worlds are located in `~/.local/share/Terraria/Worlds`, on macOS in `~/Library/Application Support/Terraria/Worlds`.

2. **Select the world**\
   Pick the desired `.wld` file, e.g. `MyWorld.wld`. Do **not** use spaces in the file name, use underscores instead, e.g. `My_World.wld`.

   > [!IMPORTANT]
   > A space in the world name breaks the startup command of your server – the world will not be loaded. Rename the file before uploading if necessary.

## Upload and apply the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the world**\
   Upload the `.wld` file directly into the **main directory** of your server:

   ```text
   /
   ```

   > [!NOTE]
   > With tShock the world is not stored in a subfolder but directly in the main directory – the same place where the `tshock` folder is located.

4. **Set the world name**\
   Open the dashboard, navigate to the **Settings** and enter the file name of your world in the **World Name** field – **without** the `.wld` extension (e.g. `My_World` for `My_World.wld`).

5. **Start the server**\
   Save the settings and start your server. Your uploaded world is now loaded on startup.

> [!IMPORTANT]
> The world name is matched **exactly** as you enter it, including upper and lower case. If the server does not find a matching `.wld` file, it automatically generates a **new, empty world** with that name on startup. So if your file is named `MyWorld.wld` and you enter `myworld`, you end up in a freshly generated world instead of your uploaded one.

> [!WARNING]
> **Switching worlds**
>
> If you want to replace an old world completely, remove the old `.wld` file from the main directory. This prevents mix-ups later on. Save it first if you might want to switch back: [Download savegame](/tutorials/gameserver/terraria-tshock/download-savegame).

> [!NOTE]
> **Server Side Characters**
>
> A `.wld` file only contains the world. If Server Side Characters are enabled (the `Enabled` value in `/tshock/sscconfig.json`), the inventories and progress of your players are stored in `/tshock/tshock.sqlite`. If you also want to take the characters over from another tShock server, transfer that file as well – note that accounts, groups and bans come along with it.

> [!WARNING]
> **tModLoader**
>
> `.twld` files belong to tModLoader and are not used by a tShock server. A tModLoader world belongs on a tModLoader server: [Add savegame (tModLoader)](/tutorials/gameserver/terraria-tmodloader/add-savegame).
