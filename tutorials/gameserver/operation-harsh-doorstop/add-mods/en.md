---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Operation Harsh Doorstop Server"
description: "Add mods to an Operation Harsh Doorstop server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/operation-harsh-doorstop/add-admin", "gameserver/operation-harsh-doorstop/create-backup", "gameserver/operation-harsh-doorstop/join-server", "gameserver/operation-harsh-doorstop/kick-ban-players"]
---

Mods for Operation Harsh Doorstop come from the **Steam Workshop**. On the server they live as folders inside the `Mods` directory – there is no mod list or configuration file in which you enable them. Maps, factions and game modes from mods are selected through the **startup parameters** of your server instead.

> [!WARNING]
> **Caution**
>
> Your server does **not** download mods from the Workshop on its own. You download the mod folder yourself and transfer it to the server via SFTP.

## Step 1: Download the mod

1. **Open the mod in the Workshop**\
   Open the desired mod in the **Steam Workshop** of Operation Harsh Doorstop and subscribe to it. Steam then stores the mod locally on your PC – inside the Steam directory under `steamapps/workshop/content/736590/<workshop ID>`.

   > [!NOTE]
   > `736590` is the Steam app ID of Operation Harsh Doorstop. The workshop ID is shown in the address bar of the Workshop page after `?id=`.

2. **Alternative: download via SteamCMD**\
   You can also download the mod on your PC without subscribing, using SteamCMD:

   ```text
   steamcmd +login anonymous +workshop_download_item 736590 <workshop ID> +quit
   ```

   The files then end up under `steamapps/workshop/content/736590/<workshop ID>` as well.

3. **Locate the mod folder**\
   Inside that directory you find the actual mod folder. That folder – not the folder named after the workshop ID – is the one you copy to the server later. Its name is usually stated in the mod description.

## Step 2: Upload the mod to the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the Mods folder**\
   Navigate to the following directory. If the `Mods` folder does not exist yet, create it:

   ```text
   /HarshDoorstop/Mods
   ```

4. **Upload the mod folder**\
   Upload the complete mod folder into this directory. Each mod gets exactly one folder there:

   ```text
   /HarshDoorstop/Mods/MY_MOD
   ```

5. **Start the server**\
   Start your server once the upload has finished.

> [!WARNING]
> **Caution**
>
> Upload the folder completely and only start the server afterwards. An interrupted upload means maps or game modes of the mod cannot be loaded.

## Step 3: Enable the mod content on the server

Uploading the mod is not enough: maps, factions and game modes additionally have to be selected in the **startup parameters** of your server. You adjust those in the **dashboard**.

| Parameter | Meaning |
|-----------|---------|
| `<MapName>` | The map the server starts on – for a map mod, the name of the modded map |
| `?BluforFaction=` | Faction of the blue team |
| `?OpforFaction=` | Faction of the red team |
| `?game=` | Path of the game mode class from a mod |

An example set of startup parameters for a modded server looks like this:

```text
MODDED_MAP?BluforFaction=MODDED_FACTION?OpforFaction=MODDED_FACTION?game=MODDED_GAMEMODE_PATH
```

> [!NOTE]
> The exact names for maps, factions and game modes are defined by the mod author. They are stated in the mod description on the Workshop – invented or misspelled names keep the server from starting as expected. If you leave out `?game=`, the server uses the default game mode of the map.

> [!TIP]
> Mods that only add content (additional equipment, for example) often need no startup parameters at all. Only maps, factions and game modes have to be selected explicitly.

## What players need to do

Maps, factions and game modes from mods also have to be present on the PCs of your fellow players. The most reliable way is for everyone to subscribe to the mods used on the **Steam Workshop** and restart the game afterwards.

## Remove a mod

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Clean up the startup parameters**\
   Remove every reference to the mod from the startup parameters – modded map, factions and game mode. If a reference remains, the server will not start correctly afterwards.

3. **Delete the folder**\
   Delete the mod folder from `/HarshDoorstop/Mods` via SFTP.

4. **Start the server**\
   Start your server.
