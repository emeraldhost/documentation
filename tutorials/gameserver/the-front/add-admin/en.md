---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your The Front Server"
description: "Add an admin to a The Front server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/the-front/add-savegame", "gameserver/the-front/create-backup", "gameserver/the-front/download-savegame", "gameserver/the-front/join-server"]
---

Admins on a The Front server are added by their **SteamID64** – a 17-digit number starting with `7656`. You can either set it as a startup parameter or write it into your server's configuration file.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

> [!IMPORTANT]
> Separate multiple SteamID64 with a **semicolon** (`;`) – without any spaces in between. An admin added this way automatically receives the highest GM level (level 25).

## Option 1: Via the dashboard

1. **Open the dashboard**\
   Open the **dashboard** of your server and switch to the **settings**.

2. **Enter the admin IDs**\
   Enter your SteamID64 into the field for the admin accounts. If your dashboard only offers a field for additional startup parameters, add the following there:

   ```text
   -ServerAdminAccounts="76561198012345678;76561198087654321"
   ```

3. **Restart the server**\
   Save the change and restart your server. The admin list is only read on server start.

## Option 2: Via the configuration file

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the configuration file**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /TheFrontManager/ServerConfig_<ConfigName>.ini
   ```

   > [!NOTE]
   > **Which config name?**
   >
   > The name comes from your server's startup parameter `-ConfigServerName=` – this is not the server name shown in the server list. If it is set to `new`, the file is called `ServerConfig_new.ini`. If no name is set, it is simply called `ServerConfig_.ini`.
   >
   > The folder and file name have to be spelled exactly like this – otherwise the server does not load the configuration.

4. **Enter the SteamID64**\
   Add the IDs in the `[BaseServerConfig]` section:

   ```text
   [BaseServerConfig]
   ServerAdminAccounts=76561198012345678;76561198087654321
   ```

   > [!NOTE]
   > The `[BaseServerConfig]` section has to be present in the file, otherwise no value is applied. If you create the file from scratch, this is the minimal structure.

5. **Start the server**\
   Save the file and start your server.

## Use admin rights in the game

1. **Join the server**\
   Join your server, see [Join Server](/tutorials/gameserver/the-front/join-server).

2. **Open the admin menu**\
   Press `Shift` + `G`. The admin menu opens, and you run the admin commands from there.

3. **Run a command**\
   Enter the desired command, for example:

   ```text
   AddGM 76561198012345678 25
   ```

> [!TIP]
> **Console**
>
> Alternatively you can open the console with the `` ` `` or `~` key – on an English keyboard the key to the left of the `1`. If the key does not react, switch your keyboard layout to English.

## Manage admins in the game

Once you are an admin you can grant admin rights to others directly in the game – no server restart required:

| Command | Description |
|---------|-------------|
| `AddGM <SteamID64> <GM level>` | Make a player an admin. The highest level is `25`. |
| `RemoveGM <SteamID64>` | Revoke admin rights |
| `ToggleGMTitleShow 0` | Hide the admin tag in the game |
| `ToggleGMTitleShow 1` | Show the admin tag in the game |

> [!NOTE]
> Whether your admin title is visible to other players is additionally controlled by the value `IsShowGmTitle=` in the configuration file or the startup parameter `-IsShowGmTitle`.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/the-front/kick-ban-players).
