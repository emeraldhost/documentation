---
slug: "disable-locator-bar"
language: "en"
title: "How to Disable the Locator Bar on a Minecraft Java Edition Server"
description: "Disable the Locator Bar on a Minecraft Java Edition server"
tags: []
date: "2026-06-28"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Disable Locator Bar"
sort: 16
related: ["gameserver/minecraft/disable-end", "gameserver/minecraft/disable-nether", "gameserver/minecraft/download-world", "gameserver/minecraft/enable-whitelist"]
---

The Locator Bar is a compass-like bar above the hotbar that was added in the **1.21.6 "Chase the Skies"** update. It shows the direction of other nearby players. Using the `locatorBar` game rule you can turn it off server-wide for all players.

> [!NOTE]
> `locatorBar` is a **Vanilla game rule** and works on all Java server variants – Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric and NeoForge (from version 1.21.6).

## Requirement

You need OP rights (at least level 2) to change game rules. See [Grant OP Rights](/tutorials/gameserver/minecraft/grant-op-rights).

## Disable the Locator Bar

You can run the command either directly in the in-game chat or via the server console in the dashboard:

```text
/gamerule locatorBar false
```

> [!NOTE]
> In the server console, all commands are entered **without** `/`.

> [!WARNING]
> **Caution**
>
> Pay attention to the capitalization: the game rule is `locatorBar` (camelCase), **not** `locatorbar` or `locator_bar`. With the wrong spelling the command fails silently.

## Re-enable the Locator Bar

Set the game rule back to `true`:

```text
/gamerule locatorBar true
```

> [!TIP]
> The game rule is saved with the world and persists across server restarts – so you only need to run the command once. By default the Locator Bar is enabled (`true`).
