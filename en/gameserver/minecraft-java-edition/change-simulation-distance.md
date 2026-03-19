---
description: Change simulation distance on a Minecraft Java Edition server
---

# How to Change the Simulation Distance on a Minecraft Java Server

## What is the simulation distance?

The `simulation-distance` determines how many chunks are actively calculated and simulated around the player. This means that processes such as redstone switching, mob movement and spawning, plant growth and ticks from fire, water and stalactite run in this area. Outside this area, chunks are only loaded as long as they are within the view distance - however, they are not actively processed, but are "frozen", so to speak.

## What effects does the setting have on my server?

- Values that are too low can result in farms, redstone or mobs outside the player not working.<br>
- Higher values mean more server load, especially with many players or large systems.

## How do I change the simulation distance?

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard. Open the file `server.properties`.

2. <b>Find the entry</b><br>
   Search for the following entry:

```
simulation-distance=10
```

3. <b>Change the value</b><br>
   Change the value as required (e.g. 6 or 4).

4. <b>Restart the server</b><br>
   Save the changes and restart the server.

:::: tip Recommendation
- 4-6 → For large numbers of players & low server performance<br>
- 10 → Standard setting<br>
- 10+ → Only with high server performance
::::
