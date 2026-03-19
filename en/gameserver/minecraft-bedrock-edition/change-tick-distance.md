---
description: Adjust Minecraft Bedrock Edition Tick Distance correctly - Guide for your Minecraft server to optimize performance.
---

# Minecraft Bedrock Edition - Customize tick distance

Customize tick distance on your Minecraft Bedrock Edition server.

## What is the tick distance?

The ```tick-distance``` determines how many chunks are actively calculated and ticked around the player. This means that processes such as redstone switching, mob movement and spawning, plant growth and ticks from fire, water and stalactite run in this area. Outside this area, chunks are only loaded as long as they are within the view distance - however, they are not actively processed, but are "frozen", so to speak.

## What effects does the setting have on my server?

- Values that are too low can result in farms, redstone or mobs outside the player not working.
- Higher values mean more server load, especially with many players or large systems.

## How do I change the tick distance?

1. <b>Open dashboard</b><br>
   Go to your Minecraft Bedrock Edition server in the dashboard.

2. <b>Open file browser</b><br>
   Open the file browser.

3. <b>Open config</b><br>
   Open the file ```server.properties```.

4. <b>Find entry</b><br>
   Search for the following entry:

    ```
    tick-distance=4
    ```

5. <b>Change value</b><br>
   Change the value as required (e.g. 8 or 6).

6. <b>Save changes</b><br>
   Save the changes by clicking on "Save".

7. <b>Restart server</b><br>
   Restart the server so that the changes become active.

:::: tip Recommendation

- 4 → Default setting
- 6-8 → Balanced between farming & world exploration
- 10-12 → Only with strong server performance
::::
