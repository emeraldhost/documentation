---
slug: "enable-whitelist"
language: "en"
title: "How to Enable the Whitelist on a Hytale Server"
description: "Enable whitelist on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Whitelist"
sort: 15
related: ["gameserver/hytale/enable-fall-damage", "gameserver/hytale/enable-pvp", "gameserver/hytale/improve-performance", "gameserver/hytale/add-mods"]
---

With the whitelist, you can control who can join your server. Only players on the whitelist can connect.

## How to Enable the Whitelist

1. **Open Server Management**\
   Open the dashboard of your Hytale server.

2. **Enable the Whitelist**\
   Enter the following command in the console:

   ```text
   whitelist enable
   ```

## How to Add Players

```text
whitelist add <playername>
```

## How to Remove Players

```text
whitelist remove <playername>
```

## All Commands

| Command | Description |
| ------- | ----------- |
| `whitelist enable` | Enable the whitelist |
| `whitelist disable` | Disable the whitelist |
| `whitelist add <player>` | Add player to the whitelist |
| `whitelist remove <player>` | Remove player from the whitelist |
| `whitelist list` | Show all players on the whitelist |
| `whitelist status` | Show whitelist status |
| `whitelist clear` | Clear the whitelist |

> [!TIP]
> **Note**
>
> Administrators (OPs) can always join, even when the whitelist is active.
