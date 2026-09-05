---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Mindustry Server"
description: "Add an admin to a Mindustry server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/mindustry/add-mods", "gameserver/mindustry/add-savegame", "gameserver/mindustry/create-backup", "gameserver/mindustry/download-savegame"]
---

Mindustry has **no admin file** that you could edit via SFTP. Admin rights are granted exclusively through the **console** of your server. They are stored in the binary file `config/settings.bin`.

> [!IMPORTANT]
> Admin rights are tied to a player's **Mindustry UUID** – not to a Steam or Epic account. Mindustry assigns the UUID itself, and you read it out through the console.

> [!NOTE]
> Your server has to be running **and** hosting a map. If no game is active, the command fails with `Open the server first.` You can find out how to start a map under [Add savegame](/tutorials/gameserver/mindustry/add-savegame).

## Add an admin by name

As long as the player is online, their player name is enough.

1. **Have the player connect**\
   The player who is supposed to receive admin rights must join your server and stay online. You can find out how under [Join Server](/tutorials/gameserver/mindustry/join-server).

2. **Open the console**\
   Open the **console** of your server in the dashboard.

3. **Grant the rights**\
   Enter the following command and replace `<PlayerName>` with the exact name of the player:

   ```text
   admin add <PlayerName>
   ```

   > [!TIP]
   > **Example**
   >
   > ```text
   > admin add JohnDoe
   > ```

4. **Check the result**\
   The server confirms with `Changed admin status of player: <name>`. The rights apply immediately – no restart is required.

> [!WARNING]
> **Caution**
>
> If the server reports `Nobody with that name or ID could be found.`, the player is either not online or the name does not match exactly. Check the spelling with `players` or use the UUID instead.

## Add an admin by UUID

With the UUID the command also works while the player is not connected – as long as they have joined your server at least once before.

1. **Find the UUID**\
   Use one of these commands in the console:

   | Command | Output |
   |---------|--------|
   | `players` | All connected players with admin status, name, UUID and IP |
   | `admins` | All admins with last known name, UUID and IP |
   | `info <name/UUID/IP>` | Detailed information about a player |
   | `search <name>` | Searches for players by part of their name |

   > [!TIP]
   > Your server writes the name and UUID to the console whenever someone connects. So you can also find the UUID in the console log of that particular join.

2. **Grant the rights**\
   Use the UUID instead of the name:

   ```text
   admin add <UUID>
   ```

## Revoke admin rights

```text
admin remove <PlayerName/UUID>
```

> [!NOTE]
> The first argument always has to be `add` or `remove`. Otherwise the server reports `Second parameter must be either 'add' or 'remove'.`

## What an admin can do in the game

As an admin you get additional actions in the in-game player list:

| Action | Effect |
|--------|--------|
| **Kick** | Disconnects the player from the server |
| **Ban** | Blocks the player permanently |
| **Trace** | Shows connection and player information |
| **Wave** | Calls the next enemy wave |
| **Switch Team** | Moves a player to another team |

> [!TIP]
> To learn how to remove players through the console as well, see [Kick and Ban Players](/tutorials/gameserver/mindustry/kick-ban-players).

## Open the server for selected players only

If you only want to allow selected players, enable the whitelist:

1. **Enable the whitelist**

   ```text
   config whitelist true
   ```

2. **Allow a player**\
   Enter the UUID of the player:

   ```text
   whitelist add <UUID>
   ```

3. **Check the list**\
   Without any further argument the command lists all allowed players with name and UUID:

   ```text
   whitelist
   ```

> [!NOTE]
> The whitelist works with UUIDs only – player names are not accepted here. If a player who is not whitelisted tries to join, they see `You are not whitelisted here.`, and your server prints the matching `whitelist add` command right into the console.

> [!IMPORTANT]
> Never edit `config/settings.bin` in a text editor. Besides the admin rights, the file also holds bans, the whitelist and all server settings in binary form, and editing it destroys the file.
