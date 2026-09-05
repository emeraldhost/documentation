---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on a The Bus Server"
description: "Add an admin on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 2
related: ["gameserver/the-bus/activate-dlc", "gameserver/the-bus/change-fleet", "gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan"]
---

The Bus uses a rank system with four levels. You can add players via `PlayerData.json` or through commands.

## Rank System

| Rank | Description |
|------|-------------|
| **Owner** | Full access, highest permission level |
| **Admin** | Administrative permissions, access to the admin menu without re-entering the password |
| **Moderator** | Moderation permissions |
| **User** | Default rank for all players |

## How to assign ranks via PlayerData.json

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open file**\
   Open the file `TheBus/Saved/PlayerData.json`.

3. **Change rank**\
   Find the desired player and change the value of `"perms"` to `"Owner"`, `"Admin"` or `"Moderator"`:

   ```json
   {
       "players": [
           {
               "name": "PlayerName",
               "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "perms": "Owner",
               "banned": false,
               "unbanDate": "0001.01.01-00.00.00",
               "adminPasswordUsed": ""
           },
           {
               "name": "AnotherPlayer",
               "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "perms": "Admin",
               "banned": false,
               "unbanDate": "0001.01.01-00.00.00",
               "adminPasswordUsed": ""
           }
       ]
   }
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the player data unreadable for the server.

4. **Restart server**\
   Save the changes and restart the server.

> [!WARNING]
> **Important**
>
> The player must have connected to the server at least once for an entry to exist in `PlayerData.json`.

> [!TIP]
> Join your server first and assign yourself the Owner rank before other players connect.

## How to assign ranks via commands

Ranks can also be assigned via commands – either through the console in the dashboard or directly in-game.

| Command | Description |
|---------|-------------|
| `/owner <playername>` | Promote player to Owner |
| `/admin <playername>` | Promote player to Admin |
| `/mod <playername>` | Promote player to Moderator |
| `/user <playername>` | Demote player to User |

> [!TIP]
> If you have assigned yourself the Owner rank via `PlayerData.json`, you can also use these commands directly through the in-game chat.

## In-Game Admin Menu

Players with **Owner** or **Admin** permissions can open the **Admin Menu** via the pause menu. The following settings can be changed:

- **Map selection**
- **Operating plan**
- **Weather**

> [!NOTE]
> It is recommended to set an admin password to prevent any player from opening the admin menu. The admin password can be set in the dashboard under settings.
