---
description: Disable the Nether on a Minecraft Java Edition server
---

# How to Disable the Nether on a Minecraft Java Server

When the Nether is disabled, nether portals stop working and players can no longer enter the Nether dimension. Players who are already in the Nether are moved back to the overworld on their next login.

:::: info Note
This setting is controlled via `server.properties` and works on all Java server variants — Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric and NeoForge.
::::

## Disable the Nether

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open server.properties</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.

3. <b>Find the entry</b><br>
   Search for the following entry:

   ```
   allow-nether=true
   ```

4. <b>Change the value</b><br>
   Change the value to `false`:

   ```
   allow-nether=false
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
To re-enable the Nether, set the value back to `true` and restart the server. Existing Nether worlds are preserved.
::::
