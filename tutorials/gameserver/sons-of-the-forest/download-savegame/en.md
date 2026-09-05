---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Sons Of The Forest Server"
description: "Download a savegame from a Sons Of The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/sons-of-the-forest/add-savegame", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/join-server", "gameserver/sons-of-the-forest/kick-ban-players"]
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
   /serverconfig/Saves/DedicatedServer/Multiplayer/
   ```

4. **Choose the right folder**\
   Each save is stored in its own folder named after the ten-digit slot number (e.g. `0000000001` for save slot `1`).

5. **Download the folder**\
   Download the complete folder including all files it contains to your PC – these include several `.json` files and a `SaveData.zip`. The files belong together and must always be saved as a set.

6. **Start the server**\
   Start your server again.

> [!TIP]
> **Which folder is the right one?**
>
> You can tell which save your server currently uses from the `SaveSlot` value in the file `/serverconfig/dedicatedserver.cfg`. If it contains `"SaveSlot": 1`, for example, you need the folder `0000000001`.

> [!NOTE]
> Player data such as inventory, position and clothing is not part of the world savegame. Only the world state and your buildings are saved.

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/sons-of-the-forest/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/sons-of-the-forest/create-backup).
