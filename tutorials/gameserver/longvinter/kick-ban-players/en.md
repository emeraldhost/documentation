---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Longvinter Server"
description: "Kick and ban players on a Longvinter server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 6
related: ["gameserver/longvinter/add-savegame", "gameserver/longvinter/create-backup", "gameserver/longvinter/download-savegame", "gameserver/longvinter/join-server"]
---

You remove players from a Longvinter server through the **admin panel inside the game**. There are no chat or console commands for this.

> [!NOTE]
> You need admin rights to open the admin panel. See [Add Admin](/tutorials/gameserver/longvinter/add-admin).

## Kick or ban a player

1. **Join as an admin**\
   Connect to your server – see [Join Server](/tutorials/gameserver/longvinter/join-server).

2. **Open the admin panel**\
   Press `ESC` and click on **Admin panel** in the top left.

3. **Open the player list**\
   Switch to the **Current Players** tab. It shows every player currently on your server.

4. **Select the player**\
   Click the **plus icon** next to the player you want to remove.

5. **Choose the action**\
   Select **Kick** or **Ban**:

   - **Kick** disconnects the player from the server. They can rejoin at any time.
   - **Ban** locks the player out permanently. They can only connect again once you lift the ban.

## Unban a player

1. **Open the admin panel**\
   Press `ESC` in the game and click on **Admin panel** in the top left.

2. **Open the ban list**\
   Switch to the **Banned ID's** tab. It lists all banned players with their EOS ID.

3. **Remove the ban**\
   Click **UnBan** next to the EOS ID you want to unblock.

> [!NOTE]
> The ban list is stored on your server and survives a restart. It can only be edited through the admin panel – there is no documented way to reset all bans at once through a file.

## No kick and ban commands in chat

> [!WARNING]
> You kick and ban players exclusively through the admin panel. There are **no chat commands** and **no RCON** for it. The console in the dashboard does not accept game commands either – it only shows the server output. Circulating command lists containing entries such as `/kick`, `/ban` or `/announce` are not backed by any source and do not work. Other admin chat commands such as `/noclip` or `/give` do exist – but there is no way around the admin panel for removing players.

> [!TIP]
> If you want to keep your server restricted to certain players, set a server password in the **dashboard** and share it only with them. Keep in mind that the password may only contain letters and numbers.
