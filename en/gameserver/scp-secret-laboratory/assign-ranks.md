---
description: "Assign ranks on a SCP: Secret Laboratory server"
---

# How to Assign Ranks on Your SCP: Secret Laboratory Server

Using the `config_remoteadmin.txt` file you can grant players admin, moderator or owner rights on your server.

:::: warning Warning
The path to the configuration file contains your server port: `/config/<Port>/config_remoteadmin.txt`. Replace `<Port>` with the actual port of your server. You can find the port in the dashboard under **Overview**.
::::

## Assign a rank

1. <b>Find out the server port</b><br>
   Open the dashboard of your server and note the server port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the configuration file</b><br>
   Open the following file — replace `<Port>` with your server port:

   ```
   /config/<Port>/config_remoteadmin.txt
   ```

5. <b>Add an entry to the Members section</b><br>
   Find the `Members:` section and add your player using the following format:

   ```
   Members:
   - '76561198801452050@steam: owner'
   ```

   Replace the SteamID64 with your player's ID and set the desired rank (e.g. `owner`, `admin`, `moderator`). You can find your [SteamID64](../steamid64-find-out.md) using the linked guide.

6. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

## Default roles

| Role | Description |
|------|-------------|
| `owner` | Full access to all features |
| `admin` | Extensive admin rights |
| `moderator` | Limited moderation rights |

:::: warning Warning
The file `config_remoteadmin.txt` is picky about formatting. Make sure the indentation, quotes and dashes of each entry are correct, otherwise the server will fail to load the file properly.
::::

:::: info Note
Changes to the rank configuration only take effect after a server restart — there is no hot-reload.
::::
