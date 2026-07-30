---
description: Add a savegame to an Avorion server
---

# How to Add a Savegame to Your Avorion Server

In Avorion a savegame is always a complete **galaxy** – an entire folder, not a single file. The name of that folder is at the same time the galaxy name your server loads on startup. Both have to match, otherwise your server starts with a new, empty galaxy.

:::: tip Tip
Create a [backup](create-backup.md) of your current galaxy before uploading, in case you want to switch back later.
::::

## What belongs to the galaxy?

Besides the actual save data, the galaxy folder also holds the server-side settings:

| File | Content |
|------|---------|
| `server.ini` | Server settings of the galaxy |
| `admin.xml` | List of administrators |
| `modconfig.lua` | Configuration of the mods |

Always upload the folder **completely** – individual files taken from it do not make a usable savegame.

## Find your local galaxy

1. <b>Open the galaxy folder</b><br>
   On your PC press `Windows key + R`, enter the following path and confirm with Enter:

   ```
   %AppData%\Avorion\galaxies
   ```

   On Linux the galaxies are located in the folder `~/.avorion/galaxies`.

2. <b>Select the galaxy</b><br>
   Inside you will find one folder per galaxy. Choose the folder of the galaxy you want to transfer – you need the **complete folder** including its contents.

## Upload the galaxy

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open the data directory</b><br>
   Navigate to the directory where your server stores its galaxies:

   ```
   /galaxy/
   ```

   You can recognise it by the fact that it already contains a folder named after your current galaxy – with the files `server.ini`, `admin.xml` and `modconfig.lua` inside.

   :::: info Note
   Which directory your server uses is defined by the startup parameter `--datapath`; the galaxy folder sits inside it under its own name (`<data directory>/<galaxy name>`). If no galaxy folder exists at all yet, start the server once – the folder structure and the `server.ini` are only created on the first start. Stop it again afterwards.
   ::::

4. <b>Upload the galaxy folder</b><br>
   Upload the complete folder of your galaxy with all its files into this directory.

   :::: warning Warning
   Use a folder name without spaces and special characters and keep it short. It is best to replace spaces with underscores, for example `My_Galaxy` – otherwise spaces in the folder name cause problems on startup.
   ::::

5. <b>Enter the galaxy name</b><br>
   Open the **dashboard**, switch to the **settings** and enter the folder name of your uploaded galaxy in the field for the galaxy name (**Galaxy Name**) – exactly as it is written, including capitalisation.

6. <b>Start the server</b><br>
   Save all changes and start your server. On startup your uploaded galaxy is now loaded.

:::: danger Important
The folder name and the configured galaxy name have to match **exactly**. If they do not, your server simply creates a new, empty galaxy under the configured name on startup – your uploaded galaxy is then left untouched and is not loaded.
::::

:::: warning Warning
Only change server settings while the server is stopped. Values your server receives as startup parameters – such as the galaxy name – are written into the `server.ini` on startup and overwrite differing entries there.
::::

:::: tip Tip
If you want to save your galaxy first or move it to another server, you can find the other direction under [Download savegame](download-savegame.md).
::::
