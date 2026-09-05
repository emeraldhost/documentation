---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Myth of Empires Server"
description: "Kick and ban players on a Myth of Empires server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["myth-of-empires"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/myth-of-empires/add-savegame", "gameserver/myth-of-empires/create-backup", "gameserver/myth-of-empires/download-savegame", "gameserver/myth-of-empires/join-server"]
---

You remove players from your Myth of Empires server using admin commands. All commands work with the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/myth-of-empires/add-admin).

> [!TIP]
> Here you can find a guide on how to find a [SteamID64](/tutorials/gameserver/steamid64-find-out).

> [!WARNING]
> There is **no official command reference** from the developer for Myth of Empires. The kick and ban commands in this guide come from the server administration community. Depending on your server version a command may therefore not work exactly as described.

## Kick a player

1. **Open the console**\
   Press the `~` or `` ` `` key in the game to open the console.

2. **Enter the command**\
   Enter the command together with the player's SteamID64:

   ```text
   cheat KickOff 76561198012345678
   ```

3. **Confirm**\
   Confirm the input. The player is disconnected immediately, no server restart required.

A kicked player can rejoin at any time. If you want to block them permanently, you have to ban them.

## Ban a player

There is **no in-game console command** for banning. You issue bans through RCON:

```text
PrivateServerAddBlockList <SteamID64>
```

The player can no longer log in to your server afterwards.

## Remove a ban

```text
PrivateServerRemoveBlockList <SteamID64>
```

> [!WARNING]
> The two ban commands are **not part of the official documentation** of Myth of Empires. They come from the server administration community, where they are used in production. Depending on your server version they may therefore not work exactly as described.

## Use RCON

RCON is a remote administration connection to your server that lets you issue commands without being in the game. Myth of Empires uses the Source RCON protocol, so you can use common RCON tools.

1. **Get the connection details**\
   RCON has to be enabled on your server. Whether that is the case and which port and key apply is shown in the **dashboard**. If you cannot find it there, simply ask via a support ticket.

2. **Connect**\
   Connect with your RCON tool using your server's address, the RCON port and the key.

3. **Issue a command**\
   Enter the desired command. RCON commands are written **without** the leading `cheat`.

> [!IMPORTANT]
> The RCON key is a full server password. If a simple default value is still set, make sure to change it to a key of your own.

## Command overview

| Command | Where | Description |
|---------|-------|-------------|
| `cheat KickOff <SteamID64>` | In-game console | Disconnect a player from the server |
| `KickOff <SteamID64>` | RCON | Disconnect a player from the server |
| `PrivateServerAddBlockList <SteamID64>` | RCON | Block a player from the server |
| `PrivateServerRemoveBlockList <SteamID64>` | RCON | Remove a ban |
| `BroadcastNotifySysInfo "<text>" 5 1` | RCON | Send an announcement to all players |
| `SaveWorld` | RCON | Save the world immediately |
| `ShutDownServer` | RCON | Shut the server down cleanly |

> [!NOTE]
> **No ban file**
>
> Myth of Empires does not store a ban list as a file on the server that you could edit via SFTP. Bans are managed exclusively through the commands listed above.

> [!NOTE]
> **No timed bans**
>
> A ban lasts until you remove it again. There is no option to specify a ban duration.

> [!TIP]
> Your server can additionally be set to automatically block VAC-banned players. Whether your dashboard offers an option for this is shown under **Settings** – the corresponding startup parameter is `-EnableVACBan=1`.
