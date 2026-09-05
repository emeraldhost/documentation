---
slug: "join-server"
language: "en"
title: "How to Join Your Colony Survival Server"
description: "Join a Colony Survival server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame", "gameserver/colony-survival/kick-ban-players"]
---

You do **not** connect to your Colony Survival server via IP address and port. Instead you use the in-game server browser: search for the **name of your server** there and join it with a click.

> [!IMPORTANT]
> The most important thing for joining is a **unique server name**. You can see the name of your server in the **dashboard**. If your server is called the same as hundreds of others, you will barely find it in the list again.

## Join the server in the game

1. **Start Colony Survival**\
   Launch the game and wait until the main menu has loaded.

2. **Open Multiplayer**\
   Select **Multiplayer** in the main menu.

3. **Choose the right list**\
   At the top you will find several tabs:

   | Tab | Content |
   |-----|---------|
   | **Internet** | All publicly listed servers – this is where you find your own server |
   | **Friends** | Servers of players on your Steam friends list |
   | **LAN** | Servers in the same local network |
   | **History** | Servers you joined most recently |

4. **Search for the server**\
   Look for the name of your server in the list. Use the filters above the list – such as **Show Empty** or **Show Full** – to narrow down the selection.

5. **Join**\
   Select your server and click **Join**.

6. **Enter the password**\
   If a password is set for your server, you will be asked for it now.

> [!TIP]
> After joining for the first time you can find your server again through the **History** tab, without searching the whole server list every time.

## Why don't you need a port?

> [!NOTE]
> Your server uses Steam networking: this is how it registers with the server browser, and the actual connection is established through Steam as well. That is why you enter neither an IP address nor a port in the game.
>
> You can see the **Game Port** and the **Query Port** of your server in the **dashboard**. You do not need them for joining normally – they are used in the background.

> [!WARNING]
> Older guides are usually written for self-hosted servers and explain port forwarding in your router. That is not necessary on your rented server – the ports are already set up and are listed in the **dashboard**.

## Server does not show up

If your server does not appear in the list, work through the following points:

1. **Is the server running?**\
   Check in the **dashboard** whether your server is started and whether the console shows any errors.

2. **Refresh the list**\
   Leave the multiplayer menu and open it again. After a server start it takes a moment until the server shows up in the public list.

3. **Search for the exact name**\
   Search for a distinctive part of your server name. The list is long – without searching you will hardly find your server.

4. **Join through friends**\
   If someone from your Steam friends list is already on the server, you can also find it through the **Friends** tab.

> [!NOTE]
> If you get a message when connecting that you are blacklisted or not whitelisted, you have been excluded from the server. To learn how to manage those lists, see [Kick & Ban Players](/tutorials/gameserver/colony-survival/kick-ban-players).
