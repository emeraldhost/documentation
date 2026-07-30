---
description: Add a savegame to a Terraria tShock server
---

# How to Add a Savegame to Your Terraria tShock Server

You can transfer an existing world to your server to continue playing there. tShock uses the regular Terraria world format – so a world consists of **a single `.wld` file**. You can use a single player world, the world of a regular Terraria server or the world of another tShock server.

:::: tip Tip
Create a [backup](create-backup.md) of your existing server world before uploading, in case you want to switch back later.
::::

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
   Pick the desired `.wld` file, e.g. `MyWorld.wld`. Do **not** use spaces in the file name, use underscores instead, e.g. `My_World.wld`.

   :::: danger Important
   A space in the world name breaks the startup command of your server – the world will not be loaded. Rename the file before uploading if necessary.
   ::::

## Upload and apply the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the world</b><br>
   Upload the `.wld` file directly into the **main directory** of your server:

   ```
   /
   ```

   :::: info Note
   With tShock the world is not stored in a subfolder but directly in the main directory – the same place where the `tshock` folder is located.
   ::::

4. <b>Set the world name</b><br>
   Open the dashboard, navigate to the **Settings** and enter the file name of your world in the **World Name** field – **without** the `.wld` extension (e.g. `My_World` for `My_World.wld`).

5. <b>Start the server</b><br>
   Save the settings and start your server. Your uploaded world is now loaded on startup.

:::: danger Important
The world name is matched **exactly** as you enter it, including upper and lower case. If the server does not find a matching `.wld` file, it automatically generates a **new, empty world** with that name on startup. So if your file is named `MyWorld.wld` and you enter `myworld`, you end up in a freshly generated world instead of your uploaded one.
::::

:::: warning Switching worlds
If you want to replace an old world completely, remove the old `.wld` file from the main directory. This prevents mix-ups later on. Save it first if you might want to switch back: [Download savegame](download-savegame.md).
::::

:::: info Server Side Characters
A `.wld` file only contains the world. If Server Side Characters are enabled (the `Enabled` value in `/tshock/sscconfig.json`), the inventories and progress of your players are stored in `/tshock/tshock.sqlite`. If you also want to take the characters over from another tShock server, transfer that file as well – note that accounts, groups and bans come along with it.
::::

:::: warning tModLoader
`.twld` files belong to tModLoader and are not used by a tShock server. A tModLoader world belongs on a tModLoader server: [Add savegame (tModLoader)](../terraria-tmodloader/add-savegame.md).
::::
