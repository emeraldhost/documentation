---
description: Add an admin to a SCUM server
---

# How to Add an Admin to Your SCUM Server

Admins on a SCUM server are defined exclusively through configuration files. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

:::: info Note
The configuration folder is called `WindowsServer` on your Linux server as well. That is intended – SCUM only ships a Windows server binary, which runs on Linux servers through a compatibility layer.
::::

## Add an admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The admin lists are only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open AdminUsers.ini</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /SCUM/Saved/Config/WindowsServer/AdminUsers.ini
   ```

4. <b>Enter the SteamID64</b><br>
   Enter exactly one SteamID64 per line:

   ```
   76561198012345678
   76561198087654321
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## Grant additional permissions

Some commands are not enabled automatically. You allow them by adding a permission suffix in square brackets directly after the SteamID64 – without a space in between:

```
76561198012345678[SetGodMode]
76561198087654321[SetGodMode, RestartServer]
76561198011223344[RestartServer]
```

| Suffix | Meaning |
|--------|---------|
| `[SetGodMode]` | Allows the command `#SetGodMode True` and `#SetGodMode False`. In SCUM this means instant building – not classic invulnerability, you can still die. |
| `[RestartServer]` | Allows restarting the server with the command `#RestartServer pretty please` |

:::: info Note
Without a suffix the admin still gets the regular admin commands. Multiple suffixes go into the same square brackets, separated by commas.
::::

## Access to the in-game server settings

To additionally let an admin edit the server settings directly in the game, add them to a second file:

```
/SCUM/Saved/Config/WindowsServer/ServerSettingsAdminUsers.ini
```

This file takes **only the plain SteamID64** – without square brackets and without suffixes:

```
76561198012345678
```

This file is also only read on server start.

## Use admin commands

1. <b>Open the chat</b><br>
   Press `T` in the game to open the chat.

2. <b>Enter a command</b><br>
   All admin commands start with `#`, for example:

   ```
   #ListPlayers
   ```

3. <b>List all commands</b><br>
   If you enter just a single `#`, the server lists all available commands.

:::: warning Warning
Admin rights can only be granted through the file `AdminUsers.ini`. Widely circulated commands such as `#SetAdmin` or `#God` do not exist in SCUM.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
