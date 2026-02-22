---
description: Install mods on an Arma Reforger server
---

# How to Install Mods on an Arma Reforger Server

Mods in Arma Reforger are distributed via the integrated Workshop. To use mods on your server, you need to add their mod data to the `config.json` file.

::: info Info
All players joining the server must have the same mods installed. Mods can be downloaded via the in-game Workshop.
:::

## Step 1: Find Mod Data

There are two ways to find the required mod data (`modId`, `name`, `version`):

### Option A: Via the Arma Reforger Workshop

1. **Open the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) in your browser.**

2. **Search for the desired mod and open its page.**

3. **Note down the values for `Name`, `ID` and `Version`.**

### Option B: Via the local ServerData.json

1. **Download the desired mod via the in-game Workshop.**

2. **Open the following folder:**

    ```
    %USERPROFILE%\Documents\My Games\ArmaReforger\addons
    ```

    ::: tip Tip
    You can paste this path directly into the Windows Explorer address bar or into the Run dialog (`Windows Key + R`).
    :::

3. **Open the folder of the desired mod and open the file `ServerData.json`.**

4. **Copy the values for `id`, `name` and `version` from the file.**

## Step 2: Edit config.json

1. **Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `config.json`.**

2. **Find the `"mods"` entry and add your mods in the following format:**

    ```json
    "mods": [
      {
        "modId": "YOUR-MOD-ID",
        "name": "Mod-Name",
        "version": "1.0.0"
      }
    ],
    ```

    **Example with multiple mods:**

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

3. **Save the changes and restart the server.**

::: warning Important
The `config.json` must contain valid JSON. A missing comma or incorrect bracket can prevent the server from starting. If in doubt, use a [JSON validator](https://jsonlint.com/) to check the file.
:::

## Export Mod Preset from the Game

Alternatively, you can export your mod list directly from the game:

1. **Open Arma Reforger and go to the main menu.**

2. **Click the `Mod Preset` icon.**

3. **Switch to the `JSON` tab and click `Copy to clipboard`.**

4. **Paste the copied content into the `"mods"` section of your `config.json`.**
