---
description: Add mods to a Soulmask server
---

# How to Add Mods to Your Soulmask Server

You can add Steam Workshop mods to your server to enhance the gameplay experience.

:::: warning Warning
Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.
::::

## Download mods

1. <b>Subscribe in Steam Workshop</b><br>
   Open the [Steam Workshop for Soulmask](https://steamcommunity.com/app/2646460/workshop/) and subscribe to the desired mods.

2. <b>Find mod folders</b><br>
   The downloaded mods can be found on your PC at:

   ```
   %LOCALAPPDATA%\WS\Saved\Mods\
   ```

## Upload mods to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload mods</b><br>
   Upload the mod folders to the following directory:

   ```
   /WS/Saved/Mods/
   ```

4. <b>Start the server</b><br>
   Start your server.

:::: danger Important
All players must **subscribe to the same mods** via the Steam Workshop to be able to join the server.
::::
