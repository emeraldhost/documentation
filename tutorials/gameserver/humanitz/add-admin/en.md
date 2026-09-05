---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your HumanitZ Server"
description: "Add an admin to a HumanitZ server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/humanitz/add-savegame", "gameserver/humanitz/create-backup", "gameserver/humanitz/download-savegame", "gameserver/humanitz/join-server"]
---

HumanitZ works with an **admin password**: you store it in the configuration file of your server, and whoever enters it in the game with a chat command gets admin rights. There is currently no working admin list based on SteamIDs.

> [!WARNING]
> Everyone who knows the admin password has full admin rights on your server. Only share it with people you trust and use a different password than your server and RCON password.

> [!NOTE]
> **Project folder**
>
> All paths in this guide start with the project folder `HumanitZServer`. If your server still runs a version older than HumanitZ 1.0, that folder is called `TSSGame` instead. Check via SFTP which of the two folders exists on your server and adjust the paths accordingly.

## Set the admin password

1. **Stop the server**\
   Stop your server via the dashboard. The configuration file is only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the configuration file**\
   Open the following file:

   ```text
   /HumanitZServer/GameServerSettings.ini
   ```

4. **Enter the password**\
   Enter the admin password you want in the `[Host Settings]` section:

   ```ini
   [Host Settings]
   AdminPass="YourAdminPassword"
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> If the dashboard of your server offers a dedicated field for the admin password, prefer that field – values from the dashboard can be written back into the configuration file on start.

## Unlock admin rights in the game

1. **Join the server**\
   Join your server. How to do that is described in [Join Server](/tutorials/gameserver/humanitz/join-server).

2. **Open the chat**\
   Open the chat in the game.

3. **Enter the command**\
   Enter the following command with your admin password:

   ```text
   /AdminAccess YourAdminPassword
   ```

4. **Use admin commands**\
   From now on the admin commands are available to you.

> [!NOTE]
> The unlock applies to the current session. After a lost connection or a server restart you enter the command again.

## Admin command overview

| Command | Description |
|---------|-------------|
| `/AdminAccess <password>` | Unlock admin rights |
| `/admintag` | Show or hide the admin tag in the chat |
| `/adminw` | Opens an admin interface for spawning items and changing some game settings |
| `/SuperAdmin` | Toggles free flight mode – while it is active you are invisible to other players |
| `/god` | Turn invulnerability on or off |
| `/SaveGame` | Saves the current savegame |
| `/Shutdown <seconds>` | Shuts the server down after the given time |

> [!WARNING]
> `/Shutdown` terminates the server process. Whether your server starts up again automatically afterwards depends on the settings in the dashboard – if in doubt, start it manually there.

## AdminList.txt

The project folder can additionally contain a file `AdminList.txt` with one SteamID64 (NET ID) per line:

```text
/HumanitZServer/AdminList.txt
```

> [!IMPORTANT]
> According to the official documentation this file **currently has no function** – it is explicitly marked as not working there. Therefore grant admin rights exclusively through `AdminPass` and `/AdminAccess`.

> [!TIP]
> Here you can find a guide on how to find a [SteamID64](/tutorials/gameserver/steamid64-find-out). The IDs of players who already joined your server can also be found in the file `/HumanitZServer/PlayerIDMapped.txt`, which maps the ID to the player name.

> [!TIP]
> To learn how to remove players from your server, see [Kick & Ban Players](/tutorials/gameserver/humanitz/kick-ban-players).
