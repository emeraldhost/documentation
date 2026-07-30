---
description: Create a backup of a Terraria tShock server
---

# How to Create a Backup of Your Terraria tShock Server

Regular backups of your Terraria tShock server protect you from data loss — whether due to a failed update, a new plugin, a world change or an accidentally overwritten world.

## When should you create a backup?

- Before updating the server version
- Before installing or updating plugins
- Before major changes to the configuration
- Before uploading a different world
- Before taking your world into hardmode
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: warning Caution
Stop your server before creating or restoring a backup. When stopping, tShock saves the world cleanly – that way the current state ends up in the backup in full.
::::

## Use the tShock world backups

tShock additionally creates its own world backups at fixed intervals. They are stored in the folder `/tshock/backups/` and follow the pattern `<world>.wld.<timestamp>.bak`, for example:

```
MyWorld.wld.2026-07-30T12.00.00Z.bak
```

These backups are complete world files – you turn one back into a world by renaming it.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Secure the current world</b><br>
   Download the existing `.wld` file from the main directory or rename it, in case you want to return to the current state.

4. <b>Restore the backup</b><br>
   Copy the desired file from `/tshock/backups/` into the main directory of your server and name it exactly like the **World Name** field in the settings – for example `MyWorld.wld`. Remove the timestamp and the `.bak` extension in the process.

5. <b>Start the server</b><br>
   Start your server. The restored state is now loaded.

:::: info Note
How often tShock creates backups and how long they are kept is controlled by the values `BackupInterval` and `BackupKeepFor` in the file `/tshock/config.json`. Both values are given in minutes. Setting `BackupInterval` to `0` disables the tShock world backups.
::::

:::: danger Important
The tShock backups only contain the **world**. Accounts, groups, bans and – with Server Side Characters enabled – the character data of your players are stored in `/tshock/tshock.sqlite` and are not included. For a complete backup use the backup function of the dashboard.
::::

:::: info Note
If you only want to save the world itself, you can also download the `.wld` file separately: [Download savegame](download-savegame.md).
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
