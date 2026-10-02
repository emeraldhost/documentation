---
description: Find and fix common problems on an Arma Reforger server – startup errors, server browser, versions, mods, crossplay, RCON and admin login
---

# How to Troubleshoot Common Problems on Your Arma Reforger Server

If your Arma Reforger server does not start, does not show up in the server browser or players cannot join, the cause is usually one of a few typical problems. This guide shows you the most common problems, their cause and the matching solution.

:::: danger Important
Create a [backup](../create-backup.md) before every change to your server. This way you can always return to the last working state.
::::

## Check the logs first

Almost every problem leaves traces in the server output. Before you change anything, take a look at it:

- **Console**: In the dashboard you can see the server output live. The last lines before a crash or abort are usually the important ones.
- **Log files**: The complete logs are located in the `profile` folder in the root directory of your server. How to find and read them is shown in [Read Server Log](read-server-log.md).

:::: tip Tip
When you create a support ticket, attach the relevant log file right away – this helps the team help you much faster.
::::

## Server does not start after a change to config.json

**Cause:** The `config.json` is no longer valid JSON – a single missing or extra comma, a missing bracket or a missing quotation mark is enough.

If the server starts but a setting has no effect, the spelling is often the cause: the server distinguishes between upper and lower case in the parameters in `config.json`. A key with the wrong spelling, e.g. `vonDisableUI` instead of `VONDisableUI`, is a different parameter for the server and does not work as intended.

**Solution:**

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Check config.json</b><br>
   Open the file `config.json` in the root directory of your server and copy its content into a JSON formatter like [JSONLint](https://jsonlint.com/). The formatter shows you the line that contains the error.

4. <b>Fix the error</b><br>
   Correct the reported spot and also check the spelling of the keys you changed. You can find the correct spelling in [Configure Server](configure-server.md).

5. <b>Start the server</b><br>
   Save the file and start your server. Check in the console whether it now starts without errors.

:::: info Note
Some values in `config.json` – e.g. server name, passwords, scenario ID, maximum number of players, visibility, third person and Battle-Eye – are overwritten by the dashboard with the values from the **Settings** on every server start. Always change these values in the dashboard, not in the file.
::::

## Server is not shown in the server browser

**Cause:** In the settings, **Visible in Server Browser** is set to `false`. Also check in the console whether the start has finished before you look for the server in the list.

**Solution:**

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enable visibility</b><br>
   Set the **Visible in Server Browser** field to `true`.

4. <b>Restart the server</b><br>
   Save the setting and restart your server. Wait until the server has fully started in the console, then refresh the server list in the game.

:::: tip Tip
Regardless of the server browser, your players can also join directly via IP and port. How this works is shown in [Join Server](join-server.md).
::::

## Version mismatch when joining

**Cause:** Players get a message about a mismatching version when joining, or the server stays on an old version although the game has already been updated. Usually **Auto Update** is set to `0` in the settings – then the server is not updated on start.

**Solution:**

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enable Auto Update</b><br>
   Set the **Auto Update** field to `1`.

4. <b>Restart the server</b><br>
   Save the setting and restart your server. The server is brought to the current version in the process.

You can find more about this in [Control Automatic Updates](control-automatic-updates.md).

## Mod download fails and the server does not start

**Cause:** A `modId` is misspelled or an entered `version` does not exist (anymore) in the Workshop. By default, every listed mod is required for the server to start – if it cannot be loaded, the server does not start.

**Solution:**

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Check mod entries</b><br>
   Open the file `config.json` and compare the `modId` and `version` of each mod with the information in the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop). You can see which mod is affected in the console or in the [server log](read-server-log.md).

4. <b>Start the server</b><br>
   Save the file and start your server.

### Mark optional mods

You can mark mods that your server can also run without as optional with `"required": false`. If such a mod cannot be loaded from the Workshop, the server automatically removes it from the list, writes a warning to the log and starts anyway.

:::: tip Example
```json
"mods": [
  {
    "modId": "59655E11FDD04B97",
    "name": "Raid on Saint Pierre",
    "required": false
  }
]
```
::::

:::: warning Warning
Only mark mods as optional that are not needed for your scenario. If, for example, the mod containing your workshop scenario is missing, the server cannot load the scenario.
::::

### Bring mods to the latest version

If a mod has a fixed `"version"` in `config.json`, your server stays on exactly this mod version – even if a newer one has long been released in the Workshop. If you want to use the latest version, you have two options:

