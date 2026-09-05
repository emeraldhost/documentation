---
slug: "join-server"
language: "en"
title: "How to Join Your Satisfactory Server"
description: "Join a Satisfactory server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 7
related: ["gameserver/satisfactory/create-backup", "gameserver/satisfactory/download-savegame", "gameserver/satisfactory/set-admin-password", "gameserver/satisfactory/set-server-password"]
---

Satisfactory does not have a public server browser. You add your dedicated server once via the in-game **Server Manager** and connect from there afterwards.

## Find connection details

> [!WARNING]
> **Important**
>
> You can find the **IP address** and the **Game Port** of your server in your **dashboard**. Always use the values listed there for your server.

You only enter **one port** in the game: the **Game Port**. Satisfactory does not have a separate query port – server queries run over the same port.

## Add the server in the Server Manager

1. **Start Satisfactory**\
   Launch the game and wait until the main menu has loaded.

2. **Open the Server Manager**\
   Select **Server Manager** in the main menu. You now see the list of your saved servers – it is empty the first time.

3. **Add the server**\
   Click **Add Server** at the bottom.

4. **Enter address and port**\
   Enter the **IP address** of your server and set the port to the **Game Port** from your dashboard.

   > [!TIP]
   > **Example**
   >
   > ```text
   > Address: <IP address>
   > Port:    <Game Port>
   > ```

5. **Confirm the entry**\
   Confirm the dialog with **Confirm**. The server is now queried and appears in your server list.

6. **Join**\
   Select your server from the list and click **Join Game** in the bottom right.

> [!WARNING]
> **Do not join via the main menu**
>
> The **Join Game** option in the main menu is meant for sessions hosted by friends and will not find your dedicated server. Dedicated servers can only be reached via the **Server Manager**.

## Get admin rights on the server

To use more than the **Status** tab in the Server Manager – that is, to change settings, create worlds or manage save games – you have to log in as an administrator.

1. **Switch tabs**\
   Select any tab other than **Status** in the Server Manager. The game reports that you are not authenticated.

2. **Authenticate**\
   Click **Authenticate**.

3. **Enter the admin password**\
   Enter the admin password of your server and confirm. You then have access to all tabs of the Server Manager.

> [!NOTE]
> **Set the admin password**
>
> To learn how to define the admin password for your server, see [Set Admin Password](/tutorials/gameserver/satisfactory/set-admin-password).

## Claim the server

If no name and no admin password have been set for your server yet, it counts as **unclaimed**. In that case the game guides you through two dialogs after adding it:

1. **Set a server name**\
   First the game asks for a name for the server. This name is shown in your server list later on.

2. **Set the admin password**\
   Then you define the admin password. Choose a secure password and only share it with people who should have admin rights.

After that you are the administrator of the server.

> [!WARNING]
> **Create a world first**
>
> Right after claiming, no world is running on the server yet. In the Server Manager, first create a new world via the **Create Game** tab or upload an existing save via the **Manage Saves** tab. Only then can you join the server.

## Server password

If a server password is set for your server, you will be asked for it when connecting. The server password only controls who is allowed on the server at all – it is not the same as the admin password. As an admin you find it in the Server Manager on the **Server Settings** tab under **Player password protection**.

## Which ports does Satisfactory use?

> [!NOTE]
> A Satisfactory server uses two ports:
>
> | Port | Protocol | Usage |
> |------|----------|-------|
> | **Game Port** | TCP + UDP | Game data and server queries – **this is the port you enter in the game** |
> | **Reliable Messaging Port** | TCP | Additional game data, required since patch 1.1 – provided by the server, you do not enter it in the game |
>
> You can see the values that apply to your server in your **dashboard**.

> [!WARNING]
> **Server is not found**
>
> Check the following in order:
>
> - Is your server running? After starting it, wait a moment until it has fully booted.
> - Did you really enter the **Game Port** from your dashboard and not a different port?
> - Does the IP address match the entry in your dashboard exactly?
> - Is a world already loaded on the server? Without a loaded world you cannot join.
> - Remove the entry in the Server Manager and add it again if the server is permanently shown as offline.
