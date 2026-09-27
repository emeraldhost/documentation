---
description: Change server name on a Hytale server
---

# How to Change the Server Name on a Hytale Server

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Change the Server Name

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Change the Name</b><br>
   Find the `ServerName` setting and change the value. By default it is set to `Hytale Server`:
   ```json
   "ServerName": "My Hytale Server"
   ```

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the configuration.
   ::::

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

Your server sends the new name to players who join it.

:::: info Note
In the saved server list, each player sees the name they chose themselves when adding the server (see [Join server](join-server.md)). In **Server Discovery**, Hytale shows the name from your server profile in the Hytale account.
::::
