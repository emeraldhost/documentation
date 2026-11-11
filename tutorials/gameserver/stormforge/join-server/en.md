---
slug: "join-server"
language: "en"
title: "How to Join Your Stormforge Server"
description: "Join your Stormforge server via Direct IP using the IP address, Game Port and password."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 9
related: ["gameserver/stormforge/set-server-password", "gameserver/stormforge/change-server-name", "gameserver/stormforge/change-max-players", "gameserver/stormforge/control-automatic-updates"]
---

You join your Stormforge server in the game via **Join a Game** by entering the address of your server directly. The address consists of the IP address and the Game Port.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server.

If a password is set for your server, your fellow players need the password as well. How to set it is described in [Set Server Password](/tutorials/gameserver/stormforge/set-server-password).

## Join the server

1. **Start Stormforge**\
   Launch the game and wait until the main menu has loaded.

2. **Choose a character**\
   Click on **Play**, create a character or select an existing one and click on **Start**.

3. **Open Direct IP**\
   Select **Join a Game** and then **Direct IP**.

4. **Enter the server address**\
   In the **IP Address** field, enter the IP address and the Game Port of your server, separated by a colon:

   ```text
   <IP address>:<Game Port>
   ```

   Replace the placeholders with the values shown in your **dashboard**.

5. **Enter the password**\
   If a password is set for your server, enter it in the **Server Password** field. Leave the field empty if no password is set.

6. **Connect**\
   Click on **Join**.

> [!NOTE]
> The in-game labels are given in English here. If your game is set to another language, they may differ slightly.

## Connection problems

If joining does not work, check these points:

- **Server started**: Check in the **dashboard** whether your server is running and fully started.
- **Address**: Enter the IP address and the Game Port exactly as they are displayed in the **dashboard**, and always include the port.
- **Password**: The password has to match the value of the **Server Passwort** (server password) field in the **Config Editor** exactly.
- **Game version**: The game and the server have to be on the same version. The version of your game is shown in the main menu.

> [!TIP]
> **Different versions**\
> Restart your server so that it installs the current version, and let Steam update your game. This requires the **Auto Update** field in the **Config Editor** to be set to `1`. You can read more in [Control Automatic Updates](/tutorials/gameserver/stormforge/control-automatic-updates).
