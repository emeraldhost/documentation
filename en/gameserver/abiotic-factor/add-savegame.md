---
description: Add a savegame to an Abiotic Factor server
---

# How to Add a Savegame to Your Abiotic Factor Server

In Abiotic Factor a savegame is always a **complete world folder**, not a single file. You upload that folder with all of its contents to your server and then make sure the server actually loads it.

:::: tip Tip
Create a [backup](create-backup.md) of your current server save before uploading, in case you want to switch back later.
::::

:::: info Why do the paths look like Windows paths?
Abiotic Factor only provides a Windows server program, which runs on your Linux server through a compatibility layer. That is why the folders on the server are named exactly as they are on Windows – for example `Saved/Config/WindowsServer`. This is intended.
::::

## Find your local savegame

1. <b>Open the savegame folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %LocalAppData%\AbioticFactor\Saved\SaveGames
   ```

2. <b>Choose the right subfolder</b><br>
   Open the folder whose name is a long sequence of numbers – that is your [SteamID64](../steamid64-find-out.md). Inside it, switch to the `Worlds` folder.

3. <b>Select the world folder</b><br>
   Inside you find one folder per world. Choose the folder of the world you want to transfer – you need the **complete folder** including its contents.

:::: danger Console savegames cannot be transferred
Savegames from PlayStation 5, Xbox and the Windows Game Pass version **cannot** be moved to a dedicated server. The process described here only works with savegames from the PC version on Steam.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Change to the following directory:

   ```
   /AbioticFactor/Saved/SaveGames/Server/Worlds/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.
   ::::

4. <b>Note the existing world folder</b><br>
   Check the name of the world folder your server currently uses. By default it is called `Cascade`.

5. <b>Upload the world folder</b><br>
   Upload your complete world folder with all of its files into this directory.

6. <b>Match the folder name</b><br>
   Rename the uploaded folder to exactly the name your server's world folder has (by default `Cascade`). Rename or delete the previous folder beforehand so there is no name collision.

   :::: tip Alternative via the world name
   Instead of renaming the folder you can also tell the server which folder to load. The start parameter for that is `-WorldSaveName=<foldername>`. If your dashboard offers a field for the world name, simply enter the name of your uploaded folder there.
   ::::

7. <b>Start the server</b><br>
   Start your server. On startup it now loads your uploaded savegame.

:::: warning Caution
The folder name and the configured world name have to match exactly – including upper and lower case. If they do not match, the server creates a **new, empty world** on startup instead of loading your savegame.
::::

:::: info Gameplay settings
The difficulty and sandbox settings are stored in the `SandboxSettings.ini` file. On a dedicated server it sits inside the world folder itself:

```
/AbioticFactor/Saved/SaveGames/Server/Worlds/Cascade/SandboxSettings.ini
```

So it is transferred automatically when you upload the complete world folder. The start parameter `-SandboxIniPath=` can move the file elsewhere – if you cannot find it in the world folder, also check directly under `/AbioticFactor/Saved/`.
::::
