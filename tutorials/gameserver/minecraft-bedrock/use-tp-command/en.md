---
slug: "use-tp-command"
language: "en"
title: "How to Use the Teleport Command on Your Minecraft Bedrock Edition Server"
description: "Step-by-step instructions on how to use the teleport command on your Minecraft Bedrock Edition server."
tags: []
date: "2025-06-20"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use Tp Command"
sort: 18
related: ["gameserver/minecraft-bedrock/increase-slots", "gameserver/minecraft-bedrock/join-server", "gameserver/minecraft-bedrock/kick-ban-players", "gameserver/minecraft-bedrock/upload-world"]
---

## Use teleport commands in the in-game chat

> [!WARNING]
> Make sure you have the necessary rights to execute the command! Here you can find instructions on how to give yourself OP rights: [Instructions](/tutorials/gameserver/minecraft-bedrock/grant-op-rights)

1. **Log in**\
   Log in to your Minecraft server.

2. **Open chat**\
   Open the chat with the appropriate key for your platform:

    - **Windows 10:** `t`
    - **PlayStation & Xbox:** `D-Pad right`
    - **Switch:** `→ on the directional pad`
    - **Mobile (Android/iOS):** `Tap on the chat icon (speech bubble)`

3. **Teleport command**\
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

1. **Open dashboard**\
   Open your dashboard and select your Minecraft Bedrock Edition server.

2. **Open console**\
   Navigate to the server console under the menu item "Overview".

3. **Teleport command**\
   Use one of the following teleport commands in the console:

    ```text
    tp <player name> <destination player name> # Teleports a player to another player
    tp <player name> <X> <Y> <Z> # Teleports a player to a coordinate
    ```
