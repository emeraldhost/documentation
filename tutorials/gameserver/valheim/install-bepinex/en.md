---
slug: "install-bepinex"
language: "en"
title: "How to Install BepInEx on Your Valheim Server"
description: "Use BepInEx for mods on a Valheim server"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-10-20"
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

If you already have a regular Valheim server, you create an instance with Valheim BepInEx on it yourself. Your previous instance is kept, and you can switch between instances at any time.

1. **Back up your world**: Download your world so you can continue playing it in the new instance (see [Download Savegame](/tutorials/gameserver/valheim/download-savegame)).

2. **Open instances**: Open your server's dashboard and click **Instanzen** (Instances) in the left sidebar.

3. **Create an instance**: Click **Instanz erstellen** (Create instance), search for "Valheim", select **Valheim BepInEx** and continue to the next step.

4. **Configure the instance**: Enter a name for the instance under **Name** and set **Arbeitsspeicher** (RAM) and **Speicherplatz** (storage). At the bottom you see whether this changes your monthly price. Then continue to the next step.

5. **Create it**: Check your selection in the **Übersicht** (Overview) and click **Erstellen** (Create). The instance is set up automatically, which can take a few minutes.

6. **Activate the instance**: Switch to the new instance. To do so, click the **Instanz wechseln** (Switch instance) icon in the header or select **Instanz wechseln** in the **Aktionen** (Actions) dropdown (see [Use Instances](/tutorials/gameserver/use-instances)).

7. **Upload your world**: Upload your saved world to the new instance (see [Add Savegame](/tutorials/gameserver/valheim/add-savegame)).

8. **Start the server**: Start your server and check whether BepInEx is loaded as described below.

> [!NOTE]
> How many instances you can create is shown at the top of the **Instanzen** (Instances) page. If all slots are in use, you can add more via **Instanz-Plätze erweitern** (Expand instance slots).

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
