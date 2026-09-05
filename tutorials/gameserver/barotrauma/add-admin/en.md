---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Barotrauma Server"
description: "Add and remove admin on a Barotrauma server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/barotrauma/add-bots", "gameserver/barotrauma/add-custom-ranks", "gameserver/barotrauma/add-mods", "gameserver/barotrauma/add-savegame"]
---

You can manage admins via the `clientpermissions.xml` file.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Add admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open clientpermissions.xml**\
   Open the file `clientpermissions.xml` at:

   ```text
   /config/clientpermissions.xml
   ```

4. **Add admin**\
   Add a new entry:

   ```xml
   <Client
     name="PlayerName"
     steamid="YOUR_STEAMID64"
     preset="Admin"
   />
   ```

5. **Start the server**\
   Save the file and start your server.

## Remove admin

To remove an admin, delete the corresponding `<Client>` entry from `clientpermissions.xml` and restart the server.

## Available presets

| Preset | Description |
|--------|-------------|
| `Admin` | Full access to all commands and settings |
| `Moderator` | Can kick, ban players and moderate the chat |
| `None` | No special permissions |

> [!NOTE]
> You can also assign custom permissions by using `permissions="ManageRound,Kick,Ban,ConsoleCommands"` instead of a preset.
