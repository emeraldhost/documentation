---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Eco Server"
description: "Add mods to an Eco server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/eco/add-admin", "gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/download-savegame"]
---

Eco comes with its own mod system. Mods are installed on the server only – your fellow players do not have to download anything, the client receives everything it needs from the server when joining.

> [!WARNING]
> Stop your server before adding or removing mods. The server only reads the mod folder on startup.

## Download mods

The official platform for Eco mods is **mod.io**.

1. **Open mod.io**\
   Go to [mod.io/g/eco](https://mod.io/g/eco) and pick the mod you want.

2. **Check the version**\
   Make sure the mod matches the version of your server. After a game update, older mods can cause errors or prevent the server from starting.

3. **Download the mod**\
   Download the mod. Usually you get a ZIP file containing one or more `.dll` files and possibly its own configuration files.

4. **Read the mod instructions**\
   Have a look at the mod description. It tells you which folder the files belong in and whether the mod requires other mods.

## Upload the mods

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Extract the mod**\
   Extract the downloaded ZIP file on your PC. You upload the extracted files – a ZIP file is not processed by the server.

4. **Upload the files**\
   Upload the files into the following directory:

   ```text
   /Mods/
   ```

   > [!NOTE]
   > **Watch out for subfolders**
   >
   > Most mods go directly into the `Mods` folder. Some mods ask you to use the subfolder `Mods/UserCode/` instead. Always follow the instructions of the respective mod.

5. **Start the server**\
   Start your server. The mods are loaded on startup.

> [!TIP]
> **Translations**
>
> Translation files do not belong in the main folder but in `/Mods/Translations/`.

## Remove mods

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the files**\
   Delete the files or the folder of the mod from `/Mods/`.

3. **Start the server**\
   Restart your server so the mod is unloaded completely.

> [!IMPORTANT]
> Mods can add items, recipes and world objects. If you remove a mod from a running world, all content depending on it disappears. Create a [backup](/tutorials/gameserver/eco/create-backup) beforehand.

## Control mods through the configuration

The file `/Configs/ModKit.eco` defines how the server handles mods:

| Setting | Meaning |
|---------|---------|
| `WhitelistEnabled` | Defines whether only selected mods are loaded. If the option is disabled, the server loads all available mods |
| `Whitelist` | List of `.dll` file names that should be loaded |
| `SubscribedMods` | List of mod.io mod ids this server is subscribed to |
| `MaxNumberOfDownloadRequests` | How many clients may download mods at the same time |

> [!NOTE]
> **File does not exist?**
>
> For every configuration, `/Configs/` also contains a file ending in `.eco.template`. This template only holds the default values and is not read by the server. If `ModKit.eco` is missing, copy `ModKit.eco.template` and rename the copy to `ModKit.eco`.

> [!WARNING]
> Changes to the configuration files only take effect after a **restart of the server**.

## Do players have to install the mods?

> [!NOTE]
> No. Mods that also affect the client – such as new items or models – only need to be installed on the server. The client automatically receives the information it needs when connecting. The first join can take a little longer because of this.
>
> Individual mods may still require a client component according to their own description. Check the instructions of the respective mod.
