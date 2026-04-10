---
description: Add bots on a Barotrauma server
---

# How to Add Bots on Your Barotrauma Server

You can add bots to fill empty crew slots on your server. Bots act as AI-controlled crew members and take on roles that are not occupied by players.

:::: warning Warning
Make sure your server is stopped before editing the config file.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open serversettings.xml</b><br>
   Open the file `serversettings.xml` at:

   ```
   /serversettings.xml
   ```

4. <b>Set bot count</b><br>
   Find the `BotCount` setting and set it to the desired default number of bots:

   ```xml
   BotCount="4"
   ```

5. <b>Set max bot count</b><br>
   Find the `MaxBotCount` setting and set it to the maximum number of bots allowed:

   ```xml
   MaxBotCount="8"
   ```

6. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
Bots automatically fill empty crew slots up to the configured `BotCount`. As players join, bots are removed to make room. The `MaxBotCount` limits how many bots can be present at once.
::::
