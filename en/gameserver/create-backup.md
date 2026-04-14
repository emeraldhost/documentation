---
description: Create and restore a backup on a game server
---

# How to Create a Backup of Your Game Server

You can create a backup of your server at any time to safeguard your world, configurations and data, and restore them when needed.

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::

## Create a backup

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open backups</b><br>
   In the left sidebar, click on **Backups**.

3. <b>Create new backup</b><br>
   Click the **plus icon** in the top right to create a new backup.

4. <b>Name the backup</b><br>
   Enter a name for your backup. Optionally, in the **Ignored Files and Directories** field, you can specify paths that should be excluded from the backup.

5. <b>Create backup</b><br>
   Click **Create Backup**. The process runs in the background and may take a few minutes depending on the size of your server.

## Manage backups

Using the **three-dot icon** to the right of a backup, the following options are available:

| Action | Description |
|--------|-------------|
| **Download** | Downloads the backup as a compressed file. |
| **Restore** | Resets your server to the state of the backup. |
| **Lock** | Protects the backup from accidental deletion or being overwritten. |
| **Delete** | Permanently removes the backup. |

### Lock a backup

A locked backup cannot be deleted and cannot be overwritten by automatic backups. Click **Lock** again to remove the lock.

### Restore a backup

1. <b>Start restore</b><br>
   In the three-dot menu, select the **Restore** option.

2. <b>Optional: delete files</b><br>
   Enable the checkbox **Delete all files and folders before restoring this backup** if you want to fully replace the current server state with the backup.

3. <b>Confirm</b><br>
   Click **Restore Backup**. The server will be stopped automatically and the restoration will begin.

:::: warning Warning
During the restoration, you cannot control the server, access the file browser or create further backups until the process is complete.
::::
