---
description: Change server name on a Hytale server
---

# How to Change the Server Name on a Hytale Server

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Change the Server Name

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Change the Name</b><br>
   Find the `Name` setting and change the value:
   ```json
   "Name": "My Hytale Server"
   ```

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

The new server name will be displayed in the server list.
