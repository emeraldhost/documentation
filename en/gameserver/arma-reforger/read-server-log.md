---
description: Follow the server log of an Arma Reforger server in the console and download the log files via SFTP
---

# How to Read the Server Log of Your Arma Reforger Server

The server log records what your Arma Reforger server does: the startup, the loading of mods and the scenario, and errors during operation. When something goes wrong it is the first place to look – and exactly what our support team needs from you.

There are two ways to access the log: live in the console of the dashboard, or as files via SFTP.

## Follow the log live in the console

1. <b>Open dashboard</b><br>
   Open the dashboard of your server and switch to the **console**.

2. <b>Start the server</b><br>
   Start your server. From now on the console prints the server output directly.

3. <b>Follow the output</b><br>
   Read the messages from top to bottom. Pay close attention to the lines shortly before a crash or a failed start – that is usually where the cause shows up.

:::: info Note
For Arma Reforger the console is for reading only. The server has no console commands, so input in the console has no effect.
::::

## Download the log files

Arma Reforger stores its logs in the profile folder of the server. On every server start, the server creates a separate subfolder there whose name contains the date and time of the start.

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open the logs folder</b><br>
   In the root directory, open the `profile` folder and inside it the `logs` subfolder.

3. <b>Select the right start</b><br>
   Open the subfolder of the server start you are interested in. You can recognize the newest start by the most recent date and latest time in the folder name.

4. <b>Download the files</b><br>
   Download the `.log` files from this folder to your PC and open them with any text editor.

:::: warning Warning
By default, Arma Reforger only keeps the 10 newest logs; older ones are deleted automatically. That is why it is best to download the files right after a problem occurs, before further restarts remove them.
::::

## What to look for in the log

### Errors after a change to config.json

If your server no longer starts after you edited `config.json`, look at the last lines in the console or in the newest log. That is where you will find the error message at which the startup stopped.

:::: tip Tip
The most common cause is invalid JSON. Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) – a single missing or extra comma is enough to prevent the server from starting.
::::

### Errors while downloading mods

Your server downloads the mods from `config.json` on startup. If a mod is missing in-game or the startup hangs while loading mods, search the log for error messages around the download. Then check the entries in `config.json` as described under [Add Mods](add-mods.md).

### List of available scenarios

On every start, your server writes the paths of the scenario files (`.conf`) it finds to the log – these are the scenarios included in the game. This helps you find the exact scenario ID to enter in the **Scenario ID** field.

:::: tip Example
```
{ECC61978EDCC2B5A}Missions/23_Campaign.conf
```
::::

:::: info Note
Workshop scenarios do not appear in this list. You can find the scenario ID of a workshop scenario in the **Scenarios** tab on its workshop page. You can find more about this under [Change Scenario](change-scenario.md).
::::

### Performance statistics

If you set the **[Advanced] Log FPS Interval** field in the **Settings** to a value greater than 0, your server writes a line with performance values to the log at that interval (in seconds), e.g.:

```
FPS: 60.0, frame time (avg: 16.7 ms, min: 9.3 ms, max: 23.7 ms), Mem: 3291106 kB, Player: 2, AI: 104, Veh: 0 (17), Proj (S: 12, M: 0, G: 0 | 12), RplItemsS: 410, RplItemsC0: 17068
```

Among other things, it shows the current server FPS, the number of players and the number of AI units. You can find out how to interpret these values under [Improve Performance](improve-performance.md).

## If you are stuck

If the log does not tell you enough, simply attach the `.log` files of the affected server start to a [support ticket](https://emeraldhost.de/en/support) and briefly describe when the problem occurred. That way we can look into it specifically.

:::: info Note
You can find solutions for common errors under [Troubleshoot Common Problems](troubleshoot-server.md).
::::
