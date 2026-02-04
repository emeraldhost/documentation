---
description: Change view distance on a Minecraft Java Edition server
---

# How to Change the View Distance on a Minecraft Java Server

## What is the view distance?

The `view-distance` determines how many chunks a player can see around them. A chunk in Minecraft is an area of the world of 16x16 blocks. This means: If the view distance is set to 10, the player can see in a square of 21x21 chunks - i.e. 10 chunks in each direction. The view distance only affects the loading and display of the world, not the active calculation of e.g. mobs, redstone or the growth of plants.

## What effects does the setting have on my server?

- Higher values allow a larger world view.
- The more players are online at the same time, the greater the load on the server.
- Too high values can lead to stuttering, connection problems or high RAM utilization.

## How do I change the view distance?

1. **Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.**

2. **Look for the following entry:**

    ```
    view-distance=10
    ```

3. **Change the value as desired (e.g. 8 or 6).**

4. **Save the changes and restart the server.**

::: tip Recommendation

- 6-8 → For large numbers of players & low server performance
- 10 → Standard setting
- 10+ → Only with high server performance
:::
