---
slug: "join-server"
language: "en"
title: "How to Join Your HumanitZ Server"
description: "Join a HumanitZ server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/humanitz/add-savegame", "gameserver/humanitz/create-backup", "gameserver/humanitz/download-savegame", "gameserver/humanitz/kick-ban-players"]
---

In HumanitZ you always connect through the **Game Port** of your server. You can either search for your server in the in-game server browser or connect directly via the IP address.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the ports of your server in the **dashboard**. To connect you use the **Game Port** – not the Query Port. The Query Port is only used to query the server and does not work in the game.

## Connect directly via IP

The direct connection is the most reliable way onto your server.

1. **Start HumanitZ**\
   Launch HumanitZ and wait for the main menu to load.

2. **Open Multiplayer**\
   Select **Play** in the main menu and then **Multiplayer**.

3. **Choose a character**\
   Select an existing character or create a new one. When creating one you choose a **profession** and an **affliction**.

4. **Open the server search**\
   Confirm your selection with **Find Server**. You end up in the server overview.

5. **Enter IP address and port**\
   In the bottom right, enter the IP address and the Game Port of your server into the direct connection fields.

   > [!TIP]
   > **Example**
   >
   > ```text
   > IP:   123.45.67.89
   > Port: <Game Port from the dashboard>
   > ```

6. **Enter the password**\
   If a password is set for your server, enter it in the field provided. Otherwise leave the field empty.

7. **Connect**\
   Click on **IP Connect**. The server loads and you spawn into the world.

## Via the server browser

Alternatively you can look for your server in the list:

1. **Open the server list**\
   Open **Play → Multiplayer → Find Server** as described above.

2. **Search for your server**\
   Search the list for the name of your server.

3. **Join**\
   Select your server and confirm. On a password protected server you are asked for the password.

## Server is not listed

If your server does not show up in the list, the direct connection via **IP Connect** helps in most cases. In addition there is a setting in the configuration file `GameServerSettings.ini` that decides whether your server is found publicly:

> [!WARNING]
> **Do not change the SearchID**
>
> The following value is located in the `[Host Settings]` section:
>
> ```ini
> SearchID="HumanitZ_Dedicated"
> ```
>
> This value has to stay unchanged. If you enter anything else here, your server does **not** appear in the default server list – it can then only be found if players search for exactly that SearchID.

> [!TIP]
> **No ping in the server browser**
>
> The ping of your server is only shown in the server list when RCON is enabled. To do that, set the following in the `[Host Settings]` section:
>
> ```ini
> RCONEnabled=true
> ```
>
> How to set up RCON completely is described in [Kick & Ban Players](/tutorials/gameserver/humanitz/kick-ban-players).

## Which ports does HumanitZ use?

> [!NOTE]
> A HumanitZ server uses three ports. You can see the values that apply to your server in the **dashboard**:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | UDP | Game traffic – players connect through it |
> | Query Port | UDP | Server query for the server list |
> | RCON port | TCP | Remote control of the server, e.g. for kicking and banning |

> [!TIP]
> To get admin rights on your server, follow the guide [Add Admin](/tutorials/gameserver/humanitz/add-admin).
