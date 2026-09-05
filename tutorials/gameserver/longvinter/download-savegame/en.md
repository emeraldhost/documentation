---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Longvinter Server"
description: "Download a savegame from a Longvinter server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/longvinter/add-savegame", "gameserver/longvinter/create-backup", "gameserver/longvinter/join-server", "gameserver/longvinter/kick-ban-players"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Longvinter saves roughly every ten minutes while running – otherwise you would download an incomplete save.

1. **Stop the server**\
   Stop your server via the **dashboard**.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Longvinter/Saved/
   ```

4. **Download the save**\
   Download the complete `SaveGames` folder including all `.sav` files to your PC.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> The `SaveGames` folder holds the entire save – among other things tents, chests including their contents and the progress of your players. The individual `.sav` files belong together, so always back them up as a whole.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings and admins, download the following file in addition:
>
> ```text
> /Longvinter/Saved/Config/LinuxServer/Game.ini
> ```

> [!WARNING]
> Longvinter saves can grow to several gigabytes. Use an SFTP client such as FileZilla or WinSCP for the download – large transfers are more likely to break off in the browser file manager.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/longvinter/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/longvinter/create-backup).
