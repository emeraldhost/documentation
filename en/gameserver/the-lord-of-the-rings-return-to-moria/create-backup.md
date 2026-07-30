---
description: Create a backup of a The Lord of the Rings Return to Moria server
---

# How to Create a Backup of Your The Lord of the Rings Return to Moria Server

Regular backups of your Return to Moria server protect you from data loss — whether due to a failed update, an accidentally overwritten world file or a wrong world name in the configuration.

## When should you create a backup?

- Before updating the server version
- Before major changes to `MoriaServerConfig.ini`
- Before uploading a different world
- Before changing the world name or the loaded world file
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the world file separately: [Download Savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Return to Moria saves while running – a backup taken during operation can contain an incomplete world.
::::

:::: danger Important
Always stop your server through the **dashboard**. Only then does the server save the current state and shut down cleanly. A forced shutdown can cost progress and make the next start take several minutes because the old online session is still hanging.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
