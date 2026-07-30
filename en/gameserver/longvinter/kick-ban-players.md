---
description: Kick and ban players on a Longvinter server
---

# How to Kick and Ban Players on Your Longvinter Server

You remove players from a Longvinter server through the **admin panel inside the game**. There are no chat or console commands for this.

:::: info Note
You need admin rights to open the admin panel. See [Add Admin](add-admin.md).
::::

## Kick or ban a player

1. <b>Join as an admin</b><br>
   Connect to your server – see [Join Server](join-server.md).

2. <b>Open the admin panel</b><br>
   Press `ESC` and click on **Admin panel** in the top left.

3. <b>Open the player list</b><br>
   Switch to the **Current Players** tab. It shows every player currently on your server.

4. <b>Select the player</b><br>
   Click the **plus icon** next to the player you want to remove.

5. <b>Choose the action</b><br>
   Select **Kick** or **Ban**:

   - **Kick** disconnects the player from the server. They can rejoin at any time.
   - **Ban** locks the player out permanently. They can only connect again once you lift the ban.

## Unban a player

1. <b>Open the admin panel</b><br>
   Press `ESC` in the game and click on **Admin panel** in the top left.

2. <b>Open the ban list</b><br>
   Switch to the **Banned ID's** tab. It lists all banned players with their EOS ID.

3. <b>Remove the ban</b><br>
   Click **UnBan** next to the EOS ID you want to unblock.

:::: info Note
The ban list is stored on your server and survives a restart. It can only be edited through the admin panel – there is no documented way to reset all bans at once through a file.
::::

## No kick and ban commands in chat

:::: warning Warning
You kick and ban players exclusively through the admin panel. There are **no chat commands** and **no RCON** for it. The console in the dashboard does not accept game commands either – it only shows the server output. Circulating command lists containing entries such as `/kick`, `/ban` or `/announce` are not backed by any source and do not work. Other admin chat commands such as `/noclip` or `/give` do exist – but there is no way around the admin panel for removing players.
::::

:::: tip Tip
If you want to keep your server restricted to certain players, set a server password in the **dashboard** and share it only with them. Keep in mind that the password may only contain letters and numbers.
::::
