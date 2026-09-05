---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Palworld Server"
description: "Add mods to a Palworld server"
tags: []
date: "2026-02-28"
visibility: "public"
updated: "2026-07-30"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 27
related: ["gameserver/palworld/enable-pvp", "gameserver/palworld/enable-raids", "gameserver/palworld/join-server", "gameserver/palworld/kick-ban-players"]
---

Palworld mods come in different types – and not every type runs on a Linux server. Our Palworld servers run on **Linux**, so the following applies:

| Mod type | Usable on your server? |
|----------|------------------------|
| `.pak` mods (asset/data mods) | ✅ Yes |
| LogicMods (`.pak` in the `LogicMods` folder, requires UE4SS) | ❌ No – Windows-only |
| UE4SS mods (Lua scripts) | ❌ No – Windows-only |
| Official mod system / Steam Workshop | ❌ No – Windows-only |

> [!NOTE]
> **How to recognize the mod type**
>
> Take a look at the mod description (e.g. on Nexus Mods): if it mentions **UE4SS**, **RE-UE4SS**, **Lua**, **Scripts**, **dlls** or **LogicMods**, the mod does **not** run on your server. Plain `.pak` mods without such requirements work.

> [!WARNING]
> Mod support in Palworld is considered experimental and can cause crashes or corrupted save data – use at your own risk. Create a backup of your [savegame](/tutorials/gameserver/palworld/upload-savegame) beforehand. After game updates, mods can become incompatible – when in doubt, remove them until the mod authors have updated them.

## Install a .pak mod on the server

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Create the mod folder**\
   Go to the folder `Pal/Content/Paks/` and create the subfolder `~mods` there if it does not exist yet:

   ```text
   /Pal/Content/Paks/~mods/
   ```

4. **Upload the mod**\
   Upload the mod's `.pak` file into the `~mods` folder.

5. **Start the server**\
   Start your server. The mod is loaded automatically on startup.

> [!IMPORTANT]
> Depending on the mod, **players** must also install the same `.pak` file client-side (on their own PC under `Pal/Content/Paks/~mods/` in the game directory) for the content to display correctly. Check the description of the respective mod.

## Remove a mod

Delete the `.pak` file from the `/Pal/Content/Paks/~mods/` folder (with the server stopped) and restart the server.

## Client-side mods

Many mods are purely client-side (for example visual, sound or UI tweaks) and work independently of the server. Each player installs these locally on their own PC:

- [Steam Workshop](https://steamcommunity.com/app/1623730/workshop/) – subscribe to the mod and it is loaded automatically in-game
- [Nexus Mods](https://www.nexusmods.com/games/palworld/mods) and [CurseForge](https://www.curseforge.com/palworld) – install according to the respective mod description

> [!NOTE]
> According to Pocketpair, the official mod system including Steam Workshop integration only works server-side on the **Windows** dedicated server. As soon as Pocketpair adds Linux support, we will update this guide.
