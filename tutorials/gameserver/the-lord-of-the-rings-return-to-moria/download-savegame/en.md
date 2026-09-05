---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your The Lord of the Rings Return to Moria Server"
description: "Download a savegame from a The Lord of the Rings Return to Moria server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 3
related: ["gameserver/the-lord-of-the-rings-return-to-moria/add-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/create-backup", "gameserver/the-lord-of-the-rings-return-to-moria/join-server", "gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players"]
---

You can download your server's world to your PC at any time – for example as an additional backup or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the file. As long as the server runs it keeps writing to the world – downloading during that time can result in an incomplete savegame.

1. **Stop the server**\
   Stop your server via the dashboard. The server saves and shuts down cleanly while doing so.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /Moria/Saved/SaveGamesDedicated/
   ```

4. **Download the world file**\
   Download the desired `MW_*.sav` file to your PC. Every world on your server is exactly one such file.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> **Which file is the right one?**
>
> The world your server uses is defined in the `[World]` section of `MoriaServerConfig.ini` in the main directory: as a file name in `OptionalWorldFilename` or – if that is empty – through the world name in `Name`.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download these files from the main directory in addition:
>
> ```text
> MoriaServerConfig.ini
> MoriaServerPermissions.txt
> MoriaServerRules.txt
> ```

> [!TIP]
> **Restore the savegame**
>
> If you want to move the world back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For complete backups of your server you can also use the backup feature: [Create Backup](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/create-backup).
