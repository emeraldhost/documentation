---
description: Download a world from a Minecraft Bedrock Edition server
---

# How to Download the World of Your Minecraft Bedrock Edition Server

You can download your server's world to your PC at any time, for example as an extra backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running, it saves regularly, otherwise you would download an incomplete or corrupted save.
::::

1. <b>Stop the server</b><br>
   Stop your Minecraft Bedrock Edition server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   In the main folder of your server, open the following folder:

   ```
   worlds
   ```

4. <b>Download the world folder</b><br>
   Every world is stored here as its own folder. Download the complete folder of your world to your PC, by default it is called `Bedrock level`.

5. <b>Start the server</b><br>
   Start your server again.

:::: tip Tip
You can see which world is currently loaded in the `server.properties` file in the main folder of your server. The `level-name=` entry contains the name of the world folder:

```
level-name=Bedrock level
```
::::

:::: tip Restoring the world
If you want to transfer the world back to a server later, follow the guide [Upload world](upload-world.md).
::::

:::: info Regular backups
For automatic or regular backups you can also use the backup function: [Create backup](create-backup.md).
::::
