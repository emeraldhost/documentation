---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Terraria tModLoader Server"
description: "Add an admin on a Terraria tModLoader server"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/terraria-tmodloader/add-mods", "gameserver/terraria-tmodloader/add-savegame", "gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup"]
---

Admins in Terraria tModLoader are set up using an authentication code that is displayed in the server console when the server starts.

## Set Up Admin via Auth Code

1. **Start the server**\
   Start your server via the dashboard.

2. **Read the auth code**\
   Open the server console in the dashboard. On startup, an authentication code will be displayed, e.g.:

   ```text
   To enable cheats, type in the command 'auth <code>'
   ```

   Note down this code.

3. **Join the server**\
   Join your server as a player.

4. **Enter the auth command**\
   Enter the following command in the in-game chat:

   ```text
   /auth <code>
   ```

   Replace `<code>` with the auth code from the server console.

5. **Set a password (optional)**\
   After successful authentication, you can set a permanent password:

   ```text
   /password <new_password>
   ```

   With this password, you can log in as admin in the future without needing the auth code.

> [!NOTE]
> The auth code changes with every server restart. If you have set a permanent password, you can log in using `/auth <password>`.

> [!TIP]
> To give other players admin rights, share the current auth code with them or set up a permanent password they can use.

> [!WARNING]
> **Note**
>
> The auth code system is a tModLoader feature. Vanilla Terraria servers use the server console directly for admin commands and do not have an auth system. If you are running vanilla Terraria without tModLoader, you will need a mod like Hero's Mod or TShock to get an in-game admin system.
