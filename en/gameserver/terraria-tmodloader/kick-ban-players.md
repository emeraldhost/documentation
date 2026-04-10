---
description: Kick and ban players on a Terraria tModLoader server
---

# How to Kick and Ban Players on Your Terraria tModLoader Server

You can kick and ban players using the server console.

## Kick a player

Enter the following command in the server console:

```
kick <name>
```

The player is removed from the server but can rejoin.

## Ban a player

```
ban <name>
```

The player is permanently banned from the server.

## Unban a player

There is no console command to unban players. You must edit the ban list manually:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Edit banlist.txt</b><br>
   Open the file `banlist.txt` and remove the line with the player's name.

4. <b>Start the server</b><br>
   Start your server.

## All commands

| Command | Description |
|---------|-------------|
| `kick <name>` | Kick a player |
| `ban <name>` | Ban a player |
