---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your FiveM Server"
description: "Kick and ban players on a FiveM server"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 7
related: ["gameserver/fivem/import-database", "gameserver/fivem/join-server", "gameserver/fivem/set-license-key", "gameserver/fivem/set-port"]
---

You have two ways to moderate your FiveM server: the **txAdmin web interface** and the **server console**. In txAdmin you can kick, warn and ban players with a few clicks and revoke bans later on. Via the console you can only kick players – FXServer does not ship with a built-in ban command.

> [!NOTE]
> Whether txAdmin runs is controlled by the **txAdmin** field in your dashboard (`1` = enabled, `0` = disabled). On server start, txAdmin prints the address of its web interface to the console. How to set up txAdmin is explained under [Enable txAdmin](/tutorials/gameserver/fivem/enable-txadmin).

## Find a player in txAdmin

1. **Open txAdmin**\
   Open the txAdmin web interface of your server and log in with your admin account.

2. **Open the playerlist**\
   All connected players are listed in the playerlist on the right-hand side. Use the **Filter by Name or ID** field to narrow down the list.

3. **Open the player window**\
   Click the name of the player. A window opens with the tabs **Info**, **History**, **IDs** and **Ban** as well as the buttons **DM**, **Kick** and **Warn**.

> [!NOTE]
> Players who are currently offline can be found under **Players** in the top menu. There you can search by **Name**, **Notes** or **Player IDs**. **Banning** and **warning** also works for offline players, while **kicking** only works for players who are currently connected.

## Kick a player

1. **Open the player window**\
   Open the window of the player as described above.

2. **Select Kick**\
   Click **Kick** at the bottom of the window.

3. **Enter a reason**\
   Type a reason or leave the field blank, then confirm with **Send**.

> [!NOTE]
> A kick only removes the player from the current session. They can reconnect immediately afterwards. If someone should stay out for good, use a ban instead.

> [!TIP]
> To remove everyone at once, click **Kick All Players** in the server controls in the left sidebar.

## Ban a player

1. **Open the player window**\
   Open the window of the player and switch to the **Ban** tab.

2. **Enter a reason**\
   Type the reason for the ban into the **Reason** field. The reason has to be at least three characters long.

3. **Choose a duration**\
   Pick one of the presets under **Duration**:

   | Option | Meaning |
   |--------|---------|
   | `Custom (set below)` | your own duration |
   | `2 HOURS` / `8 HOURS` | 2 or 8 hours |
   | `1 DAY` / `2 DAYS` | 1 or 2 days |
   | `1 WEEK` / `2 WEEKS` | 1 or 2 weeks |
   | `Permanent` | permanent |

   With **Custom (set below)** you enter a number underneath and choose **HOURS**, **DAYS**, **WEEKS** or **MONTHS** as the unit.

4. **Apply the ban**\
   Click **Apply Ban**. If the player is currently connected, they are dropped from the server right away.

> [!NOTE]
> The ban applies to every identifier txAdmin has stored for that player – not just to their name. On the next connection attempt the player sees a message containing **Ban Reason**, **Ban Date**, **Banned by** and the **Ban ID**.

> [!TIP]
> Save recurring reasons as a template: **Settings** → **Bans** → **Edit Ban Templates**. The same page holds the **Ban Rejection Message** – an optional text that is shown to banned players in addition. If you have a ban appeal process, you can use it to point players to it.

## Revoke a ban

1. **Open History**\
   Click **History** in the top menu. All warnings and bans are listed there.

2. **Find the entry**\
   Search for the ban by its **Action ID** (format `XXXX-XXXX`), by **Reason** or by **Player IDs**. You can additionally filter by type and by the admin who issued it.

   > [!TIP]
   > The Action ID is exactly the **Ban ID** shown to the banned player on their connection attempt. Ask the player for it and you will find the entry instantly.

3. **Open the entry**\
   Click the entry. A window opens with the tabs **Info**, **IDs** and **Revoke**.

4. **Revoke the ban**\
   Switch to the **Revoke** tab and click **Revoke Ban**.

> [!NOTE]
> You can reach the same dialog straight from the player window: in its **History** tab, simply click the entry in question.

## Kick a player via the server console

> [!NOTE]
> Which console you need depends on the **txAdmin** field: if it is set to `1`, txAdmin controls the actual server process – enter your commands in the **Live Console**, which you find in the left sidebar of txAdmin. If it is set to `0`, your server starts directly with `+exec server.cfg` and you use the console in your dashboard.

> [!WARNING]
> Commands have to be entered in the console **without** a leading slash.

1. **Open the console**\
   Open the **Live Console** in txAdmin or – with txAdmin disabled – the console in your dashboard.

2. **Look up the player ID**\
   List all connected players:

   ```text
   status
   ```

   The output shows the server ID, the name, the primary identifier and the ping for every player.

3. **Kick the player**\
   Kick the player by their server ID and add a reason:

   ```text
   clientkick 12 Breaking the rules
   ```

> [!NOTE]
> `status` and `clientkick` are provided by the default resource `rconlog`. It has to be running for the commands to be available – in the default `server.cfg` this is handled by the line `ensure rconlog`.

> [!WARNING]
> FXServer has no built-in ban command. Bans are issued either through txAdmin or through the ban system of your framework or script.

## Permissions for your team

Which admin is allowed to kick or ban is defined under **Admins** in txAdmin. The relevant permissions are:

- `players.kick` – kick a player
- `players.warn` – warn a player
- `players.ban` – ban and unban a player
- `console.write` – run commands in the Live Console

> [!TIP]
> Only grant the permissions that are actually needed. A moderator usually gets by with `players.kick`, `players.warn` and `players.ban` – permissions such as `control.server` or `settings.write` are not required for that.
