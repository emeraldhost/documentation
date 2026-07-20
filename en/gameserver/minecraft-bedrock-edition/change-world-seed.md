---
description: Step-by-step instructions on how to change the world seed on your Minecraft Bedrock Edition server.
---

# How to Change the World Seed on Your Minecraft Bedrock Edition Server

The world seed determines how the world is generated. It only affects **newly generated worlds** — so you have to delete your existing world first.

:::: danger Attention
Your current world will be lost permanently. Create a [backup](create-backup.md) beforehand if you still need it later.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open the file browser</b><br>
   Open the file browser or connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Set the seed</b><br>
   Open the file `server.properties`, find the entry `level-seed=` and enter the desired seed:

   ```
   level-seed=1111132940
   ```

   Then save the file.

4. <b>Delete the old world</b><br>
   Go to the `worlds` folder and delete the `Bedrock level` folder there. Without this step the server simply keeps loading your old world and the new seed has no effect.

   :::: info Note
   If you set a custom world name under `level-name` in the `server.properties`, the folder is named accordingly.
   ::::

5. <b>Start the server</b><br>
   Start your server. The world is now generated using your new seed.

:::: tip Tip
You can find out the seed of an existing world by entering the command `/seed` in the game. If you leave `level-seed=` empty, the server generates a random seed.
::::
