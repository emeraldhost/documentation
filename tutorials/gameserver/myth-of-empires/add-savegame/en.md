---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Myth of Empires Server"
description: "Add a savegame to a Myth of Empires server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["myth-of-empires"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/myth-of-empires/add-admin", "gameserver/myth-of-empires/create-backup", "gameserver/myth-of-empires/download-savegame", "gameserver/myth-of-empires/join-server"]
---

Myth of Empires does **not** use a world name. A save is always the complete folder `Saved` – not a single file. You upload that folder with all of its contents to the location where your server expects its save.

> [!NOTE]
> **Where does the save come from?**
>
> This guide describes a server-to-server transfer – that is, a save you previously downloaded from a Myth of Empires server. For saves from singleplayer there is no documented way onto a dedicated server.

> [!TIP]
> Create a [backup](/tutorials/gameserver/myth-of-empires/create-backup) of your current server save before uploading, in case you want to switch back later.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /MOE/
   ```

   > [!NOTE]
   > If the `Saved` folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards.

4. **Remove the old save**\
   Rename the existing `Saved` folder (for example to `Saved_old`) or delete it.

   > [!WARNING]
   > **Caution**
   >
   > This deactivates the current save of your server. Back it up first via [Download savegame](/tutorials/gameserver/myth-of-empires/download-savegame) or a [backup](/tutorials/gameserver/myth-of-empires/create-backup).

5. **Upload Saved**\
   Upload your `Saved` folder with all of its subfolders and files into this directory. The folder has to be named exactly `Saved`.

6. **Check the server ID**\
   Compare the **server ID** of your server with the one of the server the save came from. Both have to match, otherwise your server does not find the uploaded save.

7. **Start the server**\
   Start your server. On startup it now loads your uploaded save.

> [!CAUTION]
> **Do not change the server ID**
>
> The save is stored under the **server ID** – there is no world name you could enter in a configuration. If you change the server ID, your server looks under a different ID and creates a completely new, empty world. The old save stays on the disk but is no longer loaded.

> [!WARNING]
> **Caution**
>
> Always upload the complete `Saved` folder. Besides the world it also contains the player and building data as well as your server settings. If you mix files from different saves, world and player data no longer match.

> [!NOTE]
> The `Saved` folder also contains your server settings under `Config/WindowsServer/`. If you upload the folder in full, you overwrite the current settings of your server. The folder is called `WindowsServer` on your Linux server as well – Myth of Empires only ships a Windows server binary, which runs through a compatibility layer.

> [!TIP]
> **Reset the server**
>
> If you want to start over completely instead, stop the server, delete the `Saved` folder and start the server again. A fresh world is generated on the next start.
