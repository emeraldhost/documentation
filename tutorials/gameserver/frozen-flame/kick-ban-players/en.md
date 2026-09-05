---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Frozen Flame Server"
description: "Kick and ban players on a Frozen Flame server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/join-server"]
---

On a Frozen Flame server you remove players through **RCON**. No command for kicking or banning players directly inside the game is documented.

> [!NOTE]
> See [Add Admin](/tutorials/gameserver/frozen-flame/add-admin) for how to connect via RCON. Remember that the password has to be entered in the format `admin:<RCON password>`.

## Kick or ban a player

1. **Connect via RCON**\
   Connect to your server with an RCON client – see [Add Admin](/tutorials/gameserver/frozen-flame/add-admin).

2. **Find the PlayerID**\
   List the connected players together with their IDs:

   ```text
   Admin_GetOnlinePlayers
   ```

   Players who are currently offline can be found through the stored profiles:

   ```text
   Admin_ListUserProfiles
   ```

3. **Run the command**\
   Run the desired command with the PlayerID, for example:

   ```text
   Admin_KickPlayer 123456789 RuleBreaking
   ```

> [!NOTE]
> The angle brackets in the commands below are placeholders only – do not type them.

## Kick a player

```text
Admin_KickPlayer <PlayerID> <Reason>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```text
Admin_Ban <PlayerID> <Seconds> <Reason>
```

The duration of the ban is given in **seconds**. `Admin_Ban 123456789 3600 Griefing` therefore bans the player for one hour.

> [!WARNING]
> Frozen Flame has no documented value for a permanent ban. Values such as `0` or `-1` are not documented and may behave unexpectedly. If you want to ban a player indefinitely, enter a correspondingly large number of seconds instead – for example `31536000` for one year.

## Lift a ban

```text
Admin_Unban <PlayerID>
```

> [!NOTE]
> No file listing banned players is documented. Bans are therefore always lifted through RCON – write down the PlayerID before you ban someone.

## Mute a player in the chat

```text
Admin_Chatban <PlayerID> <Seconds> <Reason>
```

```text
Admin_ChatUnban <PlayerID>
```

Here as well the duration is given in seconds.

## Remove a profile

```text
Admin_RemoveUserProfile <PlayerID>
```

```text
Admin_RemoveProfile <PlayerID>
```

> [!IMPORTANT]
> `Admin_RemoveProfile` removes the player **including their save data** – their progress on your server is gone. `Admin_RemoveUserProfile` only removes the profile. Create a [backup](/tutorials/gameserver/frozen-flame/create-backup) beforehand if you are unsure.

## Command overview

| Command | Description |
|---------|-------------|
| `Admin_GetOnlinePlayers` | Show connected players with their PlayerID |
| `Admin_ListUserProfiles` | List the stored player profiles |
| `Admin_KickPlayer <PlayerID> <Reason>` | Disconnect a player from the server |
| `Admin_Ban <PlayerID> <Seconds> <Reason>` | Ban a player for the given time |
| `Admin_Unban <PlayerID>` | Lift a ban |
| `Admin_Chatban <PlayerID> <Seconds> <Reason>` | Mute a player in the chat |
| `Admin_ChatUnban <PlayerID>` | Unmute a player |
| `Admin_RemoveUserProfile <PlayerID>` | Remove the profile of a player |
| `Admin_RemoveProfile <PlayerID>` | Remove a player including their save data |
| `Admin_ChatMessage [Message]` | Send a message to all players |

> [!NOTE]
> The exact format of the PlayerID is not documented. Always use the IDs returned by `Admin_GetOnlinePlayers` or `Admin_ListUserProfiles` instead of entering an ID from another source.
