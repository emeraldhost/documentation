---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Space Engineers Server"
description: "Add mods from the Steam Workshop or mod.io to a Space Engineers server"
tags: []
date: "2026-07-08"
visibility: "public"
updated: "2026-09-27"
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

You can add mods from the **Steam Workshop** or from **mod.io** to your server to add blocks, vehicles, gameplay mechanics and more. Mods are added by their **ID** in your world's config file – the server downloads them automatically on startup. You do not need to upload any mod files manually.

> [!WARNING]
> **Caution**
>
> Stop your server before editing the config file. A running server can overwrite your changes when it saves or stops.

## Steam Workshop or mod.io?

Which mod service you can use depends on whether [crossplay](/tutorials/gameserver/space-engineers/enable-crossplay) is enabled on your server:

| Server | Mod service | `PublishedServiceName` |
| --- | --- | --- |
| Without crossplay | Steam Workshop or mod.io | `Steam` or `mod.io` |
| With crossplay | mod.io only | `mod.io` |

Without crossplay, you can mix mods from both services in the same mod list.

> [!NOTE]
> **Crossplay servers**
>
> A crossplay server only loads mods from mod.io. If a Steam Workshop mod is in the mod list, the world does not start. In addition, your mods must not exceed **3 GB** in total – otherwise the server switches console compatibility off while loading.

## Find the mod ID

### Steam Workshop

1. **Open the mod in the Steam Workshop**\
   Open the [Steam Workshop for Space Engineers](https://steamcommunity.com/app/244850/workshop/) and go to the mod you want.

2. **Copy the ID from the URL**\
   The Workshop ID is the number at the end of the URL after `?id=`:

   ```text
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   The ID here is `123456789`.

### mod.io

1. **Open the mod on mod.io**\
   Open [mod.io for Space Engineers](https://mod.io/g/spaceengineers) and go to the mod you want.

2. **Copy the ID from the sidebar**\
   The mod.io ID is shown in the mod's right sidebar under **ID**, for example `1234567`. Use the copy icon next to it to copy it.

   > [!NOTE]
   > Unlike the Steam Workshop, the ID is not part of the URL. The address of a mod.io mod only contains its short name, for example `https://mod.io/g/spaceengineers/m/example-mod`.

## Add the mods

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection), or use the file browser in the dashboard.

3. **Open the config file**\
   In your world folder `/config/Saves/World/` open the file `Sandbox_config.sbc`.

4. **Insert the mod list**\
   Look for the `<Mods>` block (on a new world it reads `<Mods />`) and add one `<ModItem>` per mod. Replace the example IDs with the IDs of your mods.

   Mods from the **Steam Workshop**:

   ```xml
   <Mods>
     <ModItem FriendlyName="First Mod">
       <Name>123456789.sbm</Name>
       <PublishedFileId>123456789</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
     <ModItem FriendlyName="Second Mod">
       <Name>987654321.sbm</Name>
       <PublishedFileId>987654321</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   Mods from **mod.io**:

   ```xml
   <Mods>
     <ModItem FriendlyName="First Mod">
       <Name>1234567.sbm</Name>
       <PublishedFileId>1234567</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
     <ModItem FriendlyName="Second Mod">
       <Name>7654321.sbm</Name>
       <PublishedFileId>7654321</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   - `<Name>` is the ID with the `.sbm` extension.
   - `<PublishedFileId>` is the bare ID without an extension.
   - `<PublishedServiceName>` sets the mod service: `Steam` for the Steam Workshop, `mod.io` for mod.io. Mind the exact spelling – if the entry is missing, a server without crossplay looks for the mod in the Steam Workshop.
   - `FriendlyName` is optional and is only a display name.

5. **Start the server**\
   Save the file and start your server. On startup the server downloads the mods automatically from the Steam Workshop or mod.io – you can watch the progress in the server console.

> [!NOTE]
> **Mind the order**
>
> The order determines priority: mods **higher** in the list override mods further down when both change the same definition. Order overlapping mods accordingly.

> [!TIP]
> **Experimental mode & scripts**
>
> Since Update 1.206, mods no longer require [experimental mode](/tutorials/gameserver/space-engineers/enable-experimental-mode) – mods with their own code (script mods) also run without it.
>
> Scripts for **Programmable Blocks** are not mods and are not added to the mod list – see [Allow In-Game Scripts](/tutorials/gameserver/space-engineers/enable-ingame-scripts).

> [!WARNING]
> **Mods missing after a restart?**
>
> With the server stopped, open `/config/Saves/World/Sandbox_config.sbc` again and check that your `<Mods>` block is still present. If not, re-add the mods and restart the server.

> [!IMPORTANT]
> Players do not need to download anything manually – the client loads the server mods automatically when joining. However, Steam Workshop mods only work with crossplay **disabled** – on a crossplay server, use mods from mod.io.
