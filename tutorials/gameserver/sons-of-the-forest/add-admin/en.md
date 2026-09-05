---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Sons Of The Forest Server"
description: "Add an admin to a Sons Of The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/sons-of-the-forest/add-savegame", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/download-savegame", "gameserver/sons-of-the-forest/join-server"]
---

In Sons Of The Forest admin rights are granted through the file `ownerswhitelist.txt`. Every player whose SteamID64 is listed there counts as a server owner and can manage the server directly ingame.

> [!NOTE]
> There is no ingame command to make someone an admin. Admin rights are granted exclusively through the file on the server.

## Find the SteamID64

You need the **SteamID64** of every desired admin. This is a purely numeric, 17-digit number (e.g. `76561198000000000`). The guide [Find SteamID64](/tutorials/gameserver/steamid64-find-out) explains how to look it up.

> [!IMPORTANT]
> Custom URLs, Steam nicknames or shorter ID formats do not work. A wrong format does not produce an error message – the entry is silently ignored and the player stays without admin rights.

## Add the admin

1. **Stop the server**\
   Stop your server via the dashboard. The file is only read on startup.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the file**\
   Open the following file for editing:

   ```text
   /serverconfig/ownerswhitelist.txt
   ```

4. **Enter the SteamID64**\
   Add each SteamID64 on its own line – without commas, without quotation marks and without spaces. Lines starting with `#` are comments and are ignored.

   > [!TIP]
   > **Example**
   >
   > ```text
   > # Max
   > 76561198000000000
   > # Lisa
   > 76561198111111111
   > ```

5. **Start the server**\
   Save the file and start your server.

## Use the admin features ingame

1. **Join the server**\
   Join your server with the Steam account whose SteamID64 you added.

2. **Open the admin menu**\
   Press `ESC` and switch to the **Players** tab. It lists all connected players together with the management options.

3. **Open the cheat panel (optional)**\
   Open the chat with `Enter`, type `cheatstick` and confirm with `Enter`. Afterwards you can open the panel with `F1`.

   > [!NOTE]
   > The text `cheatstick` is not displayed in the chat while typing. Mind the exact capitalization and enter the command blindly.

> [!WARNING]
> **Caution**
>
> The `cheatstick` command is only recognized reliably with a US keyboard layout. If the input does not work, check the keyboard language of your system.
