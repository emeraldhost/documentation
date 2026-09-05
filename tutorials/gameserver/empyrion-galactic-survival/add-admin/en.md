---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on Your Empyrion: Galactic Survival Server"
description: "Add an admin to an Empyrion: Galactic Survival server"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["empyrion-galactic-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/empyrion-galactic-survival/change-gamemode", "gameserver/empyrion-galactic-survival/change-max-players", "gameserver/empyrion-galactic-survival/change-savegame-name", "gameserver/empyrion-galactic-survival/change-seed"]
---

Admins on Empyrion servers are configured in the `adminconfig.yaml` file located in the `Saves` folder.

## Add an admin entry

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open adminconfig.yaml**\
   Open the file:

   ```text
   /Saves/adminconfig.yaml
   ```

4. **Add the entry**\
   Add your player under the `Elevated:` section. Replace the SteamID64 and the desired permission level:

   ```yaml
   Elevated:
     - Id: 76561198012345678
       Permission: 9
   ```

   You can find your [SteamID64](/tutorials/gameserver/steamid64-find-out) using the linked guide.

5. **Start the server**\
   Save the file and start your server via the dashboard.

## Permission levels

| Value | Role |
|-------|------|
| 3 | GameMaster |
| 6 | Moderator |
| 9 | Admin |

> [!TIP]
> If no admin is configured yet, a logged-in player can use the `initadmin` command in-game to become the initial admin. They can then add further admins via the `adminconfig.yaml` file.

> [!NOTE]
> Changes to `adminconfig.yaml` only take effect after a server restart.
