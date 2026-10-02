---
description: "Adjust the round flow on a SCP: Secret Laboratory server – lobby, late join, Alpha Warhead, Dead Man's Switch, decontamination, SCP-914, item limits and spawn order"
---

# How to Adjust the Round Flow on Your SCP: Secret Laboratory Server

How long the lobby waits, whether late joiners still spawn in, when the Alpha Warhead detonates automatically and how many items a player may carry – you set all of this in the `config_gameplay.txt` file. This guide explains the keys that control the flow of a round and gives you three recipes for typical server concepts.

Intercom, AFK kick, spawn protection and round restart settings are covered in the guide [Adjust gameplay settings](adjust-gameplay-settings.md).

:::: warning Warning
The path to the configuration file contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.
::::

## Change the Round Flow

1. <b>Find the game port</b><br>
   Open the dashboard of your server and note down the game port from the **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the configuration file</b><br>
   Open the following file – replace `<Port>` with your game port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. <b>Adjust the values</b><br>
   Look for the keys from the sections below and only change the value after the colon. If a key is missing, add it as a new line in the format `key: value`. Then save the file.

6. <b>Start the server</b><br>
   Start your server via the dashboard. The changes only take effect with this start.

:::: info Note
Many keys in the file are set to `default`. This makes the server use its built-in default value. You can find the actual values behind it in the tables of this guide.
::::

## Default Values at a Glance

| Key | Default | Effect |
|-----|---------|--------|
| `lobby_waiting_time` | `default` (20 seconds) | Lobby countdown until the round starts |
| `late_join_time` | `0` | Seconds after the round starts during which newly joining players still spawn in |
| `team_respawn_queue` | `default` | Order in which roles are assigned when the round starts |
| `auto_warhead_start_minutes` | `0` | Minutes after the round starts after which the Alpha Warhead starts automatically – `0` disables the feature |
| `auto_warhead_lock` | `true` | The automatically started Alpha Warhead cannot be cancelled |
| `auto_warhead_broadcast_enabled` | `false` | Shows a broadcast message on the automatic start and on detonation |
| `auto_warhead_broadcast_message` | `The Alpha Warhead is being detonated` | Text on the automatic start |
| `auto_warhead_broadcast_time` | `10` | Display duration of the start message in seconds |
| `auto_warhead_detonate_broadcast` | `The Alpha Warhead has been detonated now` | Text on detonation |
| `auto_warhead_detonate_broadcast_time` | `10` | Display duration of the detonation message in seconds |
| `disable_decontamination` | `false` | Set to `true`, the Light Containment Zone is not decontaminated |
| `auto_decon_broadcast_enabled` | `false` | Shows a broadcast message on decontamination |
| `auto_decon_broadcast_message` | `Light Containment Zone is now decontaminated` | Text of the decontamination message |
| `auto_decon_broadcast_time` | `10` | Display duration of the decontamination message in seconds |
| `dms_enabled` | `true` | Enables the Dead Man's Switch |
| `dms_activation_time` | `240` | Length of the Dead Man's Switch countdown in seconds |
| `end_round_on_one_player` | `false` | Controls whether a round may end while only one player is on the server |
| `914_mode` | `default` (`DroppedAndHeld`) | Controls which items and players SCP-914 processes |
| `limit_category_*` | `default` | Maximum number of items per category in the inventory |
| `limit_ammo*` | `default` | Maximum ammo per ammo type |

:::: danger Important
The current SCP: Secret Laboratory has **no** settings for respawn tickets or respawn timers of the MTF and Chaos Insurgency. Keys such as `minimum_MTF_time_to_spawn`, `maximum_MTF_time_to_spawn` or `respawn_tickets_*` come from outdated versions of the configuration file and no longer have any effect. Do not copy them from old guides.
::::

## Lobby and Late Join

### Lobby wait time

`lobby_waiting_time` sets how many seconds the lobby countdown runs before the round starts. The countdown only begins once at least two players are connected. With `default`, the server waits 20 seconds. If the server is full, the round starts immediately.

```
lobby_waiting_time: 30
```

### Late join

`late_join_time` determines how many seconds after the round starts newly joining players still receive a role. Anyone joining later enters the game as a spectator and has to wait for the next reinforcement wave or the next round. With the default value `0`, nobody spawns in directly after the round has started.

```
late_join_time: 60
```

:::: info Note
Late join only applies to players who have not spawned yet in the current round. Anyone who disconnects and rejoins is not spawned in again.
::::

## Automatic Alpha Warhead

The Alpha Warhead can start automatically after a fixed time. This prevents rounds that drag on endlessly. `auto_warhead_start_minutes` counts from the start of the round – with `0` (default), the feature is disabled.

```
auto_warhead_start_minutes: 20
auto_warhead_lock: true
auto_warhead_broadcast_enabled: true
auto_warhead_broadcast_message: The Alpha Warhead is being detonated automatically and cannot be stopped.
auto_warhead_detonate_broadcast: The automatic Alpha Warhead has been detonated.
```

