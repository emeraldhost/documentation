---
description: Step-by-step guide on how to add mods to your Project Zomboid server.
---

# How to Add Mods to Your Project Zomboid Server

:::: info Info
You can find the **Workshop-ID** and **Mod-ID** on the **Steam Workshop page** for each mod.
::::

1. <b>Stop server</b><br>
   Stop your Project Zomboid server.

2. <b>Open file browser</b><br>
   Open your dashboard, select your Project Zomboid server, and go to the file browser **or** connect to your Project Zomboid server via SFTP. Instructions for this can be found here: [Establishing an SFTP connection](../establish-sftp-connection.md).

3. <b>Open folder</b><br>
   Navigate to the `.cache/Server` folder.

4. <b>Open config file</b><br>
   Open the `ProjectZomboid.ini` file.

5. <b>Add mod entries</b><br>
   Add or adjust the following entries:

    ```
    Mods= Mod-ID1;Mod-ID2;Mod-ID3
    WorkshopItems= Workshop-ID1;Workshop-ID2;Workshop-ID3
    ```

6. <b>Restart server</b><br>
   Save the changes and restart your server to load the mods.
