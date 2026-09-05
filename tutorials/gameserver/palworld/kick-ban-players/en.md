---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Palworld Server"
description: "Kick and ban players on a Palworld server"
tags: []
date: "2026-02-28"
visibility: "public"
updated: "2026-07-16"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 29
related: ["gameserver/palworld/add-mods", "gameserver/palworld/join-server", "gameserver/palworld/reset-world", "gameserver/palworld/restore-automatic-backup"]
---

As an admin you can kick or permanently ban players using commands.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/palworld/add-admin).

## Show player list

Enter the following command in the chat to display all connected players with their SteamID:

```text
/ShowPlayers
```

## Kick a player

```text
/KickPlayer <SteamID>
```

The player is removed from the server but can rejoin.

## Ban a player

```text
/BanPlayer <SteamID>
```

The player is permanently banned from the server.

## Unban a player

```text
/UnBanPlayer <SteamID>
```

You can find the player's SteamID in the `banlist.txt` or from a previously noted `/ShowPlayers` output.

### Alternative: edit the ban list manually

If no admin is currently online, you can also edit the ban list directly:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open banlist.txt**\
   Open the file `banlist.txt` at:

   ```text
   /Pal/Saved/SaveGames/banlist.txt
   ```

4. **Remove player**\
   Delete the line with the player's SteamID (format: `steam_76561198000000000`).

5. **Start the server**\
   Start your server.

## All commands

| Command | Description |
|---------|-------------|
| `/ShowPlayers` | Show player list |
| `/KickPlayer <SteamID>` | Kick a player |
| `/BanPlayer <SteamID>` | Ban a player |
| `/UnBanPlayer <SteamID>` | Unban a player |
