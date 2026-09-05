---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Soulmask Server"
description: "Kick and ban players on a Soulmask server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 12
related: ["gameserver/soulmask/find-invitation-code", "gameserver/soulmask/join-server", "gameserver/soulmask/set-admin-password", "gameserver/soulmask/set-server-password"]
---

As an admin you can kick or permanently ban players using GM commands.

> [!NOTE]
> You need admin rights to use these commands. See [Add Admin](/tutorials/gameserver/soulmask/add-admin).

## Enable ban list

Before you can ban players, you need to enable the ban list. Open the console with `~` and enter:

```text
gm EnableServerPermissionList 1 1
```

## Kick a player

```text
gm KickPlayer <SteamID64>
```

The player is removed from the server but can rejoin.

## Ban a player

```text
gm AddServerPermissionList 1 <SteamID64>
```

The player is immediately kicked and permanently banned from the server.

## Unban a player

```text
gm RemoveServerPermissionList 1 <SteamID64>
```

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Edit ban list manually

You can also edit the ban list directly via [SFTP](/tutorials/gameserver/establish-sftp-connection). The file is located at:

```text
/WS/Saved/BlackAccountList.txt
```

Each line contains a SteamID64 of a banned player.

## All commands

| Command | Description |
|---------|-------------|
| `gm EnableServerPermissionList 1 1` | Enable ban list |
| `gm KickPlayer <SteamID64>` | Kick a player |
| `gm AddServerPermissionList 1 <SteamID64>` | Ban a player |
| `gm RemoveServerPermissionList 1 <SteamID64>` | Unban a player |
