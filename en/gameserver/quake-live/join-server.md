---
description: Join a Quake Live server
---

# How to Join Your Quake Live Server

Quake Live has no matchmaking. You either connect directly through the in-game console using the IP address and port, or you look for your server in the server browser.

## Find connection details

:::: info Note
You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Quake Live uses the same port for gameplay and for server queries — there is no separate **Query Port**.
::::

## Open the in-game console

The console is the most reliable way onto your server.

1. <b>Start Quake Live</b><br>
   Launch the game and wait until the main menu has loaded.

2. <b>Open the console</b><br>
   Press `~` to open the console.

:::: info Console does not open?
The console key sits to the left of the `1` key — on a German keyboard layout that is the `^` key. Whether the console is available at all is controlled by the client variable `com_allowConsole`, which is set to `1` by default.
::::

## Connect directly via IP

1. <b>Open the console</b><br>
   Open the console in the game.

2. <b>Connect</b><br>
   Enter the following command:

   ```
   connect IP:Port
   ```

   :::: tip Example
   If the dashboard shows the IP `123.45.67.89` and the Game Port `27043`, the command is:

   ```
   connect 123.45.67.89:27043
   ```

   Always use the values from your own dashboard here.
   ::::

3. <b>Enter the server</b><br>
   After connecting you first join the running match as a spectator and can then pick a team.

## Connect to a password-protected server

If you set a **Server Password** in the dashboard, you have to set it in the game before connecting.

1. <b>Set the password</b><br>
   Enter the following command in the console:

   ```
   password YOURPASSWORD
   ```

2. <b>Connect</b><br>
   Then connect as usual:

   ```
   connect 123.45.67.89:27043
   ```

:::: info Reserved slots
Besides the server password, Quake Live supports reserved slots. `sv_privateClients` defines how many slots stay reserved, and `sv_privatePassword` sets the matching password. Players who enter that password with `password` can join even when all regular slots are taken.
::::

## Via the server browser

1. <b>Open the server list</b><br>
   Open the server list from the main menu.

2. <b>Search for the server</b><br>
   Search for the name you set as **Server Name** in the dashboard.

:::: warning Warning
For your server to be listed publicly, **Server Type** in the dashboard has to be set to `2` (Internet). `0` means offline and `1` limits the server to the local network. In addition `sv_master "1"` has to be set — only then does the server register with the master server and answer queries. Connecting directly through the console works regardless of this.
::::

:::: tip Tip
Server tags make it easier to find your server in the browser again. Add them to `/baseq3/server.cfg`, for example:

```
set sv_tags "classic, custom"
```

The tags are offered as filters in the in-game server browser.
::::

:::: tip Tip
To learn how to give yourself admin rights on your server, see [Add Admin](add-admin.md).
::::
