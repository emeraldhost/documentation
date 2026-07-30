---
description: Download a savegame from a The Front server
---

# How to Download the Savegame of Your The Front Server

The save of a The Front server is not a single file but the complete folder `GameStates`. It contains the world, all structures, the player data and the guild data.

:::: warning Caution
Stop your server before downloading the files. The Front saves regularly while running – downloading during operation can result in an incomplete save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /TheFrontManager/<ConfigName>/Saved/
   ```

   :::: info Which config name?
   The folder carries the config name of your server – the same name that appears in the configuration file `ServerConfig_<ConfigName>.ini`. Simply open the folder `/TheFrontManager/` – usually there is exactly one subfolder in there, and that is yours.

   If you cannot find a `TheFrontManager` folder, your server runs without a dedicated user directory. The save is then located here:

   ```
   /ProjectWar/Saved/
   ```
   ::::

4. <b>Download GameStates</b><br>
   Download the complete folder `GameStates` including all subfolders and files to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: warning Caution
A save is always the complete `GameStates` folder. Always download it in full – individual files taken from it do not make a usable save.
::::

:::: info What is inside GameStates?
| Entry | Content |
|-------|---------|
| `Worlds/` | The world of your server |
| `Players/` | The player data |
| `DeletedPlayers/` | Deleted player data |
| `Accounts/Accounts.csv` | The accounts on your server |
| `Accounts/NickNames.csv` | The player names in use |
| `Accounts/GM.csv` | Admins and bans |
| `ConstructData.sav` | All built structures |
| `GuildData.sav` | The guilds on your server |
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the configuration file in addition:

```
/TheFrontManager/ServerConfig_<ConfigName>.ini
```
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
