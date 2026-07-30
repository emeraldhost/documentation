---
description: Create a backup of a Frozen Flame server
---

# How to Create a Backup of Your Frozen Flame Server

Regular backups of your Frozen Flame server protect you from data loss — whether due to a failed update, an accidentally overwritten save or removed player progress.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before switching the game mode between Cataclysm and Campaign
- Before removing player profiles with `Admin_RemoveProfile`
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
Stop your server before creating or restoring a backup. Frozen Flame writes to the save while running — a backup taken during operation can be incomplete. Run the command `Admin_SaveAll` via RCON beforehand so the current state is written to disk: [Add Admin](add-admin.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
