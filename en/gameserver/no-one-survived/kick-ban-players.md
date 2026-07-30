---
description: Kick and ban players on a No One Survived server
---

# How to Kick and Ban Players on Your No One Survived Server

On a No One Survived server you remove players through the **in-game admin panel**. There are no documented chat or console commands for this.

:::: info Note
These functions are only available to players who signed in with the admin password. See [Add Admin](add-admin.md).
::::

## Kick a player

1. <b>Join as an admin</b><br>
   Join your server – see [Join Server](join-server.md).

2. <b>Open the admin panel</b><br>
   Press `Alt` + `Shift` + `O` at the same time, enter the admin password and confirm your input.

3. <b>Open the blacklist</b><br>
   Switch to the **Blacklist** tab in the panel.

4. <b>Refresh the player list</b><br>
   Click **Refresh** so the currently connected players get loaded.

5. <b>Kick the player</b><br>
   Click **Kick Out** next to the player in question. The player gets disconnected from the server and can rejoin at any time.

## Ban a player

1. <b>Open the blacklist</b><br>
   Open the admin panel with `Alt` + `Shift` + `O`, sign in and switch to the **Blacklist** tab.

2. <b>Refresh the player list</b><br>
   Click **Refresh**.

3. <b>Ban the player</b><br>
   Click **Add to Blacklist** next to the player in question. The player gets disconnected from the server and can no longer join.

## Remove a ban

1. <b>Open the blacklist</b><br>
   Open the admin panel with `Alt` + `Shift` + `O`, sign in and switch to the **Blacklist** tab.

2. <b>Remove the ban</b><br>
   Find the banned player in the list and click **Remove** next to them. Afterwards they can rejoin your server immediately.

:::: info Note
The exact naming of the tabs and buttons can change with game updates. Look for the overview of connected and blocked players in the admin panel.
::::

:::: warning The player has to be connected
Kicking and banning requires the player to appear in the panel's list. You cannot block a player in advance who is currently not on the server.
::::

:::: danger Do not lock yourself out
If you accidentally add yourself to the blacklist, you can no longer reach your server and therefore no longer reach the admin panel either. A file for editing the blacklist over SFTP is **not documented** for No One Survived – so proceed carefully when banning.
::::

## No commands and no RCON

:::: danger Important
There is **no server console, there are no chat commands and there is no RCON** documented for No One Survived. Everything related to kicking and banning runs through the in-game admin panel. Commands such as `Kick <player>`, `Ban <player>` or `Unban <player>` do not appear in the official documentation – do not rely on circulated command lists.
::::

:::: tip Tip
If you generally want to restrict your server to specific players, set a server password and only share it with those people. There is no whitelist in No One Survived.
::::
