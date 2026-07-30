---
description: Add a savegame to a PixARK server
---

# How to Add a Savegame to Your PixARK Server

The complete save of a PixARK server lives in the `Saved` folder. To transfer a save, you download this folder from one server and upload it to your server.

:::: danger Important
This guide transfers a save **from one server to another server**. For PixARK there is no documented way to move a single player save from your own PC to a dedicated server. Do not attempt it blindly – only work with saves that originate from a server.
::::

## Check first

A foreign save only loads if it matches the configuration of your server:

| Requirement | Explanation |
|-------------|-------------|
| Same map | The save has to come from the same map your server starts. If your server starts a different map, the save will not be loaded. |
| Same world name | PixARK stores the world under the world name defined at server start. If the save comes from a provider that used a different world name, your server will not find it and generates a new world instead. |

:::: warning Caution
If your server starts with a freshly generated world instead of your save after uploading, one of these two requirements is not met. In that case do not keep playing – stop the server right away, otherwise you overwrite the uploaded save.
::::

## Upload the savegame

1. <b>Create a backup</b><br>
   Create a [backup](create-backup.md) of your server or download the existing state: [Download Savegame](download-savegame.md). That way you can always go back.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it constantly writes to the save and will overwrite your files.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /ShooterGame/
   ```

5. <b>Move the old save aside</b><br>
   Rename the existing `Saved` folder, for example to `Saved_old`. This way no leftovers of the old state remain that could mix with the new one – and you can go back if needed.

6. <b>Upload the savegame</b><br>
   Upload the `Saved` folder of the other server so that it ends up at the following path again:

   ```
   /ShooterGame/Saved/
   ```

7. <b>Start the server</b><br>
   Start your server. The new save is now loaded.

:::: tip Keep your own settings
The `Saved` folder also contains the subfolder `Config/WindowsServer/` with the configuration files. If you only want to take over the world and players but keep your own server settings, copy the `Config` folder from your old `Saved` folder back after uploading.
::::

:::: info Note
Once the server runs with the new save and everything works, you can delete the renamed `Saved_old` folder. Download it to your PC beforehand if you want to keep it.
::::
