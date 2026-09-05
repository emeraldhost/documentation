---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Don’t Starve Together Server"
description: "Add an admin to a Don’t Starve Together server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/dont-starve-together/add-mods", "gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame"]
---

Admins are defined on your server through the `adminlist.txt` file. That is where you enter the Klei user ID of every player who should receive admin rights.

> [!WARNING]
> Don’t Starve Together does **not** use a SteamID64 for admins, but the Klei user ID. On online servers it always starts with `KU_`.

## Find the Klei user ID

There are several ways to find your Klei user ID:

- **In game:** Click **Account** in the main menu. The account page opens in your browser and shows your user ID.
- **In the browser:** Sign in at [accounts.klei.com](https://accounts.klei.com/account/info) with your Steam account. Your user ID is shown in the account overview.
- **Via the console:** Press `~` in game and enter the following command:

  ```text
  TheNet:GetUserID()
  ```

- **For other players:** If you already are an admin, this console command lists all players with their user ID:

  ```text
  c_listallplayers()
  ```

  The output uses the format `[1] (KU_xxxxxxxx) PlayerName <character>`.

> [!TIP]
> You can also find the user ID on the server side: the shard folders `Master` and `Caves` contain a `server_chat_log.txt` file. The Klei user ID of the player who wrote a message is listed in front of every chat message.

## Add the admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open the cluster folder**\
   Navigate to the folder that contains the `cluster.ini` file. That is your cluster folder.

4. **Open adminlist.txt**\
   Open the `adminlist.txt` file there. If it does not exist yet, create it:

   ```text
   <cluster folder>/adminlist.txt
   ```

5. **Enter the user IDs**\
   Add exactly one Klei user ID per line – without commas and without quotation marks:

   ```text
   KU_xxxxxxxx
   KU_yyyyyyyy
   ```

6. **Start the server**\
   Save the file and start your server. The server only reloads the `adminlist.txt` on startup.

> [!NOTE]
> The file is located in the cluster folder, so on the same level as `cluster.ini` – not in the shard folders `Master` or `Caves`. It automatically applies to all shards of your server.

> [!TIP]
> If your server runs in offline mode, the user IDs start with `OU_` instead and consist of digits only. The format of the file stays the same.
