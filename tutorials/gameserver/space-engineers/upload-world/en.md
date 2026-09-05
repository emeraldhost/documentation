---
slug: "upload-world"
language: "en"
title: "How to Upload a World to Your Space Engineers Server"
description: "Upload an existing world to a Space Engineers server"
tags: []
date: "2026-07-08"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Upload World"
sort: 15
related: ["gameserver/space-engineers/enable-remote-api", "gameserver/space-engineers/join-server", "gameserver/space-engineers/kick-ban-players", "gameserver/space-engineers/set-server-password"]
---

You can transfer a locally created or existing world to your server and continue playing there. A Space Engineers world is a **folder** that contains, among others, the files `Sandbox.sbc` and `Sandbox_config.sbc`.

> [!NOTE]
> The world name on your server is fixed to **World** and cannot be changed (visible in the **Settings**). Your world is therefore always loaded from the `Saves/World/` folder – you upload the **contents** of your world into exactly this folder.

## Find the world folder

You can find your local worlds on your PC under:

```text
%APPDATA%\SpaceEngineers\Saves\<SteamID>\
```

Each world is its own folder (named after the world). You need the **contents** of this folder – among others `Sandbox.sbc`, `Sandbox_config.sbc` and the `.sbs` files.

## Upload the world

> [!WARNING]
> **Caution**
>
> Stop your server before uploading files. A running server saves automatically and can corrupt the uploaded world.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), or use the file browser.

3. **Open the world folder**\
   Go to the `Saves/World/` folder on the server.

4. **Upload the world data**\
   Upload the **contents** of your local world folder directly into `Saves/World/`, overwriting the existing files. Upload the files directly into the folder – **not** as another subfolder.

5. **Start the server**\
   Start your server. The server console should show "Loading world …" and then "Game ready".

> [!WARNING]
> **Caution**
>
> Existing files in the `Saves/World/` folder will be overwritten. Create a [backup](/tutorials/gameserver/create-backup) first if you want to keep the current world. Also, do not store your own backups inside the folder – the server removes unrecognized files when it saves.
