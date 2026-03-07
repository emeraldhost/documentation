---
description: Install mods on a Palworld server
---

# How to Install Mods on Your Palworld Server

You can install mods on your server to enhance the gameplay experience.

:::: warning Warning
Stop your server before installing mods. After a game update, mods may be incompatible and cause crashes.
::::

1. <b>Download mods</b><br>
   Download the desired mods from [CurseForge](https://www.curseforge.com/palworld) or [Nexus Mods](https://www.nexusmods.com/palworld).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload mods</b><br>
   Upload the `.pak` files to the following directory:

   ```
   /Pal/Content/Paks/
   ```

5. <b>Start the server</b><br>
   Start your server.

:::: info Note
Some mods must be installed on both the server and all players' clients. Check the mod description to see if a client-side installation is required.
::::
