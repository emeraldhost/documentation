---
slug: "change-save-interval"
language: "en"
title: "How to Change the Save Interval on Your Soulmask Server"
description: "Change save interval on a Soulmask server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Save Interval"
sort: 15
related: ["gameserver/soulmask/kick-ban-players", "gameserver/soulmask/set-admin-password", "gameserver/soulmask/set-server-password", "gameserver/soulmask/setup-shifting-sands"]
---

You can configure how often the server saves the game state. There are two intervals:

- **Save Time Interval** – How often the server saves the world state to an in-memory database
- **Backup Interval** – How often the server writes the in-memory database to the `world.db` file on disk

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Adjust intervals**\
   Adjust the values in the following fields (in seconds):

   | Field | Default | Description |
   |-------|---------|-------------|
   | **Save Time Interval** | `600` (10 minutes) | Saves the world state to the in-memory database |
   | **Backup Interval** | `900` (15 minutes) | Writes the database to the `world.db` file |

4. **Restart the server**\
   Save the settings and restart your server.

> [!TIP]
> Lower values mean more frequent saves and less data loss in case of a crash, but may affect performance. The default values are recommended for most servers.
