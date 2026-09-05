---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Terraria Server"
description: "Download a savegame from a Terraria server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/terraria/add-savegame", "gameserver/terraria/create-backup", "gameserver/terraria/join-server", "gameserver/terraria/kick-ban-players"]
---

You can download your server's world to your PC at any time – for example as an additional backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the file. While the server is running it saves at regular intervals – otherwise you would download an incomplete or corrupted world.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /saves/Worlds/
   ```

4. **Download the world**\
   Download the `.wld` file of your world to your PC. The entire world is contained in this single file.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Which file is the right one?**
>
> You can tell which world is loaded from the **World Name** field in the **Settings** of the dashboard. If it contains `MyWorld`, for example, you need the file `MyWorld.wld`.

> [!NOTE]
> **Backup files**
>
> The server also stores backups with the `.bak` extension in the same folder. They belong to your world and contain a slightly older state. Download them as well if you want a complete copy of your worlds folder.

> [!TIP]
> **Continue playing locally**
>
> Copy the downloaded `.wld` file to `%userprofile%\Documents\My Games\Terraria\Worlds` on your PC to open the world in single player.

> [!TIP]
> **Restoring the world**
>
> If you want to transfer the world back to a server later, follow the guide [Add savegame](/tutorials/gameserver/terraria/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/terraria/create-backup).
