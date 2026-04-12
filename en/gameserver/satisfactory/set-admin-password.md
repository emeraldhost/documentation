---
description: Set an admin password on a Satisfactory server
---

# How to Set an Admin Password on Your Satisfactory Server

The admin password is required to log in as an administrator in-game. It is configured in the `Game.ini` file.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the file `Game.ini` at:

   ```
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Set admin password</b><br>
   Add the following content and set your desired password:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Your Server Name",AdminPassword="YourAdminPassword")
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
Only share the admin password with trusted players. Anyone with the password can grant themselves administrator privileges.
::::

:::: info Note
If the file already contains an `mServerGameState` entry, only change the `AdminPassword` value there. Do not add a second entry.
::::
