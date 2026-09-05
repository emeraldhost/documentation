---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your American Truck Simulator Server"
description: "Step-by-step instructions on how to add mods to your American Truck Simulator server."
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["american-truck-simulator"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/american-truck-simulator/add-admin", "gameserver/american-truck-simulator/create-backup", "gameserver/american-truck-simulator/deactivate-player-damage", "gameserver/american-truck-simulator/join-server"]
---

## Add Steam Workshop mods

1. **Start game**\
   Start American Truck Simulator.

2. **Open mod menu**\
   Select the "Mods" item in the main menu.

3. **Open workshop**\
   Click on "Steam Workshop" in the top right-hand corner.

4. **Subscribe to mods**\
   Browse the workshop and click on "Subscribe" to download the desired mods.

5. **Open mod manager**\
   Go back to the mod manager in the game.

6. **Activate mods**\
   Activate the downloaded mods and click on "Confirm changes".

7. **Open console**\
   Start a ride and open the console with the `~` or `` ` `` key.

8. **Export packages**\
   Enter the following command in the console:

    ```text
    export_server_packages
    ```

9. **Exit game**\
   Wait until the process is complete and exit the game.

10. **Connect via SFTP**\
    Connect to your server via SFTP. You can find instructions on how to do this here: [Instructions](/tutorials/gameserver/establish-sftp-connection).

11. **Open directory**\
    Navigate to the following directory:

    ```text
    .local/share/American Truck Simulator
    ```

12. **Upload files**\
    Upload the created files `server_packages.sii` and `server_packages.dat`, which you will find under the following path:

    ```text
    Documents/American Truck Simulator
    ```

13. **Restart server**\
    Restart the server and join the server.

## Add external mods

1. **Download mods**\
   Download the desired mods from platforms such as Modhub or other sources.

2. **Copy mods**\
   Copy the mods into your local mod directory, which you can find under the following path:

    ```text
    Documents/American Truck Simulator/mod
    ```

3. **Start game**\
   Start American Truck Simulator.

4. **Open mod menu**\
   Select the "Mods" item in the main menu.

5. **Activate mods**\
   Activate the previously added mods and click on "Confirm changes".

6. **Open console**\
   Start a ride and open the console with the `~` or `` ` `` key.

7. **Export packages**\
   Enter the following command in the console:

    ```text
    export_server_packages
    ```

8. **Exit game**\
   Wait until the process is complete and exit the game.

9. **Connect via SFTP**\
   Connect to your server via SFTP. You can find instructions on how to do this here: [Instructions](/tutorials/gameserver/establish-sftp-connection).

10. **Open directory**\
    Navigate to the following directory:

    ```text
    .local/share/American Truck Simulator
    ```

11. **Upload files**\
    Upload the created files `server_packages.sii` and `server_packages.dat`, which you will find under the following path:

    ```text
    Documents/American Truck Simulator
    ```

12. **Restart server**\
    Restart the server and join the server.
