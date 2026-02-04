---
title: Uploading a world in Minecraft Java Edition
description: Upload a world to a Minecraft Java Edition server
---

# How to Upload a World on a Minecraft Java Server

::: danger Attention
The world files must not be an archive such as `.zip`. Unzip the world first.
:::

1. **Stop your Minecraft Java Edition server.**

2. **Connect to your server via [SFTP](../establish-sftp-connection.md).**

3. **Upload your new world in the main folder, which also contains the `world` folder.**

4. **Open the file `server.properties` and look for the following entry:**

    ```
    level-name=world
    ```

5. **Change the value to the name of your uploaded world (e.g. `level-name=NewWorld`).**

6. **Save the changes and restart the server.**

::: tip Tip
You can also run several worlds in parallel on your server, e.g. with plugins such as [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
:::
