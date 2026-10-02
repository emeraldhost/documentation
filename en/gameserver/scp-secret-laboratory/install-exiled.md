---
description: "Install EXILED on an SCP: Secret Laboratory server"
---

# How to Install EXILED on Your SCP: Secret Laboratory Server

EXILED is a plugin framework for SCP: Secret Laboratory. Many popular plugins require it. EXILED is built on LabAPI, Northwood's official plugin loader: the Exiled Loader is loaded as a LabAPI plugin and then loads the EXILED plugins.

On your server, you install EXILED manually via SFTP. You don't need the `Exiled.Installer-Linux` installer for this.

:::: warning Warning
Create a [backup](create-backup.md) of your server before the installation.
::::

## Download EXILED

1. <b>Open the releases page</b><br>
   Open the [EXILED releases page on GitHub](https://github.com/ExMod-Team/EXILED/releases).

2. <b>Download the archive</b><br>
   Under **Assets** of the latest release, download the file `Exiled.tar.gz`.

3. <b>Extract the archive</b><br>
   Extract the archive on your PC, e.g. with [7-Zip](https://www.7-zip.org/). It contains two folders:

   ```
   EXILED/
   SCP Secret Laboratory/
   ```

   :::: info Note
   With 7-Zip you may have to extract the file in two steps: first from `.tar.gz` to `.tar`, then the `.tar` file.
   ::::

## Upload EXILED

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the EXILED folder</b><br>
   Upload the complete `EXILED` folder to the following directory:

   ```
   /.config/
   ```

   The EXILED plugins are then located in `/.config/EXILED/Plugins/`.

4. <b>Upload the Exiled Loader</b><br>
   Upload the file `Exiled.Loader.dll` from the archive's `SCP Secret Laboratory/LabAPI/plugins/global/` folder to the following directory:

   ```
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   ```

5. <b>Upload the dependencies</b><br>
   Upload all files from the archive's `SCP Secret Laboratory/LabAPI/dependencies/global/` folder to the following directory:

   ```
   /.config/SCP Secret Laboratory/LabAPI/dependencies/global/
   ```

   These are `Exiled.API.dll`, `Mono.Posix.dll` and `SemanticVersioning.dll`.

   :::: danger Important
   Do not replace the complete `/.config/SCP Secret Laboratory/` folder on your server. It also contains your server's configuration files. Only upload the individual files into the subfolders listed above.
   ::::

6. <b>Start the server</b><br>
   Start your server via the dashboard. EXILED is now loaded through LabAPI.

:::: tip Tip
If the `plugins/global/` or `dependencies/global/` folder is missing, create it yourself. The names must be spelled exactly like this, because the server runs on Linux and is case-sensitive.
::::

## Check the installation

After the start, open the console in your server's dashboard. During startup, EXILED reports there which plugins it loads. After the first successful start, EXILED also creates the folder `/.config/EXILED/Configs/` with its configuration files.

If errors appear or EXILED does not load, the guide [Plugins not loading](plugins-not-loading.md) will help you.

:::: warning Warning
The EXILED version must match your server's game version. After a game update, EXILED can be temporarily incompatible and then loads no plugins until a matching EXILED version is released.
::::

## Update EXILED

By default, EXILED checks for a new version on every server start and installs it automatically. If your version is up to date, the console shows `No new versions found, you're using the most recent version of Exiled!`.

To update EXILED manually, download the new `Exiled.tar.gz` and repeat the steps under [Upload EXILED](#upload-exiled). Overwrite the existing files. Your plugins and configurations in `/.config/EXILED/Plugins/` and `/.config/EXILED/Configs/` are kept as long as you don't delete the `EXILED` folder on the server beforehand.

## Install plugins

EXILED on its own changes almost nothing in the game. To learn how to add plugins, see the guide [Install EXILED Plugins](install-exiled-plugins.md).
