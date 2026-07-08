---
description: Kick and ban players on a Space Engineers server
---

# How to Kick and Ban Players on Your Space Engineers Server

You can kick and ban players directly in-game, or ban them permanently via the server config.

:::: info Note
To kick and ban in-game you need admin rights. See [Add Admins](add-admins.md).
::::

## Method 1: Directly in-game

1. <b>Join the server</b><br>
   Join your server as an admin.

2. <b>Open the admin menu</b><br>
   Open the player list with `F3` or the admin screen with `Alt` + `F10`.

3. <b>Kick or ban the player</b><br>
   Select the player and click **Kick** (temporary removal) or **Ban** (permanent block).

## Method 2: Via the server config

You can also ban players permanently via the ban list.

:::: warning Caution
Stop your server before editing the config file.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser.

3. <b>Open the config</b><br>
   Open the file `SpaceEngineers-Dedicated.cfg`.

4. <b>Ban the player</b><br>
   Find the `<Banned>` section and add one line per player with the SteamID64:

   ```xml
   <Banned>
     <unsignedLong>76561198000000000</unsignedLong>
   </Banned>
   ```

   To unban, remove the corresponding line again.

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
Space Engineers has **no** built-in console commands for kicking or banning. Commands like `/kick` or `/ban` come from mods (e.g. Torch) and are not part of the standard server.
::::

:::: tip Tip
You can find a player's [SteamID64](../steamid64-find-out.md) via the linked guide.
::::
