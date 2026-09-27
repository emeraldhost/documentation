---
slug: "restore-automatic-backup"
language: "en"
title: "How to Restore an Automatic Backup on Your Space Engineers Server"
description: "Restore an automatic backup on a Space Engineers server and change the number of backups"
tags: []
date: "2026-09-27"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Restore Automatic Backup"
sort: 18
related: ["gameserver/space-engineers/configure-automatic-backups", "gameserver/space-engineers/download-world", "gameserver/space-engineers/upload-world", "gameserver/space-engineers/change-world-settings"]
---
Space Engineers automatically creates a backup of your world on your server every time it saves. This lets you roll your world back to an earlier state, for example if a ship was accidentally destroyed or something went wrong in the world. These automatic backups are independent of the dashboard backups you create via [Create backup](/tutorials/gameserver/create-backup).

## How to find the automatic backups

Your world is located on your server in the `/config/Saves/World/` folder. You can find the automatic backups in the subfolder:

```text
/config/Saves/World/Backup/
```

There is a separate folder for each backup. Its name is the time of the backup in the format `YYYY-MM-DD HHmmss`. Your server created the folder `2026-09-27 174500`, for example, on September 27, 2026 at 17:45:00. The time is based on the server's system time and may therefore differ from your local time.

Each backup folder contains a copy of all files located directly in `/config/Saves/World/`:

- `Sandbox.sbc` and `Sandbox_config.sbc` with the world settings and the mod list
- `SANDBOX_0_0_0_.sbs` and `SANDBOX_0_0_0_.sbsB5` with the ships, stations, player characters and other objects in the world
- the `.vx2` files of the planets and asteroids
- depending on the world, the preview image `thumb.jpg` and further files whose names start with `gs-`

The server does not include subfolders such as `Storage`, where some mods keep their data.

Your server creates a new backup as soon as it has successfully saved the world. It saves automatically at the interval set in the **Automatic Backup Interval** field in the **Settings** of the dashboard (default: every `5` minutes). The newest backup therefore always matches the most recently saved state of your world.

