---
slug: "change-gamemode"
language: "en"
title: "How to Change the Gamemode on Your s&box Server"
description: "Change the gamemode on an s&box server"
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
short_title: "Change Gamemode"
sort: 2
related: ["gameserver/sbox/add-admin", "gameserver/sbox/change-map", "gameserver/sbox/create-backup", "gameserver/sbox/join-server"]
---

s&box has no fixed game selection: which gamemode runs on your server is defined by the **package ident** of a game mode from sbox.game.

## Find the package ident

Every gamemode on sbox.game has an address following the pattern `sbox.game/<organisation>/<package>`. You build the ident by replacing the slash with a dot.

| Address on sbox.game | Package ident |
|----------------------|---------------|
| `sbox.game/facepunch/sandbox` | `facepunch.sandbox` |
| `sbox.game/wpr/ttt` | `wpr.ttt` |

> [!NOTE]
> Older guides still refer to the address `asset.party`. It now redirects to sbox.game, the structure of the ident is unchanged.

## Change the gamemode permanently

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings** or to the startup parameters of your server.

3. **Enter the gamemode**\
   Enter the package ident of the desired gamemode after `+game`:

   ```text
   +game facepunch.sandbox
   ```

4. **Restart the server**\
   Save the setting and restart your server.

> [!TIP]
> You can name a map directly after the gamemode: `+game facepunch.sandbox facepunch.flatgrass`. See [Change Map](/tutorials/gameserver/sbox/change-map) for details.

## Switch the gamemode while the server is running

You can also switch the gamemode live via the **server console** in the dashboard:

```text
game facepunch.sandbox
```

> [!WARNING]
> The switch disconnects all connected players and reloads the server. This change only lasts until the next restart – to set the gamemode permanently, use the startup parameter `+game`.

## What happens during a switch?

The server automatically downloads the gamemode along with all required content from the cloud and stores it in the `/download/` folder. That makes the first start of a new gamemode take a little longer.

> [!NOTE]
> Your players do not have to install anything. Missing content including the game code is sent to the clients by the server when they join.

> [!IMPORTANT]
> An s&box server has no addon or mod folder where you could drop additional content. Which dependencies get loaded is decided solely by the gamemode package. If you want different content, pick a different gamemode.
