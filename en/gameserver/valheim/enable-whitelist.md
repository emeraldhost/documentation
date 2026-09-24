---
description: Enable the whitelist on a Valheim server
---

# How to Enable the Whitelist on Your Valheim Server

With the whitelist you can restrict access to your server to specific players. Valheim uses the file `permittedlist.txt` for this.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Set up the whitelist

:::: warning Warning
As soon as even **one player** is listed in `permittedlist.txt`, only listed players can join your server. This also applies to admins – add yourself and all admins as well. A file without entries does not restrict anyone.
::::

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open permittedlist.txt</b><br>
   Open the file `permittedlist.txt` in the following directory:

   ```
   /.config/unity3d/IronGate/Valheim/permittedlist.txt
   ```

   It is located in the same folder as `adminlist.txt` and `bannedlist.txt`, one level above the `worlds_local` folder. The server creates the file automatically on its first start.

3. <b>Add players</b><br>
   Enter one player ID per line. Copy it exactly as it appears in the player list (`F2`) or in the server log, including the prefix and upper and lower case (see [Find the player ID](#find-the-player-id)):

   ```
   // List permitted players ID ONE per line
   V_76561198012345678
   V_76561198087654321
   ```

   For Steam players, the older form `Steam_76561198012345678` and the plain SteamID64 also work. Lines starting with `//` are comments and are ignored. Player names do not work in this file, only IDs. Make sure there are no spaces before or after an ID.

4. <b>Save the file</b><br>
   Save the file.

:::: info Note
The server automatically reloads the file within a few seconds after a change and removes connected players who are not listed. A restart is not required for this, but it does no harm either.
::::

## Find the player ID

The player ID has the format `[Platform]_[ID]`, e.g. `V_76561198012345678`. For Steam players, the part after `V_` is the SteamID64. You can find the ID in two ways:

- In the in-game player list, which you open with `F2` while the player is on the server.
- In the server log, i.e. in the console of your dashboard, when the player connects. This also works when the whitelist rejects them. Without crossplay, the log shows only the SteamID64 without a prefix for Steam players.

Crossplay players (e.g. on Xbox, PlayStation 5 or Nintendo Switch 2) do not have a SteamID64. For them you always need the ID from the player list or the server log.

:::: info Note
Whether your server allows crossplay players at all is set in the guide [Enable Crossplay](enable-crossplay.md).
::::

## Disable the whitelist

Delete all player IDs from `permittedlist.txt` and save the file. Comment lines starting with `//` can stay. After that, all players who are not banned can join again.
