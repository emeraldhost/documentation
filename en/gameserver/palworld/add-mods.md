---
description: Add mods to a Palworld server
---

# How to Add Mods to Your Palworld Server

Palworld mods come in different types — and not every type runs on a Linux server. Our Palworld servers run on **Linux**, so the following applies:

| Mod type | Usable on your server? |
|----------|------------------------|
| `.pak` mods (asset/data mods) | ✅ Yes |
| LogicMods (`.pak` in the `LogicMods` folder, requires UE4SS) | ❌ No — Windows-only |
| UE4SS mods (Lua scripts) | ❌ No — Windows-only |
| Official mod system / Steam Workshop | ❌ No — Windows-only |

:::: info How to recognize the mod type
Take a look at the mod description (e.g. on Nexus Mods): if it mentions **UE4SS**, **RE-UE4SS**, **Lua**, **Scripts**, **dlls** or **LogicMods**, the mod does **not** run on your server. Plain `.pak` mods without such requirements work.
::::

:::: warning Warning
Mod support in Palworld is considered experimental and can cause crashes or corrupted save data — use at your own risk. Create a backup of your [savegame](upload-savegame.md) beforehand. After game updates, mods can become incompatible — when in doubt, remove them until the mod authors have updated them.
::::

## Install a .pak mod on the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Create the mod folder</b><br>
   Go to the folder `Pal/Content/Paks/` and create the subfolder `~mods` there if it does not exist yet:

   ```
   /Pal/Content/Paks/~mods/
   ```

4. <b>Upload the mod</b><br>
   Upload the mod's `.pak` file into the `~mods` folder.

5. <b>Start the server</b><br>
   Start your server. The mod is loaded automatically on startup.

:::: danger Important
Depending on the mod, **players** must also install the same `.pak` file client-side (on their own PC under `Pal/Content/Paks/~mods/` in the game directory) for the content to display correctly. Check the description of the respective mod.
::::

## Remove a mod

Delete the `.pak` file from the `/Pal/Content/Paks/~mods/` folder (with the server stopped) and restart the server.

## Client-side mods

Many mods are purely client-side (for example visual, sound or UI tweaks) and work independently of the server. Each player installs these locally on their own PC:

- [Steam Workshop](https://steamcommunity.com/app/1623730/workshop/) — subscribe to the mod and it is loaded automatically in-game
- [Nexus Mods](https://www.nexusmods.com/games/palworld/mods) and [CurseForge](https://www.curseforge.com/palworld) — install according to the respective mod description

:::: info Note
According to Pocketpair, the official mod system including Steam Workshop integration only works server-side on the **Windows** dedicated server. As soon as Pocketpair adds Linux support, we will update this guide.
::::
