---
slug: "enable-seasonal-events"
language: "en"
title: "How to Enable Seasonal Events on Your Core Keeper Server"
description: "Enable seasonal events on a Core Keeper server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Seasonal Events"
sort: 14
related: ["gameserver/core-keeper/create-backup", "gameserver/core-keeper/download-savegame", "gameserver/core-keeper/join-server", "gameserver/core-keeper/set-server-password"]
---

By default, Core Keeper follows the real calendar for seasonal events. However, you can manually force a specific event.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Select event**\
   Enter the following in the **Additional Startup Parameters**:

   ```text
   -season EVENTNAME
   ```

   | Event | Value |
   |-------|-------|
   | No override (default) | `None` |
   | Easter | `Easter` |
   | Halloween | `Halloween` |
   | Christmas | `Christmas` |
   | Valentine's Day | `Valentine` |
   | Anniversary | `Anniversary` |
   | Cherry Blossom | `CherryBlossom` |
   | Lunar New Year | `LunarNewYear` |

   > [!TIP]
   > **Example**
   >
   > ```text
   > -season Halloween
   > ```

4. **Restart the server**\
   Save the setting and restart your server.

> [!NOTE]
> To return to the normal calendar, remove the `-season` parameter or set it to `None`.
