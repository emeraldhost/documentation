---
slug: "add-admins"
language: "en"
title: "How to Add Admins to Your Space Engineers Server"
description: "Add admins to a Space Engineers server"
tags: []
date: "2026-07-08"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admins"
sort: 1
related: ["gameserver/space-engineers/add-mods", "gameserver/space-engineers/change-game-mode", "gameserver/space-engineers/change-max-players", "gameserver/space-engineers/change-server-description"]
---

Admins have full management rights on the server and can, for example, kick and ban players. You can define admins via the server config or directly in-game.

## Requirement

You need the [SteamID64](/tutorials/gameserver/steamid64-find-out) of each player you want to make an admin.

## Method 1: Via the server config

> [!WARNING]
> **Caution**
>
> Stop your server before editing the config file. A running server overwrites your changes when it saves.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), or use the file browser.

3. **Open the config**\
   Open the file `SpaceEngineers-Dedicated.cfg`.

4. **Add the admins**\
   Find the `<Administrators>` section (an empty server shows `<Administrators />`) and add one line per admin with the SteamID64:

   ```xml
   <Administrators>
     <unsignedLong>76561198000000000</unsignedLong>
   </Administrators>
   ```

5. **Start the server**\
   Save the file and start your server.

## Method 2: Directly in-game

An existing admin can promote other players live:

1. **Join the server**\
   Join your server as an admin.

2. **Open the admin menu**\
   Open the player list with `F3` or the admin screen with `Alt` + `F10`.

3. **Promote the player**\
   Select the player and promote them (**Promote**) to the desired rank.

> [!NOTE]
> **Crossplay servers**
>
> On servers with **crossplay** enabled, the SteamID method (method 1) does not take effect. In that case use in-game promotion (method 2) or the [Remote API](/tutorials/gameserver/space-engineers/enable-remote-api).
