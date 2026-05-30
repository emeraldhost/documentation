---
description: Step-by-step instructions on how to change the tick distance on your Minecraft Bedrock Edition server.
---

# How to Change the Tick Distance on Your Minecraft Bedrock Edition Server

## What is the tick distance?

The `tick-distance` determines **the radius around the player in which entities and game mechanics are actively ticked**. This includes:

- **Other players and mobs** — they are only moved and shown within this area
- **Redstone circuits**
- **Mob spawning**
- **Plant growth** and ticks of fire, water, dripstone, etc.

Chunks outside the tick distance are still loaded (as long as they are inside the [`view-distance`](change-view-distance.md)), but are "frozen" — no active processing happens.

:::: warning Players only become visible up close?
This is the most common case: if the tick distance is set too low (e.g. `4`), other players and entities only appear when they get very close. Try setting the value to `8`–`10` and restart the server.
::::

## Effects on the server

- Values that are too low cause farms, redstone, mobs or players outside the player to be inactive.
- Higher values mean more server load, especially with many players or large systems.

## Change the tick distance

1. <b>Open dashboard</b><br>
   Go to your Minecraft Bedrock Edition server in the dashboard.

2. <b>Open file browser</b><br>
   Open the file browser.

3. <b>Open config</b><br>
   Open the file `server.properties`.

4. <b>Find entry</b><br>
   Search for the following entry:

   ```
   tick-distance=4
   ```

5. <b>Change value</b><br>
   Change the value as required (e.g. `8` or `6`).

6. <b>Save changes</b><br>
   Save the changes by clicking on "Save".

7. <b>Restart server</b><br>
   Restart the server so that the changes become active.

:::: tip Recommendation
- `4` → Default setting
- `6`–`8` → Balanced between farming & world exploration
- `10`–`12` → Only with strong server performance
::::

## Client-side note

For players to actually see the full distance, they also need to set the **render distance** in their **video settings** high enough. Otherwise they only see part of the world the server sends — no matter what you configure on the server side.
