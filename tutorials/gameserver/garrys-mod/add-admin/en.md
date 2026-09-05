---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Garry's Mod Server"
description: "Add an admin to a Garry's Mod server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/create-backup", "gameserver/garrys-mod/join-server", "gameserver/garrys-mod/kick-ban-players"]
---

Garry's Mod comes with a built-in permission system providing the groups `admin` and `superadmin`. Players are assigned to these groups through the `users.txt` file.

> [!NOTE]
> Unlike in singleplayer or on a listen server, you do **not** automatically become superadmin on a dedicated server. You have to add yourself.

## Find the SteamID

For `users.txt` you need the SteamID in the format `STEAM_0:x:xxxxxxx` – **not** the SteamID64.

> [!TIP]
> The fastest way to get the SteamID of a connected player is the `status` command in the server console. Alternatively you can look it up on the [SteamID](/tutorials/gameserver/steamid64-find-out) website; besides the SteamID64 it also shows the required `STEAM_0:` notation.

## Add an admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the file**\
   Open the following file:

   ```text
   /garrysmod/settings/users.txt
   ```

4. **Add the players**\
   Add the players to the matching group. On the left is a freely chosen name, on the right the SteamID:

   ```text
   "Users"
   {
   	"superadmin"
   	{
   		"MyName"		"STEAM_0:1:12345678"
   	}

   	"admin"
   	{
   		"Friend"		"STEAM_0:0:87654321"
   	}
   }
   ```

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> **Caution**
>
> The file is only read when the server starts. A map change is not enough – the server has to be fully restarted for the changes to take effect.

> [!NOTE]
> When joining you will see the chat message `Hey '<Name>' - You're in the '<Group>' group on this server.`. If you instead get `Your SteamID wasn't fully authenticated, so your usergroup has not been set`, no group is assigned – in that case restart Steam and reconnect.

## Use admin commands with ULX

The built-in system only assigns permission groups, it does not provide admin commands or menus. In practice **ULX** together with **ULib** is used for that.

1. **Install ULX and ULib**\
   Add both addons to your Workshop collection ([ULX](https://steamcommunity.com/sharedfiles/filedetails/?id=557962280) with the ID `557962280` and [ULib](https://steamcommunity.com/sharedfiles/filedetails/?id=557962238) with the ID `557962238`) or upload them manually to the folders `/garrysmod/addons/ulx/` and `/garrysmod/addons/ulib/`. You can find out how in the guide [Add Mods](/tutorials/gameserver/garrys-mod/add-mods).

2. **Restart the server**\
   Fully restart your server.

3. **Assign permissions**\
   Afterwards assign the permissions in-game or via the server console:

   ```text
   ulx adduser <Name> superadmin
   ```

> [!IMPORTANT]
> ULX requires ULib to work. Always install both addons together.
