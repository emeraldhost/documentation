---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your PixARK Server"
description: "Add mods to a PixARK server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/pixark/add-admin", "gameserver/pixark/add-savegame", "gameserver/pixark/create-backup", "gameserver/pixark/download-savegame"]
---

There is a Steam Workshop for PixARK. Unlike ARK Survival Evolved, however, the server does **not** download the mods itself – there is no field where you enter mod IDs. You have to upload the files to the server via SFTP yourself.

> [!IMPORTANT]
> Mods are a special case in PixARK. The Workshop has barely been maintained for years, many entries are explicitly marked as "Legacy" or "Discontinued", and there is no official documentation for server usage. Whether a specific mod runs on your server cannot be predicted. Therefore **always** create a [backup](/tutorials/gameserver/pixark/create-backup) beforehand and test one mod at a time.

## Requirement

You can only obtain the mod files through a PixARK installation on your own PC: Steam downloads the mod as an archive, and it is only unpacked when you start the game for the first time. Only afterwards do the files exist in a form you can upload to the server.

## Obtain the mod files

1. **Subscribe to the mod**\
   Open the [Steam Workshop for PixARK](https://steamcommunity.com/app/593600/workshop/), find the desired mod and subscribe to it.

2. **Start PixARK**\
   Launch PixARK once on your PC and wait until you reach the main menu. Only then does the game unpack the mod files.

3. **Open the mods folder**\
   Open the following directory on your PC:

   ```text
   <Steam>\steamapps\common\PixARK\ShooterGame\Content\Mods
   ```

4. **Locate the files**\
   Every mod consists of **two** items:

   | Item | Description |
   |------|-------------|
   | Folder named after the mod ID | A folder whose name is the numeric mod ID |
   | `<ModID>.mod` | A file of the same name right next to it |

   > [!WARNING]
   > You need both. If you only upload the folder and forget the `.mod` file, the server will not recognise the mod.

## Upload the mod to the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory. If the `Mods` folder does not exist yet, create it:

   ```text
   /ShooterGame/Content/Mods/
   ```

4. **Upload the files**\
   Upload the mod folder **and** the matching `.mod` file into this directory.

5. **Start the server**\
   Start your server. If it does not start up cleanly or crashes, remove the mod again and restore your backup.

## Update mods

> [!NOTE]
> The server does not update mods on its own. When a new version appears in the Workshop, you have to download it on your PC, start the game once and upload the files to the server again. If the server and client versions of a mod do not match, players run into errors when joining.

> [!TIP]
> So that all your players have the same mod files, they should subscribe to the mod in the Steam Workshop as well and start the game once before joining your server.
