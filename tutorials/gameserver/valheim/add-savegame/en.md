---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Valheim Server"
description: "Add a savegame to a Valheim server"
tags: []
date: "2024-01-12"
visibility: "public"
updated: "2026-04-16"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 5
related: ["gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/change-branch", "gameserver/valheim/change-backup-settings"]
---

You can transfer a local save to your server to continue playing with an existing world.

## Find the local savegame

1. **Open savegame folder**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local
   ```

2. **Identify world files**\
   Each world consists of two files with the same name: `<WorldName>.fwl` (world metadata) and `<WorldName>.db` (world data). Both files must be transferred together.

## Upload and apply the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload world files**\
   Upload both files `<WorldName>.fwl` and `<WorldName>.db` to the following directory:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. **Set world name**\
   Open the dashboard, navigate to the **Settings** and enter the name of your uploaded files – without the file extension – in the **World Name** field (e.g. `MyWorld` for `MyWorld.fwl` and `MyWorld.db`).

5. **Start the server**\
   Save the settings and start your server.

> [!WARNING]
> If the `worlds_local` folder does not exist, start the server once so the folder structure is created automatically. Stop the server again before uploading the files.

> [!TIP]
> Create a backup of your existing server savegame before uploading, in case you want to switch back later.
