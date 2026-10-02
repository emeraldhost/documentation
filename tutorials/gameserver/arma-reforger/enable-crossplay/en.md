---
slug: "enable-crossplay"
language: "en"
title: "How to Use Crossplay on Your Arma Reforger Server"
description: "Use crossplay on an Arma Reforger server so players on PC, Xbox and PlayStation 5 can play together"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use Crossplay"
sort: 14
related: ["gameserver/arma-reforger/join-server", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/troubleshoot-server"]
---
With crossplay, players on PC, Xbox and PlayStation 5 can play together on your server. Crossplay is always active on your server – you do not need to set anything up.

## Crossplay is always active

When your server starts, `"crossPlatform": true` is set automatically in `config.json`. This makes your server accept players from all platforms:

| Platform | Can join |
|----------|----------|
| PC | Yes |
| Xbox | Yes |
| PlayStation 5 | Yes |

> [!WARNING]
> Crossplay cannot be disabled. If you change `crossPlatform` to `false` in `config.json`, the value is set back to `true` on the next server start. You can find out which entries the dashboard overwrites on every start in [Configure Server](/tutorials/gameserver/arma-reforger/configure-server).

## What to watch out for with console players

If players on Xbox and PlayStation 5 should play on your server, keep these two points in mind.

### Mods for consoles

Not every mod is also available for Xbox and PlayStation 5. If a mod from the `"mods"` section of `config.json` is not available on a console, players on that console may not be able to join your server. After adding new mods, have a console player test joining.

You can learn how to add mods in the [Add Mods](/tutorials/gameserver/arma-reforger/add-mods) guide.

### Keep BattlEye switched on

For console players, keep BattlEye switched on. Without BattlEye, your server does not appear in the server browser on PlayStation 5. This is how you check the setting:

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Check Battle-Eye**\
   Make sure the **Battle-Eye** field is set to `true`.

4. **Restart the server**\
   Save the setting and restart your server.

## How console players join your server

Console players find your server using the search in the server browser. For this, your server must be visible there.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Check visibility**\
   Make sure the **Visible in Server Browser** field is set to `true`.

4. **Restart the server**\
   Save the setting and restart your server.

5. **Search for the server**\
   The players open the **Multiplayer** section in Arma Reforger and search for the name of your server there.

> [!NOTE]
> You can find a detailed guide on joining under [Join Server](/tutorials/gameserver/arma-reforger/join-server).
