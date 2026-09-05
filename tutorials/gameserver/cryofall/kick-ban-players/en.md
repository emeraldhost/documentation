---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your CryoFall Server"
description: "Kick and ban players on a CryoFall server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame", "gameserver/cryofall/join-server"]
---

In CryoFall you manage players through the in-game console. Alternatively you can edit the lists directly in the server configuration while the server is stopped.

> [!NOTE]
> You need operator or moderator rights to use these commands. See [Add Admin](/tutorials/gameserver/cryofall/add-admin).

## Use the commands in the game

1. **Open the console**\
   Press the `~` key in the game to open the console.

2. **Enter a command**\
   All commands start with `/`, for example:

   ```text
   /ban PlayerName
   ```

3. **Auto-complete commands**\
   The console completes partially typed commands with the Tab key.

## Kick a player

A kick removes the player from the server for a set amount of time. Afterwards they can join again.

```text
/kick <playerName> [minutes] ["reason"]
```

Example – the player is removed for 60 minutes with a reason:

```text
/kick PlayerName 60 "Please follow the server rules"
```

> [!NOTE]
> The reason goes in double quotes directly after the number of minutes. If you leave out the minutes, the kick lasts 30 minutes. To lift a kick early, use `/mod.kickList.remove <playerName>`.

## Ban a player

A ban is permanent and stays in place until you lift it.

```text
/ban <playerName>
```

The player is disconnected immediately and can no longer connect.

> [!NOTE]
> CryoFall has **no time-limited bans** – the command takes no time parameter. If a player should only stay out temporarily, use `/kick` with a number of minutes instead.

## Lift a ban

```text
/mod.blackList.remove <playerName>
```

`/mod.blackList.print` shows all banned players.

## Kick and ban factions

You can remove entire factions by their clan tag:

```text
/banFaction <clanTag>
```

```text
/kickFaction <clanTag> [minutes] ["reason"]
```

## Mute a player

```text
/mute <playerName> [minutes]
```

```text
/mod.muteList.remove <playerName>
```

## Command overview

| Command | Description |
|---------|-------------|
| `/ban <playerName>` | Ban a player permanently |
| `/mod.blackList.remove <playerName>` | Lift a ban |
| `/mod.blackList.print` | List banned players |
| `/banFaction <clanTag>` | Ban an entire faction |
| `/kick <playerName> [minutes] ["reason"]` | Remove a player for a set time |
| `/mod.kickList.remove <playerName>` | Lift a kick |
| `/mod.kickList.print` | List kicked players |
| `/kickFaction <clanTag> [minutes] ["reason"]` | Remove an entire faction for a set time |
| `/mute <playerName> [minutes]` | Mute a player |
| `/mod.muteList.remove <playerName>` | Unmute a player |
| `/whiteListAdd <playerName>` | Add a player to the whitelist |
| `/mod.whiteList.remove <playerName>` | Remove a player from the whitelist |
| `/mod.whiteList.print` | Show the whitelist |
| `/mod.whiteList.enabled 1` | Enable the whitelist |

> [!NOTE]
> Banned players can no longer connect to the server – operators and moderators are exempt from this.

## Open the server only for specific players

CryoFall has no server password. If you want to keep your server private, use the whitelist: while it is active only listed players can connect – operators and moderators excepted.

1. **Add the players**\
   First add yourself and all of your players to the list:

   ```text
   /whiteListAdd PlayerName
   ```

2. **Enable the whitelist**\
   Only activate the whitelist afterwards:

   ```text
   /mod.whiteList.enabled 1
   ```

3. **Check the list**\
   Verify the result:

   ```text
   /mod.whiteList.print
   ```

> [!IMPORTANT]
> Only enable the whitelist once every player you want on the server is listed. Otherwise you lock your own players out.

## Manage the lists in the configuration file

The lists are also stored as plain text in the server configuration. That helps you for example when you want to lift a ban and nobody with the required rights is in the game.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open the configuration**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /Data/SettingsServer.xml
   ```

3. **Edit the list**\
   The names are stored comma-separated in these entries:

   ```xml
   <access_blacklist></access_blacklist>
   <access_whitelist></access_whitelist>
   <access_whitelist_enabled>0</access_whitelist_enabled>
   ```

   | Entry | Purpose |
   |-------|---------|
   | `access_blacklist` | Banned players. Removing a name is the same as an unban. |
   | `access_whitelist` | Allowed players |
   | `access_whitelist_enabled` | `1` enables the whitelist, `0` disables it |

4. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> **Caution**
>
> Only edit the file while the server is stopped. During operation the server manages these lists itself and overwrites your changes.
