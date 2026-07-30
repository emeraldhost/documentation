---
description: Add an admin to an Eco server
---

# How to Add an Admin to Your Eco Server

Admins on an Eco server are entered in the file `/Configs/Users.eco`. Everyone listed there is allowed to use the admin chat commands of the server.

:::: danger Important
What you enter is always an **ID** – either the player's **SLG ID** or their **SteamID64**. A plain user name does not work.
::::

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Find your own ID

The server shows you your SLG ID directly in the game:

1. <b>Open the chat</b><br>
   Press `Enter` in the game to open the chat.

2. <b>Enter the command</b><br>
   Enter the following command to display your own ID:

   ```
   /manage whoami
   ```

   For other players you can use `/manage whois <PlayerName>` as well as `/manage listusers` – the latter lists all users known to the server with their name and ID.

## Add the admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. Configuration files are only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Users.eco</b><br>
   Open the following file:

   ```
   /Configs/Users.eco
   ```

   :::: info File does not exist?
   For every configuration, `/Configs/` also contains a file ending in `.eco.template`. This template only holds the default values and is not read by the server. If `Users.eco` is missing, copy `Users.eco.template` and rename the copy to `Users.eco`.
   ::::

4. <b>Enter the ID</b><br>
   Look for the `Admins` section and add the ID inside `$values`:

   ```json
   "Admins": {
     "System.String": {
       "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "$values": [
         "76561198012345678"
       ]
     }
   }
   ```

   The `$type` line already exists in your file – leave it unchanged and only add the IDs under `$values`. Depending on the server version it can look different from the example.

   Multiple admins are listed one below the other, separated by commas – there is **no** comma after the last entry:

   ```json
   "$values": [
     "76561198012345678",
     "76561198087654321"
   ]
   ```

5. <b>Start the server</b><br>
   Save the file and start your server. The admin rights are applied on startup.

:::: warning Warning
`Users.eco` has to remain valid JSON. A single missing or extra comma is enough to make the file unreadable for the server. If something goes wrong, you can look at `Users.eco.template` to see the original structure of the file.
::::

:::: info First admin
The first admin can only be added through the file. The chat commands for granting admin rights require admin rights themselves.
::::

## Grant admin rights in the game

Once you are an admin, you can appoint further admins directly in the game:

| Command | Description |
|---------|-------------|
| `/manage admin <NameOrID> [reason]` | Shows the admin list or adds a user as admin. Short form: `/admin` |
| `/manage removeadmin <NameOrID> [reason]` | Removes admin rights from a user |
| `/manage listadmins` | Shows all admins of the server |
| `/manage authlevel` | Shows your current authorisation level |

For `<NameOrID>` the commands accept the account id, Steam ID, SLG ID or the user name.

:::: info Note
You enter these commands in the **in-game chat**. Whether they can also be sent through the console in the dashboard is not documented – when in doubt, use the chat or the configuration file.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
