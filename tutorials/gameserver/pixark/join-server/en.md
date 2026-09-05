---
slug: "join-server"
language: "en"
title: "How to Join Your PixARK Server"
description: "Join a PixARK server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/pixark/add-mods", "gameserver/pixark/add-savegame", "gameserver/pixark/create-backup", "gameserver/pixark/download-savegame"]
---

The most reliable way onto your own PixARK server is to add it to your Steam favorites first and then join from the favorites list inside the game. The key detail: in Steam you enter the **Query Port**, **not** the Game Port.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Query Port** of your server. You can find both in the **dashboard** of your server. The ports are assigned to you there – always use the values from the dashboard and never default values found online.

## Add the server to your Steam favorites

1. **Open Steam**\
   Open the Steam client on your PC.

2. **Open the server browser**\
   Click on **View** in the top left and select **Game Servers**.

3. **Add the server**\
   Switch to the **Favorites** tab and click on **+** at the bottom right.

4. **Enter the server address**\
   Enter the IP address and the **Query Port** of your server, separated by a colon:

   ```text
   123.45.67.89:QUERYPORT
   ```

   > [!WARNING]
   > The Game Port does not work here. Steam queries the server exclusively through the Query Port – if you enter the wrong port, the server stays offline or does not show up at all.

5. **Confirm the entry**\
   Confirm your input. Your server then appears in the favorites list. If it is running, you will also see the server name and the player count there.

## Join from inside the game

1. **Start PixARK**\
   Launch PixARK on your PC.

2. **Open the server list**\
   Open the multiplayer server overview in the main menu.

3. **Filter by favorites**\
   Set the filter to **Favorites**. Your server now appears in the list.

4. **Join**\
   Select your server and join it.

## Servers with a password

> [!WARNING]
> If a password is set on your server, enter it **inside the game only**, after you started joining. If you enter the password in the Steam server browser instead, you may get connected but the world will not load properly.

## Which ports does PixARK use?

> [!NOTE]
> A PixARK server occupies four ports. You can see the numbers your server uses in the **dashboard**:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | UDP | The actual game connection |
> | Query Port | UDP | Server query – Steam finds your server through this one, and this is the port you add to your favorites |
> | RCON Port | TCP | Remote administration of the server via RCON |
> | Cube Port | TCP | Transfers the changes to the voxel world (terrain) |
>
> The Cube Port is a PixARK speciality: if it is unreachable, you can still connect, but the block world will not be transferred or only partially so.

> [!TIP]
> If your server does not show up in your favorites after adding it, first check in the dashboard whether it is actually running, then verify that you really entered the Query Port and not the Game Port.
