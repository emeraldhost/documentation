---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Minecraft Bedrock Edition Server"
description: "Kick and ban players on a Minecraft Bedrock Edition server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 16
related: ["gameserver/minecraft-bedrock/increase-slots", "gameserver/minecraft-bedrock/join-server", "gameserver/minecraft-bedrock/upload-world", "gameserver/minecraft-bedrock/use-tp-command"]
---

You can kick and ban players using in-game commands or via the server console.

## Kick a player

Enter the following command in the chat or server console:

```text
/kick <name>
```

The player is removed from the server but can rejoin.

## Ban a player

```text
/ban <name>
```

The player is permanently banned from the server.

## Unban a player

There is no in-game command for unbanning. You need to edit the ban list manually:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Edit ban list**\
   Open the file `banned-players.json` or `banned-ips.json` and remove the player's entry.

4. **Start the server**\
   Start your server.

## All commands

| Command | Description |
|---------|-------------|
| `/kick <name>` | Kick a player |
| `/ban <name>` | Ban a player |
