---
slug: "enable-ingame-scripts"
language: "en"
title: "How to Allow In-Game Scripts on Your Space Engineers Server"
description: "Allow in-game scripts on a Space Engineers server"
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
short_title: "Enable In-Game Scripts"
sort: 10
related: ["gameserver/space-engineers/download-world", "gameserver/space-engineers/enable-experimental-mode", "gameserver/space-engineers/enable-remote-api", "gameserver/space-engineers/join-server"]
---

This setting allows the execution of in-game scripts – the C# scripts in **Programmable Blocks**. Without this option such scripts are removed when the world loads.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enable in-game scripts**\
   Set the **In-Game Scripts** option to `true` to allow them, or to `false` to disallow them.

4. **Restart the server**\
   Save the setting and restart your server for the change to take effect.

> [!NOTE]
> If **In-Game Scripts** is set to `true`, the server automatically turns on [experimental mode](/tutorials/gameserver/space-engineers/enable-experimental-mode) when loading the world – even if it is set to `false` in the dashboard. So you do not need to enable it as well. As long as in-game scripts are allowed, however, you cannot turn it off either.

> [!WARNING]
> **Caution**
>
> In-game scripts are **not mods**: they are not added to the mod list (see [Add Mods](/tutorials/gameserver/space-engineers/add-mods)) but are pasted directly into a Programmable Block in-game.
