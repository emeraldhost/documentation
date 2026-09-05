---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Longvinter Server"
description: "Add a savegame to a Longvinter server"
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
short_title: "Add Savegame"
sort: 2
related: ["gameserver/longvinter/add-admin", "gameserver/longvinter/create-backup", "gameserver/longvinter/download-savegame", "gameserver/longvinter/join-server"]
---

The save of a Longvinter server is not a single file but the complete `SaveGames` folder. It contains many `.sav` files that together hold the world, all tents, chests and the progress of your players.

> [!NOTE]
> Longvinter does not use a **world name**. There is no configuration key for a world or save name – on startup the server always loads whatever is inside the `SaveGames` folder.

> [!IMPORTANT]
> This guide is meant for saves that come from a **dedicated server** – for example when moving from another server or restoring a download. For worlds from a locally hosted session on your PC there is **no documented procedure** and no officially confirmed storage location, which is why we deliberately do not describe that route here.

## Structure of the save

Longvinter stores several `.sav` files in the `SaveGames` folder that belong together: the server saves the world in sections and writes out the placed objects, the chests and the player data alongside it. How many files there are and what exactly they are called depends on the state of your server and changes with updates.

> [!WARNING]
> Always transfer the **complete content** of the folder and never individual files – otherwise the data no longer matches up.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the **dashboard**. While the server is running it writes to the save files itself and would overwrite your upload.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Longvinter/Saved/SaveGames/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start your server once so the folder structure gets created. Stop it again afterwards.

4. **Remove the old save**\
   Delete all existing `.sav` files in this folder. If files of the old save are left behind, they get mixed with your new save.

   > [!WARNING]
   > This removes the current save of your server. Create a [backup](/tutorials/gameserver/longvinter/create-backup) beforehand or download the existing save in case you want to switch back: [Download savegame](/tutorials/gameserver/longvinter/download-savegame).

5. **Upload the new save**\
   Upload all `.sav` files of your save into this directory. The file names have to stay unchanged.

6. **Start the server**\
   Start your server. The new save is now loaded.

> [!TIP]
> Longvinter saves can grow to several gigabytes over time. Use an SFTP client such as FileZilla or WinSCP for the transfer – large transfers are more likely to break off in the browser file manager.

> [!NOTE]
> Your server settings are not part of the save but live in a separate file:
>
> ```text
> /Longvinter/Saved/Config/LinuxServer/Game.ini
> ```
>
> If you also want to take your settings and admins with you, transfer that file as well – see [Add Admin](/tutorials/gameserver/longvinter/add-admin).
