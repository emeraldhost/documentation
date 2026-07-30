---
description: Create a backup of a QANGA server
---

# How to Create a Backup of Your QANGA Server

Regular backups of your QANGA server protect you from data loss — whether due to a failed update, a corrupted save or a change to the world you want to undo.

This matters even more in QANGA: the progress of your shared world lives on the server. If the world data is lost, the progress stored inside it is gone with it.

## When should you create a backup?

- Before updating the server version
- Before major changes to the startup parameters in the dashboard
- Before cleaning up the world, for example removing bases or vehicles
- Before restoring an older state
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. While running, the server writes to the world data regularly — a backup taken during operation can land in the middle of a save and contain an incomplete state.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
QANGA does not use configuration files for the server — all server settings are set through the startup parameters in the **dashboard**. A backup therefore mainly secures the server files and the world data. Write down your settings from the dashboard separately, since they are stored there and not inside the server files.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
