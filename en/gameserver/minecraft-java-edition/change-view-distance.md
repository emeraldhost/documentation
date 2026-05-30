---
description: Change view distance on a Minecraft Java Edition server
---

# How to Change the View Distance on a Minecraft Java Server

## What is the view distance?

The `view-distance` determines **how many chunks the server loads and sends to clients**. A chunk in Minecraft is an area of 16x16 blocks. With a view distance of 10, the player can see 10 chunks in each direction (a 21x21 chunk square).

The view distance only affects the **display** of the world — how far the landscape is visible. It does **not** control the active ticking of mobs, redstone or players.

:::: info Players or mobs only become visible up close?
That's not handled by `view-distance` but by [`simulation-distance`](change-simulation-distance.md). Entities are only ticked and shown within the area covered by the simulation distance.
::::

## Effects on the server

- Higher values allow a larger world view.
- The more players are online at the same time, the greater the load on the server.
- Values that are too high can cause stuttering, connection problems or high RAM usage.

## Change the view distance

1. <b>Open server.properties</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.

2. <b>Find the entry</b><br>
   Look for the following entry:

   ```
   view-distance=16
   ```

3. <b>Change the value</b><br>
   Change the value as desired (e.g. `8` or `12`).

4. <b>Restart the server</b><br>
   Save the changes and restart the server.

:::: tip Recommendation
- `6`–`8` → For large numbers of players & low server performance
- `16` → Default setting
- `16`+ → Only with high server performance
::::

## Client-side note

The server's view distance is the **upper limit** — the client cannot see further than the server sends. Players also need to set the **render distance** in their **video settings** high enough to actually see the full distance the server provides.
