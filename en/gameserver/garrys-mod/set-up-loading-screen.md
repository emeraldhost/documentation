---
description: Set up a custom loading screen on a Garry's Mod server
---

# How to Set Up a Loading Screen on Your Garry's Mod Server

While players join your server, Garry's Mod shows a loading screen. Instead of the default loading screen you can display your own web page, for example with your server logo, your rules or a progress bar. You do this with the ConVar `sv_loadingurl`.

:::: info Note
The loading screen is a **web page**. You do not store it on your game server; it has to be reachable at its own address on the internet, for example `https://example.com/loading/`. You can host it on your own webspace or use one of the free loading screen generators below.
::::

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

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Remove the empty line from server.cfg</b><br>
   Open the following file:

   ```
   /garrysmod/cfg/server.cfg
   ```

   Delete the line `sv_loadingurl ""` there and save the file.

4. <b>Enter the address in autoexec.cfg</b><br>
   Open the following file. Create it if it does not exist yet:

   ```
   /garrysmod/cfg/autoexec.cfg
   ```

   Enter the address of your loading screen there:

   ```
   sv_loadingurl "https://example.com/loading/"
   ```

   :::: warning Warning
   The address must be in quotation marks. Do not add a second `sv_loadingurl` line, otherwise only the value read last applies.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

## Pass Player Data to the Page

You can use two placeholders in the address, which Garry's Mod replaces automatically when a player connects:

| Placeholder | Replaced with |
| ----------- | ------------- |
| `%s` | The 64-bit SteamID (SteamID64) of the connecting player |
| `%m` | The name of the current map |

:::: tip Example
```
sv_loadingurl "https://example.com/loading/?steamid=%s&map=%m"
```
A player with the SteamID64 `76561198000000001` on the map `gm_flatgrass` then sees the page `https://example.com/loading/?steamid=76561198000000001&map=gm_flatgrass`.
::::

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

```
window.SetStatusChanged = function(status) {
    document.getElementById("status").textContent = status;
};
```

:::: info Note
`volume` contains the player's music volume (`snd_musicvolume`, from 0 to 1) and `language` their game language (`gmod_language`) as a two-letter code. `SetStatusChanged` is normally not called until the game starts working with the server's files or the Workshop download. Earlier statuses such as "Retrieving server info" usually do not reach your page.
::::

## Test the Loading Screen

1. <b>Join the server</b><br>
   Connect to your server as described in [How to Join Your Garry's Mod Server](join-server.md).

2. <b>Check the loading screen</b><br>
   Your own page should now be shown while you connect.

3. <b>Reconnect after changes</b><br>
   If you changed something on the page or the address, disconnect and connect again to see the result. Changes to `autoexec.cfg` only take effect after a server restart.

:::: tip Tip
If the default loading screen still appears, first open the address in your normal browser. If the page does not load there, it cannot be reached in the game either. Also check that the line in `autoexec.cfg` is spelled correctly and in quotation marks.
::::
