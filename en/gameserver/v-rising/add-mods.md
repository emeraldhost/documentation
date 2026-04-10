---
description: Add mods to a V Rising server
---

# How to Add Mods to Your V Rising Server

V Rising mods are based on the **BepInEx** framework. You need to install BepInEx first before you can add mods. See [Install BepInEx](install-bepinex.md).

:::: warning Warning
Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.
::::

1. <b>Download mods</b><br>
   Download the desired mods from [Thunderstore](https://thunderstore.io/c/v-rising/) or [Nexus Mods](https://www.nexusmods.com/vrising).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload mod files</b><br>
   Extract the mod and upload the `.dll` file(s) to the following directory:

   ```
   /BepInEx/plugins/
   ```

5. <b>Start the server</b><br>
   Start your server.

:::: danger Important
All players must have the **same mods** installed locally to join the server.
::::
