---
slug: "moderate-server"
language: "en"
title: "Moderate Your Minecraft Java Edition Server"
description: "Step-by-step guide on how to moderate your Minecraft Java Edition server via the in-game chat or the server console."
tags: []
date: "2025-08-09"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Moderate server"
sort: 37
related: ["gameserver/minecraft/setup-simple-voice-chat", "gameserver/minecraft/setup-squaremap", "gameserver/minecraft/change-gamemode", "gameserver/minecraft/change-weather"]
---

> [!WARNING]
> Make sure you have the permissions required to run the command. You can find a guide on how to grant yourself OP rights here: [Guide](/tutorials/gameserver/minecraft/grant-op-rights)

## Moderate the server via the in-game chat

1. **Open the chat**\
   Open the chat. By default, press the `T` key.

2. **Enter a command**\
   Use one of the following moderation commands in the chat:

    ```text
    /ban <player> [<reason>]    # Bans the player from the server
    /ban-ip <player | IP address> [<reason>]    # Bans the player's IP from the server
    /pardon <player>    # Unbans the player from the server
    /pardon-ip <IP address>    # Unbans the player's IP from the server
    /kick <player> [<reason>]    # Kicks the chosen player from the server
    ```

## Moderate the server via the server console

> [!WARNING]
> In the console, all commands must be entered without the leading `/`.

1. **Select your server**\
   Open your dashboard and select your Minecraft Java Edition server.

2. **Open the console**\
   Navigate to the server console under the "Overview" menu item.

3. **Enter a command**\
   Use one of the following moderation commands in the console:

    ```text
    ban <player> [<reason>]    # Bans the player from the server
    ban-ip <player | IP address> [<reason>]    # Bans the player's IP from the server
    pardon <player>    # Unbans the player from the server
    pardon-ip <IP address>    # Unbans the player's IP from the server
    kick <player> [<reason>]    # Kicks the chosen player from the server
    ```
