---
description: Download a savegame from a Conan Exiles server
---

# How to Download the Savegame of Your Conan Exiles Server

You can download your server's savegame to your PC at any time — for example as an extra backup, to archive it, or to move it to another server. The savegame consists of the `game.db` file.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly, so you would end up downloading an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /ConanSandbox/Saved/
   ```

4. <b>Download the file</b><br>
   Download the `game.db` file to your PC. It contains your entire world including all buildings, characters and progress.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
The full path to the savegame file on the server is `/ConanSandbox/Saved/game.db`. If you want to continue playing the downloaded savegame locally, place the `game.db` on your PC in the Conan Exiles installation directory under `ConanSandbox/Saved/`.
::::

:::: tip Restoring the save later
If you want to transfer the save back to a server later on, follow the guide [Add savegame](add-savegame.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
