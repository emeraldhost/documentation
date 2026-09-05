---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Counter-Strike 2 Server"
description: "Add mods to a Counter-Strike 2 server"
tags: []
date: "2026-04-03"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 1
related: ["gameserver/counter-strike-2/add-workshop-maps", "gameserver/counter-strike-2/change-game-mode", "gameserver/counter-strike-2/change-map", "gameserver/counter-strike-2/configure-server"]
---

To use plugins and mods on your CS2 server, you need **Metamod** and **CounterStrikeSharp** as a base framework.

## Install Metamod

1. **Download Metamod**\
   Download the latest version of [Metamod:Source](https://www.sourcemm.net/downloads.php/?branch=master) for CS2.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload files**\
   Extract the archive and upload the `addons` folder to the following directory:

   ```text
   /game/csgo/
   ```

5. **Edit gameinfo.gi**\
   Open the file `/game/csgo/gameinfo.gi` and find the line:

   ```text
   Game_LowViolence	csgo_lv
   ```

   Add a new line **below** it:

   ```text
   Game	csgo/addons/metamod
   ```

6. **Start the server**\
   Start your server. Verify with the console command `meta list` that Metamod has been loaded.

## Install CounterStrikeSharp

1. **Download CounterStrikeSharp**\
   Download the latest **with-runtime** version from [CounterStrikeSharp](https://github.com/roflmuffin/CounterStrikeSharp/releases).

2. **Upload files**\
   Extract the archive and upload the `addons` folder to the following directory:

   ```text
   /game/csgo/
   ```

3. **Restart the server**\
   Restart your server. Verify with `css_plugins list` that CounterStrikeSharp has been loaded.

## Install plugins

1. **Download plugin**\
   Download the desired plugin.

2. **Upload plugin**\
   Upload the plugin folder to the following directory:

   ```text
   /game/csgo/addons/counterstrikesharp/plugins/
   ```

3. **Restart the server**\
   Restart your server.

> [!WARNING]
> Always stop your server before uploading files. After a CS2 update, Metamod, CounterStrikeSharp and plugins may be incompatible – check for updates beforehand.
