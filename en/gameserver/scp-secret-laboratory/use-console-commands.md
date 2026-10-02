---
description: "Use console commands on an SCP: Secret Laboratory server"
---

# How to Use Console Commands on Your SCP: Secret Laboratory Server

The console in the dashboard of your server is the LocalAdmin console of SCP: Secret Laboratory. It lets you control your server without being in the game yourself: start and restart rounds, reload configuration files or send messages to all players. The console has full permissions, so you do not need an in-game rank to use it.

This page is an overview of the most important console commands. You can find the Remote Admin commands for moderating in-game in the guide [Use Remote Admin](use-remote-admin.md).

## How to enter commands

1. <b>Open the console</b><br>
   Open the dashboard of your server and switch to the console.

2. <b>Enter a command</b><br>
   Type the command into the input line and confirm with Enter. The server's response appears directly in the console.

There are three kinds of commands in the console:

| Kind | Input | Example |
|------|-------|---------|
| LocalAdmin and server commands | directly, without a prefix | `roundrestart` |
| Remote Admin commands | with a leading `/` | `/bc 10 Welcome!` |
| Commands to the Northwood servers | with a leading `!` | `!private` |

The tables on this page show every command exactly as you type it. If you leave out the `/` on a Remote Admin command, the console reports `Command ... does not exist!`.

:::: tip Tip
Use `help` to list all LocalAdmin and server commands and `/help` to list all Remote Admin commands. The command list can change with game updates, so `help` is always the most reliable reference.
::::

## LocalAdmin commands

These commands are handled by LocalAdmin itself, the program that starts and monitors the actual game server.

| Command | Description |
|---------|-------------|
| `help` | Lists all LocalAdmin commands followed by all server commands |
| `exit` | Stops the server |
| `restart` | Restarts the server |
| `forcerestart` | Kills the server immediately and restarts it |
| `lacfg` | Shows the current LocalAdmin configuration and the path of its configuration file |

:::: info Note
It is best to stop and restart your server with the buttons in the dashboard. `exit` and `restart` in the console are only an alternative. Only a start via the dashboard also runs the automatic updates. Restarts from the console (`restart`, `forcerestart`, `restartnextround` and `softrestart`) only restart the game server and do not install game updates.
::::

:::: warning Warning
`restart` restarts the entire server, not just the round. To restart the round, use `roundrestart` or its short form `rr`. `forcerestart` kills the server without a clean shutdown and is only meant for when the server no longer responds.
::::

## Hide the server from the server list

If your server is verified and listed in the public server list, you can temporarily remove it from the list via the console. These commands are entered with `!` and without `/`:

| Command | Description |
|---------|-------------|
| `!private` | Hides your verified server from the public server list |
| `!public` | Shows your server in the public server list again |

:::: info Note
These commands only work on verified servers. A server that is not verified does not appear in the public list anyway. To find out how to get your server verified, see the guide [Get Server Verified](get-server-verified.md).
::::

## Control rounds

| Command | Short form | Description |
|---------|------------|-------------|
| `roundrestart` | `rr` | Restarts the current round immediately |
| `forcestart` | `fs` | Starts the round immediately from the lobby |
| `/lobbylock` | `/ll` | Locks or unlocks the lobby: the round does not start until you remove the lock |
| `/roundlock` | `/rl` | Locks or unlocks the round end: the current round cannot end |
| `restartnextround` | `rnr` | Restarts the server as soon as the current round ends |
| `stopnextround` | `snr` | Stops the server as soon as the current round ends |
| `softrestart` | `sr` | Restarts the server immediately and tells all players to reconnect afterwards |

`forcestart` and `/lobbylock` only work in the lobby, before the round has started. `/lobbylock`, `/roundlock`, `restartnextround` and `stopnextround` are toggles: entering the command a second time cancels it. The console confirms the new state each time, e.g. `Server WILL restart after next round.` or `Server WON'T restart after next round.`

You can find more commands for controlling the round in the guide [Use Remote Admin](use-remote-admin.md).

