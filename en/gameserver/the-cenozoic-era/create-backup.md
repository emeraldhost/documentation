---
description: Create a backup of a The Cenozoic Era server
---

# How to Create a Backup of Your The Cenozoic Era Server

Regular backups of your The Cenozoic Era server protect you from data loss — whether due to a failed update, a broken configuration file or a change you want to undo.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration, for example to growth, breeding or the game mode
- Before you exchange files via SFTP
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. If the server keeps running, files that are currently being written may end up in the backup — which can leave it incomplete.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

## What the backup contains

The backup saves the complete server directory. This also includes the configuration of your server, which is located in the following directory, accessible via [SFTP](../establish-sftp-connection.md):

```
/TheCenozoicEra/Saved/Config/WindowsServer/
```

Among other things, this is where the `Game.ini` with your server settings is stored. The folder `/TheCenozoicEra/Saved/Logs/` additionally contains the server logs.

:::: info Note
The configuration folder is called `WindowsServer` on your Linux server as well. The Cenozoic Era only ships a Windows server binary, which runs on Linux servers through a compatibility layer. So do not look for a folder named `LinuxServer` – it does not exist.
::::

:::: tip Tip
Additionally save your `Game.ini` manually to your PC before making major changes to it. That way you can revert a single setting without having to restore a complete backup.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
