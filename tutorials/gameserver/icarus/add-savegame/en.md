---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Icarus Server"
description: "Add a savegame to an Icarus server"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["icarus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/icarus/change-max-players", "gameserver/icarus/change-server-name", "gameserver/icarus/create-backup", "gameserver/icarus/download-savegame"]
---

You can transfer a local prospect to your server to continue playing with an existing save.

## Find the local savegame

1. **Open savegame folder**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %LOCALAPPDATA%\ICARUS\Saved\PlayerData
   ```

2. **Navigate to the Prospects folder**\
   Open your SteamID64 folder and navigate into the `Prospects` folder.

3. **Identify the prospect file**\
   Your save is a file named `<YourProspect>.json`. Note the exact file name.

## Upload and apply the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the prospect**\
   Upload the `<YourProspect>.json` file to the following directory:

   ```text
   /ICARUS/Saved/PlayerData/DedicatedServer/Prospects/
   ```

4. **Adjust ServerSettings.ini**\
   Open the following file:

   ```text
   /ICARUS/Saved/Config/WindowsServer/ServerSettings.ini
   ```

   Set the value of `LoadProspect` to the file name of your prospect (without `.json`):

   ```text
   LoadProspect=<YourProspect>
   ```

5. **Start the server**\
   Start your server via the dashboard.

> [!WARNING]
> Start the server once and create a new prospect from the client before uploading your own save for the first time. Only then will the required directory structure be generated on the server.

> [!WARNING]
> Make sure the version of your savegame matches the server version. Saves from older versions may cause errors or incompatible data.
