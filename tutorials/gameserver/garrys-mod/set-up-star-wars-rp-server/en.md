---
slug: "set-up-star-wars-rp-server"
language: "en"
title: "How to Set Up a Star Wars RP Server in Garry's Mod"
description: "Set up a Star Wars RP server (SWRP) based on DarkRP in Garry's Mod"
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
short_title: "Set Up Star Wars RP Server"
sort: 9
related: ["gameserver/garrys-mod/install-darkrp", "gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/change-map", "gameserver/garrys-mod/add-mods"]
---
Star Wars RP (SWRP) is not a built-in game mode you can simply switch on. An SWRP server is a **DarkRP** server with Star Wars content such as maps, player models and weapons, plus its own jobs, for example clone troopers. DarkRP is usually renamed through a derived gamemode for this, e.g. to `starwarsrp`. Complete, ready-made SWRP packages do exist, but they are usually sold by third parties. In this guide you build the foundation yourself from free content.

> [!WARNING]
> Create a [backup](/tutorials/gameserver/garrys-mod/create-backup) of your server before the conversion and stop it before uploading files.

## Install DarkRP

DarkRP is the foundation of your SWRP server. You need the gamemode itself and the **darkrpmodification** addon, where you will create your jobs later. You can find a detailed guide under [Install DarkRP](/tutorials/gameserver/garrys-mod/install-darkrp).

