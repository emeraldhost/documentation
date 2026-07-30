---
description: Create a backup of a Minecraft PocketMine Edition server
---

# How to Create a Backup of Your Minecraft PocketMine Edition Server

Regular backups of your Minecraft PocketMine Edition server protect you from data loss — whether due to a failed update, a broken plugin or an accidentally overwritten world.

## When should you create a backup?

- Before updating the server version
- Before installing or updating plugins
- Before major changes to `server.properties` or `pocketmine.yml`
- Before uploading a different world
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Note
If you only want to save the world itself, you can also download the world folder separately: [Download savegame](download-savegame.md).
::::

:::: warning Caution
Stop your server before creating or restoring a backup. While running, PocketMine-MP constantly writes to the LevelDB database of the loaded world — a backup taken during operation can be incomplete.
::::

:::: info Note
Besides the `worlds` folder, a complete backup also includes your configuration and list files in the main folder of your server, in particular `server.properties`, `pocketmine.yml`, `ops.txt`, `white-list.txt`, `banned-players.txt` and `banned-ips.txt` as well as the `plugins`, `plugin_data` and `resource_packs` folders.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
