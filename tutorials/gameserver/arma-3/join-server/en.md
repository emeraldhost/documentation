---
slug: "join-server"
language: "en"
title: "How to Join Your Arma 3 Server"
description: "Join an Arma 3 server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame", "gameserver/arma-3/kick-ban-players"]
---

Freshly started servers often show up in the public server browser only after a delay. The fastest and most reliable way onto your server is therefore a direct connection using IP address and port – either in the Arma 3 launcher or inside the game.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. Enter the **Game Port** – not the Query Port.

If a password is set for your server, you need that password as well.

## Connect via the Arma 3 launcher

1. **Start the launcher**\
   Start Arma 3 via Steam. The Arma 3 launcher opens.

2. **Open the server list**\
   Click on **Servers** on the left.

3. **Open Direct Connect**\
   Click on **Direct Connect** at the bottom.

4. **Enter the server address**\
   Enter the IP address of your server and the Game Port from the dashboard:

   ```text
   123.45.67.89
   ```

   > [!NOTE]
   > The launcher has separate fields for the IP address and the port. The port field is prefilled – replace the value with the Game Port from your dashboard.

5. **Enter the password**\
   If your server is password protected, enter the server password in the corresponding field.

6. **Connect**\
   Confirm your input. The launcher starts the game and connects you directly to your server.

## Via the server browser in the game

1. **Start Arma 3**\
   Start the game and wait until the main menu has loaded.

2. **Open Multiplayer**\
   Select **Multiplayer** in the main menu and then **Server Browser**.

3. **Choose Direct Connect**\
   Click on **Direct Connect**.

4. **Enter the server address**\
   Enter the IP address, the Game Port and – if set – the server password.

5. **Join the server**\
   After confirming, your server appears in the **LAN** tab. Select it there and click **Join**.

   > [!NOTE]
   > It is normal for the server to show up in the **LAN** tab. Arma 3 puts manually added servers there, no matter whether they are hosted on the internet.

## Mods have to match

> [!WARNING]
> **Caution**
>
> If your server runs mods loaded through `-mod=`, you have to enable the very same mods in the launcher before joining. If a mod is missing or a different version is active, you get rejected on connect. See [Add Mods](/tutorials/gameserver/arma-3/add-mods) for how to set mods up.

Mods your server loads through `-serverMod=` run server-side only. As a player you do **not** need to install those.

## Which ports does Arma 3 use?

> [!NOTE]
> An Arma 3 server occupies several consecutive UDP ports. Starting from the Game Port they are used as follows:
>
> | Port | Purpose |
> |------|---------|
> | Game Port | Game data and Voice over Net (VON) – players connect through this one |
> | Game Port + 1 | Query Port – Steam and the server browser query the server through this one |
> | Game Port + 2 | Steam port |
> | Game Port + 3 | Reserved VON port – currently not in use |
> | Game Port + 4 | BattlEye – RCON runs through this one as well |
>
> The concrete values for your server are shown in the **dashboard**. All of these ports are reserved for your server.

> [!WARNING]
> **Server not found**
>
> If your server does not show up in the public server browser, use the direct connection. Through **Direct Connect** you reach it regardless of whether it is listed publicly.
