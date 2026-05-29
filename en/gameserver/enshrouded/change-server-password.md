---
description: Change the server password on an Enshrouded server
---

# How to Change the Server Password of Your Enshrouded Server

In Enshrouded, passwords are managed via **user groups** in the `enshrouded_server.json` file. Each group has its own password and its own permissions. Players receive the permissions of the group whose password they enter.

## Change the password

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open enshrouded_server.json</b><br>
   Open the file `enshrouded_server.json` in the main directory and find the `userGroups` section.

4. <b>Adjust the password</b><br>
   Enter your new password in the `password` field of the desired group:

   ```json
   "userGroups": [
       {
           "name": "Admin",
           "password": "YOUR_ADMIN_PASSWORD",
           "canKickBan": true,
           "canAccessInventories": true,
           "canEditWorld": true,
           "canEditBase": true,
           "canExtendBase": true,
           "reservedSlots": 0
       },
       {
           "name": "Friend",
           "password": "YOUR_FRIEND_PASSWORD",
           "canKickBan": false,
           "canAccessInventories": true,
           "canEditWorld": true,
           "canEditBase": true,
           "canExtendBase": false,
           "reservedSlots": 0
       },
       {
           "name": "Guest",
           "password": "YOUR_GUEST_PASSWORD",
           "canKickBan": false,
           "canAccessInventories": false,
           "canEditWorld": true,
           "canEditBase": false,
           "canExtendBase": false,
           "reservedSlots": 0
       },
       {
           "name": "Visitor",
           "password": "YOUR_VISITOR_PASSWORD",
           "canKickBan": false,
           "canAccessInventories": false,
           "canEditWorld": false,
           "canEditBase": false,
           "canExtendBase": false,
           "reservedSlots": 0
       }
   ]
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## User groups

| Group | Permissions |
|-------|-------------|
| `Admin` | Full rights: kick/ban, inventories, edit and extend world and base |
| `Friend` | Edit inventories, world and base — but cannot extend the base or kick/ban |
| `Guest` | Can only edit the world |
| `Visitor` | No editing rights — can only join and look around |

:::: warning Warning
Changes to `enshrouded_server.json` are overwritten if the server is running when you save. Always stop the server before editing.
::::

:::: tip Tip
To make a group accessible without a password, leave the `password` field empty (`""`). Players can then join that group without a password.
::::
