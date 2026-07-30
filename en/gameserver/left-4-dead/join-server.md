---
description: Join a Left 4 Dead server
---

# How to Join Your Left 4 Dead Server

Left 4 Dead is built around lobbies. The most reliable ways onto your own server are a **direct connection** through the game console or the **Steam favorites**.

:::: danger Important
For players to be able to join directly, the line `sv_allow_lobby_connect_only "0"` has to be set in your `server.cfg`. The default value is `1` — in that case joining is only possible through a matchmaking lobby and every direct connection fails. How to set it is described below.
::::

## Find connection details

:::: info Note
You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Left 4 Dead uses the same port for gameplay and for server queries — there is **no separate Query Port**.
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
   /left4dead/cfg/server.cfg
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

The console is disabled by default in Left 4 Dead.

1. <b>Start Left 4 Dead</b><br>
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

## Onto your own server from a lobby

If you want to start a campaign from a lobby the usual way but play on your own server, there are two options.

### Set a search key

A search key restricts the server search started from a lobby to servers using the same key.

1. <b>Set the key on the server</b><br>
   Add the following line to `/left4dead/cfg/server.cfg` and restart the server:

   ```
   sv_search_key "mykey"
   ```

2. <b>Set the key in the game</b><br>
   Every player in the lobby enters the same value in the game console:

   ```
   sv_search_key "mykey"
   ```

3. <b>Start the campaign</b><br>
   When the lobby then starts a campaign, only servers using this key are searched.

### Force a specific server

Alternatively the lobby leader points the lobby at the server directly. The command is entered in the **game console**, not on the server:

```
mm_dedicated_force_servers 123.45.67.89:27015
```

:::: info Note
The command expects a comma-delimited list of `IP:Port` entries. Instead of searching for public servers, the lobby then only uses the servers listed there. Use the IP address and the Game Port from your dashboard here as well.
::::

:::: warning Warning
The search key only applies to the server search started from a lobby. You cannot search for it in the public server list — when in doubt, use the direct connection or the Steam favorites.
::::
