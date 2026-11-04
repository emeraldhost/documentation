---
slug: "install-mods"
language: "en"
title: "How to Install Mods on Your Enshrouded Server"
description: "Enable the Enshrouded Mod Loader (EML) and install mods on an Enshrouded server"
tags: []
date: "2026-11-04"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install Mods"
sort: 15
related: ["gameserver/enshrouded/control-automatic-updates", "gameserver/enshrouded/create-backup", "gameserver/enshrouded/join-server", "gameserver/enshrouded/read-server-log"]
---

Enshrouded does not offer official mod support yet. With the **Enshrouded Mod Loader (EML)**, you can still use mods on your server. You enable the mod loader in the **Config Editor** of your dashboard and then simply upload your mods to the `mods` folder.

> [!IMPORTANT]
> The Enshrouded Mod Loader was created by the community and is not an official tool from Keen Games. Enshrouded itself does not officially support mods yet. That is why there is no guarantee for errors caused by mods.

> [!WARNING]
> After an Enshrouded update, mods and the mod loader may stop working until their authors have updated them. If your server no longer starts or behaves strangely after an update, first check whether new versions of your mods are available.

## Preparation

- **Create a backup**\
  Create a backup of your server before installing, so you can restore your world if needed: [Create Backup](/tutorials/gameserver/enshrouded/create-backup).

- **Start the server once**\
  If your server is brand new, start it once without the mod loader so that all files and your world are created.

- **Choose EML-compatible mods**\
  Download the mods you want, e.g. from [Nexus Mods](https://www.nexusmods.com/games/enshrouded). Check the description of each mod to make sure it is made for the Enshrouded Mod Loader (EML) and matches your Enshrouded version.

## Enable the Mod Loader

1. **Stop the server**\
   Stop your server in the dashboard.

2. **Open the Config Editor**\
   Navigate to the **Config Editor** in the dashboard.

3. **Turn on the mod loader**\
   Enable the **Enshrouded Mod Loader (EML)** option and save the setting.

4. **Start and stop the server**\
   Start your server once so the mod loader is set up and the `mods` folder is created. As soon as the server has fully started, stop it again.

## Upload Mods

1. **Extract the mod**\
   Extract the downloaded `.zip` file on your computer. Inside, you find a folder named after the mod that contains, among other things, a `mod.json` file.

2. **Connect to the server**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or open the **File Manager** in the dashboard.

3. **Open the mods folder**\
   Open the `mods` folder in the main directory of your server.

4. **Upload the mod**\
   Upload the complete mod folder to the `mods` folder. Each mod gets its own folder with a `mod.json`. With the example mods `FasterCrafting` and `MoreStackSize`, it looks like this:

   ```text
   mods/
   ├── FasterCrafting/
   │   └── mod.json
   └── MoreStackSize/
       └── mod.json
   ```

   If `mod.json` sits directly in `mods` or one folder too deep, the mod is not loaded.

5. **Start the server**\
   Start your server. The mod loader now loads all mods from the `mods` folder.

> [!TIP]
> For more mods, simply repeat the steps under "Upload Mods". Each mod gets its own folder in `mods`.

## Mods for Your Fellow Players

Some mods must be installed not only on the server but also by your fellow players. Whether this is needed is stated in the description of each mod. In that case, let your fellow players know which mods and versions they need.

## Remove a Mod or Disable the Mod Loader

- **Remove a single mod**\
  Stop your server, delete the folder of the mod in `mods` and start the server again.

- **Disable the mod loader**\
  Stop your server, disable the **Enshrouded Mod Loader (EML)** option in the **Config Editor** and start the server again. Your server then runs without mods again.

## Problems After an Update

If your mods no longer work after an Enshrouded update, proceed as follows:

1. **Disable the mod loader**\
   Disable the **Enshrouded Mod Loader (EML)** in the **Config Editor** so your server starts without mods again.

2. **Install new versions**\
   Check the pages of your mods for a version that has been updated for the new game version, and replace the old mod folders in `mods` with the new ones.

3. **Enable the mod loader again**\
   Enable the mod loader again and start your server.

> [!TIP]
> If you do not want to be surprised by an update, you can temporarily turn off automatic updates. To learn how and what to keep in mind, see [Control Automatic Updates](/tutorials/gameserver/enshrouded/control-automatic-updates).

If your server does not start with mods, you usually find the reason in the server log, see [Read Server Log](/tutorials/gameserver/enshrouded/read-server-log).
