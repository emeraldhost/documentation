---
title: Uploading a world in Minecraft Java Edition
description: Upload a world to a Minecraft Java Edition server
---

# How to Upload a World on a Minecraft Java Server

:::: danger Attention
The world files must not be an archive such as `.zip`. Unzip the world first.
::::

1. <b>Stop the server</b><br>
   Stop your Minecraft Java Edition server.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the world</b><br>
   Upload your new world in the main folder, which also contains the `world` folder.

4. <b>Open server.properties</b><br>
   Open the file `server.properties` and look for the following entry:

   ```
   level-name=world
   ```

5. <b>Change the value</b><br>
   Change the value to the name of your uploaded world (e.g. `level-name=NewWorld`).

6. <b>Restart the server</b><br>
   Save the changes and restart the server.

:::: tip Tip
You can also run several worlds in parallel on your server, e.g. with plugins such as [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
::::
