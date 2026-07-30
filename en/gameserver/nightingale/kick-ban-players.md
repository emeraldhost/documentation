---
description: Kick and ban players on a Nightingale server
---

# How to Kick and Ban Players on Your Nightingale Server

On a Nightingale server you remove players **directly in the game** through the social menu. There are no console or chat commands for kicking and banning.

:::: info Note
You have to be authenticated as an admin in the game for this. See [Add Admin](add-admin.md).
::::

## Kick a player

1. <b>Enable admin mode</b><br>
   Press `Esc`, select **Admin Mode: OFF**, enter the admin password and confirm with **Confirm**.

2. <b>Open the social menu</b><br>
   Press the `O` key in the game to open the **Social Screen**.

3. <b>Select the player</b><br>
   Find the player you want to remove in the list.

4. <b>Remove</b><br>
   Select **Remove** and confirm with **Confirm**.

The player is disconnected from the server but can rejoin at any time.

## Ban a player

1. <b>Open the social menu</b><br>
   As an authenticated admin, press the `O` key.

2. <b>Select the player</b><br>
   Find the player you want to lock out in the list.

3. <b>Ban</b><br>
   Select **Ban** and confirm with **Confirm**.

The player is immediately thrown off the server and can no longer connect.

:::: info Note
Nightingale has no time-limited bans. A ban stays in place until you lift it.
::::

## Lift a ban

There is no way to unban someone in the game – you edit the file holding the server state instead.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The file is written on shutdown and read on startup.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open ServerState.ini</b><br>
   Open the following file:

   ```
   /NWX/Saved/Config/LinuxServer/ServerState.ini
   ```

4. <b>Remove the entry</b><br>
   Look for the line starting with `Bans=`. Inside the brackets, delete the entry of the player you want to unban. All other entries and the brackets themselves stay in place.

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Create a [backup](create-backup.md) before editing, or download a copy of the file. A corrupted `ServerState.ini` can prevent the server from loading its state. If you find neither the file nor a `Bans=` line, nobody has been banned on your server yet – both are only created with the first ban.
::::

:::: info Lift all bans at once
If you delete the entire `/NWX/Saved/Config/` folder, the complete server state is reset and with it every ban. The server recreates the folder on the next start.
::::

## No console commands

:::: warning Warning
Nightingale offers **no RCON and no chat commands** for server administration. The console in the dashboard only shows the server's output and does not accept commands. Kicking and banning happen exclusively through the Social Screen in the game.
::::

## No whitelist

:::: warning Warning
Nightingale has **no whitelist feature**. If you want to restrict your server to certain players, set a server password in the dashboard and only share it with those players.
::::
