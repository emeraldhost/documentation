---
slug: "set-server-password"
language: "en"
title: "How to Set a Password on Your Satisfactory Server"
description: "Set a server password on a Satisfactory server"
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
short_title: "Set Server Password"
sort: 9
related: ["gameserver/satisfactory/create-backup", "gameserver/satisfactory/download-savegame", "gameserver/satisfactory/join-server", "gameserver/satisfactory/set-admin-password"]
---

You can protect your server with a password so that only players with the password can join. The password is configured in the `Game.ini` file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   Open the file `Game.ini` at:

   ```text
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. **Set password**\
   Add the following content and set your desired password:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Your Server Name",AdminPassword="YourAdminPassword",PlayerPassword="YourServerPassword")
   ```

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> To remove the password and make the server public again, remove the `PlayerPassword` value or set it to empty: `PlayerPassword=""`.

> [!NOTE]
> If the file already contains an `mServerGameState` entry, add the `PlayerPassword` value there. Do not add a second entry.
