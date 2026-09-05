---
slug: "download-savegame"
language: "en"
title: "How to Download the Savegame of Your Romestead Server"
description: "Download a savegame from a Romestead server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Download Savegame"
sort: 2
related: ["gameserver/romestead/create-backup", "gameserver/romestead/join-server", "gameserver/romestead/kick-ban-players"]
---

You can download your server's world to your PC at any time – for example as an additional backup or to transfer it to another server.

> [!WARNING]
> **Caution**
>
> Stop your server before downloading the files. Romestead saves automatically every six minutes – if you download in the middle of a save, the savegame can be incomplete.

1. **Save the world**\
   Run the following command in your server's **console** so the current state is written to disk in full:

   ```text
   save
   ```

   > [!NOTE]
   > The server is frozen briefly while the save runs. Wait for the message in the console before you continue.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the directory**\
   Navigate to your server's main directory – the same place as `config.json`.

5. **Download the world**\
   Download the complete folder including all files and subfolders to your PC:

   ```text
   /saved_worlds/
   ```

6. **Start the server**\
   Start your server again.

> [!NOTE]
> **Which world does my server load?**
>
> The world that is loaded on startup is defined in `config.json` in your server's main directory, in the `AutoStartWorldName` value.

> [!WARNING]
> **Caution**
>
> Always download the folder in full. Individual files taken from it do not make a usable savegame.

> [!TIP]
> **Back up the configuration as well**
>
> If you also want to save your server settings, download the following file in addition:
>
> ```text
> /config.json
> ```
>
> It contains the name of the world that is loaded automatically along with the other base settings of your server.

> [!NOTE]
> **Savegames from single-player**
>
> There is no documented way to move a world from local single-player onto a dedicated server: neither the storage location of local worlds nor a transfer procedure is officially described. Create your world directly on the server instead.

> [!NOTE]
> **Regular backups**
>
> For automatic or regular backups you can also use the backup function: [Create backup](/tutorials/gameserver/romestead/create-backup).
