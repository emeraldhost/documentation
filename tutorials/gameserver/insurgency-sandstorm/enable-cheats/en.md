---
slug: "enable-cheats"
language: "en"
title: "How to Enable Cheats on Your Insurgency: Sandstorm Server"
description: "Enable cheats on an Insurgency: Sandstorm server"
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
short_title: "Enable Cheats"
sort: 14
related: ["gameserver/insurgency-sandstorm/configure-player-voting", "gameserver/insurgency-sandstorm/create-backup", "gameserver/insurgency-sandstorm/join-server", "gameserver/insurgency-sandstorm/kick-ban-players"]
---

Cheats provide testing and diagnostic commands – for example to give yourself weapons, enable infinite ammo or slow motion. They are useful for testing server settings but should **not** be enabled during normal gameplay, as some commands provide a gameplay advantage.

1. **Open dashboard**\
   Open the dashboard of your server and navigate to the **Settings**.

2. **Enter the parameter**\
   Enter the following parameter in the **Additional Parameters** field:

   ```text
   -EnableCheats
   ```

3. **Restart the server**\
   Save the setting and restart your server.

> [!WARNING]
> Only enable cheats for testing purposes and remove the `-EnableCheats` parameter afterwards so that no gameplay advantages are possible on your server.
