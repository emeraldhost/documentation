---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Kerbal Space Program Server"
description: "Add a savegame to a Kerbal Space Program server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/kerbal-space-program/add-admin", "gameserver/kerbal-space-program/add-mods", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/download-savegame"]
---

The savegame of a DarkMultiPlayer server is not a single file but a complete folder named `Universe` in the main directory of your server. Inside it the server keeps individual text files for every vessel, every Kerbal and every player.

> [!NOTE]
> The folder name `Universe` is fixed. You do not have to enter a world or savegame name in any configuration – the server name has nothing to do with the savegame.

## Structure of the savegame

| Folder | Content |
|--------|---------|
| `Universe/Vessels/` | One file per vessel |
| `Universe/Kerbals/` | One file per Kerbal |
| `Universe/Scenarios/` | Progress such as science, funds, reputation and tech tree – one subfolder per player |
| `Universe/Crafts/` | Shared craft library |
| `Universe/Flags/` | Uploaded flags |
| `Universe/Players/` | Public keys of the players |
| `Universe/Groups/` | Player groups |
| `Universe/Permissions/` | Vessel ownership |

## Convert a single player savegame

A regular KSP save file (`persistent.sfs`) cannot be uploaded directly. The DMP client ships a converter that turns your local savegame into a ready-to-use `Universe` folder.

1. **Install the DMP client**\
   Install the DMP client as described in [Join Server](/tutorials/gameserver/kerbal-space-program/join-server) and start Kerbal Space Program.

2. **Enter your player name**\
   In the DMP window in the main menu, enter exactly the name you want to use on the server later in the **Player name** field.

3. **Open the options**\
   Click on **Options** in the DMP window and then on **Advanced**.

4. **Run the converter**\
   Click on **Generate DMP universe from saved game...**. The **Universe Converter** window opens and lists your local savegames – click the one you want. Your savegames are stored locally at:

   ```text
   [KSP folder]/saves/<name of the savegame>/
   ```

   > [!WARNING]
   > An existing `Universe` folder inside your KSP folder is deleted and recreated without asking.

5. **Check the result**\
   Your KSP folder now contains the new folder `Universe` with the subfolders `Vessels`, `Kerbals` and `Scenarios`. This is exactly the folder you upload in the next step.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the `Universe` folder.

2. **Save the current state**\
   Create a [backup](/tutorials/gameserver/kerbal-space-program/create-backup) or download the existing folder: [Download Savegame](/tutorials/gameserver/kerbal-space-program/download-savegame).

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Remove the old savegame**\
   Delete the existing folder in the main directory of your server:

   ```text
   /Universe/
   ```

5. **Upload the new savegame**\
   Upload your `Universe` folder including all subfolders into the main directory. The folder has to be named exactly `Universe`.

6. **Start the server**\
   Start your server. It creates any missing subfolders on startup.

> [!IMPORTANT]
> In DarkMultiPlayer progress is stored **per player** in `Universe/Scenarios/<player name>/`. After the conversion only the folder for your own player name exists. All other players start on the server with fresh progress – DMP has no shared career or science progress for everyone.

> [!WARNING]
> Use the same player name on the server as during the conversion. If the name differs, the server finds no matching folder under `Universe/Scenarios/` and your converted progress is not assigned to you.

> [!TIP]
> If the game mode and difficulty do not match your uploaded savegame, set both in the **dashboard** under **settings** (**Game Mode** and **Game Difficulty**). Both values are written from the dashboard into the configuration on every server start – changing them directly in the file has no effect.

> [!NOTE]
> Vessels from the converted savegame are stored as individual files in `Universe/Vessels/`. That way a single vessel can be removed without touching the whole savegame – stop the server for that as well.
