---
description: Add mods to an Unturned server
---

# How to Add Mods to Your Unturned Server

Unturned comes with its own download system for the Steam Workshop: you add the file IDs of the mods and maps you want to the file `WorkshopDownloadConfig.json`, and your server downloads them automatically on startup.

:::: tip The best part
Your fellow players do **not** have to install or subscribe to anything manually. When connecting, the client automatically downloads all mods configured on your server.
::::

## Find the file ID

1. <b>Open the Steam Workshop</b><br>
   Open the [Steam Workshop for Unturned](https://steamcommunity.com/app/304930/workshop/) and look for the mod or map you want.

2. <b>Copy the file ID</b><br>
   The file ID is part of the URL of the Workshop page. Copy the number after `?id=`.

   :::: tip Example
   In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=2136497468` the file ID is `2136497468`.
   ::::

## Add mods to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the configuration file</b><br>
   Open the following file:

   ```
   /Servers/<ServerID>/WorkshopDownloadConfig.json
   ```

   :::: info Which folder is mine?
   `<ServerID>` is the folder name inside `/Servers/`. It comes from your server's startup parameter – usually there is exactly one folder there.
   ::::

4. <b>Enter the file IDs</b><br>
   Add the IDs to the `File_IDs` section, separated by commas:

   ```json
   "File_IDs":
   [
       2136497468,
       1497352180
   ],
   ```

   :::: warning Warning
   Only change the `File_IDs` section and leave the remaining entries of the file untouched. There must be **no** comma after the last ID, otherwise the file is invalid and your server will not start.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server. On startup all configured mods and their dependencies are downloaded and updated.

## Use a Workshop map

A map from the Workshop needs two entries: the file ID so it gets downloaded, and the map name so the server actually loads it.

1. <b>Add the file ID</b><br>
   Add the file ID of the map to `WorkshopDownloadConfig.json` as described above.

2. <b>Select the map</b><br>
   Open the following file:

   ```
   /Servers/<ServerID>/Server/Commands.dat
   ```

   and enter the name of the map – one instruction per line:

   ```
   Map Elver
   ```

3. <b>Start the server</b><br>
   Save both files and start your server.

:::: danger Important
Switching the map starts the world from scratch. Create a [backup](create-backup.md) of your current save beforehand.
::::

### File IDs of popular maps

| Map | File ID |
|-----|---------|
| Elver | `2136497468` |
| Carpat | `1497352180` |
| Hawaii | `1753134636` |
| Greece | `1702240229` |
| Arid | `2683620106` |
| Buak | `3000549606` |
| A6 Polaris | `2898548949` |
| Escalation | `3251926587` |
| France | `1975500516` |
| Ireland | `1411633953` |
| Belgium | `1727125581` |
| Kuwait | `2483365750` |
| California | `1905768396` |
| Rio de Janeiro | `3416057692` |

## Further settings in the file

| Entry | Meaning |
|-------|---------|
| `File_IDs` | The list of mods and maps your server downloads |
| `Ignore_Children_File_IDs` | Dependencies that should deliberately **not** be downloaded |
| `Use_Cached_Downloads` | Reuse files that have already been downloaded |
| `Should_Monitor_Updates` | The server watches whether an update is available for a mod |
| `Shutdown_Update_Detected_Timer` | Waiting time in seconds before shutting down after a detected update (default `600`) |
| `Shutdown_Update_Detected_Message` | Message players see when an update is detected |
| `Shutdown_Kick_Message` | Message shown when players are disconnected |

:::: info Automatic update monitoring
When your server detects a Workshop update it warns the players and shuts down after the timer expires, so the mod is updated on the next start. If your server restarts on its own after a mod update, that is expected behaviour.
::::

## Remove mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the entry</b><br>
   Remove the file ID from the `File_IDs` section and make sure there is no comma after the last remaining ID.

3. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Removing a mod also removes every item, vehicle and object from that mod that was placed in your world. Create a [backup](create-backup.md) beforehand.
::::

## Common problems

:::: warning Mod is not downloaded
Workshop content that has not been updated since the engine change in version 3.28 is not downloaded by the server. Check on the Workshop page when the mod was last updated and switch to a maintained alternative if necessary.
::::

:::: danger Do not upload mods manually
Do not upload mods manually via SFTP into the `Workshop` folder. Players only download the mods that are listed in `WorkshopDownloadConfig.json` automatically – manually uploaded mods are missing on the clients and joining fails. Always configure mods in `WorkshopDownloadConfig.json`.
::::
