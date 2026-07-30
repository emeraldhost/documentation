---
description: Add a savegame to a Myth of Empires server
---

# How to Add a Savegame to Your Myth of Empires Server

Myth of Empires does **not** use a world name. A save is always the complete folder `Saved` – not a single file. You upload that folder with all of its contents to the location where your server expects its save.

:::: info Where does the save come from?
This guide describes a server-to-server transfer – that is, a save you previously downloaded from a Myth of Empires server. For saves from singleplayer there is no documented way onto a dedicated server.
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
   Change to the following directory:

   ```
   /MOE/
   ```

   :::: info Note
   If the `Saved` folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards.
   ::::

4. <b>Remove the old save</b><br>
   Rename the existing `Saved` folder (for example to `Saved_old`) or delete it.

   :::: warning Caution
   This deactivates the current save of your server. Back it up first via [Download savegame](download-savegame.md) or a [backup](create-backup.md).
   ::::

5. <b>Upload Saved</b><br>
   Upload your `Saved` folder with all of its subfolders and files into this directory. The folder has to be named exactly `Saved`.

6. <b>Check the server ID</b><br>
   Compare the **server ID** of your server with the one of the server the save came from. Both have to match, otherwise your server does not find the uploaded save.

7. <b>Start the server</b><br>
   Start your server. On startup it now loads your uploaded save.

:::: danger Do not change the server ID
The save is stored under the **server ID** – there is no world name you could enter in a configuration. If you change the server ID, your server looks under a different ID and creates a completely new, empty world. The old save stays on the disk but is no longer loaded.
::::

:::: warning Caution
Always upload the complete `Saved` folder. Besides the world it also contains the player and building data as well as your server settings. If you mix files from different saves, world and player data no longer match.
::::

:::: info Note
The `Saved` folder also contains your server settings under `Config/WindowsServer/`. If you upload the folder in full, you overwrite the current settings of your server. The folder is called `WindowsServer` on your Linux server as well – Myth of Empires only ships a Windows server binary, which runs through a compatibility layer.
::::

:::: tip Reset the server
If you want to start over completely instead, stop the server, delete the `Saved` folder and start the server again. A fresh world is generated on the next start.
::::
