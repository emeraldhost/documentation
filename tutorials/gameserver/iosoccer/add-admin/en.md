---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your IOSoccer Server"
description: "Add an admin to an IOSoccer server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["iosoccer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/iosoccer/add-mods", "gameserver/iosoccer/create-backup", "gameserver/iosoccer/join-server", "gameserver/iosoccer/kick-ban-players"]
---

IOSoccer does **not** ship with an admin system. There is no in-game admin list and no server setting that turns a player into an admin. The server is managed through the **server console** or **RCON** – in-game admin rights are only available through **SourceMod**.

> [!NOTE]
> The captaincy settings `mp_captaincy_home` and `mp_captaincy_away` have nothing to do with admin rights – they only control who is team captain in the match. IOSoccer does not have a voting system either, so players cannot make decisions on their own.

> [!WARNING]
> **Requirement**
>
> Metamod:Source and SourceMod have to be installed on your server. See [Add Mods](/tutorials/gameserver/iosoccer/add-mods) for how to do that.

## Find the SteamID

For the admin list you need the SteamID in the format `STEAM_0:x:xxxxxxx`.

> [!TIP]
> The quickest way to get the SteamID of a connected player is the command `status` in the server console. Alternatively you can look it up on the [SteamID](/tutorials/gameserver/steamid64-find-out) website; besides the SteamID64 it also shows the required `STEAM_0:` notation.

> [!NOTE]
> Instead of `STEAM_0:1:12345678` you can also enter the Steam3 format `[U:1:24691357]`. Both notations work.

## Add an admin

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open the file**\
   Open the following file:

   ```text
   /iosoccer/addons/sourcemod/configs/admins_simple.ini
   ```

3. **Add the player**\
   Add one admin per line. A line is structured like this:

   ```text
   "<SteamID | !IP | Steam name>" "[immunity level:]<flags | @group>" ["password"]
   ```

   Examples:

   ```text
   "STEAM_0:1:16"		"bce"			// generic, kick, unban for this SteamID, no immunity
   "STEAM_0:1:12345678"	"99:z"			// all permissions, immunity level 99
   "[U:1:24691357]"	"z"			// same permissions using the Steam3 format
   "!127.0.0.1"		"5:z"			// all permissions for this IP, immunity level 5
   ```

4. **Apply the changes**\
   Save the file and enter the following command in the server console:

   ```text
   sm_reloadadmins
   ```

   Alternatively restart your server.

> [!NOTE]
> A `!` in front of an entry marks an IP address. If you enter a Steam name instead, you should set a password in the third column – otherwise any player using that name can claim the permissions.

## Permission flags at a glance

| Flag | Name | Meaning |
|------|------|---------|
| `a` | reservation | Reserved slot access |
| `b` | generic | Generic admin status – required for every admin |
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

> [!IMPORTANT]
> The flag `b` (generic) is mandatory for every admin. Without it an entry is not treated as an admin. Anyone who should get full permissions gets `z` instead.

## Use the admin menu

1. **Join the server**\
   Connect to your server. See [Join Server](/tutorials/gameserver/iosoccer/join-server) for how to do that.

2. **Open the menu**\
   Open the admin menu with the command `sm_admin` in the game console or with `!admin` or `/admin` in the chat.

## Alternative: admins.cfg

Instead of `admins_simple.ini` you can also add admins in the KeyValues format:

```text
/iosoccer/addons/sourcemod/configs/admins.cfg
```

```text
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

> [!NOTE]
> SourceMod reads both files. It is best to use only one of them so you keep track of your admins.

## Without mods: server console and RCON

If you do not want to install plugins, the **server console** in the dashboard remains. You can run every server command there without being an admin inside the game – including match control with `sv_restart`, `sv_endmatch`, `sv_startpenalties`, `sv_starttimeout` and `sv_endtimeout`.

On top of that you can use RCON to run the same commands from outside. Your server receives the RCON password on every start, so you set it in the dashboard:

1. **Open the dashboard**\
   Open the **dashboard** of your server and switch to the **Settings**.

2. **Enter the password**\
   Enter a long, unique password in the **RCON Password** field.

3. **Restart the server**\
   Save the change and restart your server. The password is passed on at startup and therefore only takes effect after a restart.

> [!IMPORTANT]
> A default password is set out of the box. Make sure to change it before your server is publicly reachable. In IOSoccer RCON runs over TCP on the same port number as the game – there is no separate RCON port. Anyone who knows your RCON password has full control over your server. When in doubt simply use the built-in console in the **dashboard**.

### Harden RCON

Add these values via [SFTP](/tutorials/gameserver/establish-sftp-connection) to `/iosoccer/cfg/server.cfg` as well. If the file does not exist yet, create it:

| Setting | Meaning |
|---------|---------|
| `sv_rcon_maxfailures` | Number of failed logins after which an IP is banned |
| `sv_rcon_minfailures` | Number of failed logins within `sv_rcon_minfailuretime` after which an IP is banned |
| `sv_rcon_minfailuretime` | Time span in seconds over which failed logins are counted |
| `sv_rcon_banpenalty` | Duration of the ban in minutes |

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/iosoccer/kick-ban-players).
