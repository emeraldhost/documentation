---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your HumanitZ Server"
description: "Add a savegame to a HumanitZ server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/humanitz/add-admin", "gameserver/humanitz/create-backup", "gameserver/humanitz/download-savegame", "gameserver/humanitz/join-server"]
---

The savegame of a HumanitZ server is stored in a single file following the pattern `Save_<name>.sav`. Which name your server loads is defined by the `SaveName` value in the configuration file – so the file name and the configuration have to match.

> [!TIP]
> Create a [backup](/tutorials/gameserver/humanitz/create-backup) of your current server save before uploading, in case you want to switch back later.

> [!NOTE]
> **Project folder**
>
> All paths in this guide start with the project folder `HumanitZServer`. If your server still runs a version older than HumanitZ 1.0, that folder is called `TSSGame` instead. Check via SFTP which of the two folders exists on your server and adjust the paths accordingly.

## Files of the savegame

| File | Content |
|------|---------|
| `Save_<name>.sav` | The actual savegame with the world, bases, vehicles and player data. By default the file is called `Save_DedicatedSaveMP.sav`. |
| `Save_ClanData.sav` | The clan and group data of the server |

Both files are located in the same folder and belong together. Always transfer them together.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the savegame file itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /HumanitZServer/Saved/SaveGames/SaveList/Default/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.

4. **Upload the files**\
   Upload your `Save_<name>.sav` and the matching `Save_ClanData.sav` into this directory. If files with the same name already exist there, you overwrite them – back them up first if you still need them.

5. **Set the SaveName**\
   Open the following file:

   ```text
   /HumanitZServer/GameServerSettings.ini
   ```

   In the `[Host Settings]` section enter the name of your savegame – **without** the leading `Save_` and **without** the `.sav` extension:

   ```ini
   [Host Settings]
   SaveName="DedicatedSaveMP"
   ```

   > [!TIP]
   > **Example**
   >
   > | File on the server | Entry in the configuration |
   > |--------------------|----------------------------|
   > | `Save_DedicatedSaveMP.sav` | `SaveName="DedicatedSaveMP"` |
   > | `Save_MyWorld.sav` | `SaveName="MyWorld"` |

6. **Start the server**\
   Save all changes and start your server. On startup it now loads your uploaded savegame.

> [!IMPORTANT]
> The file name and `SaveName` have to match exactly. If the server does not find a matching file, it creates a **new, empty world** under that name – your uploaded savegame is then not loaded. Also mind upper and lower case: your server runs on Linux, where case matters.

> [!WARNING]
> A changed `SaveName` always means a different savegame. If you want to switch between two worlds, you can keep both `.sav` files in the folder and only change the `SaveName`.

## Moving to another server

When moving from another HumanitZ server, the easiest way is to download the complete `Default` folder and upload it again on the new server. How to download it is described in [Download Savegame](/tutorials/gameserver/humanitz/download-savegame).

> [!NOTE]
> **Singleplayer savegame**
>
> There is **no documented procedure** for transferring a singleplayer savegame to a dedicated server. Neither the official wiki nor the server documentation describes such a way. This guide therefore only covers savegames that come from a dedicated server.
