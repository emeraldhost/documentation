---
slug: "join-server"
language: "en"
title: "How to Join Your Hytale Server"
description: "Join a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 19
related: ["gameserver/hytale/add-mods", "gameserver/hytale/item-loss-on-death", "gameserver/hytale/kick-ban-players", "gameserver/hytale/pause-game-time"]
---

You join your server via **Direct Connect** or save it to your server list for future connections.

## Find connection details

> [!NOTE]
> You can find the IP address and the **Game Port** of your server in the **dashboard** of your server under the overview. In the game you enter both together, separated by a colon.

## Via Direct Connect

1. **Launch Hytale**\
   Open the Hytale Launcher and start the game.

2. **Open the server menu**\
   Click on **Servers** in the main menu.

3. **Select Direct Connect**\
   Click on **Direct Connect** in the bottom right corner.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server and click **Connect**:

   ```text
   <IP address>:<Game Port>
   ```

5. **Enter the password**\
   If a [password](/tutorials/gameserver/hytale/set-password) is set for your server, Hytale asks for it now.

## Save the server

To save the server for future connections:

1. **Add server**\
   Click on **Add Server** in the bottom right of the server menu.

2. **Enter server details**\
   Enter the address in the format `<IP address>:<Game Port>` in the **Connection Address** field and choose a name.

3. **Save**\
   Click **Add Server**. The server now appears in your server list.

> [!NOTE]
> Hytale currently does not support SRV records. If you connect via your own domain, always include the port, e.g. `play.example.com:<Game Port>`.

> [!NOTE]
> Your server does not appear automatically in **Server Discovery**, the official in-game server list. Servers for this list are submitted under **Server Profiles** in the Hytale account and reviewed manually by Hytale. You do not need this to join via Direct Connect or your server list.

## If the connection fails

> [!WARNING]
> If you cannot connect, check the following in order:
>
> - Is your server running? It is ready as soon as `Hytale Server Booted!` appears in the console of the **dashboard**. Right after a start or an update this can take a moment.
> - Do the versions match? Your Hytale client and your server must use exactly the same protocol version. After a Hytale update you can only join again once your server has been updated as well. If the **Auto Update** field in the **dashboard** under **Settings** is enabled and the **Hytale Version** field is set to `latest` (both default), your server checks for a new version on every start. A restart is then enough.
> - Does the patchline match? If you play the pre-release version in the launcher, your client usually does not match a server on the `release` patchline. You set your server's patchline in the **dashboard** under **Settings** in the **Hytale Patchline** field (`release` or `pre-release`).
> - Is the [whitelist](/tutorials/gameserver/hytale/enable-whitelist) active? Then only approved players can join.

> [!IMPORTANT]
> Create a [backup](/tutorials/gameserver/hytale/create-backup) before you switch the patchline. A world that has been loaded on a newer pre-release version may no longer open on an older server.
