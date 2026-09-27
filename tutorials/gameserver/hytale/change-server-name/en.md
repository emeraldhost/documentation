---
slug: "change-server-name"
language: "en"
title: "How to Change the Server Name on a Hytale Server"
description: "Change server name on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Server Name"
sort: 6
related: ["gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd", "gameserver/hytale/change-time", "gameserver/hytale/change-weather"]
---

> [!NOTE]
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Change the Server Name

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the Configuration File**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the `config.json` file in the root directory.

3. **Change the Name**\
   Find the `ServerName` setting and change the value. By default it is set to `Hytale Server`:

   ```json
   "ServerName": "My Hytale Server"
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the configuration.

4. **Start the Server**\
   Start your server for the changes to take effect.

Your server sends the new name to players who join it.

> [!NOTE]
> In the saved server list, each player sees the name they chose themselves when adding the server (see [Join server](/tutorials/gameserver/hytale/join-server)). In **Server Discovery**, Hytale shows the name from your server profile in the Hytale account.
