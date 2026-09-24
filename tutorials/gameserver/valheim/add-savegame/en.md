---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Valheim Server"
description: "Add a savegame to a Valheim server"
tags: []
date: "2024-01-12"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 5
related: ["gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/change-branch", "gameserver/valheim/change-backup-settings"]
---

You can transfer a local save to your server to continue playing with an existing world.

## Find the local savegame

1. **Open savegame folder**\
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```text
   %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local
   ```

2. **Identify the world folder**\
   Since Valheim 1.0, every world is a folder of its own named after the world, for example `MyWorld`. The files inside belong together as a set, so you always transfer the complete folder. Folders with `_backup_` in their name are backups of your world, not the current state.

> [!NOTE]
> If you only find the two files `<WorldName>.fwl` and `<WorldName>.db` instead of a folder, the world is still in the format used before Valheim 1.0. You can upload such worlds as well, see [Upload worlds in the old format](#upload-worlds-in-the-old-format).

## Upload and apply the savegame

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to the following directory:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

3. **Rename a world with the same name**\
   If there is already a folder with the same name as your world, rename it (for example from `MyWorld` to `MyWorld_old`) or download it to your PC first and only then delete it. Never upload your world into an existing world folder, otherwise the files of two saves get mixed.

4. **Upload the world folder**\
   Upload the complete folder of your world with its name unchanged to the `worlds_local` directory. Afterwards your world is located at, for example:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/MyWorld/
   ```

   > [!IMPORTANT]
   > Upload the folder directly into `worlds_local` and not into another subfolder, because the server only looks for worlds one folder level deep. Do not rename any files inside the folder and do not mix files from different saves. If the server does not find a complete set of files, it cannot load the world and deletes the incomplete files on startup.

5. **Set world name**\
   Open the dashboard, navigate to the **Settings** and enter the exact name of your world folder in the **World Name** field, in this example `MyWorld`. The field allows a maximum of 20 characters.

6. **Start the server**\
   Save the settings and start your server.

> [!WARNING]
> If the `worlds_local` folder does not exist, start the server once so the folder structure is created automatically. Stop the server again before uploading the files.

> [!TIP]
> If the server loads a new, empty world instead of yours, it did not find your world, for example because of a typo in the **World Name** field or because the folder is not located directly in `worlds_local`. The server has then created a new world under the entered name. Stop the server, delete the newly created folder and fix the error.

> [!TIP]
> Create a [backup](/tutorials/gameserver/valheim/create-backup) of your existing server savegame before uploading, in case you want to switch back later.

## Upload worlds in the old format

Worlds that have not been opened since Valheim 1.0, as well as backups from before that, consist of the two files `<WorldName>.fwl` and `<WorldName>.db`. You can transfer such worlds to your server as well. Follow the steps above with these differences:

- Instead of a folder, upload the two files `<WorldName>.fwl` and `<WorldName>.db` directly into the `worlds_local` directory. Both files must come from the same save.
- Enter the name of the files without the file extension in the **World Name** field, for example `MyWorld` for `MyWorld.fwl` and `MyWorld.db`.

As soon as the server saves the world for the first time, it automatically converts it into a world folder in the new format. It renames the original files to `<WorldName>_backup_<Timestamp>.fwl` and `.db` so that the old state is kept as a backup.

> [!WARNING]
> Here too, rename or remove an existing world folder with the same name first, as described in step 3. If a world folder and a pair of files with the same name are next to each other, the server only loads the newer state and automatically moves the older one to a backup. This can also be the world you just uploaded.
