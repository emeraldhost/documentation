---
description: Add mods to a BeamMP server
---

# How to Add Mods to Your BeamMP Server

You can install mods on your server to enhance the gameplay experience.

:::: warning Warning
Stop your server before adding mods. Mods must **not be archived** (e.g. `.zip`) — extract them first.
::::

1. <b>Download mods</b><br>
   Download the desired mods from [BeamNG.drive Mods](https://www.beamng.com/resources/) or the [BeamMP Forum](https://forum.beammp.com/).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload mods</b><br>
   Upload the extracted mod files to the following directory:

   ```
   /Resources/Client/
   ```

5. <b>Start the server</b><br>
   Start your server.

:::: info Note
Mods in the `Resources/Client/` folder are automatically downloaded by all players joining the server.
::::
