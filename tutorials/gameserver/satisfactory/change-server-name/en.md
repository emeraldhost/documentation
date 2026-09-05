---
slug: "change-server-name"
language: "en"
title: "How to Change the Server Name on Your Satisfactory Server"
description: "Change server name on a Satisfactory server"
tags: []
date: "2026-04-12"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Server Name"
sort: 4
related: ["gameserver/satisfactory/add-savegame", "gameserver/satisfactory/change-max-players", "gameserver/satisfactory/create-backup", "gameserver/satisfactory/download-savegame"]
---

The server name is configured in the `Game.ini` file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   Open the file `Game.ini` at:

   ```text
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. **Change server name**\
   Add the following content and adjust the name:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Your Server Name")
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> If the file already contains an `mServerGameState` entry, only change the `ServerSessionName` value there. Do not add a second entry.
