---
description: Create a backup of an Eco server
---

# How to Create a Backup of Your Eco Server

Regular backups of your Eco server protect you from data loss — whether due to a failed update, a broken mod or an accidentally reset world.

## When should you create a backup?

- Before updating the server version
- Before adding or removing [mods](add-mods.md)
- Before major changes to the configuration files
- Before uploading a different save
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. Eco writes the save to disk regularly — the interval is controlled by the value `SaveFrequency` in `/Configs/Storage.eco`. A backup taken during operation can therefore be incomplete.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the two save files separately: [Download savegame](download-savegame.md).
::::

:::: info The server's own snapshots
Eco additionally creates its own snapshots in the folder `/Storage/Backup/`. These are overwritten on a rolling basis and are no replacement for your own backup — do not rely on them alone for important states.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
