---
description: Upload custom maps to a BeamMP server
---

# How to Add a Savegame to Your BeamMP Server

BeamMP is based on the BeamNG.drive sandbox and does not use persistent world savegames. Instead, you can upload custom map files to your server.

## Upload custom maps

:::: warning Warning
Stop your server before uploading files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload map files</b><br>
   Upload your custom map files to the following directory on the server:

   ```
   /Resources/Client/
   ```

:::: warning Warning
Uploading files will overwrite any existing files on the server.
::::

4. <b>Start the server</b><br>
   Start your server. The uploaded maps will now be available.

:::: tip Tip
Since BeamMP is based on the BeamNG.drive sandbox, there are no persistent world savegames. Game progress is not saved on the server side.
::::
