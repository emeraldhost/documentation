---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Abiotic Factor Server"
description: "Add an admin to an Abiotic Factor server"
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
short_title: "Add Admin"
sort: 1
related: ["gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/download-savegame", "gameserver/abiotic-factor/join-server"]
---

On an Abiotic Factor server you define admins in the `Admin.ini` file. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!TIP]
> Here you can find a guide on how to find a [SteamID64](/tutorials/gameserver/steamid64-find-out).

> [!NOTE]
> Signing in as an admin only works with a SteamID64. Players on Xbox or PlayStation **cannot** be added as admins this way.

## Add an admin via Admin.ini

1. **Stop the server**\
   Stop your server via the dashboard. The admin list is only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Admin.ini**\
   Open the following file. If it does not exist yet, start the server once so it gets created:

   ```text
   /AbioticFactor/Saved/SaveGames/Server/Admin.ini
   ```

   > [!NOTE]
   > **A different path is possible**
   >
   > The location of the file can be moved with the start parameter `-AdminIniPath=` – its value is given relative to the `Saved` folder. If you cannot find the file at the path above, also check here:
   >
   > ```text
   > /AbioticFactor/Saved/Config/WindowsServer/Admin.ini
   > ```

4. **Enter the SteamID64**\
   Add the SteamID64 under the `[Moderators]` section. Use one line per admin:

   ```ini
   [Moderators]
   Moderator=76561198012345678
   Moderator=76561198087654321
   ```

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> The SteamID64 has to be numeric and exactly 17 digits long. A Steam display name or a custom profile URL does not work here.

## Alternative via an admin password

Abiotic Factor also supports the start parameter `-AdminPassword=<password>`. If it is set, a player can grant themselves admin rights in-game by entering that password – without any entry in `Admin.ini`.

> [!NOTE]
> Whether your dashboard offers a field for the admin password or for additional start parameters can be seen under **Settings**. The admin password is independent of the server password – these are two different passwords.

> [!WARNING]
> Everyone who knows the admin password can gain admin rights on your server. Only share it with people you trust and use a different password than your server password.

## Open the admin menu in the game

1. **Join the server**\
   Join your server – see [Join Server](/tutorials/gameserver/abiotic-factor/join-server).

2. **Open the menu**\
   Press `Esc` to open the in-game menu.

3. **Open the admin area**\
   Select the **Admin** tab. There you find the list of connected players and the admin functions.

4. **Verify your admin rights**\
   If the **Admin** area is accessible to you, the server recognised you as an admin. If it is missing, your SteamID64 was not applied – check the entry in `Admin.ini` and restart the server.

> [!TIP]
> You can find out how to remove players as an admin in [Kick & Ban Players](/tutorials/gameserver/abiotic-factor/kick-ban-players).

> [!WARNING]
> **No chat or console commands**
>
> There are **no** documented admin commands in the chat and no server console for Abiotic Factor that you could use to grant admin rights. Commonly circulated commands such as `#SetAdmin` or configuration values such as `AdminSteamIDs` do not appear in the official documentation – you grant admin rights through `Admin.ini` or the admin password.
