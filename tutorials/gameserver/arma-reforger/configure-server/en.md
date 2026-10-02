---
slug: "configure-server"
language: "en"
title: "How to Configure Your Arma Reforger Server"
description: "Configure an Arma Reforger server via the settings and the config.json"
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
short_title: "Configure Server"
sort: 10
related: ["gameserver/arma-reforger/use-rcon", "gameserver/arma-reforger/improve-performance", "gameserver/arma-reforger/change-scenario-settings", "gameserver/arma-reforger/enable-crossplay"]
---
You can find the settings of your Arma Reforger server in two places:

- in the dashboard of your server under **Settings** – here you set the most important values such as the server name, passwords or the scenario
- in the `config.json` file in the root directory of your server – here you set everything else, e.g. admins, mods, view distances or voice chat

## Settings in the dashboard

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Adjust values**\
   Adjust the desired fields (see table below).

4. **Restart the server**\
   Save the setting and restart your server.

### Available fields

| Field | Description |
|-------|-------------|
| **Server Name** | Name of your server in the server browser |
| **Server Password** | Password players have to enter to join. Leave empty for a public server. |
| **Admin Password** | Password you use to log in as an admin in-game – see [Become Admin](/tutorials/gameserver/arma-reforger/become-admin). Spaces are not allowed. |
| **Max Players** | Maximum number of players on your server |
| **Scenario ID** | The scenario your server loads – see [Change Scenario](/tutorials/gameserver/arma-reforger/change-scenario) |
| **Visible in Server Browser** | `true` = your server is shown in the server browser, `false` = your server is hidden there |
| **Battle-Eye** | `true` = BattlEye anti-cheat is active, `false` = BattlEye is disabled. Without BattlEye, your server does not appear in the server browser on PlayStation 5 – see [Crossplay](/tutorials/gameserver/arma-reforger/enable-crossplay). |
| **Disable Third Person** | `true` = all players are restricted to the first-person view, `false` = the third-person view is allowed |
| **Max FPS** | Upper limit for the server FPS (default: `120`). Leave empty for no limit. |
| **[Advanced] Log FPS Interval** | Interval in seconds at which the server writes performance values such as FPS, memory usage, player and AI count to the log. `0` turns the output off. See [Improve Performance](/tutorials/gameserver/arma-reforger/improve-performance#measure-performance) and [Read Server Log](/tutorials/gameserver/arma-reforger/read-server-log). |
| **Auto Update** | `1` = automatic server updates are active, `0` = disabled – see [Control Automatic Updates](/tutorials/gameserver/arma-reforger/control-automatic-updates) |
| **RCON Password** | Password for remote access via RCON. The password must be at least 3 characters long and must not contain spaces – see [Use RCON](/tutorials/gameserver/arma-reforger/use-rcon). |

> [!NOTE]
> The RCON port and the A2S port (server query) are set by EmeraldHost for your server. You cannot change these values.

> [!TIP]
> If you enter a lower **Max FPS** value, your server uses fewer resources. You can find more about this under [Improve Performance](/tutorials/gameserver/arma-reforger/improve-performance).

## What the dashboard overwrites in the config.json

On **every** server start, the dashboard writes the values from the **Settings** into the `config.json`.

> [!WARNING]
> The following entries of the `config.json` are overwritten on every start. Changing them directly in the file has no effect:
>
> - `bindAddress`, `bindPort`, `publicAddress`, `publicPort`
> - `a2s` (`address` and `port`)
> - `rcon` → `address`, `port`, `password`
> - `game` → `name`, `password`, `passwordAdmin`, `scenarioId`, `maxPlayers`, `visible`
> - `game` → `gameProperties` → `disableThirdPerson`, `battlEye`
>
> In addition, `game` → `crossPlatform` is always set to `true` and `game` → `gameProperties` → `fastValidation` is always set to `true`. Crossplay therefore cannot be turned off via `crossPlatform` – find out more under [Crossplay](/tutorials/gameserver/arma-reforger/enable-crossplay).
>
> You change the server name, server password, admin password, scenario ID, max players, visibility, third person, BattlEye and RCON password in the dashboard under **Settings**. Addresses and ports are set by EmeraldHost and cannot be changed.

> [!NOTE]
> Bohemia Interactive recommends always keeping `fastValidation` set to `true` on public servers and limiting the server FPS. `fastValidation` is permanently enabled on your server, and **Max FPS** sets a limit of 120 FPS by default – so do not leave the field empty.

## Structure of the config.json

After the installation, the `config.json` looks like this (shortened). The values in the sections the dashboard overwrites depend on your **Settings**:

```json
{
  "bindAddress": "...",
  "bindPort": 2001,
  "publicAddress": "...",
  "publicPort": 2001,
  "a2s": { "address": "...", "port": 17777 },
  "rcon": {
    "address": "...",
    "port": 19999,
    "password": "...",
    "permission": "monitor",
    "blacklist": [],
    "whitelist": []
  },
  "game": {
    "name": "...",
    "password": "",
    "passwordAdmin": "...",
    "admins": [],
    "scenarioId": "...",
    "maxPlayers": 32,
    "visible": true,
    "crossPlatform": true,
    "gameProperties": {
      "serverMaxViewDistance": 2500,
      "serverMinGrassDistance": 50,
      "networkViewDistance": 1000,
      "disableThirdPerson": false,
      "fastValidation": true,
      "battlEye": true,
      "VONDisableUI": false,
      "VONDisableDirectSpeechUI": false
    },
    "mods": []
  }
}
```

> [!NOTE]
> Ports, addresses and the other values shortened with `...` are set automatically by the dashboard. The numbers for ports and players are only example values here.

### Entries you can change via SFTP

All entries that are not in the list above are kept on server start. You can adjust these yourself in the `config.json`:

| Entry | Description |
|-------|-------------|
| `game` → `admins` | List of permanent admins (SteamID64 or IdentityId, at most 20 entries) – see [Add Admin](/tutorials/gameserver/arma-reforger/add-admin) |
| `game` → `mods` | Mods that players automatically download when joining – see [Add Mods](/tutorials/gameserver/arma-reforger/add-mods) |
| `game` → `gameProperties` → `serverMaxViewDistance` | Maximum view distance on the server (`500` to `10000`) – see [Improve Performance](/tutorials/gameserver/arma-reforger/improve-performance) |
| `game` → `gameProperties` → `serverMinGrassDistance` | Minimum grass distance in meters that is forced on the players (`0` or `50` to `150`). With `0`, no distance is forced. |
| `game` → `gameProperties` → `networkViewDistance` | Maximum range in which objects are transferred to the players over the network (`500` to `5000`) |
| `game` → `gameProperties` → `VONDisableUI`, `VONDisableDirectSpeechUI`, `VONCanTransmitCrossFaction` | Voice chat settings – see [Set Up Voice Chat](#set-up-voice-chat) |
| `game` → `gameProperties` → `missionHeader` | Overrides settings of the scenario – see [Change Scenario Settings](/tutorials/gameserver/arma-reforger/change-scenario-settings) |
| `rcon` → `permission`, `blacklist`, `whitelist` | Permissions and allowed or blocked commands for RCON – see [Use RCON](/tutorials/gameserver/arma-reforger/use-rcon#set-rcon-permissions) |
| `operating` | Optional section for further server settings – see [Entries in the operating section](#entries-in-the-operating-section) |

### Entries in the operating section

The `operating` section is not included in the `config.json` after the installation. You can add it yourself as a separate top-level section if needed, i.e. next to `game` and not inside it.

| Entry | Description |
|-------|-------------|
| `joinQueue` → `maxSize` | Size of the join queue when the server is full (`0` to `50`, default `0` = disabled) |
| `playerSaveTime` | Interval in seconds at which the server saves the player data (default `120`) |
| `slotReservationTimeout` | How long in seconds a slot stays reserved for a kicked player (`5` to `300`, default `60`). The reservation only applies to so-called replication kicks. |
| `disableAI`, `aiLimit` | Disable the AI completely or limit it – see [Disable or Limit AI](/tutorials/gameserver/arma-reforger/disable-ai) |
| `disableNavmeshStreaming` | Loads the entire navmesh into memory – see [Improve Performance](/tutorials/gameserver/arma-reforger/improve-performance#disable-navmesh-streaming-optional) |
| `disableServerShutdown`, `lobbyPlayerSynchronise` | Behavior when the connection to the backend is lost and synchronization of the player count – see [Troubleshoot Common Problems](/tutorials/gameserver/arma-reforger/troubleshoot-server) |

> [!TIP]
> **Example**
>
> This is what an `operating` section looks like that enables a join queue for up to 10 players:
>
> ```json
> "operating": {
>   "joinQueue": {
>     "maxSize": 10
>   }
> }
> ```
>
> Mind the comma after the closing bracket `}` of `game` so that both sections are separated correctly.

## How to edit the config.json

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config.json**\
   Open the `config.json` file in the root directory of your server.

4. **Adjust entries**\
   Change the desired values. Make sure you only change entries that are not overwritten by the dashboard.

   > [!WARNING]
   > Entry names are case-sensitive. `VONDisableUI` works, `vonDisableUI` does not. Write numbers and `true`/`false` without quotation marks.

5. **Check the file**\
   Check the content of the file for errors before you save it.

   > [!TIP]
   > To do this, copy the content into a JSON formatter like [JSONLint](https://jsonlint.com/) – a single missing or extra comma is enough to prevent the server from starting.

6. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> If the `config.json` contains errors, your server will not start. Ideally, create a [backup](/tutorials/gameserver/create-backup) before making larger changes so you can return to the previous state at any time.

## Set up voice chat

You adjust voice chat (VON) in the `gameProperties` section inside `game` in the `config.json`:

| Entry | Default | Description |
|-------|---------|-------------|
| `VONDisableUI` | `false` | `true` hides the voice chat UI for all players |
| `VONDisableDirectSpeechUI` | `false` | `true` hides the direct speech UI for all players |
| `VONCanTransmitCrossFaction` | `false` | `true` = players can transmit on radios of other factions, `false` = they can only listen there |

> [!TIP]
> **Example**
>
> ```json
> "game": {
>   "gameProperties": {
>     "VONDisableUI": false,
>     "VONDisableDirectSpeechUI": true,
>     "VONCanTransmitCrossFaction": false
>   }
> }
> ```
>
> Add the entries to your existing `gameProperties` section and leave the other entries there unchanged.

> [!NOTE]
> `VONCanTransmitCrossFaction` is not included in the `config.json` after the installation. Add the entry yourself if needed. If it is missing, the default value `false` applies.
