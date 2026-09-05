---
slug: "join-server"
language: "en"
title: "How to Join Your Voyagers of Nera Server"
description: "Join a Voyagers of Nera server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["voyagers-of-nera"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/voyagers-of-nera/add-savegame", "gameserver/voyagers-of-nera/create-backup", "gameserver/voyagers-of-nera/download-savegame"]
---

There are three ways to reach your Voyagers of Nera server: through the in-game server browser, through a direct connection using IP address and port, or through your server's invite code.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard**. Voyagers of Nera connects through the Game Port – do not add or subtract anything.

## Via the server browser

1. **Start Voyagers of Nera**\
   Launch the game and wait for the main menu to load.

2. **Open the server list**\
   Open the multiplayer menu in the main menu and click on **Browse Dedicated Servers**.

3. **Search for your server**\
   Enter the name of your server in the filter at the top so you do not have to search the entire list.

4. **Select the server**\
   Click your server in the list.

5. **Enter the password**\
   If a password is set for your server, enter it in the **Server Password** text field.

6. **Join**\
   Click on **Join Game** to load the world.

> [!WARNING]
> **Caution**
>
> The public server list is still limited during Early Access – not every running server is necessarily shown. If you cannot find your server there, use the direct connection or the invite code.

## Via direct connection

The direct connection is the most reliable way to reach your server.

1. **Open the server list**\
   Open the multiplayer menu in the main menu and click on **Browse Dedicated Servers**.

2. **Choose Direct Connect**\
   Select the **Direct Connect** option there.

3. **Enter the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:28115
   > ```
   >
   > The numbers in this example are placeholders. You can find your actual IP address and Game Port in the **dashboard**.

4. **Enter the password**\
   If a password is set for your server, also enter it in the **Server Password** field.

5. **Connect**\
   Confirm your input to join the server.

## Via the invite code

Your server generates its own invite code on the first start. It lets other players join without knowing the IP address and port.

> [!WARNING]
> **Caution**
>
> The invite code does not work if a password is set for your server. This is a known issue of the game. If you want to use the invite code, leave the server password empty – with a password set, use the direct connection instead.

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection). Alternatively you can use the file manager in the dashboard.

2. **Open the code file**\
   Open the following file:

   ```text
   /BoatGame/Saved/DedicatedServerMagicJoinCode.txt
   ```

   > [!NOTE]
   > If the file does not exist yet, start your server once. It is created automatically on startup.

3. **Copy the code**\
   Copy the code stored in the file.

4. **Enter the code in the game**\
   Start Voyagers of Nera, select the **Invite Code** entry in the main menu, paste the code and confirm.

## Which ports does Voyagers of Nera use?

> [!NOTE]
> A Voyagers of Nera server uses the **Game Port** and additionally the port directly following it (Game Port +1) over **UDP**. The second port is not entered in the game, but it has to be available on the server as well.
>
> You can see which Game Port applies to your server in the **dashboard**. If the following port is not listed there as an allocation, our support can add it for you.

> [!NOTE]
> **No separate Query Port**
>
> Voyagers of Nera does not use a dedicated Query Port. Sessions are advertised through **Epic Online Services (EOS)** – that is why your server appears in the server browser without you having to configure a Query Port.
