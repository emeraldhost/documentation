---
slug: "download-world"
language: "en"
title: "How to Download the World of Your Space Engineers Server"
description: "Download a world from a Space Engineers server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download World"
sort: 8
related: ["gameserver/space-engineers/change-server-name", "gameserver/space-engineers/configure-automatic-backups", "gameserver/space-engineers/enable-experimental-mode", "gameserver/space-engineers/enable-ingame-scripts"]
---

You can download your server's world to your PC at any time – for example as an additional backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted world.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), or use the file browser.

3. **Open the world folder**\
   Go to the following folder on the server:

   ```text
   Saves/World/
   ```

4. **Download the world data**\
   Download the **complete contents** of this folder to your PC – among others `Sandbox.sbc`, `Sandbox_config.sbc` and the `.sbs` files. Always download all files; individual files on their own do not make a working world.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> The world name on your server is fixed to **World** and cannot be changed (visible in the **Settings**). Your world is therefore always located in the `Saves/World/` folder – there is no other folder you would have to look in.

> [!TIP]
> **Restore the world**
>
> If you want to transfer the world back to a server later, follow the guide [Upload world](/tutorials/gameserver/space-engineers/upload-world).

> [!NOTE]
> **Regular backups**
>
> For regular backups you can use your server's [automatic backups](/tutorials/gameserver/space-engineers/configure-automatic-backups) or create a manual [backup](/tutorials/gameserver/create-backup).
