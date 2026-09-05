---
slug: "add-workshop-maps"
language: "en"
title: "How to Add Workshop Maps to Your Counter-Strike 2 Server"
description: "Add workshop maps to a Counter-Strike 2 server"
tags: []
date: "2026-04-03"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Workshop Maps"
sort: 2
related: ["gameserver/counter-strike-2/add-mods", "gameserver/counter-strike-2/change-game-mode", "gameserver/counter-strike-2/change-map", "gameserver/counter-strike-2/configure-server"]
---

You can load maps from the Steam Workshop on your server.

## Find workshop map ID

1. **Open Steam Workshop**\
   Open the [Steam Workshop for CS2](https://steamcommunity.com/app/730/workshop/) and find the desired map.

2. **Copy map ID**\
   You can find the map ID in the URL of the Workshop page. Copy the number after `?id=`.

   > [!TIP]
   > **Example**
   >
   > In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=3070288532`, the map ID is `3070288532`.

## Load a single workshop map

Load a single workshop map via the RCON console:

```text
host_workshop_map 3070288532
```

The server will automatically download the map and switch to it.

## Load a workshop collection

You can also load an entire collection of maps:

1. **Create collection**\
   Create a [Steam Workshop Collection](https://steamcommunity.com/workshop/browse/?appid=730&section=collections) and add the desired maps. The collection must be **public**.

2. **Copy collection ID**\
   Copy the collection ID from the URL.

3. **Set startup parameters**\
   In the dashboard under **Settings**, enter the following in **Additional Startup Parameters**:

   ```text
   +host_workshop_collection COLLECTION_ID
   ```

4. **Restart the server**\
   Restart your server. The maps will be downloaded automatically.

> [!NOTE]
> You can display all available workshop maps on the server with the console command `ds_workshop_listmaps`.

> [!WARNING]
> Collections are limited to a maximum of 100 maps. If there are more than 100 maps, the entire collection will fail to load.
