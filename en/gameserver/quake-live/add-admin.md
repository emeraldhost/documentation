---
description: Add an admin to a Quake Live server
---

# How to Add an Admin to Your Quake Live Server

Quake Live manages admin rights, moderator rights and bans together in a single text file: `access.txt`. What you enter is the player's **SteamID64** — a 17-digit number starting with `7656`.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md). Alternatively, connect to a server and enter `/players` in the in-game console — the output contains the SteamID64 of every connected player.
::::

## Permission levels

| Level | Meaning |
|-------|---------|
| `mod` | Moderator — may manage players, for example mute them or remove them from the server |
| `admin` | Administrator — the highest level in `access.txt`, includes the moderator rights |
| `ban` | Not a permission but a ban: the player can no longer join the server |

## Add an admin through access.txt

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open access.txt</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /baseq3/access.txt
   ```

4. <b>Enter the SteamID64</b><br>
   Add one entry per line, consisting of the SteamID64 and the permission level, separated by a `|`:

   ```
   76561198012345678|admin
   76561198087654321|mod
   ```

   Lines starting with `#` are comments and are ignored.

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: danger Important
Only edit `access.txt` **while the server is stopped**. The server writes the access list from memory back to the file before every map load — changes you save while the server is running get overwritten in the process.
::::

:::: info Note
The `baseq3` directory sits in the main directory of your server, so the full path is `/home/container/baseq3/`. Which file the server uses is controlled by the server variable `g_accessFile` — the default is `access.txt`.
::::

## Grant rights while the server is running

You can also grant rights without stopping the server. To do so, use the **console** of your server in the dashboard.

1. <b>Find the client ID</b><br>
   The commands expect the **client ID** — the number the server assigns to a connected player. To look it up, connect to your server in the game and enter the following command in the in-game console:

   ```
   /players
   ```

   The output lists every connected player with their client ID and their SteamID64.

2. <b>Open the console</b><br>
   Open the console of your server via the dashboard.

3. <b>Grant the rights</b><br>
   Enter the desired command, for example:

   ```
   addadmin 3
   ```

| Command | Description |
|---------|-------------|
| `addadmin <client ID>` | Make a player an administrator |
| `addmod <client ID>` | Make a player a moderator |
| `demote <client ID>` | Remove a player's admin privileges |
| `reload_access` | Re-read `access.txt` |

:::: info Note
In the console of your server you enter the commands without a leading `/`. In the game you use the same commands with a leading `/`, for example `/addadmin 3` or `/demote 3`.
::::

:::: warning Warning
`reload_access` does re-read the file immediately, but the server still overwrites it with its own state on the next map change. For permanent changes, editing the file with the server stopped is the safer route.
::::

## Security note on remote administration

The bundled `server.cfg` enables the ZeroMQ remote console (`zmq_rcon_enable "1"`) and ships with the placeholder password `ADMINPASSWORD`.

:::: danger Important
Administer your server through the console in the dashboard. If you do not use the remote console, set the following value in `/baseq3/server.cfg`:

```
set zmq_rcon_enable "0"
```

If you do want to use it, always set your own long password via `zmq_rcon_password` and create the port configured in `zmq_rcon_port` as an additional port allocation in the dashboard beforehand. The remote console binds to its own **TCP** port, not to the Game Port.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::

:::: info Note
The plugin framework minqlx comes with its own, separate permission system. It is only available if your server is explicitly run with a minqlx image — on a standard Quake Live server only `access.txt` applies.
::::
