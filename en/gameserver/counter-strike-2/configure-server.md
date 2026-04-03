---
description: Configure a Counter-Strike 2 server
---

# How to Configure Your Counter-Strike 2 Server

You can customize your server via the config files in the `/game/csgo/cfg/` directory.

## Edit server.cfg

The `server.cfg` is the main configuration file of your server.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the **File Browser** in the dashboard.

3. <b>Open server.cfg</b><br>
   Open the file `server.cfg` at:

   ```
   /game/csgo/cfg/server.cfg
   ```

4. <b>Adjust settings</b><br>
   Adjust the desired values (see table below).

5. <b>Start the server</b><br>
   Save the file and start your server.

### Important settings

| Setting | Description | Example |
|---------|-------------|---------|
| `mp_maxrounds` | Maximum number of rounds | `24` |
| `mp_roundtime` | Round time in minutes | `1.92` |
| `mp_roundtime_defuse` | Round time on defusal maps | `1.92` |
| `mp_freezetime` | Freeze time at round start (seconds) | `15` |
| `mp_buytime` | Buy time in seconds | `20` |
| `mp_startmoney` | Starting money | `800` |
| `mp_maxmoney` | Maximum money | `16000` |
| `mp_friendlyfire` | Friendly fire (0 = off, 1 = on) | `1` |
| `mp_autoteambalance` | Auto team balance (0 = off, 1 = on) | `1` |
| `mp_limitteams` | Max player difference between teams | `1` |
| `sv_alltalk` | Everyone can hear each other (0 = off, 1 = on) | `0` |

:::: tip Example
```
mp_maxrounds 24
mp_roundtime_defuse 1.92
mp_freezetime 15
mp_buytime 20
mp_startmoney 800
mp_maxmoney 16000
mp_friendlyfire 1
```
::::

## Game mode configs

Each game mode has its own config file that is loaded when the mode is selected:

| File | Game Mode |
|------|-----------|
| `gamemode_competitive.cfg` | Competitive |
| `gamemode_competitive2v2.cfg` | Wingman |
| `gamemode_casual.cfg` | Casual |
| `gamemode_deathmatch.cfg` | Deathmatch |
| `gamemode_custom.cfg` | Custom |
| `gamemode_armsrace.cfg` | Arms Race |
| `gamemode_demolition.cfg` | Demolition |

:::: info Note
Game mode configs override the values from `server.cfg`. For example, if you want to change the round time in competitive mode, you need to edit `gamemode_competitive.cfg`.
::::

## Useful console commands

You can execute the following commands via the **server console** in the dashboard:

| Command | Description |
|---------|-------------|
| `mp_warmup_end` | End warmup phase |
| `mp_restartgame 1` | Restart game immediately |
| `changelevel de_dust2` | Change map |
| `bot_kick` | Remove all bots |
| `bot_add_t` | Add bot to Terrorists |
| `bot_add_ct` | Add bot to Counter-Terrorists |
