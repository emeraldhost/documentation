---
slug: "enable-fall-damage"
language: "en"
title: "How to Enable Fall Damage on a Hytale Server"
description: "Enable or disable fall damage on a Hytale server"
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
short_title: "Enable Fall Damage"
sort: 13
related: ["gameserver/hytale/disable-npcs", "gameserver/hytale/download-world", "gameserver/hytale/enable-pvp", "gameserver/hytale/enable-whitelist"]
---

Fall damage determines whether players take damage when falling from great heights. This setting is configured per world.

> [!TIP]
> **Note**
>
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Enable or Disable Fall Damage via Configuration

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to:

   ```text
   /universe/worlds/<worldname>/config.json
   ```

   Replace `<worldname>` with the name of your world (e.g., `default`).

3. **Change the Fall Damage Setting**\
   Find the `IsFallDamageEnabled` setting and change the value:

   ```json
   "IsFallDamageEnabled": true
   ```

   - `true` - Fall damage enabled (default)
   - `false` - Fall damage disabled

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

4. **Start the Server**\
   Start your server for the changes to take effect.

## How to Enable Fall Damage via Command

Admins can also enable or disable fall damage directly in-game:

```text
/world config falldamage true
```

To disable fall damage:

```text
/world config falldamage false
```

> [!TIP]
> **Note**
>
> Disabling fall damage is especially useful for building servers or creative worlds where players can build without risk.