With `auto_warhead_lock: true` (default), the automatically started warhead can no longer be cancelled. If you set the value to `false`, players can stop the countdown as usual.

:::: info Note
The messages only appear if `auto_warhead_broadcast_enabled` is set to `true`. In the configuration template, the value is set to `false` by default.
::::

## Decontamination

The Light Containment Zone is decontaminated during a round. With `disable_decontamination: true`, you turn decontamination off completely. If you want to keep it but show your own message, enable the broadcast:

```
auto_decon_broadcast_enabled: true
auto_decon_broadcast_message: The Light Containment Zone has been decontaminated.
```

## Dead Man's Switch

Once both the MTF and the Chaos Insurgency have no reinforcement waves left, the Dead Man's Switch starts a countdown. When it runs out, the Alpha Warhead starts automatically and can no longer be stopped. You set the length of the countdown in seconds with `dms_activation_time`:

```
dms_enabled: true
dms_activation_time: 180
```

With `dms_enabled: false`, you turn the Dead Man's Switch off completely.

## Round End with One Player

By default (`end_round_on_one_player: false`), a round does not end while fewer than two players are on the server. If you set the value to `true`, a round can also end normally while only one player is connected – handy when you want to test settings on your own.

```
end_round_on_one_player: true
```

## SCP-914 Mode

`914_mode` controls what SCP-914 picks up when refining. With `default`, the server uses `DroppedAndHeld`.

| Value | Effect |
|-------|--------|
| `Dropped` | Only items lying on the floor of the intake chamber |
| `Inventory` | The entire inventory of the players in the intake chamber |
| `Held` | Only the item a player in the intake chamber is holding |
| `DroppedAndPlayerTeleport` | Items on the floor – players in the intake chamber are only teleported, their items stay unchanged |
| `DroppedAndInventory` | Items on the floor and the entire inventory of the players |
| `DroppedAndHeld` | Items on the floor and the item the players are holding |

```
914_mode: DroppedAndInventory
```

## Item and Ammo Limits

### Item categories

These keys set how many items of a category a player may carry at the same time. The inventory holds a maximum of 8 items – a limit of `8` is therefore effectively unlimited.

| Key | Default (without armor) | Category |
|-----|-------------------------|----------|
| `limit_category_grenade` | `2` | Grenades |
| `limit_category_keycard` | `3` | Keycards |
| `limit_category_medical` | `3` | Medical items |
| `limit_category_scpitem` | `3` | SCP items |
| `limit_category_firearm` | `1` | Firearms |

:::: warning Warning
The value `0` does **not** mean unlimited: with `0`, players can no longer pick up items of this category at all.
::::

### Ammo

The ammo limits accept values from 1 to 65535:

| Key | Default (without armor) | Ammo |
|-----|-------------------------|------|
| `limit_ammo9x19` | `40` | 9x19 mm |
| `limit_ammo556x45` | `40` | 5.56x45 mm |
| `limit_ammo762x39` | `40` | 7.62x39 mm |
| `limit_ammo44cal` | `18` | .44 caliber |
| `limit_ammo12gauge` | `14` | 12 gauge (shotgun) |

:::: info Note
Armor raises the item and ammo limits further. The values from the configuration are the base values without armor.
::::

## Spawn Order

`team_respawn_queue` determines which roles are assigned when the round starts. Each digit stands for one player slot: with N players, the first N digits determine how many SCPs, Facility Guards, Scientists etc. are spawned. Which player gets which role is chosen by the game. If there are more players than digits, the sequence starts over from the beginning.

| Digit | Role |
|-------|------|
| `0` | SCP |
| `1` | Facility Guard |
| `2` | Chaos Insurgency |
| `3` | Scientist |
| `4` | Class-D |

With `default`, the server uses the built-in order `4014314031441404134041434414`.

:::: tip Example
With 10 players, this order assigns two SCPs and eight Class-D – suitable for an event in which only Class-D face the SCPs:

```
team_respawn_queue: 4044440444
```
::::

## Recipes for Typical Servers

You can copy the following recipes directly into your `config_gameplay.txt`. Only change the existing keys – do not create duplicate entries. If a key is missing, add it as a new line in the format `key: value`.

### Shorter rounds

For servers on which rounds should end quickly:

```
lobby_waiting_time: 15
auto_warhead_start_minutes: 15
auto_warhead_lock: true
dms_activation_time: 120
```

### More relaxed rounds

For servers on which late joiners can still play along and players may carry more:

```
lobby_waiting_time: 30
late_join_time: 60
limit_category_medical: 5
limit_category_grenade: 3
```

### Event server

For events with their own flow, where decontamination and automatic warheads would get in the way:

```
lobby_waiting_time: 60
disable_decontamination: true
auto_warhead_start_minutes: 0
dms_enabled: false
team_respawn_queue: 4044440444
```

:::: info Note
The default values in this guide match the game's configuration template as of 2026. Game updates can change values and keys – when in doubt, check the comments directly in your own `config_gameplay.txt`.
::::
