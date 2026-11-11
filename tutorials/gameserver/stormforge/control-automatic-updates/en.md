---
slug: "control-automatic-updates"
language: "en"
title: "How to Control the Automatic Updates of Your Stormforge Server"
description: "Control automatic updates on a Stormforge server and install a new version with a restart."
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
short_title: "Control Automatic Updates"
sort: 6
related: ["gameserver/stormforge/join-server", "gameserver/stormforge/create-backup", "gameserver/stormforge/download-savegame", "gameserver/stormforge/change-world-settings"]
---

Your Stormforge server can update itself to the latest version on every start. Whether that happens is decided by the **Auto Update** field in the dashboard.

| Field | Values | Default | Meaning |
| ----- | ------ | ------- | ------- |
| **Auto Update** | `1` / `0` | `1` | `1` = on every start the server checks Steam for a new server version and installs it, `0` = no update, the installed version stays unchanged |

Stormforge is in Early Access and receives updates frequently. According to the official FAQ, all players need to be on the same game version as the server. So leave **Auto Update** on `1` in normal operation.

> [!TIP]
> Create a backup before an update: [Create Backup](/tutorials/gameserver/stormforge/create-backup). That way you can restore your world and your settings if something goes wrong.

## Turn Auto Update on or off

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open the Config Editor**\
   Navigate to the **Config Editor**.

3. **Enter the value**\
   Enter the desired value in the **Auto Update** field: `1` for automatic updates, `0` to turn them off. Save the setting.

4. **Restart the server**\
   Restart your server so the setting takes effect.

## Install an update

Your server never restarts by itself. A new version only reaches the server with your next restart.

1. **Check Auto Update**\
   Open the **Config Editor** in the dashboard and check that the **Auto Update** field contains the value `1`.

2. **Restart the server**\
   Restart your server. During the start, the current server version is looked up and installed.

3. **Update the game**\
   Let Steam update your game as well. You can see which version your game has in the Stormforge main menu.

Your savegames and settings are kept during an update.

> [!NOTE]
> The check for a new version runs at most once every 5 minutes. If you start your server again within that time, the check does not run again. If a version that was just released is still missing afterwards, wait 5 minutes and restart your server once more.

> [!TIP]
> **Regular restart**\
> Under **Schedules** you can set up a regular restart, for example every night. That way your server picks up new versions without you having to think about it: [Set Up Scheduled Tasks](/tutorials/gameserver/set-up-scheduled-tasks).

## When you can turn off Auto Update

- **No version jump in the middle of a session**\
  Otherwise every restart installs a new version that has already been released. As long as **Auto Update** is set to `0`, your server stays on the version that is currently installed.

- **An update causes you trouble**\
  If your server runs on a version where everything works, `0` keeps it exactly there. However, `0` only prevents upcoming updates: an update that is already installed cannot be undone this way.

> [!WARNING]
> Only leave **Auto Update** on `0` temporarily. Your players receive the new version through Steam automatically. If your server is still on the old version by then, they can no longer join it until the server and the game are on the same version again. So set the value back to `1` in good time and restart your server.

If joining fails even though the versions match, the guide [Join Server](/tutorials/gameserver/stormforge/join-server) will help you further.
