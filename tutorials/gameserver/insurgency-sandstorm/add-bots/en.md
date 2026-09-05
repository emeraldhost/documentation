---
slug: "add-bots"
language: "en"
title: "How to Add Bots to Your Insurgency: Sandstorm Server"
description: "Add bots to an Insurgency: Sandstorm server"
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
short_title: "Add Bots"
sort: 2
related: ["gameserver/insurgency-sandstorm/add-admins", "gameserver/insurgency-sandstorm/add-mods", "gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/additional-parameters"]
---

Bots (AI enemies and teammates) are useful for filling co-op modes such as Checkpoint or adjusting the difficulty. The bot settings are configured in the `Game.ini` file.

## Configure bots

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   The `Game.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. **Add the co-op settings**\
   Add the following section and adjust the values:

   ```ini
   [/Script/Insurgency.INSCoopMode]
   bUseVehicleInsertion=True
   MinimumEnemies=5
   MaximumEnemies=40
   bBots=True
   FriendlyBotQuota=8
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `bUseVehicleInsertion` | `True` | Whether bots spawn in using vehicles |
   | `MinimumEnemies` | `5` | Minimum number of enemy bots |
   | `MaximumEnemies` | `40` | Maximum number of enemy bots |
   | `bBots` | `True` | Enables AI bots in co-op mode |
   | `FriendlyBotQuota` | `8` | Number of friendly bots in co-op modes |

5. **Add the versus settings (optional)**\
   For versus game modes, additionally add:

   ```ini
   [/Script/Insurgency.INSMultiplayerMode]
   bBots=True
   BotQuota=5
   ```

   | Setting | Default | Description |
   |---------|---------|-------------|
   | `bBots` | `True` | Enables bots for versus scenarios |
   | `BotQuota` | `5` | Fills each team with bots up to this value |

6. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Only edit `Game.ini` while the server is stopped. Changes to a running instance are overwritten on shutdown.