:::: tip Tip
`restartnextround` is ideal for preparing a restart without interrupting your players, e.g. after you have changed a configuration file. The server only restarts once the current round is over anyway.
::::

## Reload the configuration without a restart

Many changes to the configuration files can be applied without restarting the server. You can find the basics of the files in the guide [Edit Config Files](edit-config-files.md).

| Command | Short form | Description |
|---------|------------|-------------|
| `config reload` | `cfg r` | Reloads the game configuration: `config_gameplay.txt`, [whitelist](set-up-whitelist.md), [reserved slots](set-up-reserved-slots.md), bans and [geoblocking](set-up-geoblocking.md) as well as the ranks from `config_remoteadmin.txt` |
| `/pm reload` | – | Reloads the rank file `config_remoteadmin.txt` and the game configuration |

This is how you apply a change without a restart:

1. <b>Find the game port</b><br>
   Open the dashboard of your server and note down the game port from the **Overview**.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Edit the configuration file</b><br>
   Open the desired file in the following directory, replace `<Port>` with your game port, make your changes and save the file:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

4. <b>Reload the configuration</b><br>
   Enter the following command in the console of the dashboard:

   ```
   config reload
   ```

   If the reload was successful, the server responds with:

   ```
   Configuration file successfully reloaded. Some of the changes will be applied in the next round.
   ```

:::: info Note
As the message says, some changes only take effect in the next round. If a change still does not take effect, restart the server via the dashboard. Plugin configurations of EXILED or LabAPI are not reloaded by `config reload`.
::::

### Apply a new rank immediately

If you have given a player a rank in `config_remoteadmin.txt` (see [Assign Ranks](assign-ranks.md)), they only receive it in the next round after `config reload`. If the player is currently online and should get the rank right away, also assign it with `/setgroup`:

| Command | Short form | Description |
|---------|------------|-------------|
| `/setgroup <playerID> <rank>` | `/sg` | Immediately assigns a rank to a player who is currently online |

1. <b>Find the player ID</b><br>
   Enter `players` in the console. You get a list of all players in the format `- Name: UserID [PlayerID]`.

2. <b>Assign the rank</b><br>
   Enter `/setgroup`, the player ID and the name of the rank, e.g.:

   ```
   /setgroup 2 admin
   ```

:::: warning Warning
`/setgroup` only assigns the rank temporarily. To assign a rank permanently, add the entry to `config_remoteadmin.txt`. The rank must also already be defined there, otherwise the console reports that the group does not exist. In addition, `/setgroup` only works if `online_mode: true` is set in `config_gameplay.txt` (default). Otherwise the console reports `Empty encryption key of player ...`.
::::

## Messages and CASSIE announcements

You can send messages to the players via the console. Broadcasts appear at the top of the screen, CASSIE announcements are voice announcements of the facility in-game. All commands in this section are Remote Admin commands and therefore need the `/`. You can find the full in-game command set in the guide [Use Remote Admin](use-remote-admin.md).

| Command | Short form | Description |
|---------|------------|-------------|
| `/bc <seconds> <text>` | – | Shows a message to all players for the given duration |
| `/pbc <playerID> <seconds> <text>` | – | Shows a message to specific players only |
| `/clearbc` | `/cl` | Removes all active broadcasts |
| `/cassie <text>` | – | Plays a CASSIE announcement with the usual chime before it |
| `/cassie_sl <text>` | – | Plays a CASSIE announcement without the chime |
| `/cassiewords` | – | Lists all words CASSIE can pronounce |
| `/clearcassie` | – | Clears the queue of CASSIE announcements |

With `/pbc`, you address several players by their player IDs separated by dots, e.g. `/pbc 2.5 10 Please wait in the lobby area`.

:::: tip Tip
CASSIE only speaks words that are on its word list. Check which words are available with `/cassiewords` before you write a longer announcement.
::::

:::: tip Example
This is how you announce a restart and have it carried out after the current round ends:

```
/bc 15 The server will restart after this round.
restartnextround
```
::::
