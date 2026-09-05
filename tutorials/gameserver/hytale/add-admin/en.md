---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on a Hytale Server"
description: "Add an admin on a Hytale server"
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
short_title: "Add Admin"
sort: 1
related: ["gameserver/hytale/change-gamemode", "gameserver/hytale/change-max-players", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd"]
---

## Requirement

The player who should receive admin rights must be online on the server.

## How to Grant Admin Rights

1. **Open Server Management**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   op add <playername>
   ```

3. **Confirmation**\
   The player will receive the message "You have been made an operator" and now has admin rights.

## How to Remove Admin Rights

To remove admin rights from a player, use:

```text
op remove <playername>
```

## How to Appoint Additional Admins In-Game

Players with admin rights can appoint additional admins directly in-game:

```text
/op add <playername>
```

> [!TIP]
> **Note**
>
> Commands in the server console do not require a slash (/) at the beginning. In-game, the slash must be used.
