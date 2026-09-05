---
slug: "enable-cheat-mode"
language: "en"
title: "How to Enable Cheat Mode on Your 7 Days to Die Server"
description: "Enable cheat mode on a 7 Days to Die server"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Cheat Mode"
sort: 8
related: ["gameserver/7-days-to-die/create-backup", "gameserver/7-days-to-die/download-savegame", "gameserver/7-days-to-die/enable-whitelist", "gameserver/7-days-to-die/join-server"]
---

Cheat mode gives you access to the creative menu and debug options.

## Cheat mode for all players

> [!WARNING]
> This setting enables cheat mode for **all players** on the server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open serverconfig.xml**\
   Open the file `serverconfig.xml` in the root directory of your server.

4. **Enable cheat mode**\
   Find the following line and set the value to `true`:

   ```xml
   <property name="BuildCreate" value="true"/>
   ```

5. **Start the server**\
   Save the file and start your server.

In-game you can now open the creative menu with `U`.

## Cheat mode for admins only

If you only want cheat mode **for admins**, leave `BuildCreate` set to `false` and use console commands instead. You need permission level `0` for this (see [Add Admin](/tutorials/gameserver/7-days-to-die/add-admin)).

Press `F1` to open the console:

| Command | Description |
|---------|-------------|
| `cm` | Enable creative menu (open with `U`) |
| `dm` | Enable debug mode |

### Debug mode features

After entering `dm`, the following options are available via `Esc`:

- **God Mode** – Invulnerability
- **Fly Mode** – Flying (toggle with `H`)
- **Invisibility** – Invisible to zombies and players
