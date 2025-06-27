---
description: 'How to upload your own world to a Valheim server'
---

# Add savegame to an Valheim server

## Prerequisites

- Access to the server folder (either via an SFTP connection or direct access to the server files)
    - You can find the SFTP access data in the overview of your game server.

## Steps

1. <b>Discover your local and server files</b>
    - On the left you see your local files, on the right the files of your server.

2nd <b>Start and enter your Valheim server first</b>
    * This is necessary to create the required folder structure for savegames.

3. <b>Find local Valheim savegame data</b>
    - Search for the `.fwl` and `.db` files in `C:\Users\Username\AppData\LocalLow\IronGate\Valheim`.

4. <b>Transfer the savegame data to the server</b>
    - Connect to your server via SFTP and navigate to the folder `.config\unity3d\IronGate\Valheim\worlds_local`.
    - Drag your local savegame files into this folder or use the upload function.

5. <b>Change the world name in the server</b>
    - Go to the basic settings of your server and change the world name from "world" to the name of your uploaded savegame files (without file extensions).

6. <b>Restart the server</b>
    - Restart the server and check that your world is loading correctly.

### Now you can enjoy your Valheim world! With these steps you should be able to successfully transfer your Valheim world to your Valheim server
