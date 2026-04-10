---
description: Kick and ban players on a Minecraft Bedrock Edition server
---

# How to Kick and Ban Players on Your Minecraft Bedrock Edition Server

You can kick and ban players using in-game commands or via the server console.

## Kick a player

Enter the following command in the chat or server console:

```
/kick <name>
```

The player is removed from the server but can rejoin.

## Ban a player

```
/ban <name>
```

The player is permanently banned from the server.

## Unban a player

There is no in-game command for unbanning. You need to edit the ban list manually:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Edit ban list</b><br>
   Open the file `banned-players.json` or `banned-ips.json` and remove the player's entry.

4. <b>Start the server</b><br>
   Start your server.

## All commands

| Command | Description |
|---------|-------------|
| `/kick <name>` | Kick a player |
| `/ban <name>` | Ban a player |
