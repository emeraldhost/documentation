---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Valheim Server"
description: "Download a savegame from a Valheim server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 2
related: ["gameserver/valheim/add-admin", "gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive a world, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. **Download the world folder**\
   Download the complete `<WorldName>` folder to your PC. Since Valheim 1.0, every world is a folder of its own whose files belong together as a set. Therefore always download the whole folder and not just individual files from it.

5. **Start the server**\
   Start your server again.

> [!TIP]
> You can tell which folder belongs to your world from the **World Name** field in the **Settings** of the dashboard. If it contains `MyWorld`, for example, you need the folder `MyWorld`. Folders with `_backup_` in their name are backups, not the current state.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/valheim/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/valheim/create-backup). To learn how to restore one of the automatic backups that Valheim itself creates on your server, see [Restore automatic backup](/tutorials/gameserver/valheim/restore-automatic-backup).
