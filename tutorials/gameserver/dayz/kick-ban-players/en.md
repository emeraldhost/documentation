---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your DayZ Server"
description: "Kick and ban players on a DayZ server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 14
related: ["gameserver/dayz/enable-crosshair", "gameserver/dayz/enable-third-person", "gameserver/dayz/enable-von", "gameserver/dayz/join-server"]
---

You can kick players using in-game chat commands or permanently ban them via a configuration file.

> [!WARNING]
> **Requirement**
>
> You must be an admin on your server. Here you can find a guide on how to [add an admin](/tutorials/gameserver/dayz/add-admin).

> [!TIP]
> Here you can find a guide on how to find a player's [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Kick players via chat command

1. **Join the server**\
   Join your DayZ server and log in as admin.

2. **Open the chat**\
   Press `Enter` to open the chat.

3. **Kick a player**\
   Enter the following command:

   ```text
   #kick <SteamID64>
   ```

## Permanently ban players via ban.txt

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open ban.txt**\
   Open the file `ban.txt` in the root directory of your server. Create the file if it does not exist.

4. **Add player to the ban list**\
   Enter the player's SteamID64 on a new line:

   ```text
   76561198012345678
   ```

5. **Start the server**\
   Save the file and start your server.

## Ban players via chat command

You can also ban players directly via chat command without manually editing the `ban.txt`:

1. **Open the chat**\
   Press `Enter` to open the chat.

2. **Ban a player**\
   Enter the following command:

   ```text
   #exec ban <name>
   ```

## Command overview

| Command | Description |
|---------|-------------|
| `#kick <SteamID64>` | Kick a player from the server |
| `#exec ban <name>` | Permanently ban a player |
| `#shutdown` | Shut down the server |
