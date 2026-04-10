---
description: Kick and ban players on a Valheim server
---

# How to Kick and Ban Players on Your Valheim Server

You can kick and ban players using the in-game console or edit the ban list manually via SFTP.

## Kick and ban players via console

Open the console with `F5` and enter the following commands:

### Kick a player

```
kick <name>
```

The player is removed from the server but can rejoin.

### Ban a player

```
ban <name>
```

The player is permanently banned from the server.

### Unban a player

```
unban <name>
```

## Edit ban list manually

You can also edit the ban list and permitted list directly via SFTP:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Edit files</b><br>
   Open the files at `/config/`:

   - `bannedlist.txt` – Banned players (one SteamID64 per line)
   - `permittedlist.txt` – Permitted players (one SteamID64 per line)

4. <b>Add or remove SteamID64</b><br>
   Add the player's SteamID64 on a new line or remove it.

5. <b>Start the server</b><br>
   Start your server.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## All commands

| Command | Description |
|---------|-------------|
| `kick <name>` | Kick a player |
| `ban <name>` | Ban a player |
| `unban <name>` | Unban a player |
