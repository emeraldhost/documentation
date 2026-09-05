---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your StarRupture Server"
description: "Add a savegame to a StarRupture server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["starrupture"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 1
related: ["gameserver/starrupture/create-backup", "gameserver/starrupture/download-savegame", "gameserver/starrupture/join-server"]
---

A StarRupture save consists of a **folder** named exactly like the session of your server, containing **two files with the same base name**: `AutoSave0.sav` and `AutoSave0.met`. In addition you have to enter the session name in the configuration file `DSSettings.txt` so the server finds and loads the save.

> [!TIP]
> Create a [backup](/tutorials/gameserver/starrupture/create-backup) of your current server save before uploading, in case you want to switch back later.

## Structure of the savegame

| Path | Content |
|------|---------|
| `/StarRupture/Saved/SaveGames/<SessionName>/AutoSave0.sav` | The actual save containing world, base and progress |
| `/StarRupture/Saved/SaveGames/<SessionName>/AutoSave0.met` | The matching metadata file – belongs to the `.sav` and is mandatory |
| `/StarRupture/Saved/SaveGames/SaveData.dat` | Higher level file that the server manages itself |

> [!NOTE]
> `.sav` and `.met` always belong together and have to share the same base name. If one of the two files is missing or the names differ, the server will not load the save.

## The DSSettings.txt file

Which session the server uses and whether it loads an existing save or creates a new world is controlled in the file `DSSettings.txt` in the main directory of your server:

```text
/DSSettings.txt
```

Its content uses JSON format:

```text
{
  "SessionName": "MyServer",
  "SaveGameName": "AutoSave0.sav",
  "SaveGameInterval": "300",
  "StartNewGame": "false",
  "LoadSavedGame": "true"
}
```

> [!WARNING]
> **Caution**
>
> All values are enclosed in quotation marks – including numbers and `"true"`/`"false"`. If you enter them without quotation marks, the server cannot read the file.

| Value | Meaning |
|-------|---------|
| `SessionName` | Name of the session – matches the folder name under `Saved/SaveGames/` exactly, maximum 20 characters |
| `SaveGameName` | File name of the save, `AutoSave0.sav` by default |
| `SaveGameInterval` | Interval of the automatic save in seconds, `"300"` by default |
| `StartNewGame` | `"true"` creates a completely new world on startup |
| `LoadSavedGame` | `"true"` loads the existing save of the configured session |

> [!WARNING]
> **Caution**
>
> If `SessionName`, `StartNewGame` or `LoadSavedGame` are offered as settings in your **dashboard**, only change them there. The `DSSettings.txt` can be rewritten from those fields when the server starts – manual changes in the file would be overwritten again.

## Find your local savegame

You can find your own save from your PC under:

```text
C:\Program Files (x86)\Steam\userdata\<SteamID64>\1631270\remote\Saved\SaveGames\
```

> [!NOTE]
> `1631270` is the Steam app ID of StarRupture. The `<SteamID64>` folder consists of a long sequence of digits – how to determine your ID is described under [Find out SteamID64](/tutorials/gameserver/steamid64-find-out). If you installed Steam in a different directory, the `userdata` folder is located there instead.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /StarRupture/Saved/SaveGames/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start the server once so the folder structure is created. Stop it again afterwards before uploading the files.

4. **Create the session folder**\
   Create a folder there named exactly like the `SessionName` value in your `DSSettings.txt`. The name may be up to 20 characters long.

5. **Upload the files**\
   Upload the `.sav` file and the matching `.met` file of your save into that folder.

6. **Rename the files**\
   Rename both files so they match the `SaveGameName` value:

   ```text
   AutoSave0.sav
   AutoSave0.met
   ```

   > [!WARNING]
   > **Caution**
   >
   > The base name has to be identical for both files. `AutoSave0.sav` together with `MySave.met` will not work.

7. **Adjust DSSettings.txt**\
   Open the file `/DSSettings.txt` and set the following values:

   ```text
   "SessionName": "<your folder name>",
   "SaveGameName": "AutoSave0.sav",
   "StartNewGame": "false",
   "LoadSavedGame": "true"
   ```

8. **Start the server**\
   Save all changes and start your server. Your uploaded save is now loaded on startup.

> [!IMPORTANT]
> `StartNewGame` has to be `"false"`. If the value stays on `"true"`, the server creates a fresh world on every start and overwrites your uploaded save.

## Create a new world

If you want to start with a completely new world instead, proceed as follows:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Enable a new world**\
   Open the file `/DSSettings.txt`, enter the desired `SessionName` and set:

   ```text
   "StartNewGame": "true",
   "LoadSavedGame": "false"
   ```

3. **Start the server**\
   Start your server. It now creates a new world.

4. **Join the server**\
   Connect to your server, see [Join server](/tutorials/gameserver/starrupture/join-server).

5. **Save the world**\
   Press `ESC` in game and select **Save**. Only this actually writes the new world to the server as a save.

6. **Disconnect and stop the server**\
   Leave the server and stop it afterwards via the dashboard.

7. **Reset the values**\
   Set both values in `/DSSettings.txt` back again:

   ```text
   "StartNewGame": "false",
   "LoadSavedGame": "true"
   ```

8. **Start the server**\
   Start your server again. From now on your new world is loaded on every start and progress is kept.

> [!IMPORTANT]
> Do not forget this last step. If `StartNewGame` stays on `"true"`, the world you just created is replaced by a fresh one on the next server start.

> [!NOTE]
> The server saves automatically while running. How often is controlled by the `SaveGameInterval` value in `DSSettings.txt` – the value is given in seconds.
