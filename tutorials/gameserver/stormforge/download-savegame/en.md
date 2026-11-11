---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Stormforge Server"
description: "Download the world of your Stormforge server to your PC via SFTP, as a backup or for moving to another server."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 8
related: ["gameserver/stormforge/add-savegame", "gameserver/stormforge/create-backup", "gameserver/stormforge/reset-world"]
---

You can download your server's world to your PC at any time, for example as an additional backup, for archiving or to transfer it to another server.

Stormforge stores each world in its own folder under `/saves/Worlds/`. The folder is named after the ID of the world, e.g. `3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30`.

> [!WARNING]
> Stop your server before downloading the files. While the server is running, the downloaded save can be incomplete.

## Download the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Look up the ID of the active world**\
   Open the file `/settings.json` in the main directory of your server, via SFTP or in the [File Manager](/tutorials/gameserver/use-file-browser). The value of `worldPrefabID` is the ID of the world your server currently loads:

   ```json
   "worldPrefabID": "3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30",
   ```

4. **Open the directory**\
   Navigate to the following directory:

   ```text
   /saves/Worlds/
   ```

   > [!NOTE]
   > The `saves` directory is located in the main directory of your server, so the full path is `/home/container/saves/Worlds/`.

5. **Download the world folder**\
   Download the complete folder that is named like the ID from step 3 to your PC. Always transfer the whole folder and rename neither the folder nor the file `World_<World-ID>.bytes` inside it.

6. **Start the server**\
   Start your server again.

> [!NOTE]
> **Several folders present?**\
> Several world folders can lie side by side in `/saves/Worlds/`. Only the world whose ID is set in `worldPrefabID` is loaded.

> [!TIP]
> **Saving the world settings too**\
> Your world settings are stored in the file `/settings.json`. Download it as well if you want to keep them.

> [!TIP]
> **Restoring the savegame**\
> If you want to transfer the world back to a server later, follow the guide [Add savegame](/tutorials/gameserver/stormforge/add-savegame).

> [!NOTE]
> **Regular backups**\
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/stormforge/create-backup).
