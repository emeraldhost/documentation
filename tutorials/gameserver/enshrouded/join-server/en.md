---
slug: "join-server"
language: "en"
title: "How to Join Your Enshrouded Server"
description: "Join an Enshrouded server and find the password"
tags: []
date: "2025-06-30"
visibility: "public"
updated: "2026-07-30"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 10
related: ["gameserver/enshrouded/enable-text-chat", "gameserver/enshrouded/enable-voice-chat", "gameserver/enshrouded/kick-ban-players", "gameserver/enshrouded/performance-problems-on-enshrouded-servers"]
---

## Find connection details

> [!WARNING]
> **Important**
>
> To connect you need the **IP address** and the **Query Port** of your server. You can find the Query Port in the **Settings** of your server in the dashboard. Use the **Query Port**, not the Game Port!

The server address is: `IP address:Query Port` (e.g. `123.45.67.89:15637`)

## Find server password

The server password is stored in the `enshrouded_server.json` file (in the user groups section). You can find the file either via the **File Browser** in the dashboard or via [SFTP](/tutorials/gameserver/establish-sftp-connection).

## Search by server name

1. **Start Enshrouded**\
   Launch Enshrouded and select **Play** in the main menu.

2. **Click Join**\
   Click on **Join**.

3. **Select Dedicated Server tab**\
   Select the **Dedicated Server** tab.

4. **Search for server**\
   Click on **Filter by servername** in the filters on the left and enter the name of your server.

5. **Join the server**\
   Your server should now automatically appear in the list.

## Via Direct Connect

1. **Start Enshrouded**\
   Launch Enshrouded and select **Play** in the main menu.

2. **Click Join**\
   Click on **Join**.

3. **Select Dedicated Server tab**\
   Select the **Dedicated Server** tab.

4. **Search for server**\
   Press `T` (shown at the bottom right) to open the search field. Enter the IP address and Query Port in the format `IP address:Query Port`.

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:15637
   > ```

5. **Join the server**\
   Your server should now appear and you can join.
