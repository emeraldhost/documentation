---
description: Step-by-step instructions on how to add mods to your V Rising server.
---

# How to Add Mods to Your V Rising Server

:::: danger Warning
All players must have the **same mods** installed to be able to join the server.
::::

:::: info Info
V Rising uses **BepInEx** as its mod framework. BepInEx is already pre-installed on your server.
::::

1. <b>Download mods</b><br>
   Download the desired mods from [Thunderstore](https://thunderstore.io/c/v-rising/) or [NexusMods](https://www.nexusmods.com/vrising).

2. <b>Stop server</b><br>
   Open your dashboard and stop your V Rising server.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload mods</b><br>
   Upload the `.dll` mod files to the `/BepInEx/plugins/` folder.

5. <b>Start server</b><br>
   Start your server for the mods to be loaded.
