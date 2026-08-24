---
description: "Configure friendly fire on a SCP: Secret Laboratory server"
---

# How to Configure Friendly Fire on Your SCP: Secret Laboratory Server

Using the `config_gameplay.txt` file you can enable damage between teammates (friendly fire) and configure the automatic teamkill detector.

:::: warning Warning
The path to the configuration file contains the Game Port of your server: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Replace `<Port>` with the actual Game Port of your server. You can find it in the dashboard under **Overview**.
::::

:::: danger Important
If you only set `friendly_fire: true`, you automatically arm the teamkill detector as well: the spawn detector and the explosion detector are enabled out of the box and **ban** players for 48 hours — the spawn detector already triggers at 2 teamkills or 180 team damage within 120 seconds after spawning. If players on your server complain about "random" automatic bans, the detector is almost always the cause. The recipes below show how to disable or soften it.
::::

## Configure friendly fire

1. <b>Find out the Game Port</b><br>
   Open the dashboard of your server and note the Game Port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the configuration file</b><br>
   Open the following file — replace `<Port>` with your Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. <b>Adjust the values</b><br>
   Pick one of the [recipes](#recipes) below and apply its values. Edit existing entries directly in the file; if a key is missing, add it as a new line in the format `key: value`.

6. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

## Basic settings

| Key | Default | Description |
|-----|---------|-------------|
| `friendly_fire` | `false` | Enables or disables damage between teammates |
| `friendly_fire_multiplier` | `0.4` | Multiplier for damage dealt to teammates (`0.4` = 40% of normal damage) |

## The teamkill detector

The detector tracks teamkills and team damage and punishes players automatically as soon as either threshold is reached — it counts kills **or** damage. There are five variants, each with its own time frame:

| Variant | Key prefix | Enabled by default | Time frame |
|---------|-----------|--------------------|------------|
| Round | `ff_detector_round_` | No | the entire round |
| Life | `ff_detector_life_` | No | one life (until the next respawn) |
| Window | `ff_detector_window_` | No | rolling window of 180 seconds (`ff_detector_window_seconds`) |
| Spawn | `ff_detector_spawn_` | **Yes** | 120 seconds after spawning (`ff_detector_spawn_window_seconds`) |
| Explosion after disconnecting | `ff_detector_explosion_after_disconnecting_` | **Yes** | triggers when a player's explosion (e.g. a thrown grenade) hits teammates after the player has left the server |

Each variant is configured with the same suffixes (the explosion variant has no `_kills` and `_damage` thresholds):

| Suffix | Meaning |
|--------|---------|
| `_enabled` | Turns the variant on or off |
| `_kills` | Number of teamkills that triggers the action (`0` disables this threshold) |
| `_damage` | Amount of team damage that triggers the action (`0` disables this threshold) |
| `_action` | Action to perform: `kill`, `kick`, `ban` or `noop` |
| `_ban_time` | Ban duration when the action is `ban` (e.g. `24h`) |

### Default values

| Variant | `_enabled` | `_kills` | `_damage` | `_action` | `_ban_time` |
|---------|------------|----------|-----------|-----------|-------------|
| `round` | `false` | `6` | `500` | `ban` | `24h` |
| `life` | `false` | `4` | `300` | `ban` | `24h` |
| `window` | `false` | `3` | `250` | `ban` | `16h` |
| `spawn` | `true` | `2` | `180` | `ban` | `48h` |
| `explosion_after_disconnecting` | `true` | — | — | `ban` | `48h` |

### Actions

| Value | Effect |
|-------|--------|
| `kill` | The player is killed |
| `kick` | The player is kicked from the server |
| `ban` | The player is banned for the duration set in `_ban_time` |
| `noop` | No action — useful if you only want incidents to be logged |

:::: info Note
Team damage dealt after the round has ended is ignored by the detector. You can find the full list of keys — for example the broadcast and ban messages of each variant — in the [official SCP: Secret Laboratory Tech Wiki](https://techwiki.scpslgame.com/books/server-guides/page/2-gameplay-config-setup).
::::

## Recipes

### Friendly fire with default detector

Enables friendly fire at 40% damage and keeps the detector at its default values:

```
friendly_fire: true
friendly_fire_multiplier: 0.4
```

With this, the spawn detector (48-hour ban at 2 teamkills or 180 team damage shortly after spawning) and the explosion detector (48-hour ban) are armed immediately. For a public server this is reasonable protection — just be aware that the server will ban players without your involvement.

### Friendly fire without detector

Enables friendly fire and cleanly disables all five detector variants — for example for private servers or events where team damage is intended:

```
friendly_fire: true
ff_detector_round_enabled: false
ff_detector_life_enabled: false
ff_detector_window_enabled: false
ff_detector_spawn_enabled: false
ff_detector_explosion_after_disconnecting_enabled: false
```

The variants `round`, `life` and `window` already default to `false` — set all five explicitly anyway, so the state is clearly documented in your configuration.

### Detector on kick instead of ban

Keeps the protection against teamkillers but replaces all automatic bans with a kick:

```
friendly_fire: true
ff_detector_round_action: kick
ff_detector_life_action: kick
ff_detector_window_action: kick
ff_detector_spawn_action: kick
ff_detector_explosion_after_disconnecting_action: kick
```

:::: tip Tip
The detector's default broadcast messages mention a ban ("%nick has been automatically banned for teamkilling."). If you change the action to `kick`, also adjust `ff_detector_<variant>_broadcast_message` where needed so the in-game message is accurate.
::::

:::: info Note
Changes to `config_gameplay.txt` only take effect after a server restart.
::::
