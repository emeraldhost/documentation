---
description: Find and fix common problems on a The Bus server
---

# How to Troubleshoot Common Problems on Your The Bus Server

If your server does not show up in the server list, players cannot join or the server no longer starts after an update, the cause is usually one of a few typical problems. This guide shows you the most common problems, their cause and the matching solution.

:::: danger Important
Create a [backup](create-backup.md) before every change to your server. This way you can always return to the last working state.
::::

## Check the log first

Almost every problem leaves traces in the server output. The console in the dashboard shows the content of the log file `/TheBus/Saved/Logs/TheBus.log` live – including all warnings and errors. The last lines before a crash are usually the important ones.

:::: info Note
On our servers, the console only shows the server output and does not accept commands. As Owner or Admin, you enter commands in the in-game chat.
::::

To download the full log:

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Download the log</b><br>
   Open the `/TheBus/Saved/Logs/` folder and download the `TheBus.log` file.

:::: tip Tip
When you create a support ticket, include the matching error message from the console or the log right away – this way the team can help you much faster.
::::

## Server does not appear in the server list

**Symptom:** Your server is running, but you cannot find it in the public server list in the game.

**Cause:** If the **Serverliste** (server list) field in the settings is set to `0`, your server is hidden from the public server list.

**Solution:**

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to **Settings**.

3. <b>Enable the server list</b><br>
   Set the **Serverliste** field to `1`.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: tip Tip
Regardless of the server list, your players can always join directly. Since Early Access Update 3.0, servers can be found via their ID instead of the IP address: on startup, the console shows the message `Server can be reached with the GUID` with the GUID of your server. How to join with it is shown in [Join Server](join-server.md).
::::

## Players cannot join

**Symptom:** Your server is visible in the list or reachable via GUID, but players cannot join it.

**Cause:** Typical reasons are:

- **Different versions**: After an update, the server and the game run different versions.
- **Server password set**: If a password is entered in the **Server Passwort** (server password) field in the settings, players have to enter it when joining.
- **Missing DLC**: If your server runs a DLC map such as **Hamburg** (Hamburg City DLC) or a DLC is required for joining, all players need to own this DLC.
- **Console instead of PC**: The Bus multiplayer is only available on PC. Players on PlayStation 5 or Xbox Series X|S cannot join a server.

**Solution:**

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to **Settings**.

3. <b>Check Auto Update</b><br>
   Check whether the **Auto Update** field is set to `1`. Only then is your server updated automatically on every start.

4. <b>Check the password</b><br>
   Check the **Server Passwort** field. Share the password with your players or leave the field empty if your server should be reachable without a password.

5. <b>Restart the server</b><br>
   Save the setting and restart your server so that it is brought to the current version.

6. <b>Update the game</b><br>
   All players also have to bring their game to the current version in Steam.

7. <b>Check DLCs</b><br>
   Check which DLCs are active or required on your server, see [Activate DLC](activate-dlc.md) and [Add DLC Map](add-dlc-map.md).

:::: info Note
Mods that are installed on the server and are also needed on the player side must be installed by all players as well. More on this in [Add Mods](add-mods.md).
::::

## Server crashes or does not start after an update

**Symptom:** Your server crashes shortly after starting or no longer starts after an update.

**Cause:** Common triggers are:

- **Mods that do not match the version**: The Bus marks mods built with a different minor game version as "potentially incompatible". After an update, such mods can cause problems.
- **Error in ServerSettings.cfg**: The `/TheBus/Settings/ServerSettings.cfg` file is in JSON format. A single missing or extra comma can prevent the settings from being read correctly.

**Solution:**

1. <b>Check the log</b><br>
   Read the last lines before the crash in the console or the log. They often tell you which file or which mod causes the error.

2. <b>Check the last changed file</b><br>
   If you edited `ServerSettings.cfg` shortly before the problem, check its content with a JSON formatter such as [JSONLint](https://jsonlint.com/). If in doubt, undo your change.

### Test without mods

If you cannot find the cause, start your server without mods as a test. If it then runs stably, the problem lies with a mod.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Move the mods out</b><br>
   Create a folder in the main directory of your server, e.g. `mods-test`, and move the content of the `/TheBus/Mods/` folder into it.

   :::: warning Warning
   Do not delete the mods, only move them. This way you can put them back after the test.
   ::::

4. <b>Start the server</b><br>
   Start your server via the dashboard and watch the console.

5. <b>Put the mods back one by one</b><br>
   If the server runs stably, stop it, put one mod back into `/TheBus/Mods/` and start the server again. Repeat this for each mod until you find the mod that causes the crash.

:::: tip Tip
Check in the Steam Workshop whether there is an updated version of the affected mod for the current game version.
::::

## Server does not run smoothly

**Symptom:** Your server stutters, or buses and traffic do not move smoothly.

**Cause:** The more traffic is on the map, the more the server has to calculate – a lower traffic density can help.

**Solution:**

1. <b>Check the performance</b><br>
   As Owner or Admin, enter the following command in the in-game chat:

   ```
   /tickrate
   ```

   The server then writes its tickrate to the log every 10 seconds. You can see the values live in the console of the dashboard.

2. <b>Lower the traffic density</b><br>
   Lower the traffic density on your server, see [Change Traffic](change-traffic.md).

3. <b>Remove uncontrolled buses</b><br>
   If there are many unused buses on the map, remove all buses that are currently not controlled by a player with `/clearBusses`. More on this in [Spawn Bus](spawn-bus.md).

## Settings are reset after a restart

**Symptom:** You changed the server name, passwords, max players or the visibility in the server list in the game or directly in `ServerSettings.cfg`, but after a restart the old values are back.

**Cause:** On every start, the dashboard writes the values from **Settings** into the `/TheBus/Settings/ServerSettings.cfg` file. The keys `serverName`, `serverPassword`, `adminPassword`, `listServerAsPublic` and `maxPlayerCount` are overwritten in the process.

**Solution:**

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to **Settings**.

3. <b>Change the values</b><br>
   Change the values in the **Server Name**, **Server Passwort**, **Admin Passwort**, **Maximale Spieler** or **Serverliste** fields.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: info Note
The dashboard does not overwrite any other entries of `ServerSettings.cfg`. More on this in [Configure Server](configure-server.md).
::::

## GUID does not work

**Symptom:** Players cannot reach your server via the GUID shown in the console.

**Cause:** In versions before version 1.1 (June 2026), a wrong server GUID was shown on first start. If your server still runs an older version, e.g. because **Auto Update** is set to `0`, this bug can occur.

**Solution:**

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to **Settings**.

3. <b>Enable Auto Update</b><br>
   Set the **Auto Update** field to `1` so that your server is brought to the current version.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

5. <b>Read the GUID again</b><br>
   Read the GUID from the `Server can be reached with the GUID` message in the console again and use it to join, see [Join Server](join-server.md).
