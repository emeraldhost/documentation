---
slug: "pause-world-when-empty"
language: "en"
title: "How to Set Whether the World of Your Stormforge Server Pauses Without Players"
description: "Use pauseWhenEmpty in settings.json to set whether the world of your Stormforge server pauses or keeps running without players."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Pause World When Empty"
sort: 10
related: ["gameserver/stormforge/change-world-settings", "gameserver/stormforge/change-world-seed", "gameserver/stormforge/control-automatic-updates"]
---

As shipped, the world of your Stormforge server pauses while nobody is online. The server itself keeps running. This is controlled by the `pauseWhenEmpty` key in the `settings.json` file in your server's main directory.

| Value | Effect |
| --- | --- |
| `true` (default) | The world pauses while nobody is online. |
| `false` | The world keeps running even when nobody is online. |

## Change pauseWhenEmpty

1. **Stop the server**\
   Stop your server via the dashboard. Only edit the file while the server is stopped, because the running server rewrites it itself.

2. **Open settings.json**\
   Open the [File Manager](/tutorials/gameserver/use-file-browser) in the dashboard and choose **Edit** in the menu (⋮) next to the `settings.json` file. Alternatively, edit the file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /settings.json
   ```

3. **Adjust the value**\
   The `pauseWhenEmpty` key sits at the top level of the file, not inside the `worldSettings` block. To keep the world running without players, set it to `false`:

   ```json
   "pauseWhenEmpty": false,
   ```

   Write `true` and `false` without quotes and keep the comma at the end of the line.

4. **Save and start the server**\
   Save the file and start your server.

> [!WARNING]
> The file must stay valid JSON. What happens with a faulty `settings.json` is described in [Change World Settings](/tutorials/gameserver/stormforge/change-world-settings).
