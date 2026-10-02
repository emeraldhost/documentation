---
slug: "install-exiled"
language: "en"
title: "How to Install EXILED on Your SCP: Secret Laboratory Server"
description: "Install EXILED on an SCP: Secret Laboratory server"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install EXILED"
sort: 16
related: ["gameserver/scp-secret-laboratory/install-exiled-plugins", "gameserver/scp-secret-laboratory/install-labapi-plugins", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/create-backup"]
---
EXILED is a plugin framework for SCP: Secret Laboratory. Many popular plugins require it. EXILED is built on LabAPI, Northwood's official plugin loader: the Exiled Loader is loaded as a LabAPI plugin and then loads the EXILED plugins.

On your server, you install EXILED manually via SFTP. You don't need the `Exiled.Installer-Linux` installer for this.

> [!WARNING]
> Create a [backup](/tutorials/gameserver/scp-secret-laboratory/create-backup) of your server before the installation.

## Download EXILED

1. **Open the releases page**\
   Open the [EXILED releases page on GitHub](https://github.com/ExMod-Team/EXILED/releases).

2. **Download the archive**\
   Under **Assets** of the latest release, download the file `Exiled.tar.gz`.

3. **Extract the archive**\
   Extract the archive on your PC, e.g. with [7-Zip](https://www.7-zip.org/). It contains two folders:

   ```text
   EXILED/
   SCP Secret Laboratory/
   ```

   > [!NOTE]
   > With 7-Zip you may have to extract the file in two steps: first from `.tar.gz` to `.tar`, then the `.tar` file.

## Upload EXILED

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the EXILED folder**\
   Upload the complete `EXILED` folder to the following directory:

   ```text
   /.config/
   ```

   The EXILED plugins are then located in `/.config/EXILED/Plugins/`.

4. **Upload the Exiled Loader**\
   Upload the file `Exiled.Loader.dll` from the archive's `SCP Secret Laboratory/LabAPI/plugins/global/` folder to the following directory:

   ```text
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   ```

5. **Upload the dependencies**\
   Upload all files from the archive's `SCP Secret Laboratory/LabAPI/dependencies/global/` folder to the following directory:

   ```text
   /.config/SCP Secret Laboratory/LabAPI/dependencies/global/
   ```

   These are `Exiled.API.dll`, `Mono.Posix.dll` and `SemanticVersioning.dll`.

   > [!IMPORTANT]
   > Do not replace the complete `/.config/SCP Secret Laboratory/` folder on your server. It also contains your server's configuration files. Only upload the individual files into the subfolders listed above.

6. **Start the server**\
   Start your server via the dashboard. EXILED is now loaded through LabAPI.

> [!TIP]
> If the `plugins/global/` or `dependencies/global/` folder is missing, create it yourself. The names must be spelled exactly like this, because the server runs on Linux and is case-sensitive.

## Check the installation

After the start, open the console in your server's dashboard. During startup, EXILED reports there which plugins it loads. After the first successful start, EXILED also creates the folder `/.config/EXILED/Configs/` with its configuration files.

If errors appear or EXILED does not load, the guide [Plugins not loading](/tutorials/gameserver/scp-secret-laboratory/plugins-not-loading) will help you.

> [!WARNING]
> The EXILED version must match your server's game version. After a game update, EXILED can be temporarily incompatible and then loads no plugins until a matching EXILED version is released.

## Update EXILED

By default, EXILED checks for a new version on every server start and installs it automatically. If your version is up to date, the console shows `No new versions found, you're using the most recent version of Exiled!`.

To update EXILED manually, download the new `Exiled.tar.gz` and repeat the steps under [Upload EXILED](#upload-exiled). Overwrite the existing files. Your plugins and configurations in `/.config/EXILED/Plugins/` and `/.config/EXILED/Configs/` are kept as long as you don't delete the `EXILED` folder on the server beforehand.

## Install plugins

EXILED on its own changes almost nothing in the game. To learn how to add plugins, see the guide [Install EXILED Plugins](/tutorials/gameserver/scp-secret-laboratory/install-exiled-plugins).
