---
slug: "teleport"
language: "en"
title: "How to Teleport Players on a The Bus Server"
description: "Teleport players on a The Bus server with a command"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Teleport"
sort: 20
related: ["gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players", "gameserver/the-bus/send-chat-messages", "gameserver/the-bus/spawn-bus"]
---

You can teleport players on your server to specific coordinates with a **command** in the in-game chat.

> [!NOTE]
> These commands require Owner or Admin permissions – see [Add Admin](/tutorials/gameserver/the-bus/add-admin). Enter them in the in-game chat. On our servers, the console in the dashboard only shows the server output and does not accept commands.

## How to Teleport a Player

1. **Open the in-game chat**\
   [Join your server](/tutorials/gameserver/the-bus/join-server) and open the in-game chat.

2. **Find the player name**\
   Use the following command to show all players on the server:

   ```text
   /list
   ```

3. **Teleport the player**\
   Enter the following command and replace `<player>` with the player's name and `<x>`, `<y>` and `<z>` with the target coordinates:

   ```text
   /tp <player> <x> <y> <z>
   ```

## How to Teleport a Player Directionally

With `/tpd`, you teleport a player directionally (listed in the server's command list as "teleport player directional"):

```text
/tpd <player> <x> <y> <z>
```

> [!TIP]
> How the server interprets the values for `/tpd` is not officially documented. Try the command with small values first. Use `/commands` to show all available commands.

## Command Overview

| Command | Description |
|---------|-------------|
| `/tp <player> <x> <y> <z>` | Teleport player to the coordinates |
| `/tpd <player> <x> <y> <z>` | Teleport player directionally |

For more commands, see [Configure Server](/tutorials/gameserver/the-bus/configure-server).
