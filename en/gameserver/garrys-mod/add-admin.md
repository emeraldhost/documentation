---
description: Add an admin to a Garry's Mod server
---

# How to Add an Admin to Your Garry's Mod Server

Garry's Mod comes with a built-in permission system providing the groups `admin` and `superadmin`. Players are assigned to these groups through the `users.txt` file.

:::: info Note
Unlike in singleplayer or on a listen server, you do **not** automatically become superadmin on a dedicated server. You have to add yourself.
::::

## Find the SteamID

For `users.txt` you need the SteamID in the format `STEAM_0:x:xxxxxxx` — **not** the SteamID64.

:::: tip Tip
The fastest way to get the SteamID of a connected player is the `status` command in the server console. Alternatively you can look it up on the [SteamID](../steamid64-find-out.md) website; besides the SteamID64 it also shows the required `STEAM_0:` notation.
::::

## Add an admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the file</b><br>
   Open the following file:

   ```
   /garrysmod/settings/users.txt
   ```

4. <b>Add the players</b><br>
   Add the players to the matching group. On the left is a freely chosen name, on the right the SteamID:

   ```
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

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Caution
The file is only read when the server starts. A map change is not enough — the server has to be fully restarted for the changes to take effect.
::::

:::: info Note
When joining you will see the chat message `Hey '<Name>' - You're in the '<Group>' group on this server.`. If you instead get `Your SteamID wasn't fully authenticated, so your usergroup has not been set`, no group is assigned — in that case restart Steam and reconnect.
::::

## Use admin commands with ULX

The built-in system only assigns permission groups, it does not provide admin commands or menus. In practice **ULX** together with **ULib** is used for that.

1. <b>Install ULX and ULib</b><br>
   Add both addons to your Workshop collection ([ULX](https://steamcommunity.com/sharedfiles/filedetails/?id=557962280) with the ID `557962280` and [ULib](https://steamcommunity.com/sharedfiles/filedetails/?id=557962238) with the ID `557962238`) or upload them manually to the folders `/garrysmod/addons/ulx/` and `/garrysmod/addons/ulib/`. You can find out how in the guide [Add Mods](add-mods.md).

2. <b>Restart the server</b><br>
   Fully restart your server.

3. <b>Assign permissions</b><br>
   Afterwards assign the permissions in-game or via the server console:

   ```
   ulx adduser <Name> superadmin
   ```

:::: danger Important
ULX requires ULib to work. Always install both addons together.
::::
