---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Voyagers of Nera Server"
description: "Download a savegame from a Voyagers of Nera server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["voyagers-of-nera"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/voyagers-of-nera/add-savegame", "gameserver/voyagers-of-nera/create-backup", "gameserver/voyagers-of-nera/join-server"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup or to move it to another server.

In Voyagers of Nera a savegame is always a **complete folder** named after the server ID. That ID is a random string your server generates itself on the first start.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. The server saves automatically at regular intervals – if you download while it does, the savegame can be incomplete.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /BoatGame/Saved/PersistedData/
   ```

4. **Download the savegame folder**\
   Download the complete folder with the random string in its name – your server ID – including all of its files to your PC.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> **Which folder is the right one?**
>
> The same directory also contains a `CustomConfig` folder. It holds your server settings and is **not** a savegame. The folder with the random string is your world.

> [!WARNING]
> **Caution**
>
> A savegame is always the complete folder. Always download it in full – individual files from it do not make a usable savegame.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following folder in addition:
>
> ```text
> /BoatGame/Saved/PersistedData/CustomConfig/
> ```

> [!TIP]
> **Restore the savegame**
>
> If you want to move the savegame back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/voyagers-of-nera/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/voyagers-of-nera/create-backup).
