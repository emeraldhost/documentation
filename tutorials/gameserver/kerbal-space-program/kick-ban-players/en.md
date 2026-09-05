---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Kerbal Space Program Server"
description: "Kick and ban players on a Kerbal Space Program server"
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
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/download-savegame", "gameserver/kerbal-space-program/join-server"]
---

You remove players from a DarkMultiPlayer server with commands – either in the **console** of your dashboard or directly in the game if you are an admin. What you always specify is the **DMP player name**, not a SteamID64.

> [!WARNING]
> In the console of your dashboard all commands need a leading slash. Text without `/` is sent as a chat message to all connected players.

> [!NOTE]
> To use the commands in the game you need admin rights. See [Add Admin](/tutorials/gameserver/kerbal-space-program/add-admin). In the `#Server` channel of the DMP chat you then enter the commands **without** the `/`.

## Kick a player

```text
/kick <player name> [reason]
```

The player is disconnected from the server but can rejoin at any time. The reason is optional and is shown to the player.

> [!TIP]
> The command `/listclients` shows the names of the currently connected players.

## Ban a player

A ban is permanent – DarkMultiPlayer does not support time-limited bans. There are three independent variants:

| Command | Effect |
|---------|--------|
| `/ban <player name> [reason]` | Bans the player name |
| `/banip <IP address> [reason]` | Bans the IP address |
| `/bankey <public key> [reason]` | Bans the player's key |

> [!IMPORTANT]
> The three ban types work independently of each other. Banning a player name does not stop anyone from coming back under a different name. For a reliable ban use `/bankey` in addition.

> [!NOTE]
> **Find the public key**
>
> You can find the key of a player via [SFTP](/tutorials/gameserver/establish-sftp-connection) in the file:
>
> ```text
> /Universe/Players/<player name>.txt
> ```

## Ban lists

All bans end up in one file each inside the `/Config/` directory – one entry per line:

| File | Content |
|------|---------|
| `banned-players.txt` | Banned player names |
| `banned-ips.txt` | Banned IP addresses |
| `banned-keys.txt` | Banned public keys |

## Lift a ban

DarkMultiPlayer has no command for unbanning. You remove the entry directly from the corresponding file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the file**\
   Open the matching file in the `/Config/` directory:

   ```text
   /Config/banned-players.txt
   ```

4. **Delete the line**\
   Remove the line with the entry and save the file.

5. **Start the server**\
   Start your server. The ban is lifted.

> [!WARNING]
> The ban lists are only read on server start and are rewritten completely from memory on every change. If you edit the files while the server is running, your changes are overwritten. Always stop your server first.

## Other useful commands

| Command | Description |
|---------|-------------|
| `/help` | Show all available commands |
| `/listclients` | Show connected players |
| `/countclients` | Show the number of connected players |
| `/connectionstats` | Show connection statistics |
| `/say <text>` | Send a message to all players |
| `/pm <player name> <text>` | Send a private message to a player |
| `/dekessler` | Remove abandoned debris from orbit |
| `/nukeksc` | Remove all vessels around the Kerbal Space Center |
| `/restart` | Restart the server |

> [!IMPORTANT]
> `/nukeksc` and `/dekessler` delete vessels permanently. Create a [backup](/tutorials/gameserver/kerbal-space-program/create-backup) beforehand.
