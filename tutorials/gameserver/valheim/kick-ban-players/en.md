---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Valheim Server"
description: "Kick and ban players on a Valheim server"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 13
related: ["gameserver/valheim/enable-crossplay", "gameserver/valheim/enable-server-list", "gameserver/valheim/join-server", "gameserver/valheim/set-server-password"]
---

You can kick and ban players using the in-game console or edit the ban list manually via SFTP.

## Kick and ban players via console

Open the console with `F5` and enter the following commands. The commands only work if you are listed in `adminlist.txt` – see [Add Admin](/tutorials/gameserver/valheim/add-admin).

### Kick a player

```text
kick <name>
```

The player is removed from the server but can rejoin.

### Ban a player

```text
ban <name>
```

The player is permanently banned from the server. If they are currently online, the server adds their player ID to `bannedlist.txt`, otherwise the name you entered.

### Unban a player

```text
unban <ID>
```

Enter the entry exactly as it appears in the ban list. You can display all banned entries with the command `banned`.

## Edit ban list manually

You can also edit the ban list and permitted list directly via SFTP:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Edit files**\
   Open the files at `/.config/unity3d/IronGate/Valheim/`:

   - `bannedlist.txt` – Banned players (one player ID per line)
   - `permittedlist.txt` – Permitted players (one player ID per line), see [Enable the Whitelist](/tutorials/gameserver/valheim/enable-whitelist)

4. **Add or remove the player ID**\
   Add the player's ID on a new line or remove it. To unban a player, remove every line that belongs to them – a Steam player can be listed in several forms. Copy the ID exactly as it appears in the player list (`F2`) or in the server log, including the prefix and upper and lower case, e.g. `V_76561198012345678`. For Steam players, the older form `Steam_76561198012345678` and the plain SteamID64 also work. Crossplay players (e.g. on Xbox, PlayStation 5 or Nintendo Switch 2) do not have a SteamID64, so for them you always need the ID from the player list or the server log.

5. **Start the server**\
   Start your server.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## All commands

| Command | Description |
|---------|-------------|
| `kick <name>` | Kick a player |
| `ban <name>` | Ban a player |
| `unban <ID>` | Unban a player |
| `banned` | Show banned players |
