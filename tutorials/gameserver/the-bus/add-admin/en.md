---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on a The Bus Server"
description: "Add an admin on a The Bus server"
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
short_title: "Add Admin"
sort: 2
related: ["gameserver/the-bus/activate-dlc", "gameserver/the-bus/change-fleet", "gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan"]
---

The Bus uses a rank system with four levels. You can assign ranks via `PlayerData.json` or via commands in-game. In addition, the admin password protects access to the admin menu.

## Rank System

| Rank | Description |
|------|-------------|
| **Owner** | Highest level |
| **Admin** | Access to the admin menu without re-entering the password |
| **Moderator** | Highlighted in chat like admins |
| **User** | No additional permissions |

## How to Assign Ranks via PlayerData.json

> [!WARNING]
> The player must have connected to the server at least once for an entry to exist in `PlayerData.json`. To give yourself the Owner rank, join your server once first and then follow the steps below for your own entry.

> [!TIP]
> Create a [backup](/tutorials/gameserver/the-bus/create-backup) before editing.

1. **Stop server**\
   Stop your server in the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open file**\
   Open the file `/TheBus/Saved/PlayerData.json`.

4. **Change rank**\
   Find the entry of the desired player and set the value of the field holding their rank to `"Owner"`, `"Admin"` or `"Moderator"`. Leave all other values of the entry unchanged.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the player data unreadable for the server.

5. **Start server**\
   Save the file and start your server again.

## How to Open the Admin Menu with the Admin Password

> [!WARNING]
> The default admin password is `BitteAendereMich`. Change it in the dashboard under **Settings** in the **Admin Passwort** field, because anyone who knows the password can open the admin menu. You can find more details under [Configure server](/tutorials/gameserver/the-bus/configure-server).

1. **Open admin menu**\
   Open the pause menu in-game and select the admin menu.

2. **Enter admin password**\
   Enter your server's admin password. This gives you access to the admin menu. It does not give you a rank – you assign ranks via `PlayerData.json` or by command.

> [!NOTE]
> Players with the Admin rank are not asked for the password when opening the admin menu.

## How to Assign Ranks via Commands

As Owner, you can assign ranks to other players in the in-game chat with the following commands:

| Command | Description |
|---------|-------------|
| `/owner <playername>` | Turn player into an Owner |
| `/admin <playername>` | Turn player into an Admin |
| `/mod <playername>` | Turn player into a Moderator |
| `/user <playername>` | Turn player back into a regular player (User) |

Replace `<playername>` with the player's Steam name, for example:

```text
/admin Player123
```

`/list` shows you the names of all players on the server. Use `/commands` to list all available commands.

> [!NOTE]
> The `/owner` command comes from the official [server guide by TML-Studios](https://steamcommunity.com/sharedfiles/filedetails/?id=3464410642) and is not included in the `/commands` list. Enter the commands in-game via the chat. On our servers, the console in the dashboard only shows the server output and does not accept commands.

## In-Game Admin Menu

As Owner, you see additional options in the admin menu (pause menu), e.g. for:

- the server name (see [Configure server](/tutorials/gameserver/the-bus/configure-server))
- the map (see [Change map](/tutorials/gameserver/the-bus/change-map))
- the operating plan (see [Change operating plan](/tutorials/gameserver/the-bus/change-operating-plan))
- the fleet (see [Change fleet](/tutorials/gameserver/the-bus/change-fleet))

> [!NOTE]
> The dashboard resets the server name, server password, admin password, maximum player count and server list visibility to the values under **Settings** on every start. Change these values in the dashboard instead.
