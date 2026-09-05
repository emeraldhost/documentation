---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Operation Harsh Doorstop Server"
description: "Add an admin to an Operation Harsh Doorstop server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/operation-harsh-doorstop/add-mods", "gameserver/operation-harsh-doorstop/create-backup", "gameserver/operation-harsh-doorstop/join-server", "gameserver/operation-harsh-doorstop/kick-ban-players"]
---

Admins are defined through the file `Admins.cfg`. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

> [!NOTE]
> The file `Admins.cfg` is **not** shipped with the server. If it does not exist yet, simply create it yourself.

## Add an admin

1. **Stop the server**\
   Stop your server via the dashboard. The admin list is read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Admins.cfg**\
   Open the following file. If it does not exist yet, create it in this folder:

   ```text
   /HarshDoorstop/Saved/Config/LinuxServer/Admins.cfg
   ```

4. **Enter the SteamID64**\
   Enter exactly one SteamID64 per line – no names, no comments and no other characters:

   ```text
   76561198012345678
   76561198087654321
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> The folder `LinuxServer` is only created after the server has fully started once. If you cannot find it, start the server once and connect via SFTP again afterwards.

## Use admin commands in game

As a listed admin you control the server directly from within the game.

1. **Join the server**\
   Join your server – see [Join Server](/tutorials/gameserver/operation-harsh-doorstop/join-server).

2. **Open the console**\
   Press the `~` key to open the in-game console.

3. **Enter a command with the prefix**\
   In game, every admin command starts with `admin`, for example:

   ```text
   admin status
   ```

   ```text
   admin servertravel <map name>
   ```

> [!NOTE]
> All RCON commands also work in the in-game console as long as you put the `admin` prefix in front. Without the prefix the command is not executed.

## Manage admins while the server is running

Through an RCON client you can grant admin rights while the server is running. These commands take effect immediately, without stopping the server:

| Command | Description |
|---------|-------------|
| `admin add <name>` | Adds a player as admin by name |
| `admin addid <id#>` | Adds a player as admin by the ID number from `status` |
| `admin remove <name>` | Removes admin rights from a player |
| `admin removeid <id#>` | Removes admin rights by ID number |

> [!TIP]
> The command `status` gives you the ID number and the SteamID64 of every connected player.

> [!WARNING]
> **Caution**
>
> Always add permanent admins to `Admins.cfg` as well. Only then do the rights survive a server restart.

## Reload the configuration

If you edited `Admins.cfg` while the server was running, you do not necessarily have to restart it. The following RCON command reloads the configuration files from disk:

```text
RELOADSERVERCONFIG
```

Among others it refreshes `Admins.cfg`, `Bans.cfg` and `MapCycle.cfg`.

> [!NOTE]
> **Custom file name**
>
> By default the admin file is called `Admins.cfg`. The startup parameter `-AdminList=FileName.cfg` lets you use a different file name. You usually do not need this – stick with the default.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/operation-harsh-doorstop/kick-ban-players).
