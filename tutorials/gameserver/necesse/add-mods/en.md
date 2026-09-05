---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Necesse Server"
description: "Add mods to a Necesse server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/necesse/add-admin", "gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame"]
---

In Necesse, mods are individual **`.jar` files**. Your server loads them from a dedicated folder that you fill via SFTP.

> [!WARNING]
> **Caution**
>
> Stop your server before adding, updating or removing mods. Also create a [backup](/tutorials/gameserver/necesse/create-backup) first – mods can permanently change your world.

> [!NOTE]
> **No automatic Workshop download**
>
> Your server **cannot** download mods from the Steam Workshop by itself. You always upload the `.jar` file of each mod manually.

> [!CAUTION]
> **Mind the start parameter**
>
> Necesse only reads the `mods` folder if the startup command of your server contains the parameter `-mod ./mods`. After the restart, check in the console whether your mods are listed. If they are missing, we are happy to add the parameter for you free of charge – just open a support ticket.

## Obtain the mod file

1. **Choose a mod**\
   Look for the mod you want in the Necesse Steam Workshop or on the mod author's page.

2. **Get the `.jar` file**\
   You need the plain `.jar` file of the mod. If the author does not offer a direct download, subscribe to the mod in the Steam Workshop and start Necesse once – the game then downloads the mod and places the `.jar` file in your local mods folder:

   ```text
   %appdata%\Necesse\mods
   ```

3. **Check the version**\
   Make sure the mod matches the game version of your server. Mods built for a different version can prevent the server from starting.

## Upload the mod

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the mods folder**\
   Change into the following directory:

   ```text
   /mods/
   ```

   > [!NOTE]
   > If the folder does not exist yet, create it in the root directory of your server. The name must be exactly `mods` – your server runs on Linux and is case sensitive.

4. **Upload the `.jar` file**\
   Upload the `.jar` file directly into this folder. Do not create subfolders – the server only reads files that sit directly in the folder.

5. **Start the server**\
   Start your server via the dashboard.

6. **Check the console**\
   On startup your server lists the detected mods in the console. If your mod appears there, it was loaded.

> [!IMPORTANT]
> All mods that are **not** marked as `clientside` must be installed on the server **and** on every player's client in the same version. If such a mod is missing on one side or present in a different version, joining fails. Every player subscribes to the mod in the Steam Workshop and enables it in the game's mod menu. Mods the author marked as `clientside` can be used on your own – the server does not need them.

## Remove mods

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the file**\
   Delete the corresponding `.jar` file from the `/mods/` folder.

3. **Start the server**\
   Start your server again.

> [!WARNING]
> **Caution**
>
> If you remove a mod that added blocks, items or enemies to the world, its content disappears from your world. When in doubt, restore a [backup](/tutorials/gameserver/necesse/create-backup) instead of simply deleting the mod.

> [!WARNING]
> **Mods are not loaded**
>
> If your mod does not show up in the console after the restart, first check the spelling and the location of the file: it has to sit directly in `/mods/` and end in `.jar`. If no mod is detected at all, the start parameter `-mod ./mods` is usually missing – contact us via a support ticket for that.

> [!NOTE]
> After a game update, mods can become incompatible and prevent the server from starting. In that case update your mods or temporarily remove them from the `/mods/` folder.
