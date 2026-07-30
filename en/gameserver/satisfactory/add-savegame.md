---
description: Add a savegame to a Satisfactory server
---

# How to Add a Savegame to Your Satisfactory Server

In Satisfactory a save is a single file with the extension `.sav`. You do not have to enter a world name in any configuration file – which save is loaded is selected in the game via the **Server Manager**.

:::: info Note
All steps in the Server Manager require admin rights. To learn how to log in, see [Join Server](join-server.md) and [Add Admin](add-admin.md).
::::

:::: tip Tip
Before uploading, create a [backup](create-backup.md) of your current save or download it: [Download Savegame](download-savegame.md).
::::

## Find your local savegame

1. <b>Open the savegame folder</b><br>
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %LocalAppData%\FactoryGame\Saved\SaveGames
   ```

2. <b>Select the save</b><br>
   Your saves are stored there as `.sav` files – usually inside a subfolder named after your Steam or Epic ID. The file name matches the name of the session in the game.

## Upload the save via the Server Manager

This is the recommended way – you do not need an SFTP connection for it.

1. <b>Open the Server Manager</b><br>
   Start Satisfactory and select **Server Manager** in the main menu. Select your server there.

2. <b>Log in as admin</b><br>
   Switch to any tab other than **Status** and log in with your admin password via **Authenticate**.

3. <b>Open the save games</b><br>
   Switch to the **Manage Saves** tab. It lists all saves that are stored on the server.

4. <b>Upload the save</b><br>
   Choose the option to upload a save game and then select your `.sav` file on your PC. Depending on the size of the save, the transfer can take a moment.

5. <b>Load the save</b><br>
   Select the uploaded save from the list and load it. The server then restarts the world.

6. <b>Join</b><br>
   As soon as the world is loaded, you can join the server – select it in the Server Manager and click **Join Game** in the bottom right. The **Join Game** option in the main menu will not find your dedicated server.

## Upload the save via SFTP

Alternatively you can place the file directly into the save folder of your server.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /.config/Epic/FactoryGame/Saved/SaveGames/server/
   ```

   :::: info Note
   The folder `.config` starts with a dot and is therefore a hidden folder. Enable the display of hidden files in your SFTP client if you cannot see it. If the directory does not exist yet, start your server once so the folder structure is created, then stop it again.
   ::::

4. <b>Upload the save</b><br>
   Upload your `.sav` file into this directory. You can leave existing saves in place – the server handles any number of save files side by side.

5. <b>Start the server</b><br>
   Start your server again.

6. <b>Load the save</b><br>
   Open the Server Manager, log in as admin and load the uploaded save via the **Manage Saves** tab.

:::: warning Warning
Uploading alone is not enough. The server keeps loading the previous save until you have selected and loaded the new one in the Server Manager.
::::

:::: info Transferring a single player save
You can also upload a save from your single player game – it uses the same file format. Work with a copy so your local world stays untouched.
::::

:::: danger Important
Do not delete any file starting with `ServerSettings.` inside the `SaveGames` folder. It stores the server name as well as the admin and server password. If it is removed, the server counts as unclaimed again and has to be set up from scratch.
::::
