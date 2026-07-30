---
description: Add an admin to an Arma 3 server
---

# How to Add an Admin to Your Arma 3 Server

Arma 3 offers two ways to grant admin rights: an **admin password** that lets any player who knows it log in, and a **fixed admin list** of SteamID64s that works without a password at all. Both are configured in the `server.cfg` of your server.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Edit the server.cfg

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The `server.cfg` is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the server.cfg</b><br>
   Open the following file in the main directory of your server:

   ```
   /server.cfg
   ```

4. <b>Set the admin password</b><br>
   Enter an admin password. Every player who knows this password can log in as admin in the game:

   ```
   passwordAdmin = "yourAdminPassword";
   ```

   :::: warning Caution
   Never use the same password for `passwordAdmin` as for the server password (`password`). Otherwise every player who joins your server automatically gets admin rights as well.
   ::::

5. <b>Add fixed admins</b><br>
   In addition you can grant players permanent admin rights. Add their SteamID64 to the `admins[]` list – separate multiple IDs with a comma:

   ```
   admins[] = {"76561198012345678", "76561198087654321"};
   ```

   These players can later log in as admin without a password.

6. <b>Start the server</b><br>
   Save the file and start your server.

## Structure of the entries

```
passwordAdmin = "yourAdminPassword";
admins[] = {"76561198012345678", "76561198087654321"};
serverCommandPassword = "yourCommandPassword";
```

| Entry | Meaning |
|-------|---------|
| `passwordAdmin` | Password used for the admin login in the game |
| `admins[]` | List of SteamID64s that may log in as admin without a password |
| `serverCommandPassword` | Separate password for server-side commands issued through `serverCommand`, independent of the admin password |

:::: info Note
The `admins[]` list only takes the **SteamID64** – a 17-digit number starting with `7656`. Each additional ID is separated by a comma, and every ID is wrapped in quotation marks.
::::

## Log in as admin

1. <b>Join the server</b><br>
   Connect to your server – see [Join Server](join-server.md).

2. <b>Open the chat</b><br>
   Press the `/` key in the game to open the chat console.

3. <b>Log in</b><br>
   If you are listed in `admins[]`, this is enough:

   ```
   #login
   ```

   Otherwise you log in using the admin password:

   ```
   #login yourAdminPassword
   ```

4. <b>Log out</b><br>
   The following command ends the admin session again:

   ```
   #logout
   ```

## Admin command overview

All commands are entered in the chat console.

| Command | Description |
|---------|-------------|
| `#login` or `#login <password>` | Log in as admin |
| `#logout` | End the admin session |
| `#missions` | Open the mission selection |
| `#mission <missionName>` | Switch directly to the given mission |
| `#restart` | Restart the current mission |
| `#reassign` | Restart the mission and send all players back to slot selection |
| `#lock` | Lock the server – nobody can join anymore |
| `#unlock` | Unlock the server again |
| `#kick <name/ID>` | Disconnect a player from the server |
| `#exec ban "<name/ID>"` | Ban a player – `#exec` requires quotation marks |
| `#shutdown` | Shut the server down |

:::: warning Caution
`#shutdown` shuts the server down. Whether it starts again automatically depends on your settings – when in doubt, start it again via the dashboard.
::::

:::: tip Tip
To learn how to remove players from your server and block them permanently, see [Kick & Ban Players](kick-ban-players.md).
::::
