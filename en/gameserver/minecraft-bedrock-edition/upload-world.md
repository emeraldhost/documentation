---
title: Uploading a world in Minecraft Bedrock Edition
description: Step-by-step instructions on how to upload your own world in Minecraft Bedrock Edition and configure the server correctly.
---

# Upload world in Minecraft Bedrock Edition: File Browser & SFTP

::: danger Attention
The world files must not be an archive such as ```.zip``` or ```.mcworld```. Unzip the world beforehand. Make sure that the folder name remains unchanged.
:::

1. <strong>Stop your Minecraft Bedrock Edition server.</strong>

2. <strong>Open your dashboard, select your server and go to the file browser **or** connect to your server via SFTP. You can find instructions here: [Establish SFTP connection](../establish-sftp-connection.md).</strong>

3. <strong>Upload your new world into the ```worlds``` folder.</strong>

4. <strong>Open the file ```server.properties``` in the main folder of your server.</strong>

5. <strong>Look for the following entry:</strong>

    ```
    level-name=Bedrock level
    ```

6. <strong>Change the value to the name of your uploaded world (e.g. ```level-name=New World```).</strong>

7. <strong>Save the file and restart your server.</strong>