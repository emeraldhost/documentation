---
description: Change difficulty on a Minecraft Java Edition server
---

# How to Change the Difficulty on a Minecraft Java Server

## What is the difficulty?

The difficulty determines how challenging the game is. It affects mob damage, hunger and other gameplay mechanics.

| Value | Difficulty | Description |
|-------|-----------|-------------|
| `peaceful` | Peaceful | No hostile mobs, health regenerates quickly |
| `easy` | Easy | Hostile mobs spawn but deal low damage |
| `normal` | Normal | Default difficulty |
| `hard` | Hard | Mobs deal more damage, hunger can be lethal |

## How do I change the difficulty?

1. <b>Open server.properties</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.

2. <b>Find the entry</b><br>
   Search for the following entry:

   ```
   difficulty=easy
   ```

3. <b>Change the value</b><br>
   Change the value to the desired difficulty.

4. <b>Restart the server</b><br>
   Save the changes and restart the server.
