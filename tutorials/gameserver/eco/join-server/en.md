---
slug: "join-server"
language: "en"
title: "How to Join Your Eco Server"
description: "Join an Eco server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/download-savegame", "gameserver/eco/kick-ban-players"]
---

Eco does not have a classic direct connect field in the main menu. Instead you add your server in the server browser using the **plus button** – or you look for it in the public server list. To connect you always use the **Game Port** of your server.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. Do not use the web server port – it only gives you access to the web client, not to the game.

## Add the server via IP

Adding the server by IP address is the most reliable way onto your server. Once added, it stays in your list permanently.

1. **Start Eco**\
   Launch Eco on your PC and sign in with your account.

2. **Open the server browser**\
   Select **New Game** in the main menu. You end up in the **Your Worlds** overview showing the servers you have already visited.

3. **Add the server**\
   Click the green **plus button**.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```text
   <IP address>:<Game Port>
   ```

   > [!NOTE]
   > Both values are listed in your **dashboard**. The address consists of the IP address, a colon and the Game Port – without any spaces in between.

5. **Join**\
   Confirm your input and click **Join**.

6. **Create your character**\
   The first time you join you create your character and choose your starting point in the world. Your progress is stored on the server from then on.

> [!TIP]
> Servers you have visited afterwards appear permanently under **Your Worlds**. So you only have to enter the IP address once.

## Via the public server list

1. **Open New Game**\
   Select **New Game** in the main menu.

2. **Show all servers**\
   Click **Browse All** in the top right corner to open the public server list.

3. **Search for your server**\
   Click the magnifier icon and enter the name of your server.

4. **Join**\
   Select your server and click **Join**.

## Account for Eco

> [!NOTE]
> Playing Eco requires a free Strange Loop Games account. Sign in with it inside the game before joining a server.

## Server does not show up in the list

For your server to appear in the public server list, it has to be published there. This is controlled in the file `/Configs/Network.eco`:

| Setting | Meaning |
|---------|---------|
| **Public Server** | Defines whether the server is posted to the public server listings of Strange Loop Games |
| **Server Category** | Category your server is listed under: `Beginner`, `Established`, `BeginnerHard` or `Strange` |

> [!NOTE]
> **Mind the capitalisation**
>
> `Network.eco` is a JSON file. The category values are written exactly as shown above – `BeginnerHard` without a space and with a capital `B` and `H`. A differently spelled value is not recognised.

> [!WARNING]
> Changes to the configuration files only take effect after a **restart of the server**. A server that has a password set usually does not show up in the public listing either.

> [!TIP]
> **Your server is still reachable**
>
> Even if your server is not in the public list you can add it at any time via the plus button using the IP address and Game Port. Simply pass both on to your fellow players.

## Which ports does Eco use?

> [!NOTE]
> An Eco server uses several ports. In the file `/Configs/Network.eco` they are named:
>
> | Configuration value | Protocol | Purpose |
> |---------------------|----------|---------|
> | `GameServerPort` | UDP | Game Port – players connect through this one |
> | `WebServerPort` | TCP | Web server of the game, used for the web client among other things |
> | `RconServerPort` | TCP | RCON |
>
> Which values apply to your server is shown in the **dashboard**. Always enter the **Game Port** in the game.
