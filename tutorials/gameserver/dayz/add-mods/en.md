---
slug: "add-mods"
language: "en"
title: "How to Install Mods on a DayZ Server"
description: "Install mods on a DayZ server"
tags: []
date: "2026-01-22"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/dayz/add-admin", "gameserver/dayz/add-savegame", "gameserver/dayz/adjust-loot", "gameserver/dayz/change-map"]
---

There are two methods to install mods on your DayZ server: via modlist file (easier) or manually (for more control).

## Method 1: Modlist File

This method is the easiest and recommended for most users.

1. **Launch DayZ and select Mods**\
   Start DayZ and click on **Mods**.

2. **Enable desired mods**\
   Enable all mods you want on your server.

3. **Export modlist**\
   Click on **More** and select **Export list of mods to a file**.

4. **Export only loaded mods**\
   Choose **Only loaded mods** and save the `.html` file.

5. **Stop the server**\
   Stop your server via the dashboard.

6. **Upload modlist**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and upload the `.html` file as `modlist.html`.

7. **Configure modlist**\
   Go to **Settings** in your dashboard and enter the filename under **Modlist File (Exported from DayZ Launcher)**. By default, `modlist.html` is already set.

8. **Start the server**\
   Start your server.

## Method 2: Manual Installation

This method offers more control and is required for server-side only mods.

1. **Subscribe to the mod in Steam Workshop**\
   Open Steam, select DayZ from your library and go to the **Workshop** tab. Subscribe to your desired mod.

> [!WARNING]
> **Note**
>
> Some mods have dependencies that must be installed first.

2. **Launch DayZ**\
   Start DayZ so the mods are downloaded.

3. **Open mod folder**\
   Go to **Mods**, select a mod and click on the three dots. Choose **Open folder**.

4. **Compress mods**\
   Compress the desired mod folders (starting with `@`) into a `.zip` file.

5. **Stop the server**\
   Stop your server via the dashboard.

6. **Upload mod archive**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and upload the `.zip` file.

7. **Extract archive**\
   Extract the `.zip` file on the server.

8. **Copy bikey files**\
   Open the mod folder and navigate to the `Keys` subfolder. Download all `.bikey` files and upload them to the `/keys` folder on your server.

9. **Activate mods**\
   Go to **Settings** in your dashboard and enter the mod names under **Additional Mods**, separated by semicolons:

   ```text
   @CF;@ModName1;@ModName2
   ```

> [!TIP]
> **Note**
>
> Mods under **Additional Mods** will require players to install the mods, while mods under **Mods** are server-side only and will not.

10. **Start the server**\
    Start your server.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Server won't start | Check if all mod names are entered correctly |
| Mod Mismatch | Players must have the same mods installed |
| Signature error | Check if all `.bikey` files are in the `/keys` folder |
