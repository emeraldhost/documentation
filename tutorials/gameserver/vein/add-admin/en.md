---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your VEIN Server"
description: "Add an admin to a VEIN server"
tags: []
date: "2026-03-23"
visibility: "public"
cta: "gameserver"
product_keys: ["vein"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/vein/add-savegame", "gameserver/vein/create-backup", "gameserver/vein/download-savegame", "gameserver/vein/enable-whitelist"]
---

You can add admins and super admins via the `Game.ini` file.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   Open the file `Game.ini` at:

   ```text
   /Vein/Saved/Config/LinuxServer/Game.ini
   ```

4. **Add admin**\
   Add the section `[/Script/Vein.VeinGameSession]` (if not already present) and enter the SteamID64:

   ```ini
   [/Script/Vein.VeinGameSession]
   AdminSteamIDs=76561198012345678
   ```

   For multiple admins, add each SteamID64 on a new line:

   ```ini
   [/Script/Vein.VeinGameSession]
   AdminSteamIDs=76561198012345678
   AdminSteamIDs=76561198087654321
   ```

5. **Start the server**\
   Save the file and start your server.

## Add super admin

Super admins have extended permissions. Use `SuperAdminSteamIDs` instead of `AdminSteamIDs`:

```ini
[/Script/Vein.VeinGameSession]
SuperAdminSteamIDs=76561198012345678
AdminSteamIDs=76561198087654321
```

## Open admin menu

As an admin, you can open the admin menu in-game by pressing the `\` key (backslash). From there you can spawn items, manage gameplay and moderate the server.
