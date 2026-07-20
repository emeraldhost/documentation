---
description: Change world seed on a Minecraft Java Edition server
---

# How to Change the World Seed on a Minecraft Java Server

The world seed determines how the world is generated. It only affects **newly generated worlds** — so you have to delete your existing world first.

:::: danger Attention
Your current world will be lost permanently. Create a [backup](create-backup.md) beforehand if you still need it later.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser.

3. <b>Set the seed</b><br>
   Open the file `server.properties`, find the entry `level-seed=` and enter the desired seed:

   ```
   level-seed=5101553622029575588
   ```

   Then save the file.

4. <b>Delete the old world</b><br>
   Delete the `world` folder in the main directory. Without this step the server simply keeps loading your old world and the new seed has no effect.

   :::: info Paper, Spigot & Purpur
   On these servers the Nether and the End are stored in separate folders. Also delete `world_nether` and `world_the_end` so those dimensions are regenerated as well.
   ::::

5. <b>Start the server</b><br>
   Start your server. The world is now generated using your new seed.

:::: tip Tip
You can find out the seed of an existing world by entering the command `/seed` in the game. If you leave `level-seed=` empty, the server generates a random seed.
::::
