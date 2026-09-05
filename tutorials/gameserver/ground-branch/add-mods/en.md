---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Ground Branch Server"
description: "Add mods to a Ground Branch server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/ground-branch/add-admin", "gameserver/ground-branch/create-backup", "gameserver/ground-branch/join-server", "gameserver/ground-branch/kick-ban-players"]
---

Mods for Ground Branch are distributed through the **Steam Workshop**. On the server you only enter the **Workshop IDs** into the file `mods.txt` – the server takes care of the rest on the next start.

> [!NOTE]
> **From version 1035.2**
>
> The `mods.txt` method applies since update **V1035.2**. Older guides describe different approaches that no longer work.

## Find the Workshop ID

1. **Open the mod in the Workshop**\
   Open the mod you want in the [Ground Branch Workshop](https://steamcommunity.com/app/16900/workshop/).

2. **Read the ID from the address bar**\
   The Workshop ID is the number at the end of the address after `?id=`:

   ```text
   https://steamcommunity.com/sharedfiles/filedetails/?id=1234567890
   ```

   In this example the ID is `1234567890`.

## Add the mods on the server

1. **Stop the server**\
   Stop your server via the dashboard. The mod list is only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open mods.txt**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /GroundBranch/ServerConfig/mods.txt
   ```

   > [!NOTE]
   > The `ServerConfig` folder is only created on the first server start. Start your server once if you cannot find it.

4. **Enter the IDs**\
   Enter exactly one Workshop ID per line:

   ```text
   1234567890
   9876543210
   ```

5. **Start the server**\
   Save the file and start your server. On startup it downloads the listed mods and places them in the `GroundBranch/Mods` folder.

> [!WARNING]
> The first start after adding new mods takes longer because the content has to be downloaded first. Wait for that to finish before joining.

## What players have to do

Nothing manually. When joining a server with mods, the Server Browser automatically performs a **mod sync**: the client subscribes to the required Workshop content and downloads it.

> [!NOTE]
> Players first see a notice that the server uses mods and that these will be downloaded before joining. After the download they join as usual – see [Join Server](/tutorials/gameserver/ground-branch/join-server).

## Remove or update mods

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Remove the line**\
   Delete the corresponding Workshop ID from the `mods.txt`.

3. **Start the server**\
   Start your server. Changes to the mod list only take effect after a restart – nothing happens while the server is running.

## Troubleshooting

If the server does not load any mods, check the following:

- Does the `mods.txt` contain **one ID per line**, without commas, quotes or spaces?
- Is it the ID of the Workshop item and not the one of its creator?
- Is the mod still available in the Workshop and compatible with the current game version?
- Was the server **restarted** after the change?
- If a mod keeps causing trouble, remove the IDs one at a time to narrow down which mod is responsible.

> [!NOTE]
> Ground Branch has two kinds of mods: content made with **Quick Create** (game modes, missions, kits, translations) and asset based mods built with the **Mod Kit**. Both are loaded through the same `mods.txt`. Details on the mod types can be found in the [official modding wiki](https://wiki.groundbranch.com/en/modding).

> [!TIP]
> Back up your `mods.txt` together with the rest of the `ServerConfig` folder before making larger changes – see [Create Backup](/tutorials/gameserver/ground-branch/create-backup).
