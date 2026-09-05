---
slug: "spawn-bus"
language: "en"
title: "How to Spawn a Bus on a The Bus Server"
description: "Spawn a bus at a stop on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
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

You can spawn a bus at a bus stop by command or remove uncontrolled buses from the map.

## How to spawn a bus

Enter the following command in the in-game chat:

```text
/spawnBus
```

The bus is automatically placed at a bus stop. The command can be used multiple times to spawn additional buses.

> [!NOTE]
> The bus model depends on the currently active fleet. You can change the fleet with `/fleet`.

## Remove uncontrolled buses

To remove all buses that are **not currently controlled by a player**:

```text
/clearBusses
```

This includes buses spawned via `/spawnBus` that no player has entered, or buses that players have left.

> [!TIP]
> Use `/clearBusses` when too many unused buses are on the map and it affects visibility or performance.

## All commands

| Command | Description |
|---------|-------------|
| `/spawnBus` | Spawn a bus at a bus stop |
| `/clearBusses` | Remove all uncontrolled buses |

> [!TIP]
> These commands require Owner or Admin permissions.
