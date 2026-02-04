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

1. <strong>Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.</strong>

2. <strong>Search for the following entry:</strong>

```
difficulty=easy
```

3. <strong>Change the value to the desired difficulty.</strong>

4. <strong>Save the changes and restart the server.</strong>
