---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your ARK Survival Evolved Server"
description: "Add an admin to an ARK Survival Evolved server"
tags: []
date: "2025-12-24"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["ark-survival-evolved"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/ark-survival-evolved/add-mods", "gameserver/ark-survival-evolved/add-savegame", "gameserver/ark-survival-evolved/create-backup", "gameserver/ark-survival-evolved/download-savegame"]
---

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Method 1: Admin Password (temporary admin rights)

With this method you can log in as admin in-game by entering the admin password.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Set admin password**\
   Enter a secure password in the **Admin Password** field and save the change.

4. **Restart the server**\
   Restart your server for the change to take effect.

5. **Log in as admin**\
   Open the console in-game with the `Tab` key and enter the following command:

   ```text
   enablecheats YourAdminPassword
   ```

> [!NOTE]
> Admin rights via the password are only valid for the current session. After reconnecting, you need to enter the command again.

## Method 2: Permanent admins (SteamID64)

With this method you are permanently registered as admin and do not need to enter a password.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open file**\
   Create or open the file `AllowedCheaterSteamIDs.txt` in the directory:

   ```text
   /ShooterGame/Saved/AllowedCheaterSteamIDs.txt
   ```

4. **Enter SteamID64**\
   Add your SteamID64 on a new line.

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> To add multiple admins, simply add multiple SteamID64s – each on a new line.

## Important admin commands

| Command | Description |
|---------|-------------|
| `cheat fly` | Enable fly mode |
| `cheat walk` | Disable fly mode |
| `cheat god` | Enable invincibility |
| `cheat giveresources` | Receive 50 units of each resource |
| `cheat infinitestats` | Infinite stamina, health, etc. |
| `cheat destroywilddinos` | Remove all wild dinos |
