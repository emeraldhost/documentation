---
description: Add a savegame to an Icarus server
---

# How to Add a Savegame to Your Icarus Server

You can transfer a local prospect to your server to continue playing with an existing save.

## Find the local savegame

1. <b>Open savegame folder</b><br>
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```
   %LOCALAPPDATA%\ICARUS\Saved\PlayerData
   ```

2. <b>Navigate to the Prospects folder</b><br>
   Open your SteamID64 folder and navigate into the `Prospects` folder.

3. <b>Identify the prospect file</b><br>
   Your save is a file named `<YourProspect>.json`. Note the exact file name.

## Upload and apply the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the prospect</b><br>
   Upload the `<YourProspect>.json` file to the following directory:

   ```
   /ICARUS/Saved/PlayerData/DedicatedServer/Prospects/
   ```

4. <b>Adjust ServerSettings.ini</b><br>
   Open the following file:

   ```
   /ICARUS/Saved/Config/WindowsServer/ServerSettings.ini
   ```

   Set the value of `LoadProspect` to the file name of your prospect (without `.json`):

   ```
   LoadProspect=<YourProspect>
   ```

5. <b>Start the server</b><br>
   Start your server via the dashboard.

:::: warning Warning
Start the server once and create a new prospect from the client before uploading your own save for the first time. Only then will the required directory structure be generated on the server.
::::

:::: warning Warning
Make sure the version of your savegame matches the server version. Saves from older versions may cause errors or incompatible data.
::::
