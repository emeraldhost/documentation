---
slug: "install-bepinex"
language: "en"
title: "How to Install BepInEx on Your Valheim Server"
description: "Use BepInEx for mods on a Valheim server"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-10-19"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install BepInEx"
sort: 3
related: ["gameserver/valheim/add-admin", "gameserver/valheim/download-savegame", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

**BepInEx** is the mod framework for Valheim. Without BepInEx, your server does not load any mods.

> [!IMPORTANT]
> You cannot install BepInEx yourself on a regular Valheim server. Our servers run on Linux, where BepInEx only loads if the server is started with a special start command. If you simply upload the BepInEx files via SFTP, your server starts normally but ignores all mods. For mods you therefore need the **Valheim BepInEx** product.

## Valheim BepInEx Server

With the [Valheim BepInEx](https://emeraldhost.de/en/valheim-bepinex-server-mieten?utm_source=documentation&utm_medium=marketing&utm_campaign=install-bepinex) product, everything is already set up:

- When the server is installed, the current version of the [BepInExPack for Valheim](https://thunderstore.io/c/valheim/p/denikson/BepInExPack_Valheim/) is installed automatically.
- The server starts with BepInEx automatically. You don't need to set anything up.
- The other settings in the dashboard, e.g. server name, world name, crossplay and backups, work the same as on the regular Valheim server.

You then upload mods as `.dll` files to the `/BepInEx/plugins/` folder. To learn how, see [Add Mods](/tutorials/gameserver/valheim/add-mods).

## Switch from a Regular Valheim Server

If you already have a regular Valheim server, you can switch it to Valheim BepInEx yourself.

1. **Create a backup**: First create a [backup](/tutorials/gameserver/valheim/create-backup) or download your world (see [Download Savegame](/tutorials/gameserver/valheim/download-savegame)).

2. **Open Instances**: Open your server's dashboard and click on **Instanzen** (Instances).

3. **Select Valheim BepInEx**: Switch to **Valheim BepInEx** there.

4. **Start the server**: Start your server and check whether BepInEx is loaded as described below.

## Check Whether BepInEx Is Loaded

1. **Open the console**: Open the console in your server's dashboard and start the server.

2. **Check the startup messages**: During startup, messages from BepInEx appear in the console. If BepInEx is loaded, it also creates the log file `/BepInEx/LogOutput.log`. It contains a line like this for every loaded mod:

   ```text
   [Info   :   BepInEx] Loading [ExampleMod 1.0.0]
   ```

> [!NOTE]
> If the file `/BepInEx/LogOutput.log` is missing after a restart, BepInEx was not loaded. In that case, check whether your server is the Valheim BepInEx product.

## Players on Consoles

Players on Xbox, PlayStation and via Game Pass cannot install mods. If a mod requires players to have it installed as well, these players can no longer join your server. Mods that only run on the server are not affected.
