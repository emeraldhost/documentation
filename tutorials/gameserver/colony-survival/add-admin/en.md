---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Colony Survival Server"
description: "Add an admin to a Colony Survival server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/colony-survival/add-mods", "gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame"]
---

Colony Survival manages permissions through **groups**. Every player starts in the group `peasant`; they get admin rights once you assign them a higher group. On a fresh server, however, nobody is allowed to make that assignment in-game yet – which is why you define the first admin through a file.

> [!TIP]
> You need the player's SteamID64 for the file entry. Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## The permission groups

| Group | Permissions |
|-------|-------------|
| `peasant` | Default group for all players – regular play without admin commands |
| `king` | Cheats, teleport, time and loot commands as well as `/save`, `/backup` and stopping the server |
| `god` | Contains all permissions of `king` and may additionally grant permissions and manage the whitelist and blacklist |

> [!NOTE]
> For the full admin role – including banning players and granting permissions to others – you need the group `god`.

## Add the first admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open or create the file**\
   Navigate to the folder of your world and open the file `permissionusers.json` there. `<worldname>` is the folder name of your world – it matches the **World Name** field in the dashboard:

   ```text
   /gamedata/savegames/<worldname>/permissionusers.json
   ```

   > [!NOTE]
   > The file does not exist initially. In that case simply create it.

4. **Enter the SteamID64**\
   Add your SteamID64 together with the group `god`. Important: the SteamID64 is prefixed with `1.` – that prefix marks a Steam player and is mandatory:

   ```json
   {
     "1.76561198012345678": {
       "includes": ["god"]
     }
   }
   ```

   Separate multiple admins with a comma:

   ```json
   {
     "1.76561198012345678": {
       "includes": ["god"]
     },
     "1.76561198087654321": {
       "includes": ["king"]
     }
   }
   ```

   > [!WARNING]
   > Without the leading `1.` the server does not recognise the entry and you stay without permissions. If the file already contains entries such as `"2.0"` or `"3.0"`, leave them untouched and add your entry next to them.

5. **Start the server**\
   Save the file and start your server.

6. **Check your permissions**\
   Join your server, press `T` to open the chat and enter an admin command, for example:

   ```text
   /reloadpermission
   ```

   If the command goes through, you have admin rights. If you lack the rights, the server tells you that the matching permission is missing.

> [!WARNING]
> Make sure the JSON stays valid: double quotes, commas between the entries and no comma after the last entry. If the file is malformed, the permissions are not applied. When in doubt, check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing.

## Add more admins in the game

Once you are in the group `god` yourself, you can grant all further permissions conveniently through the chat.

1. **Open the chat**\
   Press `T` in the game to open the chat.

2. **Assign the group**\
   Assign the desired group to the player – either by their player name or by their SteamID64:

   ```text
   /setgroup god Sam
   ```

   ```text
   /setgroup king 76561198012345678
   ```

   > [!NOTE]
   > If the player name contains spaces, put it in quotation marks: `/setgroup god "The Dragon Whisperer"`

3. **Revoke permissions**\
   To take the rights back, remove the group again:

   ```text
   /removegroup god Sam
   ```

## Command overview

| Command | Description |
|---------|-------------|
| `/setgroup <group> <player>` | Sets the group of a player |
| `/addgroup <group> <player>` | Adds an additional group to a player |
| `/removegroup <group> <player>` | Removes a group again |
| `/addpermission <permission> <player>` | Grants a single permission |
| `/removepermission <permission> <player>` | Revokes a single permission |
| `/reloadpermission` | Reloads the permission files |
| `/save` | Saves the world |
| `/backup` | Creates a backup of the world |
| `/tps` | Shows the server performance |
| `/time day` · `/time night` · `/time add <hours>` | Controls the time of day |
| `/worldseed` | Shows the seed of the world |
| `/colony addowner <player>` · `/colony removeowner <player>` | Manages the co-owners of a colony |

> [!NOTE]
> Admin commands are always entered in the in-game chat. The chat opens with `T` and closes with `Esc`.

## Create custom permission groups

> [!TIP]
> The default groups are located in `/gamedata/settings/permissiongroups.json`. That file gets overwritten by updates. If you want to define your own groups, copy it into the folder of your world:
>
> ```text
> /gamedata/savegames/<worldname>/permissiongroups.json
> ```
>
> There your changes survive an update.

> [!CAUTION]
> **Cheat commands disable achievements permanently**
>
> Some commands only become available once you enable cheats with `/disableachievements`. That step **cannot be undone** for the world in question – Steam achievements stay disabled in it permanently.

> [!TIP]
> To learn how to lock players out of your server, see [Kick & Ban Players](/tutorials/gameserver/colony-survival/kick-ban-players).
