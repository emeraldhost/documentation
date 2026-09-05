---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Soldat Server"
description: "Kick and ban players on a Soldat server"
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
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/soldat/add-admin", "gameserver/soldat/add-mods", "gameserver/soldat/create-backup", "gameserver/soldat/join-server"]
---

You remove players from a Soldat server with chat commands inside the game. Every ban is also written to a text file on your server that you can edit yourself at any time.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/soldat/add-admin).

> [!NOTE]
> Soldat bans by **IP address**. There is no Steam ID or player UUID here.

> [!WARNING]
> **Two server versions**
>
> The commands in this guide are the ones of the **classic** Soldat server. **OpenSoldat** uses different names for some of them:
>
> | Classic | OpenSoldat |
> |---------|------------|
> | `/mute` / `/unmute` | `/gmute` / `/ungmute` – mutes the player server-wide |
> | `/tempban <minutes> <IP>` | not available |
> | `/banlast` | not available |
> | – | `/banhw <HWID>` – ban by hardware ID |
> | – | `/banlist` – print the ban list |
>
> `/kick`, `/kicklast`, `/ban`, `/banip`, `/unban` and `/unbanlast` exist in both versions. You can tell which version you are running by whether the main directory holds a `soldat.ini` or a `configs` folder with a `server.cfg`.

## Use commands in the game

1. **Log in as admin**\
   Log in with your admin password in the chat:

   ```text
   /adminlog YourAdminPassword
   ```

2. **Run the command**\
   Enter the desired command with a leading `/`, for example:

   ```text
   /ban .:Major:.
   ```

   For `/kick` and `/ban` you can also use the player number instead of the name:

   ```text
   /ban 2
   ```

## Kick a player

```text
/kick <player name or player number>
```

The player is disconnected from the server but can rejoin at any time. The command also works for bots.

The following command removes the player who joined last without you having to know their name:

```text
/kicklast
```

## Ban a player

```text
/ban <player name or player number>
```

The player is kicked immediately and cannot connect again.

If you only know the IP address, ban it directly:

```text
/banip <IP address>
```

For a time-limited ban, enter the duration in minutes:

```text
/tempban <minutes> <IP address>
```

The following command bans the player who joined last for one hour:

```text
/banlast
```

## Lift a ban

```text
/unban <IP address>
```

To lift the most recent ban:

```text
/unbanlast
```

## Hide a player's chat

```text
/mute <player name or player number>
```

```text
/unmute <player name or player number>
```

> [!NOTE]
> According to the documentation `/mute` only hides the player's chat for you – it is not a server-wide mute. If a player is bothering everyone, only a kick or a ban helps.

## Command overview

| Command | Description |
|---------|-------------|
| `/kick <name or number>` | Disconnect a player or bot from the server |
| `/kicklast` | Kick the player who joined last |
| `/ban <name or number>` | Ban a player permanently |
| `/banip <IP address>` | Ban an IP address permanently |
| `/tempban <minutes> <IP address>` | Ban an IP address for a limited time |
| `/banlast` | Ban the player who joined last for one hour |
| `/unban <IP address>` | Lift a ban |
| `/unbanlast` | Lift the most recent ban |
| `/mute <name or number>` | Hide the player's chat for you |
| `/unmute <name or number>` | Show the player's chat again |

## Manage bans through the file

All bans are stored in the file `banned.txt` in the main directory of your server. Each line holds one entry in the following format:

```text
xxx.xxx.xxx.xxx:duration:reason
```

Examples:

```text
203.0.113.10:132760800:Banned by an admin
203.0.113.11:-1000:Banned by an admin
```

| Field | Meaning |
|-------|---------|
| IP address | The banned IPv4 address. Wildcards are allowed, which lets you ban whole IP ranges. |
| Duration | Remaining duration of the ban in ticks. A **negative value means permanent**. |
| Reason | Free text describing the ban |

### Remove an entry

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open banned.txt**\
   Open the file `banned.txt` in the main directory of your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Delete the line**\
   Remove the entire line of the entry you want to lift.

4. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Only edit the file while the server is stopped. The server writes to it during operation – otherwise your changes may be overwritten.

## Automatic kicks and bans

Soldat can also remove players on its own. On the classic server these settings are spread across two files, on OpenSoldat they all live in `configs/server.cfg`.

| Classic | File | OpenSoldat | Purpose |
|---------|------|------------|---------|
| `PunishTK` | `server.ini` | `sv_punishtk` | Punishment for killing teammates |
| `TKWarnings_Before_TempBan` | `server.ini` | `sv_warnings_tk` | Number of teamkills before a temporary ban is handed out – only works with `PunishTK=1` |
| `Max_Flood_Warnings` | `soldat.ini` | `sv_warnings_flood` | Warnings for chat spam, followed by a kick for 20 minutes |
| `Max_Ping_Warnings` | `soldat.ini` | `sv_warnings_ping` | Warnings for a high ping, followed by a kick for 15 minutes |
| `Disable_AntiCheat_Kick` | `soldat.ini` | `sv_anticheatkick` | Controls whether the anti-cheat protection kicks players automatically |

> [!NOTE]
> Changes to these files only take effect after restarting the server.

> [!WARNING]
> Hardware ID (HWID) bans only exist on **OpenSoldat**, through the command `/banhw`. The classic Soldat server has no HWID ban – commands you may find for it come from a discontinued community script. Use the IP-based bans there.
