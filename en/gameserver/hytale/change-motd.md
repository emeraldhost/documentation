---
description: Change MOTD on a Hytale server
---

# How to Change the MOTD on a Hytale Server

The MOTD (Message of the Day) is a short message displayed to players when they join.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Change the MOTD

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Set MOTD</b><br>
   Find the `MOTD` setting and change the value:
   ```json
   "MOTD": "Welcome to my server!"
   ```

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

The new MOTD will be displayed to players in the server list and when joining.
