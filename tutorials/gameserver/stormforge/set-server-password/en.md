---
slug: "set-server-password"
language: "en"
title: "How to Set a Password on Your Stormforge Server"
description: "Protect your Stormforge server with a password using the Server Passwort field in the Config Editor."
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
short_title: "Set Server Password"
sort: 12
related: ["gameserver/stormforge/join-server", "gameserver/stormforge/change-max-players", "gameserver/stormforge/change-server-name"]
---

You can protect your server with a password so that only players with the password can join. On a new server no password is set.

## Set the password

1. **Open dashboard**\
   Open the **dashboard** of your server.

2. **Open the Config Editor**\
   Navigate to the **Config Editor**.

3. **Set password**\
   Enter the desired password in the **Server Passwort** (server password) field and save the setting.

4. **Restart the server**\
   Restart your server for the change to take effect.

> [!IMPORTANT]
> **Allowed characters**\
> The password can be at most 32 characters long. Allowed are letters without umlauts, digits and the characters `_ . ! ? @ # % + = -`. Spaces are not allowed.

Share the password with your fellow players. When joining, they enter it in the game in the **Server Password** field. The whole procedure is described in [Join Server](/tutorials/gameserver/stormforge/join-server).

> [!NOTE]
> Always change the password in the **Config Editor**. On every start the value of the **Server Passwort** field is written to the `settings.json` file as `password`. A manual change in the file is overwritten in the process.

## Remove the password

Clear the **Server Passwort** field, save the setting and restart your server. An empty field means: no password.

## Keep someone out

If you want to keep someone off your server, change the password and restart your server. The restart disconnects all players, and only those who know the new password can come back.

> [!TIP]
> How many players can join at the same time is set via [Change Max Players](/tutorials/gameserver/stormforge/change-max-players).
