---
description: Add an admin on a Palworld server
---

# How to Add an Admin on Your Palworld Server

You can grant admin rights to yourself and other players using an Admin Password.

## Set Admin Password

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Set Admin Password</b><br>
   Enter the desired Admin Password and save the setting.

4. <b>Restart the server</b><br>
   Restart your server for the change to take effect.

:::: warning Warning
Do not set the Admin Password directly in the `PalWorldSettings.ini`, as it will be overwritten by the web interface on the next server start.
::::

## Log in as admin

1. <b>Join the server</b><br>
   Join your server.

2. <b>Open chat</b><br>
   Press `Enter` to open the chat.

3. <b>Admin login</b><br>
   Enter the following command:

   ```
   /AdminPassword YourAdminPassword
   ```

:::: info Note
The admin login only lasts for the current session. After reconnecting you need to enter the command again.
::::

:::: tip Tip
Only share the Admin Password with trusted players. Anyone with the password can grant themselves admin rights.
::::
