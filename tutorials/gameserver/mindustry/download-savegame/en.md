---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Mindustry Server"
description: "Download the savegame of a Mindustry server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 5
related: ["gameserver/mindustry/add-savegame", "gameserver/mindustry/create-backup", "gameserver/mindustry/join-server", "gameserver/mindustry/kick-ban-players"]
---

You can download the save of your server to your PC at any time – for example as an additional backup or to move it to another server. A save is always exactly one file with the extension `.msav`.

## Save the current state

The server does not write the running game to disk permanently. So first store it via the **console** of your dashboard:

1. **Open the console**\
   Open the **console** of your server in the dashboard.

2. **Save the game**\
   Enter the following command and pick a short name without spaces:

   ```text
   save myworld
   ```

   The server confirms the save and places the file at `/config/saves/myworld.msav`.

## Download the file

1. **Stop the server**\
   Stop your server via the dashboard so nothing is written to the file during the download.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change into the following directory:

   ```text
   /config/saves/
   ```

4. **Download the save**\
   Download the `.msav` file you want to your PC:

   ```text
   myworld.msav
   ```

5. **Start the server**\
   Start your server again.

> [!NOTE]
> To see which saves exist on your server, use the `saves` command in the console. It lists all slots without the `.msav` extension.

> [!TIP]
> **Auto-saves**
>
> If you enabled automatic saving, the same folder also contains files with the prefix `auto_`, for example `auto_Ground_Zero_....msav`. You can download and later load those as well.

> [!TIP]
> **Also back up settings and maps**
>
> If you want to save more than just the world, download the following files as well:
>
> | Path | Content |
> |------|---------|
> | `/config/settings.bin` | All server settings as well as the admin and ban lists |
> | `/config/maps/` | Your custom maps |
> | `/config/mods/` | Installed mods and plugins |

> [!WARNING]
> **Caution**
>
> `settings.bin` is a binary file. Back it up, but never edit it in a text editor – doing so destroys admins, bans and settings.

> [!TIP]
> **Restore the savegame**
>
> If you want to move the save back onto a server later, follow the guide [Add savegame](/tutorials/gameserver/mindustry/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create Backup](/tutorials/gameserver/mindustry/create-backup).
