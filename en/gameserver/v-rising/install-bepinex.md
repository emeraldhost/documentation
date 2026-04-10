---
description: Install BepInEx on a V Rising server
---

# How to Install BepInEx on Your V Rising Server

**BepInEx** is a mod framework required to use mods on your V Rising server.

1. <b>Download BepInEx</b><br>
   Download the latest version of [BepInExPack V Rising](https://thunderstore.io/c/v-rising/p/BepInEx/BepInExPack_V_Rising/). Click **Manual Download**.

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
