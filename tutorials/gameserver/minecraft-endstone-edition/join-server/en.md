---
slug: "join-server"
language: "en"
title: "How to Join Your Minecraft Endstone Edition Server"
description: "Join a Minecraft Endstone Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame", "gameserver/minecraft-endstone-edition/kick-ban-players"]
---

Endstone runs the official Bedrock Dedicated Server in the background. You therefore connect with a regular Minecraft Bedrock client – for example on Windows, Android or iOS. The server is added there manually once, using its IP address and port.

## Find connection details

> [!NOTE]
> You can find the IP address and the Game Port of your server in the **dashboard** of your server. Always enter exactly that Game Port in the game.

> [!IMPORTANT]
> The server answers server queries on the same UDP port the game itself runs on. There is no separate Query Port to connect to – if you enter a different port, you will not reach your server.

## Add the server in the game

1. **Start Minecraft**\
   Launch Minecraft Bedrock Edition on your device.

2. **Open Play**\
   Select **Play** in the main menu.

3. **Open the Servers tab**\
   Switch to the **Servers** tab.

4. **Add the server**\
   Scroll down and select **Add Server**.

5. **Enter the connection details**\
   Enter a server name of your choice as well as the IP address and the Game Port from the dashboard:

   ```text
   Server Name:    My Endstone Server
   Server Address: 123.45.67.89
   Port:           Game Port from the dashboard
   ```

6. **Save**\
   Save the entry. Your server then appears in the list under **Additional Servers**.

7. **Join**\
   Select your server and click **Join Server**.

## Why your server does not show up in the server list

> [!NOTE]
> In the **Servers** tab, Minecraft only lists Mojang's large partner servers under "Featured Servers". Your own servers – rented or self-hosted – never appear there. You can only reach your server through the manual entry with IP address and Game Port.

## The first start takes longer

> [!WARNING]
> **Caution**
>
> On the very first start, Endstone downloads and sets up the official Bedrock Dedicated Server first. This takes a moment – wait until the console shows that the server has finished starting before you connect.

## Joining from consoles

Consoles do not allow you to enter custom server addresses directly. Using a DNS workaround (BedrockConnect) you can redirect the "Featured Servers" list so you can enter your own IP.

> [!WARNING]
> **Caution**
>
> This changes the DNS settings of your console. Write down the current values beforehand in case you want to restore them later.

### DNS addresses

| Console | Primary | Secondary |
|---------|---------|-----------|
| Xbox One / Series X\|S | `104.238.130.180` | `8.8.8.8` |
| PlayStation 4 / 5 | `45.55.68.52` | `8.8.8.8` |
| Nintendo Switch | `104.238.130.180` | `8.8.8.8` |

### Xbox

1. **Open the network settings**\
   Go to **Settings → General → Network settings → Advanced settings → DNS settings**.

2. **Select Manual**\
   Choose **Manual** and enter the DNS addresses from the table.

3. **Save and restart**\
   Save the setting and restart the Xbox.

### PlayStation

1. **Open the network settings**\
   Go to **Settings → Network → Settings → Set Up Internet Connection**.

2. **Adjust the connection**\
   Select your network, open the **Advanced Settings** and set the **DNS Settings** to **Manual**.

3. **Enter the DNS addresses**\
   Enter the DNS addresses from the table and confirm.

4. **Restart the console**\
   Restart your console.

### Connect to the server

1. **Start Minecraft**\
   Open Minecraft Bedrock Edition and switch to the **Servers** tab.

2. **Join a featured server**\
   Click one of the listed featured servers. You will be redirected to BedrockConnect instead.

3. **Enter your own IP**\
   Select **Connect to a Server** and enter the IP address and the Game Port of your server.

## Minecraft Java Edition

> [!IMPORTANT]
> **Minecraft Java Edition** clients cannot join your server. Endstone launches the Bedrock Dedicated Server, and both editions use different network protocols – Bedrock communicates over UDP, Java over TCP.
