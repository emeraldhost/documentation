---
slug: "change-gamemode"
language: "en"
title: "Change the Game Mode on Your Minecraft Java Edition Server"
description: "Step-by-step instructions on how to change a player's game mode on your Minecraft Java Edition server using the in-game chat or the server console."
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
short_title: "Change gamemode"
sort: 36
related: ["gameserver/minecraft/setup-simple-voice-chat", "gameserver/minecraft/setup-squaremap", "gameserver/minecraft/moderate-server", "gameserver/minecraft/change-weather"]
---

> [!WARNING]
> Make sure you have the necessary rights to execute the command! Here you can find instructions on how to give yourself OP rights: [Instructions](/tutorials/gameserver/minecraft/grant-op-rights)

## Change the game mode via the in-game chat

1. **Open the chat**\
   Open the chat. By default with the `t` key.

2. **Enter the command**\
   Enter the following command to set the desired game mode:

    ```text
    /gamemode creative <player-name>   # Creative mode: fly and build freely
    /gamemode survival <player-name>   # Survival mode: normal gameplay without cheating
    /gamemode spectator <player-name>  # Spectator mode: fly through blocks, no interaction
    /gamemode adventure <player-name>  # Adventure mode: look only, no interaction
    ```

## Change the game mode via the server console

> [!WARNING]
> In the console, all commands must be entered without `/`!

1. **Select your server**\
   Open your dashboard and select your Minecraft Java Edition server.

2. **Open the console**\
   Navigate to the server console under the menu item "Overview".

3. **Enter the command**\
   Use one of the following game-mode commands in the console:

    ```text
    gamemode creative <player-name>   # Creative mode: fly and build freely
    gamemode survival <player-name>   # Survival mode: normal gameplay without cheating
    gamemode spectator <player-name>  # Spectator mode: fly through blocks, no interaction
    gamemode adventure <player-name>  # Adventure mode: look only, no interaction
    ```
