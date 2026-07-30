---
description: Add a savegame to a Frozen Flame server
---

# How to Add a Savegame to Your Frozen Flame Server

The complete save of a Frozen Flame server lives in the `SaveGames` folder. You therefore always transfer it as a **whole folder**, for example when moving from another server or restoring an older state.

:::: info Note
You never enter a world or save name anywhere – Frozen Flame has no such setting. The server name has nothing to do with the savegame.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it constantly writes to the save.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /FrozenFlame/Saved/
   ```

4. <b>Secure the current save</b><br>
   Rename the existing `SaveGames` folder, for example to `SaveGames_old`, or download it beforehand.

   :::: warning Warning
   If you delete the folder, the current save of your server is gone. Create a [backup](create-backup.md) beforehand or download the existing save in case you want to switch back.
   ::::

5. <b>Upload the new save</b><br>
   Upload your `SaveGames` folder including all of its contents so that it ends up under the following path again:

   ```
   /FrozenFlame/Saved/SaveGames/
   ```

6. <b>Start the server</b><br>
   Start your server. The new save is now loaded.

:::: warning Warning
A save always belongs to the game mode it was created in. Only transfer saves between servers that load the same game mode – that is **Cataclysm** to **Cataclysm** and **Campaign** to **Campaign**.
::::

:::: tip Tip
Switching between two saves works most reliably when both of them come from a dedicated server – for example when moving to another server. See [Download savegame](download-savegame.md) for how to secure your current state.
::::

## Transferring a single player save

:::: danger Important
There is **no documented procedure** for transferring a single player or local co-op save to a dedicated server. For local play the developers only describe where the configuration file is stored – a way to move a local save onto a server is not documented anywhere. Only work with saves that come from a Frozen Flame server.
::::
