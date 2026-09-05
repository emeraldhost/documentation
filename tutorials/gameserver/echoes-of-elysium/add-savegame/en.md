---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Echoes of Elysium Server"
description: "Add a savegame to an Echoes of Elysium server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["echoes-of-elysium"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/echoes-of-elysium/create-backup", "gameserver/echoes-of-elysium/download-savegame", "gameserver/echoes-of-elysium/join-server"]
---

The complete save of an Echoes of Elysium server lives in a single directory called `world`. That is where the server stores your world with everything you have built in it.

> [!NOTE]
> There is **no world name** that you would have to enter anywhere. Which world is loaded depends purely on the contents of the `world` directory. Switching worlds therefore always means: replace the contents of that directory.

> [!TIP]
> **Where does a savegame come from?**
>
> This guide is meant for worlds that come from an Echoes of Elysium server – for example when moving to another server or when restoring your own backup. How to download the save from a server is described in [Download savegame](/tutorials/gameserver/echoes-of-elysium/download-savegame).

## Upload the savegame

1. **Create a backup**\
   Save the current state of your server before you overwrite anything: [Create backup](/tutorials/gameserver/echoes-of-elysium/create-backup).

2. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the world files itself and would overwrite your uploaded files.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the directory**\
   Navigate to the following directory:

   ```text
   /world/
   ```

   > [!NOTE]
   > The `world` directory is located in the main directory of your server, so the full path is `/home/container/world/`. If it does not exist yet, start the server once so the folder structure gets created, then stop it again.

5. **Remove the old world data**\
   Delete the existing contents of the `world` directory. If old files are left behind, they can get mixed up with your uploaded save.

   > [!WARNING]
   > This removes the current world of your server. If you skipped step 1, create the backup now.

6. **Upload the new world data**\
   Upload the **contents** of your save into the `/world/` directory – that is, the files and subfolders themselves, not another `world` folder inside it.

7. **Start the server**\
   Start your server. Your uploaded save is now loaded on startup.

> [!CAUTION]
> **Do not rename the directory**
>
> Keep the name `world`. On every start the values from the fields in the **dashboard** are written into the server configuration `config.json` – including the world directory. If you enter a different folder there by hand, that change is lost again with the next start.

> [!TIP]
> **Keeping several worlds**
>
> If you want to switch between multiple worlds, download the other world to your PC beforehand. Additional folders next to `world` on the server are not loaded by the game.
