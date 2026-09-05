---
slug: "pause-game-time"
language: "en"
title: "How to Pause Game Time on a Hytale Server"
description: "Pause game time on a Hytale server"
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
short_title: "Pause Game Time"
sort: 21
related: ["gameserver/hytale/join-server", "gameserver/hytale/kick-ban-players", "gameserver/hytale/set-password", "gameserver/hytale/set-spawn-point"]
---

You can pause the game time so the time of day no longer changes. This is useful for building servers, events, or screenshots with perfect lighting.

> [!TIP]
> **Note**
>
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Pause Game Time via Configuration

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to:

   ```text
   /universe/worlds/<worldname>/config.json
   ```

   Replace `<worldname>` with the name of your world (e.g., `default`).

3. **Pause Game Time**\
   Find the `IsGameTimePaused` setting and change the value:

   ```json
   "IsGameTimePaused": true
   ```

   - `true` - Game time is paused
   - `false` - Game time runs normally (default)

4. **Set Time (optional)**\
   You can also set the current time before pausing:

   ```json
   "GameTime": 12.0
   ```

   (12.0 = noon)

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

5. **Start the Server**\
   Start your server for the changes to take effect.

## Example: Permanent Noon

```json
"IsGameTimePaused": true,
"GameTime": 12.0
```

## Example: Permanent Night

```json
"IsGameTimePaused": true,
"GameTime": 0.0
```

## Change Time via Command

Even with paused time, you can change the time via command:

```text
time noon
```

> [!TIP]
> **Note**
>
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/time noon`).

For more time commands, see [Change Time](/tutorials/gameserver/hytale/change-time).
