---
slug: "use-tp-command"
language: "en"
title: "How to Use the Teleport Command on Your Minecraft Java Edition Server"
description: "Step-by-step instructions on how to use the teleport command on your Minecraft Java Edition server."
tags: []
date: "2025-06-20"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use Tp Command"
sort: 28
related: ["gameserver/minecraft/kick-ban-players", "gameserver/minecraft/upload-world", "gameserver/minecraft/link-java-with-bedrock", "gameserver/minecraft/setup-bluemap"]
---

## Use teleport commands in the in-game chat

> [!WARNING]
> Make sure you have the necessary rights to execute the command! Here you can find instructions on how to give yourself OP rights: [Instructions](/tutorials/gameserver/minecraft/grant-op-rights)

1. **Log in**\
   Log in to your Minecraft server.

2. **Open the chat**\
   Open the chat. By default with the `t` key.

3. **Enter the command**\
   Use one of the following teleport commands in the chat:

   ```text
   /tp <player name> # Teleports you to a player
   /tp <player name> <target player name> # Teleports a player to another player
   /tp <X> <Y> <Z> # Teleports you to a coordinate
   /tp <player name> <X> <Y> <Z> # Teleports a player to a coordinate
   ```

## Use teleport commands in the server console

> [!WARNING]
> In the console, all commands must be entered without `/`!

1. **Open the dashboard**\
   Open your dashboard and select your Minecraft Java Edition server.

2. **Open the console**\
   Navigate to the server console under the menu item "Overview".

3. **Enter the command**\
   Use one of the following teleport commands in the console:

   ```text
   tp <player name> <destination player name> # Teleports a player to another player
   tp <player name> <X> <Y> <Z> # Teleports a player to a coordinate
   ```
