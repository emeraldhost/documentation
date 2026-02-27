---
description: Change structure damage on a Palworld server
---

# How to Change Structure Damage on Your Palworld Server

You can adjust how much damage buildings and structures take.

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

4. <b>Adjust structure damage</b><br>
   There are two parameters:

   **Damage to structures:**

   ```
   BuildObjectDamageRate=1.000000
   ```

   **Structure deterioration:**

   ```
   BuildObjectDeteriorationDamageRate=1.000000
   ```

5. <b>Start the server</b><br>
   Start your server.

**Examples:**

| Value | Description |
|-------|-------------|
| `0` | No damage / no deterioration |
| `0.5` | Half damage |
| `1.0` | Default |
| `2.0` | Double damage |
