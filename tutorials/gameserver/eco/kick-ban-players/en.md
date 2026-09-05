---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Eco Server"
description: "Kick and ban players on an Eco server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/download-savegame", "gameserver/eco/join-server"]
---

You can remove players directly in the game using chat commands or block them permanently through the file `/Configs/Users.eco`.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/eco/add-admin).

## Use commands in the game

1. **Open the chat**\
   Press `Enter` in the game to open the chat.

2. **Identify the player**\
   The following command lists all users known to the server with their name and ID:

   ```text
   /manage listusers
   ```

3. **Run the command**\
   Enter the desired command, for example:

   ```text
   /manage ban 76561198012345678 Griefing 1w
   ```

> [!NOTE]
> For `<NameOrID>` all commands accept the account id, Steam ID, SLG ID or the user name. The short forms such as `/kick` or `/ban` work exactly like the long notation.

## Kick a player

```text
/manage kick <NameOrID> [reason]
```

The player is removed from the running session but can rejoin at any time. Short form: `/kick`

## Ban a player

```text
/manage ban <NameOrID> [reason] [time]
```

Without a duration the ban is permanent. Short form: `/ban`

> [!TIP]
> **Temporary bans**
>
> The duration uses the format `1m`, `1h`, `1d` or `1w` – minutes, hours, days or weeks:
>
> ```text
> /manage ban 76561198012345678 RuleBreaking 2d
> ```

> [!NOTE]
> **Show the ban list**
>
> If you enter `/manage ban` without any further arguments, the server shows you the list of banned players.

## Unban a player

```text
/manage unban <NameOrID> [reason]
```

Short form: `/unban`

## Command overview

| Command | Short form | Description |
|---------|------------|-------------|
| `/manage listusers` | – | Show all known users with name and ID |
| `/manage whois <user>` | – | Show information about a user |
| `/manage kick <NameOrID> [reason]` | `/kick` | Remove a player from the running session |
| `/manage ban <NameOrID> [reason] [time]` | `/ban` | Ban a player, permanently if no duration is given |
| `/manage unban <NameOrID> [reason]` | `/unban` | Lift a ban |
| `/manage mute <NameOrID> [reason] [time]` | `/mute` | Mute a player |
| `/manage unmute <NameOrID> [reason]` | `/unmute` | Unmute a player |
| `/manage warnuser <user> <warning>` | – | Send a warning to a player |

> [!NOTE]
> You enter these commands in the **in-game chat**. Whether they can also be sent through the console in the dashboard is not documented – when in doubt, use the chat or the configuration file.

## Manage the lists via the configuration file

Bans and mutes can also be set directly in the configuration without being in the game:

```text
/Configs/Users.eco
```

| Section | Purpose |
|---------|---------|
| `BlackList` | Listed users are denied a connection to the server |
| `MuteList` | Listed users are muted |
| `Admins` | Users with admin rights, see [Add Admin](/tutorials/gameserver/eco/add-admin) |

1. **Stop the server**\
   Stop your server via the dashboard. Configuration files are only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Enter the ID**\
   Open `/Configs/Users.eco` and add the SLG ID or SteamID64 to `$values` in the desired section. The structure of the section already exists – only add the IDs and leave the rest unchanged:

   ```json
   "BlackList": {
     "System.String": {
       "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "$values": [
         "76561198012345678",
         "76561198087654321"
       ]
     }
   }
   ```

   The example shows two entries – they are separated by a comma. With only one entry, the second one including its comma is omitted.

4. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> **Unbanning via the file**
>
> To lift a ban, remove the ID from `$values` – including its comma. Make sure the file stays valid JSON (when in doubt, check it with a JSON formatter like [JSONLint](https://jsonlint.com/)) and restart the server afterwards.

> [!WARNING]
> The same rule applies here: user names do not work, you have to enter an SLG ID or SteamID64. How to find them is described under [Add Admin](/tutorials/gameserver/eco/add-admin).

> [!NOTE]
> **Whitelist**
>
> `Users.eco` also contains a `WhiteList`. According to the official documentation it is **not an access restriction**: users on the whitelist simply do not need to enter a server password in order to connect. To lock out individual players, use the `BlackList`.
