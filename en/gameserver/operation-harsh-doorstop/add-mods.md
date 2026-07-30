---
description: Add mods to an Operation Harsh Doorstop server
---

# How to Add Mods to Your Operation Harsh Doorstop Server

Mods for Operation Harsh Doorstop come from the **Steam Workshop**. On the server they live as folders inside the `Mods` directory – there is no mod list or configuration file in which you enable them. Maps, factions and game modes from mods are selected through the **startup parameters** of your server instead.

:::: warning Caution
Your server does **not** download mods from the Workshop on its own. You download the mod folder yourself and transfer it to the server via SFTP.
::::

## Step 1: Download the mod

1. <b>Open the mod in the Workshop</b><br>
   Open the desired mod in the **Steam Workshop** of Operation Harsh Doorstop and subscribe to it. Steam then stores the mod locally on your PC – inside the Steam directory under `steamapps/workshop/content/736590/<workshop ID>`.

   :::: info Note
   `736590` is the Steam app ID of Operation Harsh Doorstop. The workshop ID is shown in the address bar of the Workshop page after `?id=`.
   ::::

2. <b>Alternative: download via SteamCMD</b><br>
   You can also download the mod on your PC without subscribing, using SteamCMD:

   ```
   +login anonymous +workshop_download_item 736590 <workshop ID> validate +quit
   ```

   The files then end up under `steamapps/workshop/content/736590/<workshop ID>` as well.

3. <b>Locate the mod folder</b><br>
   Inside that directory you find the actual mod folder. That folder – not the folder named after the workshop ID – is the one you copy to the server later. Its name is usually stated in the mod description.

## Step 2: Upload the mod to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the Mods folder</b><br>
   Navigate to the following directory. If the `Mods` folder does not exist yet, create it:

   ```
   /HarshDoorstop/Mods
   ```

4. <b>Upload the mod folder</b><br>
   Upload the complete mod folder into this directory. Each mod gets exactly one folder there:

   ```
   /HarshDoorstop/Mods/MY_MOD
   ```

5. <b>Start the server</b><br>
   Start your server once the upload has finished.

:::: warning Caution
Upload the folder completely and only start the server afterwards. An interrupted upload means maps or game modes of the mod cannot be loaded.
::::

## Step 3: Enable the mod content in game

Uploading the mod is not enough: maps, factions and game modes additionally have to be selected in the **startup parameters** of your server. You adjust those in the **dashboard**.

| Parameter | Meaning |
|-----------|---------|
| `<MapName>` | The map the server starts on – for a map mod, the name of the modded map |
| `?BluforFaction=` | Faction of the blue team |
| `?OpforFaction=` | Faction of the red team |
| `?game=` | Path of the game mode class from a mod |

An example set of startup parameters for a modded server looks like this:

```
MODDED_MAP?BluforFaction=MODDED_FACTION?OpforFaction=MODDED_FACTION?game=MODDED_GAMEMODE_PATH
```

:::: info Note
The exact names for maps, factions and game modes are defined by the mod author. They are stated in the mod description on the Workshop – invented or misspelled names keep the server from starting as expected. If you leave out `?game=`, the server uses the default game mode of the map.
::::

:::: tip Tip
Mods that only add content (additional equipment, for example) often need no startup parameters at all. Only maps, factions and game modes have to be selected explicitly.
::::

## What players need to do

Maps, factions and game modes from mods also have to be present on the PCs of your fellow players. The most reliable way is for everyone to subscribe to the mods used on the **Steam Workshop** and restart the game afterwards.

## Remove a mod

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Clean up the startup parameters</b><br>
   Remove every reference to the mod from the startup parameters – modded map, factions and game mode. If a reference remains, the server will not start correctly afterwards.

3. <b>Delete the folder</b><br>
   Delete the mod folder from `/HarshDoorstop/Mods` via SFTP.

4. <b>Start the server</b><br>
   Start your server.
