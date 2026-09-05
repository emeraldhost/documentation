---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your BeamMP Server"
description: "Add an admin on a BeamMP server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["beammp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/beammp/add-mods", "gameserver/beammp/add-savegame", "gameserver/beammp/change-map", "gameserver/beammp/change-max-cars"]
---

BeamMP does not have a built-in admin system by default. Admins are managed via server-side Lua plugins.

## Install an Admin Plugin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Download a plugin**\
   Download an admin plugin from the BeamMP forum or a trusted source.

4. **Upload the plugin**\
   Upload the plugin to the following directory on your server:

   ```text
   /Resources/Server/
   ```

5. **Configure the plugin**\
   Open the plugin's configuration file and add the desired admins. The exact steps depend on the plugin you are using.

6. **Start the server**\
   Save all changes and start your server.

> [!WARNING]
> **Important**
>
> Only use plugins from trusted sources. Check the code or reviews before installing a plugin.

> [!NOTE]
> Since there is no standardized admin system, the available commands and permissions vary depending on the plugin used. Refer to the documentation of your chosen plugin for further details.
