---
slug: "set-gsl-token"
language: "en"
title: "How to Set the GSL Token on Your Insurgency: Sandstorm Server"
description: "Set the GSL Token on an Insurgency: Sandstorm server"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set GSL Token"
sort: 18
related: ["gameserver/insurgency-sandstorm/kick-ban-players", "gameserver/insurgency-sandstorm/set-game-stats-token", "gameserver/insurgency-sandstorm/set-map-cycle", "gameserver/insurgency-sandstorm/set-server-password"]
---

The GSL Token (Game Server Login Token) is required for your server to appear in the server list.

## Generate the token

1. **Open the Steam Game Server page**\
   Open [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) and sign in with your Steam account.

2. **Create a token**\
   Create a new token with the App ID **581320** (Insurgency: Sandstorm) and copy it.

## Set the token

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter the token**\
   Paste the token into the **GSL Token** field and save the setting.

4. **Restart the server**\
   Restart your server for the change to take effect.

> [!NOTE]
> A [Game Stats Token](/tutorials/gameserver/insurgency-sandstorm/set-game-stats-token) is also required for your server to appear in the server list.
