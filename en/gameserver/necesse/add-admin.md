---
description: Add an admin to a Necesse server
---

# How to Add an Admin to Your Necesse Server

Necesse has **no admin file** that you could edit via SFTP. Permissions are granted exclusively with the `/permissions` command – either directly in the console of your dashboard or in the in-game chat. You always specify the **player name**, not the SteamID64.

:::: danger Important
The player must be **online** on your server while you grant the permissions. You cannot set a permission level for a player who is currently not connected.
::::

## Permission levels

| Level | Permissions |
|-------|-------------|
| `user` | Default level without special permissions |
| `moderator` | May kick players |
| `admin` | May additionally ban, change world settings and use cheat commands |
| `owner` | May use all commands, including granting permissions |

## Add an admin via the console

The most reliable way is the console in the dashboard. You do not need any permissions there yourself – the console talks to the server directly.

1. <b>Start the server</b><br>
   Start your server via the dashboard if it is not running already.

2. <b>Have the player connect</b><br>
   The player who is supposed to receive permissions must join the server and stay online. You can find out how to join under [Join Server](join-server.md).

3. <b>Open the console</b><br>
   Open the **console** of your server in the dashboard.

4. <b>Grant the permissions</b><br>
   Enter the following command and replace `<PlayerName>` with the exact name of the player:

   ```
   /permissions set <PlayerName> admin
   ```

   :::: tip Example
   ```
   /permissions set JohnDoe owner
   ```
   ::::

5. <b>Check the result</b><br>
   The server confirms the change in the console. The permissions apply immediately – no restart is required.

## Add an admin in the game

If you already hold the `owner` level yourself, you can also grant permissions directly in the game.

1. <b>Open the chat</b><br>
   Press `Enter` in the game to open the chat.

2. <b>Enter the command</b><br>
   Use the same command as in the console:

   ```
   /permissions set <PlayerName> moderator
   ```

## Check and revoke permissions

| Command | Description |
|---------|-------------|
| `/permissions list` | Shows all players with granted permissions |
| `/permissions get <PlayerName>` | Shows the permission level of a player |
| `/permissions set <PlayerName> user` | Revokes all special permissions |

:::: warning Caution
The player name is case sensitive and must match exactly. Use `/permissions list` to check the stored spelling.
::::

## Further commands for owners

| Command | Description |
|---------|-------------|
| `/stop` | Shuts the server down cleanly |
| `/allowcheats` | Enables cheat commands for the world |
| `/regen` | Regenerates the current level (island or dimension) |

:::: danger Important
`/allowcheats` **cannot be undone**. Once enabled, cheat commands stay active for this world permanently. `/regen` regenerates the affected level from scratch and destroys everything you built there – create a [backup](create-backup.md) first.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick and Ban Players](kick-ban-players.md).
::::
