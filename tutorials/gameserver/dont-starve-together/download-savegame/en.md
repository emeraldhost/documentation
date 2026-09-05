---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Don’t Starve Together Server"
description: "Download a savegame from a Don’t Starve Together server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/join-server", "gameserver/dont-starve-together/kick-ban-players"]
---

You can download your server's save to your PC at any time – for example as an additional backup, to archive a world, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open the cluster folder**\
   Navigate to the folder that contains the `cluster.ini` file. That is your cluster folder. Inside you will find the shard folders `Master` (overworld) and, if the caves are enabled, `Caves`.

4. **Download the save**\
   Download the complete `save` folder:

   ```text
   <cluster folder>/Master/save/
   ```

5. **Download the caves**\
   If the caves are enabled on your server, also download this folder:

   ```text
   <cluster folder>/Caves/save/
   ```

6. **Start the server**\
   Start your server again.

> [!NOTE]
> The save is a folder, not a single file. Always download it completely, including the `saveindex` file and the `session` subfolder. Individual files taken out of it cannot be used on their own.

> [!WARNING]
> **Overworld and caves belong together**
>
> If your server uses the caves, always back up both `save` folders together. If you later restore only one of them, the overworld and the caves will no longer match.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/dont-starve-together/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create Backup](/tutorials/gameserver/dont-starve-together/create-backup).
