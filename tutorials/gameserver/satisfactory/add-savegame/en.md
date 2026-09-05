---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Satisfactory Server"
description: "Add a savegame to a Satisfactory server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/satisfactory/add-admin", "gameserver/satisfactory/change-max-players", "gameserver/satisfactory/change-server-name", "gameserver/satisfactory/create-backup"]
---

In Satisfactory a save is a single file with the extension `.sav`. You do not have to enter a world name in any configuration file – which save is loaded is selected in the game via the **Server Manager**.

> [!NOTE]
> All steps in the Server Manager require admin rights. To learn how to log in, see [Join Server](/tutorials/gameserver/satisfactory/join-server) and [Add Admin](/tutorials/gameserver/satisfactory/add-admin).

> [!TIP]
> Before uploading, create a [backup](/tutorials/gameserver/satisfactory/create-backup) of your current save or download it: [Download Savegame](/tutorials/gameserver/satisfactory/download-savegame).

## Find your local savegame

1. **Open the savegame folder**\
   Press `Windows key + R`, enter the following path and confirm with Enter:

   ```text
   %LocalAppData%\FactoryGame\Saved\SaveGames
   ```

2. **Select the save**\
   Your saves are stored there as `.sav` files – usually inside a subfolder named after your Steam or Epic ID. The file name matches the name of the session in the game.

## Upload the save via the Server Manager

This is the recommended way – you do not need an SFTP connection for it.

1. **Open the Server Manager**\
   Start Satisfactory and select **Server Manager** in the main menu. Select your server there.

2. **Log in as admin**\
   Switch to any tab other than **Status** and log in with your admin password via **Authenticate**.

3. **Open the save games**\
   Switch to the **Manage Saves** tab. It lists all saves that are stored on the server.

4. **Upload the save**\
   Choose the option to upload a save game and then select your `.sav` file on your PC. Depending on the size of the save, the transfer can take a moment.

5. **Load the save**\
   Select the uploaded save from the list and load it. The server then restarts the world.

6. **Join**\
   As soon as the world is loaded, you can join the server – select it in the Server Manager and click **Join Game** in the bottom right. The **Join Game** option in the main menu will not find your dedicated server.

## Upload the save via SFTP

Alternatively you can place the file directly into the save folder of your server.

1. **Stop the server**\
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the directory**\
   Navigate to the following directory:

   ```text
   /.config/Epic/FactoryGame/Saved/SaveGames/server/
   ```

   > [!NOTE]
   > The folder `.config` starts with a dot and is therefore a hidden folder. Enable the display of hidden files in your SFTP client if you cannot see it. If the directory does not exist yet, start your server once so the folder structure is created, then stop it again.

4. **Upload the save**\
   Upload your `.sav` file into this directory. You can leave existing saves in place – the server handles any number of save files side by side.

5. **Start the server**\
   Start your server again.

6. **Load the save**\
   Open the Server Manager, log in as admin and load the uploaded save via the **Manage Saves** tab.

> [!WARNING]
> Uploading alone is not enough. The server keeps loading the previous save until you have selected and loaded the new one in the Server Manager.

> [!NOTE]
> **Transferring a single player save**
>
> You can also upload a save from your single player game – it uses the same file format. Work with a copy so your local world stays untouched.

> [!IMPORTANT]
> Do not delete any file starting with `ServerSettings.` inside the `SaveGames` folder. It stores the server name as well as the admin and server password. If it is removed, the server counts as unclaimed again and has to be set up from scratch.
