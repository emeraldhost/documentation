---
slug: "configure-kill-feed"
language: "en"
title: "How to Configure the Kill Feed on Your Insurgency: Sandstorm Server"
description: "Configure the kill feed on an Insurgency: Sandstorm server"
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
short_title: "Configure Kill Feed"
sort: 11
related: ["gameserver/insurgency-sandstorm/change-scenario", "gameserver/insurgency-sandstorm/change-server-name", "gameserver/insurgency-sandstorm/configure-player-voting", "gameserver/insurgency-sandstorm/create-backup"]
---

The kill feed shows who eliminated whom. You can enable, disable or customize it – for example for a more competitive feel by showing less information.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   The `Game.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. **Add the settings**\
   Add the following section and adjust the desired values:

   ```ini
   [/Script/Insurgency.INSGameMode]
   bKillFeed=False
   bKillFeedSpectator=True
   bKillerInfo=True
   bKillerInfoRevealDistance=False
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `bKillFeed` | `False` | Enables the kill feed when set to `True` |
   | `bKillFeedSpectator` | `True` | Kill feed for dedicated spectators and replays only |
   | `bKillerInfo` | `True` | Shows the victim information such as the killer and weapon |
   | `bKillerInfoRevealDistance` | `False` | Also reveals the distance of the kill to the victim |

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Only edit `Game.ini` while the server is stopped. Changes to a running instance are overwritten on shutdown.
