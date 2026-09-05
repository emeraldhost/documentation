---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Kerbal Space Program Server"
description: "Add an admin to a Kerbal Space Program server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/kerbal-space-program/add-mods", "gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/download-savegame"]
---

A DarkMultiPlayer server manages its admins through the file `Config/admins.txt`. What you enter there is the **DMP player name** – not a SteamID64 or any other ID. On the server the name is uniquely tied to the player's key.

> [!IMPORTANT]
> A player can only be made an admin once they have **connected to the server at least once**. Before that the server does not know the name and reports `'<name>' does not exist.`

## Add an admin via the console

The quickest way is the console in your dashboard. The server applies the change immediately, no restart required.

1. **Open the dashboard**\
   Open the **dashboard** of your server and switch to the **console**.

2. **Add the admin**\
   Enter the following command and replace the placeholder with the player name:

   ```text
   /admin add Jebediah
   ```

3. **Check the result**\
   Display the current list:

   ```text
   /admin show
   ```

> [!NOTE]
> **Command overview**
>
> | Command | Description |
> |---------|-------------|
> | `/admin add <player name>` | Make a player an admin |
> | `/admin del <player name>` | Revoke admin rights |
> | `/admin show` | Show all admins |

## Add an admin via the file

Alternatively you can enter the name directly into the file – for example when adding several admins at once.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open admins.txt**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /Config/admins.txt
   ```

4. **Enter the player names**\
   Enter exactly one player name per line:

   ```text
   Jebediah
   Valentina
   ```

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Only edit the file while the server is stopped. The server keeps the admin list in memory and rewrites the whole file on every change – edits made during operation are lost.

## What admin rights do

| Right | Description |
|-------|-------------|
| Console channel | Only admins see the additional channel `#Server` in the DMP chat. |
| Server commands in game | Through that channel you can run all server commands directly from the game, for example kicking or banning players. |
| Upload a modpack | Only admins may upload a modpack with `/upload`, see [Add Mods](/tutorials/gameserver/kerbal-space-program/add-mods). |

> [!NOTE]
> Admin rights do **not** grant special access to other players' vessels and no special rights for time warp. DarkMultiPlayer handles those areas through its own permissions and the configured **Warp Mode**.

## Use commands in the game

1. **Open the chat**\
   Open the DMP chat window in the game.

   > [!NOTE]
   > By default the chat opens with the key to the left of the `1`. You can change which key that is in the DMP window under **Options** → **Keys** at **Chat**.

2. **Switch the channel**\
   Switch to the channel `#Server`. It is only visible to admins.

   > [!NOTE]
   > If the channel has a different name on your server, that comes from the value `consoleIdentifier` in the file `/Config/Settings.txt`. By default it is `Server`.

3. **Enter a command**\
   In this channel you enter commands **without** a leading slash:

   ```text
   kick Jebediah
   ```

   > [!WARNING]
   > In the console of your dashboard it is the other way around: there commands need the leading slash, otherwise your input is sent as a chat message to all players.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/kerbal-space-program/kick-ban-players).
