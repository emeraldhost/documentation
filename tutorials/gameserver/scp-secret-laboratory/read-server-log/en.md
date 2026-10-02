---
slug: "read-server-log"
language: "en"
title: "How to Read the Server Log of Your SCP: Secret Laboratory Server"
description: "Follow the server log of a SCP: Secret Laboratory server in the console and download the log files via SFTP"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Read Server Log"
sort: 21
related: ["gameserver/scp-secret-laboratory/troubleshoot-server", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/use-console-commands", "gameserver/scp-secret-laboratory/edit-config-files"]
---
The logs show you what happens on your SCP: Secret Laboratory server: the startup, the loading of plugins, player connections and the actions of your admins. When something goes wrong they are the first place to look – and exactly what our support team needs from you.

There are three sources:

| Source | Content |
|--------|---------|
| Console in the dashboard | Live output of the server while it is running |
| LocalAdmin logs | The complete console output as a file – one file per server start |
| Round logs | One log per round with connections, kills, Remote Admin actions and game events |

## Follow the log live in the console

The console in the dashboard is the LocalAdmin console of your server. Besides the output, you can also enter commands there – more on this in [Use console commands](/tutorials/gameserver/scp-secret-laboratory/use-console-commands) and [Use Remote Admin](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin).

1. **Open the dashboard**\
   Open the dashboard of your server and switch to the **Console**.

2. **Start the server**\
   Start your server. From now on the console shows the output of the server directly.

3. **Follow the output**\
   Read the messages from top to bottom. During startup, EXILED and LabAPI report every plugin they load here. Pay particular attention to the lines just before a crash or a failed start – that is usually where the cause is.

## Download the log files

The server stores both kinds of logs in subfolders named after the game port. You can find the game port in the dashboard under **Overview**.

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the log folder**\
   Go to the matching folder – replace `<Port>` with your game port:

   ```text
   /.config/SCP Secret Laboratory/LocalAdminLogs/<Port>/
   /.config/SCP Secret Laboratory/ServerLogs/<Port>/
   ```

   The `LocalAdminLogs` folder contains the LocalAdmin logs, the `ServerLogs` folder the round logs.

4. **Choose the right file**\
   The file names contain the date and time at which the file was created:

   ```text
   LocalAdmin Log 2026-10-02 18.30.05.txt
   Round 2026-10-02 18.31.12.txt
   ```

   You can recognize the newest file by the most recent date and the latest time in its name.

5. **Download the file**\
   Download the file to your PC and open it with any text editor.

> [!NOTE]
> The `.config` folder starts with a dot and is therefore a hidden folder. If you cannot see it in your SFTP program, enable the display of hidden files there.

## Structure of the round logs

Each line of a round log consists of four parts, separated by `|`:

```text
Time | Type | Module | Content
```

- **Time**: date and time with milliseconds. If the time ends with `Z`, it is given in UTC; otherwise the offset from UTC follows (e.g. `+02:00`).
- **Type**: the kind of entry, e.g. `Connection update`, `Remote Admin`, `Remote Admin - Misc`, `Kill`, `Game Event`, `Teamkill`, `Suicide`, `AdminChat` or `Internal`.
- **Module**: the area of the game, e.g. `Networking`, `Administrative`, `Class change`, `Warhead` or `Game logic`.
- **Content**: the actual message.

> [!TIP]
> **Example**
>
> ```text
> 2026-10-02 18:31:12.402Z | Internal            | Game logic     | Started logging.
> 2026-10-02 18:45:37.918Z | Remote Admin        | Administrative | Admin (76561198000000001@steam) banned player Max (76561198000000002@steam). Ban duration: 1d. Reason: Cheating.
> ```

## What to look for in the log

### Plugin errors

Error messages from plugins appear in the console and in the LocalAdmin logs. EXILED and LabAPI mark them with `[ERROR]`, followed by the name of the plugin DLL (without `.dll`) in square brackets, e.g. `[ERROR] [MyPlugin] ...`. You can recognize warnings by `[WARN]`. Internal errors of LabAPI itself start with `[LabAPI INTERNAL ERROR]`.

Whether a plugin was loaded at all is shown by the load messages during server startup: for EXILED `Loaded plugin <Name>@<Version>`, for LabAPI `[LOADER] Successfully loaded <Name>`. What the individual error messages mean and how to fix them is explained in [Plugins not loading](/tutorials/gameserver/scp-secret-laboratory/plugins-not-loading).

> [!TIP]
> Use the search function of your text editor to search the downloaded file for `[ERROR]` or the name of the plugin DLL (without `.dll`) – this way you find the relevant lines faster.

### Blocked countries

If you have set up [geoblocking](/tutorials/gameserver/scp-secret-laboratory/set-up-geoblocking), the server writes every rejected connection attempt to the console and therefore also to the LocalAdmin logs:

```text
Player 76561198000000002@steam (203.0.113.10:51234) tried joined from blocked country US.
```

The message contains the UserID, the IP address including the port, and the country code.

> [!NOTE]
> These messages only appear as long as `display_preauth_logs` is not set to `false`. The key is not in the default `config_gameplay.txt`, so the messages are active. If a large number of connections are rejected at once, the server temporarily suppresses further messages of this kind.

### Kicks and bans

Bans and kicks via Remote Admin end up in the round log with the type `Remote Admin` and the module `Administrative`. The line names the admin, the affected player, the duration and the reason (see the example above). A kick also appears there as `banned player` – with the duration `0`.

If a banned player tries to join again, the round log and the console show a line such as:

```text
Banned player 76561198000000002@steam tried to connect from endpoint 203.0.113.10:51234.
```

You can find more about moderation in [Kick and ban players](/tutorials/gameserver/scp-secret-laboratory/kick-and-ban-players).

## How long logs are kept

LocalAdmin cleans up old logs automatically while your server is running. This is controlled by the LocalAdmin configuration – the `config_localadmin.txt` file in the `/.config/SCP Secret Laboratory/config/<Port>/` folder or, if there is none, the `config_localadmin_global.txt` file in `/.config/SCP Secret Laboratory/config/`.

| Entry | Default | Meaning |
|-------|---------|---------|
| `la_delete_old_logs` | `true` | Delete LocalAdmin logs automatically |
| `la_logs_expiration_days` | `90` | Age in days after which LocalAdmin logs are deleted |
| `delete_old_round_logs` | `false` | Delete round logs automatically |
| `round_logs_expiration_days` | `180` | Age in days after which round logs are deleted |
| `compress_old_round_logs` | `false` | Compress round logs automatically |
| `round_logs_compression_threshold_days` | `14` | Age in days after which round logs are compressed |

So by default, LocalAdmin logs are deleted after 90 days. Round logs, on the other hand, are kept until you delete them yourself. If you set `delete_old_round_logs` to `true`, they are deleted after 180 days. With `compress_old_round_logs: true`, LocalAdmin packs round logs older than 14 days into one ZIP archive per day named `Round Logs Archive <Date>.zip`.

How to change the retention:

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Edit the LocalAdmin configuration**\
   Open the file `/.config/SCP Secret Laboratory/config/<Port>/config_localadmin.txt` – replace `<Port>` with your game port. If there is none, open `/.config/SCP Secret Laboratory/config/config_localadmin_global.txt`. Adjust the entries from the table, e.g.:

   ```text
   delete_old_round_logs: true
   ```

5. **Start the server**\
   Save the file and start your server via the dashboard.

> [!NOTE]
> You can find more about editing configuration files in [Edit configuration files](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

> [!WARNING]
> Download logs you need for a problem right away – before they are deleted automatically.

## If you get stuck

If the log does not tell you enough, simply attach the matching file from `LocalAdminLogs` and – if it is about events within a round – the round log from `ServerLogs` to a [support ticket](https://emeraldhost.de/en/support) and briefly describe when the problem occurred. That way we can look into it directly.

> [!NOTE]
> You can find solutions for typical errors in [Troubleshoot server](/tutorials/gameserver/scp-secret-laboratory/troubleshoot-server).
