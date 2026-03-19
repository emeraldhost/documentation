---
title: How to Upload a World to Your Minecraft Bedrock Edition Server
description: Step-by-step instructions on how to upload a world to your Minecraft Bedrock Edition server.
---

# How to Upload a World to Your Minecraft Bedrock Edition Server

:::: danger Attention
The world files must not be an archive such as ```.zip``` or ```.mcworld```. Unzip the world beforehand. Make sure that the folder name remains unchanged.
::::

1. <b>Stop server</b><br>
   Stop your Minecraft Bedrock Edition server.

2. <b>Open file browser</b><br>
   Open your dashboard, select your server and go to the file browser **or** connect to your server via SFTP. You can find instructions here: [Establish SFTP connection](../establish-sftp-connection.md).

3. <b>Upload world</b><br>
   Upload your new world into the ```worlds``` folder.

4. <b>Open config</b><br>
   Open the file ```server.properties``` in the main folder of your server.

5. <b>Find entry</b><br>
   Look for the following entry:

    ```
    level-name=Bedrock level
    ```

6. <b>Change value</b><br>
   Change the value to the name of your uploaded world (e.g. ```level-name=New World```).

7. <b>Save & restart</b><br>
   Save the file and restart your server.
