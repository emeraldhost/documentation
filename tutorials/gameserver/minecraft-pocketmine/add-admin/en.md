---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Minecraft PocketMine Edition Server"
description: "Add an admin to a Minecraft PocketMine Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/minecraft-pocketmine/add-mods", "gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame"]
---

In PocketMine-MP admin rights are called **operator rights** (short: "OP"). They are granted with the `op` command. What you enter is the player's **Minecraft or Xbox player name** – not a UUID and not an XUID.

> [!NOTE]
> All operators are stored in the `ops.txt` file in the main folder of your server, one line per player. PocketMine-MP saves the names there in lower case automatically; when checking permissions, capitalisation does not matter.

## Add an admin via the console

This is the usual way if you do not have operator rights yourself yet.

1. **Open the console**\
   Open the **dashboard** of your server and switch to the console.

2. **Enter the command**\
   Enter the following command with the player name:

   ```text
   op <PlayerName>
   ```

3. **Wait for the confirmation**\
   The server confirms the change. If the player is online at that moment, they receive their operator rights immediately.

> [!NOTE]
> If the server does not react to the command in the console, try it with a leading `/` as well – so `/op <PlayerName>`.

## Add an admin in the game

> [!WARNING]
> To use this method you have to be an operator yourself already. Otherwise use the console.

1. **Join the server**\
   Connect to your server.

2. **Open the chat**\
   Open the chat with the key matching your device or through the chat icon.

3. **Enter the command**\
   Enter the following command:

   ```text
   /op <PlayerName>
   ```

## Remove admin rights

```text
/deop <PlayerName>
```

This removes the player's operator rights again and takes them out of `ops.txt`.

## Command overview

| Command | Description |
|---------|-------------|
| `/op <PlayerName>` | Gives the specified player operator status |
| `/deop <PlayerName>` | Takes the specified player's operator status |

> [!TIP]
> The player does **not** have to be online. You can also make a player an operator while they are away from the server – the only thing that matters is that the name is spelled correctly.

## Edit ops.txt directly

Alternatively you can edit the file yourself.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open ops.txt**\
   In the main folder of your server, open the file:

   ```text
   ops.txt
   ```

4. **Enter the player names**\
   Enter exactly one player name per line:

   ```text
   steve
   alex
   ```

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> The file is read on server start. Changes you make directly in the file while the server is running do not apply reliably and may be overwritten by the server. During operation, always use the `op` and `deop` commands.

## Fine-grained permissions

Operators receive all admin permissions in one bundle through the permission group `pocketmine.group.operator`, for example the `pocketmine.command.op.give` permission for granting operator rights to others.

> [!NOTE]
> PocketMine-MP itself offers no way to grant individual permissions – there is only "operator" or "not operator". If you want graded ranks or individual commands unlocked for specific players, you need a permission plugin for that. See [Add Mods](/tutorials/gameserver/minecraft-pocketmine/add-mods).

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/minecraft-pocketmine/kick-ban-players).
