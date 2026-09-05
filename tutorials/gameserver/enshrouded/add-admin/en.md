---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Enshrouded Server"
description: "Add an admin on an Enshrouded server"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/enshrouded/add-savegame", "gameserver/enshrouded/adjust-difficulty", "gameserver/enshrouded/change-server-password", "gameserver/enshrouded/control-automatic-updates"]
---

Enshrouded has no admin you enter in the dashboard. Admin permissions are granted through **user groups** in the `userGroups` section of the `enshrouded_server.json` file. Each group has its own permissions and its own password – whoever enters the admin group's password when joining plays with that group's permissions.

> [!NOTE]
> There is no admin password field in the dashboard. Permissions are managed exclusively in the `enshrouded_server.json` file.

## Grant admin permissions

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open enshrouded_server.json**\
   Open the file `enshrouded_server.json` in the main directory and find the `userGroups` section. The file already comes with ready-made groups, including `Admin`.

4. **Check the permissions of the Admin group**\
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

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the server discard your user groups.

5. **Set a password**\
   By default, the `password` field contains a randomly generated password. Replace it with one that only your admins know. You can find more about this under [Change Server Password](/tutorials/gameserver/enshrouded/change-server-password).

6. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Changes to `enshrouded_server.json` are overwritten if the server is running when you save. Always stop the server before editing.

> [!IMPORTANT]
> Never leave the `password` field of the Admin group empty. A group without a password is open to everyone – any player who finds your server would get full admin permissions.

## Join as admin

1. **Join the server**\
   Connect to your server as described under [Join Server](/tutorials/gameserver/enshrouded/join-server).

2. **Enter the admin password**\
   Enter the password of the `Admin` group in the password prompt. The password you enter decides which group you are assigned to and which permissions you receive.

> [!TIP]
> If you set `reservedSlots` to `1` or higher for a group, the server is shown as full to players of other groups as soon as they would take the last free slot. That way you can still join as an admin when your server is busy.

## Permissions of a group

| Key | Values | Meaning |
|-----|--------|---------|
| `name` | Text | Name of the group |
| `password` | Text | Password players use to join this group |
| `canKickBan` | `true` / `false` | Kick and ban players |
| `canAccessInventories` | `true` / `false` | Use chests and other containers |
| `canEditWorld` | `true` / `false` | Terraforming and other interactions with the world outside of bases |
| `canEditBase` | `true` / `false` | Add and remove blocks and props in bases |
| `canExtendBase` | `true` / `false` | Add, upgrade and remove Flame Altars – in other words, extend the base area |
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

> [!TIP]
> Give every group its own password. Only then is it unambiguous which permissions a player receives with their password.

> [!IMPORTANT]
> The `password` field at the very top of the file dates back to the time before user groups. If a password is set there, the game creates a group called `default` from it that receives the permissions of the `Friend` group – no admin permissions and no kick/ban. If the file is created anew while such a password is set, only this `default` group is created; the ready-made groups such as `Admin` are then missing. Leave this field empty (`""`) and grant admin permissions exclusively through the `userGroups` section.

> [!NOTE]
> When the server starts, the dashboard only rewrites the values `name`, `slotCount`, `queryPort` and `gameSettingsPreset`. Your `userGroups` section stays untouched.

To learn what an admin with the `canKickBan` permission can do in game, see [Kick & Ban Players](/tutorials/gameserver/enshrouded/kick-ban-players).
