---
description: 'How to upload your own world to an Enshrouded server'
---

# Upload savegame

## Prerequisites

- Access to the server folder (either via an SFTP connection or direct access to the server files)
    - You can find the SFTP access data in the overview of your game server.

## Steps

1. <b>Discover your local and server files</b>
   - On the left you see your local files, on the right the files of your server.

2. <b>Prepare files</b>
   - Locate your Enshrouded game save files on your computer. These are typically located in the Steam `userdata` folder under: `C:\Program Files (x86)\Steam\userdata\[YourSteamID]\1203620\remote`.
     - Replace `[YourSteamID]` with your SteamID64.
   - Identify the files representative of your world, usually named like `3bd85c7d` and `3bd85c7d_info`.

3. rename <b>files</b>
   - Rename the files for compatibility with your server. `3bd85c7d` should be renamed to `3ad85aea` and `3bd85c7d_info` should be renamed to `3ad85aea_info`.

4. <b>Stop server</b>
   - Stop your server via the web interface to prevent the server from automatically overwriting your upload.

6. <b>Navigate to storage folder</b>
   - Navigate to the save folder `savegame`.
     - If you have changed the default folder, navigate to the folder you selected for the saves.

7. <b>Upload files</b>
   - Transfer the renamed files (`3ad85aea` and `3ad85aea_info`) from your computer to the server's save directory, replacing existing files if necessary.

8. <b>Restart the server</b>
   - Restart your Enshrouded server. Your server should now load your world so that you can continue your adventure where you left off. All progress will be saved and can now be shared with friends or the community.

### Now you can continue your Enshrouded adventure on the server! With these steps you should be able to successfully transfer your Enshrouded savegame to the server
