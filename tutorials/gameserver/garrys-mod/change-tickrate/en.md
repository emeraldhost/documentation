---
slug: "change-tickrate"
language: "en"
title: "How to Change the Tickrate of Your Garry's Mod Server"
description: "Change the tickrate of a Garry's Mod server"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Tickrate"
sort: 15
related: ["gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/enable-lua-refresh", "gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/set-up-ttt"]
---
The **tickrate** defines how often per second your server calculates and updates the game world – movement, physics and hits. A tickrate of 66, for example, means 66 updates per second. You set it in the settings of your server.

## Which tickrate makes sense?

According to the [Garry's Mod Wiki](https://wiki.facepunch.com/gmod/Command_Line_Parameters), the recommended range is between **30 and 128**, and the engine's default value is **66.6666**. On your server, the tickrate is set to **22** by default, and you can enter a maximum of **100** in the settings.

The default value of 22 is below the recommended range, so physics and hit registration feel less smooth. For most servers, **33** or **66** is the better choice. As a guideline:

| Tickrate | Suitable for |
| -------- | ------------ |
| `33` | Servers with many props and entities (e.g., DarkRP or Sandbox) |
| `66` | Gamemodes with fast-paced combat (e.g., TTT) |

> [!WARNING]
> The higher the tickrate, the more often per second the server has to recalculate everything and the more CPU load each player and each entity causes. On roleplay and sandbox servers with many props, a high tickrate can therefore cause lag.

## Set the tickrate

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open the settings**\
   Navigate to the **Settings**.

3. **Enter the tickrate**\
   Enter the desired value in the **Tickrate** field, e.g., `33`. The server then starts with the parameter:

   ```text
   -tickrate 33
   ```

4. **Restart the server**\
   Save the setting and restart your server.

## Check the tickrate

1. **Open the console**\
   Open the console in the dashboard of your server while the server is running.

2. **Enter the command**\
   Enter the following command in the console:

   ```text
   lua_run print(1 / engine.TickInterval())
   ```

   The console then prints the current tickrate of your server. The value can differ slightly from the one you entered and have decimal places, e.g., `66.666668` instead of `66`.
