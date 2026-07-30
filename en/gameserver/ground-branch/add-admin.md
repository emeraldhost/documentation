---
description: Add an admin to a Ground Branch server
---

# How to Add an Admin to Your Ground Branch Server

Admins on a Ground Branch server are managed through the file `Admin.ini`. The fastest way, however, is the **admin setup password**: it makes you a SuperAdmin directly in the game without having to look up any SteamID first.

:::: info Note
All configuration files are located in `/GroundBranch/ServerConfig/`. They are only created on the **first server start**, so start your server once before looking for the files.
::::

## Method 1: Using the admin setup password

This is the fastest route and works entirely in the game.

1. <b>Start the server</b><br>
   Start your server once via the dashboard so the configuration files get created.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Read the password</b><br>
   Open the following file and note down the password it contains:

   ```
   /GroundBranch/ServerConfig/AdminSetupPassword.txt
   ```

4. <b>Join the server</b><br>
   Launch Ground Branch and join your server — see [Join Server](join-server.md).

5. <b>Open the console</b><br>
   Press the `` ` `` key (backtick, left of the `1`) in the game to open the console.

6. <b>Run the command</b><br>
   Enter the following command and replace `<password>` with the value from the file:

   ```
   admin setup <password>
   ```

   You immediately become **SuperAdmin** on that server.

:::: warning Warning
The setup password expires as soon as it has been used once. It only exists to set up the first admin — every further admin is managed through the admin menu or the `Admin.ini` afterwards.
::::

## Method 2: Editing Admin.ini

Alternatively you can add admins directly in the configuration file. For that you need the player's **SteamID64** — a 17-digit number starting with `7656`.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The file is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Admin.ini</b><br>
   Open the following file:

   ```
   /GroundBranch/ServerConfig/Admin.ini
   ```

4. <b>Add the admin</b><br>
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

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
The SteamID64 is entered without any additions. The suffix `:0` mentioned in older guides is no longer required.
::::

## Admin groups

Which commands a group may use is also defined in the `Admin.ini`. The following groups exist by default:

```ini
AdminGroups=(Name="SuperAdmin",Commands=("all"))
AdminGroups=(Name="Admin",Commands=("say","kick","ban","kill","changemap","nextmap"))
AdminGroups=(Name="Moderator",Commands=("kick","ban","changemap","nextmap"))
AdminGroups=(Name="ElevatedPlayer",Commands=("changemap","nextmap"))
```

| Group | Permissions |
|-------|-------------|
| `SuperAdmin` | All commands |
| `Admin` | Announcements, kick, ban, kill, change map |
| `Moderator` | Kick, ban, change map |
| `ElevatedPlayer` | Map changes only |

:::: info Note
Admins can be managed both in the file and in the game through the admin menu. The **groups** themselves can only be created and edited in the `Admin.ini`.
::::

## Open the admin menu

Once you are an admin, there are three ways to reach the admin menu in the game:

- The `F8` key
- The ESC menu and the admin button there
- The console (`` ` ``) and the command `admin`

In the admin menu you manage players (kick and ban), the map change and map list as well as the server name, MOTD, player count and password.

## Further admin commands

| Command | Description |
|---------|-------------|
| `admin setup <password>` | One-time setup of the first admin |
| `admin` | Opens the admin menu |
| `admin motd` | Edits the message of the day |
| `admin resurrect [all]` | Revives a player or all players |
| `admin resurrectnear [all]` | Revives nearby players (short form: `admin resnear`) |
| `ServerRestart` | Restarts the server |

:::: warning No RCON
Ground Branch does not offer an RCON interface. All administration happens in the game through the admin menu or the in-game console.
::::

:::: danger Important
Changes to files in the `ServerConfig` folder only take effect after a **server restart**. Always edit the files while the server is stopped so your changes do not get overwritten.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
