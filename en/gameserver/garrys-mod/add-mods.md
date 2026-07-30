---
description: Add mods and addons to a Garry's Mod server
---

# How to Add Mods to Your Garry's Mod Server

There are two ways to get addons onto your server: through a **Steam Workshop collection** that the server downloads automatically on startup, or by uploading the addon folders **manually via SFTP**.

:::: warning Caution
Stop your server before uploading files. After a game update addons can become incompatible and cause errors or crashes.
::::

## Set up a Workshop collection

The server can load exactly **one** Workshop collection. All addons you want to use on the server therefore have to be in the same collection.

1. <b>Create a collection</b><br>
   Create your own collection in the [Steam Workshop for Garry's Mod](https://steamcommunity.com/app/4000/workshop/) and add the addons you want.

   :::: warning Caution
   The collection must be **public** or **unlisted**. The server cannot access private collections.
   ::::

2. <b>Copy the collection ID</b><br>
   You can find the collection ID in the URL of the collection. Copy the number after `?id=`.

   :::: tip Example
   In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=157384458` the collection ID is `157384458`.
   ::::

3. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

4. <b>Open the settings</b><br>
   Navigate to the **Settings**.

5. <b>Enter the collection ID</b><br>
   Enter the collection ID in the **Workshop ID** field. The server then starts with the parameter:

   ```
   +host_workshop_collection 157384458
   ```

6. <b>Restart the server</b><br>
   Save the setting and restart your server. The addons of the collection are downloaded and mounted on startup.

:::: info Note
By default the server checks for addon updates every time it starts. You can disable this automatic updating with the ConVar `host_workshop_autoupdate 0`.
::::

## Upload addons manually

Addons that do not come from the Workshop (so-called legacy addons) are uploaded to the server as an extracted folder.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Prepare the addon</b><br>
   If the addon comes as a `.gma` file you have to extract it first. Use `gmad.exe` from your local game installation under `…\GarrysMod\bin\`. What goes onto the server afterwards is the **extracted folder**, not the `.gma` file.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the addon</b><br>
   Upload the addon folder to the following directory:

   ```
   /garrysmod/addons/
   ```

   Each addon lives in its own subfolder, e.g. `/garrysmod/addons/my-addon/` containing subfolders such as `lua/`, `materials/`, `models/` or `sound/`.

5. <b>Start the server</b><br>
   Start your server.

:::: danger Important
The server runs on Linux and file paths there are **case-sensitive**. `My-Addon`, `my-addon` and `my_addon` are three different folders. Always name addon folders in lowercase and avoid spaces and special characters.
::::

## Install a gamemode

Gamemodes are not placed in the `addons` folder but in their own directory.

1. <b>Upload the gamemode</b><br>
   Upload the gamemode folder via [SFTP](../establish-sftp-connection.md) to the following directory:

   ```
   /garrysmod/gamemodes/
   ```

2. <b>Select the gamemode</b><br>
   Enter the folder name of the gamemode in the **Gamemode** field in the **Settings** of your server. The server then starts with the parameter `+gamemode <foldername>`.

3. <b>Restart the server</b><br>
   Save the setting and restart your server.

## Force players to download the addons

Players do **not** automatically download the Workshop addons of your server. Only the current map and the gamemode are transferred automatically, and only if they come from your server's collection. Every other addon has to be enforced individually.

1. <b>Open the file</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md):

   ```
   /garrysmod/lua/autorun/server/workshop.lua
   ```

2. <b>Add the addons</b><br>
   The file already contains an empty `resource.AddWorkshop( "" )` line. Replace it and add one line per addon with the respective **addon ID** — not the collection ID:

   ```lua
   resource.AddWorkshop( "104606562" )
   resource.AddWorkshop( "1234567890" )
   ```

3. <b>Restart the server</b><br>
   Save the file and restart your server.

:::: info Note
Content that does not come from the Steam Workshop (e.g. custom models or sounds) is not distributed this way. For that you need FastDL via the ConVar `sv_downloadurl` in the file `/garrysmod/cfg/server.cfg`.
::::

## Mount content from other games

Content from other Source games (e.g. Counter-Strike: Source) is mounted through the following file:

```
/garrysmod/cfg/mount.cfg
```
