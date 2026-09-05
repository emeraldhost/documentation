---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your CryoFall Server"
description: "Add a savegame to a CryoFall server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/cryofall/add-admin", "gameserver/cryofall/add-mods", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame"]
---

The complete world of a CryoFall server lives in the `/Data/Saves/` folder. To use a different save you simply replace that folder – there is no world name to enter anywhere.

> [!NOTE]
> This guide covers saves that come from a CryoFall server – for example a [downloaded savegame](/tutorials/gameserver/cryofall/download-savegame) or a world from another server you want to move over.

> [!WARNING]
> **Caution**
>
> Only use saves that were created with the same game version your server runs. Saves from older versions are no longer compatible after an update.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save regularly.

2. **Create a backup**\
   Secure your current state before replacing it: [Create Backup](/tutorials/gameserver/cryofall/create-backup).

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the directory**\
   Go to the following directory:

   ```text
   /Data/
   ```

5. **Remove the old save**\
   Delete the existing `Saves` folder including its contents.

   > [!WARNING]
   > **Caution**
   >
   > This removes the current world of your server. So do not skip step 2 if you might want to switch back.

6. **Upload the new save**\
   Upload your `Saves` folder with all of its contents into `/Data/`. The folder name has to be exactly `Saves` – your server runs on Linux and is case-sensitive.

7. **Start the server**\
   Start your server. On startup it loads the existing save.

## Manage multiple worlds with slots

CryoFall stores every world in a numbered slot. That lets you keep several worlds side by side and switch between them without moving any files.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open the configuration**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /Data/SettingsServer.xml
   ```

3. **Change the slot**\
   Enter the slot number you want to use:

   ```xml
   <savegame_slot_id>0</savegame_slot_id>
   ```

4. **Start the server**\
   Save the file and start your server. If a world already exists for that slot it gets loaded – otherwise the server generates a new world.

> [!IMPORTANT]
> When you upload a save from somewhere else, the slot number has to match that save. If an empty world is generated after the start, the wrong slot is usually configured. Stop the server, change `savegame_slot_id` and start it again – the uploaded save is not lost in the meantime.

## Reset the world

If you want to start over completely, just delete the save – your server automatically generates a new world on the next start.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Create a backup**\
   Secure the old world in case you need it later: [Create Backup](/tutorials/gameserver/cryofall/create-backup).

3. **Delete the save**\
   Delete the following folder via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /Data/Saves/
   ```

4. **Start the server**\
   Start your server. It generates a new world.

> [!WARNING]
> **Caution**
>
> A reset also removes all characters, bases and progress of your players. Announce a wipe well in advance.

> [!NOTE]
> **Single-player worlds**
>
> For worlds you started locally in your game we have no documented way of transferring them onto a server. Work with saves that come from a server instead.

> [!WARNING]
> **Settings managed by the dashboard**
>
> Server name, description, server list, maximum players, autosave interval and the number of saved states are written from the **dashboard** into `SettingsServer.xml` on every start. If you change these values inside the file they are lost on the next start – only change them in the dashboard.
