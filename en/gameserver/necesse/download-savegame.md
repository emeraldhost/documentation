---
description: Download a savegame from a Necesse server
---

# How to Download the Savegame of Your Necesse Server

You can download the world of your server to your PC at any time – for example as an additional backup, to continue playing it in single player or to transfer it to another server.

:::: warning Caution
Stop your server before downloading the world. Necesse rewrites the world file regularly while running – downloading during operation can result in an incomplete file.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change into the following directory:

   ```
   /saves/worlds/
   ```

   :::: info Note
   If the worlds of your server are located directly in `/saves/`, use that folder.
   ::::

4. <b>Download the world file</b><br>
   Download the `.zip` file of your world to your PC.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Which file is the right one?
The world your server loads is shown in the dashboard under **settings** in the **Save Name** field. If it says `My_World`, for example, then `My_World.zip` is your current world.
::::

:::: warning Caution
Do not extract the `.zip` file. Both the server and the game expect the world as a packed archive.
::::

:::: tip Continue the world in single player
Place the downloaded `.zip` file into the following directory to open the world locally:

```
%appdata%\Necesse\saves\worlds
```
::::

:::: tip Back up the configuration as well
If you also want to save your server settings, download the following file in addition:

```
/cfg/server.cfg
```
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup feature: [Create Backup](create-backup.md).
::::
