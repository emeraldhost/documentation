---
slug: "change-weather"
language: "en"
title: "How to Change the Weather on a Hytale Server"
description: "Change weather on a Hytale server"
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
short_title: "Change Weather"
sort: 8
related: ["gameserver/hytale/change-server-name", "gameserver/hytale/change-time", "gameserver/hytale/create-backup", "gameserver/hytale/create-new-world"]
---

You can change the weather on your server via command. Weather is set per zone and with intensity.

## How to Change the Weather via Command

1. **Open Server Management**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   weather set <Zone_Weather_Intensity>
   ```

**Examples:**

```text
weather set Zone1_Clear_Light
weather set Zone1_Cloudy_Medium
weather set Zone1_Rainy_Heavy
```

> [!TIP]
> **Note**
>
> Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/weather set Zone1_Clear_Light`).

## Weather Format

Weather is specified in the format `Zone_Weather_Intensity`:

**Weather Types:**

- `Clear` - Clear/Sunny
- `Cloudy` - Cloudy
- `Rainy` - Rainy
- `Stormy` - Stormy

**Intensities:**

- `Light` - Light
- `Medium` - Medium
- `Heavy` - Heavy

## Show Current Weather

To display the current weather:

```text
weather get
```

## Reset Weather

To reset the weather to default:

```text
weather reset
```

## All Weather Commands

| Command | Description |
| ------- | ----------- |
| `weather set <weather> [--world=?]` | Set weather |
| `weather get [--world=?]` | Show current weather |
| `weather reset [--world=?]` | Reset weather |

> [!TIP]
> **Note**
>
> Use `--world=<name>` to change the weather for a specific world. Without this option, the current world is used.
