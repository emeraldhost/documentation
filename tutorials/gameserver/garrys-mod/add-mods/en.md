---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Garry's Mod Server"
description: "Add mods and addons to a Garry's Mod server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/garrys-mod/add-admin", "gameserver/garrys-mod/create-backup", "gameserver/garrys-mod/join-server", "gameserver/garrys-mod/kick-ban-players"]
---

There are two ways to get addons onto your server: through a **Steam Workshop collection** that the server downloads automatically on startup, or by uploading the addon folders **manually via SFTP**.

> [!WARNING]
> **Caution**
>
> Stop your server before uploading files. After a game update addons can become incompatible and cause errors or crashes.

## Set up a Workshop collection

The server can load exactly **one** Workshop collection. All addons you want to use on the server therefore have to be in the same collection.

1. **Create a collection**\
   Create your own collection in the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/) and add the addons you want.

   > [!WARNING]
   > **Caution**
   >
   > The collection must be **public** or **unlisted**. The server cannot access private collections.

2. **Copy the collection ID**\
   You can find the collection ID in the URL of the collection. Copy the number after `?id=`.

   > [!TIP]
   > **Example**
   >
   > In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=157384458` the collection ID is `157384458`.

3. **Open the dashboard**\
   Open the dashboard of your server.

4. **Open the settings**\
   Navigate to the **Settings**.

5. **Enter the collection ID**\
   Enter the collection ID in the **Workshop ID** field. The server then starts with the parameter:

   ```text
   +host_workshop_collection 157384458
   ```

6. **Restart the server**\
   Save the setting and restart your server. The addons of the collection are downloaded and mounted on startup.

> [!NOTE]
> By default the server checks for addon updates every time it starts. You can disable this automatic updating with the ConVar `host_workshop_autoupdate 0`.

## Upload addons manually

Addons that do not come from the Workshop (so-called legacy addons) are uploaded to the server as an extracted folder.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Prepare the addon**\
   If the addon comes as a `.gma` file you have to extract it first. Use `gmad.exe` from your local game installation under `…\GarrysMod\bin\`. What goes onto the server afterwards is the **extracted folder**, not the `.gma` file.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the addon**\
   Upload the addon folder to the following directory:

   ```text
   /garrysmod/addons/
   ```

   Each addon lives in its own subfolder, e.g. `/garrysmod/addons/my-addon/` containing subfolders such as `lua/`, `materials/`, `models/` or `sound/`.

5. **Start the server**\
   Start your server.

> [!IMPORTANT]
> The server runs on Linux and file paths there are **case-sensitive**. `My-Addon`, `my-addon` and `my_addon` are three different folders. Always name addon folders in lowercase and avoid spaces and special characters.

## Install a gamemode

Gamemodes are not placed in the `addons` folder but in their own directory.

1. **Upload the gamemode**\
   Upload the gamemode folder via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the following directory:

   ```text
   /garrysmod/gamemodes/
   ```

2. **Select the gamemode**\
   Enter the folder name of the gamemode in the **Gamemode** field in the **Settings** of your server. The server then starts with the parameter `+gamemode <foldername>`.

3. **Restart the server**\
   Save the setting and restart your server.

## Force players to download the addons

Players do **not** automatically download the Workshop addons of your server. Only the current map and the gamemode are transferred automatically, and only if they come from your server's collection. Every other addon has to be enforced individually.

1. **Open the file**\
   Open the following file via [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /garrysmod/lua/autorun/server/workshop.lua
   ```

2. **Add the addons**\
   The file already contains an empty `resource.AddWorkshop( "" )` line. Replace it and add one line per addon with the respective **addon ID** – not the collection ID:

   ```lua
   resource.AddWorkshop( "104606562" )
   resource.AddWorkshop( "1234567890" )
   ```

3. **Restart the server**\
   Save the file and restart your server.

> [!NOTE]
> Content that does not come from the Steam Workshop (e.g. custom models or sounds) is not distributed this way. For that you need FastDL via the ConVar `sv_downloadurl` in the file `/garrysmod/cfg/server.cfg`.

## Mount content from other games

Content from other Source games (e.g. Counter-Strike: Source) is mounted through the following file:

```text
/garrysmod/cfg/mount.cfg
```
