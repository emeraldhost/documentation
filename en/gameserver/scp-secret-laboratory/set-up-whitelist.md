---
description: "Set up a whitelist on a SCP: Secret Laboratory server"
---

# How to Set Up a Whitelist on Your SCP: Secret Laboratory Server

With a whitelist, only players you have explicitly listed can join — ideal for private community servers or events. The whitelist consists of two parts: the `enable_whitelist` option in the `config_gameplay.txt` file and the player list in the `UserIDWhitelist.txt` file. You can find the basics of editing the configuration files in the [Edit configuration files](edit-config-files.md) guide.

:::: warning Warning
The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.
::::

## Set up the whitelist

1. <b>Find out the game port</b><br>
   Open the dashboard of your server and note the game port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Enable the whitelist</b><br>
   Open the following file — replace `<Port>` with your game port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Find the `enable_whitelist` entry and change its value from `false` (default) to `true`:

   ```
   enable_whitelist: true
   ```

5. <b>Add players to the whitelist</b><br>
   In the same port folder, open the `UserIDWhitelist.txt` file:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/UserIDWhitelist.txt
   ```

   Add each allowed ID on its own line. Steam players are added in the format `SteamID64@steam`, Discord users in the format `DiscordID@discord`. Lines starting with `#` are comments — handy for noting the names that belong to the IDs:

   ```
   # Max
   76561198801452050@steam
   # Moritz
   123456789012345678@discord
   ```

   You can find your [SteamID64](../steamid64-find-out.md) using the linked guide. It is the same ID format you also use when [assigning ranks](assign-ranks.md).

6. <b>Start the server</b><br>
   Save both files and start your server via the dashboard.

:::: info Note
Changes to the whitelist only take effect after a server restart — there is no hot-reload.
::::

:::: tip Tip
Add your own ID to `UserIDWhitelist.txt` before enabling the whitelist — otherwise you will lock yourself out of your own server.
::::
