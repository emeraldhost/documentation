---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Factorio Server"
description: "Add a savegame to a Factorio server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/factorio/add-admin", "gameserver/factorio/add-mods", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame"]
---

You can transfer a local save to your server to continue playing with an existing factory. A Factorio save is always a **single .zip file** – not a folder.

## Find the local savegame

1. **Open savegame folder**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %appdata%\Factorio\saves
   ```

   > [!NOTE]
   > On Linux the saves are located in `~/.factorio/saves`, on macOS in `~/Library/Application Support/factorio/saves`.

2. **Select the save**\
   Pick the desired `.zip` file, e.g. `MyFactory.zip`. Avoid spaces in the file name and use underscores instead, e.g. `My_Factory.zip`.

## Upload and apply the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the save**\
   Upload the `.zip` file to the following directory:

   ```text
   /saves/
   ```

4. **Set the save name**\
   Open the dashboard, navigate to the **Settings** and enter the file name of your save in the **Save Name** field – **without** the `.zip` extension (e.g. `My_Factory` for `My_Factory.zip`).

5. **Start the server**\
   Save the settings and start your server.

> [!WARNING]
> Do not rename the uploaded file – instead adjust the **Save Name** to match the existing file name. This avoids errors caused by mismatching names inside the zip file.

> [!IMPORTANT]
> If the server does not find a file matching the configured **Save Name** in the `saves` folder, it automatically generates a **new, empty world** with that name on startup. Double-check the spelling, including upper and lower case.

> [!WARNING]
> **Versions**
>
> A save from a newer Factorio version cannot be loaded on an older server. Older saves are migrated when loaded, but only across a limited range of versions.

> [!TIP]
> **Mods**
>
> If the save was played with mods, the same mods have to be present on the server as well. See [Add mods](/tutorials/gameserver/factorio/add-mods) for how to install them.

> [!TIP]
> Create a [backup](/tutorials/gameserver/factorio/create-backup) of your existing server save before uploading, in case you want to switch back later.
