---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Nightingale Server"
description: "Download the savegame from a Nightingale server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 4
related: ["gameserver/nightingale/add-savegame", "gameserver/nightingale/create-backup", "gameserver/nightingale/join-server", "gameserver/nightingale/kick-ban-players"]
---

You can download your server's save to your PC at any time – for example as an additional backup or to move it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Nightingale constantly writes to the world and character data while it is running – otherwise you would download an incomplete save.

## Where the save is stored

The complete save lives in the `Offline` folder. Realms and characters are stored separately inside it:

| Directory | Content |
|-----------|---------|
| `/NWX/Saved/Offline/DedicatedServer/Deploy/` | The realms of your server, meaning all worlds including their buildings |
| `/NWX/Saved/Offline/<PlatformID>/Profiles/` | The character data of a player. `<PlatformID>` is the Steam or Epic ID of that player – each player has their own folder. |

> [!NOTE]
> Nightingale has **no world or save name** that you enter anywhere. The server always loads whatever is stored in these folders.

## Download the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Switch to the following directory:

   ```text
   /NWX/Saved/
   ```

4. **Download the folder**\
   Download the complete `Offline` folder including all subfolders to your PC:

   ```text
   /NWX/Saved/Offline/
   ```

   > [!TIP]
   > Always download realms and characters together. A realm without its matching character can only be used to a limited extent later on.

5. **Start the server**\
   Start your server again.

> [!TIP]
> **Save the server state as well**
>
> If you also want to keep the server state – including the list of banned players – download this folder too:
>
> ```text
> /NWX/Saved/Config/
> ```

> [!TIP]
> **Save the configuration as well**
>
> The server settings are stored in the following file:
>
> ```text
> /NWX/Config/ServerSettings.ini
> ```
>
> Note: the admin password, the server password and the difficulty are written into this file from the **dashboard** every time the server starts. So you do not need the file to restore those values.

> [!TIP]
> **Restore the save later**
>
> If you want to move the save back onto a server later, follow the guide [Add Savegame](/tutorials/gameserver/nightingale/add-savegame).

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup feature: [Create Backup](/tutorials/gameserver/nightingale/create-backup).
