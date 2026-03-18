---
description: Add an admin to a 7 Days to Die server
---

# How to Add an Admin to Your 7 Days to Die Server

You can add admins via the `serveradmin.xml` file or using a console command.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Add admin via serveradmin.xml

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open serveradmin.xml</b><br>
   Open the file `serveradmin.xml` in the directory:

   ```
   /Saves/serveradmin.xml
   ```

4. <b>Add admin</b><br>
   Add a new entry in the `<users>` section:

   ```xml
   <user platform="Steam" userid="YOUR_STEAMID64" name="YourName" permission_level="0" />
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

### Permission levels

| Level | Description |
|-------|-------------|
| `0` | Super admin (full control) |
| `1` | Admin (kick, ban, etc.) |
| `1000` | Default for regular players |

:::: info Note
An admin can execute any command whose permission level is **equal to or higher** than their own.
::::

## Add admin via console command

If you are already an admin, you can add more admins in-game. Press `F1` to open the console and enter:

```
admin add <SteamID64> <PermissionLevel> <Name>
```

:::: tip Example
```
admin add 76561198012345678 0 JohnDoe
```
::::
