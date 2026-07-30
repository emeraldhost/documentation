---
description: Create a backup of an Arma 3 server
---

# How to Create a Backup of Your Arma 3 Server

Regular backups of your Arma 3 server protect you from data loss — whether due to a failed update, a mod update that breaks your configuration or an accidentally overwritten file.

## When should you create a backup?

- Before updating the server version
- Before adding, updating or removing mods
- Before major changes to the `server.cfg`
- Before uploading a different savegame or mission
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info What belongs to a complete backup?
An Arma 3 server spreads its data across several directories:

| Path | Content |
|------|---------|
| `/server.cfg` | Server settings, admins and mission selection |
| `/mpmissions` | Your missions as `.pbo` files |
| `/serverprofile` | Server profile including the savegame of persistent missions |
| `/@modname` | The individual mod folders |
| `/keys` | The `.bikey` files of your mods |
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Persistent missions write to the profile file while the server is running — a backup taken during operation can be incomplete.
::::

:::: info Note
If you only want to save the progress of a persistent mission, you can also download the savegame file separately: [Download Savegame](download-savegame.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
