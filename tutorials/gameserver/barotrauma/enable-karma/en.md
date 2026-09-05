---
slug: "enable-karma"
language: "en"
title: "How to Enable the Karma System on Your Barotrauma Server"
description: "Enable the karma system on a Barotrauma server"
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
short_title: "Enable Karma"
sort: 14
related: ["gameserver/barotrauma/enable-server-list", "gameserver/barotrauma/join-server", "gameserver/barotrauma/enable-traitors", "gameserver/barotrauma/kick-ban-players"]
---

The karma system penalizes players who grief or damage their teammates. Players who harm others lose karma, which can result in automatic kicks or bans.

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

4. **Enable karma**\
   Find the `KarmaEnabled` setting and set it to `true`:

   ```xml
   KarmaEnabled="true"
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> When karma is enabled, players start with a default karma value. Friendly fire, sabotage, and other harmful actions reduce a player's karma. If it drops too low, the server may automatically kick or ban them.
