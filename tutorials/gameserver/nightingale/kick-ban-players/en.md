---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Nightingale Server"
description: "Kick and ban players on a Nightingale server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/nightingale/add-savegame", "gameserver/nightingale/create-backup", "gameserver/nightingale/download-savegame", "gameserver/nightingale/join-server"]
---

On a Nightingale server you remove players **directly in the game** through the social menu. There are no console or chat commands for kicking and banning.

> [!NOTE]
> You have to be authenticated as an admin in the game for this. See [Add Admin](/tutorials/gameserver/nightingale/add-admin).

## Kick a player

1. **Enable admin mode**\
   Press `Esc`, select **Admin Mode: OFF**, enter the admin password and confirm with **Confirm**.

2. **Open the social menu**\
   Press the `O` key in the game to open the **Social Screen**.

3. **Select the player**\
   Find the player you want to remove in the list.

4. **Remove**\
   Select **Remove** and confirm with **Confirm**.

The player is disconnected from the server but can rejoin at any time.

## Ban a player

1. **Open the social menu**\
   As an authenticated admin, press the `O` key.

2. **Select the player**\
   Find the player you want to lock out in the list.

3. **Ban**\
   Select **Ban** and confirm with **Confirm**.

The player is immediately thrown off the server and can no longer connect.

> [!NOTE]
> Nightingale has no time-limited bans. A ban stays in place until you lift it.

## Lift a ban

There is no way to unban someone in the game – you edit the file holding the server state instead.

1. **Stop the server**\
   Stop your server via the dashboard. The file is written on shutdown and read on startup.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open ServerState.ini**\
   Open the following file:

   ```text
   /NWX/Saved/Config/LinuxServer/ServerState.ini
   ```

4. **Remove the entry**\
   Look for the line starting with `Bans=`. Inside the brackets, delete the entry of the player you want to unban. All other entries and the brackets themselves stay in place.

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Create a [backup](/tutorials/gameserver/nightingale/create-backup) before editing, or download a copy of the file. A corrupted `ServerState.ini` can prevent the server from loading its state. If you find neither the file nor a `Bans=` line, nobody has been banned on your server yet – both are only created with the first ban.

> [!NOTE]
> **Lift all bans at once**
>
> If you delete the entire `/NWX/Saved/Config/` folder, the complete server state is reset and with it every ban. The server recreates the folder on the next start.

## No console commands

> [!WARNING]
> Nightingale offers **no RCON and no chat commands** for server administration. The console in the dashboard only shows the server's output and does not accept commands. Kicking and banning happen exclusively through the Social Screen in the game.

## No whitelist

> [!WARNING]
> Nightingale has **no whitelist feature**. If you want to restrict your server to certain players, set a server password in the dashboard and only share it with those players.
