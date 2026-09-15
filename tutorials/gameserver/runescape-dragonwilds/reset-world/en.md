---
slug: "reset-world"
language: "en"
title: "How to Reset the World on Your RuneScape: Dragonwilds Server"
description: "Reset the world of a RuneScape Dragonwilds server"
tags: []
date: "2026-09-15"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Reset World"
sort: 13
related: ["gameserver/runescape-dragonwilds/create-backup", "gameserver/runescape-dragonwilds/download-savegame", "gameserver/runescape-dragonwilds/add-savegame", "gameserver/runescape-dragonwilds/create-custom-world"]
---
The dashboard has no button to reset the world. On startup, the server always loads the most recent `.sav` file from the `RSDragonwilds/Saved/SaveGames` folder. If it finds none, it automatically creates a new standard world. So you get a fresh world by emptying that folder.

> [!IMPORTANT]
> Resetting removes your current world for good: all buildings and placed objects and with them your entire progress in this world. There is no undo. So always create a backup **first** — without one there is no way back to your old state.

## Reset the world

1. **Create a backup**\
   Back up your current world before you delete anything: [Create backup](/tutorials/gameserver/runescape-dragonwilds/create-backup). You can also download the `.sav` file to your PC: [Download savegame](/tutorials/gameserver/runescape-dragonwilds/download-savegame).

2. **Stop the server**\
   Stop your server via the dashboard. A running server keeps writing to its save file — never delete the files while it is running.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the following directory:

   ```text
   /RSDragonwilds/Saved/SaveGames/
   ```

4. **Delete the saves**\
   Delete all files in this directory. Keep the `SaveGames` folder itself — only delete its contents.

5. **Set the world name**\
   Optional: Open the **Settings** in the dashboard and enter the name the new world should get in the **Server Name** field. If you leave the field unchanged, the new world gets the name that is currently entered there.

6. **Start the server**\
   Start your server via the dashboard. While booting up, it creates a new standard world with that name.

> [!WARNING]
> Only delete the contents of the `SaveGames` folder. The file `DedicatedServer.ini` in `RSDragonwilds/Saved/Config/LinuxServer/` holds your server configuration — including the Owner ID, server password and admin password. Leave it untouched.

## What is gone and what stays

| Gone | Stays |
|------|-------|
| The world with all buildings and placed objects | Owner ID, server password and admin password |
| Your entire progress in this world | The remaining configuration in `DedicatedServer.ini` |
| Everything you did not back up beforehand | The backups you created earlier and any downloaded savegames |

> [!TIP]
> **Custom settings for the new world**
>
> The server always creates a world with standard settings. If the new world should run with your own rules, create it locally in the game and upload it: [Create custom world](/tutorials/gameserver/runescape-dragonwilds/create-custom-world).

## Load a different world

If several `.sav` files are in the `SaveGames` folder, the server always loads the **most recent** one — the **Server Name** field alone is not enough to switch between existing worlds. The world you want has to be the only one in the folder.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the directory `/RSDragonwilds/Saved/SaveGames/`.

3. **Remove the other worlds from the folder**\
   Download every `.sav` file that should not be loaded to your PC and then delete it from the folder. In the end, only the `.sav` file of the world you want remains.

4. **Set the world name**\
   Open the **Settings** in the dashboard and enter the filename of this world without the `.sav` extension in the **Server Name** field. This keeps the world name in the dashboard in line with the world that is loaded.

5. **Start the server**\
   Start your server. It now loads the remaining world.

> [!WARNING]
> Never rename `.sav` files. If the server starts with a renamed file, the progress stored in it is lost. Always keep the original filename.

> [!TIP]
> **Restoring the old world**
>
> If you created a backup before deleting, you restore it via the dashboard: [Create backup](/tutorials/gameserver/runescape-dragonwilds/create-backup). If you downloaded the `.sav` file to your PC instead, upload it again via SFTP: [Add savegame](/tutorials/gameserver/runescape-dragonwilds/add-savegame).
