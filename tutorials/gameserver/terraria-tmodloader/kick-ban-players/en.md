---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Terraria tModLoader Server"
description: "Kick and ban players on a Terraria tModLoader server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 8
related: ["gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup", "gameserver/terraria-tmodloader/download-savegame", "gameserver/terraria-tmodloader/join-server"]
---

You can kick and ban players using the server console.

## Kick a player

Enter the following command in the server console:

```text
kick <name>
```

The player is removed from the server but can rejoin.

## Ban a player

```text
ban <name>
```

The player is permanently banned from the server.

## Unban a player

There is no console command to unban players. You must edit the ban list manually:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Edit banlist.txt**\
   Open the file `banlist.txt` and remove the line with the player's name.

4. **Start the server**\
   Start your server.

## All commands

| Command | Description |
|---------|-------------|
| `kick <name>` | Kick a player |
| `ban <name>` | Ban a player |
