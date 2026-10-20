---
slug: "enable-whitelist"
language: "en"
title: "How to Enable the Whitelist on a Minecraft Java Edition Server"
description: "Enable whitelist on a Minecraft Java Edition server"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Whitelist"
sort: 18
related: ["gameserver/minecraft/manage-players", "gameserver/minecraft/grant-op-rights", "gameserver/minecraft/kick-ban-players", "gameserver/minecraft/fix-server-crashes"]
---

A whitelist is a feature in Minecraft that allows server administrators to create a list of players who are allowed to enter the server, while other players are denied. It is used to keep out unwanted players and allow those who have been approved by the server operator.

> [!NOTE]
> In the dashboard, the whitelist is called "Allowlist". It is the same feature.

## Enable the whitelist in the dashboard (recommended)

The easiest way to enable the whitelist is the **Spieler** (Players) page of your server's dashboard. Every change is sent to the console as a command immediately.

1. **Open the players page**\
   Open your server's dashboard and click **Spieler** (Players) in the left sidebar.

2. **Add players**\
   Click **Spieler hinzufügen** (Add player), enter the **Minecraft-Name** (Minecraft name), choose **Allowlist** under **Wohin?** (Where to?) and click **Zur Allowlist hinzufügen** (Add to allowlist). It is best to add yourself first. Players who have been on your server before can also be added via **Zur Allowlist hinzufügen** in the **…** menu of the player list.

3. **Turn on the allowlist**\
   On the **Allowlist** card, turn on the **Allowlist aktiv** (Allowlist active) switch. From now on, only players on the list can join.

To learn how to remove players again and what else the page can do, see [Manage players](/tutorials/gameserver/minecraft/manage-players).

## Enable the whitelist by command

Alternatively, you can enable the whitelist by command. For this you need access to the server console or [OP rights](/tutorials/gameserver/minecraft/grant-op-rights) in the in-game chat, as well as the name of the player you want to add to the whitelist.

1. **Open console or chat**\
   Open the server console if you have direct access, or the in-game chat if you are connected via the game.

2. **Activate whitelist**\
   In the server console or in-game chat, enter the command to activate the whitelist. The command is:

   ```text
   /whitelist on
   ```

3. **Add player**\
   In the server console or in-game chat, enter the command to add someone to the whitelist. The command is:

   ```text
   /whitelist add player name
   ```

   Replace `player name` with the name of the player you want to add to the whitelist.

4. **Confirm command**\
   Press "Enter" or click on the button to execute the command.

> [!TIP]
> In the server console, enter the commands without `/`, e.g. `whitelist on`.