- **Update the version:** Enter the current version number from the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) – just as [Change Scenario](change-scenario.md) describes for workshop scenarios.
- **Leave out the version:** The `"version"` parameter is optional. If it is missing, the server automatically uses the latest version of the mod.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Adjust the mod version</b><br>
   Open the file `config.json` and update the `"version"` of the mod in the `"mods"` section or remove the line completely.

   :::: tip Example
   ```json
   "mods": [
     {
       "modId": "596338F447D34E39",
       "name": "NightOps - Everon 1985"
     }
   ]
   ```
   ::::

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – if you remove the last line of an entry, the comma in the line before it must go as well.
   ::::

4. <b>Start the server</b><br>
   Save the file and start your server.

How to add mods is shown in [Add Mods](add-mods.md).

## Console players cannot join

**Cause:** The dashboard enables crossplay automatically on every server start. If players on Xbox or PlayStation 5 still cannot join, the mods of your server can be the cause: not every mod is available on every platform.

**Solution:**

- Check in the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) whether all mods of your server are available on your players' platform, and remove mods that are not.
- If in doubt, briefly test without mods whether console players can join then. This shows you whether the mods are the cause.
- Keep **Battle-Eye** enabled (`true`) in the settings. Without BattlEye, your server does not appear in the server browser on PlayStation 5.

You can find more about this in [Enable Crossplay](enable-crossplay.md).

## RCON does not work

**Cause:** RCON only starts if a valid password is set. The password must be at least 3 characters long and must not contain spaces – otherwise RCON does not start.

**Solution:**

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Adjust RCON password</b><br>
   Enter a password with at least 3 characters and without spaces in the **RCON Password** field, e.g. `MyRconPassword123`.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

How to connect with RCON afterwards is shown in [Use RCON](use-rcon.md).

## Admin login with #login fails

**Cause:** The admin password does not support spaces. If the **Admin Password** field contains a space, logging in with `#login` does not work.

**Solution:**

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Adjust admin password</b><br>
   Enter a password without spaces in the **Admin Password** field, e.g. `MyAdminPassword123`.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

How to log in as admin afterwards is shown in [Become Admin](become-admin.md).

:::: tip Tip
Players whose SteamID64 is listed in the `"admins"` list in `config.json` do not need the admin password to log in with `#login`. How to add them is shown in [Add Admin](add-admin.md).
::::

## Server shuts down when the backend connection is lost

**Cause:** If the server loses the connection to the Arma Reforger backend, it shuts down automatically by default. This is triggered by errors in the so-called room requests – the server's requests to the backend.

**Solution:** With the `disableServerShutdown` parameter in the `"operating"` section, you prevent the server from shutting down in this case.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Add parameter</b><br>
   Open the file `config.json`. If there is no `"operating"` section yet, add it at the top level – e.g. directly after the `"game"` section, separated by a comma:

   ```json
   "operating": {
     "disableServerShutdown": true
   }
   ```

   If the `"operating"` section already exists, only add the line `"disableServerShutdown": true` there.

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.
   ::::

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
This setting only applies to connection problems with the backend. For other causes, e.g. a corrupted `config.json`, the server still shuts down.
::::

## Wrong player count in the server browser

**Cause:** If the player count shown in the server browser differs from the actual one, the `lobbyPlayerSynchronise` parameter in the `"operating"` section may be set to `false`. When it is enabled, the server regularly reports the list of connected players to the backend – exactly this fixes the discrepancy between the real and the reported player count.

**Solution:** The parameter is enabled by default. This is how you check whether it has been switched off in your `config.json`:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Check lobbyPlayerSynchronise</b><br>
   Open the file `config.json` and check whether the value `"lobbyPlayerSynchronise": false` is set in the `"operating"` section. If so, set it to `true` or remove the line.

   :::: tip Example
   ```json
   "operating": {
     "lobbyPlayerSynchronise": true
   }
   ```
   ::::

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.
   ::::

4. <b>Start the server</b><br>
   Save the file and start your server.

## Server is overloaded or lagging

**Cause:** Many players, AI units, large view distances or extensive mods can put a heavy load on your server. The result is stuttering, delays or a low server FPS value.

**Solution:** How to reduce the load – e.g. via **Max FPS**, view distances or an AI limit – is shown in [Improve Performance](improve-performance.md).
