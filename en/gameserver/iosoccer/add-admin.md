---
description: Add an admin to an IOSoccer server
---

# How to Add an Admin to Your IOSoccer Server

IOSoccer does **not** ship with an admin system. There is no in-game admin list and no server setting that turns a player into an admin. The server is managed through the **server console** or **RCON** — in-game admin rights are only available through **SourceMod**.

:::: info Note
The captaincy settings `mp_captaincy_home` and `mp_captaincy_away` have nothing to do with admin rights — they only control who is team captain in the match. IOSoccer does not have a voting system either, so players cannot make decisions on their own.
::::

:::: warning Requirement
Metamod:Source and SourceMod have to be installed on your server. See [Add Mods](add-mods.md) for how to do that.
::::

## Find the SteamID

For the admin list you need the SteamID in the format `STEAM_0:x:xxxxxxx`.

:::: tip Tip
The quickest way to get the SteamID of a connected player is the command `status` in the server console. Alternatively you can look it up on the [SteamID](../steamid64-find-out.md) website; besides the SteamID64 it also shows the required `STEAM_0:` notation.
::::

:::: info Note
Instead of `STEAM_0:1:12345678` you can also enter the Steam3 format `[U:1:24691357]`. Both notations work.
::::

## Add an admin

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open the file</b><br>
   Open the following file:

   ```
   /iosoccer/addons/sourcemod/configs/admins_simple.ini
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
   "[U:1:24691357]"	"z"			// same permissions using the Steam3 format
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
| `h` | cvars | Change most ConVars |
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

## Use the admin menu

1. <b>Join the server</b><br>
   Connect to your server. See [Join Server](join-server.md) for how to do that.

2. <b>Open the menu</b><br>
   Open the admin menu with the command `sm_admin` in the game console or with `!admin` or `/admin` in the chat.

## Alternative: admins.cfg

Instead of `admins_simple.ini` you can also add admins in the KeyValues format:

```
/iosoccer/addons/sourcemod/configs/admins.cfg
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

## Without mods: server console and RCON

If you do not want to install plugins, the **server console** in the dashboard remains. You can run every server command there without being an admin inside the game — including match control with `sv_restart`, `sv_endmatch`, `sv_startpenalties`, `sv_starttimeout` and `sv_endtimeout`.

On top of that you can use RCON to run the same commands from outside. Your server receives the RCON password on every start, so you set it in the dashboard:

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **Settings**.

2. <b>Enter the password</b><br>
   Enter a long, unique password in the **RCON Password** field.

3. <b>Restart the server</b><br>
   Save the change and restart your server. The password is passed on at startup and therefore only takes effect after a restart.

:::: danger Important
A default password is set out of the box. Make sure to change it before your server is publicly reachable. In IOSoccer RCON runs over TCP on the same port number as the game — there is no separate RCON port. Anyone who knows your RCON password has full control over your server. When in doubt simply use the built-in console in the **dashboard**.
::::

### Harden RCON

Add these values via [SFTP](../establish-sftp-connection.md) to `/iosoccer/cfg/server.cfg` as well. If the file does not exist yet, create it:

| Setting | Meaning |
|---------|---------|
| `sv_rcon_maxfailures` | Number of failed logins after which an IP is banned |
| `sv_rcon_minfailures` | Number of failed logins within `sv_rcon_minfailuretime` after which an IP is banned |
| `sv_rcon_minfailuretime` | Time span in seconds over which failed logins are counted |
| `sv_rcon_banpenalty` | Duration of the ban in minutes |

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
