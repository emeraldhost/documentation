---
description: Add a savegame to a The Front server
---

# How to Add a Savegame to Your The Front Server

The Front does **not** use a world name in its configuration. A save is always the complete folder `GameStates` – not a single file. You upload that folder with all of its contents to the location where your server expects its save.

:::: info Where does the save come from?
This guide describes a server-to-server transfer – a save you previously downloaded from a The Front server. There is no documented way to move a single player or co-op save onto a dedicated server.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your current server save before uploading, in case you want to switch back later.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /TheFrontManager/<ConfigName>/Saved/
   ```

   :::: info Which config name?
   The folder carries the config name of your server – the same name that appears in the configuration file `ServerConfig_<ConfigName>.ini`. Open the folder `/TheFrontManager/` – usually there is exactly one subfolder in there, and that is yours.

   If the folder does not exist yet, start the server once so the structure is created, then stop it again.

   If there is no `TheFrontManager` directory at all, your server runs without a dedicated user directory. The save is then located under `/ProjectWar/Saved/`.
   ::::

4. <b>Remove the old save</b><br>
   Rename the existing `GameStates` folder (for example to `GameStates_old`) or delete it.

   :::: warning Warning
   This deactivates the current save of your server. Secure it beforehand via [Download savegame](download-savegame.md) or a [backup](create-backup.md).
   ::::

5. <b>Upload GameStates</b><br>
   Upload your `GameStates` folder including all subfolders and files into this directory. The folder has to be named exactly `GameStates`.

6. <b>Start the server</b><br>
   Start your server. Your uploaded save is now loaded on startup.

:::: danger Do not change the config name
The config name of your server determines both the folder your save lives in and the name of the configuration file. If you change that name, your server looks in a different folder – and generates a completely new, empty world there. Your old save stays on the disk but is no longer loaded.

The name must not contain spaces or special characters.
::::

:::: warning Warning
Always upload the complete `GameStates` folder. Besides the world it also holds the player, construction and guild data (`Worlds/`, `Players/`, `Accounts/`, `ConstructData.sav`, `GuildData.sav`). If you mix files from different saves, world and player data no longer match.
::::

:::: tip Reset the server
If you would rather start from scratch, stop the server, delete the `GameStates` folder and start the server again. A fresh world is generated on the next start.
::::
