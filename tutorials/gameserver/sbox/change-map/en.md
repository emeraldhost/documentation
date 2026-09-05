---
slug: "change-map"
language: "en"
title: "How to Change the Map on Your s&box Server"
description: "Change the map on an s&box server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Map"
sort: 3
related: ["gameserver/sbox/add-admin", "gameserver/sbox/change-gamemode", "gameserver/sbox/create-backup", "gameserver/sbox/join-server"]
---

In s&box, maps are packages from sbox.game – just like gamemodes. You pass the map you want as the second value after the gamemode.

## Find the package ident of the map

Every map on sbox.game has an address following the pattern `sbox.game/<organisation>/<package>`. You build the ident by replacing the slash with a dot.

| Address on sbox.game | Package ident |
|----------------------|---------------|
| `sbox.game/facepunch/flatgrass` | `facepunch.flatgrass` |
| `sbox.game/facepunch/construct` | `facepunch.construct` |

## Change the map permanently

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings** or to the startup parameters of your server.

3. **Enter the map**\
   Extend the startup parameter `+game` with the package ident of the map. The first value is always the gamemode, the second one the map:

   ```text
   +game facepunch.sandbox facepunch.flatgrass
   ```

4. **Restart the server**\
   Save the setting and restart your server.

## Switch the map while the server is running

You can also switch the map live via the **server console** in the dashboard. Pass the gamemode and the map together:

```text
game facepunch.sandbox facepunch.flatgrass
```

> [!WARNING]
> The switch disconnects all connected players and reloads the server. The change only lasts until the next restart – to set the map permanently, use the startup parameter `+game`.

> [!NOTE]
> The official sandbox mode additionally provides the command `map`, which changes only the map:
>
> ```text
> map facepunch.flatgrass
> ```
>
> That command belongs to the gamemode and is therefore not available on every server. Using `game` always works.

## If the map does not load

> [!IMPORTANT]
> Not every gamemode allows a free choice of map. Some gamemodes ship their own map or manage the map rotation themselves and ignore your input. The sbox.game page of the respective gamemode lists which maps are supported.

> [!TIP]
> Check the ident for typos: it consists solely of the organisation, a dot and the package name – without `sbox.game/`, without slashes and without a file extension.
