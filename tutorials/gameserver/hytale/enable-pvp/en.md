---
slug: "enable-pvp"
language: "en"
title: "How to Enable PvP on a Hytale Server"
description: "Enable or disable PvP on a Hytale server"
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
short_title: "Enable PvP"
sort: 14
related: ["gameserver/hytale/download-world", "gameserver/hytale/enable-fall-damage", "gameserver/hytale/enable-whitelist", "gameserver/hytale/improve-performance"]
---

PvP (Player versus Player) allows players to fight against each other. This setting is configured per world and is disabled by default.

> [!NOTE]
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Enable or Disable PvP via Configuration

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to:

   ```text
   /universe/worlds/<worldname>/config.json
   ```

   Replace `<worldname>` with the name of your world (e.g., `default`).

3. **Change the PvP Setting**\
   Find the `IsPvpEnabled` setting and change the value:

   ```json
   "IsPvpEnabled": true
   ```

   - `true` - PvP enabled
   - `false` - PvP disabled (default)

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

4. **Start the Server**\
   Start your server for the changes to take effect.

## How to Enable PvP via Command

With a command, you can toggle PvP while the server is running. The change takes effect immediately and is saved in the world configuration, so no restart is needed.

1. **Open the Dashboard**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   world config pvp true --world default
   ```

   Replace `default` with the name of your world. To disable PvP, use `false`:

   ```text
   world config pvp false --world default
   ```

   The console currently replies with `PvP disabled for default` in both cases, even when you enable PvP. The setting is still saved correctly. To see the actual state, use `world settings pvp --world default`, e.g., `PvP in world "default" is currently true`.

Admins can also toggle PvP directly in-game. Without `--world`, the command applies to the world you are currently in:

```text
/world config pvp true
```

> [!NOTE]
> Console commands are entered without `/` and need the `--world` option, otherwise the server replies with `Sender must be a player or provide the --world option!`. In-game, you need the `/` and admin rights, see [Add Admin](/tutorials/gameserver/hytale/add-admin).

> [!TIP]
> Alternatively, `world settings pvp set true --world default` also works. This command reports the new value correctly, e.g., `PvP in world "default" set to "true" (was "false")`.
