---
slug: "join-server"
language: "en"
title: "How to Join Your Ground Branch Server"
description: "Join a Ground Branch server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/ground-branch/add-admin", "gameserver/ground-branch/add-mods", "gameserver/ground-branch/create-backup", "gameserver/ground-branch/kick-ban-players"]
---

Ground Branch ships with its own **Server Browser**. You can either find your server in the list or connect directly via its IP address.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the ports of your server in the **dashboard**. Ground Branch uses a **Game Port** and a **Query Port** – both are shown there and are already open.

## Via the Server Browser

1. **Start Ground Branch**\
   Launch the game and wait for the main menu to load.

2. **Open the Server Browser**\
   Select **Server Browser** in the main menu.

3. **Choose the right tab**\
   At the top you find the tabs **Internet**, **Favorites**, **Friends**, **History** and **LAN**. For your rented server, stay on **Internet**.

4. **Search for your server**\
   Enter your server name in the search field (**Search servers…**). You can additionally use the filters to show or hide password protected, full or empty servers as well as servers with mods.

5. **Join the server**\
   Select your server from the list and click **Connect**. **Spectate** joins as a spectator instead.

> [!TIP]
> Use the **star icon** next to the server name to save your server as a favorite. Afterwards you can always find it on the **Favorites** tab, no matter whether it currently shows up in the public list.

## Connect directly via IP

If your server does not appear in the list, connect to it directly.

1. **Open the Server Browser**\
   Select **Server Browser** in the main menu.

2. **Choose Connect via IP**\
   Click **Connect via IP**. The dialog **Enter server IP address** opens.

3. **Enter the server address**\
   Enter the IP address and the port of your server from the dashboard, separated by a colon:

   ```text
   <IP address>:<Port>
   ```

   > [!NOTE]
   > **Which port do I enter?**
   >
   > Use the **Game Port** from the dashboard first. If you get the message **No server found at that IP address**, repeat the process with the **Query Port**.

4. **Connect**\
   Confirm your input. The client then establishes the connection directly.

## Password protected server

If a password is set for your server, the dialog **Password required** appears when joining. Enter the server password you configured in the dashboard.

## Servers with mods

If your server uses mods, the Server Browser notifies you before joining and starts a **mod sync**.

> [!NOTE]
> The client automatically subscribes to and downloads the required Workshop content – you do not have to look up the mods yourself. Wait for the download to finish and join again afterwards. The **Sync Mods** button in the server details also lets you download a server's mods before joining. You can read more under [Add Mods](/tutorials/gameserver/ground-branch/add-mods).

## The server cannot be found

Check the following one by one:

- Is your server running according to the **dashboard**? After a start it takes a moment before it shows up in the server list.
- Do the IP address and the port match the values in the dashboard exactly?
- Are you running the same game version as the server? After an update your client needs to be up to date – with a mismatched version the server refuses the connection.
- If a whitelist is active on the server, only admins and whitelisted players can join. You will get a corresponding message in that case.

> [!TIP]
> If your server never shows up on the **Internet** tab, use **Connect via IP** and then save it as a favorite via the star icon.
