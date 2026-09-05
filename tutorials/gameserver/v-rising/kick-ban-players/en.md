---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your V Rising Server"
description: "Kick and ban players on a V Rising server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 14
related: ["gameserver/v-rising/enable-server-list", "gameserver/v-rising/fix-eos-notready-error", "gameserver/v-rising/join-server", "gameserver/v-rising/set-server-password"]
---

You can kick and ban players using in-game console commands or via the `banlist.txt`.

> [!NOTE]
> You need admin rights to kick and ban players. See [Add Admin](/tutorials/gameserver/v-rising/add-admin).

## Kick and ban players via console

1. **Open the console**\
   Press the backtick key (`` ` ``) to open the admin console.

2. **Use commands**\
   Use one of the following commands:

   **Kick a player:**

   ```text
   kick <name>
   ```

   **Ban a player (by name):**

   ```text
   banuser <name>
   ```

   **Ban a player (by character):**

   ```text
   bancharacter <name>
   ```

   **Unban a player:**

   ```text
   unban <name>
   ```

## Ban players via banlist.txt (alternative)

You can also ban players manually via the ban list:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open banlist.txt**\
   Open the file `banlist.txt` at:

   ```text
   /save-data/Settings/banlist.txt
   ```

4. **Add SteamID64**\
   Add the player's SteamID64 on a new line. Each line contains one SteamID64.

5. **Start the server**\
   Start your server.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Unban a player

Use the console command `unban <name>` or remove the corresponding SteamID64 from the `banlist.txt` and restart the server.
