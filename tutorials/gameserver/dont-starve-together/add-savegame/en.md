---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Don’t Starve Together Server"
description: "Add a savegame to a Don’t Starve Together server"
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
short_title: "Add Savegame"
sort: 3
related: ["gameserver/dont-starve-together/add-admin", "gameserver/dont-starve-together/add-mods", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame"]
---

You can transfer a world you played locally to your server to continue with the existing save there.

## Find the cluster folder on the server

> [!NOTE]
> The name of the cluster folder is not defined by the game. It is set when the server starts and can differ from server to server. Search for the `cluster.ini` file via [SFTP](/tutorials/gameserver/establish-sftp-connection) or in the file browser – the folder it sits in is your cluster folder.

The cluster folder has the following structure:

```text
<cluster folder>/
├── Master/            # shard of the overworld (contains the save folder)
├── Caves/             # shard of the caves (only if caves are enabled)
├── cluster.ini
├── cluster_token.txt
├── adminlist.txt      # only present once created
├── whitelist.txt      # only present once created
└── blocklist.txt      # only present once created
```

The actual save is stored in the folders `Master/save/` (overworld) and `Caves/save/` (caves). These are folders, not a single file.

## Find the local savegame

1. **Open the data folder**\
   Start Don’t Starve Together and click **Data** in the bottom left of the main menu. The folder containing your local worlds opens. Alternatively you can reach it on your PC via this path:

   ```text
   C:\Users\<YourUser>\Documents\Klei\DoNotStarveTogether\<number folder>\
   ```

2. **Identify the right world**\
   Each local world has its own folder named `Cluster_1`, `Cluster_2` and so on. Open the `cluster.ini` inside and check the `cluster_name` value – this tells you which folder belongs to which world.

3. **Open the save folder**\
   Your world folder uses the same structure as the server, so `Master\` and – if you played with caves – `Caves\`. The save itself is stored in the subfolders `Master\save\` and `Caves\save\`.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Remove the old save**\
   Navigate to `<cluster folder>/Master/save/` and delete the entire content of the folder.

4. **Upload the new save**\
   Upload the complete content of your local `Master\save\` folder into the now empty `<cluster folder>/Master/save/` directory.

5. **Transfer the caves**\
   If the caves are enabled on your server, repeat steps 3 and 4 for the folder `<cluster folder>/Caves/save/` using the content of your local `Caves\save\` folder.

6. **Start the server**\
   Start your server again.

> [!WARNING]
> Only transfer the content of the `save` folders. If you also replace files such as `cluster.ini`, `server.ini` or `cluster_token.txt`, you overwrite the ports and the cluster token of your server and it will no longer be reachable.

> [!IMPORTANT]
> As long as a save exists in the `save` folder, the server will not generate a new world. This also means a server that has already been running has a save stored there which must be removed before uploading.

> [!TIP]
> Create a [backup](/tutorials/gameserver/dont-starve-together/create-backup) of your existing server save before uploading, in case you want to switch back later.

> [!NOTE]
> **Mods**
>
> If your local world used mods, you need to set them up on the server as well. You can find out how under [Add Mods](/tutorials/gameserver/dont-starve-together/add-mods).
