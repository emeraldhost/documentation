---
slug: "activate-dlc"
language: "en"
title: "How to Activate DLCs on a The Bus Server"
description: "Activate or deactivate DLCs on a The Bus server by command"
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
short_title: "Activate DLC"
sort: 1
related: ["gameserver/the-bus/add-admin", "gameserver/the-bus/change-fleet", "gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan"]
---

With the `/dlc` command, you activate or deactivate a DLC on your server. You enter the command in the in-game chat.

> [!TIP]
> If you want to switch your server to the Hamburg map, see the guide [Add DLC Map](/tutorials/gameserver/the-bus/add-dlc-map).

## Available DLCs

| DLC | Type |
|-----|------|
| **Hamburg City (by Halycon)** | Map (in-game: **Hamburg**) |
| **Ebus 2.2** | Bus |

> [!NOTE]
> More DLCs such as New York City, London South, Lübeck and the New York US LFS Bus have been announced but are not released yet.

## How to Activate or Deactivate a DLC

1. **Join the server**\
   Join your server, see [Join Server](/tutorials/gameserver/the-bus/join-server). You can only use the command with Owner or Admin permissions – see [Add Admin](/tutorials/gameserver/the-bus/add-admin).

2. **Enter the command**\
   Enter the following command in the in-game chat and replace `<dlc>` with the desired DLC:

   ```text
   /dlc <dlc>
   ```

   > [!NOTE]
   > How to specify the DLC in the command is not officially documented. Use `/commands` to show all available commands. On our servers, the console in the dashboard only shows the server output and does not accept commands.

## What Players Need to Own

- **Map DLC:** All players need to own the DLC of the active map to play on it.
- **Bus DLC:** Only players who own the DLC can select and drive a DLC bus.

> [!WARNING]
> Since Update 3.2 EA, a The Bus server can require DLCs to join. Players who don't own a required DLC then can't join your server.
