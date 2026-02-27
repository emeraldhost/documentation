---
description: Change the drop rate on a Palworld server
---

# How to Change the Drop Rate on Your Palworld Server

You can adjust the amount of items dropped when gathering and from defeated enemies.

:::: warning Warning
Make sure your server is stopped before editing the config file. Changes to the `PalWorldSettings.ini` will otherwise be overwritten by the game.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open config file</b><br>
   Open the file `PalWorldSettings.ini` at:

   ```
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. <b>Adjust drop rate</b><br>
   There are two parameters for different drop types:

   **Resource drops** (mining, gathering):

   ```
   CollectionDropRate=1.000000
   ```

   **Enemy drops** (defeated enemies):

   ```
   EnemyDropItemRate=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `1.0` | Default |
| `2.0` | Double drops |
| `5.0` | 5x drops |
