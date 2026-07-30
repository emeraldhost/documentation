---
description: Add mods to a Mindustry server
---

# How to Add Mods to Your Mindustry Server

Mindustry distinguishes two kinds of extensions, and both go into the same folder:

| Type | Effect |
|------|--------|
| **Mod** | Adds content such as blocks, units or items. Must be installed on the server **and** on every player's client. |
| **Plugin** | Runs on the server only, usually for extra commands or game modes. Players do **not** need it. |

:::: warning Caution
Stop your server before adding, updating or removing mods. Also create a [backup](create-backup.md) first – mods can permanently change your map.
::::

:::: info No automatic download
Your server does **not** download mods by itself, and it does not hand them out to players either. You upload every file manually, and every player installs the mods on their own machine.
::::

## Obtain the mod file

1. <b>Choose a mod</b><br>
   Look for the mod you want in the in-game mod browser or on the mod author's page.

2. <b>Download the file</b><br>
   Your server accepts the following formats:

   | Format | Note |
   |--------|------|
   | `.jar` | Typical for Java mods and plugins |
   | `.zip` | Typical for mods built with JSON or HJSON |
   | Extracted folder | Must directly contain a `mod.json`, `mod.hjson`, `plugin.json` or `plugin.hjson` |

3. <b>Check the version</b><br>
   Make sure the mod matches the game version of your server. Mods built for a different version can prevent the server from starting.

## Upload the mod

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the mods folder</b><br>
   Change into the following directory:

   ```
   /config/mods/
   ```

   :::: info Note
   If the folder does not exist yet, create it. The spelling must be exactly `config/mods` – your server runs on Linux and is case sensitive. Keep the file names of the mods unchanged as well.
   ::::

4. <b>Upload the file</b><br>
   Upload the file directly into this folder.

5. <b>Start the server</b><br>
   Start your server via the dashboard. Changes in the mods folder are only read on server start – there is no command to reload mods.

6. <b>Check the mods</b><br>
   Open the **console** in the dashboard and enter:

   ```
   mods
   ```

   The server lists all loaded mods with version and status and finally prints the mod directory it uses. For details about a single mod use:

   ```
   mod <name>
   ```

## Mods on the players' side

:::: danger Important
When a player connects, the server compares its mod list with the player's. **Name and version have to match exactly.** If something does not match, the player is rejected with the message `Incompatible mods!`. That message also tells the player which mods they are missing (`Missing`) and which ones are too many (`Unnecessary mods`).
::::

That is why every player installs the mods themselves – through the in-game mod browser or manually in the mod menu. There is no download from the server.

:::: tip Tip
Use `mods` in the console to read the name and version exactly as the server expects them. Those are the values your players need to have installed.
::::

## Plugins

Plugins are Java extensions that only run on servers. They typically add new commands or game modes and can be recognised by their meta file `plugin.json` or `plugin.hjson`.

:::: info Note
Plugins are invisible to players: they are not part of the mod comparison. Your players therefore neither download nor install a plugin. Plugins go into the `/config/mods/` folder as well.
::::

## Remove mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the file</b><br>
   Delete the corresponding file from the `/config/mods/` folder.

3. <b>Start the server</b><br>
   Start your server again.

:::: warning Caution
If you remove a mod that added blocks, units or items to your map, its content disappears from the save. When in doubt, restore a [backup](create-backup.md) instead of simply deleting the mod.
::::

:::: warning Mod is not loaded
If your mod does not show up in the output of `mods` after the restart, check its location and spelling: the file has to sit directly in `/config/mods/` and end in `.jar` or `.zip` – or, as a folder, contain a meta file.
::::

:::: info Note
After a game update, mods can become incompatible and prevent the server from starting. In that case update your mods or temporarily remove them from the `/config/mods/` folder.
::::
