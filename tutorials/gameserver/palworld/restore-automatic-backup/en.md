---
slug: "restore-automatic-backup"
language: "en"
title: "How to Restore an Automatic Backup on Your Palworld Server"
description: "Restore an automatic backup on a Palworld server"
tags: []
date: "2026-08-23"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Restore Automatic Backup"
sort: 31
related: ["gameserver/palworld/kick-ban-players", "gameserver/palworld/reset-world", "gameserver/palworld/set-server-password", "gameserver/palworld/upload-savegame"]
---

Palworld automatically creates regular backups of your world on your server. This lets you roll your save back to an earlier point in time, for example if the save got corrupted or something was accidentally destroyed or deleted. These automatic backups are independent of the dashboard backups you create via [Create backup](/tutorials/gameserver/palworld/create-backup).

## How to find the automatic backups

The automatic backups are located on your server at:

```text
/Pal/Saved/SaveGames/0/<savegame folder>/backup/world/
```

The savegame folder is the folder with the long string of characters as its name (e.g. `A1B2C3D4E5F67890A1B2C3D4E5F67890`).

Inside `backup/world/` there is one folder per backup, named after the time it was created in the format `YYYY.MM.DD-HH.MM.SS`. The folder `2026.01.15-18.30.00`, for example, contains the state from January 15, 2026 at 18:30:00. Each backup folder contains the world files `Level.sav` and `LevelMeta.sav` as well as the `Players` folder with the player data. Several backups from the last few hours are kept at short intervals, while for older days one backup per day remains.

## How to restore a backup

> [!WARNING]
> Restoring resets the entire save, meaning world and players, to the time of the backup. Everything that happened between the backup and now is lost.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Back up the current state**\
   Create a [backup](/tutorials/gameserver/palworld/create-backup) via the dashboard or download your savegame folder to your PC ([Download savegame](/tutorials/gameserver/palworld/download-savegame)) so you can return to the current state if needed.

3. **Open the savegame folder**\
   Open the file manager in the dashboard and navigate to your savegame folder:

   ```text
   /Pal/Saved/SaveGames/0/<savegame folder>/
   ```

   Alternatively, you can connect via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Choose a backup**\
   Open the subfolder `backup/world/` and use the timestamps to find the backup folder with the state you want to restore.

5. **Delete the current world files**\
   Go back to the savegame folder and delete the files `Level.sav` and `LevelMeta.sav` as well as the `Players` folder. Delete only these three items, not the `backup` folder and not the savegame folder itself.

6. **Copy the backup files**\
   Copy the files `Level.sav` and `LevelMeta.sav` as well as the `Players` folder from the chosen backup folder directly into the savegame folder, so they sit next to the `backup` folder.

7. **Start the server**\
   Start your server and check in the game that the desired state was loaded.

> [!TIP]
> If there are several folders in `/Pal/Saved/SaveGames/0/`, you can find the currently loaded savegame folder in the following file:
>
> ```text
> /Pal/Saved/Config/LinuxServer/GameUserSettings.ini
> ```
>
> The `DedicatedServerName=` parameter contains the name of the savegame folder in use.

> [!NOTE]
> The automatic backups are a feature of the Palworld server itself and are controlled by the `bIsUseBackupSaveData` setting in `PalWorldSettings.ini` (see [Edit server config](/tutorials/gameserver/palworld/edit-server-config)). When it is set to `True`, your server creates the backups on its own.
