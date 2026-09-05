---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Arma 3 Server"
description: "Kick and ban players on an Arma 3 server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame", "gameserver/arma-3/join-server"]
---

There are two ways to remove players: directly in the game through the chat console, or from outside through BattlEye RCON – even when you are not on the server yourself.

> [!NOTE]
> You need admin rights to use the in-game commands. See [Add Admin](/tutorials/gameserver/arma-3/add-admin).

## Use commands in the game

1. **Log in as admin**\
   Press the `/` key in the game to open the chat console and log in as admin:

   ```text
   #login yourAdminPassword
   ```

2. **Kick a player**\
   Disconnect a player from the server. You can pass the player name, the ID or the player number:

   ```text
   #kick PlayerName
   ```

   The player is disconnected immediately but can rejoin at any time.

3. **Ban a player**\
   Block a player permanently. With `#exec`, the name or ID has to be wrapped in quotation marks:

   ```text
   #exec ban "PlayerName"
   ```

   The player's ID is added to the ban list `ban.txt` in the main directory of your server.

4. **Lift a ban**\
   Remove a ban again. Only the player's UID works here, not the name:

   ```text
   #exec unban "76561198012345678"
   ```

## Command overview

| Command | Description |
|---------|-------------|
| `#kick <name/ID>` | Disconnect a player from the server |
| `#exec ban "<name/ID>"` | Ban a player permanently |
| `#exec unban "<UID>"` | Lift a ban – only possible using the UID |
| `#lock` | Lock the server – nobody can join anymore |
| `#unlock` | Unlock the server again |

> [!WARNING]
> **Caution**
>
> Do not edit the ban files of your server by hand. Use `#exec unban` or the RCON commands to lift bans – this keeps the list in a valid state.

## Set up BattlEye RCON

With RCON you manage players from your PC without being in the game. In Arma 3, RCON runs exclusively through BattlEye.

> [!IMPORTANT]
> RCON only works while BattlEye is active on your server. If the `server.cfg` contains `BattlEye = 0;`, RCON cannot be used.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Enable BattlEye**\
   Open the file `/server.cfg` via [SFTP](/tutorials/gameserver/establish-sftp-connection) and make sure it contains the following value:

   ```text
   BattlEye = 1;
   ```

3. **Determine the port**\
   RCON runs through the BattlEye port of your server – that is the **Game Port + 4**. The ports assigned to your server are shown in the **dashboard**. If that port is not available to you, assign an additional port to your server there and use it instead.

4. **Create the BattlEye configuration**\
   Change into the `battleye` folder of your server via SFTP and create the file `beserver_x64.cfg` there – or open it if it already exists. Enter the following two lines:

   ```text
   RConPassword yourRconPassword
   RConPort yourRconPort
   ```

   > [!NOTE]
   > BattlEye creates the folder automatically the first time the server starts with BattlEye enabled, by default inside the server profile directory – so under `/serverprofile/battleye`. If you cannot find it, start your server once with `BattlEye = 1;` and stop it again afterwards. If your server starts with the 32-bit binary, the file is called `beserver.cfg` instead of `beserver_x64.cfg`.

5. **Start the server**\
   Save the changes and start your server.

6. **Connect via RCON**\
   Connect using an RCON tool such as [BattleWarden](https://battlewarden.net/) and enter the IP address of your server, the RCON port and the RCON password.

## RCON commands

| Command | Description |
|---------|-------------|
| `players` | Shows all connected players with player number, GUID and ping |
| `kick [player #] [reason]` | Disconnects a player from the server |
| `ban [player #] [time] [reason]` | Bans a connected player by GUID, `0` means permanent |
| `addBan [GUID or IP] [time] [reason]` | Bans a player who is currently not connected |
| `bans` | Lists all active bans together with their ban number |
| `removeBan [ban #]` | Lifts a single ban |
| `loadBans` | Reloads the ban list |
| `writeBans` | Removes expired bans from the list |
| `say [player #] [message]` | Sends a message, `-1` sends it to everyone |

> [!TIP]
> **Lift a ban via RCON**
>
> First run `bans` and note the number of the entry. Then lift the ban with `removeBan <ban #>`.

> [!NOTE]
> The player numbers from `players` are only valid for the current session. Check them again right before every `kick` or `ban`.
