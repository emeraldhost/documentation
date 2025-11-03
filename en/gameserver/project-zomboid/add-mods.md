---
title: Adding mods to Project Zomboid
description: Step-by-step guide on how to install and activate mods in Project Zomboid.
---

# Adding Mods to Project Zomboid: File Browser & SFTP

::: info Info
You can find the **Workshop-ID** and **Mod-ID** on the **Steam Workshop page** for each mod.
:::

1. <strong>Stop your Project Zomboid server.</strong>

2. <strong>Open your dashboard, select your Project Zomboid server, and go to the file browser **or** connect to your Project Zomboid server via SFTP. Instructions for this can be found here: [Establishing an SFTP connection](../establish-sftp-connection.md).</strong>

3. <strong>Navigate to the ```.cache/Server``` folder.</strong>

4. <strong>Open the ```ProjectZomboid.ini``` file.</strong>

5. <strong>Add or adjust the following entries:</strong>

    ```
    Mods= Mod-ID1;Mod-ID2;Mod-ID3
    WorkshopItems= Workshop-ID1;Workshop-ID2;Workshop-ID3
    ```

6. <strong>Save the changes and restart your server to load the mods.</strong>
