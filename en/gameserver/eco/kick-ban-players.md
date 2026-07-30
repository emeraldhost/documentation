---
description: Kick and ban players on an Eco server
---

# How to Kick and Ban Players on Your Eco Server

You can remove players directly in the game using chat commands or block them permanently through the file `/Configs/Users.eco`.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

## Use commands in the game

1. <b>Open the chat</b><br>
   Press `Enter` in the game to open the chat.

2. <b>Identify the player</b><br>
   The following command lists all users known to the server with their name and ID:

   ```
   /manage listusers
   ```

3. <b>Run the command</b><br>
   Enter the desired command, for example:

   ```
   /manage ban 76561198012345678 Griefing 1w
   ```

:::: info Note
For `<NameOrID>` all commands accept the account id, Steam ID, SLG ID or the user name. The short forms such as `/kick` or `/ban` work exactly like the long notation.
::::

## Kick a player

```
/manage kick <NameOrID> [reason]
```

The player is removed from the running session but can rejoin at any time. Short form: `/kick`

## Ban a player

```
/manage ban <NameOrID> [reason] [time]
```

Without a duration the ban is permanent. Short form: `/ban`

:::: tip Temporary bans
The duration uses the format `1m`, `1h`, `1d` or `1w` – minutes, hours, days or weeks:

```
/manage ban 76561198012345678 RuleBreaking 2d
```
::::

:::: info Show the ban list
If you enter `/manage ban` without any further arguments, the server shows you the list of banned players.
::::

## Unban a player

```
/manage unban <NameOrID> [reason]
```

Short form: `/unban`

## Command overview

| Command | Short form | Description |
|---------|------------|-------------|
| `/manage listusers` | – | Show all known users with name and ID |
| `/manage whois <user>` | – | Show information about a user |
| `/manage kick <NameOrID> [reason]` | `/kick` | Remove a player from the running session |
| `/manage ban <NameOrID> [reason] [time]` | `/ban` | Ban a player, permanently if no duration is given |
| `/manage unban <NameOrID> [reason]` | `/unban` | Lift a ban |
| `/manage mute <NameOrID> [reason] [time]` | `/mute` | Mute a player |
| `/manage unmute <NameOrID> [reason]` | `/unmute` | Unmute a player |
| `/manage warnuser <user> <warning>` | – | Send a warning to a player |

:::: info Note
You enter these commands in the **in-game chat**. Whether they can also be sent through the console in the dashboard is not documented – when in doubt, use the chat or the configuration file.
::::

## Manage the lists via the configuration file

Bans and mutes can also be set directly in the configuration without being in the game:

```
/Configs/Users.eco
```

| Section | Purpose |
|---------|---------|
| `BlackList` | Listed users are denied a connection to the server |
| `MuteList` | Listed users are muted |
| `Admins` | Users with admin rights, see [Add Admin](add-admin.md) |

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. Configuration files are only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Enter the ID</b><br>
   Open `/Configs/Users.eco` and add the SLG ID or SteamID64 to `$values` in the desired section. The structure of the section already exists – only add the ID and leave the rest unchanged:

   ```json
   "BlackList": {
     "System.String": {
       "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "$values": [
         "76561198012345678"
       ]
     }
   }
   ```

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Unbanning via the file
To lift a ban, remove the ID from `$values` – including its comma. Make sure the file stays valid JSON and restart the server afterwards.
::::

:::: warning Warning
The same rule applies here: user names do not work, you have to enter an SLG ID or SteamID64. How to find them is described under [Add Admin](add-admin.md).
::::

:::: info Whitelist
`Users.eco` also contains a `WhiteList`. According to the official documentation it is **not an access restriction**: users on the whitelist simply do not need to enter a server password in order to connect. To lock out individual players, use the `BlackList`.
::::
