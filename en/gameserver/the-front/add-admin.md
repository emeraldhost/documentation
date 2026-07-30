---
description: Add an admin to a The Front server
---

# How to Add an Admin to Your The Front Server

Admins on a The Front server are added by their **SteamID64** – a 17-digit number starting with `7656`. You can either set it as a startup parameter or write it into your server's configuration file.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

:::: danger Important
Separate multiple SteamID64 with a **semicolon** (`;`) – without any spaces in between. An admin added this way automatically receives the highest GM level (level 25).
::::

## Option 1: Via the dashboard

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **settings**.

2. <b>Enter the admin IDs</b><br>
   Enter your SteamID64 into the field for the admin accounts. If your dashboard only offers a field for additional startup parameters, add the following there:

   ```
   -ServerAdminAccounts="76561198012345678;76561198087654321"
   ```

3. <b>Restart the server</b><br>
   Save the change and restart your server. The admin list is only read on server start.

## Option 2: Via the configuration file

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the configuration file</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /TheFrontManager/ServerConfig_<ConfigName>.ini
   ```

   :::: info Which config name?
   The name comes from your server's startup parameter `-ConfigServerName=` – this is not the server name shown in the server list. If it is set to `new`, the file is called `ServerConfig_new.ini`. If no name is set, it is simply called `ServerConfig_.ini`.

   The folder and file name have to be spelled exactly like this – otherwise the server does not load the configuration.
   ::::

4. <b>Enter the SteamID64</b><br>
   Add the IDs in the `[BaseServerConfig]` section:

   ```
   [BaseServerConfig]
   ServerAdminAccounts=76561198012345678;76561198087654321
   ```

   :::: info Note
   The `[BaseServerConfig]` section has to be present in the file, otherwise no value is applied. If you create the file from scratch, this is the minimal structure.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

## Use admin rights in the game

1. <b>Join the server</b><br>
   Join your server, see [Join Server](join-server.md).

2. <b>Open the admin menu</b><br>
   Press `Shift` + `G`. The admin menu opens, and you run the admin commands from there.

3. <b>Run a command</b><br>
   Enter the desired command, for example:

   ```
   AddGM 76561198012345678 25
   ```

:::: tip Console
Alternatively you can open the console with the `` ` `` or `~` key – on an English keyboard the key to the left of the `1`. If the key does not react, switch your keyboard layout to English.
::::

## Manage admins in the game

Once you are an admin you can grant admin rights to others directly in the game – no server restart required:

| Command | Description |
|---------|-------------|
| `AddGM <SteamID64> <GM level>` | Make a player an admin. The highest level is `25`. |
| `RemoveGM <SteamID64>` | Revoke admin rights |
| `ToggleGMTitleShow 0` | Hide the admin tag in the game |
| `ToggleGMTitleShow 1` | Show the admin tag in the game |

:::: info Note
Whether your admin title is visible to other players is additionally controlled by the value `IsShowGmTitle=` in the configuration file or the startup parameter `-IsShowGmTitle`.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
