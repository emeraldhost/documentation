---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your SCUM Server"
description: "Add an admin to a SCUM server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/scum/add-savegame", "gameserver/scum/create-backup", "gameserver/scum/download-savegame", "gameserver/scum/join-server"]
---

Admins on a SCUM server are defined exclusively through configuration files. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

> [!NOTE]
> The configuration folder is called `WindowsServer` on your Linux server as well. That is intended – SCUM only ships a Windows server binary, which runs on Linux servers through a compatibility layer.

## Add an admin

1. **Stop the server**\
   Stop your server via the dashboard. The admin lists are only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open AdminUsers.ini**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /SCUM/Saved/Config/WindowsServer/AdminUsers.ini
   ```

4. **Enter the SteamID64**\
   Enter exactly one SteamID64 per line:

   ```text
   76561198012345678
   76561198087654321
   ```

5. **Start the server**\
   Save the file and start your server.

## Grant additional permissions

Some commands are not enabled automatically. You allow them by adding a permission suffix in square brackets directly after the SteamID64 – without a space in between:

```text
76561198012345678[SetGodMode]
76561198087654321[SetGodMode, RestartServer]
76561198011223344[RestartServer]
```

| Suffix | Meaning |
|--------|---------|
| `[SetGodMode]` | Allows the command `#SetGodMode True` and `#SetGodMode False`. In SCUM this means instant building – not classic invulnerability, you can still die. |
| `[RestartServer]` | Allows restarting the server with the command `#RestartServer pretty please` |

> [!NOTE]
> Without a suffix the admin still gets the regular admin commands. Multiple suffixes go into the same square brackets, separated by commas.

## Access to the in-game server settings

To additionally let an admin edit the server settings directly in the game, add them to a second file:

```text
/SCUM/Saved/Config/WindowsServer/ServerSettingsAdminUsers.ini
```

This file takes **only the plain SteamID64** – without square brackets and without suffixes:

```text
76561198012345678
```

This file is also only read on server start.

## Use admin commands

1. **Open the chat**\
   Press `T` in the game to open the chat.

2. **Enter a command**\
   All admin commands start with `#`, for example:

   ```text
   #ListPlayers
   ```

3. **List all commands**\
   If you enter just a single `#`, the server lists all available commands.

> [!WARNING]
> Admin rights can only be granted through the file `AdminUsers.ini`. Widely circulated commands such as `#SetAdmin` or `#God` do not exist in SCUM.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/scum/kick-ban-players).
