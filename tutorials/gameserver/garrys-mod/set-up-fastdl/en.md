---
slug: "set-up-fastdl"
language: "en"
title: "How to Set Up FastDL on Your Garry's Mod Server"
description: "Set up FastDL for custom content on a Garry's Mod server"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Up FastDL"
sort: 14
related: ["gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/change-map", "gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/set-up-loading-screen"]
---
For players to see your server's custom content such as models, textures, sounds or maps, they have to download it. With **FastDL** players download these files over HTTP from your webspace when they join. To set it up, you enter the address of the webspace in the `server.cfg` and use Lua to define which files should be downloaded.

> [!TIP]
> The easier and faster way is the **Steam Workshop**. If your content is on the Workshop, add it to your collection and have it distributed to players with `resource.AddWorkshop`. You can find out how in [Add mods](/tutorials/gameserver/garrys-mod/add-mods). You only need FastDL for content that is not available on the Workshop.

## Requirements for FastDL

For FastDL you need your **own web server or webspace** that is publicly reachable via `http://` or `https://`. Your Garry's Mod server itself is not a web server and cannot deliver the files over HTTP.

> [!NOTE]
> `.lua` files do not count as content. They are transferred to players through a separate process and do not need FastDL. Only place files such as models, materials, sounds and maps on the webspace.

## Provide the content on the game server

The files players should download also have to be on your game server. If a file is missing on the server, it is not added to the download list.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the content**\
   Upload your content as an addon into its own subfolder, for example:

   ```text
   /garrysmod/addons/myserver-content/
   ```

   It contains subfolders such as `materials/`, `models/` or `sound/`. Custom maps go into `/garrysmod/maps/` as a `.bsp` file.

   > [!NOTE]
   > Keep your server stopped until you have completed all steps of this guide. It is started at the end in the section [Mark files for download](#mark-files-for-download).

## Upload the files to the webspace

Players request every file from your webspace address using **the same path** it has relative to the `garrysmod/` folder. The folder structure on the webspace therefore has to match the structure in the game exactly.

1. **Create the folder structure**\
   In the root directory of your webspace, create the same folders your content uses, for example `maps/`, `materials/`, `models/` and `sound/`.

2. **Upload the files**\
   Upload the files into the matching folders. Leave out the addon folder itself: `/garrysmod/addons/myserver-content/materials/myserver/logo.vmt` on the game server becomes `materials/myserver/logo.vmt` on the webspace.

   > [!TIP]
   > **Example**
   >
   > If your webspace is reachable at `https://fastdl.example.com`, a player fetches the file `materials/myserver/logo.vmt` from this address:
   >
   > ```text
   > https://fastdl.example.com/materials/myserver/logo.vmt
   > ```

3. **Optionally compress the files**\
   You can additionally compress the files in the **bzip2** format to make the downloads smaller. The compressed file gets the extension `.bz2` appended to the full file name, for example `logo.vmt.bz2`. Players request the `.bz2` file first. If there is no compressed version, they download the uncompressed file.

> [!IMPORTANT]
> The server runs on Linux and file paths there are **case-sensitive**. To be safe, make sure folder and file names are spelled exactly the same on the game server, on the webspace and in your Lua file.

## Enter the download URL

1. **Open the file**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /garrysmod/cfg/server.cfg
   ```

2. **Enter the URL**\
   The file already contains the line `sv_downloadurl ""`. Enter the address of your webspace between the quotation marks:

   ```text
   sv_downloadurl "https://fastdl.example.com"
   ```

   The address has to point to the directory that contains the `materials/`, `models/` etc. folders.

3. **Disable downloads from the game server**\
   Add the following line below the line `// Add custom lines under here`:

   ```text
   sv_allowdownload 0
   ```

   This way players do not download any files directly from the game server. You can find out why this matters in [Download directly from the game server](#download-directly-from-the-game-server).

4. **Save the file**\
   Save the file.

## Mark files for download

For players to download the files, you have to mark them for download in a server-side Lua file. There are two functions for this:

| Function | Description |
| -------- | ----------- |
| `resource.AddFile` | Marks the file and all related files. For a `.vmt` file the `.vtf` file with the same name is added automatically, for a `.mdl` file the `.vvd`, `.ani`, `.dx80.vtx`, `.dx90.vtx` and `.phy` files with the same name are added automatically. |
| `resource.AddSingleFile` | Marks only exactly the specified file. |

1. **Create a Lua file**\
   Create a new file via [SFTP](/tutorials/gameserver/establish-sftp-connection), for example:

   ```text
   /garrysmod/lua/autorun/server/fastdl.lua
   ```

2. **Add the files**\
   Add one line per file. The path is relative to the `garrysmod/` folder – without `addons/<addonname>/` in front and without the `.bz2` extension:

   ```lua
   resource.AddFile( "materials/myserver/logo.vmt" )
   resource.AddFile( "models/myserver/chair.mdl" )
   resource.AddFile( "sound/myserver/music.wav" )
   resource.AddFile( "maps/rp_examplecity.bsp" )
   ```

   > [!WARNING]
   > The folder for sounds is called `sound/` – without an "s" at the end.

3. **Start the server**\
   Save the file and start your server. The next time they join, players download the marked files from your webspace.

> [!NOTE]
> With `resource.AddFile` the related files are requested as well. For models, for example, upload all related files to the webspace, not just the `.mdl` file.

## Limitations of FastDL

> [!WARNING]
> FastDL does not check the content of the files. If you change a file on the server, players who have already downloaded it will **not** download the new version again. To make sure players get the new version, you can for example give changed files a new name and update the references to them.

> [!NOTE]
> A maximum of **8192 files** can be marked for download in total. This limit applies to all `resource.Add*` functions combined. If you need more, upload your content to the Steam Workshop and distribute it with `resource.AddWorkshop`.

> [!NOTE]
> FastDL downloads file by file. With a large number of small files, joining can therefore take longer. Players can also choose in their game settings which file types they download from servers.

## Download directly from the game server

With the ConVar `sv_allowdownload`, players can also download files directly from the game server. You should not use this method: at around 64 KB/s it is very slow.

> [!IMPORTANT]
> If `sv_allowdownload` is enabled, players with modified clients can spam file requests and severely slow down your server. Keep `sv_allowdownload 0` in your `server.cfg` and use FastDL or the Steam Workshop instead.
