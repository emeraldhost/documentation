---
slug: "change-private-session"
language: "en"
title: "How to Enable Private Session on Your Renown Server"
description: "Enable or disable Private Session on a Renown server"
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
short_title: "Change Private Session"
sort: 3
related: ["gameserver/renown/change-map-rotation", "gameserver/renown/change-max-players", "gameserver/renown/change-public-server", "gameserver/renown/change-server-name"]
---

This setting determines whether your server runs as a private session.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Adjust Private Session**\
   Set the **Private Session** field to the desired value:
   - `True` – private session is enabled
   - `False` – private session is disabled

4. **Restart the server**\
   Save the setting and restart your server.

> [!WARNING]
> **Important**
>
> If **Private Session** is set to `False`, [Public Server](/tutorials/gameserver/renown/change-public-server) must be set to `True`. The two settings are mutually exclusive.
