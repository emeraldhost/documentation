---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Arma 3 Server"
description: "Add an admin to an Arma 3 server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/arma-3/add-mods", "gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame"]
---

Arma 3 offers two ways to grant admin rights: an **admin password** that lets any player who knows it log in, and a **fixed admin list** of SteamID64s that works without a password at all. Both are configured in the `server.cfg` of your server.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Edit the server.cfg

1. **Stop the server**\
   Stop your server via the dashboard. The `server.cfg` is only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the server.cfg**\
   Open the following file in the main directory of your server:

   ```text
   /server.cfg
   ```

4. **Set the admin password**\
   Enter an admin password. Every player who knows this password can log in as admin in the game:

   ```text
   passwordAdmin = "yourAdminPassword";
   ```

   > [!WARNING]
   > **Caution**
   >
   > Never use the same password for `passwordAdmin` as for the server password (`password`). Otherwise every player who joins your server automatically gets admin rights as well.

5. **Add fixed admins**\
   In addition you can grant players permanent admin rights. Add their SteamID64 to the `admins[]` list – separate multiple IDs with a comma:

   ```text
   admins[] = {"76561198012345678", "76561198087654321"};
   ```

   These players can later log in as admin without a password.

6. **Start the server**\
   Save the file and start your server.

## Structure of the entries

```text
passwordAdmin = "yourAdminPassword";
admins[] = {"76561198012345678", "76561198087654321"};
serverCommandPassword = "yourCommandPassword";
```

| Entry | Meaning |
|-------|---------|
| `passwordAdmin` | Password used for the admin login in the game |
| `admins[]` | List of SteamID64s that may log in as admin without a password |
| `serverCommandPassword` | Separate password for server-side commands issued through `serverCommand`, independent of the admin password |

> [!NOTE]
> The `admins[]` list only takes the **SteamID64** – a 17-digit number starting with `7656`. Each additional ID is separated by a comma, and every ID is wrapped in quotation marks.

## Log in as admin

1. **Join the server**\
   Connect to your server – see [Join Server](/tutorials/gameserver/arma-3/join-server).

2. **Open the chat**\
   Press the `/` key in the game to open the chat console.

3. **Log in**\
   If you are listed in `admins[]`, this is enough:

   ```text
   #login
   ```

   Otherwise you log in using the admin password:

   ```text
   #login yourAdminPassword
   ```

4. **Log out**\
   The following command ends the admin session again:

   ```text
   #logout
   ```

## Admin command overview

All commands are entered in the chat console.

| Command | Description |
|---------|-------------|
| `#login` or `#login <password>` | Log in as admin |
| `#logout` | End the admin session |
| `#missions` | Open the mission selection |
| `#mission <missionName>` | Switch directly to the given mission |
| `#restart` | Restart the current mission |
| `#reassign` | Restart the mission and send all players back to slot selection |
| `#lock` | Lock the server – nobody can join anymore |
| `#unlock` | Unlock the server again |
| `#kick <name/ID>` | Disconnect a player from the server |
| `#exec ban "<name/ID>"` | Ban a player – `#exec` requires quotation marks |
| `#shutdown` | Shut the server down |

> [!WARNING]
> **Caution**
>
> `#shutdown` shuts the server down. Whether it starts again automatically depends on your settings – when in doubt, start it again via the dashboard.

> [!TIP]
> To learn how to remove players from your server and block them permanently, see [Kick & Ban Players](/tutorials/gameserver/arma-3/kick-ban-players).
