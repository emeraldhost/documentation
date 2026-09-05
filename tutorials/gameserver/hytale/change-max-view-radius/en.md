---
slug: "change-max-view-radius"
language: "en"
title: "How to Change the Max View Radius on a Hytale Server"
description: "Change Max View Radius on a Hytale server"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Max View Radius"
sort: 4
related: ["gameserver/hytale/change-gamemode", "gameserver/hytale/change-max-players", "gameserver/hytale/change-motd", "gameserver/hytale/change-server-name"]
---

The view radius determines how many chunks are loaded around a player. A higher value means greater visibility, but also higher server load.

> [!TIP]
> **Note**
>
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Change the Max View Radius

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the Configuration File**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the `config.json` file in the root directory.

3. **Adjust MaxViewRadius**\
   Find the `MaxViewRadius` setting and change the value:

   ```json
   "MaxViewRadius": 16
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the config.json.

4. **Start the Server**\
   Start your server for the changes to take effect.

## Recommended Values

| Value | Description |
| ----- | ----------- |
| 32 | Default - high server load |
| 16 | Recommended - good balance between visibility and performance |
| 10 | Low - for servers with many players or limited RAM |

> [!WARNING]
> A view radius that is too low can negatively affect the player experience, as players will see their surroundings late. A value below 10 is not recommended.
