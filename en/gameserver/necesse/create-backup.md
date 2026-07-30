---
description: Create a backup of a Necesse server
---

# How to Create a Backup of Your Necesse Server

Regular backups of your Necesse server protect you from data loss — whether due to a failed update, an incompatible mod or an accidentally overwritten world.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different world
- Before adding, updating or removing mods
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the world file separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Necesse rewrites the world regularly while running — a backup taken during operation can contain an incomplete world file.
::::

:::: tip Shut down cleanly
Always stop your server via the **dashboard** or with the `/stop` command in the console. That way Necesse writes the world to disk completely beforehand.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
