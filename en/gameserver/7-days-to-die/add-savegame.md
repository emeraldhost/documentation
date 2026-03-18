---
description: Upload a savegame to a 7 Days to Die server
---

# How to Add a Savegame to Your 7 Days to Die Server

You can upload an existing singleplayer world to your server.

## Find savegame

Your local savegame can be found on your PC at:

```
%AppData%/7DaysToDie/
```

There are two important folders:
- `GeneratedWorlds/` — contains the world data (terrain, buildings)
- `Saves/` — contains the save files (player progress, placements)

## Upload savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload world data</b><br>
   Upload the folder of your world from `GeneratedWorlds/` to the following directory on the server:

   ```
   /.local/share/7DaysToDie/GeneratedWorlds/
   ```

4. <b>Upload save data</b><br>
   Upload the folder of your save from `Saves/` to the following directory on the server:

   ```
   /Saves/
   ```

5. <b>Edit serverconfig.xml</b><br>
   Open the file `serverconfig.xml` and adjust the following values:

   ```xml
   <property name="GameWorld" value="YourWorldName"/>
   <property name="GameName" value="YourSaveName"/>
   ```

   Replace `YourWorldName` with the name of your world folder and `YourSaveName` with the name of your save folder.

6. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
The folder names must exactly match the values in `serverconfig.xml`.
::::
