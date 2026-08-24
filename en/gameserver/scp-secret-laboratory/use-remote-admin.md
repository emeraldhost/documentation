---
description: "Use Remote Admin on a SCP: Secret Laboratory server"
---

# How to Use Remote Admin on Your SCP: Secret Laboratory Server

Remote Admin is the built-in admin system of SCP: Secret Laboratory. It lets you moderate your server directly in-game — through a graphical panel or via text commands. Many commands can also be run without the game through the console of the dashboard.

## Prerequisite: a rank with Remote Admin rights

To use Remote Admin in-game you need a rank such as `owner`, `admin` or `moderator`. Ranks are assigned via the file `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt` — replace `<Port>` with the game port of your server shown in the dashboard under **Overview**. The guide [Assign Ranks](assign-ranks.md) walks you through it.

:::: info Note
Which features and commands a player may use depends on the permissions of their rank in `config_remoteadmin.txt`. Use the `perm` command in-game to see your own permissions.
::::

## Open the Remote Admin panel in-game

1. <b>Join the server</b><br>
   Connect to your server — see [Join Server](join-server.md).

2. <b>Open the panel</b><br>
   Press the **M** key (default binding). The Remote Admin panel opens.

3. <b>Select a player</b><br>
   The left column **Players** lists all connected players along with their player ID. Select one or more players, then use the features of the individual tabs.

The most important sections of the panel:

| Section | Function |
|---------|----------|
| Request Data | Look up a player's name, player ID, SteamID64, role and HP |
| Role Management | Assign a class to players (**SET CLASS**), e.g. to spawn a player as Tutorial |
| Inventory | Give items to players |
| Moderation | Mute/unmute players, block the intercom |
| Administration | Overwatch, god mode, bypass, teleport (**Bring**/**Go to**), heal, noclip |
| Round & Events | Start/restart the round, respawn MTF/Chaos, start/stop/detonate the Alpha Warhead |
| Map Control | Open, close, lock and unlock doors |

At the bottom of the panel you can open the **text-based Remote Admin console**. That is where you enter the commands from the table below.

## The most important commands

Players are addressed in commands by their player ID from the player list. Separate multiple IDs with periods, e.g. `forceclass 2.5 1`.

| Command | Description |
|---------|-------------|
| `roundrestart` | Restarts the current round immediately |
| `restartnextround` | Restarts the server as soon as the current round ends |
| `roundlock` | Locks/unlocks the round end — the round cannot end |
| `lobbylock` | Locks/unlocks the lobby — the next round will not start |
| `forcestart` | Forces the round to start from the lobby |
| `forceclass <playerID> <role>` | Forces a player to a role — by role ID or name (e.g. `1` = Class-D, `2` = Spectator, `14` = Tutorial) |
| `bc <seconds> <text>` | Broadcast: shows a message at the top of every player's screen |
| `cassie <text>` | Announcement over the C.A.S.S.I.E. voice system; `cassiewords` lists all available words |
| `warhead detonate` | Starts the Alpha Warhead detonation sequence |
| `warhead cancel` | Cancels the detonation sequence |
| `warhead instant` | Detonates the Alpha Warhead instantly |
| `decontamination force` | Starts the Light Containment Zone decontamination immediately |
| `noclip <playerID>` | Allows a player to use noclip; the player then toggles it themselves with their noclip key |
| `cleanup items` | Removes all dropped items from the map |
| `cleanup ragdolls` | Removes all ragdolls from the map |

:::: tip Tip
Use `help` to list all available commands and `help <command>` for details on a single command. This is always the most reliable reference, since the command list can change with game updates.
::::

:::: warning Warning
`roundrestart` and `warhead instant` take effect immediately and without warning for your players. It is best to announce such actions beforehand using `bc`.
::::

## Commands without the game: the console of the dashboard

The console in the dashboard is the server's LocalAdmin console. It has full permissions — you do not need an in-game rank to use it.

1. <b>Open the console</b><br>
   Open the dashboard of your server and switch to the console.

2. <b>Enter server commands directly</b><br>
   Commands like `roundrestart`, `forcestart`, `restartnextround` or `players` (player list with IDs) are entered as-is.

3. <b>Enter Remote Admin commands with a slash</b><br>
   All Remote Admin commands from the table above work with a leading `/`, e.g. `/bc 10 Server is restarting soon` or `/forceclass 2 1`.

This gives you three ways to control your server: the graphical Remote Admin panel in-game, the text-based Remote Admin console inside the panel, and the LocalAdmin console in the dashboard.

## Kick and ban players

Kicks and bans are also handled through Remote Admin — both via the panel and via commands. You can find all details in the guide [Kick & Ban Players](kick-and-ban-players.md).
