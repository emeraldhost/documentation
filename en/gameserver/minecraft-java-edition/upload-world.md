---
title: Uploading a world in Minecraft Java Edition
description: Step-by-step instructions on how to upload your own world in Minecraft Java Edition and configure the server accordingly.
---

# Upload world in Minecraft Java Edition: File Browser & SFTP

::: danger Attention
The world files must not be an archive such as ```.zip```. Unzip the world first.
:::

1. <strong>Stop your Minecraft Java Edition server.</strong>

2. <strong>Open your dashboard, select your server and go to the file browser **or** connect to your server via SFTP. You can find instructions here: [Establish SFTP connection](../establish-sftp-connection.md).</strong>

3. <strong>Upload your new world in the main folder, which also contains the ```world``` folder.</strong>

4. <strong>open the file ```server.properties```.</strong>

5. <strong>Look for the following entry:</strong>

    ```
    level-name=world
    ```

6. <strong>Change the value to the name of your uploaded world (e.g. ```level-name=NewWorld```).</strong>

7. <strong>Save the file and restart your server.</strong>

::: tip Tip
You can also run several worlds in parallel on your server, e.g. with plugins such as [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
:::
