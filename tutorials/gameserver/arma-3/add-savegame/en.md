---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Arma 3 Server"
description: "Add a savegame to an Arma 3 server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/arma-3/add-admin", "gameserver/arma-3/add-mods", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame"]
---

An Arma 3 server does **not** save the world state by itself. Whether a savegame exists at all is entirely up to the mission: persistent missions and campaigns such as Antistasi, Vindicta, KP Liberation or Wasteland bring their own saving logic and store their progress in the **server profile**. Vanilla missions do not save anything.

The savegame is always a single file ending in `.vars.Arma3Profile`, named after the profile of the server – for example `server.vars.Arma3Profile`.

> [!CAUTION]
> **persistent is not a savegame**
>
> The `persistent` value in the `server.cfg` does not save anything. It only keeps the mission running when all players leave the server. Guides describing `persistent = 1;` as a saving feature are wrong.

> [!TIP]
> Create a [backup](/tutorials/gameserver/arma-3/create-backup) of your server before uploading in case you want to switch back later.

## Find your local savegame

1. **Open the profile folder**\
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %userprofile%\Documents\Arma 3
   ```

2. **Select the file**\
   Look for the file ending in `.vars.Arma3Profile`. The part in front of it is your profile name, for example `Max.vars.Arma3Profile`.

   > [!NOTE]
   > If you use an additional profile, the file is located under `%userprofile%\Documents\Arma 3 - Other Profiles\<profileName>\` instead.

## Find the profile name of your server

Your server saves under the profile name it uses on startup. You need that name so your uploaded file actually gets loaded.

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open the profile directory**\
   Change to the following directory:

   ```text
   /serverprofile/home/
   ```

3. **Read the profile name**\
   The folder in there carries the profile name of your server. Inside it you find the matching file:

   ```text
   /serverprofile/home/<profileName>/<profileName>.vars.Arma3Profile
   ```

   > [!NOTE]
   > If the folder does not exist yet, start your server once with the desired mission and stop it again afterwards – the profile is created then.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the profile file itself.

2. **Rename the file**\
   Rename your local file to the profile name of your server. If the profile folder is called `server`, the file has to be named `server.vars.Arma3Profile`.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the file**\
   Upload the file into the profile folder and overwrite the existing file:

   ```text
   /serverprofile/home/<profileName>/
   ```

5. **Provide the mission**\
   Make sure the server runs the same mission the savegame was created with. Missions are stored as `.pbo` files in the `/mpmissions` folder.

6. **Start the server**\
   Start your server and load the savegame through the mission's own load function – with most persistent missions this happens right at mission start through a menu.

> [!WARNING]
> **Savegames from singleplayer**
>
> Singleplayer savegames and dedicated server savegames are stored inside the same file under different variable names. A singleplayer savegame may therefore not be recognized as loadable on the server.

> [!WARNING]
> **Caution**
>
> How a savegame is loaded is defined by the mission itself. When in doubt, check the documentation of the mission you use – Arma 3 has no unified load function.

## Reset the savegame

If you want to start over completely, delete the file `<profileName>.vars.Arma3Profile` while the server is stopped. There is no other way to reset the progress of a persistent mission.

> [!IMPORTANT]
> Download the file before deleting it – see [Download Savegame](/tutorials/gameserver/arma-3/download-savegame). Once deleted, the progress cannot be restored.
