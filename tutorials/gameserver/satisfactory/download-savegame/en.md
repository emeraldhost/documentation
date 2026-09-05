---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Satisfactory Server"
description: "Download a savegame from a Satisfactory server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 6
related: ["gameserver/satisfactory/change-server-name", "gameserver/satisfactory/create-backup", "gameserver/satisfactory/join-server", "gameserver/satisfactory/set-admin-password"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Satisfactory saves automatically while running – if you download during a save, the file can be incomplete.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /.config/Epic/FactoryGame/Saved/SaveGames/server/
   ```

   > [!NOTE]
   > The folder `.config` starts with a dot and is therefore hidden. Enable the display of hidden files in your SFTP client if you cannot see it.

4. **Download the save**\
   Download the `.sav` file you need to your PC. The file name matches the name of the session in the game.

5. **Start the server**\
   Start your server again.

> [!NOTE]
> **Which file is the right one?**
>
> If there are several `.sav` files in the folder, the most recently modified one is usually your current save. On top of that, the server keeps rotating autosave files whose names end in `_autosave_0`, `_autosave_1` and so on. You can also see which session is loaded in the **Server Manager** on the **Manage Saves** tab.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following folder in addition:
>
> ```text
> /FactoryGame/Saved/Config/LinuxServer/
> ```
>
> The server name as well as the admin and server password are stored in the parent folder instead, in a file starting with `ServerSettings.` that contains the Game Port of your server in its name:
>
> ```text
> /.config/Epic/FactoryGame/Saved/SaveGames/
> ```

> [!IMPORTANT]
> Do not delete the `ServerSettings.` file on the server. Without it, the server loses its name, its admin password, its server password and its certificate and counts as unclaimed again.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/satisfactory/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create Backup](/tutorials/gameserver/satisfactory/create-backup).
