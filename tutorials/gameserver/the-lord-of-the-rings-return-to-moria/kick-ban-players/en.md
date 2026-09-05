---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your The Lord of the Rings Return to Moria Server"
description: "Kick and ban players on a The Lord of the Rings Return to Moria server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 5
related: ["gameserver/the-lord-of-the-rings-return-to-moria/add-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/create-backup", "gameserver/the-lord-of-the-rings-return-to-moria/download-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/join-server"]
---

Return to Moria has **no admin or role system**: there is no admin list, no admin password and no admin commands inside the game. Instead you manage players through the file `MoriaServerPermissions.txt` in the main directory of your server.

> [!NOTE]
> You always enter the **account name of the player** as it is shown on the server – **not** a SteamID64 and not an Epic ID.

## Block a player

1. **Stop the server**\
   Stop your server via the dashboard. The file may only be edited while the server is stopped – during operation the server overwrites it.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the permissions file**\
   Open the following file in the main directory of your server:

   ```text
   MoriaServerPermissions.txt
   ```

   > [!NOTE]
   > If the file does not exist yet, start your server once completely. The configuration files are created on the first start.

4. **Add the player**\
   Add one line per player you want to lock out, following this pattern:

   ```text
   Durin = Blocked
   ```

   All lines starting with `;` are comments and are ignored.

5. **Start the server**\
   Save the file and start your server. The listed player can no longer join.

> [!TIP]
> You can also add players **in advance**, before they have ever connected – the entry takes effect as soon as somebody tries to join with that account name.

## Remove a block

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Remove the line**\
   Open the file `MoriaServerPermissions.txt` and delete the player's line completely.

3. **Start the server**\
   Save the file and start your server. The player can join again.

> [!WARNING]
> **Caution**
>
> The list is overwritten by the server as soon as somebody is blocked in-game. Only edit the file while the server is stopped – otherwise your changes are lost.

> [!WARNING]
> **Caution**
>
> Changes to the file only take effect after a server restart. A player who is already connected stays online until then.

## What Return to Moria does not offer

> [!NOTE]
> Return to Moria has no **temporary bans** and no **ban reasons**, no bans via a Steam or Epic ID and no ban list in the dashboard. A block stays in place until you remove the line from the permissions file again.

> [!TIP]
> **Limit the server to a fixed group**
>
> The permissions file locks out individual players. If you instead want to restrict access to specific people, set a server password in your server settings and share it only with those players – see [Join Server](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/join-server).

## Additional permission levels

Besides `Blocked`, the permissions file offers levels that restrict the building and storage rights of individual players. Every line follows the pattern `Name = Option,Option`:

| Level | Meaning |
|-------|---------|
| `Blocked` | The player with that account name cannot join the server |
| `Default` | The player gets the default permissions |
| `NoConstruction` | The player may not build, quick-build or deconstruct |
| `QuickBuild` | The player may only quick-build platforms and rope ladders |
| `AllConstruction` | The player may build and deconstruct without restrictions |
| `NoStorage` | The player may not use storage containers or craft from shared base storage |
| `AllStorage` | The player may use all storage containers and their contents |

An example with several entries:

```text
Default = QuickBuild,NoStorage
Durin = Blocked
Gimli = AllConstruction,AllStorage
Thorin = Default
```

> [!NOTE]
> `Default` is not a player name – it defines the permissions for every player without an entry of their own. The file ships with `Default = AllConstruction,AllStorage`.

> [!TIP]
> Create a [backup](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/create-backup) before making larger changes to the permissions file so you can always go back.

## Console commands

The server ships with its own server console that allows managing players while it runs:

| Command | Description |
|---------|-------------|
| `players` | Show all connected players |
| `status` | Show the status of the server |
| `kick <name>` | Disconnect a player from the server |
| `block <name>` | Block a connected player |
| `unblock <name>` | Remove a block |
| `regenerateinvitecode` | Generate a new invite code on the next start |
| `rename world <name>` | Rename the world |
| `difficulty` | Show the current difficulty |
| `setdifficulty <preset>` | Set all difficulty settings to a preset |
| `setcustomdifficulty` | Set one specific difficulty setting |
| `help` | Show a list of all commands |
| `exit` | Save the world and shut down the server |

> [!IMPORTANT]
> For Return to Moria the console in the dashboard only shows the output of the server – the invite code appears there, for example. The server does **not** accept commands through the dashboard because the server program runs in the background. To lock players out, use the file `MoriaServerPermissions.txt` instead.

> [!NOTE]
> A `kick` only disconnects a player from the running session. They can rejoin the same session afterwards – only players listed in the permissions file are locked out permanently.

## Show server rules

You can display a freely written set of rules to your players when they join.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Edit the rules file**\
   Open the following file in the main directory of your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and enter your text:

   ```text
   MoriaServerRules.txt
   ```

3. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> **Caution**
>
> The rules text may be **1024 characters** long at most.
