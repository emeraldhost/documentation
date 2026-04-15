---
description: "Add an admin to an Empyrion: Galactic Survival server"
---

# How to Add an Admin on Your Empyrion: Galactic Survival Server

Admins on Empyrion servers are configured in the `adminconfig.yaml` file located in the `Saves` folder.

## Add an admin entry

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open adminconfig.yaml</b><br>
   Open the file:

   ```
   /Saves/adminconfig.yaml
   ```

4. <b>Add the entry</b><br>
   Add your player under the `Elevated:` section. Replace the SteamID64 and the desired permission level:

   ```yaml
   Elevated:
     - Id: 76561198801452050
       Permission: 9
   ```

   You can find your [SteamID64](../steamid64-find-out.md) using the linked guide.

5. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

## Permission levels

| Value | Role |
|-------|------|
| 3 | GameMaster |
| 6 | Moderator |
| 9 | Admin |

:::: tip Tip
If no admin is configured yet, a logged-in player can use the `initadmin` command in-game to become the initial admin. They can then add further admins via the `adminconfig.yaml` file.
::::

:::: info Note
Changes to `adminconfig.yaml` only take effect after a server restart.
::::
