---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on a The Bus Server"
description: "Kick and ban players on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 17
related: ["gameserver/the-bus/add-savegame", "gameserver/the-bus/join-server", "gameserver/the-bus/send-chat-messages", "gameserver/the-bus/spawn-bus"]
---

You enter all commands in this guide in the **in-game chat**. You need an appropriate rank for this (e.g. Owner or Admin). To learn how to assign ranks, see [Add Admin](/tutorials/gameserver/the-bus/add-admin).

> [!TIP]
> Use `/commands` in the in-game chat to show all available commands.

> [!NOTE]
> On our servers, the console in the dashboard only shows the server output and does not accept commands.

## How to show the player list

To show all players on the server, enter the following command:

```text
/list
```

## How to kick a player

```text
/kick <playername>
```

This removes the player from the server.

## How to ban a player

```text
/ban <playername>
```

This bans the player permanently.

## How to temporarily ban a player

Since Update 3.2 EA, you can also ban players for a limited time:

```text
/tempban <playername> <duration>
```

> [!NOTE]
> The unit in which `/tempban` expects the duration is not officially documented. Use `/commands` to show all available commands.

## How to unban a player

```text
/unban <playername>
```

## How to unban a player via SFTP

Alternatively, you can lift a ban directly in the player data file.

1. **Stop the server**\
   Stop your server in the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the file**\
   Open the file `/TheBus/Saved/PlayerData.json`.

4. **Lift the ban**\
   Find the entry of the player you want to unban and set the value of `"banned"` to `false`, for example:

   ```json
   {
       "name": "Player123",
       "banned": false,
       ...
   }
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the player data unreadable for the server.

5. **Start the server**\
   Save the file and start your server again.

## How to mute a player

```text
/mute <playername>
```

This mutes the player for the entire server.

## How to unmute a player

```text
/unmute <playername>
```

## Command overview

| Command | Description |
|---------|-------------|
| `/list` | Show all players |
| `/kick <playername>` | Kick player from server |
| `/ban <playername>` | Permanently ban player |
| `/tempban <playername> <duration>` | Temporarily ban player |
| `/unban <playername>` | Unban player |
| `/mute <playername>` | Mute player for the entire server |
| `/unmute <playername>` | Unmute player for the entire server |
| `/commands` | Show available commands |
