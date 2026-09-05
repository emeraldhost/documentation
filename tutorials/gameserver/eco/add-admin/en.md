---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Eco Server"
description: "Add an admin to an Eco server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/eco/add-mods", "gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/download-savegame"]
---

Admins on an Eco server are entered in the file `/Configs/Users.eco`. Everyone listed there is allowed to use the admin chat commands of the server.

> [!IMPORTANT]
> What you enter is always an **ID** – either the player's **SLG ID** or their **SteamID64**. A plain user name does not work.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Find your own ID

The server shows you your SLG ID directly in the game:

1. **Open the chat**\
   Press `Enter` in the game to open the chat.

2. **Enter the command**\
   Enter the following command to display your own ID:

   ```text
   /manage whoami
   ```

   For other players you can use `/manage whois <PlayerName>` as well as `/manage listusers` – the latter lists all users known to the server with their name and ID.

## Add the admin

1. **Stop the server**\
   Stop your server via the dashboard. Configuration files are only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Users.eco**\
   Open the following file:

   ```text
   /Configs/Users.eco
   ```

   > [!NOTE]
   > **File does not exist?**
   >
   > For every configuration, `/Configs/` also contains a file ending in `.eco.template`. This template only holds the default values and is not read by the server. If `Users.eco` is missing, copy `Users.eco.template` and rename the copy to `Users.eco`.

4. **Enter the ID**\
   Look for the `Admins` section and add the ID inside `$values`:

   ```json
   "Admins": {
     "System.String": {
       "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "$values": [
         "76561198012345678"
       ]
     }
   }
   ```

   The `$type` line already exists in your file – leave it unchanged and only add the IDs under `$values`. Depending on the server version it can look different from the example.

   Multiple admins are listed one below the other, separated by commas – there is **no** comma after the last entry:

   ```json
   "$values": [
     "76561198012345678",
     "76561198087654321"
   ]
   ```

5. **Start the server**\
   Save the file and start your server. The admin rights are applied on startup.

> [!WARNING]
> `Users.eco` has to remain valid JSON. A single missing or extra comma is enough to make the file unreadable for the server. Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing. If something goes wrong, you can look at `Users.eco.template` to see the original structure of the file.

> [!NOTE]
> **First admin**
>
> The first admin can only be added through the file. The chat commands for granting admin rights require admin rights themselves.

## Grant admin rights in the game

Once you are an admin, you can appoint further admins directly in the game:

| Command | Description |
|---------|-------------|
| `/manage admin <NameOrID> [reason]` | Shows the admin list or adds a user as admin. Short form: `/admin` |
| `/manage removeadmin <NameOrID> [reason]` | Removes admin rights from a user |
| `/manage listadmins` | Shows all admins of the server |
| `/manage authlevel` | Shows your current authorisation level |

For `<NameOrID>` the commands accept the account id, Steam ID, SLG ID or the user name.

> [!NOTE]
> You enter these commands in the **in-game chat**. Whether they can also be sent through the console in the dashboard is not documented – when in doubt, use the chat or the configuration file.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/eco/kick-ban-players).
