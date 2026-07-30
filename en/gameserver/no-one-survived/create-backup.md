---
description: Create a backup of a No One Survived server
---

# How to Create a Backup of Your No One Survived Server

A regular backup of your No One Survived server protects you from data loss — whether caused by a failed update, an accidentally overwritten savegame file or a wrongly set save name.

## When should you create a backup?

- Before updates of the server version
- Before larger changes to the configuration
- Before uploading a different savegame
- Before changing the save name or the map
- At regular intervals, so you always have a safe state to fall back on

## Create a backup

You can find the exact steps for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: info Note
If you only want to secure the savegame, you can also download the savegame files individually: [Download Savegame](download-savegame.md).
::::

:::: warning Warning
Stop your server before you create or restore a backup. The server writes to the savegame files while running — a backup taken during operation can contain an incomplete savegame.
::::

:::: tip Tip
Lock important backups (e.g. before big changes) so they do not get overwritten by automatic backups. Additionally download particularly important backups to your PC in case your backup limit is reached.
::::

:::: info What belongs to the savegame?
The actual savegames are stored as `.sav` files under `/WRSH/Saved/SaveGames/WorldSaves/`, the server's intermediate saves under `/WRSH/Saved/SaveGames/AutoSave/`. Your server settings are stored in the file `/WRSH/Saved/Config/WindowsServer/Game.ini` – a backup via the dashboard secures all of these files together.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
