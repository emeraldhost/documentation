---
description: Create a backup of a BATTALION Legacy server
---

# How to Create a Backup of Your BATTALION Legacy Server

A BATTALION Legacy server does **not store a game world**. The server name and the admin password are passed to your server as startup parameters — you enter both in the **dashboard**. Everything else — round times, map lists, bots and scoring — sits in the configuration files of your server. Those are exactly the files a backup preserves.

:::: info No world save
BATTALION Legacy is a pure PvP shooter. Only the current round is kept on the server — there is no save game and no player progress you would have to back up or move to another server.
::::

## When should you create a backup?

- Before changing the configuration files of your server
- Before reinstalling the server files
- As soon as you have found a configuration you are happy with
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: warning Caution
Stop your server before creating or restoring a backup. A running server keeps writing to its files and may overwrite your changes when it shuts down.
::::

## Back up the configuration separately

If you only want to save your server settings, download the configuration folder via SFTP.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Download the folders</b><br>
   Download both of the following folders completely to your PC:

   ```
   /Battalion/Config/
   /Battalion/Saved/Config/LinuxServer/
   ```

4. <b>Start the server</b><br>
   Start your server again.

:::: info Note
The `/Battalion/Config/` folder holds the shipped configuration files (`DefaultGame_*.ini`) with the game settings of your server — for example the map and mode lists, the round times and the number of bots.

The `/Battalion/Saved/Config/LinuxServer/` folder is only created while the server runs and holds the configuration your server writes itself (among others the `Game.ini`). If you cannot find it, start your server once.
::::

:::: danger Important
Your server receives the server name and the admin password from the **dashboard** as startup parameters. They therefore take precedence over the entries in the configuration files — a backup of those files does not preserve the two values. Note them down separately from the dashboard.
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
