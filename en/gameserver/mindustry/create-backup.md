---
description: Create a backup of a Mindustry server
---

# How to Create a Backup of Your Mindustry Server

Regular backups of your Mindustry server protect you from data loss — whether due to a failed update, an overwritten save or a mod that breaks your map.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading a different save
- Before adding, updating or removing mods and plugins
- At regular intervals so you always have a safe state to return to

## What belongs in the backup?

Mindustry stores all server data in the `config` folder:

| Path | Content |
|------|---------|
| `/config/saves/` | All saves as `.msav` files, including the auto-saves |
| `/config/maps/` | Your custom maps |
| `/config/mods/` | Installed mods and plugins |
| `/config/settings.bin` | All server settings as well as the admin and ban lists |

:::: danger Important
`settings.bin` is a binary file and contains, among other things, your admins, bans and the whitelist. Mindustry has **no** text files such as `admins.txt` or `bans.json`. Never edit `settings.bin` by hand – only back it up.
::::

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the `.msav` files separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Mindustry writes settings immediately and saves regularly to disk — a backup taken during operation can contain an incomplete state.
::::

## Auto-saves as an additional safety net

On top of backups, your server can save itself at fixed intervals. Enable the feature in the **console** of your dashboard:

```
config autosave true
```

| Setting | Default | Meaning |
|---------|---------|---------|
| `autosave` | `false` | Turns automatic saving on or off |
| `autosaveSpacing` | `300` | Interval between two saves in seconds |
| `autosaveAmount` | `10` | Number of auto-saves that are kept |

The files are placed in `/config/saves/` with the prefix `auto_`. You can load the most recent auto-save with:

```
loadautosave
```

:::: info Note
Auto-saves are no replacement for a backup: they sit on the same server and are overwritten automatically once the configured amount is reached.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
