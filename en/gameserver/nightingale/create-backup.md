---
description: Create a backup of a Nightingale server
---

# How to Create a Backup of Your Nightingale Server

Regular backups of your Nightingale server protect you from data loss — whether due to a failed update, an accidentally reset server state or a botched character import.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before a new character connects for the first time, because character and realm data can be transferred to the server in the process
- Before uploading a different save
- Before resetting the server state
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the save folders separately: [Download Savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Nightingale constantly writes to the world data while it is running — a backup taken during operation can contain an incomplete save.
::::

## The server's own automatic copy

:::: info Note
Nightingale also creates a simple copy on its own: on the first server start on a new day of the week, the server copies the entire `Offline` folder to `OfflineBackup`.

```
/NWX/Saved/Offline
/NWX/Saved/OfflineBackup
```

This copy sits on the same server and is overwritten regularly. It is therefore **no** replacement for a proper backup, but it is a useful lifeline as long as it is still recent.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
