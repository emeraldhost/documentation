---
slug: "change-server-name"
language: "en"
title: "How to Change the Server Name on Your Stormforge Server"
description: "Change the name of your Stormforge server using the Server Name field in the Config Editor."
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
short_title: "Change Server Name"
sort: 3
related: ["gameserver/stormforge/set-server-password", "gameserver/stormforge/change-max-players", "gameserver/stormforge/join-server"]
---

You set the name of your server in the **Config Editor**. On a new server it is `Stormforge Server by emeraldhost.de`.

1. **Open dashboard**\
   Open the **dashboard** of your server.

2. **Open the Config Editor**\
   Navigate to the **Config Editor**.

3. **Change server name**\
   Enter the desired name in the **Server Name** field and save the setting. The name can be at most 64 characters long, and the field must not be left empty.

4. **Restart the server**\
   Restart your server for the change to take effect.

> [!NOTE]
> Always change the name in the **Config Editor**. On every start the value of the **Server Name** field is written to the `settings.json` file as `serverName`. A manual change in the file is overwritten in the process.
