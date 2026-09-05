---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Minecraft PocketMine Edition Server"
description: "Add a savegame to a Minecraft PocketMine Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/minecraft-pocketmine/add-admin", "gameserver/minecraft-pocketmine/add-mods", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame"]
---

With PocketMine-MP a save is always a **complete folder** and never a single file. All worlds are stored in the `worlds` folder in the main folder of your server. Which world gets loaded is decided by the `level-name` entry in the `server.properties` file.

> [!IMPORTANT]
> Just placing a world in the folder is **not** enough. PocketMine-MP only loads the world that is set under `level-name`. If the name does not match the folder name, the server generates a completely new world instead.

## Structure of a world folder

```text
worlds
|___ my_world
|    |___ db
|    |___ level.dat
|    |___ levelname.txt
|___ my_second_world
     |___ db
     |___ level.dat
     |___ levelname.txt
```

| File / folder | Content |
|---------------|---------|
| `db` | The actual LevelDB database containing all chunks of the world |
| `level.dat` | World data such as seed, game rules, spawn point and time |
| `levelname.txt` | The world name as displayed in the game |

> [!WARNING]
> Always upload the complete folder including the `db` subfolder. Without the `db` folder the world is empty and unusable.

## Find your local world

If you want to transfer a world from your Minecraft Bedrock client, you can find it in the following locations:

| Platform | Path |
|----------|------|
| Windows (Bedrock 1.21.120 and newer) | `%appdata%\Minecraft Bedrock\Users\<user ID>\games\com.mojang\minecraftWorlds\<world ID>\` |
| Windows Preview | `%appdata%\Minecraft Bedrock Preview\Users\<user ID>\games\com.mojang\minecraftWorlds\<world ID>\` |
| Windows (before Bedrock 1.21.120) | `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\<world ID>\` |
| Android | `/storage/emulated/<user ID>/Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/<world ID>/` |

> [!NOTE]
> The subfolders are named after an internal world ID, not after the name you see in the game. You can find the readable name in the `levelname.txt` file inside each folder.

## Extract a world from a .mcworld file

> [!WARNING]
> PocketMine-MP **cannot** load `.mcworld` files directly. Rename the file from `.mcworld` to `.zip`, extract it on your PC and upload the extracted folder.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the loaded world.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open the directory**\
   In the main folder of your server, navigate to the following folder:

   ```text
   worlds
   ```

4. **Upload the world folder**\
   Upload the complete folder of your world with all files it contains. Use a folder name without spaces or special characters, for example `my_world`.

5. **Open server.properties**\
   In the main folder of your server, open the file:

   ```text
   server.properties
   ```

6. **Enter the world name**\
   Look for the following entry and set it to the folder name of your uploaded world:

   ```text
   level-name=my_world
   ```

   > [!NOTE]
   > The world name cannot be changed through a field in the dashboard. You only set it here in `server.properties`.

7. **Start the server**\
   Save the change and start your server. On startup your uploaded world is now loaded.

> [!TIP]
> Before switching, create a [backup](/tutorials/gameserver/minecraft-pocketmine/create-backup) of your current world or download it: [Download savegame](/tutorials/gameserver/minecraft-pocketmine/download-savegame).

## Which worlds work?

| Origin of the world | Format | Support |
|---------------------|--------|---------|
| Bedrock Edition up to 1.18.20 | LevelDB | Loaded directly |
| Bedrock Edition 1.18.30 and newer | LevelDB | Loaded directly, entities may not load |
| Minecraft Java Edition up to 1.12.x | McRegion / Anvil | Converted on load |
| PocketMine-MP 3 | PMAnvil | Converted on load |
| Minecraft Java Edition 1.13 and newer | Anvil | Not supported |

> [!IMPORTANT]
> Minecraft Java Edition worlds from version 1.13 onwards are not supported by PocketMine-MP and cannot be loaded.

## Let the server generate a new world

If the folder set under `level-name` does not exist, PocketMine-MP creates the world on startup. This is controlled by the following entries in `server.properties`:

| Entry | Meaning |
|-------|---------|
| `level-name` | Folder name of the world |
| `level-seed` | Seed of the new world |
| `level-type` | Generator used to create the world |
| `generator-settings` | Additional settings for the generator |

## Manage multiple worlds

Additional worlds next to the main world are defined in the `pocketmine.yml` file in the main folder of your server:

```yaml
worlds:
  my_second_world:
    seed: 123456
    generator: FLAT
```

> [!NOTE]
> To switch between worlds while playing you need a plugin. See [Add Mods](/tutorials/gameserver/minecraft-pocketmine/add-mods).
