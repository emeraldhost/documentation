---
slug: "set-island-id"
language: "en"
title: "How to Set the Island ID on Your Windrose Server"
description: "Set the island ID on a Windrose server"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-05-10"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Island ID"
sort: 10
related: ["gameserver/windrose/join-server", "gameserver/windrose/set-invite-code", "gameserver/windrose/set-note", "gameserver/windrose/set-server-password"]
---

The island ID determines which world your server loads on startup. If no island ID is set, the server automatically loads the most recent save. If you want to continue with a specific older world, you can enter its island ID here.

## Find the island ID

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open the worlds directory**\
   Navigate to the following directory. Each saved world has its own folder here:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/
   ```

   > [!NOTE]
   > `<GameVersion>` is the game version the world was created with – e.g. `0.10.0`. If you see multiple versions, open the correct one.

3. **Identify the island ID**\
   The folder name of each world **is** the island ID. Example:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/0.10.0/Worlds/A1b2C3d4E5
   ```

   In this example the island ID is `A1b2C3d4E5`.

4. **Match the world (optional)**\
   To make sure you assign the correct folder to the correct world, open the `WorldDescription.json` file inside the world folder. The display name is shown under the `WorldName` field.

## Set the island ID in the dashboard

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Set island ID**\
   Enter the island ID from the world folder in the **Island ID** field and save the setting.

4. **Restart the server**\
   Restart your server for the change to take effect.

> [!TIP]
> If your server suddenly loads a new, empty world after an update, the original world is usually still saved under `/R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/`. Enter that world's island ID in the settings to load it again.
