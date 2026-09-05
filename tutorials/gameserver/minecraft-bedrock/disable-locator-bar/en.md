---
slug: "disable-locator-bar"
language: "en"
title: "How to Disable the Locator Bar on a Minecraft Bedrock Server"
description: "Disable the Locator Bar on a Minecraft Bedrock Edition server"
tags: []
date: "2026-06-28"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Disable Locator Bar"
sort: 9
related: ["gameserver/minecraft-bedrock/delete-world", "gameserver/minecraft-bedrock/disable-end", "gameserver/minecraft-bedrock/disable-nether", "gameserver/minecraft-bedrock/download-world"]
---

The Locator Bar is a compass-like bar above the hotbar that was added in the **"Chase the Skies" update (Bedrock 1.21.90)**. It shows the direction of other nearby players. Unlike Minecraft Java Edition, on Bedrock it is **not** controlled by the `locatorBar` game rule but by the `playerWaypoints` game rule – set it to `off` to turn the bar off server-wide for all players.

> [!NOTE]
> `playerWaypoints` is a **world game rule** set via the `/gamerule` command – there is **no `server.properties` entry** for it. The game rule uses the values `everyone` (default) and `off` – **not** `true`/`false` like on Minecraft Java Edition.

## Requirement

You need OP rights to change game rules. See [Grant OP Rights](/tutorials/gameserver/minecraft-bedrock/grant-op-rights).

## Disable the Locator Bar

You can run the command either directly in the in-game chat (as an operator) or via the server console in the dashboard:

```text
/gamerule playerWaypoints off
```

> [!NOTE]
> In the server console, all commands are entered **without** `/`.

## Re-enable the Locator Bar

Set the game rule back to `everyone`:

```text
/gamerule playerWaypoints everyone
```

> [!TIP]
> The game rule is saved with the world and persists across server restarts – so you only need to run the command once. By default player waypoints are enabled (`everyone`).
