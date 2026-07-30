---
description: Kick and ban players on a The Forest server
---

# How to Kick and Ban Players on Your The Forest Server

On a The Forest server you remove players with **chat commands inside the game**. What you always enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

:::: info Note
The commands are only available to players who entered the admin password when joining. See [Add Admin](add-admin.md).
::::

:::: tip Tip
Here you can find a guide on how to find a [SteamID64](../steamid64-find-out.md).
::::

## Use commands in the game

1. <b>Join as an admin</b><br>
   Enter the admin password when joining, otherwise the commands are ignored.

2. <b>Open the chat</b><br>
   Press `Enter` in the game to open the chat.

3. <b>Enter a command</b><br>
   All admin commands start with `/`, for example:

   ```
   /ban 76561198012345678
   ```

## Kick a player

```
/kick <SteamID64>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```
/ban <SteamID64>
```

The player is kicked from the server and can no longer connect.

## Remove a ban

```
/unban <SteamID64>
```

:::: warning Warning
`/unban` is **not** part of the official command list of The Forest, but it is described by several hosting providers. It may therefore not work on your server version. There is no ban file you could edit via SFTP – The Forest does not store a documented ban list in the file system. It is also undocumented whether bans survive a server restart.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `/help` | Show the list of all available commands |
| `/kick <SteamID64>` | Disconnect a player from the server |
| `/ban <SteamID64>` | Block a player from the server |
| `/save <1-5>` | Save the game on the given slot |
| `/restart` | Restart the server |
| `/shutdown` | Shut down the server |
| `/openlogs` | Open the log window |
| `/closelogs` | Close the log window |
| `/treeregrowmode on\|off` | Turn regrowth of cut down trees on or off |
| `/allowbuildingdestruction on\|off` | Allow or forbid the destruction of buildings |
| `/allowenemiescreative on\|off` | Allow or forbid enemies in creative mode |

:::: danger Important
Do **not** use `/restart` to restart your server: according to the official command list this command resets the save game – the save data is deleted in the process. Restart your server through the **dashboard** instead. Create a [backup](create-backup.md) beforehand.
::::

:::: warning Warning
`/save <1-5>` saves on the slot you specify – if you enter a slot other than the one your server uses, you may overwrite a different save game.
::::

## No console in the dashboard

:::: info Note
For The Forest, the console in the dashboard only shows the output of the server. The server does **not** accept commands there – all admin commands go through the in-game chat.
::::

## No whitelist

:::: warning Warning
The Forest has **no whitelist feature**. If you want to restrict your server to certain players, set a server password and only share it with those players.
::::
