---
slug: "enable-whitelist"
language: "en"
title: "How to Enable the Whitelist on Your 7 Days to Die Server"
description: "Enable whitelist on a 7 Days to Die server"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Whitelist"
sort: 9
related: ["gameserver/7-days-to-die/download-savegame", "gameserver/7-days-to-die/enable-cheat-mode", "gameserver/7-days-to-die/join-server", "gameserver/7-days-to-die/kick-ban-players"]
---

With the whitelist you can restrict access to your server to specific players.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Set up whitelist via serveradmin.xml

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open serveradmin.xml**\
   Open the file `serveradmin.xml` in the directory:

   ```text
   /Saves/serveradmin.xml
   ```

4. **Add players to whitelist**\
   Add entries for each player in the `<whitelist>` section:

   ```xml
   <whitelist>
     <user platform="Steam" userid="76561198012345678" name="Player1" />
     <user platform="Steam" userid="76561198087654321" name="Player2" />
   </whitelist>
   ```

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> As soon as **one player** is added to the whitelist, only listed players can join the server. Admins can always join regardless of the whitelist.

## Manage whitelist via console command

If you are already an admin, you can also manage the whitelist in-game. Press `F1` to open the console:

| Command | Description |
|---------|-------------|
| `whitelist add <SteamID64>` | Add a player to the whitelist |
| `whitelist remove <SteamID64>` | Remove a player from the whitelist |
| `whitelist list` | Show all players on the whitelist |
