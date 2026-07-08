---
description: Add admins to a Space Engineers server
---

# How to Add Admins to Your Space Engineers Server

Admins have full management rights on the server and can, for example, kick and ban players. You can define admins via the server config or directly in-game.

## Requirement

You need the [SteamID64](../steamid64-find-out.md) of each player you want to make an admin.

## Method 1: Via the server config

:::: warning Caution
Stop your server before editing the config file. A running server overwrites your changes when it saves.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser.

3. <b>Open the config</b><br>
   Open the file `SpaceEngineers-Dedicated.cfg`.

4. <b>Add the admins</b><br>
   Find the `<Administrators>` section (an empty server shows `<Administrators />`) and add one line per admin with the SteamID64:

   ```xml
   <Administrators>
     <unsignedLong>76561198000000000</unsignedLong>
   </Administrators>
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## Method 2: Directly in-game

An existing admin can promote other players live:

1. <b>Join the server</b><br>
   Join your server as an admin.

2. <b>Open the admin menu</b><br>
   Open the player list with `F3` or the admin screen with `Alt` + `F10`.

3. <b>Promote the player</b><br>
   Select the player and promote them (**Promote**) to the desired rank.

:::: info Crossplay servers
On servers with **crossplay** enabled, the SteamID method (method 1) does not take effect. In that case use in-game promotion (method 2) or the [Remote API](enable-remote-api.md).
::::
