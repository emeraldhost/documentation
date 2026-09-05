---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Barotrauma Server"
description: "Kick and ban players on a Barotrauma server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 16
related: ["gameserver/barotrauma/join-server", "gameserver/barotrauma/enable-karma", "gameserver/barotrauma/enable-traitors", "gameserver/barotrauma/set-server-password"]
---

As an admin you can kick, ban and unban players using the in-game console.

> [!NOTE]
> You need admin rights on the server to kick and ban players.

## Open the console

Press **F3** or the **tilde key (~)** to open the command console.

## Show connected players

Use the following command to list all connected players with their client IDs:

```text
clientlist
```

> [!TIP]
> You need the client ID from `clientlist` for the `banid` command.

## Kick a player

```text
kick [name]
```

Replace `[name]` with the name of the player. The player is removed from the server but can rejoin.

## Ban a player

You can ban a player by name or by client ID:

| Command | Description |
|---------|-------------|
| `ban [name]` | Bans a player by name |
| `banid [client id]` | Bans a player by client ID |

The player is permanently banned from the server.

## Unban a player

To unban a player via the console:

```text
unban [name]
```

Replace `[name]` with the name of the banned player.

## Edit the ban list

You can also manage the ban list directly in the file `banlist.txt`.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open banlist.txt**\
   Open the file `banlist.txt` at:

   ```text
   /config/banlist.txt
   ```

4. **Edit the entries**\
   Delete the entry of a player to unban them, or add a new entry manually.

5. **Start the server**\
   Start your server.

## All commands

| Command | Description |
|---------|-------------|
| `clientlist` | Show connected players with IDs |
| `kick [name]` | Kick a player |
| `ban [name]` | Ban a player by name |
| `banid [client id]` | Ban a player by client ID |
| `unban [name]` | Unban a player |
