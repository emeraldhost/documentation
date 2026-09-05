---
slug: "download-world"
language: "en"
title: "How to Download the World of Your Minecraft Java Edition Server"
description: "Download a world from a Minecraft Java Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download World"
sort: 17
related: ["gameserver/minecraft/disable-nether", "gameserver/minecraft/disable-locator-bar", "gameserver/minecraft/enable-whitelist", "gameserver/minecraft/fix-server-crashes"]
---

You can download your server's world to your PC at any time, for example as an extra backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running, it saves regularly, otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your Minecraft Java Edition server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Go to the main folder of your server – the world folder is located there.

4. **Download the world folder**\
   Download the complete world folder to your PC, by default it is called `world`. If you run several worlds in parallel, download each of the world folders separately.

5. **Start the server**\
   Start your server again.

> [!TIP]
> You can see which world is currently loaded in the `server.properties` file in the main folder of your server. The `level-name=` entry contains the name of the world folder:
>
> ```text
> level-name=world
> ```

> [!TIP]
> **Restoring the world**
>
> If you want to transfer the world back to a server later, follow the guide [Upload world](/tutorials/gameserver/minecraft/upload-world).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/minecraft/create-backup).
