---
description: Join a Black Mesa server
---

# How to Join Your Black Mesa Server

Black Mesa has no matchmaking and does not force you through a lobby. You connect to your server directly — through the developer console, through the Steam favorites or through the in-game server browser.

## Find connection details

:::: info Note
You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Black Mesa uses the same port for gameplay and for server queries — there is **no separate Query Port**.
::::

:::: warning Warning
Always enter the **Game Port** from the dashboard. Ports such as `27005` that show up in general Source guides are local client ports of your game and must not be used as a server address.
::::

## Enable the developer console

The console is disabled by default in Black Mesa.

1. <b>Start Black Mesa</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the options</b><br>
   Open the **Options** from the main menu.

3. <b>Enable the console</b><br>
   Enable the **Developer Console** option there.

## Connect through the game console

A direct connection is the most reliable way onto your server.

1. <b>Open the console</b><br>
   Press `~` in the game to open the console.

2. <b>Connect</b><br>
   Enter the following command:

   ```
   connect IP:Port
   ```

   :::: tip Example
   If the dashboard shows the IP `123.45.67.89` and the Game Port `28015`, the command is:

   ```
   connect 123.45.67.89:28015
   ```

   Always use the values from your own dashboard here.
   ::::

## Via Steam favorites

Storing your server in Steam lets you find it again at any time.

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

## Via the in-game server browser

1. <b>Open the server list</b><br>
   Select **Play Online** in the main menu. Black Mesa then opens the server list.

2. <b>Search for your server</b><br>
   Search for your server name in the search field, or switch to the **Favorites** tab if you stored the server in Steam beforehand.

:::: warning Warning
For your server to appear in the public list it has to be running and reachable — and depending on the configuration it needs a valid login token (see below). A direct connection through the console works regardless.
::::

:::: info Server does not show up in the public server list?
Without a valid Steam Game Server Login Token (GSLT) a Source server may not be listed in the public server list. You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID of Black Mesa. Afterwards enter the token in the **dashboard** of your server in the **GSL Token** field and restart the server. Every server needs its own token. A direct connection via IP and Game Port works without a token as well.
::::

:::: tip Tip
To learn how to give yourself admin rights on your server, see [Add Admin](add-admin.md).
::::
