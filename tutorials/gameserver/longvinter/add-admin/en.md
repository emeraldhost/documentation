---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Longvinter Server"
description: "Add an admin to a Longvinter server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/longvinter/add-savegame", "gameserver/longvinter/create-backup", "gameserver/longvinter/download-savegame", "gameserver/longvinter/join-server"]
---

Admins on a Longvinter server are defined through the configuration file `Game.ini`. What you enter is the player's **EOS Account ID** – a 32-character string of digits and letters.

> [!IMPORTANT]
> Even though the key is called `AdminSteamID`, it expects the **EOS Account ID** and **not** the SteamID64. If you enter a 17-digit SteamID64 there, the player will not get admin rights.

## Find the EOS Account ID

1. **Start Longvinter**\
   Launch Longvinter on your PC.

2. **Open the settings**\
   Open **Options** in the main menu.

3. **Read the ID**\
   Switch to the **General** tab and scroll down. Your **EOS Account ID** is listed there – copy it.

> [!TIP]
> Every player can look up their own EOS Account ID this way and send it to you. Without that ID you cannot make anyone an admin. If you already are an admin, you can also copy a player's EOS ID in game by right-clicking that player.

## Add the admin

1. **Stop the server**\
   Stop your server via the **dashboard**.

   > [!WARNING]
   > Never edit `Game.ini` while the server is running. The server saves roughly every ten minutes and overwrites your changes in the process.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /Longvinter/Saved/Config/LinuxServer/Game.ini
   ```

4. **Enter the EOS Account ID**\
   Add the ID to the key `AdminSteamID` in the section `[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]`:

   ```ini
   [/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
   AdminSteamID=000000000000000000000000aaaaaaaa
   ```

5. **Start the server**\
   Save the file and start your server. Admin rights are only read on server start.

## Add multiple admins

Multiple admins go into the same line, separated by **exactly one space**:

```ini
[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
AdminSteamID=000000000000000000000000aaaaaaaa 000000000000000000000000bbbbbbbb
```

> [!WARNING]
> Do **not** separate the IDs with commas and do not spread them over several lines. Both will result in none of the listed players getting admin rights.

> [!NOTE]
> The key belongs into the section `[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]`. It has no effect in the second section of the file, `[/Game/Blueprints/Server/GI_AdvancedSessions.GI_AdvancedSessions_C]`.

## Open the admin panel in the game

1. **Join the server**\
   Connect to your server – see [Join Server](/tutorials/gameserver/longvinter/join-server).

2. **Open the menu**\
   Press `ESC` in the game.

3. **Open the admin panel**\
   Click on **Admin panel** in the top left. The entry only appears if your EOS Account ID is stored correctly.

> [!NOTE]
> If the **Admin panel** is not shown, check the ID for typos, verify the section in `Game.ini` and restart the server.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/longvinter/kick-ban-players).
