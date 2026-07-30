---
description: Add a savegame to a Factorio server
---

# How to Add a Savegame to Your Factorio Server

You can transfer a local save to your server to continue playing with an existing factory. A Factorio save is always a **single .zip file** – not a folder.

## Find the local savegame

1. <b>Open savegame folder</b><br>
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```
   %appdata%\Factorio\saves
   ```

   :::: info Note
   On Linux the saves are located in `~/.factorio/saves`, on macOS in `~/Library/Application Support/factorio/saves`.
   ::::

2. <b>Select the save</b><br>
   Pick the desired `.zip` file, e.g. `MyFactory.zip`. Avoid spaces in the file name and use underscores instead, e.g. `My_Factory.zip`.

## Upload and apply the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the save</b><br>
   Upload the `.zip` file to the following directory:

   ```
   /saves/
   ```

4. <b>Set the save name</b><br>
   Open the dashboard, navigate to the **Settings** and enter the file name of your save in the **Save Name** field – **without** the `.zip` extension (e.g. `My_Factory` for `My_Factory.zip`).

5. <b>Start the server</b><br>
   Save the settings and start your server.

:::: warning Warning
Do not rename the uploaded file – instead adjust the **Save Name** to match the existing file name. This avoids errors caused by mismatching names inside the zip file.
::::

:::: danger Important
If the server does not find a file matching the configured **Save Name** in the `saves` folder, it automatically generates a **new, empty world** with that name on startup. Double-check the spelling, including upper and lower case.
::::

:::: warning Versions
A save from a newer Factorio version cannot be loaded on an older server. Older saves are migrated when loaded, but only across a limited range of versions.
::::

:::: tip Mods
If the save was played with mods, the same mods have to be present on the server as well. See [Add mods](add-mods.md) for how to install them.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your existing server save before uploading, in case you want to switch back later.
::::
