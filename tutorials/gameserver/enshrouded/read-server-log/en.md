---
slug: "read-server-log"
language: "en"
title: "How to Read the Server Log of Your Enshrouded Server"
description: "Read the server log of an Enshrouded server"
tags: []
date: "2026-08-13"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Read Server Log"
sort: 13
related: ["gameserver/enshrouded/join-server", "gameserver/enshrouded/kick-ban-players", "gameserver/enshrouded/performance-problems-on-enshrouded-servers", "gameserver/enshrouded/reset-world"]
---

The server log records what your Enshrouded server does: the startup, the loading of the save and every player connection. When something goes wrong it is the first place to look – and exactly what our support team needs from you.

There are two ways to access the log: live in the console of the dashboard, or as a file via SFTP.

## Follow the log live in the console

1. **Open dashboard**\
   Open the dashboard of your server and switch to the **console**.

2. **Start the server**\
   Start your server. From now on the console prints every line of the log directly.

3. **Follow the output**\
   Read the messages from top to bottom. Pay close attention to the lines shortly before a crash or a failed join – that is usually where the cause shows up.

> [!NOTE]
> The console shows the output of the running server process. If you want to look up an incident from further back, use the log file instead.

## Download the log file

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open the logs folder**\
   Navigate to the `logs` folder in the main directory.

3. **Download the file**\
   Download the file `enshrouded_server.log` to your PC. It contains the same output you also see in the console.

> [!TIP]
> Enshrouded archives older logs in the `logs/backup` subfolder. Look there if you are after an incident from further back – if the folder is not there, only the current log is available. That is why it is best to download the file right after a problem occurs, so the output for the incident is safe in any case.

## Understanding common messages

### Server started successfully

Your server has fully started and is ready for players as soon as these messages appear:

```text
[Session] 'HostOnline' (up)!
[Session] finished transition from 'Lobby' to 'Host_Online' (current='Host_Online')!
[server] Load deserialization took <time> s
```

If these messages are missing, your server did not finish starting. In that case the lines above them are the ones that matter for finding the cause.

### A player connects

When a player connects, these lines show up among others:

```text
[online] Session accepted with peer ( id 76561198000000000 ).
[online] Added Peer #0.
```

The number after `id` is the player's [SteamID64](/tutorials/gameserver/steamid64-find-out). It tells you who connected and when.

### Connection closed or failed

A failed join looks like this, for example:

```text
[online] Session failed for peer #0 with error 4.
[online] Removed Peer #0.
```

A `Removed Peer` line on its own only means that a player's connection has ended. Only a `Session failed` line right before it shows that the join failed.

## If you are stuck

If the log does not tell you enough, simply attach the file `enshrouded_server.log` to a [support ticket](https://emeraldhost.de/en/support) and briefly describe when the problem occurred. That way we can look into it specifically.

> [!NOTE]
> If your server stutters or connections drop without any error appearing in the log, the server software itself is often the cause. You can find more about this under [Performance Issues on Enshrouded Servers](/tutorials/gameserver/enshrouded/performance-problems-on-enshrouded-servers).
