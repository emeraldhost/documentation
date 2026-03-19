---
description: Minecraft Bedrock Edition Adjust View Distance correctly - Guide for your Minecraft server to optimize performance and visibility.
---

# Minecraft Bedrock Edition - Customize View Distance

Customize View Distance on your Minecraft Bedrock Edition server.

## What is the view distance?

The ```view-distance``` determines how many chunks a player can see around them. A chunk in Minecraft is an area of the world of 16x16 blocks. This means: If the view distance is set to 10, the player can see in a square of 21x21 chunks - i.e. 10 chunks in each direction. The view distance only affects the loading and display of the world, not the active calculation of e.g. mobs, redstone or the growth of plants.

## What effects does the setting have on my server?

- Higher values allow a larger world view.
- The more players are online at the same time, the greater the load on the server.
- Too high values can lead to stuttering, connection problems or high RAM utilization.

## How do I change the view distance?

1. <b>Open dashboard</b><br>
   Go to your Minecraft Bedrock Edition server in the dashboard.

2. <b>Open file browser</b><br>
   Open the file browser.

3. <b>Open config</b><br>
   Open the file ```server.properties```.

4. <b>Find entry</b><br>
   Search for the following entry:

    ```
    view-distance=32
    ```

5. <b>Change value</b><br>
   Change the value as desired (e.g. 12 or 10).

6. <b>Save changes</b><br>
   Save the changes by clicking on "Save".

7. <b>Restart server</b><br>
   Restart the server so that the changes become active.

:::: tip Recommendation

- 6-8 → For large numbers of players & low server performance
- 10-12 → Balanced between performance and visibility
- 16-20 → Only with high server performance
- 32 → Standard setting
::::
