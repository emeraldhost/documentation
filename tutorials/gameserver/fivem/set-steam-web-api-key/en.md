---
slug: "set-steam-web-api-key"
language: "en"
title: "How to Set the Steam Web API Key on Your FiveM Server"
description: "Set the Steam Web API key on a FiveM server"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Steam Web API Key"
sort: 10
related: ["gameserver/fivem/kick-ban-players", "gameserver/fivem/set-license-key", "gameserver/fivem/set-port", "gameserver/fivem/set-up-database"]
---

With a **Steam Web API key**, your FiveM server can read the Steam identifier of your players (for example `steam:110000100000000`). Many scripts rely on this identifier, for instance for whitelists, bans or player management.

The key is optional. Without it, your server runs just fine, your players simply will not receive a Steam identifier.

> [!NOTE]
> The **Steam Web API Key** field contains `none` by default. With this value, your server skips Steam authentication entirely. Only enter a key if one of your scripts needs the Steam identifier.

## Generate Steam Web API key

1. **Open Steam page**\
   Open [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey) and sign in with your Steam account.

2. **Enter domain**\
   Steam asks for a domain name that will be associated with the key. Enter the domain of your project here.

   > [!NOTE]
   > A limited Steam account cannot create a Steam Web API key. [Steam Support](https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A) explains how to lift this restriction.

3. **Copy key**\
   Accept the terms of use, register the key and copy it.

## Set Steam Web API key

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter key**\
   Enter the copied key in the **Steam Web API Key** field.

   > [!NOTE]
   > The field must not be left empty. Enter either a valid key or `none`.

4. **Restart the server**\
   Save the setting and restart your server.

> [!NOTE]
> The value of this field is written to the `server.cfg` as `set steam_webApiKey` every time the server starts. If you edit that line via [SFTP](/tutorials/gameserver/establish-sftp-connection) instead, your change will be lost on the next start.

> [!WARNING]
> Treat the key like a password. It belongs to your Steam account, so never share it and never publish it in screenshots or excerpts of your `server.cfg`.

> [!TIP]
> If you change your Steam password or your Steam Guard settings, the key can become invalid. The server console will then show a message that your Steam Web API key may be invalid. In that case, generate a new key and set it again.
