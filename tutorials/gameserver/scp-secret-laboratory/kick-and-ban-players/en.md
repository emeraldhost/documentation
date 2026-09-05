---
slug: "kick-and-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your SCP: Secret Laboratory Server"
description: "Kick and ban players on a SCP: Secret Laboratory server"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 10
related: ["gameserver/scp-secret-laboratory/install-labapi-plugins", "gameserver/scp-secret-laboratory/join-server", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/set-up-reserved-slots"]
---

You can remove disruptive players either through the in-game Remote Admin panel or with commands – and the commands also work directly in the console of the dashboard when prefixed with `/`.

## Prerequisite: a rank with admin rights

Kicking and banning requires a rank with moderation rights (e.g. `moderator`, `admin` or `owner`). The [assign ranks](/tutorials/gameserver/scp-secret-laboratory/assign-ranks) guide shows you how to grant a rank to yourself or your team.

## Option 1: The in-game Remote Admin panel

1. **Open the Remote Admin panel**\
   Press the **M** key in-game to open the Remote Admin panel.

2. **Select a player**\
   In the left column labeled **Players**, select the player you want to kick or ban.

3. **Kick or ban the player**\
   Choose the desired action: for a kick you can optionally provide a reason, for a ban you additionally set the duration. Confirm the action afterwards.

## Option 2: Commands

Enter the following commands into the command line of the Remote Admin panel.

> [!NOTE]
> The console in the dashboard is the LocalAdmin console of your server. All commands shown here also work there when you prefix them with `/` (e.g. `/kick Peter insults`) – so you can moderate without being in the game yourself. See [Use Remote Admin](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin) for details.

| Command | Description |
|---------|-------------|
| `kick <player> <reason>` | Removes a player from the server |
| `ban <player> <duration> <reason>` | Bans a connected player |
| `offlineban <SteamID64> <duration> <reason>` | Bans a player who is not currently connected (short form: `oban`) |
| `unban id <SteamID64>` | Lifts a ban by SteamID64 |
| `unban ip <IP address>` | Lifts an IP ban |
| `banlist` | Shows all active bans |

As `<player>` you can use the player name, the player ID from the player list of the Remote Admin panel, or the SteamID64 prefixed with `@`. You can find a player's [SteamID64](/tutorials/gameserver/steamid64-find-out) using the linked guide.

### Ban duration

The duration is a number in minutes. You can also set the unit explicitly with the suffixes `m` (minutes), `h` (hours) and `d` (days). A duration of `0` creates a permanent ban.

```text
kick Peter Insults in voice chat
ban Peter 1h Insults in voice chat
ban @76561198012345678 30d Cheating
offlineban 76561198012345678 0 Permanent removal
```

> [!TIP]
> The `banlist` command shows the stored ID for every ban. Copy the ID into the `unban` command exactly as it appears in the list.

> [!NOTE]
> Kicks and bans take effect immediately – no server restart is required.
