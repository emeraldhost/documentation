---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your SCUM Server"
description: "Kick and ban players on a SCUM server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/scum/add-savegame", "gameserver/scum/create-backup", "gameserver/scum/download-savegame", "gameserver/scum/join-server"]
---

You can remove players directly in the game using chat commands or manage them through the configuration files of your server.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/scum/add-admin).

## Use commands in the game

1. **Open the chat**\
   Press `T` in the game to open the chat.

2. **Find the SteamID64**\
   To ban someone you need their SteamID64. The following command lists it:

   ```text
   #ListPlayers
   ```

3. **Run the command**\
   Enter the desired command with a leading `#`, for example:

   ```text
   #Ban 76561198012345678
   ```

## Kick a player

```text
#Kick <PlayerName>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```text
#Ban <SteamID64>
```

The player is kicked immediately and cannot connect again until the ban is lifted.

> [!NOTE]
> SCUM does not support time-limited bans. A ban stays in place until you lift it.

## Unban a player

```text
#Unban <SteamID64>
```

## Mute a player

```text
#Mute <PlayerName>
```

```text
#UnMute <PlayerName>
```

With `#Silence <PlayerName> <duration in hours>` you can mute a player for a specific amount of time. If you leave out the duration or enter `0`, the player stays silenced indefinitely.

## Command overview

| Command | Description |
|---------|-------------|
| `#ListPlayers` | List all players including their SteamID64 |
| `#Kick <PlayerName>` | Disconnect a player from the server |
| `#Ban <SteamID64>` | Ban a player permanently |
| `#Unban <SteamID64>` | Lift a ban |
| `#Mute <PlayerName>` | Mute a player |
| `#UnMute <PlayerName>` | Unmute a player |
| `#Silence <PlayerName> <hours>` | Mute a player for a limited time |
| `#ListMutedPlayers` | Show all muted players |
| `#Announce <Text>` | Send an announcement to all players |

## Manage the lists via configuration files

All lists are located in the following directory, accessible via [SFTP](/tutorials/gameserver/establish-sftp-connection):

```text
/SCUM/Saved/Config/WindowsServer/
```

| File | Purpose |
|------|---------|
| `BannedUsers.ini` | Banned players, one SteamID64 per line. Deleting a line is the same as an unban. |
| `SilencedUsers.ini` | Muted players including their remaining duration |
| `ExclusiveUsers.ini` | A true whitelist: as soon as the first SteamID64 is listed here, only listed players can join the server. |
| `WhitelistedUsers.ini` | Priority slots: listed players can also join a full server – another player gets kicked instead. |

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Edit the file**\
   Open the desired file via SFTP and enter the SteamID64 – one per line. If the file does not exist yet, create it.

3. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> The lists are only read on server start. Changes made to the files while the server is running have no effect – and may be overwritten when the server stops. Always stop your server before editing the files.

> [!IMPORTANT]
> `WhitelistedUsers.ini` is **not** a whitelist. If you want to open your server only to specific players, use `ExclusiveUsers.ini` instead.

> [!NOTE]
> The configuration folder is called `WindowsServer` on your Linux server as well. SCUM only ships a Windows server binary, which runs on Linux servers through a compatibility layer.
