---
slug: "change-public-server"
language: "en"
title: "How to Enable Public Server on Your Renown Server"
description: "Enable or disable Public Server on a Renown server"
tags: []
date: "2026-05-14"
visibility: "public"
cta: "gameserver"
product_keys: ["renown"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Public Server"
sort: 4
related: ["gameserver/renown/change-max-players", "gameserver/renown/change-private-session", "gameserver/renown/change-server-name", "gameserver/renown/create-backup"]
---

This setting determines whether your server is listed in the public server browser.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Adjust Public Server**\
   Set the **Public Server** field to the desired value:
   - `True` – public server is enabled
   - `False` – public server is disabled

4. **Restart the server**\
   Save the setting and restart your server.

> [!WARNING]
> **Important**
>
> If **Public Server** is set to `True`, [Private Session](/tutorials/gameserver/renown/change-private-session) must be set to `False`. The two settings are mutually exclusive.
