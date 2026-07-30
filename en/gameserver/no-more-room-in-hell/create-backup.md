---
description: Create a backup of a No More Room in Hell server
---

# How to Create a Backup of Your No More Room in Hell Server

Regular backups of your No More Room in Hell server protect you from data loss — whether due to a failed update, a faulty configuration or a plugin that keeps the server from starting.

:::: info Note
No More Room in Hell does not store any world progress — there is no savegame that could be transferred or restored. What gets backed up are your configuration files, your plugins, your admin lists and your custom maps — exactly the files that take the most work to rebuild.
::::

## When should you create a backup?

- Before updating the server version
- Before installing or removing Metamod:Source, SourceMod or individual plugins
- Before major changes to the `server.cfg` or to the admin lists
- Before uploading custom maps
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: tip Back up the configuration
If you only want to secure the most important files, download the folders `/nmrih/cfg/`, `/nmrih/addons/` and `/nmrih/maps/` via [SFTP](../establish-sftp-connection.md).
::::

:::: warning Warning
Stop your server before creating or restoring a backup. That way no file is being written to while the backup runs.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
