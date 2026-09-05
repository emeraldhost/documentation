---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your PixARK Server"
description: "Add an admin to a PixARK server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/pixark/add-mods", "gameserver/pixark/add-savegame", "gameserver/pixark/create-backup", "gameserver/pixark/download-savegame"]
---

There are two ways to grant admin rights on a PixARK server:

| Method | When to use it |
|--------|----------------|
| **Admin list** with SteamID64 | For permanent admins. The rights apply automatically as soon as the listed player joins the server – no password and no command needed. |
| **Admin password** | For remote administration via RCON and for tools that connect to the server. |

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Permanent admins via the admin list

Add the players to a text file on the server. They then receive their rights automatically when connecting.

1. **Stop the server**\
   Stop your server via the dashboard. The admin list is only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the file**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /ShooterGame/Saved/AllowedCheaterSteamIDs.txt
   ```

4. **Enter the SteamID64**\
   Enter exactly one SteamID64 per line. A SteamID64 has 17 digits and starts with `765611`:

   ```text
   76561198012345678
   76561198087654321
   ```

   > [!WARNING]
   > Only enter the plain number – no names, no comments, no commas. A single wrong entry can cause the file not to be evaluated at all.

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> This method does not require any console command: the rights apply automatically as soon as a listed player joins the server.

## Set the admin password

1. **Open the dashboard**\
   Open the **dashboard** of your server and switch to the **Settings**.

2. **Enter the password**\
   Enter your desired password in the field for the **admin password** (`ServerAdminPassword`).

3. **Restart the server**\
   Save the change and restart your server so the new password is applied.

> [!IMPORTANT]
> The admin password is also your **RCON password**. Anyone who knows it can control your server remotely. Use a different password than your server password and only share it with people you fully trust.

## Use admin commands

Admin commands in PixARK start with the prefix `cheat`, for example:

```text
cheat giveitemnum 001 1 1 0
```

> [!NOTE]
> If you added yourself through the `AllowedCheaterSteamIDs.txt` file, the commands are available to you right after connecting.

## Control the server via RCON

As an alternative to the game you can administer your server through RCON. That is handy when you are not in the game.

1. **Set the admin password**\
   Set the admin password as described above first. Without an admin password no RCON login is possible.

2. **Gather the connection details**\
   You need the **IP address**, the **RCON Port** from the dashboard and your **admin password**.

3. **Connect an RCON client**\
   Connect with an RCON client. For ARK based servers **Arkon** has proven itself: enter the IP address, RCON Port and admin password there and establish the connection.

> [!WARNING]
> Which commands a PixARK server accepts via RCON is not officially documented. Therefore always make permanent changes to your server settings in the **dashboard** and not via RCON – otherwise they are lost on the next restart.
