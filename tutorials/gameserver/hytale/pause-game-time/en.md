---
slug: "pause-game-time"
language: "en"
title: "How to Pause Game Time on a Hytale Server"
description: "Pause game time on a Hytale server"
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
short_title: "Pause Game Time"
sort: 21
related: ["gameserver/hytale/join-server", "gameserver/hytale/kick-ban-players", "gameserver/hytale/set-password", "gameserver/hytale/set-spawn-point"]
---

You can pause the game time so the time of day no longer changes. This is useful for building servers, events, or screenshots with perfect lighting.

> [!NOTE]
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
   You can also set the current time before pausing. `GameTime` is a timestamp, and the time of day comes after the `T`:

   ```json
   "GameTime": "0001-01-01T12:00:00Z"
   ```

   (`12:00:00` = noon)

   The date before the `T` may be different on your server. Keep your existing date and only change the time.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

5. **Start the Server**\
   Start your server for the changes to take effect.

## Example: Permanent Noon

```json
"IsGameTimePaused": true,
"GameTime": "0001-01-01T12:00:00Z"
```

## Example: Permanent Night

```json
"IsGameTimePaused": true,
"GameTime": "0001-01-01T00:00:00Z"
```

## How to Pause Game Time via Command

With a command, you can pause the time while the server is running, without stopping it. Enter the following in the console of your dashboard:

```text
time pause --world default
```

Replace `default` with the name of your world. The server replies with `Time cycle paused in "default" at ...`. The command toggles: if you enter it again, time continues (`Time cycle resumed ...`).

If you want to set the state explicitly instead of toggling it, use:

```text
world settings timepaused set true --world default
```

With `false` instead of `true`, time continues again. In-game, admins use `/time pause` without `--world`, in which case the command applies to the world you are in.

> [!NOTE]
> While game time is paused, players cannot sleep. The game then shows `Sleeping is disabled because game time is paused in this world!`.

## Change Time via Command

Even with paused time, you can change the time via command:

```text
time noon --world default
```

> [!NOTE]
> Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game with admin rights, you need the `/` and can leave out `--world` (e.g., `/time noon`).

For more time commands, see [Change Time](/tutorials/gameserver/hytale/change-time).
