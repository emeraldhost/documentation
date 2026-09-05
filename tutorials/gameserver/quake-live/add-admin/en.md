---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Quake Live Server"
description: "Add an admin to a Quake Live server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/quake-live/add-mods", "gameserver/quake-live/create-backup", "gameserver/quake-live/join-server", "gameserver/quake-live/kick-ban-players"]
---

Quake Live manages admin rights, moderator rights and bans together in a single text file: `access.txt`. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out). Alternatively, connect to a server and enter `/players` in the in-game console – the output contains the SteamID64 of every connected player.

## Permission levels

| Level | Meaning |
|-------|---------|
| `mod` | Moderator – may manage players, for example mute them or remove them from the server |
| `admin` | Administrator – the highest level in `access.txt`, includes the moderator rights |
| `ban` | Not a permission but a ban: the player can no longer join the server |

## Add an admin through access.txt

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open access.txt**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /baseq3/access.txt
   ```

4. **Enter the SteamID64**\
   Add one entry per line, consisting of the SteamID64 and the permission level, separated by a `|`:

   ```text
   76561198012345678|admin
   76561198087654321|mod
   ```

   Lines starting with `#` are comments and are ignored.

5. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> Only edit `access.txt` **while the server is stopped**. The server writes the access list from memory back to the file before every map load – changes you save while the server is running get overwritten in the process.

> [!NOTE]
> The `baseq3` directory sits in the main directory of your server, so the full path is `/home/container/baseq3/`. Which file the server uses is controlled by the server variable `g_accessFile` – the default is `access.txt`.

## Grant rights while the server is running

You can also grant rights without stopping the server. To do so, use the **console** of your server in the dashboard.

1. **Find the client ID**\
   The commands expect the **client ID** – the number the server assigns to a connected player. To look it up, connect to your server in the game and enter the following command in the in-game console:

   ```text
   /players
   ```

   The output lists every connected player with their client ID and their SteamID64.

2. **Open the console**\
   Open the console of your server via the dashboard.

3. **Grant the rights**\
   Enter the desired command, for example:

   ```text
   addadmin 3
   ```

| Command | Description |
|---------|-------------|
| `addadmin <client ID>` | Make a player an administrator |
| `addmod <client ID>` | Make a player a moderator |
| `demote <client ID>` | Remove a player's admin privileges |
| `reload_access` | Re-read `access.txt` |

> [!NOTE]
> In the console of your server you enter the commands without a leading `/`. In the game you use the same commands with a leading `/`, for example `/addadmin 3` or `/demote 3`.

> [!WARNING]
> `reload_access` does re-read the file immediately, but the server still overwrites it with its own state on the next map change. For permanent changes, editing the file with the server stopped is the safer route.

## Security note on remote administration

The bundled `server.cfg` enables the ZeroMQ remote console (`zmq_rcon_enable "1"`) and ships with the placeholder password `ADMINPASSWORD`.

> [!IMPORTANT]
> Administer your server through the console in the dashboard. If you do not use the remote console, set the following value in `/baseq3/server.cfg`:
>
> ```text
> set zmq_rcon_enable "0"
> ```
>
> If you do want to use it, always set your own long password via `zmq_rcon_password` and create the port configured in `zmq_rcon_port` as an additional port allocation in the dashboard beforehand. The remote console binds to its own **TCP** port, not to the Game Port.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/quake-live/kick-ban-players).

> [!NOTE]
> The plugin framework minqlx comes with its own, separate permission system. It is only available if your server is explicitly run with a minqlx image – on a standard Quake Live server only `access.txt` applies.
