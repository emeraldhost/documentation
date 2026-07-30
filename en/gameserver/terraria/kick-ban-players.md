---
description: Kick and ban players on a Terraria server
---

# How to Kick and Ban Players on Your Terraria Server

You kick and ban players via the **server console** in the dashboard. You always specify the **player name** the player joined the server with.

:::: info Note
The commands are entered in the server console **without** a leading forward slash, so `kick PlayerName` instead of `/kick PlayerName`. Regular Terraria does not have an in-game admin system – moderation runs exclusively through the server console.
::::

## Find the player name

```
playing
```

This command lists all currently connected players. Use the name exactly as shown there for the following commands.

## Kick a player

```
kick <PlayerName>
```

The player is removed from the server but can rejoin immediately.

## Ban a player

```
ban <PlayerName>
```

The player is removed from the server and added to the file `banlist.txt`.

:::: warning Caution
`ban` only works for players who are **currently connected** to the server. Terraria bans the IP address of the active connection – if the player is offline, the server does not know it. Kick or ban the player while they are online. Because the ban is tied to the IP address, the player can rejoin from a different IP address.
::::

## Unban a player

There is no `unban` command. To unban someone you edit the ban list via SFTP:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open banlist.txt</b><br>
   In the main directory of your server, open the file:

   ```
   /banlist.txt
   ```

4. <b>Remove the entry</b><br>
   Every ban consists of two lines: the player name and, below it, the banned IP address. Remove **both** lines of the player and save the file.

   :::: tip Example
   ```
   //PlayerName
   123.45.67.89
   ```
   ::::

5. <b>Start the server</b><br>
   Start your server so the ban list is read in again.

## Command overview

| Command | Description |
|---------|-------------|
| `playing` | Show connected players |
| `kick <PlayerName>` | Kick a player |
| `ban <PlayerName>` | Ban a player |
| `say <message>` | Send a message to all players |
| `help` | Show all console commands |
| `time` | Show the current in-game time |
| `save` | Save the world immediately |
| `exit` | Save the world and shut down the server |

:::: tip Tip
After banning someone, run `save` so the current state of the world is stored.
::::
