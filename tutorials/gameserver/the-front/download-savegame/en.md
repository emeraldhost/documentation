---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your The Front Server"
description: "Download a savegame from a The Front server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/the-front/add-savegame", "gameserver/the-front/create-backup", "gameserver/the-front/join-server", "gameserver/the-front/kick-ban-players"]
---

The save of a The Front server is not a single file but the complete folder `GameStates`. It contains the world, all structures, the player data and the guild data.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. The Front saves regularly while running – downloading during operation can result in an incomplete save.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /TheFrontManager/<ConfigName>/Saved/
   ```

   > [!NOTE]
   > **Which config name?**
   >
   > The folder carries the config name of your server – the same name that appears in the configuration file `ServerConfig_<ConfigName>.ini`. Simply open the folder `/TheFrontManager/` – usually there is exactly one subfolder in there, and that is yours.
   >
   > If you cannot find a `TheFrontManager` folder, your server runs without a dedicated user directory. The save is then located here:
   >
   > ```text
   > /ProjectWar/Saved/
   > ```

4. **Download GameStates**\
   Download the complete folder `GameStates` including all subfolders and files to your PC.

5. **Start the server**\
   Start your server again.

> [!WARNING]
> **Caution**
>
> A save is always the complete `GameStates` folder. Always download it in full – individual files taken from it do not make a usable save.

> [!NOTE]
> **What is inside GameStates?**
>
> | Entry | Content |
> |-------|---------|
> | `Worlds/` | The world of your server |
> | `Players/` | The player data |
> | `DeletedPlayers/` | Deleted player data |
> | `Accounts/Accounts.csv` | The accounts on your server |
> | `Accounts/NickNames.csv` | The player names in use |
> | `Accounts/GM.csv` | Admins and bans |
> | `ConstructData.sav` | All built structures |
> | `GuildData.sav` | The guilds on your server |

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the configuration file in addition:
>
> ```text
> /TheFrontManager/ServerConfig_<ConfigName>.ini
> ```

> [!TIP]
> **Restoring the savegame**
>
> If you want to transfer the save back to a server later, follow the guide [Add savegame](/tutorials/gameserver/the-front/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/the-front/create-backup).
