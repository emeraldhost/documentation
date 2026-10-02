---
slug: "read-server-log"
language: "en"
title: "How to Read the Server Log of Your Arma Reforger Server"
description: "Follow the server log of an Arma Reforger server in the console and download the log files via SFTP"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Read Server Log"
sort: 15
related: ["gameserver/arma-reforger/troubleshoot-server", "gameserver/arma-reforger/improve-performance", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/add-mods"]
---
The server log records what your Arma Reforger server does: the startup, the loading of mods and the scenario, and errors during operation. When something goes wrong it is the first place to look – and exactly what our support team needs from you.

There are two ways to access the log: live in the console of the dashboard, or as files via SFTP.

## Follow the log live in the console

1. **Open dashboard**\
   Open the dashboard of your server and switch to the **console**.

2. **Start the server**\
   Start your server. From now on the console prints the server output directly.

3. **Follow the output**\
   Read the messages from top to bottom. Pay close attention to the lines shortly before a crash or a failed start – that is usually where the cause shows up.

> [!NOTE]
> For Arma Reforger the console is for reading only. The server has no console commands, so input in the console has no effect.

## Download the log files

Arma Reforger stores its logs in the profile folder of the server. On every server start, the server creates a separate subfolder there whose name contains the date and time of the start.

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open the logs folder**\
   In the root directory, open the `profile` folder and inside it the `logs` subfolder.

3. **Select the right start**\
   Open the subfolder of the server start you are interested in. You can recognize the newest start by the most recent date and latest time in the folder name.

4. **Download the files**\
   Download the `.log` files from this folder to your PC and open them with any text editor.

> [!WARNING]
> By default, Arma Reforger only keeps the 10 newest logs; older ones are deleted automatically. That is why it is best to download the files right after a problem occurs, before further restarts remove them.

## What to look for in the log

### Errors after a change to config.json

If your server no longer starts after you edited `config.json`, look at the last lines in the console or in the newest log. That is where you will find the error message at which the startup stopped.

> [!TIP]
> The most common cause is invalid JSON. Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) – a single missing or extra comma is enough to prevent the server from starting.

### Errors while downloading mods

Your server downloads the mods from `config.json` on startup. If a mod is missing in-game or the startup hangs while loading mods, search the log for error messages around the download. Then check the entries in `config.json` as described under [Add Mods](/tutorials/gameserver/arma-reforger/add-mods).

### List of available scenarios

On every start, your server writes the paths of the scenario files (`.conf`) it finds to the log – these are the scenarios included in the game. This helps you find the exact scenario ID to enter in the **Scenario ID** field.

> [!TIP]
> **Example**
>
> ```text
> {ECC61978EDCC2B5A}Missions/23_Campaign.conf
> ```

> [!NOTE]
> Workshop scenarios do not appear in this list. You can find the scenario ID of a workshop scenario in the **Scenarios** tab on its workshop page. You can find more about this under [Change Scenario](/tutorials/gameserver/arma-reforger/change-scenario).

### Performance statistics

If you set the **[Advanced] Log FPS Interval** field in the **Settings** to a value greater than 0, your server writes a line with performance values to the log at that interval (in seconds), e.g.:

```text
FPS: 60.0, frame time (avg: 16.7 ms, min: 9.3 ms, max: 23.7 ms), Mem: 3291106 kB, Player: 2, AI: 104, Veh: 0 (17), Proj (S: 12, M: 0, G: 0 | 12), RplItemsS: 410, RplItemsC0: 17068
```

Among other things, it shows the current server FPS, the number of players and the number of AI units. You can find out how to interpret these values under [Improve Performance](/tutorials/gameserver/arma-reforger/improve-performance).

## If you are stuck

If the log does not tell you enough, simply attach the `.log` files of the affected server start to a [support ticket](https://emeraldhost.de/en/support) and briefly describe when the problem occurred. That way we can look into it specifically.

> [!NOTE]
> You can find solutions for common errors under [Troubleshoot Common Problems](/tutorials/gameserver/arma-reforger/troubleshoot-server).
