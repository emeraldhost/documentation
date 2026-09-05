---
slug: "change-world-border"
language: "en"
title: "How to Change the World Border on a Minecraft Bedrock Server"
description: "Change the world border (worldborder) on a Minecraft Bedrock Edition server"
tags: []
date: "2026-05-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change World Border"
sort: 4
related: ["gameserver/minecraft-bedrock/change-tick-distance", "gameserver/minecraft-bedrock/change-view-distance", "gameserver/minecraft-bedrock/change-world-seed", "gameserver/minecraft-bedrock/create-backup"]
---

Unlike Minecraft Java Edition, Bedrock servers have **no native `/worldborder` command**. To enforce a boundary, you have to restrict players' movement in a different way.

## Options

### Command block

With a command block in a loaded chunk you can teleport players back to the center whenever they cross a certain coordinate. Example – pull all players further than 500 blocks from `0, 0` back to the center:

```text
/execute as @a[rm=500] run tp @s 0 ~ 0
```

The command block must run in **Repeat** mode with **Always Active** enabled so the command is executed continuously.

### Behavior pack

You can create or install a behavior pack that enforces the desired boundary – for example with damage outside the area or an automatic teleport. Upload behavior packs as described in [Add Behavior and Resource Packs](/tutorials/gameserver/minecraft-bedrock/add-behavior-und-resource-packs) and enable them for the world.

> [!NOTE]
> Both methods are workarounds – a true world border with warning, damage and animation like in Minecraft Java Edition cannot be implemented natively on Bedrock.
