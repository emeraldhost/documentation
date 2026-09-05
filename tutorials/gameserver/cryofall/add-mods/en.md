---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your CryoFall Server"
description: "Add mods to a CryoFall server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/cryofall/add-admin", "gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame"]
---

Mods in CryoFall are individual **`.mpk` files**. You upload them into the `/Data/Mods/` folder and then activate them in the file `/Data/ModsConfig.xml`. Without an entry in that file an uploaded mod is not loaded.

> [!WARNING]
> **Caution**
>
> Stop your server before adding, updating or removing mods. Also create a [backup](/tutorials/gameserver/cryofall/create-backup) beforehand – mods can change your world permanently.

> [!NOTE]
> **No Steam Workshop**
>
> There is no Workshop integration for CryoFall servers. You always upload the `.mpk` file of every mod manually.

## Get the mod

1. **Choose a mod**\
   You can find mods in the official [CryoFall forum](https://forums.atomictorch.com/index.php?board=24.0) or on the websites and Discord servers of the respective mod authors.

2. **Check the tag**\
   Mod authors state where their mod has to be installed:

   | Tag | Meaning |
   |-----|---------|
   | `[Server]` | Runs on the server only. Your players do not have to install anything. |
   | `[Client]` | Pure player-side mod. It has no effect on the server. |
   | `[Client+Server]` | Has to be installed on the server **and** on every player's PC. |

3. **Note the mod ID**\
   Write down the mod ID given by the author – often including a version number, for example `duality_1.2.1`. That exact ID is what you enter into `ModsConfig.xml` later on.

4. **Check the version**\
   Make sure the mod matches the game version of your server. Mods built for another version can prevent the server from starting.

## Upload the mod

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the mods folder**\
   Go to the following directory:

   ```text
   /Data/Mods/
   ```

   > [!NOTE]
   > If the folder does not exist yet, create it inside `/Data/`. The name has to be exactly `Mods` – your server runs on Linux and is case-sensitive.

4. **Upload the `.mpk` file**\
   Upload the `.mpk` file directly into this folder. Do not create any subfolders.

## Activate the mod

1. **Open ModsConfig.xml**\
   Open the following file:

   ```text
   /Data/ModsConfig.xml
   ```

2. **Add the mod**\
   Add one line per mod containing its mod ID:

   ```xml
   <?xml version="1.0" encoding="utf-8" standalone="yes"?>
   <mods>
     <mod>core_1.0.0</mod>
     <mod>cnei</mod>
   </mods>
   ```

   > [!IMPORTANT]
   > Do not delete existing entries. The core entry belongs to the game itself and has to stay. Simply add new mods below it.

3. **Start the server**\
   Save the file and start your server via the dashboard.

4. **Check the console**\
   On startup your server reports the loaded mods in the console. If your mod does not show up there, the mod ID usually does not match the file name in the `Mods` folder.

## Mods on your players' side

> [!IMPORTANT]
> Your server does **not** distribute mods to players automatically. For a mod tagged `[Client+Server]` every player has to install the same `.mpk` file in their own game as well – the mod author describes how in their forum post. Pure `[Server]` mods require no installation on the player side.

> [!WARNING]
> **Do not block client mods**
>
> In the file `/Data/SettingsServer.xml` the value `no_client_mods` controls whether players may join with their own mods. On a modded server it has to be `0`:
>
> ```xml
> <no_client_mods>0</no_client_mods>
> ```
>
> If it is set to `1`, all mods are disabled on the player side.

## Remove mods

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the entry**\
   Remove the line of that mod from the file `/Data/ModsConfig.xml`.

3. **Delete the file**\
   Delete the matching `.mpk` file from the `/Data/Mods/` folder.

4. **Start the server**\
   Start your server again.

> [!WARNING]
> **Caution**
>
> If you remove a mod that added items, buildings or technologies to the world, its content disappears from your world. When in doubt restore a [backup](/tutorials/gameserver/cryofall/create-backup) instead of simply deleting the mod.

> [!NOTE]
> After a game update mods can become incompatible and prevent the server from starting. In that case update your mods or temporarily remove them from `ModsConfig.xml` and the `/Data/Mods/` folder.
