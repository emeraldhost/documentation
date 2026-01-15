---
description: Change maximum player count on a Hytale server
---

# How to Change the Maximum Player Count on a Hytale Server

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Change the Maximum Player Count

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Set Player Count</b><br>
   Find the `MaxPlayers` setting and change the value:
   ```json
   "MaxPlayers": 20
   ```

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

:::: warning Warning
A higher player count does not automatically mean the server can handle that many players. Available RAM is crucial for actual performance.
::::
