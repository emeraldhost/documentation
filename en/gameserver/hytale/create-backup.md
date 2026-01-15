---
description: Create a backup of a Hytale server
---

# How to Create a Backup of Your Hytale Server

Regular backups protect your server from data loss. You can create a backup anytime via the management panel or manually back up specific files via SFTP.

## How to Create a Backup via the Management Panel

1. Open the management panel of your server.
2. Navigate to **Backups**.
3. Click **Create Backup**.

The backup will be created automatically and can be restored at any time.

:::: info Info
Automatic backups can be requested for free via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::

## How to Create a Manual Backup via SFTP

:::: warning Warning
Stop your server before creating a backup to avoid data loss.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Download Folder</b><br>
   Download the entire `universe/` folder to your computer.

4. <b>Start the Server</b><br>
   Start your server.

## Important Folders

| Folder | Contents |
| ------ | -------- |
| `universe/` | Complete save (worlds + player data) |
| `universe/worlds/` | All worlds |
| `universe/worlds/<name>/` | Individual world |
| `universe/players/` | Player data |
| `config.json` | Server configuration |
| `mods/` | Installed mods |

## How to Create a World Backup

If you only want to back up a specific world:

1. Navigate to `universe/worlds/`
2. Download the desired world folder (e.g., `default/`)

## Restore a Backup

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload Backup</b><br>
   Upload the backed up folder and overwrite the existing files.

4. <b>Start the Server</b><br>
   Start your server.

:::: warning Warning
Restoring a backup will overwrite all current data. Create a backup of the current state first!
::::
