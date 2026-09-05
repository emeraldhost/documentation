---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your RuneScape: Dragonwilds Server"
description: "Download a savegame from a RuneScape Dragonwilds server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/runescape-dragonwilds/create-backup", "gameserver/runescape-dragonwilds/create-custom-world", "gameserver/runescape-dragonwilds/set-admin-password", "gameserver/runescape-dragonwilds/join-server"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup, to archive it, or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. While the server is running it saves regularly – otherwise you would download an incomplete or corrupted savegame.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Go to the following directory:

   ```text
   /RSDragonwilds/Saved/SaveGames/
   ```

4. **Download the file**\
   Download the `.sav` file of your world from this directory to your PC. This single file contains the complete savegame.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Find the right file**
>
> If there are several `.sav` files in the directory, you can find the name of the active world in the **Settings** in the dashboard in the **SaveGame** field – the matching file has exactly that name plus the `.sav` extension.

> [!TIP]
> **Restore the savegame**
>
> If you want to transfer the savegame back to a server later, follow the guide [Add savegame](/tutorials/gameserver/runescape-dragonwilds/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/runescape-dragonwilds/create-backup).
