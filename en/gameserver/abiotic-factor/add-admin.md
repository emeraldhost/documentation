---
description: Add an admin to an Abiotic Factor server
---

# How to Add an Admin to Your Abiotic Factor Server

On an Abiotic Factor server you define admins in the `Admin.ini` file. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

:::: tip Tip
Here you can find a guide on how to find a [SteamID64](../steamid64-find-out.md).
::::

:::: info Note
Signing in as an admin only works with a SteamID64. Players on Xbox or PlayStation **cannot** be added as admins this way.
::::

## Add an admin via Admin.ini

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The admin list is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Admin.ini</b><br>
   Open the following file. If it does not exist yet, start the server once so it gets created:

   ```
   /AbioticFactor/Saved/SaveGames/Server/Admin.ini
   ```

   :::: info A different path is possible
   The location of the file can be moved with the start parameter `-AdminIniPath=` – its value is given relative to the `Saved` folder. If you cannot find the file at the path above, also check here:

   ```
   /AbioticFactor/Saved/Config/WindowsServer/Admin.ini
   ```
   ::::

4. <b>Enter the SteamID64</b><br>
   Add the SteamID64 under the `[Moderators]` section. Use one line per admin:

   ```ini
   [Moderators]
   Moderator=76561198012345678
   Moderator=76561198087654321
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
The SteamID64 has to be numeric and exactly 17 digits long. A Steam display name or a custom profile URL does not work here.
::::

## Alternative via an admin password

Abiotic Factor also supports the start parameter `-AdminPassword=<password>`. If it is set, a player can grant themselves admin rights in-game by entering that password – without any entry in `Admin.ini`.

:::: info Note
Whether your dashboard offers a field for the admin password or for additional start parameters can be seen under **Settings**. The admin password is independent of the server password – these are two different passwords.
::::

:::: warning Warning
Everyone who knows the admin password can gain admin rights on your server. Only share it with people you trust and use a different password than your server password.
::::

## Open the admin menu in the game

1. <b>Join the server</b><br>
   Join your server – see [Join Server](join-server.md).

2. <b>Open the menu</b><br>
   Press `Esc` to open the in-game menu.

3. <b>Open the admin area</b><br>
   Select the **Admin** tab. There you find the list of connected players and the admin functions.

4. <b>Verify your admin rights</b><br>
   If the **Admin** area is accessible to you, the server recognised you as an admin. If it is missing, your SteamID64 was not applied – check the entry in `Admin.ini` and restart the server.

:::: tip Tip
You can find out how to remove players as an admin in [Kick & Ban Players](kick-ban-players.md).
::::

:::: warning No chat or console commands
There are **no** documented admin commands in the chat and no server console for Abiotic Factor that you could use to grant admin rights. Commonly circulated commands such as `#SetAdmin` or configuration values such as `AdminSteamIDs` do not appear in the official documentation – you grant admin rights through `Admin.ini` or the admin password.
::::
