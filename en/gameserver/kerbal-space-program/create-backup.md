---
description: Create a backup of a Kerbal Space Program server
---

# How to Create a Backup of Your Kerbal Space Program Server

Regular backups of your Kerbal Space Program server protect you from data loss — whether due to a failed update, a changed mod list or an accidentally overwritten savegame.

## When should you create a backup?

- Before updating DarkMultiPlayer or the game
- Before major changes to the configuration
- Before uploading a different savegame
- Before changing the mod list (`mod-control.txt`)
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the `Universe` folder separately: [Download Savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. DarkMultiPlayer constantly writes vessel and player data into the `Universe` folder while running — a backup taken during operation can contain an incomplete savegame.
::::

:::: tip Back up the configuration as well
Besides the `Universe` folder, the `Config` folder is worth saving: it contains `Settings.txt`, `admins.txt`, the ban lists and your `mod-control.txt`.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
