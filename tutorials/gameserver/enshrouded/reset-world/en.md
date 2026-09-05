---
slug: "reset-world"
language: "en"
title: "How to Reset the World of Your Enshrouded Server"
description: "Reset the world of an Enshrouded server"
tags: []
date: "2026-08-13"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Reset World"
sort: 14
related: ["gameserver/enshrouded/join-server", "gameserver/enshrouded/kick-ban-players", "gameserver/enshrouded/performance-problems-on-enshrouded-servers", "gameserver/enshrouded/read-server-log"]
---

Enshrouded has no reset button. You get a fresh world by deleting the save in the save folder – on the next start the server automatically creates a new world.

> [!IMPORTANT]
> Resetting removes your current world for good: all bases and buildings, every change to the terrain, all chests including their contents and your entire progress in the world. There is no undo. So always create a backup **first** – without one there is no way back to your old state.

## Reset the world

1. **Create a backup**\
   Secure your current world before you delete anything: [Create Backup](/tutorials/gameserver/enshrouded/create-backup). You can also download the save to your PC: [Download savegame](/tutorials/gameserver/enshrouded/download-savegame).

2. **Stop the server**\
   Stop your server via the dashboard. A running server writes the world back to disk about every five minutes – never delete the files while it is running.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Delete the save**\
   Navigate to the `savegame` folder and delete all files inside it. A world consists of several files there: the world file `3ad85aea`, its automatic rolling copies `3ad85aea-1` to `3ad85aea-9`, the files ending in `_info` (name and metadata of the world) and the files ending in `-index` (which copy is currently active). Which of them exist depends on the age of your world – so simply delete the entire contents of the folder. You can keep the `savegame` folder itself.

5. **Start the server**\
   Start your server via the dashboard. It creates a new world while booting up. As soon as `[Session] 'HostOnline' (up)!` appears in the console you can join.

> [!WARNING]
> Only delete the contents of the `savegame` folder. The file `enshrouded_server.json` sits in the main directory and holds your complete server configuration – deleting it also wipes your user groups and passwords.

## What is gone and what stays

| Gone | Stays |
|------|-------|
| Bases and buildings | Your character with level, skills and backpack |
| Changes to the terrain | The server configuration in `enshrouded_server.json` |
| Chests and their contents | User groups and passwords |
| Your entire progress in the world | The backups you created earlier |

> [!NOTE]
> Only the progress of the world is stored on the server. Your character – level, skill points and the contents of your backpack – is saved on your own machine. So you enter the new world with your usual character, but without a base and without any storage.

> [!TIP]
> If the new world should run under different rules, change the [difficulty](/tutorials/gameserver/enshrouded/adjust-difficulty) before you start the server again.

> [!TIP]
> **Restoring the old world**
>
> If you created a backup before deleting, you restore it via the dashboard: [Create Backup](/tutorials/gameserver/enshrouded/create-backup). If you downloaded the save to your PC instead, upload it again via SFTP: [Add savegame](/tutorials/gameserver/enshrouded/add-savegame).
