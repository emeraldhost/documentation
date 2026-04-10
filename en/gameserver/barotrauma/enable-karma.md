---
description: Enable the karma system on a Barotrauma server
---

# How to Enable the Karma System on Your Barotrauma Server

The karma system penalizes players who grief or damage their teammates. Players who harm others lose karma, which can result in automatic kicks or bans.

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

4. <b>Enable karma</b><br>
   Find the `KarmaEnabled` setting and set it to `true`:

   ```xml
   KarmaEnabled="true"
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
When karma is enabled, players start with a default karma value. Friendly fire, sabotage, and other harmful actions reduce a player's karma. If it drops too low, the server may automatically kick or ban them.
::::
