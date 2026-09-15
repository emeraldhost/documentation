---
slug: "unban-players"
language: "en"
title: "How to Unban Players on Your RuneScape: Dragonwilds Server"
description: "Unban players on a RuneScape Dragonwilds server"
tags: []
date: "2026-09-15"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Unban Players"
sort: 12
related: ["gameserver/runescape-dragonwilds/kick-ban-players", "gameserver/runescape-dragonwilds/set-admin-password", "gameserver/runescape-dragonwilds/set-owner-id", "gameserver/runescape-dragonwilds/join-server"]
---
You can unban banned players via the in-game **Server Management** menu. However, this is only possible as the **Owner** of your server, not as an admin.

## Owner and admin

There are two roles on your server with different permissions:

| Role | Requirement | Ban (online) | Ban (offline) | Unban |
|------|-------------|--------------|---------------|-------|
| Owner | Player ID matches the [Owner ID](/tutorials/gameserver/runescape-dragonwilds/set-owner-id) in the dashboard | Yes | Yes | Yes |
| Admin | Entered the [admin password](/tutorials/gameserver/runescape-dragonwilds/set-admin-password) in Server Management | Yes (regular players only) | No | No |

## Unban a player

1. **Join as owner**\
   [Join your server](/tutorials/gameserver/runescape-dragonwilds/join-server) with the account whose Player ID is set as the Owner ID.

2. **Open the pause menu**\
   Press the pause button to open the menu.

3. **Open Server Management**\
   Navigate to **Settings** and select **Server Management**. Enter the admin password if prompted.

4. **Unban the player**\
   Select the player in the list of banned players and choose the option to unban them. The player can then join your server again.

> [!WARNING]
> As an admin, you **cannot unban** players. If an admin banned a player by mistake, the owner has to lift the ban.

> [!NOTE]
> Banned players currently do **not receive a notification** about the ban. They simply can no longer join your server and are not told why.

> [!TIP]
> **Revoke admin rights**
>
> Admin rights are not tied to individual players but apply to everyone who has entered the admin password – until it is changed. To revoke the rights of all current admins, change the [admin password](/tutorials/gameserver/runescape-dragonwilds/set-admin-password) in the dashboard and restart your server.
