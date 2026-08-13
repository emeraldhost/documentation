---
description: Read the server log of an Enshrouded server
---

# How to Read the Server Log of Your Enshrouded Server

The server log records what your Enshrouded server does: the startup, the loading of the save and every player connection. When something goes wrong it is the first place to look — and exactly what our support team needs from you.

There are two ways to access the log: live in the console of the dashboard, or as a file via SFTP.

## Follow the log live in the console

1. <b>Open dashboard</b><br>
   Open the dashboard of your server and switch to the **console**.

2. <b>Start the server</b><br>
   Start your server. From now on the console prints every line of the log directly.

3. <b>Follow the output</b><br>
   Read the messages from top to bottom. Pay close attention to the lines shortly before a crash or a failed join — that is usually where the cause shows up.

:::: info Note
The console shows the output of the running server process. If you want to look up an incident from further back, use the log file instead.
::::

## Download the log file

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open the logs folder</b><br>
   Navigate to the `logs` folder in the main directory.

3. <b>Download the file</b><br>
   Download the file `enshrouded_server.log` to your PC. It contains the same output you also see in the console.

:::: tip Tip
Enshrouded archives older logs in the `logs/backup` subfolder. Look there if you are after an incident from further back — if the folder is not there, only the current log is available. That is why it is best to download the file right after a problem occurs, so the output for the incident is safe in any case.
::::

## Understanding common messages

### Server started successfully

Your server has fully started and is ready for players as soon as these messages appear:

```
[Session] 'HostOnline' (up)!
[Session] finished transition from 'Lobby' to 'Host_Online' (current='Host_Online')!
[server] Load deserialization took <time> s
```

If these messages are missing, your server did not finish starting. In that case the lines above them are the ones that matter for finding the cause.

### A player connects

When a player connects, these lines show up among others:

```
[online] Session accepted with peer ( id 76561198000000000 ).
[online] Added Peer #0.
```

The number after `id` is the player's [SteamID64](../steamid64-find-out.md). It tells you who connected and when.

### Connection closed or failed

A failed join looks like this, for example:

```
[online] Session failed for peer #0 with error 4.
[online] Removed Peer #0.
```

A `Removed Peer` line on its own only means that a player's connection has ended. Only a `Session failed` line right before it shows that the join failed.

## If you are stuck

If the log does not tell you enough, simply attach the file `enshrouded_server.log` to a [support ticket](https://emeraldhost.de/en/support) and briefly describe when the problem occurred. That way we can look into it specifically.

:::: info Note
If your server stutters or connections drop without any error appearing in the log, the server software itself is often the cause. You can find more about this under [Performance Issues on Enshrouded Servers](performance-problems-on-enshrouded-servers.md).
::::
