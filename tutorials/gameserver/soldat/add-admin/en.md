---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Soldat Server"
description: "Add an admin to a Soldat server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/soldat/add-mods", "gameserver/soldat/create-backup", "gameserver/soldat/join-server", "gameserver/soldat/kick-ban-players"]
---

Admin rights on a Soldat server work through two mechanisms: an **admin password** that any player can log in with inside the game, and a **permanent admin list** that stores IP addresses.

> [!NOTE]
> Soldat identifies admins by their **IP address**, not by a Steam ID or a player UUID. For the permanent admin list you therefore need the IP address of the player in question.

> [!NOTE]
> **Two server versions**
>
> There are two Soldat server versions with different configuration files. You can tell which one you are running from the file manager or via [SFTP](/tutorials/gameserver/establish-sftp-connection):
>
> | File in the main directory | Version |
> |----------------------------|---------|
> | `soldat.ini` and `server.ini` | classic Soldat server |
> | `configs/server.cfg` | OpenSoldat |
>
> This guide covers both variants.

## Set the admin password

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the configuration**\
   Classic server: open `soldat.ini` and go to the `[NETWORK]` section.

   OpenSoldat: open the file `configs/server.cfg`.

4. **Enter the password**\
   Classic server:

   ```text
   Admin_Password=YourAdminPassword
   ```

   OpenSoldat:

   ```text
   set sv_adminpassword YourAdminPassword
   ```

5. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> On the classic Soldat server `Admin_Password` is mandatory: if it is empty, **the server will refuse to start**. The password is also case sensitive.

> [!WARNING]
> The admin password is not the game password. The game password (`Game_Password` or `sv_password`) only controls who may join the server at all. Anyone who knows the admin password has full control over your server – only share it with people you trust.

## Log in as admin in the game

1. **Join the server**\
   Connect to your server. See [Join Server](/tutorials/gameserver/soldat/join-server) for how to do that.

2. **Open the chat**\
   Open the chat in the game.

3. **Log in**\
   Enter the following command with your admin password:

   ```text
   /adminlog YourAdminPassword
   ```

   Example:

   ```text
   /adminlog Rxz12F
   ```

4. **Use the commands**\
   The admin commands are then available in the chat – all of them start with a `/`.

> [!NOTE]
> Logging in with `/adminlog` only applies to the current session. After reconnecting you have to log in again. Anyone who should be a permanent admin belongs in the admin list.

## Permanent admins through the admin list

Permanent admins are managed in the file `remote.txt` in the main directory of your server. It holds **one IP address per line**, optionally followed by a comment.

### Add an admin in the game

1. **Log in as admin**\
   Log in with `/adminlog` as described above.

2. **Add the player**\
   Enter the following command in the chat with the player's name:

   ```text
   /adm <PlayerName>
   ```

   The server looks up the player's IP address itself and writes it into `remote.txt`.

   If you already know the IP address, you can add it directly – the player does not have to be on the server for that:

   ```text
   /admip <IP address>
   ```

### Add an admin through the file

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open remote.txt**\
   Open the file `remote.txt` in the main directory of your server via [SFTP](/tutorials/gameserver/establish-sftp-connection). If it does not exist yet, create it.

3. **Enter the IP addresses**\
   Enter one IPv4 address per line. You can add a comment behind it:

   ```text
   127.0.0.1 [!] Host
   198.51.100.5 [!] Another entry
   ```

4. **Start the server**\
   Save the file and start your server.

### Remove an admin

```text
/unadm <IP address>
```

> [!NOTE]
> The documentation also mentions `/deadm` for the same purpose. If one of the two variants does not work on your server, try the other one – or simply delete the matching line from `remote.txt`. Editing the file always works.

## Remote admin console

Soldat comes with a remote admin console that lets you run the same commands from outside the game. It runs over **TCP on the same port as the game** – that is, your Game Port.

| Setting (classic, `server.ini`) | Setting (OpenSoldat) | Purpose |
|---------------------------------|----------------------|---------|
| `MaxAdminConnections` | `net_maxadminconnections` | Maximum number of simultaneous admin connections |
| – | `net_adminip` | IP address the admin port is bound to |
| – | `net_rcon_limit` / `net_rcon_burst` | Rate limit for connection attempts per second |

> [!IMPORTANT]
> Without an admin password nobody can log in to the remote console. The other way round: anyone who knows your admin password can control your server completely – choose a long, unique password and use the console in your **dashboard** when in doubt.

## Restrict admins

Locked mode prevents logged-in admins from using certain commands.

| Server version | How to enable | Effect |
|----------------|---------------|--------|
| classic server | Launch parameter `-lock 1` | Admins can no longer use `/loadcon`, `/password` and `/maxplayers` |
| OpenSoldat | `set sv_lockedmode 1` in `configs/server.cfg` | Admins can no longer use `/loadcon` |

> [!NOTE]
> You cannot change the launch parameters of the server yourself. If you want to use locked mode on the classic server, contact support.

## Important admin commands

| Command | Description |
|---------|-------------|
| `/adminlog <password>` | Log in as admin |
| `/adm <PlayerName>` | Add a player to the admin list permanently |
| `/admip <IP address>` | Add an IP address to the admin list permanently |
| `/unadm <IP address>` | Remove an entry from the admin list |
| `/map <MapName>` | Switch to a specific map |
| `/nextmap` | Switch to the next map in the rotation |
| `/restart` | Restart the round |
| `/gamemode 0-6` | Change the game mode |
| `/friendlyfire 0/1` | Turn friendly fire off or on |
| `/respawntime <seconds>` | Set the respawn time |
| `/say <text>` | Send a message to all players |
| `/addbot <BotName>` | Add a bot |
| `/addbot<team ID> <BotName>` | Add a bot to a specific team, e.g. `/addbot2 Terminator` |

> [!TIP]
> **Game modes**
>
> `0` Deathmatch, `1` Pointmatch, `2` Teammatch, `3` Capture the Flag, `4` Rambomatch, `5` Infiltration, `6` Hold the Flag

> [!NOTE]
> The team ID is attached directly to the command, so there is no space in between. The bot name is the bot's file name without path and extension and is case sensitive.

> [!WARNING]
> `/gamemode`, `/friendlyfire` and `/respawntime` only exist on the **classic** server. On **OpenSoldat** you set these values through the matching options in `configs/server.cfg` instead, for example `sv_gamemode` or `sv_friendlyfire`.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/soldat/kick-ban-players).
