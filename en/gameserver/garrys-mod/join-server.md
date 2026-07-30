---
description: Join a Garry's Mod server
---

# How to Join Your Garry's Mod Server

## Find connection details

:::: info Note
You can find the **IP address** and the **port** of your server in the **dashboard**. Garry's Mod uses the same port for gameplay and for server queries — there is no separate query port you would have to enter. By default this is port `27015`.
::::

## Via the in-game Legacy Browser

1. <b>Start Garry's Mod</b><br>
   Launch Garry's Mod.

2. <b>Open the server search</b><br>
   Select **Find Multiplayer Game** in the main menu and then **Legacy Browser**.

3. <b>Add server</b><br>
   Click **Add a Server** and enter the IP address and port of your server.

   :::: tip Example
   ```
   123.45.67.89:27015
   ```
   ::::

4. <b>Add to favorites</b><br>
   Confirm with **Add this address to favorites**.

5. <b>Join the server</b><br>
   Select your server in the favorites list and click **Connect**.

## Via the Steam server browser

1. <b>Open Steam</b><br>
   Open the Steam client.

2. <b>Open server browser</b><br>
   Click on **View** in the top left and select **Game Servers**.

3. <b>Add server</b><br>
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. <b>Enter server address</b><br>
   Enter the IP address and the port of your server and confirm with **OK**.

5. <b>Connect</b><br>
   Select the server and click **Connect**.

## Via the game console

1. <b>Start Garry's Mod</b><br>
   Launch Garry's Mod.

2. <b>Open the console</b><br>
   Press `~` to open the console.

3. <b>Connect</b><br>
   Enter the following command:

   ```
   connect IP:Port
   ```

   :::: tip Example
   ```
   connect 123.45.67.89:27015
   ```
   ::::

:::: warning Caution
Always enter the **Game Port** of your server. Port `27005` is the local client port of your game and must not be used as a server address.
::::

:::: info Server not showing up in the public server list?
Since May 2020, Garry's Mod servers without a Steam Game Server Login Token (GSLT) receive a severe penalty in the server list ranking. You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using app ID `4000`. Then enter it in the **dashboard** of your server under **Settings** in the **Steam Account Token** field and restart the server. The server then starts with the parameter `+sv_setsteamaccount <Token>`. Every server needs its own token. Connecting directly via IP and port works without a token as well.
::::
