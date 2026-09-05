---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Factorio Server"
description: "Add an admin to a Factorio server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/factorio/add-mods", "gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame"]
---

Admins are allowed to run commands such as `/kick`, `/ban` or `/config` on your server. A Factorio server initially starts with **no admins at all** – you define them via the server console or via the file `server-adminlist.json`.

> [!NOTE]
> An admin is identified by the **factorio.com username** the player uses to join the server – **not** by a SteamID64. Players who bought Factorio via Steam also have a linked Factorio account.

## Add an admin via the server console

1. **Open the server console**\
   Open the console of your server via the dashboard.

2. **Promote the player**\
   Enter the following command – the player should be on the server for this:

   ```text
   /promote Username
   ```

3. **Verify the result**\
   Use `/admins` to display all registered admins.

> [!TIP]
> The command creates the file `server-adminlist.json` automatically and stores the change permanently. The admin status therefore survives a restart.

## Add an admin via the file server-adminlist.json

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open or create the file**\
   In the main directory of your server – the same directory that contains `factorio-current.log` – open the file `server-adminlist.json`. If it does not exist yet, create it.

4. **Add the usernames**\
   Enter the usernames as a simple list:

   ```json
   [
     "Player1",
     "Player2"
   ]
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to keep the server from loading the admin list.

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Do **not** add admins in the file `data/server-settings.json`. The `admins` field in that file is ignored by a headless server – only the server console and the file `server-adminlist.json` work.

## Remove admin rights

Open the server console and enter the following command:

```text
/demote Username
```

## Command overview

| Command | Description |
|---------|-------------|
| `/promote <Username>` | Make a player an admin |
| `/demote <Username>` | Remove admin rights |
| `/admins` | List all admins |

> [!NOTE]
> By default `allow_commands` is set to `admins-only` on a Factorio server, so only admins can run commands.
