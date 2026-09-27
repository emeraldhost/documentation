---
description: Install mods on a Hytale server
---

# How to Install Mods on a Hytale Server

:::: info Note
Stop your server before installing mods, otherwise they will not load correctly.
::::

:::: tip Tip
You can download mods for Hytale from [CurseForge](https://www.curseforge.com/hytale). Make sure the mod supports the Hytale version of your server. On CurseForge, you can see this under **Game Versions** (e.g. `0.6`). The console shows your server's version on startup (e.g. `Version: 0.6.8`).
::::

## How to Install Mods

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Download the Mod</b><br>
   Download the desired mod as a `.jar` or `.zip` file.

3. <b>Upload the Mod</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the mod file to the `mods/` folder.

4. <b>Start the Server</b><br>
   Start your server to load the mod.

## How to Remove Mods

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the Mod</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and delete the mod file from the `mods/` folder.

3. <b>Start the Server</b><br>
   Start your server.

## How to Install Early Plugins

Early plugins are special plugins that modify the server's code as early as startup. Hytale does not officially support them and warns that they can cause stability issues. Only install an early plugin if a mod explicitly requires it.

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Enable Early Plugins</b><br>
   Navigate to the **Settings** in the dashboard and set the **Enable Early Plugins** field to `1`. Without this setting, the server does not start on its own as soon as early plugins are present, but asks for an additional confirmation.

3. <b>Upload the Early Plugin</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the `.jar` file to the `earlyplugins/` folder in the root directory. If the folder does not exist yet, create it.

4. <b>Start the Server</b><br>
   Start your server. If the early plugin was loaded, the console shows the warning `This is unsupported and may cause stability issues.` on startup.

:::: tip Tip
To remove an early plugin, delete the file from the `earlyplugins/` folder. Once there are no more early plugins in it, you can set **Enable Early Plugins** back to `0`.
::::

:::: warning Warning
Hytale is in Early Access. Mods may cause stability issues. After major Hytale updates, older mods may stop working until their author updates them, and can even prevent your server from starting. Create a [backup](create-backup.md) of your server before installation.
::::
