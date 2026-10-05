---
slug: "spawn-bus"
language: "en"
title: "How to Spawn a Bus on a The Bus Server"
description: "Spawn a bus at a stop on a The Bus server and remove uncontrolled buses"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Spawn Bus"
sort: 19
related: ["gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players", "gameserver/the-bus/send-chat-messages", "gameserver/the-bus/teleport"]
---

You can use a command in the in-game chat to spawn a bus at a stop or to remove uncontrolled buses from the map.

> [!NOTE]
> These commands require Owner or Admin permissions – see [Add Admin](/tutorials/gameserver/the-bus/add-admin). Enter them in the in-game chat. On our servers, the console in the dashboard only shows the server output and does not accept commands.

## How to Spawn a Bus

Enter the following command in the in-game chat:

```text
/spawnBus
```

The server then spawns a bus at a stop.

> [!TIP]
> The fleet determines which buses are available on your server. To learn how to change it, see [Change Fleet](/tutorials/gameserver/the-bus/change-fleet).

## How to Remove Uncontrolled Buses

If there are too many unused buses on the map, use the following command to remove all buses that are currently **not controlled by a player**:

```text
/clearBusses
```

## Command Overview

| Command | Description |
|---------|-------------|
| `/spawnBus` | Spawn a bus at a stop |
| `/clearBusses` | Remove all uncontrolled buses from the map |

Use `/commands` in the in-game chat to show all available commands.
