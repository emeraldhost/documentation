---
slug: "setup-shifting-sands"
language: "en"
title: "How to Set Up Shifting Sands on Your Soulmask Server"
description: "Set up Shifting Sands DLC on a Soulmask server"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-07-30"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Setup Shifting Sands"
sort: 16
related: ["gameserver/soulmask/kick-ban-players", "gameserver/soulmask/set-admin-password", "gameserver/soulmask/set-server-password", "gameserver/soulmask/change-save-interval"]
---

With the **Shifting Sands** DLC you can set up a server cluster that allows players to travel between the base map (Cloud Mist Forest) and the Shifting Sands map.

> [!WARNING]
> For a cluster you need **two Soulmask servers** – one for each map. All players must own the **Shifting Sands DLC**.

## Requirements

- Two Soulmask servers with EmeraldHost
- The Shifting Sands DLC for all players

## Configure main server (Cloud Mist Forest)

1. **Open dashboard**\
   Open the dashboard of your first server (base map).

2. **Open settings**\
   Navigate to the **Settings**.

3. **Set Server ID**\
   Enter the following in the **[CROSS-MAP] SERVER ID** field:

   ```text
   -serverid=1
   ```

4. **Set Broadcast Address**\
   Enter the following in the **[CROSS-MAP] BROADCAST ADDRESS** field:

   ```text
   -mainserverport=20000
   ```

5. **Enable cross-server**\
   Connect via [SFTP](/tutorials/gameserver/establish-sftp-connection) and edit the file:

   ```text
   /WS/Saved/GameplaySettings/GameXishu.json
   ```

   Set the value `KaiQiKuaFu` to `1`.

6. **Start the server**\
   Save the settings and start the main server.

## Configure client server (Shifting Sands)

1. **Open dashboard**\
   Open the dashboard of your second server (Shifting Sands).

2. **Open settings**\
   Navigate to the **Settings**.

3. **Set Server ID**\
   Enter the following in the **[CROSS-MAP] SERVER ID** field:

   ```text
   -serverid=2
   ```

4. **Set Broadcast Address**\
   Enter the following in the **[CROSS-MAP] BROADCAST ADDRESS** field:

   ```text
   -clientserverconnect=IP:Port
   ```

   Replace `IP:Port` with the IP address of the main server and the **Game Port + 4**.

   > [!TIP]
   > **Example**
   >
   > If the main server's Game Port is `8778`:
   >
   > ```text
   > -clientserverconnect=123.45.67.89:8782
   > ```

5. **Change map**\
   Make sure the map is set to **DLC_Level01_Main** (Shifting Sands).

6. **Enable cross-server**\
   Also edit the `GameXishu.json` on this server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and set `KaiQiKuaFu` to `1`.

7. **Start the server**\
   Save the settings and start the client server.

## Travel between maps

Players can use a portal terminal at the **mysterious island** in-game to switch between maps.

> [!NOTE]
> Only characters that are not the first created character can transfer between servers.

> [!IMPORTANT]
> The main server must always be **started first** and **stopped last** to avoid connection errors.
