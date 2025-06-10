---
description: Minecraft Bedrock Edition Adjust View Distance correctly - Guide for your Minecraft server to optimize performance and visibility.
---

# Minecraft Bedrock Edition - Customize View Distance

Customize View Distance on your Minecraft Bedrock Edition server.

## What is the view distance?

The ```view-distance``` determines how many chunks a player can see around them. A chunk in Minecraft is an area of the world of 16x16 blocks. This means: If the view distance is set to 10, the player can see in a square of 21x21 chunks - i.e. 10 chunks in each direction. The view distance only affects the loading and display of the world, not the active calculation of e.g. mobs, redstone or the growth of plants.

## What effects does the setting have on my server?
- Higher values allow a larger world view.<br>
- The more players are online at the same time, the greater the load on the server.<br>
- Too high values can lead to stuttering, connection problems or high RAM utilization.

## How do I change the view distance?

1. <strong>Go to your Minecraft Bedrock Edition server in the dashboard</strong>.

2. <strong>Open the file browser</strong>.

3. <strong>Open the file ```server.properties```.</strong>

4. <strong>Search for the following entry:</strong>

```
view-distance=32
```

5. <strong>Change the value as desired (e.g. 12 or 10)</strong>.

6. <strong>Save the changes by clicking on "Save"</strong>.

7. <strong>Restart the server so that the changes become active</strong>.

::: tip recommendation
- 6-8 → For large numbers of players & low server performance<br>
- 10-12 → Balanced between performance and visibility<br>
- 16-20 → Only with high server performance<br>
- 32 → Standard setting
:::