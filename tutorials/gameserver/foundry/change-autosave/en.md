---
slug: "change-autosave"
language: "en"
title: "How to Change the Autosave Interval on Your FOUNDRY Server"
description: "Change the autosave interval on a FOUNDRY server"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["foundry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Autosave"
sort: 1
related: ["gameserver/foundry/change-max-players", "gameserver/foundry/change-server-name", "gameserver/foundry/change-world-name", "gameserver/foundry/change-world-seed"]
---

FOUNDRY saves the game state automatically at regular intervals. The interval can be adjusted directly via the dashboard.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Set the interval**\
   Enter the desired value in seconds in the **Autosave Interval** field (e.g. `300` for 5 minutes).

4. **Restart the server**\
   Save the setting and restart your server.

> [!TIP]
> A very short interval (e.g. under 60 seconds) can cause brief lag spikes on larger factories. A very long interval increases the risk of losing progress. `300` (5 minutes) is a good compromise.
