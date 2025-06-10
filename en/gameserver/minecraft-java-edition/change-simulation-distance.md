---
description: Adjust Minecraft Java Edition Simulation Distance correctly - Instructions for Vanilla, Spigot, Bukkit, Paper, Folia, Purpur and Pufferfish Server to optimize performance.
---

# Minecraft Java Edition - Customize Simulation Distance

Customize simulation distance on your Minecraft Java Edition server.

## What is the simulation distance?

The ```simulation-distance``` determines how many chunks are actively calculated and simulated around the player. This means that processes such as redstone switching, mob movement and spawning, plant growth and ticks from fire, water and stalactite run in this area. Outside this area, chunks are only loaded as long as they are within the view distance - however, they are not actively processed, but are "frozen", so to speak.

## What effects does the setting have on my server?
- Values that are too low can result in farms, redstone or mobs outside the player not working.<br>
- Higher values mean more server load, especially with many players or large systems.

## How do I change the simulation distance?

1. <strong>Go to your Minecraft Java Edition server in the dashboard</strong>.

2. <strong>Open the file browser</strong>.

3. <strong>Open the file ```server.properties```.</strong>

4. <strong>Search for the following entry:</strong>

```
simulation-distance=10
```

5. <strong>Change the value as required (e.g. 6 or 4)</strong>.

6. <strong>Save the changes by clicking on "Save"</strong>.

7. <strong>Restart the server so that the changes become active</strong>.

::: tip Recommendation
- 4-6 → For large numbers of players & low server performance<br>
- 10 → Standard setting<br>
- 10+ → Only with high server performance
:::