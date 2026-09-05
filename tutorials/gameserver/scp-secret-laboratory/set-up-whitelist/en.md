---
slug: "set-up-whitelist"
language: "en"
title: "How to Set Up a Whitelist on Your SCP: Secret Laboratory Server"
description: "Set up a whitelist on a SCP: Secret Laboratory server"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Up Whitelist"
sort: 14
related: ["gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/set-up-reserved-slots", "gameserver/scp-secret-laboratory/set-up-server-info", "gameserver/scp-secret-laboratory/use-remote-admin"]
---

With a whitelist, only players you have explicitly listed can join – ideal for private community servers or events. The whitelist consists of two parts: the `enable_whitelist` option in the `config_gameplay.txt` file and the player list in the `UserIDWhitelist.txt` file. You can find the basics of editing the configuration files in the [Edit configuration files](/tutorials/gameserver/scp-secret-laboratory/edit-config-files) guide.

> [!WARNING]
> The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.

## Set up the whitelist

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Enable the whitelist**\
   Open the following file – replace `<Port>` with your game port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Find the `enable_whitelist` entry and change its value from `false` (default) to `true`:

   ```text
   enable_whitelist: true
   ```

5. **Add players to the whitelist**\
   In the same port folder, open the `UserIDWhitelist.txt` file:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/UserIDWhitelist.txt
   ```

   Add each allowed ID on its own line. Steam players are added in the format `SteamID64@steam`, Discord users in the format `DiscordID@discord`. Lines starting with `#` are comments – handy for noting the names that belong to the IDs:

   ```text
   # Max
   76561198012345678@steam
   # Moritz
   123456789012345678@discord
   ```

   You can find your [SteamID64](/tutorials/gameserver/steamid64-find-out) using the linked guide. It is the same ID format you also use when [assigning ranks](/tutorials/gameserver/scp-secret-laboratory/assign-ranks).

6. **Start the server**\
   Save both files and start your server via the dashboard.

> [!NOTE]
> Changes to the whitelist only take effect after a server restart – there is no hot-reload.

> [!TIP]
> Add your own ID to `UserIDWhitelist.txt` before enabling the whitelist – otherwise you will lock yourself out of your own server.
