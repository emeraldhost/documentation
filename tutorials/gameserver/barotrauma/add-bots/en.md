---
slug: "add-bots"
language: "en"
title: "How to Add Bots on Your Barotrauma Server"
description: "Add bots on a Barotrauma server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Bots"
sort: 2
related: ["gameserver/barotrauma/add-admin", "gameserver/barotrauma/add-custom-ranks", "gameserver/barotrauma/add-mods", "gameserver/barotrauma/add-savegame"]
---

You can add bots to fill empty crew slots on your server. Bots act as AI-controlled crew members and take on roles that are not occupied by players.

> [!WARNING]
> Make sure your server is stopped before editing the config file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open serversettings.xml**\
   Open the file `serversettings.xml` at:

   ```text
   /serversettings.xml
   ```

4. **Set the bot count**\
   Look for the following entries and adjust the values:

   ```xml
   BotCount="4"
   MaxBotCount="8"
   ```

   | Setting | Description |
   |---------|-------------|
   | `BotCount` | Default number of bots added when a round starts |
   | `MaxBotCount` | Maximum number of bots allowed on the server |

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> Bots automatically fill empty crew slots up to the configured `BotCount`. As players join, bots are removed to make room. `MaxBotCount` limits how many bots can be present at once.
