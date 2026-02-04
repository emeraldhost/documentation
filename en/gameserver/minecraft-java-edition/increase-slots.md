---
description: Increase slots on a Minecraft Java Edition server
---

# How to Increase the Slots on a Minecraft Java Server

1. **Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.**

2. **Look for the following entry:**

    ```
    max-players=20
    ```

3. **Change the value to the desired number of players.**

4. **Save the changes and restart the server.**

::: warning Warning
**Important:** Make sure that your server has enough resources (such as RAM and CPU) to support the increased number of players.
:::
