---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Conan Exiles Server"
description: "Step-by-step instructions on how to add mods to your Conan Exiles server."
tags: []
date: "2025-12-28"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/conan-exiles/add-admin", "gameserver/conan-exiles/add-savegame", "gameserver/conan-exiles/change-map", "gameserver/conan-exiles/change-max-players"]
---

> [!TIP]
> You can also upload the mod files using an FTP program. Here you will find instructions on how to [establish an SFTP connection](/tutorials/gameserver/establish-sftp-connection).

> [!WARNING]
> Make sure the mods are compatible with your current server version. Incompatible mods can prevent your server from starting.

## Steps

1. **Subscribe to mods**\
   Open the [Steam Workshop](https://steamcommunity.com/app/440900/workshop/) for Conan Exiles and subscribe to the mods you want to use on your server. Steam will automatically download the mods to your local PC.

2. **Locate mod files**\
   The downloaded mod files are located on your PC in the folder:

   ```text
   C:\Program Files (x86)\Steam\steamapps\workshop\content\440900
   ```

   Inside the numbered subfolders, you will find the `.pak` files – these are the ones you need.

3. **Create Mods folder**\
   Open your server in the file browser and navigate to the `ConanSandbox` folder. Create a new folder named `Mods`.

4. **Upload mods**\
   Copy all `.pak` files of your desired mods to the `ConanSandbox/Mods` folder.

5. **Create modlist.txt**\
   Create a new file named `modlist.txt` in the `ConanSandbox/Mods` folder. Add each mod with an asterisk (*) at the beginning – each mod on a new line:

   ```text
   *ModName1.pak
   *ModName2.pak
   *ModName3.pak
   ```

6. **Restart server**\
   Save the file and restart your server. After restarting, the mods will be loaded automatically.

> [!NOTE]
> All players who want to join your server must have the same mods installed.
