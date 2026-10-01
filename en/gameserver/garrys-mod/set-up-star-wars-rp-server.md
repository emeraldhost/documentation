---
description: Set up a Star Wars RP server (SWRP) based on DarkRP in Garry's Mod
---

# How to Set Up a Star Wars RP Server in Garry's Mod

Star Wars RP (SWRP) is not a built-in game mode you can simply switch on. An SWRP server is a **DarkRP** server with Star Wars content such as maps, player models and weapons, plus its own jobs, for example clone troopers. DarkRP is usually renamed through a derived gamemode for this, e.g. to `starwarsrp`. Complete, ready-made SWRP packages do exist, but they are usually sold by third parties. In this guide you build the foundation yourself from free content.

:::: warning Warning
Create a [backup](create-backup.md) of your server before the conversion and stop it before uploading files.
::::

## Install DarkRP

DarkRP is the foundation of your SWRP server. You need the gamemode itself and the **darkrpmodification** addon, where you will create your jobs later. You can find a detailed guide under [Install DarkRP](install-darkrp.md).

1. <b>Add DarkRP</b><br>
   Add [DarkRP](https://steamcommunity.com/sharedfiles/filedetails/?id=248302805) (Workshop ID `248302805`) to your server's Workshop collection. You can find out how to set up a collection under [Add mods](add-mods.md).

2. <b>Download darkrpmodification</b><br>
   Download [darkrpmodification](https://github.com/FPtje/darkrpmodification) from GitHub and extract the archive.

3. <b>Upload darkrpmodification</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the folder to `/garrysmod/addons/`. The extracted folder is named e.g. `darkrpmodification-master`. Rename it to `darkrpmodification` so that the `lua` folder sits directly inside it:

   ```
   /garrysmod/addons/darkrpmodification/lua/
   ```

:::: danger Important
Never edit the files of DarkRP itself. All customizations belong in the darkrpmodification addon, otherwise they are lost with the next DarkRP update.
::::

## Create your own gamemode name (optional)

You can also run your server directly with the `darkrp` gamemode. The only difference is the name your gamemode is displayed with. If you would rather use e.g. `starwarsrp`, use DarkRP's official derived gamemode **DerivedRP** for this.

1. <b>Download DerivedRP</b><br>
   Download the file `derivedrp.zip` from the [DerivedRP release on GitHub](https://github.com/FPtje/DarkRP/releases/tag/derived) and extract it.

2. <b>Upload the folder</b><br>
   Upload the `derivedrp` folder via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /garrysmod/gamemodes/
   ```

3. <b>Rename the folder</b><br>
   Rename the `derivedrp` folder to `starwarsrp`.

4. <b>Rename the file</b><br>
   Rename the file `derivedrp.txt` inside the folder to `starwarsrp.txt`.

5. <b>Edit the first line</b><br>
   Open the file `starwarsrp.txt`. Replace the `"darkrp"` entry in the first line with the new folder name `"starwarsrp"` and adjust the title if you like. The `"base"` entry stays unchanged at `"darkrp"`. The start of the file then looks like this:

   ```
   "starwarsrp"
   {
       "base"  "darkrp"
       "title"  "StarWarsRP"
   ```

   :::: danger Important
   The folder name, the file name and the first line of the `.txt` file must match exactly and be lowercase. The server runs on Linux, where `StarWarsRP` and `starwarsrp` are different names.
   ::::

6. <b>Change the display name</b><br>
   Optionally you can change the value of `GM.Name` in the files `/garrysmod/gamemodes/starwarsrp/gamemode/init.lua` and `/garrysmod/gamemodes/starwarsrp/gamemode/cl_init.lua`:

   ```lua
   GM.Name = "StarWarsRP"
   ```

:::: warning Warning
DarkRP must remain installed. The derived gamemode is based on `darkrp` and loads it in the background. Without DarkRP, `starwarsrp` does not start. If `starwarsrp` does not load even though DarkRP is in your collection, upload DarkRP from GitHub via SFTP to `/garrysmod/gamemodes/darkrp/`, as described under [Install DarkRP](install-darkrp.md).
::::

## Add Star Wars content

Add maps, player models and weapons to your Workshop collection. To do this, search the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/) for terms such as "SWRP", "Clone Trooper" or "Star Wars". Examples of free content:

| Workshop ID | Content | Size (approx.) |
| ----------- | ------- | -------------- |
| `1257128301` | SW Map : Venator (map) | 296 MB |
| `111412589` | Star Wars Lightsabers (weapons) | 39 MB |
| `183549197` | Star Wars Weapons (weapons) | 25 MB |
| `127992073` | Star Wars Clonetroopers P1 (player models) | 22 MB |
| `127992588` | Star Wars Clonetroopers P2 (player models) | 30 MB |

:::: warning Warning
Star Wars content is often very large. Single maps take up several hundred MB, and extensive weapon packs additionally require further addons as a base. Every player has to download all enforced content when joining for the first time. Keep your collection lean and only include what you actually use.
::::

:::: info Note
Many player model packs are several years old. Test new content on your server before using it permanently, so that no missing textures or ERROR models appear.
::::

## Force players to download the content

Players only automatically download the current map from your collection and the gamemode, provided it comes from the collection itself (e.g. `darkrp`). You have to enforce all models and weapons, otherwise players see ERROR models and missing textures.

1. <b>Open the file</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md):

   ```
   /garrysmod/lua/autorun/server/workshop.lua
   ```

2. <b>Add the content</b><br>
   Replace the empty `resource.AddWorkshop( "" )` line and add one line per addon with the respective **addon ID** – not the collection ID:

   ```lua
   resource.AddWorkshop( "111412589" )
   resource.AddWorkshop( "183549197" )
   resource.AddWorkshop( "127992073" )
   resource.AddWorkshop( "127992588" )
   ```

   :::: info Note
   If you use the derived gamemode `starwarsrp`, also add DarkRP with `resource.AddWorkshop( "248302805" )`. Only a gamemode that has its own Workshop ID set is transferred automatically, and that is not the case for DerivedRP.
   ::::

3. <b>Save the file</b><br>
   Save the file.

You can find more on this under [Add mods](add-mods.md).

## Set the gamemode and map

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter the gamemode</b><br>
   Enter `starwarsrp` in the **Gamemode** field. If you did not create your own gamemode name, enter `darkrp`.

4. <b>Enter the map</b><br>
   Enter the file name of your Star Wars map without the `.bsp` extension in the **Map** field. The file name is not the title in the Workshop. For the Venator map from the table above, the Workshop description names e.g. the map `rp_venator_extensive`. Check the exact file name after the download, as it may contain a version suffix. You can find out how to determine it under [Change map](change-map.md).

5. <b>Restart the server</b><br>
   Save the setting and restart your server. On startup the server downloads all content of your collection. Due to the size of Star Wars content, the first start can take considerably longer.

## Create clone trooper jobs

You create jobs in the darkrpmodification addon. They then appear in the in-game F4 menu.

1. <b>Create a category</b><br>
   Open the file `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/categories.lua` via [SFTP](../establish-sftp-connection.md) and add a category below the line "Add new categories under the next line!":

   ```lua
   DarkRP.createCategory{
       name = "Clone Army",
       categorises = "jobs",
       startExpanded = true,
       color = Color(200, 200, 200, 255),
   }
   ```

2. <b>Create a job</b><br>
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

3. <b>Restart the server</b><br>
   Save the files and restart your server.

:::: tip Tip
If new players should spawn directly as clone troopers, change the line `GAMEMODE.DefaultTeam = TEAM_CITIZEN` further down in `jobs.lua` (below your jobs) to `GAMEMODE.DefaultTeam = TEAM_CLONE`. You can disable default DarkRP jobs such as `hobo` or `gundealer` in `/garrysmod/addons/darkrpmodification/lua/darkrp_config/disabled_defaults.lua` in the `DarkRP.disabledDefaults["jobs"]` section by setting their value to `true`.
::::
