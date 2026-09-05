---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Minecraft Endstone Edition Server"
description: "Add a savegame to a Minecraft Endstone Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/minecraft-endstone-edition/add-admin", "gameserver/minecraft-endstone-edition/add-mods", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame"]
---

On Endstone a savegame is always a **complete folder**, never a single file. All worlds are stored in the `worlds` folder in the main folder of your server. Which world gets loaded is decided by the `level-name` entry in the `server.properties` file.

> [!IMPORTANT]
> Placing the world in the folder is **not** enough. Only the world entered under `level-name` is loaded. If the name does not match the folder name exactly, the server creates a brand new world instead.

> [!NOTE]
> Endstone launches the official Bedrock Dedicated Server in the background. Existing Bedrock worlds therefore keep working unchanged – there is nothing to convert.

## Structure of a world folder

```text
worlds
|___ my_world
     |___ db
     |___ level.dat
     |___ levelname.txt
```

| File / folder | Content |
|---------------|---------|
| `db` | The actual database containing all chunks of the world |
| `level.dat` | World data such as seed, game rules, spawn point and time |
| `levelname.txt` | The in-game readable name of the world |

> [!WARNING]
> **Caution**
>
> Always upload the complete folder including the `db` subfolder. Without the `db` folder the world is empty and unusable.

## Find your local world

If you want to transfer a world from your Minecraft Bedrock client to the server, you can find it on your PC under:

```text
C:\Users\<username>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\
```

> [!NOTE]
> The subfolders are named after an internal world ID, not after the name you see in the game. You can find the readable name in the `levelname.txt` file inside each folder.

> [!WARNING]
> **Caution**
>
> Always upload the world **unpacked** as a folder. The server cannot load a `.zip` or `.mcworld` file. To use a `.mcworld` file, rename it to `.zip`, extract it on your PC and upload the extracted folder.

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
   Upload the complete folder of your world including all files it contains. Choose a folder name without spaces or special characters, for example `my_world`.

5. **Open server.properties**\
   In the main folder of your server, open the file:

   ```text
   server.properties
   ```

6. **Enter the world name**\
   Look for the following entry and enter the folder name of your uploaded world:

   ```text
   level-name=my_world
   ```

   > [!IMPORTANT]
   > The entry has to match the folder name **exactly**, including upper and lower case. `My_World` and `my_world` are two different worlds.

7. **Start the server**\
   Save the change and start your server. Your uploaded world is now loaded on startup.

> [!TIP]
> Before switching, create a [backup](/tutorials/gameserver/minecraft-endstone-edition/create-backup) of your current world or download it: [Download savegame](/tutorials/gameserver/minecraft-endstone-edition/download-savegame).

## Letting the server generate a new world

If the folder entered under `level-name` does not exist, the server creates that world on startup. This is also the most common reason for an empty world showing up after an upload: in that case the `level-name` entry does not match the folder name.
