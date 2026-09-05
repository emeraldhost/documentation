---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Factorio Server"
description: "Add mods to a Factorio server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/factorio/add-admin", "gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame"]
---

Factorio has its own mod system and does **not** use the Steam Workshop. Mods come as `.zip` files from the official mod portal [mods.factorio.com](https://mods.factorio.com/) or from the in-game mod portal.

> [!WARNING]
> Stop your server before adding or removing mods. After a game update, mods may be incompatible and prevent the server from starting.

## Download a mod

1. **Open the mod portal**\
   Open [mods.factorio.com](https://mods.factorio.com/) and search for the mod you want.

2. **Choose the matching version**\
   Download the `.zip` file that matches the game version of your server.

3. **Do not unzip the file**\
   The mod stays a `.zip` file – Factorio loads mods directly from the archive.

## Upload mods to the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload mods**\
   Upload the `.zip` files to the following directory. If the folder does not exist yet, create it:

   ```text
   /mods/
   ```

4. **Start the server**\
   Start your server.

## Enable and disable mods

Which mods are loaded is controlled by the file `mods/mod-list.json`. It is created automatically on the first server start once the `mods` folder exists. Each mod is listed there with its name and the `enabled` status:

```json
{
  "mods":
  [
    {
      "name": "base",
      "enabled": true
    },
    {
      "name": "my-mod",
      "enabled": false
    }
  ]
}
```

Set `enabled` to `false` to disable a mod without deleting it. Restart the server after making changes.

> [!WARNING]
> Make sure the file stays valid JSON – a missing comma or an extra bracket can cause the server to discard the file or fail to start. Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing.

> [!IMPORTANT]
> All players need **exactly the same mods in the same versions** as the server, otherwise the checksum check fails when joining.

> [!TIP]
> **Automatic mod sync**
>
> When joining a server that uses mods, Factorio offers to synchronize the mods with the server. Confirming the mod sync automatically downloads and enables all required mods.

> [!NOTE]
> **Space Age and other expansions**
>
> The server already ships with the mods `base`, `elevated-rails`, `quality` and `space-age`. If the expansion mods are active, players **without** the DLC cannot join. They can be set to `"enabled": false` via `mods/mod-list.json`. However, there are reports of the server re-enabling the expansion mods on startup – so far there is no official fix for this. After a restart, check the `mod-list.json` to see whether your setting was kept.
