---
description: Create a backup of an Echoes of Elysium server
---

# How to Create a Backup of Your Echoes of Elysium Server

Regular backups of your Echoes of Elysium server protect you from data loss — whether due to a failed update, a broken configuration or an accidentally overwritten save.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before moving to another server
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. While running, the server regularly writes to the world data — a backup taken during operation can be incomplete.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download it separately: [Download savegame](download-savegame.md). The complete save lives in the `world` directory.
::::

## Server-side backups

Echoes of Elysium also comes with its own backup feature. In the **dashboard** under **Settings** you will find the following fields for it:

| Field | Meaning |
|-------|---------|
| **Enable Auto Server Backup** | Defines whether the server creates its own backups (`true` or `false`). |
| **Backup Interval** | Time between two backups in minutes. |
| **Max Backups** | Number of backups the server keeps. |
| **Save Interval** | Interval in minutes at which the server saves the running world. |

After changing a value, restart your server so the new values are applied.

:::: danger Important
These server-side backups are stored on the same server as your world. They are no replacement for a full backup created via the dashboard — for important states always use the backup function in addition and download it to your PC.
::::

:::: info Note
**Enable Auto Server Backup** is disabled by default. If you want to use the server-side backups, you first have to set the field to `true`.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
