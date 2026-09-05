---
slug: "join-server"
language: "en"
title: "How to Join Your Factorio Server"
description: "Join a Factorio server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame", "gameserver/factorio/kick-ban-players"]
---

Factorio does not have a Steam server browser for rented servers. Instead, you connect directly using the IP address and port of your server.

## Find connection details

> [!WARNING]
> **Important**
>
> To connect you need the **IP address** and the **port** of your server. You can find both in the **dashboard** of your server. Factorio only uses a single port over **UDP** (default: `34197`) – there is no separate query port.

## Via Connect to address

1. **Start Factorio**\
   Launch Factorio on your PC.

2. **Open Multiplayer**\
   Select **Multiplayer** in the main menu.

3. **Select Connect to address**\
   Click on **Connect to address**.

4. **Enter server address**\
   Enter the IP address and the port of your server, separated by a colon:

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:34197
   > ```

5. **Connect**\
   Confirm your input. If a password is set on the server, you will be prompted for it afterwards.

## Via the public server list

If your server is listed publicly, you can also find and join it via **Multiplayer** → **Browse public games**.

> [!NOTE]
> For your server to appear there, you need valid factorio.com credentials. Enter them in the dashboard under **Settings** in the fields **Server Benutzername** and **Server Token**. The token is safer than the password and can be retrieved from your profile on factorio.com.
>
> In addition, the visibility must be set to public in the file `data/server-settings.json`. You can edit the file via [SFTP](/tutorials/gameserver/establish-sftp-connection):
>
> ```json
> "visibility":
> {
>   "public": true
> }
> ```
>
> Afterwards, restart your server.

> [!TIP]
> Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from starting.

> [!WARNING]
> Do not enter `username` and `token` directly in the file `data/server-settings.json`. Both values are overwritten on every server start from the **Server Benutzername** and **Server Token** fields in the dashboard.

> [!IMPORTANT]
> Client and server must use the **exact same game version** and the **same mods**. Factorio verifies this by checksum and refuses the connection if anything differs.

> [!NOTE]
> By default the option `require_user_verification` is enabled on a Factorio server. Players therefore need a valid factorio.com account in order to join.
