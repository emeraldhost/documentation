---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your No One Survived Server"
description: "Add an admin to a No One Survived server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/no-one-survived/add-savegame", "gameserver/no-one-survived/change-game-settings", "gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup"]
---

No One Survived has **no admin list** and no way to grant rights via Steam IDs. Admin rights work exclusively through an **admin password**: whoever knows it can sign in as an admin in the game and open the admin panel.

> [!IMPORTANT]
> Everyone who knows the admin password has full admin access on your server – including spawning items, changing weather and time as well as kicking and banning players. Only share it with people you trust.

## Set the admin password

1. **Stop the server**\
   Stop your server via the dashboard. The setting is only read on server start.

2. **Enter the admin password**\
   Open the **dashboard** of your server and enter your desired password in the field for the admin password.

   > [!NOTE]
   > **Alternatively in the configuration file**
   >
   > If you cannot find a matching field in the dashboard, the value is stored in the following file:
   >
   > ```text
   > /WRSH/Saved/Config/WindowsServer/Game.ini
   > ```
   >
   > In the `[ServerSetting]` section you enter it like this:
   >
   > ```ini
   > [ServerSetting]
   > AdminPassword=MyAdminPassword
   > ```
   >
   > If you enter the value manually, it gets overwritten from the dashboard field on the next server start. That is why you should primarily use the dashboard.

3. **Start the server**\
   Save the change and start your server.

> [!WARNING]
> The admin password is **not** the server password. All players need the server password to join, the admin password grants admin rights. Use two different passwords.

> [!CAUTION]
> **Change the default password**
>
> If a preset admin password is still stored in the dashboard, make sure to change it. A known default password means that any player can gain admin rights on your server.

## Open the admin panel in the game

1. **Join the server**\
   Join your server – see [Join Server](/tutorials/gameserver/no-one-survived/join-server).

2. **Open the panel**\
   In the game, press `Alt` + `Shift` + `O` at the same time. Make sure it is the letter **O** and not the digit zero.

3. **Sign in**\
   Enter the admin password and confirm your input.

4. **Verify your admin rights**\
   If the panel opens with the tabs for items, the game world and the blacklist, the server recognised you as an admin. If nothing happens, the password was not applied – check the entry in the dashboard and restart the server.

> [!NOTE]
> **Close the panel**
>
> You close the panel again with the same key combination `Alt` + `Shift` + `O`.

## What can an admin do?

> [!NOTE]
> **Functions of the admin panel**
>
> The admin panel is operated with buttons, not with typed commands. Among other things you find there:
>
> - **Spawn items** – clothing, food, materials, tools, weapons and vehicles
> - **Control the game world** – weather, time of day, season as well as refreshing loot
> - **Adjust character attributes** – raise or lower individual stats of your character
> - **Blacklist** – kick, ban and unban players, see [Kick & Ban Players](/tutorials/gameserver/no-one-survived/kick-ban-players)
>
> Which tabs and buttons exactly are available can change with game updates.

> [!WARNING]
> **No chat or console commands**
>
> There are **no** documented admin commands in the chat, no server console and no RCON for No One Survived. Commonly circulated commands such as `AdminLogin`, `Kick <player>` or configuration values such as `AdminSteamIDs` do not appear in the official documentation – you grant admin rights exclusively through the admin password and the in-game admin panel.
