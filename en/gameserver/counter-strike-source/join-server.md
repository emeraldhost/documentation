---
description: Join a Counter-Strike Source server
---

# How to Join Your Counter-Strike Source Server

There are three ways onto your Counter-Strike Source server: through the **in-game server browser**, through the **Steam favorites** or with a **direct connection** in the game console.

## Find connection details

:::: info Note
You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Counter-Strike Source uses the same port for gameplay and for server queries — there is **no separate Query Port**.
::::

:::: warning Warning
Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.
::::

## Through the in-game server browser

1. <b>Start Counter-Strike Source</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the server search</b><br>
   Select **Find Servers** in the main menu.

3. <b>Add the server</b><br>
   Switch to the **Favorites** tab and click on **Add a Server**.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   :::: tip Example
   ```
   123.45.67.89:27015
   ```

   Use the IP address and the Game Port from your dashboard here.
   ::::

5. <b>Join the server</b><br>
   Confirm your entry. Your server then appears in the favorites list, where you can select it and join.

## Via Steam favorites

1. <b>Open Steam</b><br>
   Open the Steam client.

2. <b>Open the server browser</b><br>
   Click on **View** in the top left and select **Game Servers**.

3. <b>Add the server</b><br>
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server and confirm.

5. <b>Join</b><br>
   Select the server and connect. The server then also appears in the game under **Find Servers** in the **Favorites** tab.

## Enable the developer console in the game

The console is disabled by default in Counter-Strike Source. You need it for the direct connection.

1. <b>Start Counter-Strike Source</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the settings</b><br>
   Open the **Options** and switch to **Keyboard**.

3. <b>Enable the console</b><br>
   Open **Advanced** and enable the **Developer Console** there.

:::: tip Tip
Alternatively you can enable the console permanently with the launch option `-console`. Add it in Steam by right-clicking the game and opening **Properties** → **Launch Options**.
::::

## Connect through the game console

1. <b>Open the console</b><br>
   Press `~` in the game to open the console.

2. <b>Connect</b><br>
   Enter the following command:

   ```
   connect IP:Port
   ```

   :::: tip Example
   ```
   connect 123.45.67.89:27015
   ```

   Use the IP address and the Game Port from your dashboard here.
   ::::

:::: info Server does not show up in the public server list?
Without a valid Steam Game Server Login Token (GSLT) your server may not be listed in the public server list and does not use VAC. You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID `240`. Afterwards enter it in the **dashboard** of your server and restart the server. Every server needs its own token. A direct connection via IP and Game Port works without a token as well.
::::
