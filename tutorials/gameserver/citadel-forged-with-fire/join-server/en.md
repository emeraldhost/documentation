---
slug: "join-server"
language: "en"
title: "How to Join Your Citadel Forged with Fire Server"
description: "Join a Citadel Forged with Fire server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/kick-ban-players"]
---

Citadel Forged with Fire has **no direct connection via IP address**. You can only reach your server through the in-game server browser by searching for the **name of your server**.

## Find connection details

> [!IMPORTANT]
> To join you need the **name of your server**. The IP address as well as the Game Port and Query Port can be found in the **dashboard** – you do not need them for the search inside the game, but they matter if your server does not show up in the list.

## Join via the server browser

1. **Start Citadel Forged with Fire**\
   Launch the game and wait until the main menu has loaded.

2. **Open Join Game**\
   Select **Join Game** in the main menu. The server list opens.

3. **Search for your server**\
   Enter the name of your server in the search field of the server list.

4. **Join**\
   Select your server from the list and click **Join**.

5. **Create your character**\
   The first time you join you create your character. Your progress is then stored on the server and loaded again the next time you join.

> [!NOTE]
> There is no menu entry for a direct connection via `IP:Port` in Citadel Forged with Fire. The server browser is the intended way onto your server – just search for the server name there.

> [!NOTE]
> **Password protected server**
>
> If a join password is set for your server, you need it when connecting. Only share it with the players who are supposed to get onto your server.

## Which ports does Citadel Forged with Fire use?

> [!NOTE]
> A server occupies several ports. The Game Port and the Query Port use **UDP**:
>
> | Configuration value | Purpose |
> |---------------------|---------|
> | `ConnectionPort` | Game Port – the actual player connection to the server runs through this one |
> | `QueryPort` | Query Port – your server registers with the server list through this one and is found there |
> | `SteamPort` | Communication with Steam |
>
> You can see which ports apply to your server in the **dashboard**. The Game Port and the Query Port must never be the same port.

## Server cannot be found

> [!WARNING]
> **Server does not appear in the list**
>
> If your server does not show up in the server browser, the Query Port is usually the reason – the server only registers with the list through that port. Check in the **dashboard** whether the Game Port and the Query Port are different ports and restart your server afterwards. Right after the first start it can also take a few minutes until the server appears in the list.

> [!CAUTION]
> **The join button cannot be clicked**
>
> If your server is displayed but joining does not work, the port in `Engine.ini` does not match the Game Port. Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and create the following file if it does not exist yet:
>
> ```text
> /Config/Engine.ini
> ```
>
> Add this section to it and enter the **Game Port** from your dashboard as the port:
>
> ```ini
> [URL]
> Port=<Game Port>
> ```
>
> Save the file and restart your server.

> [!NOTE]
> **Where is the configuration?**
>
> The configuration files of your server are located in the `/Config/` folder. The path `/Citadel/Saved/Config/LinuxServer/` points to the same folder – you can use either way, they are the same files.
