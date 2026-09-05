---
slug: "join-server"
language: "en"
title: "How to Join Your Mordhau Server"
description: "Join a Mordhau server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/mordhau/add-admin", "gameserver/mordhau/add-mods", "gameserver/mordhau/create-backup", "gameserver/mordhau/kick-ban-players"]
---

You either find your server through the in-game server browser or connect directly through Steam using your server's address.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the ports of your server in the **dashboard**. For the connection through Steam you use the **Query Port**, not the Game Port. This is the most common reason why joining fails.

## Via the in-game server browser

1. **Start Mordhau**\
   Launch the game and wait for the main menu to load.

2. **Open the server browser**\
   Select **Fight** in the main menu. This takes you to the server browser with the list of all public servers.

3. **Search for your server**\
   Enter the name of your server into the search field. This is much faster than scrolling through the full list.

4. **Join the server**\
   Select your server from the list and join it.

> [!NOTE]
> **Password protected server**
>
> If a password is set for your server, you are asked for it when joining. You can find the password in the **dashboard** of your server.

## Connect through Steam

If you want to join using your server's address specifically, use a Steam connection link.

1. **Start Steam**\
   Make sure Steam is running on your PC and that you are signed in.

2. **Build the connection link**\
   Assemble the link from the IP address and the **Query Port** of your server:

   ```text
   steam://connect/<IP address>:<Query Port>
   ```

   > [!WARNING]
   > This is where the **Query Port** goes, not the Game Port. You can find both values in the **dashboard** of your server.

3. **Open the link**\
   Enter the link into your browser's address bar, or open it on Windows with `Win` + `R`. Steam launches Mordhau and connects you to your server.

> [!TIP]
> Save the finished link as a bookmark or pass it on to your fellow players – that way nobody has to search for the server in the browser.

## Which ports does Mordhau use?

> [!NOTE]
> A Mordhau server uses three ports:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | UDP | Carries the actual game traffic |
> | Query Port | UDP | Server query: your server appears in the server list through it, and the Steam link connection runs through it |
> | Beacon Port | UDP | Used while players are establishing the connection |
>
> You can see the values that apply to your server in the **dashboard**. All three ports have to be reachable – if one of them is missing, joining can fail even though the server is running.

## Server does not appear in the server browser

For your server to be listed publicly it has to register with Steam. This is controlled by the entry `bAdvertiseServerViaSteam` in the `Game.ini`.

1. **Stop the server**\
   Stop your server via the **dashboard**.

   > [!WARNING]
   > Only edit the `Game.ini` while the server is stopped. Mordhau rewrites the file on shutdown and overwrites changes you made while it was running.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the Game.ini**\
   Open the following file:

   ```text
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. **Set the entry**\
   Look for the entry `bAdvertiseServerViaSteam` in the file and set it to `True`:

   ```ini
   bAdvertiseServerViaSteam=True
   ```

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> Freshly started servers take a few minutes before they show up in the server list. The Steam connection link gets you onto your server even while it is not listed yet.

> [!NOTE]
> The folder `LinuxServer` and the `Game.ini` are only created after your server has fully started once. If you cannot find the file, start your server once and stop it again.
