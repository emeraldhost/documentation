---
description: Add mods to a CryoFall server
---

# How to Add Mods to Your CryoFall Server

Mods in CryoFall are individual **`.mpk` files**. You upload them into the `/Data/Mods/` folder and then activate them in the file `/Data/ModsConfig.xml`. Without an entry in that file an uploaded mod is not loaded.

:::: warning Caution
Stop your server before adding, updating or removing mods. Also create a [backup](create-backup.md) beforehand – mods can change your world permanently.
::::

:::: info No Steam Workshop
There is no Workshop integration for CryoFall servers. You always upload the `.mpk` file of every mod manually.
::::

## Get the mod

1. <b>Choose a mod</b><br>
   You can find mods in the official [CryoFall forum](https://forums.atomictorch.com/index.php?board=24.0) or on the websites and Discord servers of the respective mod authors.

2. <b>Check the tag</b><br>
   Mod authors state where their mod has to be installed:

   | Tag | Meaning |
   |-----|---------|
   | `[Server]` | Runs on the server only. Your players do not have to install anything. |
   | `[Client]` | Pure player-side mod. It has no effect on the server. |
   | `[Client+Server]` | Has to be installed on the server **and** on every player's PC. |

3. <b>Note the mod ID</b><br>
   Write down the mod ID given by the author – often including a version number, for example `duality_1.2.1`. That exact ID is what you enter into `ModsConfig.xml` later on.

4. <b>Check the version</b><br>
   Make sure the mod matches the game version of your server. Mods built for another version can prevent the server from starting.

## Upload the mod

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the mods folder</b><br>
   Go to the following directory:

   ```
   /Data/Mods/
   ```

   :::: info Note
   If the folder does not exist yet, create it inside `/Data/`. The name has to be exactly `Mods` – your server runs on Linux and is case-sensitive.
   ::::

4. <b>Upload the `.mpk` file</b><br>
   Upload the `.mpk` file directly into this folder. Do not create any subfolders.

## Activate the mod

1. <b>Open ModsConfig.xml</b><br>
   Open the following file:

   ```
   /Data/ModsConfig.xml
   ```

2. <b>Add the mod</b><br>
   Add one line per mod containing its mod ID:

   ```xml
   <?xml version="1.0" encoding="utf-8" standalone="yes"?>
   <mods>
     <mod>core_1.0.0</mod>
     <mod>cnei</mod>
   </mods>
   ```

   :::: danger Important
   Do not delete existing entries. The core entry belongs to the game itself and has to stay. Simply add new mods below it.
   ::::

3. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

4. <b>Check the console</b><br>
   On startup your server reports the loaded mods in the console. If your mod does not show up there, the mod ID usually does not match the file name in the `Mods` folder.

## Mods on your players' side

:::: danger Important
Your server does **not** distribute mods to players automatically. For a mod tagged `[Client+Server]` every player has to install the same `.mpk` file in their own game as well – the mod author describes how in their forum post. Pure `[Server]` mods require no installation on the player side.
::::

:::: warning Do not block client mods
In the file `/Data/SettingsServer.xml` the value `no_client_mods` controls whether players may join with their own mods. On a modded server it has to be `0`:

```xml
<no_client_mods>0</no_client_mods>
```

If it is set to `1`, all mods are disabled on the player side.
::::

## Remove mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the entry</b><br>
   Remove the line of that mod from the file `/Data/ModsConfig.xml`.

3. <b>Delete the file</b><br>
   Delete the matching `.mpk` file from the `/Data/Mods/` folder.

4. <b>Start the server</b><br>
   Start your server again.

:::: warning Caution
If you remove a mod that added items, buildings or technologies to the world, its content disappears from your world. When in doubt restore a [backup](create-backup.md) instead of simply deleting the mod.
::::

:::: info Note
After a game update mods can become incompatible and prevent the server from starting. In that case update your mods or temporarily remove them from `ModsConfig.xml` and the `/Data/Mods/` folder.
::::
