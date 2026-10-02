---
slug: "use-rcon"
language: "en"
title: "How to Use RCON on Your Arma Reforger Server"
description: "Set up and use RCON on an Arma Reforger server"
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
short_title: "Use RCON"
sort: 11
related: ["gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/kick-ban-players", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/add-admin"]
---
With RCON (Remote Console) you can manage your server remotely without being in the game yourself – e.g. list, kick or ban players and restart the scenario. Arma Reforger uses the [BattlEye RCon protocol](https://www.battleye.com/downloads/BERConProtocol.txt) for this, which communicates over UDP.

## Enable RCON

RCON only starts when an RCON password is set.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter RCON password**\
   Enter a password in the **RCON Password** field.

   > [!WARNING]
   > The RCON password must be at least 3 characters long and must not contain spaces. Without a valid password, RCON does not start.

4. **Restart the server**\
   Save the setting and restart your server.

> [!IMPORTANT]
> Treat the RCON password like an admin password and only share it with trusted people. Also choose a different password than your **Admin Password**.

## RCON credentials

You need three pieces of information to connect:

- <b>Address</b><br>
  The IP address of your server (without port), e.g. `203.0.113.10`.

- <b>RCON port</b><br>
  You can find the RCON port in the dashboard in the **port overview**. The port is assigned by us and cannot be changed.

- <b>Password</b><br>
  The password from the **RCON Password** field in the **Settings**.

> [!NOTE]
> The RCON address, port and password are written from the dashboard into `config.json` on every server start. If you change `address`, `port` or `password` in the `"rcon"` section directly in the file, these values are overwritten on the next start. Therefore, always change the password in the dashboard.

## Set RCON permissions

On your server, RCON is set to the `monitor` permission by default. This only lets you run commands that do not change the server's state, e.g. `#players`. If you also want to kick or ban players over RCON, change the permission to `admin`.

| Permission | Description |
|------------|-------------|
| `admin` | Can run any command |
| `monitor` | Can only run commands that do not change the server's state |

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config.json**\
   Open the file `config.json` in the root directory of your server and find the `"rcon"` section.

4. **Change permission**\
   Change the value of `"permission"` from `"monitor"` to `"admin"`:

   ```json
   "rcon": {
     "permission": "admin",
     "blacklist": [],
     "whitelist": []
   }
   ```

   The snippet only shows the relevant entries. Leave the other entries in the `"rcon"` section unchanged.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

5. **Start the server**\
   Save the file and start your server.

### Restrict commands with blacklist and whitelist

In the `"rcon"` section you can also define which commands are allowed over RCON. Both entries are lists of commands and are empty by default. You also edit these entries in `config.json` via SFTP while your server is stopped.

| Entry | Description |
|-------|-------------|
| `blacklist` | Commands in this list cannot be run over RCON |
| `whitelist` | If the list contains commands, only these can be run over RCON |

> [!TIP]
> Here too, check `config.json` with [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

### Number of simultaneous RCON connections

With the optional `"maxClients"` entry in the `"rcon"` section you define how many RCON clients may be connected at the same time. Allowed values are `1` to `16`, the default is `16`. You edit `config.json` for this the same way as when changing the permission: stop the server, edit the file via SFTP, start the server.

```json
"rcon": {
  ...
  "maxClients": 4
}
```

> [!NOTE]
> `...` stands for the existing entries in the `"rcon"` section. Add `"maxClients"` inside this section and do not delete the other entries there. Mind the comma before the new line and then check the file with [JSONLint](https://jsonlint.com/).

## Connect with RCON

1. **Open RCON tool**\
   Open an RCON tool that supports the BattlEye RCon protocol.

2. **Enter connection details**\
   Enter the [RCON credentials](#rcon-credentials): address, RCON port and password.

3. **Run commands**\
   Once connected, you can run the commands from the following table.

## RCON commands

| Command | Description | `admin` | `monitor` |
|---------|-------------|---------|-----------|
| `#players` | Lists all players with their player ID | Yes | Yes |
| `#kick <playerId>` | Kicks a player, who can rejoin afterwards | Yes | No |
| `#ban create <playerId/identityId> <duration> [reason]` | Bans a player, the duration is given in seconds (`0` = permanent) | Yes | No |
| `#ban remove <identityId>` | Removes a ban | Yes | No |
| `#ban list [page]` | Shows the bans with BanID, Player UID and duration, 25 per page over RCON (10 in game) | Yes | No |
| `#restart` | Restarts the running scenario, players stay connected | Yes | No |
| `#shutdown` | Shuts down the server and disconnects all players | Yes | No |
| `@logout` | Logs out the RCON client and frees its slot immediately | Yes | Yes |

The player ID (`5` in the examples) is shown by `#players`. It only works while the player is connected to the server. If the player is no longer online, ban them by their identityId instead.

Examples:

```text
#ban create 5 3600 Teamkilling
#ban create 5 0
#ban list 2
```

> [!NOTE]
> The commands `#login`, `#logout`, `#roles` and `#id` are only meant for players in the game and do not work over RCON. To learn how to log in as admin in the game, see [Become Admin](/tutorials/gameserver/arma-reforger/become-admin). To kick and ban players directly in the game, see [Kick and Ban Players](/tutorials/gameserver/arma-reforger/kick-ban-players).

> [!TIP]
> Always end your RCON session with `@logout`. If you simply close your RCON tool, the server keeps the connection for a while until it is removed by a timeout. During that time it still occupies one of the `"maxClients"` slots.
