---
slug: "change-map"
language: "en"
title: "How to Change the Map on Your Counter-Strike 2 Server"
description: "Change map on a Counter-Strike 2 server"
tags: []
date: "2026-04-03"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Map"
sort: 4
related: ["gameserver/counter-strike-2/add-workshop-maps", "gameserver/counter-strike-2/change-game-mode", "gameserver/counter-strike-2/configure-server", "gameserver/counter-strike-2/create-backup"]
---

## Change map via dashboard

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Select map**\
   Select the desired map from the **Map** dropdown.

4. **Restart the server**\
   Save the setting and restart your server.

## Available maps

| Map | Type |
|-----|------|
| `de_dust2` | Defusal |
| `de_mirage` | Defusal |
| `de_inferno` | Defusal |
| `de_nuke` | Defusal |
| `de_overpass` | Defusal |
| `de_ancient` | Defusal |
| `de_vertigo` | Defusal |
| `de_anubis` | Defusal |
| `de_train` | Defusal |
| `cs_office` | Hostage |
| `cs_italy` | Hostage |

## Change map via console

You can also change the map live via the **server console** in the dashboard:

```text
changelevel de_dust2
```
