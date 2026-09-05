---
slug: "disable-npcs"
language: "en"
title: "How to Disable NPCs on a Hytale Server"
description: "Disable NPCs on a Hytale server"
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
short_title: "Disable NPCs"
sort: 11
related: ["gameserver/hytale/create-backup", "gameserver/hytale/create-new-world", "gameserver/hytale/download-world", "gameserver/hytale/enable-fall-damage"]
---

You can disable NPC spawning (creatures, monsters, animals) per world. This is useful for pure building servers or PvP arenas.

> [!TIP]
> **Note**
>
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Disable NPCs via Configuration

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the World Configuration**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to:

   ```text
   /universe/worlds/<worldname>/config.json
   ```

   Replace `<worldname>` with the name of your world (e.g., `default`).

3. **Change NPC Spawning**\
   Find the `IsSpawningNPC` setting and change the value:

   ```json
   "IsSpawningNPC": false
   ```

   - `true` - NPCs spawn (default)
   - `false` - No NPCs spawn

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the world configuration.

4. **Start the Server**\
   Start your server for the changes to take effect.

## How to Disable NPCs via Command

Admins can also control NPC spawning in-game:

```text
/spawning
```

Use `/spawning -help` for available options.

> [!TIP]
> **Note**
>
> Console commands are entered without `/`. In-game with admin rights, you need the `/`.

## Remove Already Spawned NPCs

To remove all NPCs in an area, you can use the kill command or reload the world.

> [!TIP]
> **Note**
>
> Disabling NPCs only affects future spawning. Already existing NPCs will remain.
