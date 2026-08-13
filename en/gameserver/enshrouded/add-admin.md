---
description: Add an admin on an Enshrouded server
---

# How to Add an Admin to Your Enshrouded Server

Enshrouded has no admin you enter in the dashboard. Admin permissions are granted through **user groups** in the `userGroups` section of the `enshrouded_server.json` file. Each group has its own permissions and its own password — whoever enters the admin group's password when joining plays with that group's permissions.

:::: info Note
There is no admin password field in the dashboard. Permissions are managed exclusively in the `enshrouded_server.json` file.
::::

## Grant admin permissions

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open enshrouded_server.json</b><br>
   Open the file `enshrouded_server.json` in the main directory and find the `userGroups` section. The file already comes with ready-made groups, including `Admin`.

4. <b>Check the permissions of the Admin group</b><br>
   All permissions in the `Admin` group should be set to `true`:

   ```json
   {
       "name": "Admin",
       "password": "YOUR_ADMIN_PASSWORD",
       "canKickBan": true,
       "canAccessInventories": true,
       "canEditWorld": true,
       "canEditBase": true,
       "canExtendBase": true,
       "reservedSlots": 0
   }
   ```

5. <b>Set a password</b><br>
   By default, the `password` field contains a randomly generated password. Replace it with one that only your admins know. You can find more about this under [Change Server Password](change-server-password.md).

6. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Changes to `enshrouded_server.json` are overwritten if the server is running when you save. Always stop the server before editing.
::::

:::: danger Important
Never leave the `password` field of the Admin group empty. A group without a password is open to everyone — any player who finds your server would get full admin permissions.
::::

## Join as admin

1. <b>Join the server</b><br>
   Connect to your server as described under [Join Server](join-server.md).

2. <b>Enter the admin password</b><br>
   Enter the password of the `Admin` group in the password prompt. The password you enter decides which group you are assigned to and which permissions you receive.

:::: tip Tip
If you set `reservedSlots` to `1` or higher for a group, the server is shown as full to players of other groups as soon as they would take the last free slot. That way you can still join as an admin when your server is busy.
::::

## Permissions of a group

| Key | Values | Meaning |
|-----|--------|---------|
| `name` | Text | Name of the group |
| `password` | Text | Password players use to join this group |
| `canKickBan` | `true` / `false` | Kick and ban players |
| `canAccessInventories` | `true` / `false` | Use chests and other containers |
| `canEditWorld` | `true` / `false` | Terraforming and other interactions with the world outside of bases |
| `canEditBase` | `true` / `false` | Add and remove blocks and props in bases |
| `canExtendBase` | `true` / `false` | Add, upgrade and remove Flame Altars — in other words, extend the base area |
| `reservedSlots` | Number | Slots reserved for this group |

These permissions only control bases, containers, the world outside of bases and moderation. Combat, looting, exploration and progress in the game world are explicitly allowed in the `Admin` and `Friend` groups.

## Create your own group

You can also create your own groups, for example a moderator group that may kick players but cannot place Flame Altars. To do so, add another entry with its own `name`, its own `password` and the desired permissions to the `userGroups` section:

```json
{
    "name": "Moderator",
    "password": "YOUR_MODERATOR_PASSWORD",
    "canKickBan": true,
    "canAccessInventories": true,
    "canEditWorld": true,
    "canEditBase": true,
    "canExtendBase": false,
    "reservedSlots": 0
}
```

:::: tip Tip
Give every group its own password. Only then is it unambiguous which permissions a player receives with their password.
::::

:::: danger Important
The `password` field at the very top of the file dates back to the time before user groups. If a password is set there, the game creates a group called `default` from it that receives the permissions of the `Friend` group — no admin permissions and no kick/ban. If the file is created anew while such a password is set, only this `default` group is created; the ready-made groups such as `Admin` are then missing. Leave this field empty (`""`) and grant admin permissions exclusively through the `userGroups` section.
::::

:::: info Note
When the server starts, the dashboard only rewrites the values `name`, `slotCount`, `queryPort` and `gameSettingsPreset`. Your `userGroups` section stays untouched.
::::

To learn what an admin with the `canKickBan` permission can do in game, see [Kick & Ban Players](kick-ban-players.md).
