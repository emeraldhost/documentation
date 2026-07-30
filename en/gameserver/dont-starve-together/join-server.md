---
description: Join a Don’t Starve Together server
---

# How to Join Your Don’t Starve Together Server

There are two ways to join your server: through the in-game server browser or through a direct connection in the console.

## Find connection details

:::: warning Important
For a direct connection you need the **IP address** and the **game port** of your server. You can find both in the dashboard of your server. The ports `master_server_port` and `authentication_port` from the `[STEAM]` section of the `server.ini` file are internal Steam ports and are **not** used to connect.
::::

## Via the in-game server browser

1. <b>Start Don’t Starve Together</b><br>
   Launch the game and wait until you are in the main menu.

2. <b>Open the server browser</b><br>
   Click **Browse Games** in the main menu.

3. <b>Search for your server</b><br>
   Enter the exact name of your server in the search field. This is the value set as `cluster_name` in the `cluster.ini` file.

4. <b>Join the server</b><br>
   Select your server from the list and join. If a server password is set, you will be asked for it afterwards.

:::: info Note
After a start it can take up to 10 minutes for your server to appear in the server browser. Being listed also requires a valid cluster token in the `cluster_token.txt` file. You can create your token in your [Klei account](https://accounts.klei.com/account/game/servers?game=DontStarveTogether).
::::

## Connect directly via the console

1. <b>Start Don’t Starve Together</b><br>
   Launch the game and stay in the main menu.

2. <b>Open the console</b><br>
   Press `~` to open the console.

3. <b>Enter the connect command</b><br>
   Enter the command with the IP address and the game port of your server and confirm with Enter:

   ```
   c_connect("123.45.67.89", 10999)
   ```

4. <b>Connect with a password</b><br>
   If a password is set on your server, add it as the third value:

   ```
   c_connect("123.45.67.89", 10999, "myPassword")
   ```

:::: tip Tip
The IP address and the password always have to be in quotation marks, the port does not. If you leave out the port, the game connects to the default port `10999`. Always enter the port shown in your dashboard — many servers use a different port.
::::
