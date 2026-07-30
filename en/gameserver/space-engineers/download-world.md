---
description: Download a world from a Space Engineers server
---

# How to Download the World of Your Space Engineers Server

You can download your server's world to your PC at any time — for example as an additional backup, to archive it, or to move it to another server.

:::: warning Caution
Stop your server before downloading the files. While the server is running it saves regularly — otherwise you would download an incomplete or corrupted world.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser.

3. <b>Open the world folder</b><br>
   Go to the following folder on the server:

   ```
   Saves/World/
   ```

4. <b>Download the world data</b><br>
   Download the **complete contents** of this folder to your PC — among others `Sandbox.sbc`, `Sandbox_config.sbc` and the `.sbs` files. Always download all files; individual files on their own do not make a working world.

5. <b>Start the server</b><br>
   Start your server again.

:::: info Note
The world name on your server is fixed to **World** and cannot be changed (visible in the **Settings**). Your world is therefore always located in the `Saves/World/` folder — there is no other folder you would have to look in.
::::

:::: tip Restore the world
If you want to transfer the world back to a server later, follow the guide [Upload world](upload-world.md).
::::

:::: info Regular backups
For regular backups you can use your server's [automatic backups](configure-automatic-backups.md) or create a manual [backup](../create-backup.md).
::::
