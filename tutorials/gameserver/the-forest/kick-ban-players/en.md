---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your The Forest Server"
description: "Kick and ban players on a The Forest server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/the-forest/add-savegame", "gameserver/the-forest/create-backup", "gameserver/the-forest/download-savegame", "gameserver/the-forest/join-server"]
---

On a The Forest server you remove players with **chat commands inside the game**. What you always enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!NOTE]
> The commands are only available to players who entered the admin password when joining. See [Add Admin](/tutorials/gameserver/the-forest/add-admin).

> [!TIP]
> Here you can find a guide on how to find a [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Use commands in the game

1. **Join as an admin**\
   Enter the admin password when joining, otherwise the commands are ignored.

2. **Open the chat**\
   Press `Enter` in the game to open the chat.

3. **Enter a command**\
   All admin commands start with `/`, for example:

   ```text
   /ban 76561198012345678
   ```

## Kick a player

```text
/kick <SteamID64>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```text
/ban <SteamID64>
```

The player is kicked from the server and can no longer connect.

## Remove a ban

```text
/unban <SteamID64>
```

> [!WARNING]
> `/unban` is **not** part of the official command list of The Forest, but it is described by several hosting providers. It may therefore not work on your server version. There is no ban file you could edit via SFTP – The Forest does not store a documented ban list in the file system. It is also undocumented whether bans survive a server restart.

## Command overview

| Command | Description |
|---------|-------------|
| `/help` | Show the list of all available commands |
| `/kick <SteamID64>` | Disconnect a player from the server |
| `/ban <SteamID64>` | Block a player from the server |
| `/save <1-5>` | Save the game on the given slot |
| `/restart` | Restart the server |
| `/shutdown` | Shut down the server |
| `/openlogs` | Open the log window |
| `/closelogs` | Close the log window |
| `/treeregrowmode on\|off` | Turn regrowth of cut down trees on or off |
| `/allowbuildingdestruction on\|off` | Allow or forbid the destruction of buildings |
| `/allowenemiescreative on\|off` | Allow or forbid enemies in creative mode |

> [!IMPORTANT]
> Do **not** use `/restart` to restart your server: according to the official command list this command resets the save game – the save data is deleted in the process. Restart your server through the **dashboard** instead. Create a [backup](/tutorials/gameserver/the-forest/create-backup) beforehand.

> [!WARNING]
> `/save <1-5>` saves on the slot you specify – if you enter a slot other than the one your server uses, you may overwrite a different save game.

## No console in the dashboard

> [!NOTE]
> For The Forest, the console in the dashboard only shows the output of the server. The server does **not** accept commands there – all admin commands go through the in-game chat.

## No whitelist

> [!WARNING]
> The Forest has **no whitelist feature**. If you want to restrict your server to certain players, set a server password and only share it with those players.
