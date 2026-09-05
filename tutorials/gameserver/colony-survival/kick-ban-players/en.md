---
slug: "kick-ban-players"
language: "en"
title: "How to Ban Players on Your Colony Survival Server"
description: "Ban players on a Colony Survival server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame", "gameserver/colony-survival/join-server"]
---

In Colony Survival you lock disruptive players out through the **blacklist** of your server. In addition you can use a **whitelist** to open your server only to specific players from the start. You control both directly in the in-game chat.

> [!CAUTION]
> **Colony Survival has no kick command**
>
> There is **no command to temporarily throw a player off the server**. The `Kick` button in the game belongs to the colony management and only removes a co-owner from that colony – the player stays on the server. Anyone who has to leave the server needs to be blocked through the blacklist.

> [!NOTE]
> You need permissions of the `god` group to manage the blacklist and whitelist. See [Add Admin](/tutorials/gameserver/colony-survival/add-admin).

## Ban a player

1. **Open the chat**\
   Press `T` in the game to open the chat.

2. **Add the player to the blacklist**\
   Enter the following command – either with the player name or with the SteamID64:

   ```text
   /blacklist add Sam
   ```

   ```text
   /blacklist add 76561198012345678
   ```

   > [!TIP]
   > It is best to use the [SteamID64](/tutorials/gameserver/steamid64-find-out). It always stays the same, even if the player changes their name. Put names containing spaces in quotation marks.

3. **Verify the ban**\
   Display the current list and check whether the player is on it:

   ```text
   /blacklist
   ```

The next time banned players try to connect, they get a message that the connection was refused because they are blacklisted.

## Lift a ban

```text
/blacklist remove 76561198012345678
```

You can clear the entire list with:

```text
/blacklist clear
```

## Open the server only to specific players

The whitelist turns the principle around: as soon as it is in use, only listed players can join your server. Everyone else gets a message that they are not whitelisted.

```text
/whitelist add 76561198012345678
```

```text
/whitelist remove 76561198012345678
```

```text
/whitelist clear
```

> [!WARNING]
> Add yourself and all of your fellow players before relying on the whitelist – otherwise you lock yourself out of your own world.

## Command overview

| Command | Description |
|---------|-------------|
| `/blacklist` | Shows all banned players |
| `/blacklist add <player>` | Locks a player out |
| `/blacklist remove <player>` | Lifts the ban again |
| `/blacklist clear` | Clears the blacklist |
| `/whitelist` | Shows the whitelist |
| `/whitelist add <player>` | Adds a player to the whitelist |
| `/whitelist remove <player>` | Removes a player from the whitelist |
| `/whitelist clear` | Clears the whitelist |

> [!NOTE]
> Both the player name and the SteamID64 work as `<player>`. If a player is currently offline, always use the SteamID64.

> [!NOTE]
> The server stores the blacklist and the whitelist as files in the savegame directory. Their exact names and structure depend on the game version – so maintain the lists through the in-game commands rather than editing the files directly.
