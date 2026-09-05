---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your ARK Survival Evolved Server"
description: "Add mods to an ARK Survival Evolved server"
tags: []
date: "2026-03-10"
visibility: "public"
cta: "gameserver"
product_keys: ["ark-survival-evolved"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/ark-survival-evolved/add-admin", "gameserver/ark-survival-evolved/add-savegame", "gameserver/ark-survival-evolved/create-backup", "gameserver/ark-survival-evolved/download-savegame"]
---

You can add Steam Workshop mods to your server to enhance the gameplay experience.

> [!WARNING]
> After a game update, mods may be incompatible and cause crashes.

## Find the mod ID

1. **Open Steam Workshop**\
   Open the [Steam Workshop for ARK](https://steamcommunity.com/app/346110/workshop/) and find the desired mod.

2. **Copy mod ID**\
   You can find the mod ID in the URL of the Workshop page. Copy the number after `?id=`.

   > [!TIP]
   > **Example**
   >
   > In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=1785800853`, the mod ID is `1785800853`.

## Add mods to the server

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter mod IDs**\
   Enter the mod IDs in the **Mods** field, separated by commas.

   > [!TIP]
   > **Example**
   >
   > ```text
   > 1785800853,731604991,889745138
   > ```

4. **Restart the server**\
   Save the setting and restart your server. The mods will be downloaded and installed automatically on startup.

> [!NOTE]
> The order of the mod IDs determines the load order. The first mod is loaded as the main mod.

> [!IMPORTANT]
> All players must **subscribe to the same mods** via the Steam Workshop to be able to join the server.
