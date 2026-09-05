---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Sons Of The Forest Server"
description: "Kick and ban players on a Sons Of The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/sons-of-the-forest/add-savegame", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/download-savegame", "gameserver/sons-of-the-forest/join-server"]
---

In Sons Of The Forest you kick and ban players directly in-game via the management menu. This requires you to be registered as a server owner.

> [!NOTE]
> Sons Of The Forest has **no console commands** for kicking or banning. Commands like `/kick` or `/ban` come from its predecessor The Forest and do not work here. Management is done exclusively through the in-game menu.

## Requirement

Your SteamID64 must be listed in the `ownerswhitelist.txt` file on the server. The [Add Admin](/tutorials/gameserver/sons-of-the-forest/add-admin) guide explains how to do this.

## Kick or ban a player

1. **Join the server**\
   Join your server with the Steam account whose SteamID64 is registered as an owner.

2. **Open the management menu**\
   Press `ESC` and switch to the **Players** tab. There you will see all currently connected players.

3. **Select the player**\
   Select the player you want to remove from the list.

4. **Kick or ban**\
   Use the management function for that player:

   - **Kick** removes the player from the server. They can rejoin afterwards.
   - **Ban** removes the player and blocks them from your server permanently.

> [!WARNING]
> **Caution**
>
> There is no documented way to undo a ban via a server file. Use bans deliberately and prefer the kick function for short-term measures.

> [!TIP]
> Both functions only work on players who are currently **connected**. A player who is already offline can no longer be selected in this menu.
