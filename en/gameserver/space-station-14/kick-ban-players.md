---
description: Kick and ban players on a Space Station 14 server
---

# How to Kick and Ban Players on Your Space Station 14 Server

In Space Station 14 you remove players through the in-game console. Bans are stored in the database of your server – you do not have to edit any file.

:::: info Note
You need admin rights to use these commands. For bans you additionally need the `Ban` permission. See [Add Admin](add-admin.md).
::::

## Use commands in the game

1. <b>Open the console</b><br>
   Press `~` in the game to open the console.

2. <b>Enter a command</b><br>
   Enter the desired command, for example:

   ```
   kick ExamplePlayer
   ```

:::: tip Tip
You can also reach kick, ban, ban list and notes without commands: press `F1` to open the ahelp window and use the **Kick**, **Ban**, **Ban list** and **Notes** buttons there.
::::

## Kick a player

```
kick <PlayerName> [<Reason>]
```

The player is disconnected from the server but can rejoin at any time. The reason is optional.

:::: info Note
`kick` expects the username of a currently connected player – the command does not accept a user ID.
::::

## Ban a player

```
ban <name or user ID> <reason> [<duration in minutes>]
```

Example for a 60 minute ban:

```
ban ExamplePlayer Griefing 60
```

:::: danger Important
If you leave out the duration or enter `0`, the ban is **permanent**. This is the most common mistake – specify a duration in minutes if the ban is supposed to expire again.
::::

:::: tip Tip
It is more convenient through the interface: `banpanel` opens the ban window, optionally right away for a specific player:

```
banpanel <name or user ID>
```

The command only works in the in-game console, not in the server console.
::::

## Lift a ban

1. <b>Find the ban ID</b><br>
   List the bans of a player:

   ```
   banlist <name or user ID>
   ```

   In the in-game console this opens a window listing all bans of the player together with their ID. In the server console one line per ban is printed instead, consisting of the ID and the reason – for example `12: Griefing`.

2. <b>Lift the ban</b><br>
   Lift the ban using its ID:

   ```
   pardon 12
   ```

:::: warning Warning
There is no command called `unban` in Space Station 14. A ban is always lifted with `pardon` and the matching ban ID, not with the player name.
::::

## Ban a player from a role

Instead of locking a player out completely, you can also ban them from a single job only:

```
roleban <name or user ID> <job> <reason> [<duration in minutes>]
```

A role ban is lifted using its own ID:

```
roleunban <role ban id>
```

The same rule applies here: no duration or `0` means permanent.

:::: info Note
As the job the command expects the internal ID of the role, not its displayed name. The in-game console suggests the valid IDs while you type.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `kick <PlayerName> [<Reason>]` | Disconnect a player from the server |
| `ban <name or user ID> <reason> [<minutes>]` | Ban a player, permanent without a duration |
| `banpanel [<name or user ID>]` | Open the ban window (in-game only) |
| `banlist <name or user ID>` | Show the bans of a player including the ban ID |
| `pardon <ban id>` | Lift a ban |
| `roleban <name or user ID> <job> <reason> [<minutes>]` | Ban a player from a job |
| `roleunban <role ban id>` | Lift a role ban |
| `ban_exemption_update <player> <flag> [<flag> …]` | Set exemptions from bans |
| `ban_exemption_get <player>` | Show the exemptions that are set |

:::: info Note
All commands in this table also work in the server console – the only exception is `banpanel`, which opens a window inside the game and therefore only runs there.
::::

:::: info Note
Bans and admin rights live together in the database inside the `data` folder of your server. Backing up that folder also backs up your ban list – see [Create Backup](create-backup.md).
::::
