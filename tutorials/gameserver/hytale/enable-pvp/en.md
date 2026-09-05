---
slug: "enable-pvp"
language: "en"
title: "How to Enable PvP on a Hytale Server"
description: "Enable or disable PvP on a Hytale server"
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
short_title: "Enable PvP"
sort: 14
related: ["gameserver/hytale/download-world", "gameserver/hytale/enable-fall-damage", "gameserver/hytale/enable-whitelist", "gameserver/hytale/improve-performance"]
---

PvP (Player versus Player) allows players to fight against each other. This setting is configured per world.

> [!TIP]
> **Note**
>
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
   - `false` - PvP disabled

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

4. **Start the Server**\
   Start your server for the changes to take effect.

## How to Enable PvP via Command

Admins can also enable or disable PvP directly in-game:

```text
/world config pvp true
```

To disable PvP:

```text
/world config pvp false
```

> [!TIP]
> **Note**
>
> The command requires admin rights and only affects the current world.
