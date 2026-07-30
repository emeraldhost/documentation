---
description: Create a backup of a Midnight Ghost Hunt server
---

# How to Create a Backup of Your Midnight Ghost Hunt Server

A backup of your Midnight Ghost Hunt server secures the server files and your configuration. That way you can quickly get back to a working state after a failed update, corrupted server files or a change to the rules that did not work out.

## When should you create a backup?

- Before updating the server version
- Before changing the startup parameters of your server
- Before major changes to the `CustomRules.ini` file
- Before reinstalling the server files
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. This makes sure no files are written in the meantime and the backup is complete.
::::

:::: info Note
Midnight Ghost Hunt does not store a savegame or a world: the game is played in individual rounds that start fresh every time. A backup therefore mainly secures the server installation, your `CustomRules.ini` configuration file and the log files of your server.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
Individual files such as `CustomRules.ini` can additionally be downloaded and kept locally via SFTP: [Establish SFTP connection](../establish-sftp-connection.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
