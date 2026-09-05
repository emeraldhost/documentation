---
slug: "control-automatic-updates"
language: "en"
title: "How to Control the Automatic Updates of Your Enshrouded Server"
description: "Control automatic updates on an Enshrouded server"
tags: []
date: "2026-08-13"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Control Automatic Updates"
sort: 5
related: ["gameserver/enshrouded/adjust-difficulty", "gameserver/enshrouded/change-server-password", "gameserver/enshrouded/create-backup", "gameserver/enshrouded/download-savegame"]
---

Your Enshrouded server can update itself to the latest version on every start. Two fields in the dashboard decide whether that happens – and whether the server files are additionally checked for completeness and repaired.

| Field | Values | Default | Meaning |
|-------|--------|---------|---------|
| `Auto Update` | `1` / `0` | `1` | `1` = the server checks for a new version on every start and downloads it, `0` = the installed version stays unchanged |
| `Serverdateien validieren` (validate server files) | `1` / `0` | `0` | `1` = the existing server files are checked as well, missing or altered files are downloaded again, `0` = no check |

> [!NOTE]
> Create a backup before every update and before every validation: [Create Backup](/tutorials/gameserver/enshrouded/create-backup). That way you can restore your world and your configuration if something goes wrong.

## Turn Auto Update on or off

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter the value**\
   Enter the desired value in the **Auto Update** field: `1` for automatic updates, `0` to turn them off. Save the setting.

4. **Restart the server**\
   Restart your server so the setting takes effect.

## When you should turn off Auto Update

- **No version jump in the middle of a session**\
  Otherwise every restart pulls in a new version that has already been released. As long as `Auto Update` is set to `0`, your server stays on the version that is currently installed.

- **A patch causes you trouble**\
  If your server runs on a version where everything works, `0` keeps it exactly there until Keen Games follows up with a fix. However, `0` only prevents upcoming updates: an update that is already installed cannot be undone this way.

> [!TIP]
> Whether a patch affects your server at all is stated in the changelog: for client-only hotfixes, Keen Games explicitly notes that dedicated servers do not need an update ("Dedicated servers do not require an update").

> [!WARNING]
> Only leave `Auto Update` on `0` temporarily. Your players receive the new version through Steam automatically. If your server is still on the old version by then, the server browser marks it with a "Version mismatch" – you can only play together again once the server and the game are on the same version. So set the value back to `1` in good time.

## Validate the server files

If your server no longer starts after an update or after an interrupted download, server files may be missing or damaged. Validating restores them.

> [!WARNING]
> Validation only runs while **Auto Update** is set to `1`. With **Auto Update** on `0`, nothing is checked on start – no matter what the **Serverdateien validieren** field contains.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enable validation**\
   Enter the value `1` in the **Serverdateien validieren** field and set **Auto Update** to `1`. Save the settings.

4. **Restart the server**\
   Restart your server. This start takes noticeably longer because every single file is checked.

5. **Turn validation off again**\
   Enter `0` in the **Serverdateien validieren** field again as soon as your server runs cleanly.

> [!WARNING]
> Do not leave validation on `1` permanently. Every start would check all files again and your server would take noticeably longer to become reachable.

## What happens during validation

Steam compares every installed file with the reference from the server app and replaces everything that is missing or has been altered. Files that are not part of the installation are left untouched.

For you that means:

- **Your save stays intact**\
  The world is stored in the `savegame` folder (set in `enshrouded_server.json` as `saveDirectory` with the default value `./savegame`) and is therefore not part of the Steam installation.

- **Your configuration stays intact**\
  `enshrouded_server.json` is not part of the Steam installation and is not reset during validation. Your user groups and passwords from [Change Server Password](/tutorials/gameserver/enshrouded/change-server-password) therefore stay in place.

- **Modified game files are overwritten**\
  Everything that belongs to the installation of the server app is reset to its original state.

> [!TIP]
> If your server starts after validating but still stutters or lags, the guide [Performance Issues on Enshrouded Servers](/tutorials/gameserver/enshrouded/performance-problems-on-enshrouded-servers) will help you further.
