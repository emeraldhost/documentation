---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your The Forest Server"
description: "Download a savegame from a The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/the-forest/add-savegame", "gameserver/the-forest/create-backup", "gameserver/the-forest/join-server", "gameserver/the-forest/kick-ban-players"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. The Forest saves automatically at regular intervals – if you download while it does, the savegame can be incomplete.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /TheForestDedicatedServer_Data/Multiplayer/
   ```

4. **Download the slot folder**\
   Download the complete folder of your savegame – `Slot1` to `Slot5` – with all of its files to your PC.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> **Which slot is the right one?**
>
> The slot your server uses is defined in the file `/TheForestDedicatedServer_Data/forest/config/config.cfg` in the `slot` value. If it says `slot 1`, then `Slot1` is your current savegame.

> [!WARNING]
> **Caution**
>
> A savegame is always the complete `Slot#` folder. Always download it in full – individual files from it do not make a usable savegame.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following file in addition:
>
> ```text
> /TheForestDedicatedServer_Data/forest/config/config.cfg
> ```

> [!TIP]
> **Restore the savegame**
>
> If you want to move the savegame back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/the-forest/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/the-forest/create-backup).
