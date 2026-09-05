---
slug: "change-server-password"
language: "en"
title: "How to Change the Server Password of Your Enshrouded Server"
description: "Change the server password on an Enshrouded server"
tags: []
date: "2026-05-29"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Server Password"
sort: 4
related: ["gameserver/enshrouded/add-savegame", "gameserver/enshrouded/adjust-difficulty", "gameserver/enshrouded/control-automatic-updates", "gameserver/enshrouded/create-backup"]
---

In Enshrouded, passwords are managed via **user groups** in the `enshrouded_server.json` file. Each group has its own password and its own permissions. Players receive the permissions of the group whose password they enter.

## Change the password

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open enshrouded_server.json**\
   Open the file `enshrouded_server.json` in the main directory and find the `userGroups` section.

4. **Adjust the password**\
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

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the server discard your new passwords.

5. **Start the server**\
   Save the file and start your server.

## User groups

| Group | Permissions |
|-------|-------------|
| `Admin` | Full rights: kick/ban, inventories, edit and extend world and base |
| `Friend` | Edit inventories, world and base – but cannot extend the base or kick/ban |
| `Guest` | Can only edit the world |
| `Visitor` | No editing rights – can only join and look around |

> [!WARNING]
> Changes to `enshrouded_server.json` are overwritten if the server is running when you save. Always stop the server before editing.

> [!TIP]
> To make a group accessible without a password, leave the `password` field empty (`""`). Players can then join that group without a password.
