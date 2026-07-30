---
description: Create a backup of a Black Mesa server
---

# How to Create a Backup of Your Black Mesa Server

Regular backups of your Black Mesa server protect you from data loss — whether due to a failed update, a faulty configuration or a plugin that keeps the server from starting.

:::: info Note
Black Mesa does not store any world progress on the server. What gets backed up are your configuration files, your plugins, your admin lists and your custom maps — exactly the files that take the most work to rebuild.
::::

## When should you create a backup?

- Before updating the server version
- Before installing or removing Metamod:Source, SourceMod or individual plugins
- Before major changes to the `server.cfg`, the `mapcycle.txt` or the admin lists
- Before uploading custom maps and custom content
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: tip Back up the configuration
If you only want to secure the most important files, download the folders `/bms/cfg/`, `/bms/addons/` and `/bms/maps/` as well as the file `/bms/addonlist.txt` via [SFTP](../establish-sftp-connection.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
