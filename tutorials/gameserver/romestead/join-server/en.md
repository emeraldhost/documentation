---
slug: "join-server"
language: "en"
title: "How to Join Your Romestead Server"
description: "Join a Romestead server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 3
related: ["gameserver/romestead/create-backup", "gameserver/romestead/download-savegame", "gameserver/romestead/kick-ban-players"]
---

Romestead has **no server browser**. You always connect directly using the **IP address** and the **Game Port** of your server – entered into two separate fields in the game.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the Game Port of your server in the **dashboard**. Romestead only uses the Game Port to connect – this game does not have a Query Port.

## Join the server

1. **Start Romestead**\
   Launch the game and wait until the main menu has loaded.

2. **Open Multiplayer**\
   Select **Multiplayer** in the main menu and then **Join multiplayer**.

3. **Choose your character**\
   Select an existing character or create a new one.

4. **Open the direct connection**\
   Click the **Advanced/LAN** button. This is where you enter your server's connection details manually.

5. **Enter the IP address and the port**\
   Enter the IP address into the address field and the Game Port into the separate port field.

   > [!WARNING]
   > These are **two separate fields**. If the dashboard shows the address as `123.45.67.89:8123` for example, `123.45.67.89` belongs in the IP field and `8123` in the port field. Entering both together in a single field will make the connection fail.

6. **Connect**\
   Click **Connect**.

7. **Enter the password**\
   If a password is set for your server, you are asked for it now.

   > [!NOTE]
   > The server password is case-sensitive. Enter it exactly as it is stored.

## Why is my server not in any list?

> [!NOTE]
> Romestead does not have a public server browser that collects dedicated servers. The only way onto your server is therefore **Advanced/LAN** using the IP address and the Game Port. It is best to note down both values so you do not have to look them up in the dashboard every time.

> [!TIP]
> Share the IP address and the Game Port with your players exactly as they appear in the dashboard – ideally as two separate values, so nobody accidentally types everything into one field.

## The connection fails

If you cannot get onto your server, work through the following points:

1. **Is the server running?**\
   Check in the **dashboard** whether your server is started. Take a look at the console as well: you can only join once the server has fully loaded the world.

2. **Are the IP and port correct?**\
   Compare both values with the dashboard again and make sure the IP address is in the IP field and the Game Port in the port field.

3. **Is the password correct?**\
   Watch out for upper and lower case as well as spaces at the beginning or end.

4. **Was the password just changed?**\
   After changing the server password you have to restart the server via the dashboard for the new password to apply.
