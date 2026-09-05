---
slug: "enable-direct-connection"
language: "en"
title: "How to Enable Direct Connection on Your Windrose Server"
description: "Enable direct connection (UseDirectConnection) on a Windrose server"
tags: []
date: "2026-05-01"
visibility: "public"
updated: "2026-07-30"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Direct Connection"
sort: 7
related: ["gameserver/windrose/create-backup", "gameserver/windrose/download-savegame", "gameserver/windrose/join-server", "gameserver/windrose/set-invite-code"]
---

With the `UseDirectConnection` option, players can connect directly via IP address and port without using the invite code.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open ServerDescription.json**\
   Open the file `ServerDescription.json` at:

   ```text
   /R5/ServerDescription.json
   ```

4. **Adjust UseDirectConnection**\
   Set `UseDirectConnection` to `true` and adjust the following fields:
   - `DirectConnectionServerAddress` – the host IP of your server
   - `DirectConnectionServerPort` – the default Game Port of your server (we already set this by default)
   - `DirectConnectionProxyAddress` – stays at `0.0.0.0`

   ```text
   "UseDirectConnection": true,
   "DirectConnectionServerAddress": "YOUR_HOST_IP",
   "DirectConnectionServerPort": YOUR_GAME_PORT,
   "DirectConnectionProxyAddress": "0.0.0.0"
   ```

5. **Start the server**\
   Save the file and start your server.

## Join via direct connection

Once `UseDirectConnection` is enabled, players can connect to your server directly via its IP address.

1. **Start Windrose**\
   Launch Windrose.

2. **Select Play**\
   Click **Play** in the main menu.

3. **Connect to Server**\
   Select the **Connect to Server** option.

4. **Enter IP address**\
   Enter the IP address and port of your server in the format `IP:Port` and confirm.

   > [!TIP]
   > **Example**
   >
   > ```text
   > 123.45.67.89:7777
   > ```

> [!NOTE]
> When `UseDirectConnection` is enabled, players can still connect using the invite code. The direct connection via IP address and port is available as an additional option.
