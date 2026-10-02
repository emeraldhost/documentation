---
description: "Find and fix common problems on a SCP: Secret Laboratory server"
---

# How to Troubleshoot Common Problems on Your SCP: Secret Laboratory Server

If your server does not show up in the server list, players can no longer join after an update or the server keeps restarting, the cause is usually one of a few typical problems. This guide shows you the most common problems, their cause and the matching solution.

:::: danger Important
Create a [backup](create-backup.md) before every change to your server. This way you can always return to the last working state.
::::

:::: info Note
For SCP: Secret Laboratory, nothing is set in the settings of the dashboard – the entire configuration is done via files over SFTP. Where the files are located is shown in [Edit configuration files](edit-config-files.md).
::::

## Check the console first

Almost every problem leaves traces in the server output. The console in the dashboard is the LocalAdmin console of your server: there you can see the startup output live, including all warnings and errors. The last lines before a crash are usually the important ones. How to read the output afterwards is shown in [Read the server log](read-server-log.md).

:::: tip Tip
When you create a support ticket, include the matching error message from the console or the log right away – this way the team can help you much faster.
::::

## Server does not appear in the server list

**Symptom:** Your server is running, but you cannot find it in the public server list in the game.

**Cause:** Only servers verified by Northwood are added to the public server list. Typical reasons why your server is missing:

- **Not verified**: Your server has not been verified yet. On startup, the console then reports `Your server won't be visible on the public server list`. If `contact_email` is already set, it also mentions the command `!verify static`.
- **Set to private**: A verified server was hidden from the list with `!private`.
- **`contact_email` missing**: The `config_gameplay.txt` file still contains the default value `contact_email: default`. The console then asks you to set `contact_email` and restart the server.
- **`online_mode` disabled**: If `config_gameplay.txt` contains `online_mode: false`, the console reports `Server WON'T be visible on the public list due to online_mode turned off in server configuration.`

**Solution:**

1. <b>Check the console</b><br>
   Restart your server via the dashboard and read the startup output in the console. The messages listed above tell you which cause applies to you.

2. <b>Make the server public again</b><br>
   If your server is verified but set to private, enter the following command in the console of the dashboard:

   ```
   !public
   ```

   Your server is then back on the list – in this case you do not need the following steps.

3. <b>Find out the game port</b><br>
   Open the dashboard of your server and note the game port shown under **Overview**.

4. <b>Stop the server</b><br>
   Stop your server via the dashboard.

5. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

6. <b>Check contact_email and online_mode</b><br>
   Open the following file – replace `<Port>` with your game port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Enter a valid email address for `contact_email` and make sure that `online_mode` is set to `true` (default):

   ```
   contact_email: admin@example.com
   online_mode: true
   ```

7. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

8. <b>Apply for verification</b><br>
   If your server is not verified yet, follow the [Get server verified](get-server-verified.md) guide. `contact_email` has to be set for this – otherwise the server rejects the `!verify` command.

:::: tip Tip
Regardless of the server list, your players can always join via Direct Connect – using the IP address and the game port from the **Overview**, e.g. `203.0.113.10:7777`. How this works is shown in [Join server](join-server.md).
::::

## Version mismatch after a game update

**Symptom:** After an update of SCP: Secret Laboratory, players can no longer join because the server and the game have different versions.

**Cause:** Either your server is still running the old version because it has not been restarted since the update, or the player's game has not been updated yet. Players also have to bring their game to the current version.

**Solution:**

1. <b>Restart the server</b><br>
   Restart your server via the dashboard. On every start, your server is automatically brought to the current version.

2. <b>Check plugins</b><br>
   If you use EXILED or LabAPI plugins, check in the console after the update whether all plugins were loaded. After a game update, plugins are often temporarily incompatible – see [Plugins not loading](plugins-not-loading.md).

:::: info Note
Your server runs the regular public version of the game. Players who take part in a beta of SCP: Secret Laboratory in Steam therefore have a different version than your server.
::::

## Server crashes or restarts in a loop

**Symptom:** Your server crashes shortly after starting or keeps restarting without anyone being able to join.

**Cause:** LocalAdmin automatically restarts the server after a crash. By default, if more than 4 automatic restarts happen within 8 minutes of the first restart, LocalAdmin gives up with the message `Restarts limit exceeded.` Common triggers for the crashes are:

- **Error in a configuration file**: e.g. wrong indentation or tabs instead of spaces in a YAML file such as a plugin config (`.yml`). YAML only allows spaces for indentation.
- **Plugins that do not match the version**: After a game update, EXILED, LabAPI plugins or individual EXILED plugins can be incompatible.

**Solution:**

