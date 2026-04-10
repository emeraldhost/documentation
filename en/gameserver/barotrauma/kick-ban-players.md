---
description: Kick and ban players on a Barotrauma server
---

# How to Kick and Ban Players on Your Barotrauma Server

As an admin you can kick and ban players using the in-game console.

## Open the console

Press **F3** or the **tilde key (~)** to open the command console.

## Show connected players

Use the following command to list all connected players with their client IDs:

```
clientlist
```

## Kick a player

```
kick [name]
```

The player is removed from the server but can rejoin.

## Ban a player

You can ban a player by name or by client ID:

```
ban [name]
```

```
banid [client id]
```

The player is permanently banned from the server.

## Unban a player

To unban a player via the console:

```
unban [name]
```

You can also edit the ban list file directly:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open banlist.txt</b><br>
   Open the file `banlist.txt` at:

   ```
   /config/banlist.txt
   ```

4. <b>Remove player</b><br>
   Delete the line with the player you want to unban.

5. <b>Start the server</b><br>
   Start your server.

## All commands

| Command | Description |
|---------|-------------|
| `clientlist` | Show connected players with IDs |
| `kick [name]` | Kick a player |
| `ban [name]` | Ban a player by name |
| `banid [client id]` | Ban a player by client ID |
| `unban [name]` | Unban a player |
