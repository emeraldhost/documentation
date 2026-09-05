---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your 7 Days to Die Server"
description: "Add an admin to a 7 Days to Die server"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 2
related: ["gameserver/7-days-to-die/activate-crossplay", "gameserver/7-days-to-die/add-mods", "gameserver/7-days-to-die/add-savegame", "gameserver/7-days-to-die/change-map"]
---

You can add admins via the `serveradmin.xml` file or using a console command.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Add admin via serveradmin.xml

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open serveradmin.xml**\
   Open the file `serveradmin.xml` in the directory:

   ```text
   /Saves/serveradmin.xml
   ```

4. **Add admin**\
   Add a new entry in the `<users>` section:

   ```xml
   <user platform="Steam" userid="YOUR_STEAMID64" name="YourName" permission_level="0" />
   ```

5. **Start the server**\
   Save the file and start your server.

### Permission levels

| Level | Description |
|-------|-------------|
| `0` | Super admin (full control) |
| `1` | Admin (kick, ban, etc.) |
| `1000` | Default for regular players |

> [!NOTE]
> An admin can execute any command whose permission level is **equal to or higher** than their own.

## Add admin via console command

If you are already an admin, you can add more admins in-game. Press `F1` to open the console and enter:

```text
admin add <SteamID64> <PermissionLevel> <Name>
```

> [!TIP]
> **Example**
>
> ```text
> admin add 76561198012345678 0 JohnDoe
> ```
