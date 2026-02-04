---
description: Change world seed on a Minecraft Java Edition server
---

# How to Change the World Seed on a Minecraft Java Server

::: danger Attention
Create a backup of your server beforehand, as the current world can be lost by changing the world seed.
:::

1. **Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.**

2. **Look for the following entry:**

    ```
    level-seed=
    ```

3. **Insert the desired world seed at this point (e.g. `level-seed=5101553622029575588`).**

4. **Save the changes and restart the server.**

::: tip Tip
You can find out the current world seed of an existing world by entering the command `/seed` in the game.
:::
