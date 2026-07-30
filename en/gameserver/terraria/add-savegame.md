---
description: Add a savegame to a Terraria server
---

# How to Add a Savegame to Your Terraria Server

You can transfer a local world to your server to continue playing with an existing world. In regular Terraria a world consists of **a single `.wld` file**.

## Find the local savegame

1. <b>Open the worlds folder</b><br>
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```
   %userprofile%\Documents\My Games\Terraria\Worlds
   ```

   :::: info Note
   On Linux the worlds are located in `~/.local/share/Terraria/Worlds`, on macOS in `~/Library/Application Support/Terraria/Worlds`.
   ::::

2. <b>Select the world</b><br>
   Pick the desired `.wld` file, e.g. `MyWorld.wld`. Avoid spaces in the file name and use underscores instead, e.g. `My_World.wld`.

## Upload and apply the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the world</b><br>
   Upload the `.wld` file to the following directory:

   ```
   /saves/Worlds/
   ```

4. <b>Set the world name</b><br>
   Open the dashboard, navigate to the **Settings** and enter the file name of your world in the **World Name** field – **without** the `.wld` extension (e.g. `My_World` for `My_World.wld`).

5. <b>Start the server</b><br>
   Save the settings and start your server.

:::: danger Important
The world name is matched **exactly** as you enter it, including upper and lower case. If the server does not find a matching `.wld` file in `/saves/Worlds/`, it automatically generates a **new, empty world** with that name on startup. So if your file is named `MyWorld.wld` and you enter `myworld`, you end up in a freshly generated world instead of your uploaded one.
::::

:::: warning Warning
Do not edit the file `serverconfig.txt` by hand to switch worlds. The values `worldpath`, `worldname`, `world`, `difficulty`, `autocreate`, `port`, `maxplayers`, `motd`, `seed`, `password` and `npcstream` are rewritten from the dashboard settings on **every server start**. Always change the matching setting in the panel instead.
::::

:::: warning Switching worlds
If you want to replace an old world completely, also remove the old `.wld` file and its `.bak` backup files from the `/saves/Worlds/` folder. This prevents mix-ups later on.
::::

:::: info Note
If the folder `/saves/Worlds/` does not exist yet, start the server once so the folder structure is created. Stop the server again before uploading the file.
::::

:::: warning tModLoader
`.twld` files belong to tModLoader and are not used by a regular Terraria server. A tModLoader world belongs on a tModLoader server: [Add savegame (tModLoader)](../terraria-tmodloader/add-savegame.md).
::::

:::: tip Tip
Create a [backup](create-backup.md) of your existing server world before uploading, in case you want to switch back later.
::::