1. **Add DarkRP**\
   Add [DarkRP](https://steamcommunity.com/sharedfiles/filedetails/?id=248302805) (Workshop ID `248302805`) to your server's Workshop collection. You can find out how to set up a collection under [Add mods](/tutorials/gameserver/garrys-mod/add-mods).

2. **Download darkrpmodification**\
   Download [darkrpmodification](https://github.com/FPtje/darkrpmodification) from GitHub and extract the archive.

3. **Upload darkrpmodification**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and upload the folder to `/garrysmod/addons/`. The extracted folder is named e.g. `darkrpmodification-master`. Rename it to `darkrpmodification` so that the `lua` folder sits directly inside it:

   ```text
   /garrysmod/addons/darkrpmodification/lua/
   ```

> [!IMPORTANT]
> Never edit the files of DarkRP itself. All customizations belong in the darkrpmodification addon, otherwise they are lost with the next DarkRP update.

## Create your own gamemode name (optional)

You can also run your server directly with the `darkrp` gamemode. The only difference is the name your gamemode is displayed with. If you would rather use e.g. `starwarsrp`, use DarkRP's official derived gamemode **DerivedRP** for this.

1. **Download DerivedRP**\
   Download the file `derivedrp.zip` from the [DerivedRP release on GitHub](https://github.com/FPtje/DarkRP/releases/tag/derived) and extract it.

2. **Upload the folder**\
   Upload the `derivedrp` folder via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /garrysmod/gamemodes/
   ```

3. **Rename the folder**\
   Rename the `derivedrp` folder to `starwarsrp`.

4. **Rename the file**\
   Rename the file `derivedrp.txt` inside the folder to `starwarsrp.txt`.

5. **Edit the first line**\
   Open the file `starwarsrp.txt`. Replace the `"darkrp"` entry in the first line with the new folder name `"starwarsrp"` and adjust the title if you like. The `"base"` entry stays unchanged at `"darkrp"`. The start of the file then looks like this:

   ```text
   "starwarsrp"
   {
       "base"  "darkrp"
       "title"  "StarWarsRP"
   ```

   > [!IMPORTANT]
   > The folder name, the file name and the first line of the `.txt` file must match exactly and be lowercase. The server runs on Linux, where `StarWarsRP` and `starwarsrp` are different names.

6. **Change the display name**\
   Optionally you can change the value of `GM.Name` in the files `/garrysmod/gamemodes/starwarsrp/gamemode/init.lua` and `/garrysmod/gamemodes/starwarsrp/gamemode/cl_init.lua`:

   ```lua
   GM.Name = "StarWarsRP"
   ```

> [!WARNING]
> DarkRP must remain installed. The derived gamemode is based on `darkrp` and loads it in the background. Without DarkRP, `starwarsrp` does not start. If `starwarsrp` does not load even though DarkRP is in your collection, upload DarkRP from GitHub via SFTP to `/garrysmod/gamemodes/darkrp/`, as described under [Install DarkRP](/tutorials/gameserver/garrys-mod/install-darkrp).

## Add Star Wars content

Add maps, player models and weapons to your Workshop collection. To do this, search the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/) for terms such as "SWRP", "Clone Trooper" or "Star Wars". Examples of free content:

| Workshop ID | Content | Size (approx.) |
| ----------- | ------- | -------------- |
| `1257128301` | SW Map : Venator (map) | 296 MB |
| `111412589` | Star Wars Lightsabers (weapons) | 39 MB |
| `183549197` | Star Wars Weapons (weapons) | 25 MB |
| `127992073` | Star Wars Clonetroopers P1 (player models) | 22 MB |
| `127992588` | Star Wars Clonetroopers P2 (player models) | 30 MB |

> [!WARNING]
> Star Wars content is often very large. Single maps take up several hundred MB, and extensive weapon packs additionally require further addons as a base. Every player has to download all enforced content when joining for the first time. Keep your collection lean and only include what you actually use.

> [!NOTE]
> Many player model packs are several years old. Test new content on your server before using it permanently, so that no missing textures or ERROR models appear.

## Force players to download the content

Players only automatically download the current map from your collection and the gamemode, provided it comes from the collection itself (e.g. `darkrp`). You have to enforce all models and weapons, otherwise players see ERROR models and missing textures.

1. **Open the file**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /garrysmod/lua/autorun/server/workshop.lua
   ```

2. **Add the content**\
   Replace the empty `resource.AddWorkshop( "" )` line and add one line per addon with the respective **addon ID** – not the collection ID:

   ```lua
   resource.AddWorkshop( "111412589" )
   resource.AddWorkshop( "183549197" )
   resource.AddWorkshop( "127992073" )
   resource.AddWorkshop( "127992588" )
   ```

   > [!NOTE]
   > If you use the derived gamemode `starwarsrp`, also add DarkRP with `resource.AddWorkshop( "248302805" )`. Only a gamemode that has its own Workshop ID set is transferred automatically, and that is not the case for DerivedRP.

3. **Save the file**\
   Save the file.

You can find more on this under [Add mods](/tutorials/gameserver/garrys-mod/add-mods).

## Set the gamemode and map

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open the settings**\
   Navigate to the **Settings**.

3. **Enter the gamemode**\
   Enter `starwarsrp` in the **Gamemode** field. If you did not create your own gamemode name, enter `darkrp`.

4. **Enter the map**\
   Enter the file name of your Star Wars map without the `.bsp` extension in the **Map** field. The file name is not the title in the Workshop. For the Venator map from the table above, the Workshop description names e.g. the map `rp_venator_extensive`. Check the exact file name after the download, as it may contain a version suffix. You can find out how to determine it under [Change map](/tutorials/gameserver/garrys-mod/change-map).

5. **Restart the server**\
   Save the setting and restart your server. On startup the server downloads all content of your collection. Due to the size of Star Wars content, the first start can take considerably longer.

## Create clone trooper jobs

You create jobs in the darkrpmodification addon. They then appear in the in-game F4 menu.

1. **Create a category**\
   Open the file `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/categories.lua` via [SFTP](/tutorials/gameserver/establish-sftp-connection) and add a category below the line "Add new categories under the next line!":

   ```lua
   DarkRP.createCategory{
       name = "Clone Army",
       categorises = "jobs",
       startExpanded = true,
       color = Color(200, 200, 200, 255),
   }
   ```

2. **Create a job**\
   Open the file `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/jobs.lua` and add your job below the line "Add your custom jobs under the following line":

   ```lua
   TEAM_CLONE = DarkRP.createJob("Clone Trooper", {
       color = Color(200, 200, 200, 255),
       model = {"models/path/to/your/model.mdl"},
       description = [[A clone trooper of the Grand Army of the Republic.]],
       weapons = {},
       command = "clonetrooper",
       max = 0,
       salary = 50,
       admin = 0,
       vote = false,
       hasLicense = false,
       candemote = false,
       category = "Clone Army",
   })
   ```

   Replace `models/path/to/your/model.mdl` with the path of a player model from your model addon. Under `weapons` you enter the weapon classes of your weapon addons. `command` must be unique for every job, and `max = 0` means there is no limit on the number of players in the job.

3. **Restart the server**\
   Save the files and restart your server.

> [!TIP]
> If new players should spawn directly as clone troopers, change the line `GAMEMODE.DefaultTeam = TEAM_CITIZEN` further down in `jobs.lua` (below your jobs) to `GAMEMODE.DefaultTeam = TEAM_CLONE`. You can disable default DarkRP jobs such as `hobo` or `gundealer` in `/garrysmod/addons/darkrpmodification/lua/darkrp_config/disabled_defaults.lua` in the `DarkRP.disabledDefaults["jobs"]` section by setting their value to `true`.
