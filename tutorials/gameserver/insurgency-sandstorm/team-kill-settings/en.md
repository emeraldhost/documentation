---
slug: "team-kill-settings"
language: "en"
title: "How to Adjust the Team Kill Settings on Your Insurgency: Sandstorm Server"
description: "Adjust the team kill settings on an Insurgency: Sandstorm server"
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
short_title: "Team Kill Settings"
sort: 22
related: ["gameserver/insurgency-sandstorm/set-map-cycle", "gameserver/insurgency-sandstorm/set-server-password", "gameserver/insurgency-sandstorm/setup-coop-server", "gameserver/insurgency-sandstorm/use-rcon"]
---

The team kill settings determine how strictly killing teammates is punished. Low penalties allow riskier playstyles, while stricter rules discourage intentional team killing.

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
   TeamKillLimit=3
   TeamKillGrace=0.2
   TeamKillReduceTime=90
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `TeamKillLimit` | `3` | Number of team kills before a player is kicked |
   | `TeamKillGrace` | `0.2` | "Grace timer" in seconds between team kills – additional kills don't count during this time |
   | `TeamKillReduceTime` | `90` | Time in seconds after which a player's team kill count is reduced by 1 |

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Only edit `Game.ini` while the server is stopped. Changes to a running instance are overwritten on shutdown.
