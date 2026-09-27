---
description: Change MOTD on a Hytale server
---

# How to Change the MOTD on a Hytale Server

The MOTD (Message of the Day) is a short message displayed to players when they join.

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Change the MOTD

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Set MOTD</b><br>
   Find the `MOTD` setting and change the value:
   ```json
   "MOTD": "Welcome to my server!"
   ```

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the config.json.
   ::::

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

Your server sends the new MOTD to players who join it. By default, the value is empty (`"MOTD": ""`).

:::: info Note
**Server Discovery** does not show the MOTD but the description from your server profile in the Hytale account.
::::
