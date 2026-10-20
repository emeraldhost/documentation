---
slug: "use-instances"
language: "en"
title: "How to Use Instances on Your Game Server"
description: "Create multiple game instances on one game server, rename them and switch between them"
tags: []
date: "2026-10-20"
visibility: "public"
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

With **Instanzen** (Instances) you create multiple game instances on one server. This lets you switch between different worlds and savegames and rename or reinstall instances without losing any data.

You don't have to stick with the same game: when creating an instance, you can choose any game, e.g. an instance with Valheim or Valheim BepInEx on a Minecraft server.

## Instance Slots

Open your server's dashboard and click **Instanzen** (Instances) in the left sidebar. At the top of the **Spiel-Instanzen** (Game instances) page you see how many instances you can still create, e.g. "nur noch 1 Instanz möglich" (only 1 more instance possible). If all slots are in use, you can add more via **Instanz-Plätze erweitern** (Expand instance slots).

The table lists all instances with **Name**, **Produkt** (Product), **Größe** (Size), **Status** (e.g. **Aktiv** – Active) and the date they were **Erstellt** (Created).

## Create an Instance

1. **Open instances**\
   Open your server's dashboard and click **Instanzen** (Instances) in the left sidebar.

2. **Create an instance**\
   Click **Instanz erstellen** (Create instance).

3. **Select a game**\
   In the **Spiel auswählen** (Select game) step, search for the game you want or narrow down the selection with the **Alle Plattformen** (All platforms) filter. Select the game and continue to the next step.

4. **Configure the instance**\
   In the **Konfiguration** (Configuration) step, enter a name for the instance under **Name**. Then use the **Arbeitsspeicher** (RAM) and **Speicherplatz** (Storage) sliders to set how many resources the instance gets. At the bottom you see whether this changes your **Monatspreis** (Monthly price). Then continue to the next step.

   > [!NOTE]
   > Which values you can set depends on the game. For Valheim, for example, it is 3 to 32 GB of RAM and 20 to 200 GB of storage.

5. **Create it**\
   Check your selection in the **Übersicht** (Overview) and click **Erstellen** (Create). The instance is then set up automatically, which can take a few minutes.

## Switch Instances

On the **Instanzen** (Instances) page, the **Status** column shows which instance is **Aktiv** (Active). To use a different instance, switch to it:

- Click the **Instanz wechseln** (Switch instance) icon in your server's header, or
- open the **Aktionen** (Actions) dropdown and select **Instanz wechseln** (Switch instance).

You can see which instance is currently active in the **Übersicht** (Overview) in the **Aktuelle Instanz** (Current instance) box. **Alle Instanzen anzeigen** (Show all instances) takes you directly to the **Instanzen** (Instances) page.

> [!TIP]
> Create a backup before switching so you can fall back on an earlier state if needed. To learn how, see [Create Backup](/tutorials/gameserver/create-backup).

## Rename an Instance

1. **Open the menu**\
   On the **Instanzen** (Instances) page, click the menu (**…**) in the row of the instance.

2. **Rename**\
   Select **Umbenennen** (Rename) and enter the new name.
