---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Eco Server"
description: "Add a savegame to an Eco server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/eco/add-admin", "gameserver/eco/add-mods", "gameserver/eco/create-backup", "gameserver/eco/download-savegame"]
---

The save of an Eco server consists of **two files** located in the folder `/Storage/` that always belong together:

| File | Content |
|------|---------|
| `Game.db` | Database containing the world and all objects |
| `Game.eco` | State of the world, including players, economy and laws |

> [!IMPORTANT]
> The two files reference each other. Always transfer them **together** – a single file does not make a valid save.

## Find your local savegame

If you want to move over a world you hosted yourself, you can find the files in the installation folder of the game:

```text
…\Eco\Eco_Data\Server\Storage
```

It contains a `.db` and an `.eco` file as well. You need both of them for the upload.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the save.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /Storage/
   ```

4. **Secure the old files**\
   Download the existing files `Game.db` and `Game.eco` or create a [backup](/tutorials/gameserver/eco/create-backup) in case you want to switch back later. Delete them afterwards.

   > [!WARNING]
   > This step removes the current save of your server. Secure it beforehand – see [Download savegame](/tutorials/gameserver/eco/download-savegame).

5. **Upload the new files**\
   Upload both of your save files into the same directory.

6. **Rename the files**\
   Rename the files exactly like this:

   ```text
   Game.db
   Game.eco
   ```

   > [!NOTE]
   > **Why exactly these names?**
   >
   > On startup the server loads the save that is entered under `SaveName` in `/Configs/Storage.eco`. By default this is `Game` – which is why the files have to be named `Game.db` and `Game.eco`. Alternatively you can enter the name of your files there.

7. **Start the server**\
   Start your server. The uploaded save is now loaded.

## Reset the world

If you want to start with a freshly generated world, remove the existing save:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Create a backup**\
   Secure the current state in case you need it again – see [Create backup](/tutorials/gameserver/eco/create-backup).

3. **Remove the save**\
   Delete the files `Game.db` and `Game.eco` in the directory `/Storage/`. Alternatively you can rename them, for example to `Game.db.old` and `Game.eco.old`.

   > [!NOTE]
   > If the server does not find files with the expected names on startup, it automatically generates a new world. Also delete or rename the folder `/Storage/Backup/` – it holds the automatic snapshots of the server the old state can come back from. Download the snapshots beforehand if you still need them.

4. **Start the server**\
   Start your server. Generating the world can take a few minutes on the first start.

> [!TIP]
> **World size and seed**
>
> The settings for a new world are located in `/Configs/WorldGenerator.eco`. They only affect **newly generated worlds** – an existing world does not change because of them. Both dimension values have to be identical and divisible by `4`.

## Further save settings

The file `/Configs/Storage.eco` controls how and where the save is stored:

| Setting | Meaning |
|---------|---------|
| `SaveName` | Name of the save file that is loaded on startup |
| `StorageDirectory` | Folder the saves are placed in |
| `SaveFrequency` | How often the server writes to disk, in seconds |
| `NewGameTemplate` | File a new world is created from. If nothing is entered, the world is generated |

> [!WARNING]
> Changes to the configuration files only take effect after a **restart of the server**.
