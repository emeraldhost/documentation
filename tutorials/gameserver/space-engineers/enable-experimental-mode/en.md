---
slug: "enable-experimental-mode"
language: "en"
title: "How to Enable Experimental Mode on Your Space Engineers Server"
description: "Enable experimental mode on a Space Engineers server"
tags: []
date: "2026-07-08"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Experimental Mode"
sort: 9
related: ["gameserver/space-engineers/configure-automatic-backups", "gameserver/space-engineers/download-world", "gameserver/space-engineers/enable-ingame-scripts", "gameserver/space-engineers/enable-remote-api"]
---

Experimental mode unlocks advanced and experimental features. You do not need it for mods: since Update 1.206, mods run without experimental mode, including mods with their own code (see [Add Mods](/tutorials/gameserver/space-engineers/add-mods)). Some settings, however, turn it on automatically (see [below](#settings-that-force-experimental-mode)).

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enable experimental mode**\
   Set the **Experimental Mode** option to `true` to enable it, or to `false` to disable it.

4. **Restart the server**\
   Save the setting and restart your server for the change to take effect.

> [!WARNING]
> The field alone does not turn experimental mode on permanently. When loading the world, the server only keeps it if one of the [settings listed below](#settings-that-force-experimental-mode) requires it – otherwise it sets it back to `false`. After the start, the console line `Experimental mode: Yes` shows whether it is active.

## Settings that force experimental mode

When loading the world, the server checks your settings. If one of the following applies, it turns experimental mode on automatically:

- **In-Game Scripts** is set to `true` in the **Settings** (see [Allow In-Game Scripts](/tutorials/gameserver/space-engineers/enable-ingame-scripts)).
- **Max Players** is set to more than `16` in the **Settings**.
- A world setting in `Sandbox_config.sbc` forces it, for example `SyncDistance` above `3000`, `TotalPCU` above `600000` or `BlockLimitsEnabled` set to `NONE`. You can find the complete list under [Forced experimental mode](/tutorials/gameserver/space-engineers/change-world-settings#forced-experimental-mode).

> [!WARNING]
> As long as one of these applies, you cannot turn experimental mode off. If **Experimental Mode** is set to `false`, the server turns it back on anyway when loading. If your server should run without experimental mode, first change the settings that force it.

The server console shows whether experimental mode is active and which setting forces it while the world loads, for example:

```text
Experimental mode: Yes
Experimental mode reason: ExperimentalMode, EnableIngameScripts
```
