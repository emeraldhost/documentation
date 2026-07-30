---
description: Add an admin to a Counter-Strike Source server
---

# How to Add an Admin to Your Counter-Strike Source Server

Counter-Strike Source does **not** ship with an admin system. In-game admin rights are only available through **SourceMod**.

:::: warning Requirement
Metamod:Source and SourceMod have to be installed on your server. See [Add Mods](add-mods.md) for how to do that.
::::

## Find the SteamID

For the admin list you need the SteamID in the format `STEAM_0:x:xxxxxxx`.

:::: tip Tip
The quickest way to get the SteamID of a connected player is the command `status` in the server console. Alternatively you can look it up on the [SteamID](../steamid64-find-out.md) website; besides the SteamID64 it also shows the required `STEAM_0:` notation.
::::

## Add an admin

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open the file</b><br>
   Open the following file:

   ```
   /cstrike/addons/sourcemod/configs/admins_simple.ini
   ```

3. <b>Add the player</b><br>
   Add one admin per line. A line is structured like this:

   ```
   "<SteamID | !IP | Steam name>" "[immunity level:]<flags | @group>" ["password"]
   ```

   Examples:

   ```
   "STEAM_0:1:16"		"bce"			// generic, kick, unban for this SteamID, no immunity
   "STEAM_0:1:12345678"	"99:z"			// all permissions, immunity level 99
   "!127.0.0.1"		"5:z"			// all permissions for this IP, immunity level 5
   ```

4. <b>Apply the changes</b><br>
   Save the file and enter the following command in the server console:

   ```
   sm_reloadadmins
   ```

   Alternatively restart your server.

:::: info Note
A `!` in front of an entry marks an IP address. If you enter a Steam name instead, you should set a password in the third column — otherwise any player using that name can claim the permissions.
::::

## Permission flags at a glance

| Flag | Name | Meaning |
|------|------|---------|
| `a` | reservation | Reserved slot access |
| `b` | generic | Generic admin status — required for every admin |
| `c` | kick | Kick other players |
| `d` | ban | Ban other players |
| `e` | unban | Remove bans |
| `f` | slay | Slay or harm players |
| `g` | changemap | Change the map or major gameplay features |
| `h` | cvar | Change most ConVars |
| `i` | config | Execute config files |
| `j` | chat | Special chat privileges |
| `k` | vote | Start or create votes |
| `l` | password | Set a password on the server |
| `m` | rcon | Use RCON commands |
| `n` | cheats | Change `sv_cheats` or use cheat commands |
| `o` – `t` | custom1 – custom6 | Custom groups 1 to 6 |
| `z` | root | Enables all flags and ignores immunity |

:::: danger Important
The flag `b` (generic) is mandatory for every admin. Without it an entry is not treated as an admin. Anyone who should get full permissions gets `z` instead.
::::

:::: info Note
The immunity level goes in front of the colon. An admin with a higher level can kick or ban admins with a lower level, but not the other way around. A value of `0` means no immunity, and the flag `z` (root) ignores immunity levels entirely.
::::

## Use the admin menu

1. <b>Join the server</b><br>
   Connect to your server. See [Join Server](join-server.md) for how to do that.

2. <b>Open the menu</b><br>
   Open the admin menu with the command `sm_admin` in the game console or with `!admin` or `/admin` in the chat.

## Alternative: admins.cfg

Instead of `admins_simple.ini` you can also add admins in the KeyValues format:

```
/cstrike/addons/sourcemod/configs/admins.cfg
```

```
Admins
{
	"Player name"
	{
		"auth"		"steam"
		"identity"	"STEAM_0:1:12345678"
		"flags"		"abcdef"
	}
}
```

:::: info Note
SourceMod reads both files. It is best to use only one of them so you keep track of your admins.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
