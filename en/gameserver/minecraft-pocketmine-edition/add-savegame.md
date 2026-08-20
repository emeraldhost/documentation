---
description: Add a savegame to a Minecraft PocketMine Edition server
---

# How to Add a Savegame to Your Minecraft PocketMine Edition Server

With PocketMine-MP a save is always a **complete folder** and never a single file. All worlds are stored in the `worlds` folder in the main folder of your server. Which world gets loaded is decided by the `level-name` entry in the `server.properties` file.

:::: danger Important
Just placing a world in the folder is **not** enough. PocketMine-MP only loads the world that is set under `level-name`. If the name does not match the folder name, the server generates a completely new world instead.
::::

## Structure of a world folder

```
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

:::: warning Warning
Always upload the complete folder including the `db` subfolder. Without the `db` folder the world is empty and unusable.
::::

## Find your local world

If you want to transfer a world from your Minecraft Bedrock client, you can find it in the following locations:

| Platform | Path |
|----------|------|
| Windows (Bedrock 1.21.120 and newer) | `%appdata%\Minecraft Bedrock\Users\<user ID>\games\com.mojang\minecraftWorlds\<world ID>\` |
| Windows Preview | `%appdata%\Minecraft Bedrock Preview\Users\<user ID>\games\com.mojang\minecraftWorlds\<world ID>\` |
| Windows (before Bedrock 1.21.120) | `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\<world ID>\` |
| Android | `/storage/emulated/<user ID>/Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/<world ID>/` |

:::: info Note
The subfolders are named after an internal world ID, not after the name you see in the game. You can find the readable name in the `levelname.txt` file inside each folder.
::::

## Extract a world from a .mcworld file

:::: warning Warning
PocketMine-MP **cannot** load `.mcworld` files directly. Rename the file from `.mcworld` to `.zip`, extract it on your PC and upload the extracted folder.
::::

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it constantly writes to the loaded world.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open the directory</b><br>
   In the main folder of your server, navigate to the following folder:

   ```
   worlds
   ```

4. <b>Upload the world folder</b><br>
   Upload the complete folder of your world with all files it contains. Use a folder name without spaces or special characters, for example `my_world`.

5. <b>Open server.properties</b><br>
   In the main folder of your server, open the file:

   ```
   server.properties
   ```

6. <b>Enter the world name</b><br>
   Look for the following entry and set it to the folder name of your uploaded world:

   ```
   level-name=my_world
   ```

   :::: info Note
   The world name cannot be changed through a field in the dashboard. You only set it here in `server.properties`.
   ::::

7. <b>Start the server</b><br>
   Save the change and start your server. On startup your uploaded world is now loaded.

:::: tip Tip
Before switching, create a [backup](create-backup.md) of your current world or download it: [Download savegame](download-savegame.md).
::::

## Which worlds work?

| Origin of the world | Format | Support |
|---------------------|--------|---------|
| Bedrock Edition up to 1.18.20 | LevelDB | Loaded directly |
| Bedrock Edition 1.18.30 and newer | LevelDB | Loaded directly, entities may not load |
| Minecraft Java Edition up to 1.12.x | McRegion / Anvil | Converted on load |
| PocketMine-MP 3 | PMAnvil | Converted on load |
| Minecraft Java Edition 1.13 and newer | Anvil | Not supported |

:::: danger Important
Minecraft Java Edition worlds from version 1.13 onwards are not supported by PocketMine-MP and cannot be loaded.
::::

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

:::: info Note
To switch between worlds while playing you need a plugin. See [Add Mods](add-mods.md).
::::
