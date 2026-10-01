---
description: Set up FastDL for custom content on a Garry's Mod server
---

# How to Set Up FastDL on Your Garry's Mod Server

For players to see your server's custom content such as models, textures, sounds or maps, they have to download it. With **FastDL** players download these files over HTTP from your webspace when they join. To set it up, you enter the address of the webspace in the `server.cfg` and use Lua to define which files should be downloaded.

:::: tip Tip
The easier and faster way is the **Steam Workshop**. If your content is on the Workshop, add it to your collection and have it distributed to players with `resource.AddWorkshop`. You can find out how in [Add mods](add-mods.md). You only need FastDL for content that is not available on the Workshop.
::::

## Requirements for FastDL

For FastDL you need your **own web server or webspace** that is publicly reachable via `http://` or `https://`. Your Garry's Mod server itself is not a web server and cannot deliver the files over HTTP.

:::: info Note
`.lua` files do not count as content. They are transferred to players through a separate process and do not need FastDL. Only place files such as models, materials, sounds and maps on the webspace.
::::

## Provide the content on the game server

The files players should download also have to be on your game server. If a file is missing on the server, it is not added to the download list.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload the content</b><br>
   Upload your content as an addon into its own subfolder, for example:

   ```
   /garrysmod/addons/myserver-content/
   ```

   It contains subfolders such as `materials/`, `models/` or `sound/`. Custom maps go into `/garrysmod/maps/` as a `.bsp` file.

   :::: info Note
   Keep your server stopped until you have completed all steps of this guide. It is started at the end in the section [Mark files for download](#mark-files-for-download).
   ::::

## Upload the files to the webspace

Players request every file from your webspace address using **the same path** it has relative to the `garrysmod/` folder. The folder structure on the webspace therefore has to match the structure in the game exactly.

1. <b>Create the folder structure</b><br>
   In the root directory of your webspace, create the same folders your content uses, for example `maps/`, `materials/`, `models/` and `sound/`.

2. <b>Upload the files</b><br>
   Upload the files into the matching folders. Leave out the addon folder itself: `/garrysmod/addons/myserver-content/materials/myserver/logo.vmt` on the game server becomes `materials/myserver/logo.vmt` on the webspace.

   :::: tip Example
   If your webspace is reachable at `https://fastdl.example.com`, a player fetches the file `materials/myserver/logo.vmt` from this address:

   ```
   https://fastdl.example.com/materials/myserver/logo.vmt
   ```
   ::::

3. <b>Optionally compress the files</b><br>
   You can additionally compress the files in the **bzip2** format to make the downloads smaller. The compressed file gets the extension `.bz2` appended to the full file name, for example `logo.vmt.bz2`. Players request the `.bz2` file first. If there is no compressed version, they download the uncompressed file.

:::: danger Important
The server runs on Linux and file paths there are **case-sensitive**. To be safe, make sure folder and file names are spelled exactly the same on the game server, on the webspace and in your Lua file.
::::

## Enter the download URL

1. <b>Open the file</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md):

   ```
   /garrysmod/cfg/server.cfg
   ```

2. <b>Enter the URL</b><br>
   The file already contains the line `sv_downloadurl ""`. Enter the address of your webspace between the quotation marks:

   ```
   sv_downloadurl "https://fastdl.example.com"
   ```

   The address has to point to the directory that contains the `materials/`, `models/` etc. folders.

3. <b>Disable downloads from the game server</b><br>
   Add the following line below the line `// Add custom lines under here`:

   ```
   sv_allowdownload 0
   ```

   This way players do not download any files directly from the game server. You can find out why this matters in [Download directly from the game server](#download-directly-from-the-game-server).

4. <b>Save the file</b><br>
   Save the file.

## Mark files for download

For players to download the files, you have to mark them for download in a server-side Lua file. There are two functions for this:

| Function | Description |
| -------- | ----------- |
| `resource.AddFile` | Marks the file and all related files. For a `.vmt` file the `.vtf` file with the same name is added automatically, for a `.mdl` file the `.vvd`, `.ani`, `.dx80.vtx`, `.dx90.vtx` and `.phy` files with the same name are added automatically. |
| `resource.AddSingleFile` | Marks only exactly the specified file. |

1. <b>Create a Lua file</b><br>
   Create a new file via [SFTP](../establish-sftp-connection.md), for example:

   ```
   /garrysmod/lua/autorun/server/fastdl.lua
   ```

2. <b>Add the files</b><br>
   Add one line per file. The path is relative to the `garrysmod/` folder – without `addons/<addonname>/` in front and without the `.bz2` extension:

   ```lua
   resource.AddFile( "materials/myserver/logo.vmt" )
   resource.AddFile( "models/myserver/chair.mdl" )
   resource.AddFile( "sound/myserver/music.wav" )
   resource.AddFile( "maps/rp_examplecity.bsp" )
   ```

   :::: warning Warning
   The folder for sounds is called `sound/` – without an "s" at the end.
   ::::

3. <b>Start the server</b><br>
   Save the file and start your server. The next time they join, players download the marked files from your webspace.

:::: info Note
With `resource.AddFile` the related files are requested as well. For models, for example, upload all related files to the webspace, not just the `.mdl` file.
::::

## Limitations of FastDL

:::: warning Warning
FastDL does not check the content of the files. If you change a file on the server, players who have already downloaded it will **not** download the new version again. To make sure players get the new version, you can for example give changed files a new name and update the references to them.
::::

:::: info Note
A maximum of **8192 files** can be marked for download in total. This limit applies to all `resource.Add*` functions combined. If you need more, upload your content to the Steam Workshop and distribute it with `resource.AddWorkshop`.
::::

:::: info Note
FastDL downloads file by file. With a large number of small files, joining can therefore take longer. Players can also choose in their game settings which file types they download from servers.
::::

## Download directly from the game server

With the ConVar `sv_allowdownload`, players can also download files directly from the game server. You should not use this method: at around 64 KB/s it is very slow.

:::: danger Important
If `sv_allowdownload` is enabled, players with modified clients can spam file requests and severely slow down your server. Keep `sv_allowdownload 0` in your `server.cfg` and use FastDL or the Steam Workshop instead.
::::
