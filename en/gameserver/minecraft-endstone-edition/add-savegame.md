---
description: Add a savegame to a Minecraft Endstone Edition server
---

# How to Add a Savegame to Your Minecraft Endstone Edition Server

On Endstone a savegame is always a **complete folder**, never a single file. All worlds are stored in the `worlds` folder in the main folder of your server. Which world gets loaded is decided by the `level-name` entry in the `server.properties` file.

:::: danger Important
Placing the world in the folder is **not** enough. Only the world entered under `level-name` is loaded. If the name does not match the folder name exactly, the server creates a brand new world instead.
::::

:::: info Note
Endstone launches the official Bedrock Dedicated Server in the background. Existing Bedrock worlds therefore keep working unchanged – there is nothing to convert.
::::

## Structure of a world folder

```
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

:::: warning Caution
Always upload the complete folder including the `db` subfolder. Without the `db` folder the world is empty and unusable.
::::

## Find your local world

If you want to transfer a world from your Minecraft Bedrock client to the server, you can find it on your PC under:

```
C:\Users\<username>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\
```

:::: info Note
The subfolders are named after an internal world ID, not after the name you see in the game. You can find the readable name in the `levelname.txt` file inside each folder.
::::

:::: warning Caution
Always upload the world **unpacked** as a folder. The server cannot load a `.zip` or `.mcworld` file. To use a `.mcworld` file, rename it to `.zip`, extract it on your PC and upload the extracted folder.
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
   Upload the complete folder of your world including all files it contains. Choose a folder name without spaces or special characters, for example `my_world`.

5. <b>Open server.properties</b><br>
   In the main folder of your server, open the file:

   ```
   server.properties
   ```

6. <b>Enter the world name</b><br>
   Look for the following entry and enter the folder name of your uploaded world:

   ```
   level-name=my_world
   ```

   :::: danger Important
   The entry has to match the folder name **exactly**, including upper and lower case. `My_World` and `my_world` are two different worlds.
   ::::

7. <b>Start the server</b><br>
   Save the change and start your server. Your uploaded world is now loaded on startup.

:::: tip Tip
Before switching, create a [backup](create-backup.md) of your current world or download it: [Download savegame](download-savegame.md).
::::

## Letting the server generate a new world

If the folder entered under `level-name` does not exist, the server creates that world on startup. This is also the most common reason for an empty world showing up after an upload: in that case the `level-name` entry does not match the folder name.
