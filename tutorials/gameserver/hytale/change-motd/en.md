---
slug: "change-motd"
language: "en"
title: "How to Change the MOTD on a Hytale Server"
description: "Change MOTD on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change MOTD"
sort: 5
related: ["gameserver/hytale/change-max-players", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-server-name", "gameserver/hytale/change-time"]
---

The MOTD (Message of the Day) is a short message displayed to players when they join.

> [!TIP]
> **Note**
>
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Change the MOTD

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the Configuration File**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the `config.json` file in the root directory.

3. **Set MOTD**\
   Find the `MOTD` setting and change the value:

   ```json
   "MOTD": "Welcome to my server!"
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the config.json.

4. **Start the Server**\
   Start your server for the changes to take effect.

The new MOTD will be displayed to players in the server list and when joining.
