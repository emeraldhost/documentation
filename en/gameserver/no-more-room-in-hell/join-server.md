---
description: Join a No More Room in Hell server
---

# How to Join Your No More Room in Hell Server

There are two ways onto your No More Room in Hell server: through the in-game **server browser** or through a **direct connection** using the developer console. There is no lobby system like in other co-op shooters — joining via IP and port always works.

## Find connection details

:::: info Note
You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. No More Room in Hell uses the same port for gameplay and for server queries — there is **no separate Query Port**.
::::

:::: warning Warning
Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.
::::

## Enable the developer console in the game

The console is disabled by default. You need it for the direct connection.

1. <b>Start No More Room in Hell</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the options</b><br>
   Open the **Options** and switch to the **Keyboard** tab.

3. <b>Open the advanced settings</b><br>
   Click on **Advanced**.

4. <b>Enable the console</b><br>
   Tick **Enable developer console** and confirm with **OK**.

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

## Via the in-game server browser

1. <b>Open the server browser</b><br>
   Start No More Room in Hell and open the server browser in the main menu.

2. <b>Search for your server</b><br>
   Switch to the **Internet** tab and search for the name of your server.

3. <b>Join</b><br>
   Select your server and connect.

## Via Steam favorites

If you cannot find your server in the list, add it directly in Steam.

1. <b>Open Steam</b><br>
   Open the Steam client.

2. <b>Open the server browser</b><br>
   Click on **View** in the top left and select **Game Servers**.

3. <b>Add the server</b><br>
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server and confirm.

5. <b>Join</b><br>
   Select the server and connect. The server then also appears in the favorites section of the in-game server browser.

## Show the server in the public server list

For your server to be listed permanently in the public server list it needs a **Steam Game Server Login Token (GSLT)**.

1. <b>Create a token</b><br>
   Create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID `224260`.

   :::: info Note
   `224260` is the App ID of the game and the correct ID for the token. The server itself is installed under a different App ID — for the GSLT always use `224260`.
   ::::

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Open autoexec.cfg</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md). If it does not exist yet, create it:

   ```
   /nmrih/cfg/autoexec.cfg
   ```

   :::: info Note
   According to the official documentation the token belongs in the `autoexec.cfg`, because that file is already executed when the server starts — that is, before the server logs in to Steam.
   ::::

4. <b>Add the token</b><br>
   Add the following line:

   ```
   sv_setsteamaccount "YOUR-TOKEN"
   ```

5. <b>Start the server</b><br>
   Save the file and start your server. The server console then shows the message `Assigned persistent gameserver Steam ID`.

:::: info Note
If the dashboard of your server offers a dedicated **GSL Token** field, you can enter the token there instead. Every server needs its own token. A direct connection via IP and port works without a token as well.
::::

## Which ports does No More Room in Hell use?

:::: info Note
| Port | Purpose |
|------|---------|
| **Game Port** (UDP) | Gameplay and server queries — this is the port you enter when joining |
| Client port `27005` | Local port on the player's PC, not a server address |
| SourceTV port | Only relevant if you use SourceTV |

You can see the values that apply to your server in the **dashboard**.
::::
