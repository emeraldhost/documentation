---
description: Change server name on a Satisfactory server
---

# How to Change the Server Name on Your Satisfactory Server

The server name is configured in the `Game.ini` file.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the file `Game.ini` at:

   ```
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Change server name</b><br>
   Add the following content and adjust the name:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Your Server Name")
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
If the file already contains an `mServerGameState` entry, only change the `ServerSessionName` value there. Do not add a second entry.
::::
