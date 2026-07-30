---
description: Add an admin to a Nightingale server
---

# How to Add an Admin to Your Nightingale Server

Nightingale has **no admin list with Steam or Epic IDs**. Instead there is a single **admin password** for the server: whoever enters it in the game unlocks admin mode for themselves. So you do not need to collect any IDs – you simply hand the password to the people who should get admin rights.

:::: warning Warning
Everyone who knows the admin password can kick and ban players on your server. Only share it with people you trust and use a different password than your server password.
::::

## Set the admin password

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **Settings**.

2. <b>Enter the admin password</b><br>
   Enter the password you want in the **Admin Password** field.

3. <b>Restart the server</b><br>
   Save the change and restart your server so the new password is applied.

:::: danger Important
If a password is already pre-filled in the field, make sure to replace it with your own before your server is publicly reachable – otherwise anyone who knows the pre-filled value can gain admin rights.
::::

:::: info Why not in the configuration file?
The admin password is stored in `/NWX/Config/ServerSettings.ini` in the line `AdminPassword=`. However, your server rewrites that line from the dashboard field on **every start**. A manual change in the file would be gone again after the next start – so only set the password in the dashboard. The same applies to the server password (`Password=`) and the difficulty (`StartingDifficulty=`).
::::

## Enable admin mode in the game

1. <b>Join the server</b><br>
   Connect to your server. How to do that is described in [Join Server](join-server.md).

2. <b>Open the menu</b><br>
   Press `Esc` in the game to open the menu.

3. <b>Select Admin Mode</b><br>
   Select the entry **Admin Mode: OFF**.

4. <b>Enter the password</b><br>
   Enter the admin password of your server and confirm with **Confirm**.

5. <b>Check the result</b><br>
   If the menu now shows **Admin Mode: ON**, you are authenticated as an admin.

## Disable admin mode again

1. <b>Open the menu</b><br>
   Press `Esc` and select the entry **Admin Mode: ON**.

2. <b>Confirm</b><br>
   Confirm with **Confirm**.

3. <b>Rejoin</b><br>
   Leave the server and join again so the change takes effect.

:::: info Note
Admin mode only applies to the current session and the current connection. After a lost connection or a server restart you enable it again the next time you join.
::::

:::: tip Tip
How to remove players from your server as an admin is described in [Kick & Ban Players](kick-ban-players.md).
::::

## What admin mode can do – and what it cannot

:::: info Note
In Nightingale, admin mode exists to **kick and ban players**. There are no classic admin chat commands, and the console in the dashboard only shows the server's output – it does **not** accept commands.
::::

:::: warning Cheat and debug menu
Separate from this there is the cheat and debug menu. You do **not** need it for kicking and banning. If you want to use it on your server, three things are required:

- Enable it on the server through the **Enable Cheats** variable in the dashboard.
- Additionally start your client with the `-EnableCheats` launch option. Add it in Steam under **Library → Nightingale → Properties → Launch Options**.
- Authenticate in the game with the admin password as described above.
::::
