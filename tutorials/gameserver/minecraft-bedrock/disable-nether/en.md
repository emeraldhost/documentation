---
slug: "disable-nether"
language: "en"
title: "How to Disable the Nether on a Minecraft Bedrock Server"
description: "Disable the Nether on a Minecraft Bedrock Edition server"
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
short_title: "Disable Nether"
sort: 10
related: ["gameserver/minecraft-bedrock/disable-end", "gameserver/minecraft-bedrock/disable-locator-bar", "gameserver/minecraft-bedrock/download-world", "gameserver/minecraft-bedrock/enable-allowlist"]
---

Unlike Minecraft Java Edition, Bedrock servers have **no setting in `server.properties`** to disable the Nether. Instead, you have to block access to the dimension in a different way.

## Options

### Behavior pack

You can create or install a behavior pack that blocks Nether portals from being created or disables their functionality. Upload behavior packs as described in [Add Behavior and Resource Packs](/tutorials/gameserver/minecraft-bedrock/add-behavior-und-resource-packs) and enable them for the world.

### Command block

With a command block in a loaded chunk you can automatically teleport players back to the overworld whenever they enter the Nether. Example:

```text
/execute as @a[m=!c] in minecraft:nether run tp @s ~ ~ ~ minecraft:overworld
```

The command block must run in **Repeat** mode with **Always Active** enabled so the command is executed continuously.

> [!NOTE]
> Both methods are workarounds – the Nether itself cannot be fully disabled on Bedrock, only access to it can be restricted.
