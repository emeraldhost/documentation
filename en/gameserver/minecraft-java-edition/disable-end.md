---
description: Disable the End on a Minecraft Java Edition server
---

# How to Disable the End on a Minecraft Java Server

When the End is disabled, end portals stop working and players can no longer enter the End dimension. Players who are already in the End are moved back to the overworld on their next login.

:::: warning Warning
This setting is only available on **Bukkit-based servers** (Paper, Spigot, Purpur, Folia). On **Vanilla, Forge, Fabric and NeoForge**, the End cannot be disabled via a server setting — those platforms require a datapack or mod.
::::

## Disable the End (Paper / Spigot / Purpur / Folia)

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open bukkit.yml</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `bukkit.yml`.

3. <b>Find the entry</b><br>
   Inside the `settings` section, look for the following entry:

   ```yaml
   allow-end: true
   ```

4. <b>Change the value</b><br>
   Change the value to `false`:

   ```yaml
   allow-end: false
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
To re-enable the End, set the value back to `true` and restart the server. Existing End worlds (`world_the_end`) are preserved.
::::
