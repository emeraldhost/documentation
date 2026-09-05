---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Arma 3 Server"
description: "Download a savegame from an Arma 3 server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/join-server", "gameserver/arma-3/kick-ban-players"]
---

If your server runs a persistent mission such as Antistasi, Vindicta, KP Liberation or Wasteland, you can download its progress to your PC at any time – for example as an additional backup or to move it to another server.

> [!NOTE]
> **No savegame available?**
>
> An Arma 3 server does not save the world state by itself. Saving only happens if the mission takes care of it. If you run a vanilla mission, no savegame file exists.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the file. Persistent missions save while the server is running – if you download during that, the savegame can be incomplete.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the profile directory**\
   Change to the following directory. The folder inside carries the profile name of your server:

   ```text
   /serverprofile/home/
   ```

4. **Download the file**\
   Download the file ending in `.vars.Arma3Profile` from the profile folder to your PC:

   ```text
   /serverprofile/home/<profileName>/<profileName>.vars.Arma3Profile
   ```

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Back up the mission as well**
>
> A savegame is useless without the matching mission. Therefore also download the `.pbo` file you use from the `/mpmissions` folder.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the file `/server.cfg` in addition.

> [!TIP]
> **Restore the savegame**
>
> If you want to move the savegame back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/arma-3/add-savegame). Keep in mind that the file has to match the profile name of the target server.

> [!NOTE]
> **Regular backups**
>
> For complete backups of your server you can also use the backup feature: [Create Backup](/tutorials/gameserver/arma-3/create-backup).
