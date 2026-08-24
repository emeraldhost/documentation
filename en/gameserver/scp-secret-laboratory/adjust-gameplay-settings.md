---
description: "Adjust the most important gameplay settings on a SCP: Secret Laboratory server"
---

# How to Adjust the Most Important Gameplay Settings on Your SCP: Secret Laboratory Server

The `config_gameplay.txt` file controls how your server behaves in-game. This guide bundles the most important settings for the intercom, AFK kick, idle mode, spawn protection, round restarts and broadcasts — each with a short overview of the keys and a ready-to-use recipe.

## Prerequisite

The guide [Edit configuration files](edit-config-files.md) shows you where the configuration files are located, how to edit them and how to apply changes safely. All settings in this guide belong in the following file — replace `<Port>` with the game port of your server shown in the **Overview** of the dashboard:

```
/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
```

:::: warning Warning
Stop your server before editing the file, and make sure you are working in the folder of the current game port — multiple port folders can exist under `/.config/SCP Secret Laboratory/config/`, but the server only reads the one matching the current game port. See the guide [Edit configuration files](edit-config-files.md) for details.
::::

## Intercom

The intercom lets players make an announcement to everyone. These keys control how long players may speak and how long the intercom is locked afterwards:

| Key | Default | Effect |
|-----|---------|--------|
| `intercom_cooldown` | `120` | Time in seconds before the intercom becomes available again after an announcement |
| `intercom_max_speech_time` | `20` | Maximum speech time in seconds per announcement |

**Recipe — longer announcements, shorter cooldown:**

```
intercom_max_speech_time: 30
intercom_cooldown: 60
```

## AFK Kick and Idle Mode

### AFK kick

Inactive players are removed from the server automatically:

| Key | Default | Effect |
|-----|---------|--------|
| `afk_time` | `90` | Time in seconds until an inactive player is kicked — SCP-079 gets an extra 13 seconds |
| `constantly_check_afk` | `false` | Enables the constant AFK check |
| `afk_kick_message` | `AFK` | Message shown to the kicked player |

**Recipe — more patience with inactive players and a clearer kick message:**

```
afk_time: 180
afk_kick_message: You have been removed from the server for inactivity.
```

### Idle mode

In idle mode, the server lowers its tickrate while nobody is connected — this saves CPU resources on empty servers:

| Key | Default | Effect |
|-----|---------|--------|
| `idle_mode_enabled` | `false` | Enables or disables idle mode |
| `idle_mode_time` | `5000` | Time in milliseconds until idle mode activates |
| `idle_mode_preauth_time` | `30000` | Idle mode wait time in milliseconds after a connection attempt (preauth) |
| `idle_mode_tickrate` | `1` | Tickrate of the server while in idle mode |

**Recipe — save CPU while the server is empty:**

```
idle_mode_enabled: true
```

You can leave the remaining idle mode values at their defaults.

## Spawn Protection

Spawn protection keeps freshly spawned reinforcements from being killed right as they enter the game:

| Key | Default | Effect |
|-----|---------|--------|
| `spawn_protect_enabled` | `false` | Enables spawn protection |
| `spawn_protect_time` | `8` | Spawn protection length in seconds |
| `spawn_protect_can_shoot` | `false` | Controls whether protected players may shoot — by default, protection ends as soon as a player equips a firearm |
| `spawn_protect_prevent_all` | `false` | Set to `true`, the protection blocks all damage; by default only friendly fire damage is blocked |
| `spawn_protect_team` | `1, 2` | Teams with spawn protection — `1` = MTF, `2` = Chaos Insurgency |

**Recipe — enable spawn protection for reinforcements:**

```
spawn_protect_enabled: true
spawn_protect_time: 10
```

## Round Restarts

These keys control what happens after a round ends and whether late joiners still spawn in:

| Key | Default | Effect |
|-----|---------|--------|
| `auto_round_restart_time` | `10` | Time in seconds between the end of a round and the automatic round restart |
| `restart_after_rounds` | `0` | Full server restart after the specified number of rounds — `0` disables the feature |
| `enable_fast_round_restart` | `false` | Enables the fast round restart — according to the official reference, this feature can be buggy |
| `fast_round_restart_delay` | `3.2` | Delay of the fast round restart |
| `late_join_time` | `0` | Time in seconds after the round starts during which newly joining players still spawn in |

**Recipe — free up memory regularly:** A full server restart every few rounds counteracts slowly growing memory usage. Since your server runs behind LocalAdmin, it is restarted automatically after shutting down — you do not have to do anything in the dashboard.

```
restart_after_rounds: 15
```

## Broadcasts for Kicks and Bans

Your server can show a message to all players when someone is kicked or banned. The guide [Kick and ban players](kick-and-ban-players.md) shows you how to kick and ban players.

| Key | Default | Effect |
|-----|---------|--------|
| `broadcast_bans` | `true` | Shows a broadcast message when a player is banned |
| `broadcast_ban_text` | `%nick% has been banned from this server.` | Text of the ban message — `%nick%` is replaced with the player name |
| `broadcast_ban_duration` | `5` | Display duration of the ban message in seconds |
| `broadcast_kicks` | `false` | Shows a broadcast message when a player is kicked |
| `broadcast_kick_text` | `%nick% has been kicked from this server.` | Text of the kick message — `%nick%` is replaced with the player name |
| `broadcast_kick_duration` | `5` | Display duration of the kick message in seconds |

**Recipe — enable kick broadcasts with custom messages:**

```
broadcast_kicks: true
broadcast_kick_text: %nick% was kicked from this server.
broadcast_ban_text: %nick% was banned from this server.
```

## Special Topics in the Same File

Two frequently requested topics also live in `config_gameplay.txt` but have their own guides:

- **Friendly fire** including the automatic teamkill punishments: [Configure friendly fire](configure-friendly-fire.md)
- **Whitelist**, so only listed players can join: [Set up a whitelist](set-up-whitelist.md)

:::: info Note
The default values in this guide match the official configuration reference as of 2026. Game updates can change values and keys — when in doubt, check the comments directly in your own `config_gameplay.txt`, they describe every setting.
::::
