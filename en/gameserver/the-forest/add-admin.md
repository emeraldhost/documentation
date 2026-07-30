---
description: Add an admin to a The Forest server
---

# How to Add an Admin to Your The Forest Server

The Forest has **no admin list with SteamIDs**. Instead there is a single **admin password** for the server: whoever enters it when joining is an admin. So you do not need to collect any IDs – you simply hand the password to the people who should get admin rights.

:::: warning Warning
Everyone who knows the admin password has full admin rights on your server – including commands such as `/ban` and `/shutdown`. Only share it with people you trust and use a different password than your server password.
::::

## Set the admin password

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **Settings**.

2. <b>Enter the admin password</b><br>
   Enter the password you want in the **Admin Password** field.

3. <b>Restart the server</b><br>
   Save the change and restart your server so the new password is applied.

:::: danger Important
A default password is set out of the box. Make sure to change it before your server is publicly reachable – otherwise anyone who knows the default password can gain admin rights.
::::

:::: info Why not in the configuration file?
The matching configuration value is called `serverPasswordAdmin`. However, your server passes the admin password as a start parameter, and start parameters override matching entries from the configuration file. An entry in `config.cfg` would therefore have no effect – only set the password in the dashboard.
::::

## Join as an admin

1. <b>Select your server</b><br>
   Start The Forest, open **Multiplayer → Join Game**, set the source to **Dedicated (Internet)** and select your server. How to find your server is described in [Join Server](join-server.md).

2. <b>Enter the admin password</b><br>
   The password prompt opens. Enter your password in the **Admin Password** field – not in the field for the regular server password.

   :::: info Note
   If a server password is set as well, fill in both fields: the server password on top, the admin password below it.
   ::::

3. <b>Join</b><br>
   Click on **Join** or **Continue**.

## Verify your admin rights

1. <b>Open the chat</b><br>
   Press `Enter` in the game to open the chat.

2. <b>Call up the command list</b><br>
   Enter the following command:

   ```
   /help
   ```

3. <b>Result</b><br>
   If the list of available commands appears, you have admin rights. If nothing happens, the admin password was not entered or entered incorrectly when joining – leave the server and join again.

:::: tip Tip
You can find the commands available to you as an admin and how to remove players in [Kick & Ban Players](kick-ban-players.md).
::::

:::: info Note
Admin rights only apply to the current session. After a lost connection or a server restart you have to enter the admin password again the next time you join.
::::
