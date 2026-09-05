---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your HumanitZ Server"
description: "Download a savegame from a HumanitZ server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/humanitz/add-savegame", "gameserver/humanitz/create-backup", "gameserver/humanitz/join-server", "gameserver/humanitz/kick-ban-players"]
---

You can download your server's savegame to your PC at any time – for example as an additional backup or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. HumanitZ saves automatically while running – if you download during that, the savegame can be incomplete.

> [!NOTE]
> **Project folder**
>
> All paths in this guide start with the project folder `HumanitZServer`. If your server still runs a version older than HumanitZ 1.0, that folder is called `TSSGame` instead. Check via SFTP which of the two folders exists on your server and adjust the paths accordingly.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change to the following directory:

   ```text
   /HumanitZServer/Saved/SaveGames/SaveList/
   ```

4. **Download the folder**\
   Download the complete `Default` folder with all of its files to your PC.

5. **Start the server**\
   Start your server again.

## Which files belong to the savegame?

| File | Content |
|------|---------|
| `Save_<name>.sav` | The actual savegame with the world, bases, vehicles and player data. By default the file is called `Save_DedicatedSaveMP.sav`. |
| `Save_ClanData.sav` | The clan and group data of your server |

> [!WARNING]
> **Caution**
>
> Always download the complete `Default` folder. If `Save_ClanData.sav` is missing, the clan data is lost when you restore the savegame.

> [!NOTE]
> **Which name is the right one?**
>
> The name of your savegame file is defined by the `SaveName` value in the `[Host Settings]` section of the file `/HumanitZServer/GameServerSettings.ini`. If it says `SaveName="DedicatedSaveMP"`, then `Save_DedicatedSaveMP.sav` is your current savegame.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following files in addition:
>
> ```text
> /HumanitZServer/GameServerSettings.ini
> /HumanitZServer/F_BannedPlayers.txt
> /HumanitZServer/F_MVPAccess.txt
> ```
>
> The two text files only exist if you have set up bans or a whitelist.

> [!TIP]
> **Restore the savegame**
>
> If you want to move the savegame back to a server later, follow the guide [Add Savegame](/tutorials/gameserver/humanitz/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/humanitz/create-backup).
