---
description: Create a backup of a Soldat server
---

# How to Create a Backup of Your Soldat Server

Regular backups of your Soldat server protect you from data loss — whether due to a failed update, a faulty configuration or a script that keeps the server from starting.

:::: info Note
Soldat does not store any world progress — there is no savegame that could be transferred or restored. What gets backed up are your configuration files, your map rotation, your admin and ban lists, your custom maps and your scripts — exactly the files that take the most work to rebuild.
::::

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before editing the map rotation or uploading custom maps
- Before installing or updating server scripts
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

## Which files are worth saving

If you only want to secure the most important files, download them via [SFTP](../establish-sftp-connection.md).

Classic Soldat server:

| File or folder | Contents |
|----------------|----------|
| `soldat.ini` | Main configuration of the server |
| `server.ini` | Advanced server settings |
| `mapslist.txt` | Map rotation |
| `banned.txt` | Banned IP addresses |
| `remote.txt` | Permanent admin list |
| Maps folder | Your custom `.pms` maps |
| `scripts/` | Your server scripts |
| `logs/` | Logs, among them `gamestat.txt` |

OpenSoldat:

| File or folder | Contents |
|----------------|----------|
| `configs/` | Server configuration including `server.cfg` |
| `maps/` | Your custom `.pms` maps |
| `mods/` | Your `.smod` mod packages |
| `scripts/` | Your server scripts |
| `logs/` | Logs |
| `demos/` | Recorded rounds, if you use recording |

:::: info Note
You can tell which of the two variants you are running by whether the main directory holds a `soldat.ini` or a `configs` folder with a `server.cfg`.
::::

:::: warning Warning
Stop your server before creating or restoring a backup. That way no file is being written to while the backup runs — the server writes `banned.txt` and the log files during operation.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
