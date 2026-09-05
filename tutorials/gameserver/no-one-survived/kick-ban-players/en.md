---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your No One Survived Server"
description: "Kick and ban players on a No One Survived server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 8
related: ["gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup", "gameserver/no-one-survived/download-savegame", "gameserver/no-one-survived/join-server"]
---

On a No One Survived server you remove players through the **in-game admin panel**. There are no documented chat or console commands for this.

> [!NOTE]
> These functions are only available to players who signed in with the admin password. See [Add Admin](/tutorials/gameserver/no-one-survived/add-admin).

## Kick a player

1. **Join as an admin**\
   Join your server – see [Join Server](/tutorials/gameserver/no-one-survived/join-server).

2. **Open the admin panel**\
   Press `Alt` + `Shift` + `O` at the same time, enter the admin password and confirm your input.

3. **Open the blacklist**\
   Switch to the **Blacklist** tab in the panel.

4. **Refresh the player list**\
   Click **Refresh** so the currently connected players get loaded.

5. **Kick the player**\
   Click **Kick Out** next to the player in question. The player gets disconnected from the server and can rejoin at any time.

## Ban a player

1. **Open the blacklist**\
   Open the admin panel with `Alt` + `Shift` + `O`, sign in and switch to the **Blacklist** tab.

2. **Refresh the player list**\
   Click **Refresh**.

3. **Ban the player**\
   Click **Add to Blacklist** next to the player in question. The player gets disconnected from the server and can no longer join.

## Remove a ban

1. **Open the blacklist**\
   Open the admin panel with `Alt` + `Shift` + `O`, sign in and switch to the **Blacklist** tab.

2. **Remove the ban**\
   Find the banned player in the list and click **Remove** next to them. Afterwards they can rejoin your server immediately.

> [!NOTE]
> The exact naming of the tabs and buttons can change with game updates. Look for the overview of connected and blocked players in the admin panel.

> [!WARNING]
> **The player has to be connected**
>
> Kicking and banning requires the player to appear in the panel's list. You cannot block a player in advance who is currently not on the server.

> [!CAUTION]
> **Do not lock yourself out**
>
> If you accidentally add yourself to the blacklist, you can no longer reach your server and therefore no longer reach the admin panel either. A file for editing the blacklist over SFTP is **not documented** for No One Survived – so proceed carefully when banning.

## No commands and no RCON

> [!IMPORTANT]
> There is **no server console, there are no chat commands and there is no RCON** documented for No One Survived. Everything related to kicking and banning runs through the in-game admin panel. Commands such as `Kick <player>`, `Ban <player>` or `Unban <player>` do not appear in the official documentation – do not rely on circulated command lists.

> [!TIP]
> If you generally want to restrict your server to specific players, set a server password and only share it with those people. There is no whitelist in No One Survived.
