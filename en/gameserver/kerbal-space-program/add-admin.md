---
description: Add an admin to a Kerbal Space Program server
---

# How to Add an Admin to Your Kerbal Space Program Server

A DarkMultiPlayer server manages its admins through the file `Config/admins.txt`. What you enter there is the **DMP player name** – not a SteamID64 or any other ID. On the server the name is uniquely tied to the player's key.

:::: danger Important
A player can only be made an admin once they have **connected to the server at least once**. Before that the server does not know the name and reports `'<name>' does not exist.`
::::

## Add an admin via the console

The quickest way is the console in your dashboard. The server applies the change immediately, no restart required.

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **console**.

2. <b>Add the admin</b><br>
   Enter the following command and replace the placeholder with the player name:

   ```
   /admin add Jebediah
   ```

3. <b>Check the result</b><br>
   Display the current list:

   ```
   /admin show
   ```

:::: info Command overview
| Command | Description |
|---------|-------------|
| `/admin add <player name>` | Make a player an admin |
| `/admin del <player name>` | Revoke admin rights |
| `/admin show` | Show all admins |
::::

## Add an admin via the file

Alternatively you can enter the name directly into the file – for example when adding several admins at once.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open admins.txt</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /Config/admins.txt
   ```

4. <b>Enter the player names</b><br>
   Enter exactly one player name per line:

   ```
   Jebediah
   Valentina
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Only edit the file while the server is stopped. The server keeps the admin list in memory and rewrites the whole file on every change – edits made during operation are lost.
::::

## What admin rights do

| Right | Description |
|-------|-------------|
| Console channel | Only admins see the additional channel `#Server` in the DMP chat. |
| Server commands in game | Through that channel you can run all server commands directly from the game, for example kicking or banning players. |
| Upload a modpack | Only admins may upload a modpack with `/upload`, see [Add Mods](add-mods.md). |

:::: info Note
Admin rights do **not** grant special access to other players' vessels and no special rights for time warp. DarkMultiPlayer handles those areas through its own permissions and the configured **Warp Mode**.
::::

## Use commands in the game

1. <b>Open the chat</b><br>
   Open the DMP chat window in the game.

   :::: info Note
   By default the chat opens with the key to the left of the `1`. You can change which key that is in the DMP window under **Options** → **Keys** at **Chat**.
   ::::

2. <b>Switch the channel</b><br>
   Switch to the channel `#Server`. It is only visible to admins.

   :::: info Note
   If the channel has a different name on your server, that comes from the value `consoleIdentifier` in the file `/Config/Settings.txt`. By default it is `Server`.
   ::::

3. <b>Enter a command</b><br>
   In this channel you enter commands **without** a leading slash:

   ```
   kick Jebediah
   ```

   :::: warning Warning
   In the console of your dashboard it is the other way around: there commands need the leading slash, otherwise your input is sent as a chat message to all players.
   ::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
