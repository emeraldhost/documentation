---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Avorion Server"
description: "Add a savegame to an Avorion server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/avorion/add-admin", "gameserver/avorion/add-mods", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame"]
---

In Avorion a savegame is always a complete **galaxy** – an entire folder, not a single file. The name of that folder is at the same time the galaxy name your server loads on startup. Both have to match, otherwise your server starts with a new, empty galaxy.

> [!TIP]
> Create a [backup](/tutorials/gameserver/avorion/create-backup) of your current galaxy before uploading, in case you want to switch back later.

## What belongs to the galaxy?

Besides the actual save data, the galaxy folder also holds the server-side settings:

| File | Content |
|------|---------|
| `server.ini` | Server settings of the galaxy |
| `admin.xml` | List of administrators |
| `modconfig.lua` | Configuration of the mods |

Always upload the folder **completely** – individual files taken from it do not make a usable savegame.

## Find your local galaxy

1. **Open the galaxy folder**\
   On your PC press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %AppData%\Avorion\galaxies
   ```

   On Linux the galaxies are located in the folder `~/.avorion/galaxies`.

2. **Select the galaxy**\
   Inside you will find one folder per galaxy. Choose the folder of the galaxy you want to transfer – you need the **complete folder** including its contents.

## Upload the galaxy

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open the data directory**\
   Navigate to the directory where your server stores its galaxies:

   ```text
   /galaxy/
   ```

   You can recognise it by the fact that it already contains a folder named after your current galaxy – with the files `server.ini`, `admin.xml` and `modconfig.lua` inside.

   > [!NOTE]
   > Which directory your server uses is defined by the startup parameter `--datapath`; the galaxy folder sits inside it under its own name (`<data directory>/<galaxy name>`). If no galaxy folder exists at all yet, start the server once – the folder structure and the `server.ini` are only created on the first start. Stop it again afterwards.

4. **Upload the galaxy folder**\
   Upload the complete folder of your galaxy with all its files into this directory.

   > [!WARNING]
   > Use a folder name without spaces and special characters and keep it short. It is best to replace spaces with underscores, for example `My_Galaxy` – otherwise spaces in the folder name cause problems on startup.

5. **Enter the galaxy name**\
   Open the **dashboard**, switch to the **settings** and enter the folder name of your uploaded galaxy in the field for the galaxy name (**Galaxy Name**) – exactly as it is written, including capitalisation.

6. **Start the server**\
   Save all changes and start your server. On startup your uploaded galaxy is now loaded.

> [!IMPORTANT]
> The folder name and the configured galaxy name have to match **exactly**. If they do not, your server simply creates a new, empty galaxy under the configured name on startup – your uploaded galaxy is then left untouched and is not loaded.

> [!WARNING]
> Only change server settings while the server is stopped. Values your server receives as startup parameters – such as the galaxy name – are written into the `server.ini` on startup and overwrite differing entries there.

> [!TIP]
> If you want to save your galaxy first or move it to another server, you can find the other direction under [Download savegame](/tutorials/gameserver/avorion/download-savegame).
