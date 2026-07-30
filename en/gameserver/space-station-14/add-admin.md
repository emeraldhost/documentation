---
description: Add an admin to a Space Station 14 server
---

# How to Add an Admin to Your Space Station 14 Server

Space Station 14 stores admin rights **in the database of your server**, not in a text file. There is no file such as `admins.txt`. To be able to create the very first admin, you first add yourself as host in the `server_config.toml`. All further admins are then granted conveniently through a window inside the game.

:::: info Note
Space Station 14 does not use a SteamID. What you enter is your **SS14 username** – the name you sign in with in the launcher – or alternatively your **user ID** (a GUID).
::::

## Set up the first admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The configuration is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open server_config.toml</b><br>
   Open the file `server_config.toml`. It is located in the main directory of your server, next to the server application `Robust.Server`.

4. <b>Enter the username</b><br>
   Add the following section and replace the placeholder with your SS14 username:

   ```toml
   [console]
   login_host_user = "YourSS14Name"
   loginlocal = false
   ```

   The user entered here automatically receives full host privileges (`+HOST`) upon connecting – this is equivalent to the `promotehost` command.

5. <b>Start the server</b><br>
   Save the file and start your server.

6. <b>Join</b><br>
   Connect to your server. You are now host and can grant all further admin rights.

:::: warning Warning
`loginlocal` is enabled by default and automatically grants host privileges to every connection coming from `127.0.0.1` or `::1`. On a rented server that address is not yours alone – therefore set the value to `false` as shown above.
::::

## Grant further admins through the permissions panel

1. <b>Open the console</b><br>
   Press `~` in the game to open the console.

2. <b>Open the permissions panel</b><br>
   Enter the following command:

   ```
   permissions
   ```

   The **Permissions Panel** opens with the tabs `Admins` and `Admin Ranks`.

3. <b>Add an admin</b><br>
   Click on **Add Admin** and enter the SS14 username or the user ID of the player into the `Username/User ID` field.

4. <b>Select the permissions</b><br>
   Choose the desired permissions. Optionally you can assign a custom title under `Custom title…`. With the `Suspended?` checkbox you can temporarily disable an admin without deleting them.

5. <b>Save</b><br>
   Confirm your input. The permissions apply immediately and are stored permanently.

:::: info Note
Through the `Admin Ranks` tab and the **Add Admin rank** button you can create roles with fixed sets of permissions that you can then assign to several admins.
::::

:::: warning Warning
The `permissions` command only works in the in-game console, not in the server console. You also need the `Permissions` permission or `+HOST` to use it.
::::

## Permissions overview

| Permission | Meaning |
|------------|---------|
| `Admin` | Basic admin commands |
| `Ban` | Ban players and lift bans |
| `Debug` | Debug commands |
| `Fun` | Commands with a direct effect on the ongoing round |
| `Permissions` | Manage other admins (permissions panel) |
| `Server` | Server-related commands |
| `Spawn` | Spawn objects and creatures |
| `VarEdit` | Edit variables of objects directly |
| `Mapping` | Mapping tools |
| `Logs` | View the server logs |
| `Round` | Start, end and restart rounds |
| `+HOST` | Full access to everything |

:::: danger Important
`+HOST` privileges are **extremely dangerous**. Giving somebody `+HOST` allows them to completely take over your server. Only grant this permission to people you trust without reservation.
::::

## Alternative via the server console

If your server is already running and you want to make someone host at short notice, you can also do so from the server console:

```
promotehost <PlayerName>
```

The command expects exactly one argument – the username of a connected player – and grants the privileges only **temporarily**. It works exclusively in the server console, not in the game.

:::: info Note
Whether the console in the dashboard passes input on to the server depends on your server. If the command does not work, use the `login_host_user` approach in the `server_config.toml`.
::::

## Admin features in the game

| Key or command | Purpose |
|----------------|---------|
| `F7` | Open the admin menu |
| `F1` | Open the admin help (ahelp) with player reports |
| `~` | Open the console |
| `adminwho` | Shows which admins are currently online |
| `deadmin` | Temporarily drops your admin privileges |
| `readmin` | Takes your admin privileges back on |
| `adminnotes <username>` | Shows the notes about a player |

:::: info Note
Space Station 14 has no mod system. Changes to your server are made exclusively through the `server_config.toml`.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
