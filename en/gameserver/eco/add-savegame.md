---
description: Add a savegame to an Eco server
---

# How to Add a Savegame to Your Eco Server

The save of an Eco server consists of **two files** located in the folder `/Storage/` that always belong together:

| File | Content |
|------|---------|
| `Game.db` | Database containing the world and all objects |
| `Game.eco` | State of the world, including players, economy and laws |

:::: danger Important
The two files reference each other. Always transfer them **together** – a single file does not make a valid save.
::::

## Find your local savegame

If you want to move over a world you hosted yourself, you can find the files in the installation folder of the game:

```
…\Eco\Eco_Data\Server\Storage
```

It contains a `.db` and an `.eco` file as well. You need both of them for the upload.

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it constantly writes to the save.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Navigate to the following directory:

   ```
   /Storage/
   ```

4. <b>Secure the old files</b><br>
   Download the existing files `Game.db` and `Game.eco` or create a [backup](create-backup.md) in case you want to switch back later. Delete them afterwards.

   :::: warning Warning
   This step removes the current save of your server. Secure it beforehand – see [Download savegame](download-savegame.md).
   ::::

5. <b>Upload the new files</b><br>
   Upload both of your save files into the same directory.

6. <b>Rename the files</b><br>
   Rename the files exactly like this:

   ```
   Game.db
   Game.eco
   ```

   :::: info Why exactly these names?
   On startup the server loads the save that is entered under `SaveName` in `/Configs/Storage.eco`. By default this is `Game` – which is why the files have to be named `Game.db` and `Game.eco`. Alternatively you can enter the name of your files there.
   ::::

7. <b>Start the server</b><br>
   Start your server. The uploaded save is now loaded.

## Reset the world

If you want to start with a freshly generated world, remove the existing save:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Create a backup</b><br>
   Secure the current state in case you need it again – see [Create backup](create-backup.md).

3. <b>Remove the save</b><br>
   Delete the files `Game.db` and `Game.eco` in the directory `/Storage/`. Alternatively you can rename them, for example to `Game.db.old` and `Game.eco.old`.

   :::: info Note
   If the server does not find files with the expected names on startup, it automatically generates a new world. Also delete or rename the folder `/Storage/Backup/` – it holds the automatic snapshots of the server the old state can come back from. Download the snapshots beforehand if you still need them.
   ::::

4. <b>Start the server</b><br>
   Start your server. Generating the world can take a few minutes on the first start.

:::: tip World size and seed
The settings for a new world are located in `/Configs/WorldGenerator.eco`. They only affect **newly generated worlds** – an existing world does not change because of them. Both dimension values have to be identical and divisible by `4`.
::::

## Further save settings

The file `/Configs/Storage.eco` controls how and where the save is stored:

| Setting | Meaning |
|---------|---------|
| `SaveName` | Name of the save file that is loaded on startup |
| `StorageDirectory` | Folder the saves are placed in |
| `SaveFrequency` | How often the server writes to disk, in seconds |
| `NewGameTemplate` | File a new world is created from. If nothing is entered, the world is generated |

:::: warning Warning
Changes to the configuration files only take effect after a **restart of the server**.
::::
