---
slug: "change-max-players"
language: "en"
title: "How to Change the Max Players on Your Stormforge Server"
description: "Set how many players can join your Stormforge server using the Maximale Spieler field in the Config Editor."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Max Players"
sort: 2
related: ["gameserver/stormforge/set-server-password", "gameserver/stormforge/change-server-name", "gameserver/stormforge/join-server"]
---

In the **Config Editor** you set how many players can play on your server at the same time. Stormforge is designed for 1 to 8 players. The default value is `8`.

1. **Open dashboard**\
   Open the **dashboard** of your server.

2. **Open the Config Editor**\
   Navigate to the **Config Editor**.

3. **Adjust player count**\
   Enter the desired number in the **Maximale Spieler** (max players) field and save the setting. A whole number from 1 to 8 is allowed.

4. **Restart the server**\
   Restart your server for the change to take effect.

> [!NOTE]
> Always change the player count in the **Config Editor**. On every start the value of the **Maximale Spieler** field is written to the `settings.json` file as `maxPlayers`. A manual change in the file is overwritten in the process.
