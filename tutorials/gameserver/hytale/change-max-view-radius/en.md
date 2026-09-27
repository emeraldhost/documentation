---
slug: "change-max-view-radius"
language: "en"
title: "How to Change the Max View Radius on a Hytale Server"
description: "Change Max View Radius on a Hytale server"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-09-27"
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

The max view radius determines the maximum number of chunks loaded around a player. A higher value means greater visibility, but also higher server load.

## How to Change the Max View Radius via Command

1. **Open dashboard**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   maxviewradius 16
   ```

   The server applies the new value immediately and saves it to the `config.json`. A restart is not required.

> [!NOTE]
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/maxviewradius 16`).

| Command | Description |
| ------- | ----------- |
| `maxviewradius` | Show the current value |
| `maxviewradius <chunks>` | Set a new value (1 to 32) |
| `maxviewradius reset` | Reset to the default value of 32 |

## How to Change the Max View Radius via Configuration

> [!NOTE]
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

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
| 32 | Default and maximum - high server load |
| 16 | Good balance between visibility and performance |
| 12 | Recommended by Hytale for performance and gameplay (384 blocks) |
| 10 | Low - for servers with many players or limited RAM |

> [!NOTE]
> The value must be between 1 and 32. The command rejects higher values, and the server automatically sets values outside this range in the `config.json` to the nearest limit on startup (e.g., 64 becomes 32).

> [!WARNING]
> A view radius that is too low can negatively affect the player experience, as players will see their surroundings late. A value below 10 is not recommended.
