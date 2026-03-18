---
description: Add mods to a 7 Days to Die server
---

# How to Add Mods to Your 7 Days to Die Server

You can install mods on your server to enhance the gameplay experience.

:::: warning Warning
Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.
::::

1. <b>Download mods</b><br>
   Download the desired mods from [Nexus Mods](https://www.nexusmods.com/7daystodie) or [7daystodiemods.com](https://7daystodiemods.com/).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload mods</b><br>
   Extract the mod and upload the mod folder (the one containing `ModInfo.xml`) to the following directory:

   ```
   /Mods/
   ```

   :::: tip Example
   ```
   /Mods/
   ├── MyMod/
   │   ├── ModInfo.xml
   │   └── Config/
   └── AnotherMod/
       ├── ModInfo.xml
       └── Config/
   ```
   ::::

   :::: info Note
   If the `Mods` folder does not exist yet, create it in the root directory of your server.
   ::::

5. <b>Start the server</b><br>
   Start your server.

:::: danger Important
All players must have the **same mods** installed locally to be able to join the server.
::::
