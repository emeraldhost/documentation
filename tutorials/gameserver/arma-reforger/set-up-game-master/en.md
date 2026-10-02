---
slug: "set-up-game-master"
language: "en"
title: "How to Set Up Game Master on Your Arma Reforger Server"
description: "Set up Game Master mode on an Arma Reforger server, assign the Game Master role and understand budgets"
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
short_title: "Set Up Game Master"
sort: 18
related: ["gameserver/arma-reforger/change-scenario", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/add-admin", "gameserver/arma-reforger/change-scenario-settings"]
---
Game Master is a game mode where nothing is planned in advance. One player takes on the role of Game Master and decides what happens next: they place AI units, vehicles and objects, give groups waypoints and steer the action in real time. The mode is the equivalent of Zeus from Arma 3.

## Start a Game Master scenario

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter scenario ID**\
   Enter one of the following scenario IDs in the **Scenario ID** field:

   | Scenario | Scenario ID |
   |----------|-------------|
   | Game Master – Everon | `{59AD59368755F41A}Missions/21_GM_Eden.conf` |
   | Game Master – Arland | `{2BBBE828037C6F4B}Missions/22_GM_Arland.conf` |
   | Game Master – Kolguyev | `{F45C6C15D31252E6}Missions/27_GM_Cain.conf` |

4. **Restart the server**\
   Save the setting and restart your server.

> [!NOTE]
> The **Scenario ID** field overwrites the `scenarioId` entry in `config.json` on every server start. So always change the scenario in the dashboard. You can find more scenarios in the guide [Change Scenario](/tutorials/gameserver/arma-reforger/change-scenario).

## Who becomes Game Master

The following rules apply on a Game Master server:

- A player listed as server admin **always** has access to the Game Master interface.
- If no Game Master is present, the **first player to connect** obtains the Game Master role.
- The role cannot be transferred while that player is connected.

> [!WARNING]
> If no Game Master is present, the first player to join gets the Game Master role – even if you are listed as admin. As a listed admin, however, you always have access to the Game Master interface yourself. To prevent strangers from taking the role, join your server first or protect it with a **Server Password** in the **Settings** while you are not online.

### Add yourself as admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Enter SteamID64**\
   Open the file `config.json` and enter your SteamID64 in the `"game"` section under `"admins"`:

   ```json
   "game": {
     "admins": [
       "76561198000000001"
     ]
   }
   ```

   The list can contain a maximum of 20 entries.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

4. **Start the server**\
   Save the file and start your server.

> [!TIP]
> You can learn how to find your SteamID64 in the guide [Find Out SteamID64](/tutorials/gameserver/steamid64-find-out). For more details on admins, see [Add Admin](/tutorials/gameserver/arma-reforger/add-admin) and [Become Admin](/tutorials/gameserver/arma-reforger/become-admin).

### Log in as admin in-game

You can also log in as server admin in-game. To do this, set an **Admin Password** in the dashboard under **Settings**. In the game, open the chat – with `C` in the lobby, with `Enter` in-game – and enter the following command:

```text
#login YourAdminPassword
```

Players listed as admin in `config.json` can also log in with `#login` without a password. You can find more commands in the guide [Become Admin](/tutorials/gameserver/arma-reforger/become-admin).

## Budgets

What the Game Master can place is limited by budgets. They are shown at the bottom right of the Entity Browser:

| Budget | Applies to |
|--------|------------|
| Object Budget | Objects such as props and compositions |
| AI Budget | AI-controlled units, e.g. soldiers |
| Vehicle Budget | Vehicles such as cars and armored vehicles |
| System Budget | Respawn points, objectives, arsenals, etc. |

Once a budget reaches 100 %, the Game Master cannot place anything more of that type until existing entries are removed. The other budgets are not affected, e.g. vehicles can still be placed when the AI Budget is full.

> [!TIP]
> The **Clear Destroyed Entities** function in the Game Master toolbar removes all killed soldiers and destroyed vehicles. This frees up budget they may still occupy.

> [!NOTE]
> In addition, you can limit the number of AI units on your server globally with the `aiLimit` entry in the `"operating"` section of `config.json`. Once this limit is reached, no system can spawn any more AI units – this also applies to units the Game Master wants to place. You can learn how in the guide [Disable or Limit AI](/tutorials/gameserver/arma-reforger/disable-ai).

## Save Game Master sessions

If the scenario supports saving, the server automatically creates saves. By default, it creates a save every 10 minutes (`autoSaveInterval`) and keeps the last 10 (`saveRetention`). You can adjust both values in the optional `"persistence"` section under `"gameProperties"` in `config.json` as described in the guide [Change Scenario Settings](/tutorials/gameserver/arma-reforger/change-scenario-settings).

> [!TIP]
> You can learn how to back up a save or upload one to the server in the guides [Download Savegame](/tutorials/gameserver/arma-reforger/download-savegame) and [Add Savegame](/tutorials/gameserver/arma-reforger/add-savegame). Also create a [backup](/tutorials/gameserver/arma-reforger/create-backup) before making major changes.
