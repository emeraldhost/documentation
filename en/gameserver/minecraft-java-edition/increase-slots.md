---
description: Increase slots on a Minecraft Java Edition server
---

# How to Increase the Slots on a Minecraft Java Server

1. <b>Open server.properties</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.

2. <b>Find the entry</b><br>
   Look for the following entry:

   ```
   max-players=20
   ```

3. <b>Change the value</b><br>
   Change the value to the desired number of players.

4. <b>Restart the server</b><br>
   Save the changes and restart the server.

:::: warning Warning
Make sure that your server has enough resources (such as RAM and CPU) to support the increased number of players.
::::
