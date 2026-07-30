---
description: Create a backup of a Left 4 Dead 2 server
---

# How to Create a Backup of Your Left 4 Dead 2 Server

Regular backups of your Left 4 Dead 2 server protect you from data loss — whether due to a failed update, a faulty configuration or a plugin that keeps the server from starting.

:::: info Note
Left 4 Dead 2 does not store any world progress. What gets backed up are your configuration files, your plugins and your admin lists — exactly the files that take the most work to rebuild.
::::

## When should you create a backup?

- Before updating the server version
- Before installing or removing Metamod:Source, SourceMod or individual plugins
- Before major changes to the `server.cfg` or to the admin lists
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: tip Back up the configuration
If you only want to secure the most important files, download the folders `/left4dead2/cfg/` and `/left4dead2/addons/` via [SFTP](../establish-sftp-connection.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
