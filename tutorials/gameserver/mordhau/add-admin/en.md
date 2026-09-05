---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Mordhau Server"
description: "Add an admin to a Mordhau server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/mordhau/add-mods", "gameserver/mordhau/create-backup", "gameserver/mordhau/join-server", "gameserver/mordhau/kick-ban-players"]
---

Admins on a Mordhau server are entered in the `Game.ini`. What you use is the player's **PlayFab ID** – not their SteamID64.

> [!IMPORTANT]
> Mordhau uses **PlayFab IDs** today. That is a short string of digits and capital letters, for example `909275ECE8FEDDB`. Older guides that tell you to put a 17-digit SteamID64 into `Admins=` are outdated. In the `Game.ini`, SteamIDs only remain in the old `Legacy` lists for bans and mutes.

## Find out the PlayFab ID

You read a player's PlayFab ID through RCON. The player has to be online on your server for this.

1. **Set up RCON**\
   How to enable RCON and connect to it is described under [Kick & Ban Players](/tutorials/gameserver/mordhau/kick-ban-players).

2. **List the players**\
   Run the following command through RCON:

   ```text
   playerlist
   ```

3. **Copy the ID**\
   The server returns one line per player with the PlayFab ID and the player name. Copy the ID of the player you want to make an admin.

## Add an admin through the Game.ini

1. **Stop the server**\
   Stop your server via the **dashboard**.

   > [!WARNING]
   > Only edit the `Game.ini` while the server is stopped. Mordhau completely rewrites the file on shutdown – changes made while it is running are lost.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the Game.ini**\
   Open the following file:

   ```text
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. **Enter the admins**\
   In the section `[/Script/Mordhau.MordhauGameSession]` add one `Admins=` line per admin:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   Admins=909275ECE8FEDDB
   Admins=A1B2C3D4E5F6789
   ```

   > [!NOTE]
   > Every ID needs its own line. Writing multiple IDs into one line separated by commas does not work.

5. **Start the server**\
   Save the file and start your server. The admin list is read on server start.

## Set an admin password

In addition to the admin list, Mordhau supports an admin password for your server. It is set in the same section of the `Game.ini`:

```ini
[/Script/Mordhau.MordhauGameSession]
AdminPassword=YourAdminPassword
```

> [!WARNING]
> Anyone who knows the admin password can gain admin rights on your server with it. Only pass it on to people you trust and use a different password than your server password. Leave the value empty if you only want to work with the `Admins=` list.

## Manage admins through RCON

Once RCON is set up you can also manage admins while the server is running – without stopping it.

| Command | Description |
|---------|-------------|
| `adminlist` | Shows all registered admins |
| `addadmin <PlayFabID>` | Adds a player as an admin |
| `removeadmin <PlayFabID>` | Removes an admin again |

> [!TIP]
> Admin rights granted through RCON take effect immediately. Also add the admin to the `Admins=` list in the `Game.ini` if the entry is meant to be permanent – with `adminlist` you can check who is registered after a restart.

> [!NOTE]
> The folder `LinuxServer` and the `Game.ini` are only created after your server has fully started once. If you cannot find the file, start your server once and stop it again.

> [!TIP]
> To learn what you can do as an admin and how to remove players, see [Kick & Ban Players](/tutorials/gameserver/mordhau/kick-ban-players).
