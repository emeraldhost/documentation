---
description: "Join an s&box server"
---

# How to Join Your s&box Server

There are three ways onto your server: through the in-game server browser, through a direct connection using the IP address, and through the lobby ID of your server.

:::: info Note
You do not have to install anything on your PC. s&box downloads the game mode, the map and all other content automatically when you join — missing content including the game code is sent to you directly by the server.
::::

## Find connection details

:::: danger Important
You can find the IP address as well as the **Game Port** and the **Query Port** of your server in the **dashboard** of your server. To connect, always use the **Game Port**, not the Query Port.
::::

## Via the in-game server browser

1. <b>Start s&box</b><br>
   Launch s&box and wait until the main menu has loaded.

2. <b>Open the server list</b><br>
   Select **Servers** in the menu.

3. <b>Search for your server</b><br>
   Type the name of your server into the **search field on the left-hand side**. The filter at the top is not the name search.

4. <b>Check the filters</b><br>
   If your server is still empty or already full, enable the **Show Empty** or **Show Full** options. Otherwise it will not be listed.

5. <b>Join the server</b><br>
   Click the icon next to the server name to join.

:::: info Note
The server browser queries your server through the **Query Port**. That is where the server name, map and player count come from. The actual connection is then made through the **Game Port**.
::::

## Connect directly via the console

1. <b>Enable the console</b><br>
   Open the settings in s&box and enable the **Console Overlay** in the keyboard settings.

2. <b>Open the console</b><br>
   Press the key to the left of `1` (`` ` `` or `^`).

3. <b>Enter the connect command</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```
   connect <IP address>:<Game Port>
   ```

   :::: tip Example
   ```
   connect 123.45.67.89:27031
   ```
   ::::

:::: warning Warning
Always include the port. If you leave it out, the game automatically appends the port configured locally on your side — which usually does not match the Game Port of your server.
::::

## Connect via the lobby ID

By default s&box routes connections through the Steam relay. The IP address of your server is not exposed in that case, which is why Facepunch themselves recommend using the lobby ID. It changes with every server start.

1. <b>Open the server console</b><br>
   Open the dashboard of your server and switch to the **server console**.

2. <b>Query the status</b><br>
   Enter the following command:

   ```
   status
   ```

3. <b>Copy the lobby ID</b><br>
   The output contains the lobby ID of your server. Copy it.

4. <b>Connect in the game</b><br>
   Open the console in the game and pass the lobby ID without any prefix:

   ```
   connect 109775241234567890
   ```

:::: info Note
If `status` reports **Not Connected**, the game mode has not created a lobby yet. Wait until the server has fully started and query the status again.
::::

## Which ports does s&box use?

:::: info Note
| Value | Purpose |
|-------|---------|
| Game Port | Players connect through this port. It is the one that goes after the colon in `connect`. |
| Query Port | The server is queried through this port: server name, map and player count in the server browser. |

You can see which ports apply to your server in the **dashboard**.
::::

:::: tip Tip
If your server cannot be found in the browser, use the lobby ID. That route works regardless of whether your server shows up in the public list.
::::
