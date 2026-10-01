---
slug: "set-up-loading-screen"
language: "en"
title: "How to Set Up a Loading Screen on Your Garry's Mod Server"
description: "Set up a custom loading screen on a Garry's Mod server"
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
short_title: "Set Up Loading Screen"
sort: 13
related: ["gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/set-up-fastdl", "gameserver/garrys-mod/join-server", "gameserver/garrys-mod/add-mods"]
---
While players join your server, Garry's Mod shows a loading screen. Instead of the default loading screen you can display your own web page, for example with your server logo, your rules or a progress bar. You do this with the ConVar `sv_loadingurl`.

> [!NOTE]
> The loading screen is a **web page**. You do not store it on your game server; it has to be reachable at its own address on the internet, for example `https://example.com/loading/`. You can host it on your own webspace or use one of the free loading screen generators below.

## Create the Loading Screen Page

If you do not want to code your own web page, you can use a free generator. The Garry's Mod wiki lists the following options:

| Option | Description |
| ------ | ----------- |
| [gmod-lsm.com](https://www.gmod-lsm.com) | Free online loading screen editor, no coding and no web server of your own required |
| [gmodload.com](https://gmodload.com/) | Free loading screen creator with no coding and no web server of your own |
| [Load Seed](https://github.com/glua/load-seed) | Template on GitHub for developing your own loading screen |

Either way, in the end you need the full address of your loading screen, for example `https://example.com/loading/`.

## Enter the Loading Screen in autoexec.cfg

The Garry's Mod wiki names the file `autoexec.cfg` as the place for `sv_loadingurl`. The `server.cfg` of your server already contains an empty `sv_loadingurl ""` line and is executed after `autoexec.cfg`. That is why you remove this line first, otherwise it would overwrite your address with an empty value.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Remove the empty line from server.cfg**\
   Open the following file:

   ```text
   /garrysmod/cfg/server.cfg
   ```

   Delete the line `sv_loadingurl ""` there and save the file.

4. **Enter the address in autoexec.cfg**\
   Open the following file. Create it if it does not exist yet:

   ```text
   /garrysmod/cfg/autoexec.cfg
   ```

   Enter the address of your loading screen there:

   ```text
   sv_loadingurl "https://example.com/loading/"
   ```

   > [!WARNING]
   > The address must be in quotation marks. Do not add a second `sv_loadingurl` line, otherwise only the value read last applies.

5. **Start the server**\
   Save the file and start your server.

## Pass Player Data to the Page

You can use two placeholders in the address, which Garry's Mod replaces automatically when a player connects:

| Placeholder | Replaced with |
| ----------- | ------------- |
| `%s` | The 64-bit SteamID (SteamID64) of the connecting player |
| `%m` | The name of the current map |

> [!TIP]
> **Example**
>
> ```text
> sv_loadingurl "https://example.com/loading/?steamid=%s&map=%m"
> ```
>
> A player with the SteamID64 `76561198000000001` on the map `gm_flatgrass` then sees the page `https://example.com/loading/?steamid=76561198000000001&map=gm_flatgrass`.

Your web page can read these values as URL parameters, for example to show the current map or recognise players by their SteamID.

## Show Loading Progress with JavaScript

While loading, Garry's Mod calls JavaScript functions on your page. You can use them, for example, to show the current status or the download progress. You only need this section if you code the page yourself.

| Function | Called |
| -------- | ------ |
| `GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language)` | At the start, with information about the server and the player |
| `SetFilesTotal(total)` | At the start, with the total number of files to download |
| `DownloadingFile(fileName)` | When the player starts downloading a file |
| `SetStatusChanged(status)` | When the connection status changes, e.g. "Starting Lua..." |
| `SetFilesNeeded(needed)` | When the number of files still needed changes |

The functions must be attached to the `window` object of your page:

```text
window.SetStatusChanged = function(status) {
    document.getElementById("status").textContent = status;
};
```

> [!NOTE]
> `volume` contains the player's music volume (`snd_musicvolume`, from 0 to 1) and `language` their game language (`gmod_language`) as a two-letter code. `SetStatusChanged` is normally not called until the game starts working with the server's files or the Workshop download. Earlier statuses such as "Retrieving server info" usually do not reach your page.

## Test the Loading Screen

1. **Join the server**\
   Connect to your server as described in [How to Join Your Garry's Mod Server](/tutorials/gameserver/garrys-mod/join-server).

2. **Check the loading screen**\
   Your own page should now be shown while you connect.

3. **Reconnect after changes**\
   If you changed something on the page or the address, disconnect and connect again to see the result. Changes to `autoexec.cfg` only take effect after a server restart.

> [!TIP]
> If the default loading screen still appears, first open the address in your normal browser. If the page does not load there, it cannot be reached in the game either. Also check that the line in `autoexec.cfg` is spelled correctly and in quotation marks.
