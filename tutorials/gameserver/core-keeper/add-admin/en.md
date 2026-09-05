---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Core Keeper Server"
description: "Add and remove admin on a Core Keeper server"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/core-keeper/add-mods", "gameserver/core-keeper/add-savegame", "gameserver/core-keeper/ban-players", "gameserver/core-keeper/change-content-bundle"]
---

You can manage admins via the `Admins.json` file.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Add admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Admins.json**\
   Open the file `Admins.json` at:

   ```text
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/Admins.json
   ```

4. **Add admin**\
   Add one entry per admin to the `adminList` array. The example shows two entries – they are separated by a comma; with only one admin, the second entry including its comma is omitted:

   ```json
   { "index": 1, "privileges": 2, "name": "YourCharacterName", "steamId": 76561198012345678 },
   { "index": 2, "privileges": 1, "name": "SecondCharacterName", "steamId": 76561198087654321 }
   ```

   | Field | Description |
   |-------|-------------|
   | `index` | Sequential number |
   | `privileges` | `2` = full admin, `1` = limited admin |
   | `name` | Your in-game character name |
   | `steamId` | Your SteamID64 |

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from applying the admin list.

5. **Start the server**\
   Save the file and start your server.

## Remove admin

To remove an admin, delete the corresponding entry from `Admins.json` and restart the server.
