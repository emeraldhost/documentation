---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your No One Survived Server"
description: "Add a savegame to a No One Survived server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/no-one-survived/add-admin", "gameserver/no-one-survived/change-game-settings", "gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup"]
---

The savegames of a No One Survived server are stored as files with the `.sav` extension in a fixed directory. Which savegame gets loaded is decided by the **save name** in the dashboard: the server looks for the matching file – if it cannot find it, it creates a new, empty world.

> [!NOTE]
> The configuration folder is called `WindowsServer` on your Linux server as well. That is intended – No One Survived only ships a Windows server application, which runs on Linux servers through a compatibility layer.

> [!TIP]
> Create a [backup](/tutorials/gameserver/no-one-survived/create-backup) of your current savegame before uploading, in case you want to switch back later.

## Find your local savegame

The savegames on your own PC are stored in the same folder structure as on the server, which is why they can be transferred directly.

1. **Open the savegame folder**\
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %LOCALAPPDATA%\WRSH\Saved\SaveGames\WorldSaves
   ```

2. **Determine the save name**\
   Your savegames are stored there as `.sav` files. The file names follow the pattern `<save name>_<suffix>.sav`. For the configuration you only need the part **before the first underscore**.

   If your file is called `MyWorld_0.sav`, for example, the save name is:

   ```text
   MyWorld
   ```

   > [!NOTE]
   > If several files belong to the same savegame, you can tell because they all start with the same save name followed by an underscore. In that case transfer all of those files together.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the savegame files and would overwrite your uploaded files.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Change into the following directory:

   ```text
   /WRSH/Saved/SaveGames/WorldSaves/
   ```

   > [!NOTE]
   > If the folder does not exist yet, start the server once so the folder structure gets created. Stop it again afterwards, before you upload the files.

4. **Upload the files**\
   Upload your `.sav` files into this directory. If files with the same names already exist there, download the current state first or rename your files.

5. **Enter the save name**\
   Open the **dashboard** of your server and enter the part of the file name **before the first underscore** in the field for the save name:

   ```text
   MyWorld
   ```

   > [!NOTE]
   > **Alternatively in the configuration file**
   >
   > If you cannot find a matching field in the dashboard, the value is stored in the following file:
   >
   > ```text
   > /WRSH/Saved/Config/WindowsServer/Game.ini
   > ```
   >
   > In the `[ServerSetting]` section you enter it like this:
   >
   > ```ini
   > [ServerSetting]
   > SaveName=MyWorld
   > ```

6. **Start the server**\
   Save all changes and start your server. On startup your uploaded savegame is now loaded.

> [!IMPORTANT]
> The save name has to match the file name exactly – only the part before the first underscore, without `.sav` and with correct capitalisation. If it does not match, your server starts with a **new, empty world**. Your uploaded savegame is not lost in that case, it is simply not loaded: correct the name and start the server again.

> [!WARNING]
> **No special characters**
>
> Do not use special characters in the save name. Letters and numbers are allowed – spaces and special characters can cause the savegame not to be found.

> [!WARNING]
> If you enter the save name manually in `Game.ini`, that value gets overwritten from the dashboard fields on the next server start. That is why you should primarily use the dashboard and check after a start whether the desired value is still set.

> [!NOTE]
> **Automatic saves by the server**
>
> Next to `WorldSaves`, the server stores its own intermediate saves in the folder `/WRSH/Saved/SaveGames/AutoSave/`. If you want to use one of them, download it and load it back in following the same guide.

> [!WARNING]
> **Check after updates**
>
> A server update or a validation of the game files can reset the configuration to default values. Check the save name afterwards before you make the server available again – otherwise an empty world is created.
