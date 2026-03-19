---
description: Add an admin to an ARK Survival Evolved server
---

# How to Add an Admin to Your ARK Survival Evolved Server

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Method 1: Admin Password (temporary admin rights)

With this method you can log in as admin in-game by entering the admin password.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Set admin password</b><br>
   Enter a secure password in the **Admin Password** field and save the change.

4. <b>Restart the server</b><br>
   Restart your server for the change to take effect.

5. <b>Log in as admin</b><br>
   Open the console in-game with the `Tab` key and enter the following command:

   ```
   enablecheats YourAdminPassword
   ```

:::: info Note
Admin rights via the password are only valid for the current session. After reconnecting, you need to enter the command again.
::::

## Method 2: Permanent admins (SteamID64)

With this method you are permanently registered as admin and do not need to enter a password.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open file</b><br>
   Create or open the file `AllowedCheaterSteamIDs.txt` in the directory:

   ```
   /ShooterGame/Saved/AllowedCheaterSteamIDs.txt
   ```

4. <b>Enter SteamID64</b><br>
   Add your SteamID64 on a new line.

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
To add multiple admins, simply add multiple SteamID64s — each on a new line.
::::

## Important admin commands

| Command | Description |
|---------|-------------|
| `cheat fly` | Enable fly mode |
| `cheat walk` | Disable fly mode |
| `cheat god` | Enable invincibility |
| `cheat giveresources` | Receive 50 units of each resource |
| `cheat infinitestats` | Infinite stamina, health, etc. |
| `cheat destroywilddinos` | Remove all wild dinos |
