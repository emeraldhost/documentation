---
description: Adjust Minecraft Bedrock Edition Tick Distance correctly - Guide for your Minecraft server to optimize performance.
---

# Minecraft Bedrock Edition - Customize tick distance

Customize tick distance on your Minecraft Bedrock Edition server.

## What is the tick distance?

The ```tick-distance``` determines how many chunks are actively calculated and ticked around the player. This means that processes such as redstone switching, mob movement and spawning, plant growth and ticks from fire, water and stalactite run in this area. Outside this area, chunks are only loaded as long as they are within the view distance - however, they are not actively processed, but are "frozen", so to speak.

## What effects does the setting have on my server?

- Values that are too low can result in farms, redstone or mobs outside the player not working.<br>
- Higher values mean more server load, especially with many players or large systems.

## How do I change the tick distance?

1. <strong>Go to your Minecraft Bedrock Edition server in the dashboard</strong>.

2. <strong>Open the file browser</strong>.

3. <strong>Open the file ```server.properties```.</strong>

4. <strong>Search for the following entry:</strong>

    ```
    tick-distance=4
    ```

5. <strong>Change the value as required (e.g. 8 or 6)</strong>.

6. <strong>Save the changes by clicking on "Save"</strong>.

7. <strong>Restart the server so that the changes become active</strong>.

::: tip Recommendation

- 4 → Default setting<br>
- 6-8 → Balanced between farming & world exploration<br>
- 10-12 → Only with strong server performance
:::
