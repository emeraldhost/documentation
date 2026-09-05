---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your HumanitZ Server"
description: "Kick and ban players on a HumanitZ server"
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
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/humanitz/add-savegame", "gameserver/humanitz/create-backup", "gameserver/humanitz/download-savegame", "gameserver/humanitz/join-server"]
---

Kicking and banning in HumanitZ works through **RCON**. There are no chat commands for it – the matching commands are RCON commands only. So you have to set up RCON once before you can remove players.

> [!NOTE]
> **Project folder**
>
> All paths in this guide start with the project folder `HumanitZServer`. If your server still runs a version older than HumanitZ 1.0, that folder is called `TSSGame` instead. Check via SFTP which of the two folders exists on your server and adjust the paths accordingly.

## Set up RCON

1. **Check the port**\
   RCON requires its own **TCP port**. You can see which port is available for your server in the **dashboard** in the port overview. If no additional port is assigned there, you can request one via a support ticket.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the configuration file**\
   Open the following file:

   ```text
   /HumanitZServer/GameServerSettings.ini
   ```

5. **Enable RCON**\
   Enter the following values in the `[Host Settings]` section:

   ```ini
   [Host Settings]
   RCONEnabled=true
   RConPort=<RCON port from the dashboard>
   RCONPass="YourRconPassword"
   ```

6. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Treat the RCON password like an admin password: anyone who knows it can remotely control your server. Use a separate, secure password and only share it with people you trust.

> [!TIP]
> You should keep `RCONEnabled=true` set anyway: only with RCON enabled is the ping of your server shown in the server browser.

## Connect with an RCON tool

HumanitZ uses an RCON implementation compatible with Valve's. You can therefore use any common RCON client.

1. **Open an RCON tool**\
   Open an RCON tool such as **mcrcon** or a comparable RCON client.

2. **Enter the connection details**
   - **Host:** the IP address of your server (without port)
   - **Port:** the RCON port from the dashboard
   - **Password:** the password from `RCONPass`

3. **Run commands**\
   Once connected you can run the commands listed below.

## Find the player ID

To kick and ban you need the **Steam ID** of the player. The following command provides it:

```text
Players
```

The output lists all connected players with their name and Steam ID.

> [!TIP]
> The file `/HumanitZServer/PlayerIDMapped.txt` also maps the IDs to the player names. How to find a [SteamID64](/tutorials/gameserver/steamid64-find-out) yourself is described in this guide.

## Kick a player

```text
kick <SteamID>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```text
ban <SteamID>
```

The player is immediately kicked from the server, added to the ban list and can no longer connect.

## Remove a ban

```text
unban <SteamID>
```

With `fetchbanned` you can retrieve the list of all banned Steam IDs beforehand.

## Command overview

| Command | Description |
|---------|-------------|
| `Players` | Shows all connected players with name and Steam ID |
| `kick <SteamID>` | Disconnects a player from the server |
| `ban <SteamID>` | Bans a player and kicks them from the server |
| `unban <SteamID>` | Removes the ban of a player |
| `fetchbanned` | Shows the list of all banned Steam IDs |
| `admin <message>` | Sends a chat message with the admin tag |

## Edit the ban list as a file

The bans of your server are additionally stored in a text file inside the project folder:

```text
/HumanitZServer/F_BannedPlayers.txt
```

It contains one Steam ID per line. If the file does not exist yet, you can create it yourself.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Edit the file**\
   Open `F_BannedPlayers.txt` via SFTP and enter one Steam ID per line – or remove a line to lift a ban:

   ```text
   76561198012345678
   76561198087654321
   ```

3. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> The file is read on server start. Changes made while the server is running do not take effect immediately and can be overwritten when the server is stopped. Use the RCON command `ban` for an immediate ban.

## Block globally banned players

In the `[Host Settings]` section you can additionally enable the global ban list:

```ini
UseGlobalBanList=true
```

Your server then rejects players who were banned on the official servers.

## Set up a whitelist

If you want to restrict your server to certain players, enable the following in the `[Host Settings]` section:

```ini
OnlyAllowedPlayers=1
```

You then enter the allowed players with one Steam ID per line into the following file:

```text
/HumanitZServer/F_MVPAccess.txt
```

> [!IMPORTANT]
> As soon as `OnlyAllowedPlayers=1` is set, only players listed in `F_MVPAccess.txt` can join the server. Make sure to add yourself first before starting the server.

> [!NOTE]
> **Reserved slots**
>
> With `ReserveSlots=<number>` you reserve slots on a full server. The players entitled to them are entered with one Steam ID per line into `/HumanitZServer/F_ReservedSlots.txt`.

## Admin interface in the game

> [!NOTE]
> With admin rights you can open an admin interface in the game with `/adminw`, which also allows managing players. The exact click path is not officially documented and can change with game updates – the reliable and documented way to kick and ban is RCON. How to get admin rights is described in [Add Admin](/tutorials/gameserver/humanitz/add-admin).
