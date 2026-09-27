---
description: Change maximum player count on a Hytale server
---

# How to Change the Maximum Player Count on a Hytale Server

You can change the maximum player count with a command in the console or directly in the `config.json`. By default, `100` players are allowed.

## How to Change the Maximum Player Count via Command

1. <b>Open the dashboard</b><br>
   Open the dashboard of your Hytale server.

2. <b>Enter the command</b><br>
   Enter the following command in the console:
   ```
   maxplayers --amount=20
   ```

The new player count takes effect immediately and is saved to the `config.json` automatically. A restart is not required. Run `maxplayers` without anything else to show the current value.

:::: info Note
In the console, commands are entered without `/`. In-game with admin rights you need the `/` (e.g. `/maxplayers --amount=20`). The `--amount=` part is required, `maxplayers 20` does not work.
::::

## How to Change the Maximum Player Count in the config.json

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Set Player Count</b><br>
   Find the `MaxPlayers` setting and change the value:
   ```json
   "MaxPlayers": 20
   ```

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing — a single missing or extra comma is enough to stop the server from loading the config.json.
   ::::

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

:::: warning Warning
A higher player count does not automatically mean the server can handle that many players. Available RAM is crucial for actual performance.
::::
