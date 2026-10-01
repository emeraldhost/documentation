---
slug: "change-gamemode"
language: "en"
title: "How to Change the Gamemode of Your Garry's Mod Server"
description: "Change the gamemode on a Garry's Mod server"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Gamemode"
sort: 6
related: ["gameserver/garrys-mod/change-map", "gameserver/garrys-mod/install-darkrp", "gameserver/garrys-mod/set-up-star-wars-rp-server", "gameserver/garrys-mod/set-up-ttt"]
---
The gamemode determines what is played on your server – for example Sandbox, Trouble in Terrorist Town (TTT) or DarkRP. You select it in the dashboard with the **Gamemode** field. What goes into that field is always the **folder name** of the gamemode, not its display name.

> [!WARNING]
> Create a [backup](/tutorials/gameserver/garrys-mod/create-backup) before changing the gamemode. That way you can always return to your previous state.

## Included gamemodes

A freshly installed server only comes with these gamemodes:

| Gamemode | Folder name | Description |
| -------- | ----------- | ----------- |
| Sandbox | `sandbox` | Default gamemode of your server |
| Trouble in Terrorist Town | `terrortown` | TTT – Innocents versus Traitors |

> [!NOTE]
> The folder `/garrysmod/gamemodes/` also contains a folder called `base`. It is only the foundation other gamemodes build on and cannot be played on its own. You have to install all other gamemodes such as DarkRP, Prop Hunt or Murder yourself.

## Find the correct folder name

In the **Gamemode** field you enter the folder name – not the title from the Workshop. "Trouble in Terrorist Town", for example, becomes `terrortown`, and "Prop Hunt: Enhanced" becomes `prop_hunt`.

- **Uploaded via SFTP:** The folder name is the name of the folder in `/garrysmod/gamemodes/` that contains the `.txt` file of the same name.
- **From the Workshop:** The folder name is usually given in the description of the Workshop item. If you cannot find it there, ask the author of the gamemode.
- **From GitHub:** The folder name matches the name of the gamemode's `.txt` file, for example `darkrp.txt` for `darkrp`. If the extracted folder has a different name (e.g. `DarkRP-master`), rename it accordingly, in this case to `darkrp`.

An overview of some well-known gamemodes:

| Gamemode | Folder name | Workshop ID | Matching maps |
| -------- | ----------- | ----------- | ------------- |
| Sandbox | `sandbox` | included | `gm_…` |
| Trouble in Terrorist Town | `terrortown` | included | `ttt_…` |
| DarkRP | `darkrp` | `248302805` | `rp_…` |
| Prop Hunt: Enhanced | `prop_hunt` | `1758906555` | `ph_…` |
| Murder | `murder` | `187073946` | `md_…`, `mu_…`, `murder_…` |

> [!IMPORTANT]
> The folder name, the name of the `.txt` file and the entry in the **Gamemode** field have to be identical and written in lowercase – for example `darkrp`, not `DarkRP`.

## Install a gamemode via the Workshop

The easiest way to install a gamemode is through your server's Workshop collection.

1. **Add the gamemode to the collection**\
   Add the gamemode in the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/) to the collection your server loads. How to create a collection and enter it in the **Workshop ID** field is explained in [Add mods](/tutorials/gameserver/garrys-mod/add-mods).

2. **Find the folder name**\
   Find out the folder name of the gamemode as described in [Find the correct folder name](#find-the-correct-folder-name).

3. **Enter the gamemode**\
   Then enter the folder name as described in [Set the gamemode in the settings](#set-the-gamemode-in-the-settings).

> [!TIP]
> If the gamemode's `.txt` file contains a Workshop ID – as with DarkRP, Prop Hunt: Enhanced or Murder –, players automatically download the gamemode when they join your server. The same applies to the current map if it is part of your server's collection.

## Upload a gamemode via SFTP

You upload gamemodes that do not come from the Workshop (for example from GitHub) yourself.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the gamemode**\
   Upload the extracted gamemode folder to the following directory:

   ```text
   /garrysmod/gamemodes/
   ```

4. **Check the folder structure**\
   Directly inside the gamemode folder there has to be a `.txt` file with the same name as the folder and the subfolder `gamemode/`. For a gamemode with the folder name `examplemode` it looks like this:

   ```text
   /garrysmod/gamemodes/examplemode/examplemode.txt
   /garrysmod/gamemodes/examplemode/gamemode/
   ```

   > [!WARNING]
   > Watch out for these common mistakes in particular, otherwise the server cannot find the gamemode:
   >
   > - **One folder too many:** Extracting often creates an extra level, for example `/garrysmod/gamemodes/darkrp/darkrp/`. In that case move the contents of the inner folder one level up so that `darkrp.txt` is located directly in `/garrysmod/gamemodes/darkrp/`.
   > - **Wrong folder name:** A folder downloaded as a ZIP from GitHub is often named `<name>-master`, for example `DarkRP-master`. Rename it after the `.txt` file, in this case to `darkrp`.
   > - **Its own `gamemodes/` folder:** If the download itself contains a `gamemodes/` folder, upload only the gamemode folder inside it.

5. **Enter the gamemode**\
   Enter the folder name as described in [Set the gamemode in the settings](#set-the-gamemode-in-the-settings).

## Set the gamemode in the settings

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open the settings**\
   Navigate to the **Settings**.

3. **Enter the gamemode**\
   Enter the folder name of the gamemode in the **Gamemode** field, for example `terrortown`. The server then starts with the parameter:

   ```text
   +gamemode terrortown
   ```

4. **Enter a matching map**\
   Enter a map that matches the gamemode in the **Map** field. The default map `gm_flatgrass` is meant for Sandbox. How to enter a different map is explained in [Change map](/tutorials/gameserver/garrys-mod/change-map).

5. **Restart the server**\
   Save the setting and restart your server.

> [!NOTE]
> You can usually tell which maps match a gamemode by the prefix in the map name, for example `ttt_` for TTT, `rp_` for DarkRP or `ph_` for Prop Hunt. The gamemode will still start on a map that does not match, but such a map lacks things like the spawn and weapon points TTT needs.

> [!TIP]
> You can also switch the gamemode while the server is running. Enter `gamemode terrortown` in the console and then load a new map with `changelevel ttt_examplemap`. The switch only takes effect when the map loads. After a restart your server starts with the gamemode from the **Settings** again.

## Star Wars RP and DarkRP

There is no official "Star Wars RP" gamemode. A Star Wars RP server is a DarkRP server with additional Star Wars content such as jobs, weapons, models and maps. Complete Star Wars RP gamemodes are mostly only available as paid third-party products. So you do not simply switch from `sandbox` to Star Wars RP – you install DarkRP first.

- How to install DarkRP is explained in [Install DarkRP](/tutorials/gameserver/garrys-mod/install-darkrp).
- How to turn it into a Star Wars RP server is explained in [Set up a Star Wars RP server](/tutorials/gameserver/garrys-mod/set-up-star-wars-rp-server).

## Gamemodes with content from other games

Some gamemodes require content from Counter-Strike: Source, for example Murder. Since the July 2025 update Garry's Mod already includes most of the content from Counter-Strike: Source and Half-Life 2 Episodic. For most gamemodes you therefore do not have to do anything else.

Maps, voice-over and music are excluded. So enter a map that matches your gamemode, for example from the Workshop, as described in [Change map](/tutorials/gameserver/garrys-mod/change-map). How to mount additional content from other games is explained in [Add mods](/tutorials/gameserver/garrys-mod/add-mods#mount-content-from-other-games).
