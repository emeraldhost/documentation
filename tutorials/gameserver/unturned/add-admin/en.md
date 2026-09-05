---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Unturned Server"
description: "Add an admin to an Unturned server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/unturned/add-mods", "gameserver/unturned/add-savegame", "gameserver/unturned/create-backup", "gameserver/unturned/download-savegame"]
---

Unturned knows two levels: the **owner**, who is configured permanently, and regular **admins**, whom you appoint while the server is running. In both cases you specify the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Set the owner

The owner is the server owner. The entry lives in the configuration and persists across restarts.

1. **Stop the server**\
   Stop your server via the dashboard. The entry is only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Commands.dat**\
   Open the following file:

   ```text
   /Servers/<ServerID>/Server/Commands.dat
   ```

   > [!NOTE]
   > **Which folder is mine?**
   >
   > `<ServerID>` is the folder name inside `/Servers/`. It comes from your server's startup parameter – usually there is exactly one folder there.

4. **Enter the SteamID64**\
   Add a new line with your SteamID64:

   ```text
   Owner 76561198012345678
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> **Structure of Commands.dat**
>
> `Commands.dat` holds one instruction per line. Lines starting with `//` are comments and are ignored. It is best to use exactly the spelling shown in the examples.

## Appoint an admin while the server runs

You appoint additional admins with a command – either in the **console** of the dashboard or, as an admin, directly in the in-game chat.

1. **Open the console or chat**\
   Open the **console** in the dashboard of your server. Alternatively open the chat in the game if you are already an admin.

2. **Enter the command**\
   In the console you enter the command without a prefix:

   ```text
   admin 76561198012345678
   ```

   In the in-game chat you prepend `/` or `@`:

   ```text
   /admin 76561198012345678
   ```

   > [!TIP]
   > For connected players you can also use the player name instead of the SteamID64, for example `admin Sam`.

3. **Revoke admin rights**\
   To remove the rights again use:

   ```text
   unadmin 76561198012345678
   ```

## Command overview

| Command | Location | Description |
|---------|----------|-------------|
| `Owner <SteamID64>` | `Commands.dat` | Sets the server owner, takes effect after a restart |
| `admin <SteamID64\|PlayerName>` | Console or chat | Makes a player an admin while the server is running |
| `unadmin <SteamID64\|PlayerName>` | Console or chat | Removes admin rights from a player |

> [!NOTE]
> **Where is the admin list?**
>
> The list of admins is stored at `/Servers/<ServerID>/Server/Adminlist.dat` and is maintained by the `admin` and `unadmin` commands. It is best to manage your admins exclusively through these commands so the list always stays valid. If you want to remove all admins at once, you can also delete the file while the server is stopped.

## Enable cheat commands

Commands such as `give` count as cheats and are disabled by default – even for admins.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Enable cheats**\
   Add a separate line to `Commands.dat`:

   ```text
   Cheats
   ```

3. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> With cheats enabled, every admin can spawn items. Only enable this if you really want it – on a survival server it quickly takes away the challenge.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/unturned/kick-ban-players).
