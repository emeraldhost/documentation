---
description: Set a server password on a Satisfactory server
---

# How to Set a Password on Your Satisfactory Server

You can protect your server with a password so that only players with the password can join. The password is configured in the `Game.ini` file.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the file `Game.ini` at:

   ```
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Set password</b><br>
   Add the following content and set your desired password:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Your Server Name",AdminPassword="YourAdminPassword",PlayerPassword="YourServerPassword")
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
To remove the password and make the server public again, remove the `PlayerPassword` value or set it to empty: `PlayerPassword=""`.
::::

:::: info Note
If the file already contains an `mServerGameState` entry, add the `PlayerPassword` value there. Do not add a second entry.
::::
