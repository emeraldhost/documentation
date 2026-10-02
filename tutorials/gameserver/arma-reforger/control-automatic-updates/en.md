---
slug: "control-automatic-updates"
language: "en"
title: "How to Control the Automatic Updates of Your Arma Reforger Server"
description: "Control automatic updates on an Arma Reforger server and pin mod versions"
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
short_title: "Control Automatic Updates"
sort: 16
related: ["gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/troubleshoot-server", "gameserver/arma-reforger/create-backup", "gameserver/arma-reforger/configure-server"]
---
Your Arma Reforger server can update itself to the latest version on every start. The **Auto Update** field in the dashboard decides whether that happens.

| Field | Values | Meaning |
|-------|--------|---------|
| **Auto Update** | `1` / `0` | `1` = the server checks for a new server version on every start and installs it, `0` = the installed version stays unchanged |

> [!NOTE]
> Create a backup before you restart your server after a game update: [Create Backup](/tutorials/gameserver/arma-reforger/create-backup). That way you can restore your save and your configuration if something goes wrong.

## Turn Auto Update on or off

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter the value**\
   Enter the desired value in the **Auto Update** field: `1` for automatic updates, `0` to turn them off.

4. **Restart the server**\
   Save the setting and restart your server.

## Bring the server to the latest version

When a new update for Arma Reforger has been released, leave **Auto Update** on `1` and restart your server. During the start, the new server version is downloaded and installed, after which the server starts as usual.

> [!TIP]
> Restart your server as soon as possible after a game update. Once your players have updated their game, they can only join again when your server runs the new version as well – the sooner your server catches up, the shorter this time.

## When you should turn off Auto Update

- <b>No version jump in the middle of a session</b><br>
  Otherwise every restart pulls in a new version that has already been released. As long as **Auto Update** is set to `0`, your server stays on the version that is currently installed.

- <b>An update causes problems</b><br>
  If your server runs on a version where everything works, `0` keeps it there, e.g. until your mods have been adapted to the new update. However, `0` only prevents upcoming updates: an update that is already installed cannot be undone this way.

> [!WARNING]
> Only leave **Auto Update** on `0` temporarily. Players whose game has already been updated then have a different version than your server and cannot join. You can only play together again once the server and the game are on the same version. So set the value back to `1` in time.

## Mod versions and updates

Your mods are updated on start as well – depending on how they are entered in `config.json`. The **Auto Update** field has no effect on this – you control mods only through the `version` entry. You can find out how to add mods in [Add Mods](/tutorials/gameserver/arma-reforger/add-mods).

- <b>Without `version`</b><br>
  If a mod entry has no `version`, your server always loads the latest version of this mod on start.

- <b>With `version`</b><br>
  If the entry contains a fixed version number, the mod stays on exactly that version until you change it yourself.

> [!TIP]
> **Example**
>
> ```json
> "mods": [
>   {
>     "modId": "59674C21AA886D57",
>     "name": "BetterMuzzleFlashes 2.0"
>   },
>   {
>     "modId": "591AF5BDA9F7CE8B",
>     "name": "Capture & Hold",
>     "version": "1.0.8"
>   }
> ]
> ```
>
> The first mod is brought to the latest version on every start, the second one stays on version `1.0.8`.

A fixed version can be helpful around big game updates: your mod set then does not change unexpectedly just because a mod author releases a new version in the meantime. However, if a pinned mod version is not compatible with the new game update, the mod may no longer work properly on your server. In that case, enter the new version number or remove the `version` entry.

### Change a mod version

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Adjust the version**\
   Open the `config.json` file and enter the new version number under `version` for the desired mod in the `"mods"` section – or remove the `version` line so that the latest version is always loaded.

   > [!TIP]
   > Watch the commas when removing a line: there must be no comma after the last value of a mod entry. Check the file after editing with a JSON formatter like [JSONLint](https://jsonlint.com/) – a missing or extra comma is enough to keep the server from starting.

4. **Start the server**\
   Save the file and start your server.
