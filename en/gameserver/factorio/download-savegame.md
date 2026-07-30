---
description: Download a savegame from a Factorio server
---

# How to Download the Savegame of Your Factorio Server

You can download your server's save to your PC at any time – for example as an additional backup, to archive a factory, or to move it to another server.

:::: warning Caution
Stop your server before downloading the file. While the server is running it saves at regular intervals — otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /saves/
   ```

4. <b>Download the save</b><br>
   Download the `.zip` file of your save to your PC. The entire save is contained in this single file.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Which file is the right one?
You can tell which save is loaded from the **Save Name** field in the **Settings** of the dashboard. If it contains `gamesave`, for example, you need the file `gamesave.zip`.
::::

:::: info Autosaves
The automatic saves are located in the same folder and are named `_autosave1.zip`, `_autosave2.zip` and so on. They are useful for returning to a slightly older state.
::::

:::: tip Continue playing locally
Copy the downloaded `.zip` file to `%appdata%\Factorio\saves` on your PC to open the factory in single player.
::::

:::: tip Restoring the savegame
If you want to transfer the save back to a server later, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
