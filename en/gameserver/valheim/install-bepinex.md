---
description: Install BepInEx on a Valheim server
---

# How to Install BepInEx on Your Valheim Server

**BepInEx** is a mod framework required to use mods on your Valheim server.

1. <b>Download BepInEx</b><br>
   Download **BepInExPack_Valheim** from [Thunderstore](https://thunderstore.io/c/valheim/p/denikson/BepInExPack_Valheim/). Click **Manual Download**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload BepInEx</b><br>
   Extract the downloaded ZIP file and upload the **entire contents** to the root directory of your server. The following files and folders should be present afterwards:

   ```
   /
   ├── BepInEx/
   │   ├── config/
   │   ├── plugins/
   │   └── core/
   ├── doorstop_config.ini
   ├── winhttp.dll
   └── ...
   ```

5. <b>Start the server</b><br>
   Start your server. BepInEx will initialize automatically.

:::: info Note
After installation, you can upload mods as `.dll` files to the `/BepInEx/plugins/` folder. See [Add Mods](add-mods.md).
::::
