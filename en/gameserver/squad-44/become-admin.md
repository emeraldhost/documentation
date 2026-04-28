---
description: Become an admin on a Squad 44 server
---

# How to Become an Admin on Your Squad 44 Server

Using the `Admins.cfg` file you can assign admin or moderator rights to players. In Squad 44, admins are always assigned to a **group** that defines which permissions they have.

## Add an admin

1. <b>Find SteamID64</b><br>
   Note down the [SteamID64](../steamid64-find-out.md) of the player you want to give admin rights to.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open Admins.cfg</b><br>
   Navigate to and open the following file:

   ```
   /PostScriptum/ServerConfig/Admins.cfg
   ```

5. <b>Add admin entry</b><br>
   Add a new line at the end of the file in the following format:

   ```
   Admin=SteamID64:Group
   ```

   Example:

   ```
   Admin=76561198000000000:Admin
   ```

6. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

## Default groups

Squad 44 ships with predefined groups in `Admins.cfg` that you can use right away:

| Group | Description |
|-------|-------------|
| `Admin` | Full access to all admin functions |
| `Moderator` | Limited moderation rights (e.g. kick, ban, chat) |
| `Whitelist` | Reserved slot without admin rights |

## Create your own group

You can also create your own groups with custom permissions. Add a line in the following format:

```
Group=GroupName:Right1,Right2,Right3
```

Example:

```
Group=Helper:kick,ban,chat
```

You can then assign this group to players:

```
Admin=76561198000000000:Helper
```

:::: warning Warning
Pay attention to the exact spelling of group and permission names. Typos will cause the server to fail to load the file correctly.
::::

:::: info Note
Changes to `Admins.cfg` only take effect after restarting the server.
::::
