---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Frozen Flame Server"
description: "Add a savegame to a Frozen Flame server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/frozen-flame/add-admin", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/join-server"]
---

The complete save of a Frozen Flame server lives in the `SaveGames` folder. You therefore always transfer it as a **whole folder**, for example when moving from another server or restoring an older state.

> [!NOTE]
> You never enter a world or save name anywhere – Frozen Flame has no such setting. The server name has nothing to do with the savegame.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the save.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /FrozenFlame/Saved/
   ```

4. **Secure the current save**\
   Rename the existing `SaveGames` folder, for example to `SaveGames_old`, or download it beforehand.

   > [!WARNING]
   > If you delete the folder, the current save of your server is gone. Create a [backup](/tutorials/gameserver/frozen-flame/create-backup) beforehand or download the existing save in case you want to switch back.

5. **Upload the new save**\
   Upload your `SaveGames` folder including all of its contents so that it ends up under the following path again:

   ```text
   /FrozenFlame/Saved/SaveGames/
   ```

6. **Start the server**\
   Start your server. The new save is now loaded.

> [!WARNING]
> A save always belongs to the game mode it was created in. Only transfer saves between servers that load the same game mode – that is **Cataclysm** to **Cataclysm** and **Campaign** to **Campaign**.

> [!TIP]
> Switching between two saves works most reliably when both of them come from a dedicated server – for example when moving to another server. See [Download savegame](/tutorials/gameserver/frozen-flame/download-savegame) for how to secure your current state.

## Transferring a single player save

> [!IMPORTANT]
> There is **no documented procedure** for transferring a single player or local co-op save to a dedicated server. For local play the developers only describe where the configuration file is stored – a way to move a local save onto a server is not documented anywhere. Only work with saves that come from a Frozen Flame server.
