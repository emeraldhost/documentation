---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Ground Branch Server"
description: "Add an admin to a Ground Branch server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/ground-branch/add-mods", "gameserver/ground-branch/create-backup", "gameserver/ground-branch/join-server", "gameserver/ground-branch/kick-ban-players"]
---

Admins on a Ground Branch server are managed through the file `Admin.ini`. The fastest way, however, is the **admin setup password**: it makes you a SuperAdmin directly in the game without having to look up any SteamID first.

> [!NOTE]
> All configuration files are located in `/GroundBranch/ServerConfig/`. They are only created on the **first server start**, so start your server once before looking for the files.

## Method 1: Using the admin setup password

This is the fastest route and works entirely in the game.

1. **Start the server**\
   Start your server once via the dashboard so the configuration files get created.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Read the password**\
   Open the following file and note down the password it contains:

   ```text
   /GroundBranch/ServerConfig/AdminSetupPassword.txt
   ```

4. **Join the server**\
   Launch Ground Branch and join your server – see [Join Server](/tutorials/gameserver/ground-branch/join-server).

5. **Open the console**\
   Press the `` ` `` key (backtick, left of the `1`) in the game to open the console.

6. **Run the command**\
   Enter the following command and replace `<password>` with the value from the file:

   ```text
   admin setup <password>
   ```

   You immediately become **SuperAdmin** on that server.

> [!WARNING]
> The setup password expires as soon as it has been used once. It only exists to set up the first admin – every further admin is managed through the admin menu or the `Admin.ini` afterwards.

## Method 2: Editing Admin.ini

Alternatively you can add admins directly in the configuration file. For that you need the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

1. **Stop the server**\
   Stop your server via the dashboard. The file is only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Admin.ini**\
   Open the following file:

   ```text
   /GroundBranch/ServerConfig/Admin.ini
   ```

4. **Add the admin**\
   Add one line per admin inside the section `[/Script/RBZooKeeper.ZKAdmin]`:

   ```ini
   [/Script/RBZooKeeper.ZKAdmin]
   Admins=(Name="JoeBlow",UniqueId="76561198012345678",ContactInfo="",Group="SuperAdmin")
   ```

   | Field | Meaning |
   |-------|---------|
   | `Name` | Freely chosen display name, only for your own overview |
   | `UniqueId` | The player's SteamID64 (17 digits) |
   | `ContactInfo` | Optional note field, may stay empty |
   | `Group` | The admin group whose permissions the player receives |

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> The SteamID64 is entered without any additions. The suffix `:0` mentioned in older guides is no longer required.

## Admin groups

Which commands a group may use is also defined in the `Admin.ini`. Every group gets its own `AdminGroups=` line, placed **above** the admins:

```ini
AdminGroups=(Name="SuperAdmin",Commands=("all"))
AdminGroups=(Name="Moderator",Commands=("kick","ban","changemap"))
```

| Field | Meaning |
|-------|---------|
| `Name` | Name of the group that you enter under `Group` for your admins |
| `Commands` | List of allowed commands, `"all"` allows every command |

> [!NOTE]
> An admin in the `SuperAdmin` group may do everything, while an admin in the `Moderator` group in the example above may only kick, ban and change the map. Which commands can be assigned to a group at all is listed in the file `GroundBranch/Config/DefaultZooKeeper.ini`.

> [!NOTE]
> Admins can be managed both in the file and in the game through the admin menu. The **groups** themselves can only be created and edited in the `Admin.ini`.

## Open the admin menu

Once you are an admin, there are three ways to reach the admin menu in the game:

- The `F8` key
- The ESC menu and the admin button there
- The console (`` ` ``) and the command `admin`

In the admin menu you manage players (kick and ban), the map change and map list as well as the admin list itself.

## Further admin commands

| Command | Description |
|---------|-------------|
| `admin setup <password>` | One-time setup of the first admin via the console |
| `admin` | Opens the admin menu |
| `kick` | Removes a player from the server, with an optional reason |
| `ban` | Bans a player temporarily or permanently, with an optional reason |
| `unban` | Lifts a ban using the player's unique ID |
| `say` | Sends a message to everyone on the server |
| `motd` | Shows the message of the day to all players |
| `changemap` / `nextmap` | Changes the map or jumps to the next map in the map list |
| `resurrect` (`res`) | Revives a fallen player at the spot where they died |
| `resurrectnear` (`resnear`) | Revives a fallen player at the nearest living player |
| `restartserver` | Restarts the server |

> [!NOTE]
> Which of these commands are available to you depends on your admin group. Only `admin setup <password>` and `admin` are officially documented as console commands; all other commands are used through the admin menu.

> [!WARNING]
> **No RCON**
>
> Ground Branch does not offer an RCON interface. All administration happens in the game through the admin menu or the in-game console.

> [!IMPORTANT]
> Changes to files in the `ServerConfig` folder only take effect after a **server restart**. Always edit the files while the server is stopped so your changes do not get overwritten.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/ground-branch/kick-ban-players).
