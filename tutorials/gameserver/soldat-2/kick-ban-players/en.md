---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Soldat 2 Server"
description: "Kick and ban players on a Soldat 2 server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/soldat-2/add-admin", "gameserver/soldat-2/add-mods", "gameserver/soldat-2/create-backup", "gameserver/soldat-2/join-server"]
---

On a Soldat 2 server you remove players exclusively through the in-game console. There is no file-based ban list.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/soldat-2/add-admin).

## Use the commands in the game

1. **Open the console**\
   Press `Alt` + `~` in the game.

2. **Log in as admin**\
   If you are not already stored permanently as admin through your PlayFab ID, log in with the RCON password:

   ```text
   rcon YourRconPassword
   ```

3. **Find the player ID**\
   Kick and ban work with the **player ID**, not with the name. The following command lists the IDs:

   ```text
   rcon listplayers
   ```

4. **Run the command**\
   Run the command you need with the ID you found:

   ```text
   rcon kick 2
   ```

## Kick a player

```text
rcon kick <id>
```

The player is disconnected from the server and can generally rejoin.

With a reason:

```text
rcon kick 2 "Chat spam"
```

> [!IMPORTANT]
> The reason has to be wrapped in **quotation marks**. Without them the command is not parsed correctly.

## Kick all players

```text
rcon kickall
```

You can add a reason here as well:

```text
rcon kickall "Server is restarting"
```

## Ban a player

```text
rcon ban <id>
```

The player is thrown off the server immediately and cannot reconnect for a couple of days.

> [!WARNING]
> A ban in Soldat 2 is **temporary**. It expires by itself after a couple of days – the exact duration is not documented and cannot be configured.

> [!CAUTION]
> **No unban available**
>
> Soldat 2 has **no unban command** and does not create a ban list file you could edit. A ban that has been issued therefore cannot be lifted early – you can only wait for it to expire. Use `ban` deliberately and prefer `kick` for short-term disruptions.

## Move a player to a team

If a player is only messing up the team balance, you do not have to remove them:

```text
rcon setteam <id> <team>
```

```text
rcon setteam 2 1
```

> [!NOTE]
> Moving a player into a team manually disables autobalance for the running match. It applies again after the next map change.

## Commands at a glance

| Command | Description |
|---------|-------------|
| `rcon listplayers` | Show all players with their IDs |
| `rcon kick <id>` | Disconnect a player from the server |
| `rcon kick <id> "<reason>"` | Disconnect a player with a reason |
| `rcon kickall` | Disconnect all players from the server |
| `rcon kickall "<reason>"` | Disconnect all players with a reason |
| `rcon ban <id>` | Ban a player for a couple of days |
| `rcon setteam <id> <team>` | Move a player into a team |
| `rcon say "<text>"` | Send a message to everyone, e.g. as a warning |

> [!TIP]
> If you want to keep your server permanently limited to certain people, a game password is more reliable than individual bans. You set the password in the **dashboard**.

> [!NOTE]
> Commands are not case sensitive. Pressing `Tab` shows the available commands in the console.
