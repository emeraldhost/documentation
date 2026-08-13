---
description: Reset the world of an Enshrouded server
---

# How to Reset the World of Your Enshrouded Server

Enshrouded has no reset button. You get a fresh world by deleting the save in the save folder — on the next start the server automatically creates a new world.

:::: danger Important
Resetting removes your current world for good: all bases and buildings, every change to the terrain, all chests including their contents and your entire progress in the world. There is no undo. So always create a backup **first** — without one there is no way back to your old state.
::::

## Reset the world

1. <b>Create a backup</b><br>
   Secure your current world before you delete anything: [Create Backup](create-backup.md). You can also download the save to your PC: [Download savegame](download-savegame.md).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard. A running server writes the world back to disk about every five minutes — never delete the files while it is running.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Delete the save</b><br>
   Navigate to the `savegame` folder and delete all files inside it. A world consists of several files there: the world file `3ad85aea`, its automatic rolling copies `3ad85aea-1` to `3ad85aea-9`, the files ending in `_info` (name and metadata of the world) and the files ending in `-index` (which copy is currently active). Which of them exist depends on the age of your world — so simply delete the entire contents of the folder. You can keep the `savegame` folder itself.

5. <b>Start the server</b><br>
   Start your server via the dashboard. It creates a new world while booting up. As soon as `[Session] 'HostOnline' (up)!` appears in the console you can join.

:::: warning Warning
Only delete the contents of the `savegame` folder. The file `enshrouded_server.json` sits in the main directory and holds your complete server configuration — deleting it also wipes your user groups and passwords.
::::

## What is gone and what stays

| Gone | Stays |
|------|-------|
| Bases and buildings | Your character with level, skills and backpack |
| Changes to the terrain | The server configuration in `enshrouded_server.json` |
| Chests and their contents | User groups and passwords |
| Your entire progress in the world | The backups you created earlier |

:::: info Note
Only the progress of the world is stored on the server. Your character — level, skill points and the contents of your backpack — is saved on your own machine. So you enter the new world with your usual character, but without a base and without any storage.
::::

:::: tip Tip
If the new world should run under different rules, change the [difficulty](adjust-difficulty.md) before you start the server again.
::::

:::: tip Restoring the old world
If you created a backup before deleting, you restore it via the dashboard: [Create Backup](create-backup.md). If you downloaded the save to your PC instead, upload it again via SFTP: [Add savegame](add-savegame.md).
::::
