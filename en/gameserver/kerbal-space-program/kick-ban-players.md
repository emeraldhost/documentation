---
description: Kick and ban players on a Kerbal Space Program server
---

# How to Kick and Ban Players on Your Kerbal Space Program Server

You remove players from a DarkMultiPlayer server with commands – either in the **console** of your dashboard or directly in the game if you are an admin. What you always specify is the **DMP player name**, not a SteamID64.

:::: warning Warning
In the console of your dashboard all commands need a leading slash. Text without `/` is sent as a chat message to all connected players.
::::

:::: info Note
To use the commands in the game you need admin rights. See [Add Admin](add-admin.md). In the `#Server` channel of the DMP chat you then enter the commands **without** the `/`.
::::

## Kick a player

```
/kick <player name> [reason]
```

The player is disconnected from the server but can rejoin at any time. The reason is optional and is shown to the player.

:::: tip Tip
The command `/listclients` shows the names of the currently connected players.
::::

## Ban a player

A ban is permanent – DarkMultiPlayer does not support time-limited bans. There are three independent variants:

| Command | Effect |
|---------|--------|
| `/ban <player name> [reason]` | Bans the player name |
| `/banip <IP address> [reason]` | Bans the IP address |
| `/bankey <public key> [reason]` | Bans the player's key |

:::: danger Important
The three ban types work independently of each other. Banning a player name does not stop anyone from coming back under a different name. For a reliable ban use `/bankey` in addition.
::::

:::: info Find the public key
You can find the key of a player via [SFTP](../establish-sftp-connection.md) in the file:

```
/Universe/Players/<player name>.txt
```
::::

## Ban lists

All bans end up in one file each inside the `/Config/` directory – one entry per line:

| File | Content |
|------|---------|
| `banned-players.txt` | Banned player names |
| `banned-ips.txt` | Banned IP addresses |
| `banned-keys.txt` | Banned public keys |

## Lift a ban

DarkMultiPlayer has no command for unbanning. You remove the entry directly from the corresponding file.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the file</b><br>
   Open the matching file in the `/Config/` directory:

   ```
   /Config/banned-players.txt
   ```

4. <b>Delete the line</b><br>
   Remove the line with the entry and save the file.

5. <b>Start the server</b><br>
   Start your server. The ban is lifted.

:::: warning Warning
The ban lists are only read on server start and are rewritten completely from memory on every change. If you edit the files while the server is running, your changes are overwritten. Always stop your server first.
::::

## Other useful commands

| Command | Description |
|---------|-------------|
| `/help` | Show all available commands |
| `/listclients` | Show connected players |
| `/countclients` | Show the number of connected players |
| `/connectionstats` | Show connection statistics |
| `/say <text>` | Send a message to all players |
| `/pm <player name> <text>` | Send a private message to a player |
| `/dekessler` | Remove abandoned debris from orbit |
| `/nukeksc` | Remove all vessels around the Kerbal Space Center |
| `/restart` | Restart the server |

:::: danger Important
`/nukeksc` and `/dekessler` delete vessels permanently. Create a [backup](create-backup.md) beforehand.
::::
