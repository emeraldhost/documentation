---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Colony Survival Server"
description: "Add mods to a Colony Survival server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/colony-survival/add-admin", "gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame"]
---

Mods in Colony Survival always consist of their own folder containing a `modInfo.json` file. On your server you upload those folders via SFTP and then enable the mods for your world.

> [!WARNING]
> **Caution**
>
> Stop your server before adding, changing or removing mods. Also create a [backup](/tutorials/gameserver/colony-survival/create-backup) beforehand – after a game update mods can become incompatible and prevent the world from loading.

## Download the mod

Your server has no Workshop integration that downloads mods on its own. So you download the mod files on your PC and then transfer them via SFTP.

1. **Subscribe to the mod in the Workshop**\
   Subscribe to the mod you want in the Colony Survival Steam Workshop and start the game once so Steam downloads the files.

2. **Open the mod folder on your PC**\
   The downloaded mods are stored in your Steam directory:

   ```text
   ...\Steam\steamapps\workshop\content\366090\
   ```

   Each subfolder represents one mod and is named after its Workshop ID.

3. **Pick the right folder**\
   You need the folder that contains the `modInfo.json` file. If that file sits in a subfolder, this subfolder is the actual mod.

> [!NOTE]
> If a mod is offered outside the Workshop, download it there and extract the archive. The same rule applies: the folder containing `modInfo.json` is the mod folder.

## Upload the mod to the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the mod directory**\
   Navigate to the following directory:

   ```text
   /gamedata/mods/
   ```

   > [!NOTE]
   > Out of the box it already contains the bundled example `ExampleTexturePack` – it shows you how a mod folder is structured. If the directory is missing, create it.

4. **Upload the mod**\
   Upload every mod as its own subfolder. The structure afterwards has to look like this:

   ```text
   /gamedata/mods/<ModName>/modInfo.json
   ```

   > [!WARNING]
   > Never upload the contents of a mod directly into `/gamedata/mods/` – the `modInfo.json` has to sit inside its own subfolder, otherwise the mod is not detected.

## Enable the mod for your world

Uploaded mods are not active yet. They are enabled per world in the file `worldconfig.json`.

1. **Open the file**\
   Open the following file via SFTP. `<worldname>` is the folder name of your world – it matches the **World Name** field in the dashboard:

   ```text
   /gamedata/savegames/<worldname>/worldconfig.json
   ```

2. **Add the mod**\
   Add one entry per mod to the `ModConfigEntries` section. The example shows two mods in the list – the entries are separated by a comma:

   ```json
   {
     "DisplayName": "My World",
     "WorldType": 2,
     "ModConfigEntries": [
       {
         "ModName": "ExampleTexturePack",
         "ModVersionLastKnown": "---",
         "Enabled": true
       },
       {
         "ModName": "AnotherModName",
         "ModVersionLastKnown": "---",
         "Enabled": true
       }
     ]
   }
   ```

   If you only use one mod, the second entry including its comma is omitted.

   > [!NOTE]
   > Only change the `ModConfigEntries` section and leave the other values of the file untouched. The value of `ModName` has to match the `name` field from the `modInfo.json` of the mod exactly. `"ModVersionLastKnown": "---"` is what the server itself writes when it sees a mod for the first time – if you write the entry by hand, use that value. For Workshop mods the field `WorkshopID` is added as well – do not delete it.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading your mods.

3. **Start the server**\
   Save the file and start your server. On startup it loads the enabled mods.

4. **Check the result**\
   Look at the console in the dashboard to see whether the mods were loaded. Errors during loading almost always point to a wrong folder structure or an incompatible mod.

> [!WARNING]
> The file `modstate.json` mentioned in older guides no longer exists. Mods are enabled exclusively through the `worldconfig.json` of the respective world.

## Do players have to install the mods?

> [!NOTE]
> No – for mods that add content such as blocks, textures or recipes, the server transfers its files to the client automatically when connecting. Your fellow players will briefly see the server files being loaded when they join. Your server is then marked as "modded" in the server browser.

> [!TIP]
> To disable a mod without deleting it: set the `"Enabled"` value of the corresponding entry in `worldconfig.json` to `false` and restart your server.
