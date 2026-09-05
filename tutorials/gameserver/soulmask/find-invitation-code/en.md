---
slug: "find-invitation-code"
language: "en"
title: "How to Find the Invitation Code of Your Soulmask Server"
description: "Find the Invitation Code on a Soulmask server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Find Invitation Code"
sort: 10
related: ["gameserver/soulmask/create-backup", "gameserver/soulmask/download-savegame", "gameserver/soulmask/join-server", "gameserver/soulmask/kick-ban-players"]
---

The **Invitation Code** is a unique 25-character code that is automatically generated when the server starts for the first time. Players need this code to find your server in the server list.

## Via server console

1. **Start the server**\
   Start your server via the dashboard.

2. **Open console**\
   Open the **server console** in the dashboard.

3. **Read the code**\
   The Invitation Code is displayed in the console during server startup. Look for the line:

   ```text
   [SERVER UNIQUE ID:] XXXXXXXXXXXXXXXXXXXXX
   ```

   > [!TIP]
   > **Example**
   >
   > ```text
   > [SERVER UNIQUE ID:] 6U1WE0O933CC7H4RFBSQ8ND47
   > ```

## Via log file

If you missed the code in the console, you can also find it in the log file:

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open log file**\
   Open the file:

   ```text
   /WS/Saved/Logs/WS.log
   ```

3. **Search for code**\
   Search for `SERVER UNIQUE ID` in the file. The code is displayed right after it.

## Invite players with Invitation Code

Share the Invitation Code with your players. This is how they can join:

1. **Start Soulmask**\
   Launch Soulmask and select **Online Game** in the main menu.

2. **Select Private Server**\
   Select the **Private Server** tab.

3. **Enter code**\
   Paste the Invitation Code in the search field at the top right and press `Enter`.

4. **Join the server**\
   Your server will appear in the list and can be selected.

> [!NOTE]
> The Invitation Code stays the same as long as the server data is not reset.
