---
description: Kick and ban players on an Abiotic Factor server
---

# How to Kick and Ban Players on Your Abiotic Factor Server

On an Abiotic Factor server you remove players through the **admin menu inside the game**. There are no documented chat or console commands for this.

:::: info Note
These functions are only available to players who are registered as admins. See [Add Admin](add-admin.md).
::::

## Kick or ban a player

1. <b>Join as an admin</b><br>
   Join your server with an account that is registered as an admin.

2. <b>Open the menu</b><br>
   Press `Esc` to open the in-game menu.

3. <b>Open the admin area</b><br>
   Select the **Admin** tab. There you see the list of all connected players.

4. <b>Select the player</b><br>
   Click the player you want to remove.

5. <b>Choose an action</b><br>
   Select **Kick** or **Ban**:

   - **Kick** disconnects the player from the server. They can rejoin at any time.
   - **Ban** disconnects the player and blocks them permanently.

## Remove a ban

Banned players are managed through the admin area as well: open the list of banned players (**Banned Players**) there, select the player and click **Unban**. They can rejoin your server immediately afterwards.

:::: info Note
The exact wording of the list and its buttons can change with game updates. Look for the overview of banned players in the admin section of the `Esc` menu.
::::

## Ban through the configuration file

Bans are stored in the same file as your admins – in a separate section:

```
/AbioticFactor/Saved/SaveGames/Server/Admin.ini
```

```ini
[BannedPlayers]
BannedPlayer=76561198012345678
```

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Edit Admin.ini</b><br>
   Add one line with the player's [SteamID64](../steamid64-find-out.md) under `[BannedPlayers]`, or remove a line to lift a ban.

4. <b>Start the server</b><br>
   Start your server. Bans are read on server start.

:::: warning Warning
This file-based route is **not officially documented**. It is only evaluated on server start – an entry in the file therefore does not immediately remove a player who is already connected. Use the in-game admin menu to remove someone right away, and check after a game update whether the entry still takes effect.
::::

## No commands and no RCON

:::: danger Important
There is **no documented server console, no chat commands and no RCON** for Abiotic Factor. Everything related to kicking and banning goes through the in-game admin menu or through `Admin.ini`. Commands such as `/kick` or `/ban` do not appear in the official documentation – do not rely on circulating command lists.
::::

:::: tip Tip
If you want to restrict your server to certain players in general, set a server password and only share it with those people.
::::
