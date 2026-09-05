---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your CryoFall Server"
description: "Download the savegame of a CryoFall server"
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
short_title: "Download Savegame"
sort: 5
related: ["gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/join-server", "gameserver/cryofall/kick-ban-players"]
---

The complete world of your CryoFall server lives in the `/Data/Saves/` folder. You can download it to your PC at any time – for example as an additional backup or to move the world to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. CryoFall saves the world automatically at regular intervals while running – otherwise you would download an incomplete save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Go to the following directory:

   ```text
   /Data/
   ```

4. **Download the savegame**\
   Download the complete `Saves` folder including all of its contents to your PC:

   ```text
   /Data/Saves/
   ```

5. **Start the server**\
   Start your server again.

> [!NOTE]
> Always download the **entire folder** instead of picking out single files. `Saves` holds the world data of your server together with the saved states the server created – only together do they form a loadable save.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download these files from the `/Data/` folder too:
>
> ```text
> SettingsServer.xml
> ModsConfig.xml
> ServerRates.config
> ```
>
> They contain your operators, the access lists and the game rates, among other things.

> [!TIP]
> **Restore the save later**
>
> If you want to move the save back onto a server later on, follow the guide [Add savegame](/tutorials/gameserver/cryofall/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/cryofall/create-backup).
