---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Avorion Server"
description: "Add mods to an Avorion server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/avorion/add-admin", "gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame"]
---

Avorion comes with its own mod system. You do not have to upload the mods yourself – your server downloads them from the Steam Workshop on startup. All of this is controlled by a single file: the `modconfig.lua` in the folder of your galaxy.

> [!WARNING]
> Stop your server before adding or removing mods. After a game update, mods may be incompatible and cause crashes. Also create a [backup](/tutorials/gameserver/avorion/create-backup) of your galaxy beforehand.

## Find the Workshop ID

1. **Open the mod in the Steam Workshop**\
   Open the [Steam Workshop for Avorion](https://steamcommunity.com/app/445220/workshop/) and look up the mod you want.

2. **Read the ID from the address**\
   The Workshop ID is the number at the end of the URL. For `https://steamcommunity.com/sharedfiles/filedetails/?id=1691539727` the ID is `1691539727`.

## Add the mods

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open modconfig.lua**\
   Navigate to the folder of your galaxy – where `server.ini` and `admin.xml` are located as well – and open the file:

   ```text
   /galaxy/<galaxy name>/modconfig.lua
   ```

   > [!NOTE]
   > The galaxy folder is named exactly like the galaxy name configured in the **dashboard** (**Galaxy Name**). If the file does not exist yet, start your server once so the folder structure is created, then stop it again.

4. **Enter the mods**\
   Add each mod with its Workshop ID inside the `mods` block:

   ```lua
   modLocation = ""
   forceEnabling = false
   mods =
   {
       {workshopid = "1691539727"},
       {workshopid = "1691591293"},
   }
   allowed =
   {
   }
   ```

   You can leave the `allowed` block empty. If you additionally want to allow client-side mods, add them there using the same notation: `{workshopid = "…"}`.

5. **Save and start**\
   Save the file and start your server. On startup it downloads the configured mods and activates them – the first start can therefore take a little longer.

## The blocks at a glance

| Block | Meaning |
|-------|---------|
| `mods` | The mods your server loads. One entry per mod with its Workshop ID. |
| `allowed` | Optional list of client-side mods (mostly UI mods) that are allowed on your server. Can be left empty. |
| `forceEnabling` | Forces the mods to be enabled. The value stays at `false`. |
| `modLocation` | Alternative location for the mods folder. If the value stays empty, your server uses the default folder `mods`. |

> [!WARNING]
> **Leave forceEnabling at false**
>
> The developers of Avorion explicitly recommend leaving `forceEnabling` turned off: the option is aimed primarily at mod developers and can lead to broken or corrupted savegames.

## Do players have to do anything?

When joining, players are shown the mod list of your server. Via the **connect & download** button the client automatically downloads and installs the matching Workshop mods before joining.

> [!TIP]
> Your server stores downloaded Workshop mods inside the galaxy under `workshop/content/445220/`. That is how you can check whether a mod was actually loaded.

> [!IMPORTANT]
> Watch the commas and the curly brackets. If the `modconfig.lua` is faulty, your server cannot read the file and will not start properly. When testing, comment out mods one at a time instead of changing several at once.
