---
description: Join a Left 4 Dead 2 server
---

# How to Join Your Left 4 Dead 2 Server

Left 4 Dead 2 is built around lobbies. The most reliable ways onto your own server are a **direct connection** through the game console or the **Steam favorites**.

:::: danger Important
For players to be able to join directly, the line `sv_allow_lobby_connect_only "0"` has to be set in your `server.cfg`. If it is set to `1`, joining is only possible through a matchmaking lobby and every direct connection fails. How to set it is described below.
::::

## Find connection details

:::: info Note
You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Left 4 Dead 2 uses the same port for gameplay and for server queries — there is **no separate Query Port**.
::::

:::: warning Warning
Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.
::::

## Allow direct connections on the server

You only have to do this once.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open server.cfg</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /left4dead2/cfg/server.cfg
   ```

4. <b>Enable direct connections</b><br>
   Add the following line or set it to `0`:

   ```
   sv_allow_lobby_connect_only "0"
   ```

   :::: info Note
   The engine describes the value as follows: if it is set to `1`, players may only join the server from a matchmaking lobby and may not connect directly.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

## Enable the developer console in the game

The console is disabled by default in Left 4 Dead 2.

1. <b>Start Left 4 Dead 2</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the settings</b><br>
   Open the **Options** and switch to **Keyboard/Mouse**.

3. <b>Enable the console</b><br>
   Enable the **Developer Console** there.

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
   Select the server and connect. The server then also appears in the favorites section inside the game.

:::: info Server does not show up in the public server list?
Without a valid Steam Game Server Login Token (GSLT) your server may not be listed in the public server list and does not use VAC. You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID `550`. Afterwards enter it in the **dashboard** of your server under **Settings** in the **GSL Token** field and restart the server. Every server needs its own token. A direct connection via IP and port works without a token as well.
::::
