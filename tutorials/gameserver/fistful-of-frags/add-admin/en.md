---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Fistful of Frags Server"
description: "Add an admin to a Fistful of Frags server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["fistful-of-frags"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/fistful-of-frags/add-mods", "gameserver/fistful-of-frags/create-backup", "gameserver/fistful-of-frags/join-server", "gameserver/fistful-of-frags/kick-ban-players"]
---

Fistful of Frags does **not** ship with an admin system. There is no in-game admin list and no server setting that turns a player into an admin. The server is managed through the **server console** or **RCON** – in-game admin rights are only available through **SourceMod**.

> [!WARNING]
> **Requirement**
>
> Metamod:Source and SourceMod have to be installed on your server. See [Add Mods](/tutorials/gameserver/fistful-of-frags/add-mods) for how to do that.

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
   /fof/addons/sourcemod/configs/admins_simple.ini
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
   Connect to your server. See [Join Server](/tutorials/gameserver/fistful-of-frags/join-server) for how to do that.

2. **Open the menu**\
   Open the admin menu with the command `sm_admin` in the game console or with `!admin` or `/admin` in the chat.

## Alternative: admins.cfg

Instead of `admins_simple.ini` you can also add admins in the KeyValues format:

```text
/fof/addons/sourcemod/configs/admins.cfg
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

If you do not want to install plugins, the **server console** in the dashboard remains. You can run every server command there without being an admin inside the game.

On top of that you can enable RCON to run the same commands from outside:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open server.cfg**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /fof/cfg/server.cfg
   ```

3. **Set a password**\
   Add the following line and choose a secure password:

   ```text
   rcon_password "your-password"
   ```

4. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> In Fistful of Frags RCON runs over TCP on the same port number as the game – there is no separate RCON port. Anyone who knows your RCON password has full control over your server. When in doubt use the built-in console in the **dashboard** and pick a long, unique password.

### Harden RCON

Add these values to `/fof/cfg/server.cfg` as well:

| Setting | Meaning |
|---------|---------|
| `sv_rcon_maxfailures` | Number of failed logins after which an IP is banned |
| `sv_rcon_minfailures` | Number of failed logins within `sv_rcon_minfailuretime` after which an IP is banned |
| `sv_rcon_banpenalty` | Duration of the ban in minutes |
| `sv_rcon_whitelist_address` | IP address that is never banned for failed logins |

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/fistful-of-frags/kick-ban-players).
