---
description: Change maximum dropped items on a Palworld server
---

# How to Change the Maximum Dropped Items on Your Palworld Server

You can set how many items can be on the ground at the same time.

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

4. <b>Adjust limit</b><br>
   Find the parameter `DropItemMaxNum` and adjust the value:

   ```
   DropItemMaxNum=3000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `1000` | Fewer items on the ground |
| `3000` | Default |
| `5000` | More items on the ground |

:::: warning Warning
High values can affect server performance.
::::
