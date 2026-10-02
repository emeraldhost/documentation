---
slug: "disable-ai"
language: "en"
title: "How to Disable or Limit AI on Your Arma Reforger Server"
description: "Completely disable AI on an Arma Reforger server or limit the number of AI units"
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
short_title: "Disable AI"
sort: 19
related: ["gameserver/arma-reforger/improve-performance", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/change-scenario-settings", "gameserver/arma-reforger/set-up-game-master"]
---
Using the `"operating"` section in `config.json`, you can turn off AI on your server completely or set an upper limit for the number of AI units. This is useful e.g. for pure PvP servers or to save server performance.

> [!NOTE]
> The `"operating"` section is not present in your server's `config.json` by default. You add it yourself once. The dashboard does not overwrite this section when the server starts, so your settings are kept.

## Available options

| Option | Default value | Description |
|--------|---------------|-------------|
| `disableAI` | `false` | If set to `true`, AI is completely disabled on the server. |
| `aiLimit` | `-1` | Maximum number of AI units. Once the limit is reached, no system can spawn more AI. Negative values are ignored, in which case no limit applies. |

## Disable AI completely

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config.json**\
   Open the file `config.json` in the root directory of your server.

4. **Add the operating section**\
   Add the new `"operating"` section after the `"game"` section. To do this, put a comma after the closing bracket of `"game"`:

   ```json
   {
     "game": {
       ...
     },
     "operating": {
       "disableAI": true
     }
   }
   ```

   The `"operating"` section is on the same level as `"game"`, not inside it. `...` stands for your existing settings in the `"game"` section, which you leave unchanged.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> With `"disableAI": true`, AI functionality on the server is switched off completely. Scenarios that include AI enemies or AI squads (e.g. Combat Ops or Conflict with AI squads) will then no longer work as intended. Only disable AI completely if your scenario works without it.

## Limit the number of AI units

Instead of turning AI off completely, you can also set an upper limit. This mainly helps with performance problems caused by too many AI units. The limit applies to all systems that spawn AI – so e.g. also to AI placed by a [Game Master](/tutorials/gameserver/arma-reforger/set-up-game-master).

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config.json**\
   Open the file `config.json` in the root directory of your server.

4. **Enter aiLimit**\
   Add the `"aiLimit"` entry with the desired maximum to the `"operating"` section. If the section does not exist yet, create it after `"game"` as described above:

   ```json
   "operating": {
     "aiLimit": 60
   }
   ```

   If you previously entered `"disableAI": true`, set the value to `false` or remove the entry – otherwise AI stays completely disabled and the limit has no effect. Separate multiple entries within `"operating"` with a comma. There is no comma after the last entry.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> To remove the limit again, set `"aiLimit"` to `-1` or delete the entry. You set player limits per faction via the `missionHeader` section – see [Change Scenario Settings](/tutorials/gameserver/arma-reforger/change-scenario-settings).

> [!TIP]
> You can find more tips for better server performance in the guide [Improve Performance](/tutorials/gameserver/arma-reforger/improve-performance). For an overview of all `config.json` settings, see [Configure Server](/tutorials/gameserver/arma-reforger/configure-server).
