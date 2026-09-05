---
slug: "disable-end"
language: "en"
title: "How to Disable the End on a Minecraft Bedrock Server"
description: "Disable the End on a Minecraft Bedrock Edition server"
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
short_title: "Disable End"
sort: 8
related: ["gameserver/minecraft-bedrock/create-backup", "gameserver/minecraft-bedrock/delete-world", "gameserver/minecraft-bedrock/disable-locator-bar", "gameserver/minecraft-bedrock/disable-nether"]
---

Unlike Minecraft Java Edition, Bedrock servers have **no setting in `server.properties`** to disable the End. Instead, you have to block access to the dimension in a different way.

## Options

### Behavior pack

You can create or install a behavior pack that blocks End portals from being activated or disables their functionality. Upload behavior packs as described in [Add Behavior and Resource Packs](/tutorials/gameserver/minecraft-bedrock/add-behavior-und-resource-packs) and enable them for the world.

### Command block

With a command block in a loaded chunk you can automatically teleport players back to the overworld whenever they enter the End. Example:

```text
/execute as @a[m=!c] in minecraft:the_end run tp @s ~ ~ ~ minecraft:overworld
```

The command block must run in **Repeat** mode with **Always Active** enabled so the command is executed continuously.

> [!NOTE]
> Both methods are workarounds – the End itself cannot be fully disabled on Bedrock, only access to it can be restricted.
