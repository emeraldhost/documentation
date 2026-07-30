---
description: Create a backup of a Longvinter server
---

# How to Create a Backup of Your Longvinter Server

Regular backups of your Longvinter server protect you from data loss — whether due to a failed update, an accidentally overwritten save or a broken configuration.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before cleaning up the world, for example removing tents
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the `SaveGames` folder separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Longvinter saves roughly every ten minutes while running — a backup taken during operation can contain an incomplete save. For the same reason the server overwrites any changes you make to `Game.ini` while it is running.
::::

:::: tip Enable server-side saves
Longvinter can additionally create its own backup of the save once per day. To enable it, add the following value to `/Longvinter/Saved/Config/LinuxServer/Game.ini` while the server is stopped:

```ini
[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
SaveBackups=true
```

These copies are stored on your server and are no replacement for a real backup — they are lost together with the save folder if it gets damaged.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
