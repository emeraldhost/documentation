---
slug: "join-server"
language: "en"
title: "How to Join Your Astroneer Server"
description: "Join an Astroneer server"
tags: []
date: "2026-04-15"
visibility: "public"
updated: "2026-05-01"
cta: "gameserver"
product_keys: ["astroneer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/astroneer/change-server-name", "gameserver/astroneer/create-backup", "gameserver/astroneer/set-server-owner", "gameserver/astroneer/set-server-password"]
---

To join your server you need the IP address and port of your server as well as the server password if one is set.

1. **Launch Astroneer**\
   Start Astroneer.

2. **Select CO-OP**\
   In the main menu, select **CO-OP**.

3. **Choose Dedicated Server**\
   Click **Dedicated Server** to join a dedicated server.

4. **Enter server address**\
   Enter the IP address and port of your server in the following format:

   ```text
   123.45.67.89:8777
   ```

5. **Enter password (optional)**\
   If a password is set on your server, enter it here.

6. **Join**\
   Confirm to join your server.

## Disable encryption

Some clients – in particular on Linux or Steam Deck, but occasionally also on Windows – cannot directly connect to an Astroneer dedicated server. In this case, encryption must be disabled both on the server and on all clients.

### On the server

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Disable encryption**\
   Enable the **Disable Encryption** toggle.

4. **Restart the server**\
   Save the setting and restart your server.

### On the client

1. **Open Engine.ini**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %localappdata%\Astro\Saved\Config\WindowsNoEditor\Engine.ini
   ```

2. **Add entry**\
   Append the following section at the end of the file:

   ```text
   [SystemSettings]
   net.AllowEncryption=False
   ```

3. **Save the file**\
   Save the file and restart Astroneer.

> [!WARNING]
> Disabling encryption is not recommended as it reduces the security of the connection. Only use this option if there is no other way to connect to the server.
