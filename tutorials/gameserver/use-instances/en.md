---
slug: "use-instances"
language: "en"
title: "How to Use Instances on Your Game Server"
description: "Create multiple game instances on one game server, rename them and switch between them"
tags: []
date: "2026-10-20"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use Instances"
sort: 8
related: ["gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/valheim/install-bepinex"]
---

With **Instances** you create multiple game instances on one server. This lets you switch between different worlds and savegames and rename or reinstall instances without losing any data.

You don't have to stick with the same game: when creating an instance, you can choose any game, e.g. an instance with Valheim or Valheim BepInEx on a Minecraft server.

## Instance Slots

Open your server's dashboard and click **Instances** in the left sidebar. At the top of the **Game Instances** page you see how many instances you can still create, e.g. "only 1 instance left". If all slots are in use, you can add more via **Add instance slots**.

The table lists all instances with **Name**, **Product**, **Size**, **Status** (e.g. **Active**) and the date they were **Created**.

## Create an Instance

1. **Open instances**\
   Open your server's dashboard and click **Instances** in the left sidebar.

2. **Create an instance**\
   Click **Create Instance**. The **New Instance** dialog opens.

3. **Select a game**\
   In the **Select Game** step, search for the game you want or narrow down the selection with the **All Platforms** filter. Select the game and click **Next**.

4. **Configure the instance**\
   In the **Configuration** step, enter a name for the instance under **Name**. Then use the **Memory** and **Storage** sliders to set how many resources the instance gets. At the bottom you see whether this changes your **Monthly Price**. Then click **Next**.

   > [!NOTE]
   > Which values you can set depends on the game. For Valheim, for example, it is 3 to 32 GB of RAM and 20 to 200 GB of storage.

5. **Create it**\
   Check your selection in the **Review** step and click **Create**. The instance is then set up automatically, which can take a few minutes.

## Switch Instances

On the **Instances** page, the **Status** column shows which instance is **Active**. To use a different instance, switch to it:

- Click the **Switch Instance** icon in your server's header, or
- open the **Actions** dropdown and select **Switch Instance**.

Both take you to the **Instances** page, where you choose the instance you want. You can see which instance is currently active in the **Overview** in the **Current Instance** box. **View All Instances** takes you directly to the **Instances** page.

> [!TIP]
> Create a backup before switching so you can fall back on an earlier state if needed. To learn how, see [Create Backup](/tutorials/gameserver/create-backup).

## Rename an Instance

1. **Open the menu**\
   On the **Instances** page, click the menu (**…**) in the row of the instance.

2. **Rename**\
   Select **Rename** and enter the new name.
