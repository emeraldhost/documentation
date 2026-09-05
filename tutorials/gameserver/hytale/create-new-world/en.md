---
slug: "create-new-world"
language: "en"
title: "How to Create a New World on a Hytale Server"
description: "Create a new world on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create New World"
sort: 10
related: ["gameserver/hytale/change-weather", "gameserver/hytale/create-backup", "gameserver/hytale/disable-npcs", "gameserver/hytale/download-world"]
---

You can create multiple worlds on your Hytale server. Each world runs independently and can have its own settings.

## Available World Types

| Type | Description |
| ---- | ----------- |
| `normal` | Standard world with natural terrain |
| `flat` | Flat world without terrain |
| `void` | Empty world without blocks |

## How to Create a New World via Command

1. **Open Server Management**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   world create <name> [type]
   ```

   Replace `<name>` with the name of the new world and `[type]` with the desired world type.

**Examples:**

```text
world create arena flat
world create survival normal
world create creative void
```

> [!TIP]
> **Note**
>
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/world create arena flat`).

## How to Switch to the New World

After creating, you can switch to the world:

```text
world tp <name>
```

## How to Set the New World as Default

To make players automatically spawn in the new world when joining:

```text
world setdefault <name>
```

Or in the `config.json` in the root directory:

```json
"Defaults": {
  "World": "arena",
  "GameMode": "Adventure"
}
```

> [!TIP]
> Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the config.json.

## All World Commands

| Command | Description |
| ------- | ----------- |
| `world list` | Show all worlds |
| `world create <name> [type]` | Create a new world |
| `world load <name>` | Load a world |
| `world unload <name>` | Unload a world |
| `world delete <name>` | Delete a world (irreversible!) |
| `world tp <name>` | Teleport to a world |
| `world setdefault <name>` | Set world as default |
| `world config <setting> <value>` | Change world setting |

> [!WARNING]
> `world delete` permanently deletes the world. Create a backup first!
