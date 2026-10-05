---
description: Change map on a The Bus server
---

# How to Change the Map on a The Bus Server

The base map of The Bus is **Berlin** with the lines TXL, 100, N100, 123, 142, 147, 200, 245 and 300. Additional maps come from DLCs (currently the Hamburg City DLC, selectable in-game as the map **Hamburg**) or from map mods that you install in the `/TheBus/Mods/` folder.

You can change the active map via the **Admin Menu** or by **command** in the in-game chat.

:::: info Note
All players need the DLC of the respective map, or the map mod if it is also required on the client, to join and play on the map.
::::

:::: tip Tip
Create a [backup](create-backup.md) before switching maps. Savegames and operating plans each belong to a specific map.
::::

## How to Change the Map via the Admin Menu

1. <b>Join the Server</b><br>
   Join your server in-game, see [Join Server](join-server.md).

2. <b>Open the Admin Menu</b><br>
   Open the pause menu in-game and select the **Admin Menu**. If you are not an Admin yet, enter your server's admin password, see [Add Admin](add-admin.md).

3. <b>Select the Map</b><br>
   Select the desired map in the Admin Menu.

:::: info Note
Since Update 3.2 EA, the map selected in the Admin Menu is saved and kept after a restart of your server.
::::

## How to Change the Map via Command

Alternatively, you can switch the map via the in-game chat. You need Owner or Admin permissions for this, see [Add Admin](add-admin.md).

1. <b>Show Available Maps</b><br>
   Enter the following command in the in-game chat to list all available maps:
   ```
   /mapList
   ```

2. <b>Switch the Map</b><br>
   Enter the following command and replace `<mapname>` with the name of the map exactly as `/mapList` shows it:
   ```
   /map <mapname>
   ```
   For the Hamburg map, for example, the command is:
   ```
   /map Hamburg
   ```

   :::: tip Tip
   To switch back to the default map Berlin, use `/map` with the name that `/mapList` shows for Berlin.
   ::::

:::: info Note
Use `/commands` to show all available commands. On our servers, the console in the dashboard only shows the server output and does not accept commands.
::::

## How to Add More Maps

- For a full walkthrough on switching to Hamburg, see [Play a DLC Map](add-dlc-map.md).
- To learn how to install map mods, see [Add Mods](add-mods.md).
