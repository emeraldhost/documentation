---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Don’t Starve Together Server"
description: "Add mods to a Don’t Starve Together server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/dont-starve-together/add-admin", "gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame"]
---

Don’t Starve Together comes with a full mod system for servers. You do not have to upload the mods yourself – the server downloads them from the Steam Workshop on its own. Two files are responsible for this:

- `dedicated_server_mods_setup.lua` defines **which** mods are downloaded.
- `modoverrides.lua` defines **which** mods are active in the world – per shard.

> [!WARNING]
> Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.

## Find the Workshop ID

1. **Open the mod in the Steam Workshop**\
   Open the [Steam Workshop for Don’t Starve Together](https://steamcommunity.com/app/322330/workshop/) and look up the mod you want.

2. **Read the ID from the address**\
   The Workshop ID is the number at the end of the URL. For `https://steamcommunity.com/sharedfiles/filedetails/?id=350811795` the ID is `350811795`.

## Add mods for download

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open the file**\
   In the main directory of your server, open the following file:

   ```text
   mods/dedicated_server_mods_setup.lua
   ```

4. **Enter the mods**\
   Add one line per mod with its Workshop ID:

   ```lua
   ServerModSetup("350811795")
   ServerModSetup("2902364746")
   ```

5. **Add collections**\
   If you want to load a complete Workshop collection, use this command with the ID of the collection instead:

   ```lua
   ServerModCollectionSetup("379114180")
   ```

6. **Save**\
   Save the file.

## Enable mods in the world

1. **Open the cluster folder**\
   Navigate to the folder that contains the `cluster.ini` file. That is your cluster folder. Inside you will find the shard folders `Master` (overworld) and, if the caves are enabled, `Caves`.

2. **Open modoverrides.lua**\
   Open the `modoverrides.lua` file in the `Master` folder. If it does not exist yet, create it:

   ```text
   <cluster folder>/Master/modoverrides.lua
   ```

3. **Enter the mods**\
   Add each mod with its Workshop ID in the format `workshop-<ID>`:

   ```lua
   return {
     ["workshop-350811795"] = { enabled = true },
     ["workshop-2902364746"] = { enabled = true },
   }
   ```

4. **Set mod options**\
   If a mod offers its own options, add them via `configuration_options`. The valid names and values are listed in the `modinfo.lua` file of the mod in question:

   ```lua
   return {
     ["workshop-2902364746"] = {
       enabled = true,
       configuration_options = { mode = "Easy Cartography" },
     },
   }
   ```

5. **Cover the caves**\
   If the caves are enabled on your server, copy the same file to `<cluster folder>/Caves/modoverrides.lua` as well. Every shard has its own mod list.

6. **Start the server**\
   Start your server. On startup it downloads the listed mods and enables them, so the first start can take a little longer.

> [!IMPORTANT]
> Both files belong together: every mod you enable in `modoverrides.lua` also needs a matching `ServerModSetup()` line in `dedicated_server_mods_setup.lua` – and the other way around. If one of the two entries is missing, the mod will not be loaded.

> [!NOTE]
> **Do players have to do anything?**
>
> No. Server-only mods do not have to be downloaded by joining players at all. Mods that also have to run on the client are downloaded and enabled automatically through the Steam Workshop when players join.

> [!TIP]
> Downloaded mods are stored by the server as `mods/workshop-<ID>/` folders. You can use this to check whether a mod was actually loaded. Also create a [backup](/tutorials/gameserver/dont-starve-together/create-backup) of your world before changing mods.
