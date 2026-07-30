---
description: Add an admin to a BATTALION Legacy server
---

# How to Add an Admin to Your BATTALION Legacy Server

BATTALION Legacy has **no admin list with SteamIDs**. Instead there is a single **admin password** for the server: whoever enters it through the in-game console is an admin. So you do not need to collect any IDs — you simply hand the password to the people who should get admin rights.

:::: warning Caution
Everyone who knows the admin password can run every admin command on your server — for example changing the map or changing server settings at runtime. Only share it with people you trust.
::::

## Set the admin password

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **Settings**.

2. <b>Enter the password</b><br>
   Enter the password you want in the **Admin Password** field.

3. <b>Restart the server</b><br>
   Save the change and restart your server. The password is passed on at startup and therefore only takes effect after a restart.

:::: danger Important
A default password is set out of the box. Make sure to change it before your server is publicly reachable — otherwise anyone who knows the default password can gain admin rights.
::::

:::: info Why not in the configuration file?
The shipped server files do contain an `AdminPassword` entry, but your server receives the admin password as a startup parameter on every start. Therefore only set the password in the **dashboard**.
::::

## Enable the developer console

You enter the admin commands through the in-game developer console. It is disabled by default and has to be enabled once.

:::: info Note
This step concerns your own PC, not the server. Every admin has to do it once on their own machine.
::::

1. <b>Close the game</b><br>
   Close BATTALION Legacy so your change is not overwritten when the game exits.

2. <b>Open the configuration folder</b><br>
   Open the following folder on your PC. You can paste the path straight into the address bar of the Explorer:

   ```
   %LOCALAPPDATA%\Battalion\Saved\Config\WindowsClient
   ```

3. <b>Open Input.ini</b><br>
   Open the file `Input.ini` in a text editor. If it does not exist yet, create it.

4. <b>Set the console key</b><br>
   Add the following two lines at the end of the file:

   ```ini
   [/script/engine.inputsettings]
   ConsoleKey=Tilde
   ```

5. <b>Save and start</b><br>
   Save the file and start BATTALION Legacy again.

## Log in as an admin

1. <b>Join the server</b><br>
   Join your server. How to find it is described in [Join Server](join-server.md).

2. <b>Open the console</b><br>
   Press the `~` key in the game to open the console.

3. <b>Log in</b><br>
   Enter the following command and replace `<password>` with your admin password:

   ```
   Server.Login <password>
   ```

4. <b>Result</b><br>
   From now on the server accepts your admin commands. If nothing happens when you run a command, the login was not successful — check the password and log in again.

:::: info Note
The login only applies to the current session. After a server restart or after joining again you have to log in with `Server.Login` once more.
::::

## Use admin commands

All admin commands start with `Server.` and are entered in the same console. Upper and lower case do not matter.

| Command | Effect |
|---------|--------|
| `Server.Login <password>` | Logs you in as an admin |
| `Server.ChangeMap <map> <mode>` | Switches to a different map and game mode |
| `Server.Config.<variable> <value>` | Changes a server setting at runtime, for example `Server.Config.NumBots 0` |
| `Server.KillBots` | Removes the bots from the current round |
| `Server.Announce <message>` | Shows an on-screen message to every player |
| `Server.Pause` | Stops the round timer without blocking the players |

:::: info Where do these commands come from?
`Server.Login` is documented in the shipped server files themselves. The remaining commands come from the official server documentation of BATTALION 1944, the predecessor of BATTALION Legacy. Which of them your server build still knows is not guaranteed — check with the autocompletion if in doubt.
::::

:::: tip Tip
Type just `Serve` in the console. The autocompletion then shows you all `Server.*` commands your game actually knows. That is the most reliable way to see the full command set.
::::

:::: info Map names for `Server.ChangeMap`
For the **Wartide** mode the server files list these maps: `Coastal`, `Derailed`, `Docks`, `Invasion`, `Liberation`, `Manorhouse_V2`, `Savoia` and `Vanguard`. Write the map name exactly like that — with the underscore in `Manorhouse_V2`.

The official documentation of BATTALION 1944 passes the mode as a short code; its example reads `Server.ChangeMap Liberation WRT` for Wartide.
::::

:::: info Note
Not every change made through `Server.Config.<variable>` takes effect right away — the official documentation of BATTALION 1944 points this out as well. If a value does not change, a map change via `Server.ChangeMap` usually helps.
::::

## Kick and ban players

:::: warning Caution
There is no ban function in the **dashboard**, and no admin command for blocking players permanently is documented for BATTALION Legacy. The official server documentation of BATTALION 1944 only mentions a separate RCon tool for this, which creates a blacklist file — whether that tool is still part of the BATTALION Legacy server files is not documented.

For kicking, the official server documentation of BATTALION 1944 lists the commands `Server.KickPlayerByName <name>`, `Server.KickPlayerBySteamID <SteamID>` and `Server.DisconnectAll`. Whether they still exist in the current build of BATTALION Legacy is not documented — check it as a logged-in admin through the autocompletion in the console.

If that does not help, your only remaining option is to restart or temporarily stop your server through the dashboard.
::::