> [!NOTE]
> With the default values, your server keeps only the last 5 backups and deletes the oldest one with every new backup. The automatic backups therefore only reach back about 25 minutes of server uptime. For older states you need a [dashboard backup](/tutorials/gameserver/create-backup). To learn how to keep more automatic backups, see [Change the number of backups](#change-the-number-of-backups).

## How to restore a backup

> [!WARNING]
> Restoring resets the entire world to the state of the backup. Everything that has happened in the world since then is lost. Since the player characters and their inventories are also stored in the world, this affects all players.

1. **Stop the server**\
   Stop your server via the dashboard. While it is running, it saves regularly and would write its current state over the restored backup in the process.

2. **Back up the current state**\
   Create a [backup](/tutorials/gameserver/create-backup) via the dashboard so you can return to the current state if needed.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the following directory:

   ```text
   /config/Saves/World/Backup/
   ```

4. **Choose a backup**\
   Use the timestamp in the folder name to find the backup with the state you want to restore, for example `2026-09-27 174500`. Keep in mind that the newest backup matches your current state.

5. **Download the backup**\
   Download the chosen backup folder to your PC. This keeps the backup on the server.

6. **Delete the current world files**\
   Go to the `/config/Saves/World/` folder and delete all files located directly in this folder. Only delete files, not the `Backup` folder and not any other subfolders such as `Storage`.

7. **Upload the backup files**\
   Upload all files from the downloaded backup folder directly into `/config/Saves/World/`, not as an additional subfolder. Afterwards, `Sandbox.sbc` must be located directly in `/config/Saves/World/` next to the `Backup` folder.

   > [!IMPORTANT]
   > Always replace the complete set of files from a single backup and never mix files from different backups. If a `SANDBOX_0_0_0_.sbsB5` is present in the folder, the server loads this file instead of `SANDBOX_0_0_0_.sbs`. So if you only restore the `.sbs` and leave the newer `.sbsB5` in place, the server keeps loading the newer state.

8. **Start the server**\
   Start your server and check in the game that the desired state was loaded.

> [!NOTE]
> In the file browser of the dashboard, you can also move the files in step 7 directly from the backup folder to `/config/Saves/World/` instead of downloading and uploading them again. However, the chosen backup no longer exists afterwards. You can then delete the empty backup folder.

The backup also brings back the world settings and the mod list from `Sandbox_config.sbc` as they were at the time of the backup. If you have added mods since then, add them again (see [Add mods](/tutorials/gameserver/space-engineers/add-mods)). The dashboard writes the values from its **Settings**, for example **Game Mode** and **Max Players**, into the world on every start anyway. Admins and banned players you entered in the `/config/SpaceEngineers-Dedicated.cfg` file (see [Add admins](/tutorials/gameserver/space-engineers/add-admins) and [Kick and ban players](/tutorials/gameserver/space-engineers/kick-ban-players)) are stored outside the world folder and stay unchanged. Ranks you assigned directly in the game via **Promote**, on the other hand, are stored in the world. After the restore, they match the state of the backup again.

> [!TIP]
> As soon as your server is running again, it creates a new backup every time it saves and deletes the oldest ones in the process. If you want to try several backups one after another, download the entire `Backup` folder to your PC first.
>
> If the server does not start or you do not see the expected state in the game, stop it right away so that it does not delete any more backups when it saves. Then check whether `Sandbox.sbc` is located directly in `/config/Saves/World/` and did not accidentally end up in a subfolder. If the backup still cannot be loaded, restore the dashboard [backup](/tutorials/gameserver/create-backup) from step 2 and try again with a different automatic backup.

## Change the number of backups

The number of automatic backups your server keeps is set by the `MaxBackupSaves` value in your world's `Sandbox_config.sbc` file (default: `5`, allowed values are `0` to `1000`). The dashboard does not overwrite this value.

1. **Stop the server**\
   Stop your server via the dashboard. A running server can overwrite your change when it saves or stops.

2. **Create a backup**\
   Create a [backup](/tutorials/gameserver/create-backup) or download a copy of the `Sandbox_config.sbc` file. This lets you restore the previous state if something goes wrong while editing.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

4. **Open the configuration file**\
   Open the file:

   ```text
   /config/Saves/World/Sandbox_config.sbc
   ```

5. **Change the value**\
   Find the line with `MaxBackupSaves` in the `<Settings>` block and enter the desired number, for example:

   ```xml
   <MaxBackupSaves>12</MaxBackupSaves>
   ```

6. **Start the server**\
   Save the file and start your server. If the line `Sandbox world configuration file found, overriding checkpoint settings.` appears in the console while the world is loading, the server has applied your `Sandbox_config.sbc`.

You can roughly estimate how far back the backups reach: number of backups × **Automatic Backup Interval**. With `12` backups and the default interval of `5` minutes, the backups reach back about one hour. A longer interval also extends this period, but the server then saves less often (see [Set up automatic backups](/tutorials/gameserver/space-engineers/configure-automatic-backups)).

> [!WARNING]
> If you set `MaxBackupSaves` to `0`, the server no longer creates automatic backups and deletes the entire `Backup` folder with all existing backups the next time it saves.

> [!NOTE]
> Change the value in your world's `Sandbox_config.sbc` and not in `SpaceEngineers-Dedicated.cfg`. There it only applies to newly created worlds. Each backup contains a copy of all your world's files including the `.vx2` files and takes up roughly as much storage space as they do. More backups therefore need correspondingly more storage space.

> [!IMPORTANT]
> Make sure the XML stays valid when editing. If `Sandbox_config.sbc` is invalid, the server ignores the entire file without showing an error message in the console. It then uses the settings from `Sandbox.sbc` and overwrites `Sandbox_config.sbc` the next time it saves. Your changes are lost in the process. If the line from step 6 is missing after the start, stop the server, restore your copy of the file and change the value again. For more on editing the world settings, see [Change world settings](/tutorials/gameserver/space-engineers/change-world-settings).
