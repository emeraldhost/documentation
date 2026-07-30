---
description: Add a savegame to a Kerbal Space Program server
---

# How to Add a Savegame to Your Kerbal Space Program Server

The savegame of a DarkMultiPlayer server is not a single file but a complete folder named `Universe` in the main directory of your server. Inside it the server keeps individual text files for every vessel, every Kerbal and every player.

:::: info Note
The folder name `Universe` is fixed. You do not have to enter a world or savegame name in any configuration – the server name has nothing to do with the savegame.
::::

## Structure of the savegame

| Folder | Content |
|--------|---------|
| `Universe/Vessels/` | One file per vessel |
| `Universe/Kerbals/` | One file per Kerbal |
| `Universe/Scenarios/` | Progress such as science, funds, reputation and tech tree – one subfolder per player |
| `Universe/Crafts/` | Shared craft library |
| `Universe/Flags/` | Uploaded flags |
| `Universe/Players/` | Public keys of the players |
| `Universe/Groups/` | Player groups |
| `Universe/Permissions/` | Vessel ownership |

## Convert a single player savegame

A regular KSP save file (`persistent.sfs`) cannot be uploaded directly. The DMP client ships a converter that turns your local savegame into a ready-to-use `Universe` folder.

1. <b>Install the DMP client</b><br>
   Install the DMP client as described in [Join Server](join-server.md) and start Kerbal Space Program.

2. <b>Enter your player name</b><br>
   In the DMP window in the main menu, enter exactly the name you want to use on the server later in the **Player name** field.

3. <b>Open the options</b><br>
   Click on **Options** in the DMP window and then on **Advanced**.

4. <b>Run the converter</b><br>
   Click on **Generate DMP universe from saved game...**. The **Universe Converter** window opens and lists your local savegames – click the one you want. Your savegames are stored locally at:

   ```
   [KSP folder]/saves/<name of the savegame>/
   ```

   :::: warning Warning
   An existing `Universe` folder inside your KSP folder is deleted and recreated without asking.
   ::::

5. <b>Check the result</b><br>
   Your KSP folder now contains the new folder `Universe` with the subfolders `Vessels`, `Kerbals` and `Scenarios`. This is exactly the folder you upload in the next step.

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it constantly writes to the `Universe` folder.

2. <b>Save the current state</b><br>
   Create a [backup](create-backup.md) or download the existing folder: [Download Savegame](download-savegame.md).

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Remove the old savegame</b><br>
   Delete the existing folder in the main directory of your server:

   ```
   /Universe/
   ```

5. <b>Upload the new savegame</b><br>
   Upload your `Universe` folder including all subfolders into the main directory. The folder has to be named exactly `Universe`.

6. <b>Start the server</b><br>
   Start your server. It creates any missing subfolders on startup.

:::: danger Important
In DarkMultiPlayer progress is stored **per player** in `Universe/Scenarios/<player name>/`. After the conversion only the folder for your own player name exists. All other players start on the server with fresh progress – DMP has no shared career or science progress for everyone.
::::

:::: warning Warning
Use the same player name on the server as during the conversion. If the name differs, the server finds no matching folder under `Universe/Scenarios/` and your converted progress is not assigned to you.
::::

:::: tip Tip
If the game mode and difficulty do not match your uploaded savegame, set both in the **dashboard** under **settings** (**Game Mode** and **Game Difficulty**). Both values are written from the dashboard into the configuration on every server start – changing them directly in the file has no effect.
::::

:::: info Note
Vessels from the converted savegame are stored as individual files in `Universe/Vessels/`. That way a single vessel can be removed without touching the whole savegame – stop the server for that as well.
::::
