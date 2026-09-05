---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Terraria tShock Server"
description: "Download a savegame from a Terraria tShock server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/join-server", "gameserver/terraria-tshock/kick-ban-players"]
---

You can download your server's world to your PC at any time – for example as an additional backup, to archive it, or to move it to another server. tShock uses the regular Terraria world format: the entire world is contained in **a single `.wld` file**.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the file. When you stop it via the dashboard, tShock saves the world cleanly. If you download the file while the server is running, you may end up with an incomplete state.

## Download the world

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the main directory**\
   The world file is located directly in the main directory of your server:

   ```text
   /
   ```

4. **Download the world**\
   Download the `.wld` file of your world to your PC.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Which file is the right one?**
>
> You can tell which world is loaded from the **World Name** field in the **Settings** of the dashboard. If it contains `MyWorld`, for example, you need the file `MyWorld.wld`.

## Other data that belongs to your savegame

| Path | Content |
|------|---------|
| `/<World Name>.wld` | The world itself – terrain, buildings, chests, NPCs |
| `/tshock/tshock.sqlite` | Accounts, groups, bans and – with Server Side Characters enabled – the character data of your players |
| `/tshock/config.json` | The tShock server settings |
| `/tshock/backups/` | The automatic world backups created by tShock |

> [!CAUTION]
> **Server Side Characters**
>
> If Server Side Characters are enabled (the `Enabled` value in `/tshock/sscconfig.json`), the inventories and progress of your players are **not** stored in the `.wld` file but in `/tshock/tshock.sqlite`. In that case download both files, otherwise the characters will be missing.

> [!NOTE]
> **tShock backup files**
>
> tShock additionally stores its own backups at regular intervals in the folder `/tshock/backups/`. The file name consists of the world name, the `.wld` extension and a timestamp, e.g. `MyWorld.wld.2026-07-30T12.00.00Z.bak`. Older backups are deleted automatically after a configured time – so download important states in good time.

> [!TIP]
> **Continue playing locally**
>
> Copy the downloaded `.wld` file to `%userprofile%\Documents\My Games\Terraria\Worlds` on your PC to open the world in single player. On Linux the folder is `~/.local/share/Terraria/Worlds`, on macOS `~/Library/Application Support/Terraria/Worlds`.

> [!TIP]
> **Restoring the world**
>
> If you want to transfer the world back to a server later, follow the guide [Add savegame](/tutorials/gameserver/terraria-tshock/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/terraria-tshock/create-backup).
