---
slug: "install-darkrp"
language: "en"
title: "How to Install DarkRP on Your Garry's Mod Server"
description: "Install and customize DarkRP on a Garry's Mod server"
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
short_title: "Install DarkRP"
sort: 8
related: ["gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/set-up-star-wars-rp-server", "gameserver/garrys-mod/add-admin", "gameserver/garrys-mod/enable-lua-refresh"]
---
DarkRP is a roleplay gamemode for Garry's Mod. A DarkRP server needs two parts: the **DarkRP** gamemode itself and the **darkrpmodification** addon, where you make all your customizations such as jobs or settings. Afterwards you set the gamemode and a matching map in the dashboard.

> [!WARNING]
> Create a [backup](/tutorials/gameserver/garrys-mod/create-backup) of your server before the installation and stop it before uploading files.

## Install DarkRP via the Workshop

The easiest way is the official Workshop version of DarkRP. The server downloads it automatically on startup and keeps it up to date.

1. **Add DarkRP to the collection**\
   Add [DarkRP](https://steamcommunity.com/sharedfiles/filedetails/?id=248302805) (Workshop ID `248302805`) to the Workshop collection your server loads. You can find out how to create a collection and enter it in the **Workshop ID** field under [Add Mods](/tutorials/gameserver/garrys-mod/add-mods).

2. **Add a map to the collection**\
   Also add a DarkRP map to your collection, for example [rp_downtown_v4c_v2](https://steamcommunity.com/sharedfiles/filedetails/?id=110286060) (Workshop ID `110286060`).

> [!NOTE]
> If you installed DarkRP via the Workshop, skip the next section and continue directly with [Install darkrpmodification](#install-darkrpmodification).

## Install DarkRP from GitHub

Alternatively, you can download DarkRP from GitHub and upload it yourself. In that case you also have to install updates yourself.

1. **Download DarkRP**\
   Open the [DarkRP page on GitHub](https://github.com/FPtje/DarkRP), click **Code** and then **Download ZIP**. Extract the archive on your PC.

2. **Rename the folder**\
   The archive contains the folder `DarkRP-master`. Rename it to `darkrp` – all lowercase.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the folder**\
   Upload the `darkrp` folder to the following directory:

   ```text
   /garrysmod/gamemodes/
   ```

5. **Check the folder structure**\
   The file `darkrp.txt` must be located directly in the `darkrp` folder:

   ```text
   /garrysmod/gamemodes/darkrp/darkrp.txt
   ```

   > [!WARNING]
   > If the file is located at `/garrysmod/gamemodes/darkrp/DarkRP-master/darkrp.txt` or `/garrysmod/gamemodes/darkrp/darkrp/darkrp.txt` instead, the server cannot find the gamemode. In that case, move the contents of the inner folder one level up.

> [!TIP]
> The file `darkrp.txt` contains the Workshop ID of DarkRP. That is why players automatically download the DarkRP content when they join your server, even if you installed DarkRP from GitHub.

## Install darkrpmodification

The darkrpmodification addon is the place for all your customizations. It does not work without DarkRP.

1. **Download darkrpmodification**\
   Open the [darkrpmodification page on GitHub](https://github.com/FPtje/darkrpmodification), click **Code** and then **Download ZIP**. Extract the archive on your PC.

2. **Rename the addon folder**\
   Rename the extracted folder `darkrpmodification-master` to `darkrpmodification`.

3. **Upload the addon folder**\
   Upload the folder via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /garrysmod/addons/
   ```

   The `lua` folder must then be located directly in the addon folder:

   ```text
   /garrysmod/addons/darkrpmodification/lua/
   ```

> [!IMPORTANT]
> Never edit the files of DarkRP itself, meaning nothing under `/garrysmod/gamemodes/darkrp/`. All customizations belong in the darkrpmodification addon. Changes to DarkRP itself are lost with the next update.

## Set the gamemode and map

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open the settings**\
   Navigate to the **Settings**.

3. **Enter the gamemode**\
   Enter the following value in the **Gamemode** field:

   ```text
   darkrp
   ```

4. **Enter the map**\
   Enter the name of a DarkRP map in the **Map** field, for example:

   ```text
   rp_downtown_v4c_v2
   ```

   If the map is in your server's collection, players download it automatically when they join. You can find out more under [Change Map](/tutorials/gameserver/garrys-mod/change-map).

5. **Restart the server**\
   Save the setting and restart your server.

> [!NOTE]
> According to its Workshop description, the map `rp_downtown_v4c_v2` requires content from Counter-Strike: Source. Since the July 2025 update, Garry's Mod already includes most of this content.

## Customize DarkRP

All files for your customizations are located in the darkrpmodification addon under `/garrysmod/addons/darkrpmodification/lua/`. The most important ones are:

| File | Content |
| ---- | ------- |
| `darkrp_config/settings.lua` | General DarkRP settings, for example starting money and salary |
| `darkrp_config/disabled_defaults.lua` | Disabling of included jobs, modules and content |
| `darkrp_config/mysql.lua` | Connection to a MySQL database |
| `darkrp_customthings/jobs.lua` | Custom jobs and modified default jobs |
| `darkrp_customthings/categories.lua` | Custom categories for the F4 menu |
| `darkrp_customthings/shipments.lua` | Custom weapon shipments |
| `darkrp_customthings/entities.lua` | Custom buyable entities |

> [!TIP]
> Restart your server after every change. If an error shows up afterwards, you can find it in your server's console. Usually a comma, a quotation mark or a bracket is missing.

## Change the settings

1. **Open the file**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/settings.lua
   ```

2. **Adjust the values**\
   Every setting is on its own line with a short description above it. Only change the value after the `=`, for example:

   ```lua
   -- startingmoney - your wallet when you join for the first time.
   GM.Config.startingmoney                 = 500
   -- normalsalary - Sets the starting salary for newly joined players.
   GM.Config.normalsalary                  = 45
   ```

3. **Restart the server**\
   Save the file and restart your server.

> [!NOTE]
> If a setting is missing from the file, for example after a DarkRP update, DarkRP automatically uses its default value.

## Create a custom category

Jobs are shown in categories in the F4 menu. Included are, among others, `Citizens`, `Civil Protection` and `Gangsters`. You create your own category like this:

1. **Open the file**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_customthings/categories.lua
   ```

2. **Add the category**\
   Add your category below the line `Add new categories under the next line!` and the end of the comment `]]`:

   ```lua
   DarkRP.createCategory{
       name = "Services",
       categorises = "jobs",
       startExpanded = true,
       color = Color(0, 107, 0, 255),
       canSee = function(ply) return true end,
       sortOrder = 100,
   }
   ```

   With `categorises` you set what the category applies to. Allowed values are `jobs`, `entities`, `shipments`, `weapons`, `vehicles` and `ammo`.

## Add a custom job

1. **Open the file**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_customthings/jobs.lua
   ```

2. **Add the job**\
   Add your job below the comment `Add your custom jobs under the following line:`, for example:

   ```lua
   TEAM_TAXI = DarkRP.createJob("Taxi Driver", {
       color = Color(20, 150, 20, 255),
       model = {"models/player/Group01/Male_02.mdl"},
       description = [[You take the citizens of the city safely to their destination.]],
       weapons = {},
       command = "taxi",
       max = 2,
       salary = GAMEMODE.Config.normalsalary,
       admin = 0,
       vote = false,
       hasLicense = false,
       category = "Services",
   })
   ```

   > [!WARNING]
   > The category in the `category` field must be created in the `categories.lua` file or be one of the included categories. The value in `command` must be unique for every job.

3. **Restart the server**\
   Save the file and restart your server. The new job appears in the F4 menu.

> [!TIP]
> You can find all fields a job can have in the [DarkRP wiki](https://darkrp.miraheze.org/wiki/DarkRP:CustomJobFields). You can use the included DarkRP jobs in the file [jobrelated.lua](https://github.com/FPtje/DarkRP/blob/master/gamemode/config/jobrelated.lua) as a template.

## Disable or change included content

If you want to change or remove an included job such as the Medic, you disable it first.

1. **Open the file**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/disabled_defaults.lua
   ```

2. **Disable the job**\
   In the `DarkRP.disabledDefaults["jobs"]` block, set the value of the job to `true`:

   ```lua
   ["medic"]     = true,
   ```

   In the same way you disable modules, shipments and other content in the other blocks of the file.

3. **Recreate the job (optional)**\
   If you want to keep using the job in a modified form, copy it from [jobrelated.lua](https://github.com/FPtje/DarkRP/blob/master/gamemode/config/jobrelated.lua) into your `jobs.lua` and adjust it there.

4. **Restart the server**\
   Save the files and restart your server.

## Useful admin commands

DarkRP comes with its own commands for admins. You enter them in the in-game chat. To use them, you have to be registered as `admin` or `superadmin` on your server. You can find out how under [Add Admin](/tutorials/gameserver/garrys-mod/add-admin).

| Command | Description | Required group |
| ------- | ----------- | -------------- |
| `/setmoney <player> <amount>` | Sets a player's money to an amount | `superadmin` |
| `/addmoney <player> <amount>` | Gives a player additional money | `superadmin` |
| `/setlicense <player>` | Gives a player a gun license | `superadmin` |
| `/unsetlicense <player>` | Revokes a player's gun license | `superadmin` |
| `/arrest <player>` | Arrests a player | `admin` |
| `/unarrest <player>` | Releases a player | `admin` |
| `/forcerpname <player> <name>` | Changes a player's RP name | `admin` |
| `/teamban <player> <job> [seconds]` | Bans a player from a job, optionally for a number of seconds | `admin` |
| `/teamunban <player> <job>` | Lifts the ban from a job | `admin` |
| `/setspawn <job>` | Replaces the spawn points of a job with your current position | `admin` |
| `/addspawn <job>` | Adds another spawn point for a job at your position | `admin` |
| `/removespawn <job>` | Removes all custom spawn points of a job on the current map | `admin` |

For `<player>` you can use the player name or part of it, the SteamID or the SteamID64. For `<job>` in the spawn commands, use the command name of the job, meaning the value from `command`, for example `taxi`. With `/teamban` and `/teamunban` you can also use the name of the job. If you leave out the time with `/teamban`, the ban lasts until you lift it with `/teamunban` or the player leaves the server.

> [!TIP]
> **Example**
>
> ```text
> /setmoney Max 10000
> ```

### Reset the money of all players

With the following command you reset the money of **all** players to the starting money (`startingmoney`). You enter it in the console in your server's dashboard. In-game, only a `superadmin` can run it via the game console.

```text
rp_resetallmoney
```

> [!IMPORTANT]
> The command also applies to players who are currently offline and cannot be undone. Create a [backup](/tutorials/gameserver/garrys-mod/create-backup) first.

## Use a MySQL database (optional)

By default, DarkRP stores all data such as the players' money in the SQLite database `/garrysmod/sv.db` on your server. You do not have to set anything up. If you want to use a MySQL database instead, for example to share the data with other applications, you need the MySQLOO module.

1. **Create a database**\
   Create a database in your server's dashboard and note down the connection details. You can find out how under [Create Database](/tutorials/gameserver/create-database).

2. **Check the architecture**\
   Enter the following command in the console in your server's dashboard:

   ```text
   lua_run print(jit.os, jit.arch)
   ```

   The output is, for example, `Linux x86`. `x86` stands for 32-bit, `x64` for 64-bit.

3. **Download MySQLOO**\
   Download the matching file from the [MySQLOO releases on GitHub](https://github.com/FredyH/MySQLOO/releases/latest):

   - for `x86`: `gmsv_mysqloo_linux.dll`
   - for `x64`: `gmsv_mysqloo_linux64.dll`

   > [!NOTE]
   > The file ends in `.dll` on Linux as well. That is correct. The Windows files (`win32` and `win64`) do not work on your server.

4. **Upload the module**\
   Upload the file via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory. If the `bin` folder does not exist yet, create it:

   ```text
   /garrysmod/lua/bin/
   ```

5. **Open the MySQL config**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /garrysmod/addons/darkrpmodification/lua/darkrp_config/mysql.lua
   ```

6. **Enter the connection details**\
   Set `EnableMySQL` to `true` and enter the connection details of your database:

   ```lua
   RP_MySQLConfig.EnableMySQL = true
   RP_MySQLConfig.Host = "db1.cgn1.emeraldhost.de"
   RP_MySQLConfig.Username = "u123_AbCdEf1234"
   RP_MySQLConfig.Password = "YourPassword"
   RP_MySQLConfig.Database_name = "s123_darkrp"
   RP_MySQLConfig.Database_port = 3306
   RP_MySQLConfig.Preferred_module = "mysqloo"
   ```

   Replace the example values with the connection details from the dashboard.

7. **Restart the server**\
   Save the file and restart your server. DarkRP creates the required tables in the database automatically.

> [!WARNING]
> Anyone with SFTP access to your server can read the database password in the `mysql.lua` file. Therefore, only share SFTP access with people you trust.

> [!TIP]
> If the connection does not work, check the error messages in the console. DarkRP also writes them with the prefix `MySQL Error:` to the logs under `/garrysmod/data/DarkRP_logs/`.
