---
slug: "additional-parameters"
language: "en"
title: "How to Set Additional Parameters on Your Insurgency: Sandstorm Server"
description: "Set additional launch parameters on an Insurgency: Sandstorm server"
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
short_title: "Additional Parameters"
sort: 5
related: ["gameserver/insurgency-sandstorm/add-mods", "gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/change-gamemode-settings", "gameserver/insurgency-sandstorm/change-map"]
---

The **Additional Parameters** field lets you pass extra options to the server on startup – for example to enable mods, set the map rotation or a server password.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter parameters**\
   Enter the desired parameters in the **Additional Parameters** field and save the setting.

4. **Restart the server**\
   Restart your server for the change to take effect.

## Commonly used parameters

| Parameter | Description |
|-----------|-------------|
| `-Mods` | Enables the mod system (mod.io) – see [Add Mods](/tutorials/gameserver/insurgency-sandstorm/add-mods) |
| `-ModDownloadTravelTo=<map>?Scenario=<scenario>` | Downloads the mods and then travels to the specified (modded) map |
| `-Mutators=<Name1,Name2>` | Enables mutators (required by some mods) |
| `-Mapcycle=<file>` | Uses the specified map rotation file (without file extension) |

> [!NOTE]
> A full overview of all available parameters can be found in the official [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).
