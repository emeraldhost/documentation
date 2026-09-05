---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your 7 Days to Die Server"
description: "Kick and ban players on a 7 Days to Die server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 11
related: ["gameserver/7-days-to-die/download-savegame", "gameserver/7-days-to-die/enable-cheat-mode", "gameserver/7-days-to-die/enable-whitelist", "gameserver/7-days-to-die/join-server"]
---

You can kick and ban players using console commands or by editing the `serveradmin.xml` file.

> [!WARNING]
> **Requirement**
>
> You must be an admin on your server. Here you can find a guide on how to [add an admin](/tutorials/gameserver/7-days-to-die/add-admin).

## Kick or ban players via console command

1. **Join the server**\
   Join your 7 Days to Die server.

2. **Open the console**\
   Press `F1` to open the console.

3. **List players**\
   Enter the command `listplayers` to display all connected players.

4. **Kick or ban a player**\
   Use one of the following commands:

   ```text
   kick <Name>
   ```

   ```text
   ban add <Name> <Duration> <Unit> [Reason]
   ```

   Example:

   ```text
   ban add PlayerName 1 year cheating
   ```

## Ban players via serveradmin.xml

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open serveradmin.xml**\
   Open the file `serveradmin.xml` in the directory:

   ```text
   /Saves/serveradmin.xml
   ```

4. **Add player to the blacklist**\
   Add a new entry in the `<blacklist>` section:

   ```xml
   <blacklist>
     <blacklisted platform="Steam" userid="PLAYER_STEAMID64" name="PlayerName"
       unbandate="" reason="Reason" />
   </blacklist>
   ```

> [!TIP]
> Here you can find a guide on how to find a player's [SteamID64](/tutorials/gameserver/steamid64-find-out).

5. **Start the server**\
   Save the file and start your server.

## Command overview

| Command | Description |
|---------|-------------|
| `listplayers` | List all connected players |
| `kick <Name>` | Kick a player from the server |
| `ban add <Name> <Duration> <Unit> [Reason]` | Ban a player (e.g. `ban add PlayerName 1 year cheating`) |
| `ban remove <Name>` | Unban a player |
