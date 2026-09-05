---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your GTA San Andreas Server"
description: "Add gamemodes, filterscripts, plugins and custom models to a GTA San Andreas server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/gta-samp/add-admin", "gameserver/gta-samp/create-backup", "gameserver/gta-samp/join-server", "gameserver/gta-samp/kick-ban-players"]
---

A SA-MP or open.mp server has no classic mod system. It is extended in four ways:

| Way | What it is | Target folder |
|-----|------------|---------------|
| **Gamemode** | The main script that defines what happens on the server (roleplay, racing, freeroam …) | `/gamemodes/` |
| **Filterscript** | A small additional script that runs alongside the gamemode | `/filterscripts/` |
| **Plugin** | A native extension of the server, e.g. for MySQL or the streamer | `/plugins/` |
| **Custom models / artwork** | Your own 3D models and textures as `.dff` and `.txd` files | `/models/` |

> [!NOTE]
> There are two server variants with different configuration files: **SA-MP** uses `server.cfg`, **open.mp** uses `config.json`. open.mp still reads `server.cfg`, but recommends `config.json` because it offers more settings. You can see which file you have via [SFTP](/tutorials/gameserver/establish-sftp-connection) in the main directory of your server.

> [!WARNING]
> **Caution**
>
> Stop your server via the dashboard before uploading files or changing the configuration.

## Install a gamemode

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the gamemode**\
   Upload the `.amx` file of your gamemode to the following directory:

   ```text
   /gamemodes/
   ```

   > [!NOTE]
   > Only the compiled `.amx` file belongs on the server. The matching `.pwn` file is just the source code and is not executed by the server.

4. **Register the gamemode**\
   Enter the file name **without** the `.amx` extension in your configuration.

   **open.mp – `config.json`:**

   ```json
   {
       "pawn": {
           "main_scripts": ["my-gamemode 1", "second-gamemode 1"]
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   gamemode0 my-gamemode 1
   ```

   The number behind it defines how many rounds the gamemode runs before the server switches to the next entry. In `config.json` you separate several gamemodes with a comma – if you only use one gamemode, remove the second entry including the comma.

   > [!TIP]
   > If you edit `config.json`, check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop your server from reading the configuration.

5. **Start the server**\
   Save the change and start your server.

> [!TIP]
> If you want to rotate through several gamemodes, add them as further entries in `main_scripts` as shown in the example, or use consecutive `gamemode0`, `gamemode1`, `gamemode2` and so on in `server.cfg`.

## Install a filterscript

Filterscripts run in addition to the gamemode and can be combined freely.

1. **Upload the filterscript**\
   Upload the `.amx` file via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /filterscripts/
   ```

2. **Register the filterscript**

   **open.mp – `config.json`:**

   ```json
   {
       "pawn": {
           "side_scripts": ["filterscripts/Race_System", "filterscripts/Anticheat"]
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   filterscripts Race_System Anticheat Adminspec
   ```

   In `config.json` you separate several filterscripts with a comma – if you only use one filterscript, remove the second entry including the comma. In `server.cfg` you separate several filterscripts with spaces.

3. **Start the server**\
   Save the change and start your server.

## Install a plugin

> [!IMPORTANT]
> Your server runs on **Linux** and therefore requires plugins as `.so` files. Windows plugins in `.dll` format do **not** work. Many plugins are offered for both systems – make sure you download the Linux version.

1. **Upload the plugin**\
   Upload the `.so` file via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /plugins/
   ```

2. **Place the include**\
   If the plugin ships an include file (e.g. `streamer.inc` or `sscanf2.inc`), it belongs in the following directory so you can compile your gamemode against it:

   ```text
   /qawno/include/
   ```

3. **Register the plugin**

   **open.mp – `config.json`:**

   ```json
   {
       "pawn": {
           "legacy_plugins": ["mysql", "streamer"]
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   plugins mysql.so streamer.so
   ```

4. **Start the server**\
   Save the change and start your server.

> [!NOTE]
> open.mp additionally ships its own components, which live in the `/components/` folder. These are not the same as classic SA-MP plugins and are not listed in `legacy_plugins`.

## Add custom models

Custom models let you bring your own vehicles, objects or skins onto the server. Players download these files automatically when they connect – they do **not** have to install anything.

1. **Upload the models**\
   Upload your `.dff` and `.txd` files via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /models/
   ```

2. **Enable artwork**

   **open.mp – `config.json`:**

   ```json
   {
       "artwork": {
           "enable": true,
           "models_path": "models"
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   useartwork 1
   artpath models
   ```

3. **Register the models in the script**\
   The files alone are not enough. Your gamemode has to register the models in `OnGameModeInit` using `AddSimpleModel` or `AddCharModel`. Only then are they delivered to the players.

4. **Start the server**\
   Save the changes and start your server.

> [!WARNING]
> **Caution**
>
> Custom models were introduced with SA-MP 0.3.DL R1 and do not work in earlier versions. In addition, `useartwork` or `artwork.enable` has to be turned on, otherwise the models are ignored.

> [!NOTE]
> On the players' side the downloaded models end up in the cache under `Documents\GTA San Andreas User Files\SAMP\cache`, in a subfolder per server IP and port. If models are displayed incorrectly after an update, clearing that folder usually helps.

> [!TIP]
> If the models do not reach your players, open.mp can serve them from an external web server instead. Enter its HTTP address in `artwork.cdn` – the files are then downloaded from there instead of from the server itself.

## Where do scripts store their data?

Everything a gamemode stores permanently – accounts, houses, vehicles, statistics – is created by the script itself. The only folder Pawn scripts are allowed to write to is:

```text
/scriptfiles/
```

> [!NOTE]
> Scripts cannot access files outside of `scriptfiles`. Many larger gamemodes store their data in a MySQL or SQLite database instead. How to back that data up is described under [Create Backup](/tutorials/gameserver/gta-samp/create-backup).

> [!IMPORTANT]
> Single-player mods for GTA San Andreas (`.asi` plugins, CLEO scripts, replaced models) are **not** server mods. They do not belong on the server and even prevent the multiplayer client from starting on your players' PCs.
