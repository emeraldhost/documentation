---
description: Create a backup of a Soldat 2 server
---

# How to Create a Backup of Your Soldat 2 Server

Regular backups of your Soldat 2 server protect you from data loss — whether due to a failed update, a broken configuration or a script that keeps the server from starting cleanly.

:::: info Note
Soldat 2 does not store any world progress — there is no savegame that could be backed up or restored. What gets backed up is your configuration, your custom maps, modifiers, game modes, scripts and your map rotation — exactly the files whose loss costs the most work.
::::

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before uploading custom maps, modifiers or game modes
- Before installing or updating scripts
- Before reworking your map rotation
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

## Files worth backing up

If you only want to save the most important files, download them via [SFTP](../establish-sftp-connection.md):

| File or folder | Contents |
|----------------|----------|
| `autoconfig.ini` | Main configuration of the server |
| `Levels/` | Your custom maps |
| `Modifiers/Custom/` | Your custom modifiers |
| `Rules/Custom/` | Your custom game modes and round rules |
| `Scripts/Custom/` | Your custom C# scripts |
| `Cycles/Custom/` | Your map rotations |
| `greet.txt` | Greeting text shown to players |

:::: danger Important
Stop your server before creating or restoring a backup. The `autoconfig.ini` is rewritten when the server **stops** — a backup taken during operation may contain a different state than you expect.
::::

:::: warning Warning
A backup only secures the files on your server. Custom maps, modifiers and scripts are best handed to your players directly as well — see [Add Mods](add-mods.md). Keep those files somewhere you can hand them out from at any time.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
