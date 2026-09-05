---
slug: "add-mods"
language: "en"
title: "How to Install Mods on an Arma Reforger Server"
description: "Install mods on an Arma Reforger server"
tags: []
date: "2026-02-22"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/arma-reforger/add-admin", "gameserver/arma-reforger/add-savegame", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/download-savegame"]
---

Mods in Arma Reforger are distributed via the integrated Workshop. To use mods on your server, you need to add their mod data to the `config.json` file.

> [!NOTE]
> All players joining the server must have the same mods installed. Mods can be downloaded via the in-game Workshop.

## Step 1: Find Mod Data

There are two ways to find the required mod data (`modId`, `name`, `version`):

### Option A: Via the Arma Reforger Workshop

1. **Open Workshop**\
   Open the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) in your browser.

2. **Find mod**\
   Search for the desired mod and open its page.

3. **Note values**\
   Note down the values for `Name`, `ID` and `Version`.

### Option B: Via the local ServerData.json

1. **Download mod**\
   Download the desired mod via the in-game Workshop.

2. **Open addons folder**\
   Open the following folder:

    ```text
    %USERPROFILE%\Documents\My Games\ArmaReforger\addons
    ```

    > [!TIP]
    > You can paste this path directly into the Windows Explorer address bar or into the Run dialog (`Windows Key + R`).

3. **Open ServerData.json**\
   Open the folder of the desired mod and open the file `ServerData.json`.

4. **Copy values**\
   Copy the values for `id`, `name` and `version` from the file.

## Step 2: Edit config.json

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `config.json`.

2. **Add mods**\
   Find the `"mods"` entry and add your mods in the following format:

    ```json
    "mods": [
      {
        "modId": "YOUR-MOD-ID",
        "name": "Mod-Name",
        "version": "1.0.0"
      }
    ],
    ```

    Example with multiple mods:

    ```json
    "mods": [
      {
        "modId": "59674C21AA886D57",
        "name": "BetterMuzzleFlashes 2.0",
        "version": "2.0.8"
      },
      {
        "modId": "591AF5BDA9F7CE8B",
        "name": "Capture & Hold",
        "version": "1.0.8"
      }
    ],
    ```

3. **Restart server**\
   Save the changes and restart the server.

> [!WARNING]
> **Important**
>
> The `config.json` must contain valid JSON. A missing comma or incorrect bracket can prevent the server from starting. If in doubt, use a [JSON validator](https://jsonlint.com/) to check the file.

## Export Mod Preset from the Game

Alternatively, you can export your mod list directly from the game:

1. **Open main menu**\
   Open Arma Reforger and go to the main menu.

2. **Open Mod Preset**\
   Click the `Mod Preset` icon.

3. **Copy JSON**\
   Switch to the `JSON` tab and click `Copy to clipboard`.

4. **Paste into config**\
   Paste the copied content into the `"mods"` section of your `config.json`.
