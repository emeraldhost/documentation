---
description: Use admin rights on a Frozen Flame server
---

# How to Get Admin Rights on Your Frozen Flame Server

Frozen Flame has **no admin list and no admin file**. Your server is managed exclusively through **RCON**: anyone who knows the RCON password and the RCON port can run every admin command.

:::: warning Warning
Treat the RCON password like an admin password and only share it with people you trust. There are no graduated permissions – everyone with RCON access has full control over your server.
::::

## RCON credentials

RCON is already set up on your server. You only need three details:

- <b>IP address</b><br>
  You can find the IP address of your server in the **dashboard**.

- <b>RCON Port</b><br>
  The RCON Port is also listed in the **dashboard** in the port overview. It is not the same as the Game Port or the Query Port.

- <b>RCON password</b><br>
  You can find and change the RCON password in the **dashboard**.

## Connect via RCON

1. <b>Open an RCON tool</b><br>
   Open an RCON client. The developers mention **mcrcon** as an example, but any other RCON client works as well.

2. <b>Enter the connection details</b><br>
   Enter the IP address of your server and the RCON Port from the dashboard.

3. <b>Enter the password</b><br>
   Enter the password in the following format:

   ```
   admin:<RCON password>
   ```

   :::: danger Important
   The `admin:` prefix is mandatory in the password field. If you enter only the plain RCON password, the server rejects the connection. This is the most common reason why the RCON login fails in Frozen Flame.
   ::::

4. <b>Run commands</b><br>
   Once connected you can run the admin commands.

## Admin commands at a glance

| Command | Description |
|---------|-------------|
| `Admin_GetOnlinePlayers` | Shows all currently connected players with their PlayerID |
| `Admin_ListUserProfiles` | Lists the player profiles stored on the server |
| `Admin_ChatMessage [Message]` | Sends a message to all players |
| `Admin_SaveWorld` | Saves the world |
| `Admin_SaveAll` | Saves the world and the player data |
| `Admin_ScheduleMaintenanceMode <Seconds>` | Schedules maintenance mode after the given time |
| `Admin_CancelScheduledMaintenanceMode` | Cancels the scheduled maintenance mode |
| `Admin_Restart` | Restarts the server |
| `Admin_Shutdown` | Shuts the server down |

:::: info Note
The angle and square brackets in the command overview are placeholders only. Do not type them – enter the value directly instead, for example `Admin_ScheduleMaintenanceMode 300`.
::::

:::: tip Tip
Run `Admin_SaveAll` before creating a backup or downloading your savegame so the current state is written to disk – see [Download savegame](download-savegame.md).
::::

:::: warning Warning
`Admin_Shutdown` stops the server process. Whether your server starts up again afterwards depends on the settings in your **dashboard** – restart it manually there if in doubt.
::::

## Admin rights for individual players

:::: danger Important
Neither an admin file nor an admin password for the client exists: only people with RCON access have admin rights. The command `Admin_AddUserProfile <PlayerID> <Role>` does assign a role to a player, but which role names are valid is **not documented anywhere** – so there is no reliable way to grant admin rights to individual players. Guides that mention a file such as `AdminList.txt` or a chat command to unlock admin rights are not backed by the official documentation for Frozen Flame.
::::

:::: tip Tip
To learn how to remove players from your server via RCON, see [Kick & Ban Players](kick-ban-players.md).
::::
