---
description: Create a backup of a No Love Lost server
---

# How to Create a Backup of Your No Love Lost Server

A backup of your No Love Lost server secures the server files and the installation. That way you can quickly get back to a working state after a failed update or corrupted server files.

## When should you create a backup?

- Before updating the server version
- Before changing the startup parameters of your server
- Before reinstalling the server files
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. This makes sure no files are written in the meantime and the backup is complete.
::::

:::: info Note
No Love Lost does not create a configuration file on the server — the server is controlled exclusively through its startup parameters. A backup therefore mainly secures the server installation and the game files.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
