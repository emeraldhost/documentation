---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Nightingale Server"
description: "Add an admin to a Nightingale server"
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
short_title: "Add Admin"
sort: 1
related: ["gameserver/nightingale/add-savegame", "gameserver/nightingale/create-backup", "gameserver/nightingale/download-savegame", "gameserver/nightingale/join-server"]
---

Nightingale has **no admin list with Steam or Epic IDs**. Instead there is a single **admin password** for the server: whoever enters it in the game unlocks admin mode for themselves. So you do not need to collect any IDs – you simply hand the password to the people who should get admin rights.

> [!WARNING]
> Everyone who knows the admin password can kick and ban players on your server. Only share it with people you trust and use a different password than your server password.

## Set the admin password

1. **Open the dashboard**\
   Open the **dashboard** of your server and switch to the **Settings**.

2. **Enter the admin password**\
   Enter the password you want in the **Admin Password** field.

3. **Restart the server**\
   Save the change and restart your server so the new password is applied.

> [!IMPORTANT]
> If a password is already pre-filled in the field, make sure to replace it with your own before your server is publicly reachable – otherwise anyone who knows the pre-filled value can gain admin rights.

> [!NOTE]
> **Why not in the configuration file?**
>
> The admin password is stored in `/NWX/Config/ServerSettings.ini` in the line `AdminPassword=`. However, your server rewrites that line from the dashboard field on **every start**. A manual change in the file would be gone again after the next start – so only set the password in the dashboard. The same applies to the server password (`Password=`) and the difficulty (`StartingDifficulty=`).

## Enable admin mode in the game

1. **Join the server**\
   Connect to your server. How to do that is described in [Join Server](/tutorials/gameserver/nightingale/join-server).

2. **Open the menu**\
   Press `Esc` in the game to open the menu.

3. **Select Admin Mode**\
   Select the entry **Admin Mode: OFF**.

4. **Enter the password**\
   Enter the admin password of your server and confirm with **Confirm**.

5. **Check the result**\
   If the menu now shows **Admin Mode: ON**, you are authenticated as an admin.

## Disable admin mode again

1. **Open the menu**\
   Press `Esc` and select the entry **Admin Mode: ON**.

2. **Confirm**\
   Confirm with **Confirm**.

3. **Rejoin**\
   Leave the server and join again so the change takes effect.

> [!NOTE]
> Admin mode only applies to the current session and the current connection. After a lost connection or a server restart you enable it again the next time you join.

> [!TIP]
> How to remove players from your server as an admin is described in [Kick & Ban Players](/tutorials/gameserver/nightingale/kick-ban-players).

## What admin mode can do – and what it cannot

> [!NOTE]
> In Nightingale, admin mode exists to **kick and ban players**. There are no classic admin chat commands, and the console in the dashboard only shows the server's output – it does **not** accept commands.

> [!WARNING]
> **Cheat and debug menu**
>
> Separate from this there is the cheat and debug menu. You do **not** need it for kicking and banning. If you want to use it on your server, three things are required:
>
> - Enable it on the server through the **Enable Cheats** variable in the dashboard.
> - Additionally start your client with the `-EnableCheats` launch option. Add it in Steam under **Library → Nightingale → Properties → Launch Options**.
> - Authenticate in the game with the admin password as described above.
