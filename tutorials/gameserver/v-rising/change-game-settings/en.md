---
slug: "change-game-settings"
language: "en"
title: "How to Change the Game Settings on Your V Rising Server"
description: "Change game settings on a V Rising server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Game Settings"
sort: 6
related: ["gameserver/v-rising/install-bepinex", "gameserver/v-rising/add-savegame", "gameserver/v-rising/change-save-interval", "gameserver/v-rising/change-server-description"]
---

You can adjust the preset game settings via the dashboard. These determine the game mode and difficulty of your server.

> [!NOTE]
> Some settings may no longer apply after the save file has been created for the first time. Leave the field empty if you are using an uploaded singleplayer save or a custom `ServerGameSettings.json` in the `~/save-data/Settings/` directory.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Select game settings**\
   Enter the desired value in the **Preset Game Settings** field:

   | Value | Description |
   |-------|-------------|
   | `StandardPvE` | Standard PvE |
   | `StandardPvE_Easy` | Standard PvE (Easy) |
   | `StandardPvE_Hard` | Standard PvE (Hard) |
   | `StandardPVP` | Standard PvP |
   | `StandardPvP_Easy` | Standard PvP (Easy) |
   | `StandardPvP_Hard` | Standard PvP (Hard) |
   | `Level30PvE` | PvE up to Level 30 |
   | `Level30PvP` | PvP up to Level 30 |
   | `Level50PvE` | PvE up to Level 50 |
   | `Level50PvP` | PvP up to Level 50 |
   | `Level70PvE` | PvE up to Level 70 |
   | `Level70PvP` | PvP up to Level 70 |
   | `SoloPvP` | Solo PvP |
   | `DuoPvP` | Duo PvP |
   | `HardcorePvP` | Hardcore PvP |
   | `Custom` | Custom settings |

4. **Restart the server**\
   Save the setting and restart your server.

> [!TIP]
> Choose `Custom` if you want to use your own settings via the `ServerGameSettings.json` in the `~/save-data/Settings/` directory.
