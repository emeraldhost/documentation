---
description: Add an admin on a Valheim server
---

# How to Add an Admin on Your Valheim Server

You can add admins via the `adminlist.txt` file. Each admin is identified by their SteamID64.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../find-steamid64.md).
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open adminlist.txt</b><br>
   Open the file `adminlist.txt` in the following directory:

   ```
   /config/adminlist.txt
   ```

   If the file is not located there, check alternatively:

   ```
   /.config/unity3d/IronGate/Valheim/adminlist.txt
   ```

4. <b>Add SteamID64</b><br>
   Enter the SteamID64 of the player who should become admin. Add one SteamID64 per line:

   ```
   76561198012345678
   76561198087654321
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
Changes to `adminlist.txt` only take effect after a server restart.
::::