1. <b>Check the log</b><br>
   Read the last lines before the crash in the console or in the [server log](read-server-log.md). They usually tell you which file or which plugin causes the error.

   :::: info Note
   If LocalAdmin itself crashes, it additionally creates a file `LocalAdmin Crash <date and time>.txt` with the error message in the main directory of your server.
   ::::

2. <b>Check the last changed file</b><br>
   If you changed a file shortly before the problem, check it first: Are the indentation and colons correct, and does it contain no tabs? If in doubt, undo your change.

3. <b>Check plugins</b><br>
   If an error message points to a plugin, follow the [Plugins not loading](plugins-not-loading.md) guide.

### Test without plugins

If you cannot find the cause, start your server without plugins as a test. If it then runs stably, the problem lies with a plugin.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Move the plugins out</b><br>
   Create a folder in the main directory of your server, e.g. `plugins-test`, and move the plugin DLLs from the following directories into it:

   ```
   /.config/EXILED/Plugins/
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   /.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/
   ```

   Replace `<Port>` with your game port from the **Overview** – LabAPI loads plugins both from `global` and from the folder of your game port. Only move the DLL files of the plugins, not the subfolders such as `dependencies`.

   :::: warning Warning
   The Exiled Loader is also located in `/.config/SCP Secret Laboratory/LabAPI/plugins/global/` as `Exiled.Loader.dll`. If you move it, EXILED does not load at all – that is intended for the test, but remember to put it back afterwards.
   ::::

4. <b>Start the server</b><br>
   Start your server via the dashboard and watch the console.

5. <b>Put the plugins back one by one</b><br>
   If the server runs stably, put the plugins back one by one and restart the server after each plugin. This way you find the plugin that causes the crash.

## Configuration changes have no effect

**Symptom:** You changed a configuration file, but nothing changes in the game.

**Cause:** Usually one of these three causes is behind it:

- **Wrong port folder**: There can be several port folders in `/.config/SCP Secret Laboratory/config/`. The server only reads the folder whose name matches its current game port.
- **Typo in the key**: A misspelled key, e.g. `friendlyfire` instead of `friendly_fire`, is a different entry for the server and has no effect.
- **No restart or reload**: Changes are only applied on the next start of the server. With `config reload` you can reload the game configuration without a restart, but some changes only take effect in the next round. `config reload` does not reload plugin configs of EXILED or LabAPI – they need a restart. More on this in [Use console commands](use-console-commands.md). A restart is always the safe way.

**Solution:**

1. <b>Find out the game port</b><br>
   Open the dashboard of your server and note the game port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Check the correct file</b><br>
   Check whether you edited the file in the correct port folder – replace `<Port>` with your game port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

   The same applies to plugin configs: they also depend on the game port, e.g. `/.config/EXILED/Configs/Plugins/<Plugin-Name>/<Port>.yml` for EXILED or `/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<Plugin-Name>/` for LabAPI.

5. <b>Compare the key</b><br>
   Compare the spelling of the key you changed with the original. Only change the value after the colon and leave the key name unchanged.

6. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

## "Port Not Registered" error in the console

**Symptom:** Your server does not appear in the server list, and the following message appears in the console or the server log:

```
Could not update server data on server list - [SECURITY VIOLATION] Specified port is not registered.
```

**Cause:** According to Northwood's official documentation, the error occurs when the IP address of your server is already registered or verified with the central servers of SCP: Secret Laboratory.

**Solution:** Contact support and provide the IP address and the game port of your server from the **Overview** as well as the exact error message.

## Reset the configuration

If none of this helps and your configuration is so broken that you can no longer find the error, you can reset the game configuration to the default.

:::: danger Important
When resetting, you lose all settings in this port folder – including ranks, whitelist and reserved slots. Make sure to create a [backup](create-backup.md) first.
::::

1. <b>Create a backup</b><br>
   Create a [backup](create-backup.md) of your server.

2. <b>Find out the game port</b><br>
   Open the dashboard of your server and note the game port shown under **Overview**.

3. <b>Stop the server</b><br>
   Stop your server via the dashboard.

4. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

5. <b>Rename the port folder</b><br>
   Rename the following folder, e.g. from `7777` to `7777-old` – replace `<Port>` with your game port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

   By renaming it, your old configuration is kept and you can copy individual settings from it later.

6. <b>Start the server</b><br>
   Start your server via the dashboard. On startup, the server creates the port folder again with the default files.

7. <b>Check the result</b><br>
   Check via SFTP whether the folder `/.config/SCP Secret Laboratory/config/<Port>/` was created again. Then copy only the settings you really need from the renamed folder – e.g. `contact_email` and `server_name`.

:::: tip Tip
If the folder was not created again or the server does not start, rename the old folder back to the game port or restore your backup.
::::
