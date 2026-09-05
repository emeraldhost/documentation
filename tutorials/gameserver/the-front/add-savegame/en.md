---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your The Front Server"
description: "Add a savegame to a The Front server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/the-front/add-admin", "gameserver/the-front/create-backup", "gameserver/the-front/download-savegame", "gameserver/the-front/join-server"]
---

The Front does **not** use a world name in its configuration. A save is always the complete folder `GameStates` – not a single file. You upload that folder with all of its contents to the location where your server expects its save.

> [!NOTE]
> **Where does the save come from?**
>
> This guide describes a server-to-server transfer – a save you previously downloaded from a The Front server. There is no documented way to move a single player or co-op save onto a dedicated server.

> [!TIP]
> Create a [backup](/tutorials/gameserver/the-front/create-backup) of your current server save before uploading, in case you want to switch back later.

## Upload the savegame

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /TheFrontManager/<ConfigName>/Saved/
   ```

   > [!NOTE]
   > **Which config name?**
   >
   > The folder carries the config name of your server – the same name that appears in the configuration file `ServerConfig_<ConfigName>.ini`. Open the folder `/TheFrontManager/` – usually there is exactly one subfolder in there, and that is yours.
   >
   > If the folder does not exist yet, start the server once so the structure is created, then stop it again.
   >
   > If there is no `TheFrontManager` directory at all, your server runs without a dedicated user directory. The save is then located under `/ProjectWar/Saved/`.

4. **Remove the old save**\
   Rename the existing `GameStates` folder (for example to `GameStates_old`) or delete it.

   > [!WARNING]
   > This deactivates the current save of your server. Secure it beforehand via [Download savegame](/tutorials/gameserver/the-front/download-savegame) or a [backup](/tutorials/gameserver/the-front/create-backup).

5. **Upload GameStates**\
   Upload your `GameStates` folder including all subfolders and files into this directory. The folder has to be named exactly `GameStates`.

6. **Start the server**\
   Start your server. Your uploaded save is now loaded on startup.

> [!CAUTION]
> **Do not change the config name**
>
> The config name of your server determines both the folder your save lives in and the name of the configuration file. If you change that name, your server looks in a different folder – and generates a completely new, empty world there. Your old save stays on the disk but is no longer loaded.
>
> The name must not contain spaces or special characters.

> [!WARNING]
> Always upload the complete `GameStates` folder. Besides the world it also holds the player, construction and guild data (`Worlds/`, `Players/`, `Accounts/`, `ConstructData.sav`, `GuildData.sav`). If you mix files from different saves, world and player data no longer match.

> [!TIP]
> **Reset the server**
>
> If you would rather start from scratch, stop the server, delete the `GameStates` folder and start the server again. A fresh world is generated on the next start.
