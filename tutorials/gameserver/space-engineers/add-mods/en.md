---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Space Engineers Server"
description: "Add Steam Workshop mods to a Space Engineers server"
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
short_title: "Add Mods"
sort: 2
related: ["gameserver/space-engineers/add-admins", "gameserver/space-engineers/change-game-mode", "gameserver/space-engineers/change-max-players", "gameserver/space-engineers/change-server-description"]
---

You can add Steam Workshop mods to your server to add blocks, vehicles, gameplay mechanics and more. Mods are added by their **Workshop ID** in your world's config file – the server downloads them automatically from the Steam Workshop on startup. You do not need to upload any mod files manually.

> [!WARNING]
> **Caution**
>
> Stop your server before editing the config file. A running server can overwrite your changes when it saves or stops.

## Find the Workshop ID

1. **Open the mod in the Steam Workshop**\
   Open the [Steam Workshop for Space Engineers](https://steamcommunity.com/app/244850/workshop/) and go to the mod you want.

2. **Copy the ID from the URL**\
   The Workshop ID is the number at the end of the URL after `?id=`:

   ```text
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   The ID here is `123456789`.

## Add the mods

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), or use the file browser in the dashboard.

3. **Open the config file**\
   In your world folder `Saves/World/` open the file `Sandbox_config.sbc`.

4. **Insert the mod list**\
   Look for the `<Mods>` block (on a new world it reads `<Mods />`) and add one `<ModItem>` per mod. Replace `123456789` with the respective Workshop ID:

   ```xml
   <Mods>
     <ModItem FriendlyName="Mod Name">
       <Name>123456789.sbm</Name>
       <PublishedFileId>123456789</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   - `<Name>` is the Workshop ID with the `.sbm` extension.
   - `<PublishedFileId>` is the bare Workshop ID without an extension.
   - `FriendlyName` is optional and is only a display name.

5. **Start the server**\
   Save the file and start your server. On startup the server downloads the mods automatically from the Steam Workshop – you can watch the progress in the server console.

> [!NOTE]
> **Mind the order**
>
> The order determines priority: mods **higher** in the list override mods further down when both change the same definition. Order overlapping mods accordingly.

> [!TIP]
> **Experimental mode & scripts**
>
> Many mods require [experimental mode](/tutorials/gameserver/space-engineers/enable-experimental-mode) to be enabled – mods with their own code (script mods) require it **without exception**. Enable it whenever you use Workshop mods.
>
> Scripts for **Programmable Blocks** are not mods and are not added to the mod list – see [Allow In-Game Scripts](/tutorials/gameserver/space-engineers/enable-ingame-scripts).

> [!WARNING]
> **Mods missing after a restart?**
>
> With the server stopped, open `Saves/World/Sandbox_config.sbc` again and check that your `<Mods>` block is still present. If not, re-add the mods and restart the server.

> [!IMPORTANT]
> Players do not need to download anything manually – the client loads the server mods automatically when joining. However, Steam Workshop mods require crossplay to be **disabled**.
