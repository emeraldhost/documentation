---
description: Create a backup of a GTA San Andreas server
---

# How to Create a Backup of Your GTA San Andreas Server

Regular backups of your GTA San Andreas server protect you from data loss — whether due to a failed update, a broken script or an accidentally overwritten configuration.

## When should you create a backup?

- Before switching between SA-MP and open.mp
- Before installing a new gamemode or a new script version
- Before installing or updating plugins
- Before major changes to `server.cfg` or `config.json`
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

## What should be backed up

SA-MP and open.mp have **no world save**. There is no stored world and no savegame file — everything persistent is created by your gamemode alone. A meaningful backup therefore covers these folders and files:

| Path | Content |
|------|---------|
| `/gamemodes/` | Your gamemodes as `.amx` files |
| `/filterscripts/` | Additional scripts |
| `/plugins/` | Server plugins (`.so`) |
| `/scriptfiles/` | All data your scripts store themselves |
| `/models/` | Custom models and textures |
| `config.json` or `server.cfg` | The server configuration |
| `bans.json` or `samp.ban` | Your ban list |

:::: danger Important
If your gamemode stores player data in a **MySQL database**, that data is **not** part of the server files. Back the database up separately as well — a backup of the server files alone is not enough in that case.
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Running scripts write to `scriptfiles` while the server is up — a backup taken during operation can be incomplete.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
