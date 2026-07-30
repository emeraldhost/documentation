---
description: Add a savegame to an Arma 3 server
---

# How to Add a Savegame to Your Arma 3 Server

An Arma 3 server does **not** save the world state by itself. Whether a savegame exists at all is entirely up to the mission: persistent missions and campaigns such as Antistasi, Vindicta, KP Liberation or Wasteland bring their own saving logic and store their progress in the **server profile**. Vanilla missions do not save anything.

The savegame is always a single file ending in `.vars.Arma3Profile`, named after the profile of the server – for example `server.vars.Arma3Profile`.

:::: danger persistent is not a savegame
The `persistent` value in the `server.cfg` does not save anything. It only keeps the mission running when all players leave the server. Guides describing `persistent = 1;` as a saving feature are wrong.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your server before uploading in case you want to switch back later.
::::

## Find your local savegame

1. <b>Open the profile folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %userprofile%\Documents\Arma 3
   ```

2. <b>Select the file</b><br>
   Look for the file ending in `.vars.Arma3Profile`. The part in front of it is your profile name, for example `Max.vars.Arma3Profile`.

   :::: info Note
   If you use an additional profile, the file is located under `%userprofile%\Documents\Arma 3 - Other Profiles\<profileName>\` instead.
   ::::

## Find the profile name of your server

Your server saves under the profile name it uses on startup. You need that name so your uploaded file actually gets loaded.

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open the profile directory</b><br>
   Change to the following directory:

   ```
   /serverprofile/home/
   ```

3. <b>Read the profile name</b><br>
   The folder in there carries the profile name of your server. Inside it you find the matching file:

   ```
   /serverprofile/home/<profileName>/<profileName>.vars.Arma3Profile
   ```

   :::: info Note
   If the folder does not exist yet, start your server once with the desired mission and stop it again afterwards – the profile is created then.
   ::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the profile file itself.

2. <b>Rename the file</b><br>
   Rename your local file to the profile name of your server. If the profile folder is called `server`, the file has to be named `server.vars.Arma3Profile`.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the file</b><br>
   Upload the file into the profile folder and overwrite the existing file:

   ```
   /serverprofile/home/<profileName>/
   ```

5. <b>Provide the mission</b><br>
   Make sure the server runs the same mission the savegame was created with. Missions are stored as `.pbo` files in the `/mpmissions` folder.

6. <b>Start the server</b><br>
   Start your server and load the savegame through the mission's own load function – with most persistent missions this happens right at mission start through a menu.

:::: warning Savegames from singleplayer
Singleplayer savegames and dedicated server savegames are stored inside the same file under different variable names. A singleplayer savegame may therefore not be recognized as loadable on the server.
::::

:::: warning Caution
How a savegame is loaded is defined by the mission itself. When in doubt, check the documentation of the mission you use – Arma 3 has no unified load function.
::::

## Reset the savegame

If you want to start over completely, delete the file `<profileName>.vars.Arma3Profile` while the server is stopped. There is no other way to reset the progress of a persistent mission.

:::: danger Important
Download the file before deleting it – see [Download Savegame](download-savegame.md). Once deleted, the progress cannot be restored.
::::
