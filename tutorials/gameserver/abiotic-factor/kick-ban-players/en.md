---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Abiotic Factor Server"
description: "Kick and ban players on an Abiotic Factor server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/download-savegame", "gameserver/abiotic-factor/join-server"]
---

On an Abiotic Factor server you remove players through the **admin menu inside the game**. There are no documented chat or console commands for this.

> [!NOTE]
> These functions are only available to players who are registered as admins. See [Add Admin](/tutorials/gameserver/abiotic-factor/add-admin).

## Kick or ban a player

1. **Join as an admin**\
   Join your server with an account that is registered as an admin.

2. **Open the menu**\
   Press `Esc` to open the in-game menu.

3. **Open the admin area**\
   Select the **Admin** tab. There you see the list of all connected players.

4. **Select the player**\
   Click the player you want to remove.

5. **Choose an action**\
   Select **Kick** or **Ban**:

   - **Kick** disconnects the player from the server. They can rejoin at any time.
   - **Ban** disconnects the player and blocks them permanently.

## Remove a ban

Banned players are managed through the admin area as well: open the list of banned players (**Banned Players**) there, select the player and click **Unban**. They can rejoin your server immediately afterwards.

> [!NOTE]
> The exact wording of the list and its buttons can change with game updates. Look for the overview of banned players in the admin section of the `Esc` menu.

## Ban through the configuration file

Bans are stored in the same file as your admins – in a separate section:

```text
/AbioticFactor/Saved/SaveGames/Server/Admin.ini
```

```ini
[BannedPlayers]
BannedPlayer=76561198012345678
```

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Edit Admin.ini**\
   Add one line with the player's [SteamID64](/tutorials/gameserver/steamid64-find-out) under `[BannedPlayers]`, or remove a line to lift a ban.

4. **Start the server**\
   Start your server. Bans are read on server start.

> [!WARNING]
> This file-based route is **not officially documented**. It is only evaluated on server start – an entry in the file therefore does not immediately remove a player who is already connected. Use the in-game admin menu to remove someone right away, and check after a game update whether the entry still takes effect.

## No commands and no RCON

> [!IMPORTANT]
> There is **no documented server console, no chat commands and no RCON** for Abiotic Factor. Everything related to kicking and banning goes through the in-game admin menu or through `Admin.ini`. Commands such as `/kick` or `/ban` do not appear in the official documentation – do not rely on circulating command lists.

> [!TIP]
> If you want to restrict your server to certain players in general, set a server password and only share it with those people.
