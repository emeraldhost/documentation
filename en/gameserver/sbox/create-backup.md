---
description: "Create a backup of an s&box server"
---

# How to Create a Backup of Your s&box Server

Regular backups of your s&box server protect you from data loss — whether due to a failed update, a faulty configuration or a gamemode switch after which the server no longer starts.

## When should you create a backup?

- Before updating the server version
- Before switching the gamemode or the map
- Before changing `users.json` or the startup parameters
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

## Which data matters?

| Folder | Content |
|--------|---------|
| `/config/` | Server configuration, including `users.json` with your admins |
| `/data/` | All persistent data written by gamemodes, organised as `/data/<organisation>/<package>/` |
| `/download/` | Cache of the packages downloaded from the cloud |

:::: info Note
The `/download/` folder does not need to be backed up. Your server downloads missing packages from the cloud again automatically on the next start.
::::

:::: warning Warning
Stop your server before creating or restoring a backup. The `/data/` folder is written to while the server is running — a backup taken during operation can be incomplete.
::::

:::: danger Important
s&box has no server-side savegame concept. Whether anything is stored permanently on your server, and what, is decided solely by the gamemode. If your server runs a gamemode without its own save feature, a backup only contains your configuration.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
