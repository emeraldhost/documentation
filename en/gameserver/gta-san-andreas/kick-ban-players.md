---
description: Kick and ban players on a GTA San Andreas server
---

# How to Kick and Ban Players on Your GTA San Andreas Server

You remove players via **RCON** — either in the game through the chat or through the external remote console.

:::: info Note
You have to be logged in as an RCON admin to do this. See [Add Admin](add-admin.md).
::::

## Find the player ID

Kick and ban work with the **player ID**, not with the name.

1. <b>Open the chat</b><br>
   Press `T` in the game to open the chat.

2. <b>List the players</b><br>
   Show all connected players with their ID, name, IP address and ping:

   ```
   /rcon players
   ```

3. <b>Note the ID</b><br>
   Note the ID of the player — and for a planned ban also their IP address.

:::: danger Important
The player ID is only a temporary slot. As soon as a player leaves the server, the same ID can immediately be assigned to somebody else. Always request the list again right before kicking or banning, otherwise you hit the wrong player.
::::

## Kick a player

```
/rcon kick 3
```

The player is disconnected from the server and can rejoin immediately.

## Ban a player

```
/rcon ban 3
```

The player is kicked from the server and locked out.

:::: warning Caution
The ban is applied to the **IP address**, even though you pass a player ID. There is no ban based on the player name or an account. With changing IP addresses a banned player can therefore come back — and on shared connections you may lock out several people at once.
::::

## Ban an IP address directly

```
/rcon banip 123.45.67.89
```

This locks out an IP address even when the player is not currently connected. Wildcards are accepted, so entire ranges can be blocked:

```
/rcon banip 123.45.67.*
```

## Lift a ban

```
/rcon unbanip 123.45.67.89
```

## Command overview

| Command | Description |
|---------|-------------|
| `/rcon players` | List all connected players with ID, name, IP address and ping |
| `/rcon kick <ID>` | Disconnect a player from the server |
| `/rcon ban <ID>` | Lock a player out (applied to their IP address) |
| `/rcon banip <IP>` | Ban an IP address, wildcards allowed |
| `/rcon unbanip <IP>` | Lift the ban for an IP address |
| `/rcon reloadbans` | Reload the ban list |

## Edit the ban list via SFTP

All bans are written to a file in the main directory of your server. Which one it is depends on your server variant:

| Server | File |
|--------|------|
| **open.mp** | `bans.json` |
| **SA-MP** | `samp.ban` |

Among other things the file contains the banned IP address as well as the date, time and the name or reason of the ban.

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Edit the file</b><br>
   Open the ban file in the main directory and remove or add the entries you want.

3. <b>Reload the list</b><br>
   Afterwards run the following command in the game:

   ```
   /rcon reloadbans
   ```

:::: warning Caution
After editing the ban file manually, `reloadbans` is mandatory. Without that command the running server keeps using the old list and may overwrite your changes again.
::::

:::: info Note
Whether an existing `samp.ban` is migrated to `bans.json` automatically when switching from SA-MP to open.mp is not documented. Check your ban list after switching and re-add missing entries with `/rcon banip`.
::::
