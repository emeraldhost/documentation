---
slug: "create-backup"
language: "en"
title: "How to Create a Backup of Your Hytale Server"
description: "Create a backup of a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Backup"
sort: 9
related: ["gameserver/hytale/change-time", "gameserver/hytale/change-weather", "gameserver/hytale/create-new-world", "gameserver/hytale/disable-npcs"]
---

Regular backups of your Hytale server protect you from data loss – whether due to a failed update, a faulty configuration or an accidentally deleted save.

## When should you create a backup?

- Before updating the server version
- Before installing or removing mods, plugins or add-ons
- Before major changes to the world or configuration
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](/tutorials/gameserver/create-backup).

> [!TIP]
> Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.

> [!NOTE]
> Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.

## How to Enable the Automatic Backups of the Hytale Server

In addition to the backups in the dashboard, the Hytale server itself can create backups of your worlds at regular intervals.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Configure automatic backups**\
   Adjust the following fields:

   | Field | Description | Default |
   |-------|-------------|---------|
   | **Enable Auto Server Backup** | `1` turns automatic backups on, `0` turns them off | `0` |
   | **Backup Folder** | Folder in the root directory where the server stores the backups | `backups` |
   | **Backup Interval** | Time between two backups in minutes | `30` |

4. **Restart the server**\
   Save the settings and restart your server. The server creates the first automatic backup once it has been running for the time set in the **Backup Interval** field.

You can find the backups via [SFTP](/tutorials/gameserver/establish-sftp-connection) in the `/backups/` folder, or in the folder you entered in the **Backup Folder** field. Each backup is a ZIP file named after the time it was created: the server created `2026-09-27_18-30-00.zip` on 27.09.2026 at 18:30:00. The time is based on the server's system time and may therefore differ from your local time.

> [!WARNING]
> The automatic backups only contain the `universe` folder with your worlds and the player data. The `config.json`, the `permissions.json`, the `bans.json` and your mods are not included. Back these up with the [backup feature](/tutorials/gameserver/create-backup) of the dashboard.

Before the server creates a new backup, it cleans up the backup folder: by default, it keeps the 5 newest backups and adds the new one. Of the older backups, it moves at most one every 12 hours to the `archive` subfolder, which keeps up to 5 backups by default. It deletes all others. The backups take up storage space on your server.

> [!TIP]
> While the feature is enabled, you can also trigger a backup at any time via the console in the dashboard:
>
> ```text
> backup
> ```
>
> Without automatic backups enabled, the server replies with `The server must be started with --backup-dir to use this command!`.

### How to Change the Number of Backups Kept

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open the configuration file**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the `config.json` file in the root directory.

3. **Set the number**\
   Enter the desired values in the `Backup` block. `MaxCount` sets how many of the newest backups the server keeps in the backup folder when cleaning up (the new backup is added to them), `ArchiveMaxCount` how many backups it keeps in the `archive` subfolder. Both values must be at least `1`:

   ```json
   "Backup": {
     "MaxCount": 10,
     "ArchiveMaxCount": 5
   }
   ```

   > [!TIP]
   > Check the file after editing with a JSON formatter such as [JSONLint](https://jsonlint.com/) – a single missing or extra comma is enough to prevent the server from loading the config.json.

4. **Start the server**\
   Start your server for the changes to take effect.

## How to Restore an Automatic Backup

> [!WARNING]
> Restoring resets all worlds and player data to the state of the backup. Everything that has happened since then will be lost.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Back up the current state**\
   Create a [backup](/tutorials/gameserver/create-backup) via the dashboard so you can restore the current state if needed.

3. **Download the backup**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), download the desired ZIP file from the `/backups/` folder (or `/backups/archive/`) and extract it on your PC. Among other things, it contains the folders `worlds` and `resources`.

4. **Rename the current state**\
   Rename the `universe` folder in the root directory, for example to `universe_old`.

5. **Upload the backup**\
   Create a new, empty `universe` folder in the root directory and upload the extracted contents of the ZIP file into it. Afterwards, the folder `/universe/worlds/` must exist.

6. **Start the server**\
   Start your server and check in-game whether the desired state has been loaded.

> [!TIP]
> If you no longer need the old state, you can delete the `universe_old` folder. The server does not load it.
