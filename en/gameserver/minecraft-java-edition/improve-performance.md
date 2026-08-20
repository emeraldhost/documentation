---
description: Improve performance on a Minecraft Java Edition server
---

# How to Improve Performance on Your Minecraft Java Edition Server

## Understanding Lag

A Minecraft server calculates the game world in so-called ticks — **20 ticks per second (TPS)** is the normal value. If the server can no longer keep up with 20 TPS, everything noticeably slows down: mobs move jerkily, plants grow with a delay and broken blocks briefly reappear.

Not every "lag" is server lag — three things are often confused:

- **Server lag**: The TPS drops below 20. Affects all players at the same time.
- **Connection lag**: A high ping between player and server. Only affects individual players — the server can still run at a stable 20 TPS.
- **Client FPS**: A low frame rate is caused by the player's own PC and has nothing to do with the server.

This guide is about server lag — and about how to find and fix its cause.

## How to Find the Cause with spark

[spark](https://spark.lucko.me/) is a free performance profiler for Minecraft servers. It shows you the current TPS, the server's load and, most importantly, **what exactly** is consuming the tick time — instead of guessing, you see the cause in black and white.

:::: info spark is already included in Paper
Since Minecraft **1.21**, Paper ships with spark built in. If your server runs Paper 1.21 or newer, there is nothing to install — the commands below work right away.
::::

### Installing spark

For older versions or other server software, download spark from [spark.lucko.me](https://spark.lucko.me/download) (alternatively via [Modrinth](https://modrinth.com/plugin/spark) or [Hangar](https://hangar.papermc.io/lucko/spark)):

1. <b>Download the matching version</b><br>
   Choose **Bukkit** if your server runs Paper, Purpur or Spigot, or **Forge**, **NeoForge** or **Fabric** for modded servers.

2. <b>Upload the file</b><br>
   On plugin servers, upload the `.jar` file to the `plugins` folder (see [Install Plugins](install-plugins.md)); on modded servers, upload it to the `mods` folder (see [Install Mods](install-mods.md)).

3. <b>Restart the server</b><br>
   Restart your server so spark gets loaded.

### Using spark

You can run the commands in-game (with [OP rights](grant-op-rights.md)) or via the console in the dashboard.

:::: warning Attention
In the console, all commands must be entered without `/`!
::::

| Command | Description |
| ------- | ----------- |
| `/spark tps` | Shows the current TPS and CPU usage |
| `/spark health` | Shows a health report with TPS, CPU, RAM and disk usage |
| `/spark health --upload` | Uploads the health report to the spark viewer as a link |
| `/spark profiler start` | Starts the profiler |
| `/spark profiler stop` | Stops the profiler and creates the report link |

### Creating a Profiler Report

1. <b>Start the profiler</b><br>
   Run `/spark profiler start` while the lag is occurring.

2. <b>Play as usual</b><br>
   Let the profiler run for 5–10 minutes so enough data is collected.

3. <b>Stop the profiler</b><br>
   Run `/spark profiler stop`. spark gives you a link to the finished report.

4. <b>Open the report</b><br>
   Open the link in your browser.

### Reading the Report

The spark viewer shows a call tree with percentages: the higher the value, the more tick time the entry consumes. Expand the largest entries and work your way down. Rough rules of thumb:

- **Entity entries near the top** (e.g. `entityTick`): Too many mobs, items or hoppers — see the measures further below.
- **Chunk or world generation entries**: Too many chunks are being loaded or generated — lower the view distance and set a world border.
- **A plugin or mod name near the top**: This plugin is causing the lag — update it, configure it more conservatively or remove it.

## Quick Wins

:::: tip Tip
Create a [backup](create-backup.md) before making bigger changes to the configuration.
::::

### server.properties

The two most effective settings live in the `server.properties` file:

- **`view-distance`** determines how many chunks the server loads and sends around each player. Fewer chunks mean significantly less load — see [Change View Distance](change-view-distance.md) for sensible values.
- **`simulation-distance`** determines the radius in which mobs, redstone and plants are actively ticked. A lower simulation distance often saves the most tick time — details in [Change Simulation Distance](change-simulation-distance.md).

### Paper Configuration

If your server runs Paper or Purpur, you can connect via [SFTP](../establish-sftp-connection.md) and apply further optimizations in the file `config/paper-world-defaults.yml`. All settings are described in the [official Paper documentation](https://docs.papermc.io/paper/reference/world-configuration) — these ones demonstrably help:

| Setting | Default | Effect |
| ------- | ------- | ------ |
| `misc.redstone-implementation` | `VANILLA` | `ALTERNATE_CURRENT` calculates redstone much more efficiently |
| `environment.optimize-explosions` | `false` | `true` speeds up explosions (TNT, creepers) by caching entity lookups |
| `hopper.disable-move-event` | `false` | `true` disables the `InventoryMoveItemEvent` and relieves servers with many hoppers |
| `collisions.max-entity-collisions` | `8` | A lower value (e.g. `4`) reduces the load of large mob crowds |

Restart the server after every change.

:::: warning Attention
Only enable `hopper.disable-move-event` if none of your plugins rely on this event (e.g. protection plugins that log item movements).
::::

## The Right Server Software

Vanilla is by far the slowest server software. **Paper** contains hundreds of performance optimizations, which is why it comes pre-installed on EmeraldHost servers by default. **Purpur** builds on Paper and offers additional configuration options.

If your server still runs Vanilla and you don't need mods, switching to Paper is the single most effective measure. You change the software via the **Software** field in the settings of the dashboard — the individual steps can be found in [Change Version](change-version.md).

## Further Measures Against Lag

The most common sources of lag in practice — and what helps against them:

- **Too many entities**: Huge mob farms, thousands of items on the ground or long hopper chains cost a lot of tick time. Limit the size of farms, pick up item drops promptly and replace unnecessary hoppers (e.g. with water transport).
- **Large redstone contraptions**: Permanently running clocks and machines keep ticking even when nobody uses them. Build in off switches.
- **Widely scattered players**: Every player loads their own chunk area. A [world border](change-world-border.md) keeps the world compact and prevents new chunks from being generated all the time.
- **Too many plugins or mods**: Every plugin costs performance. Remove what you don't use — the spark report shows you which plugins consume the most time.

## If the RAM Is Permanently Full

If `/spark health` permanently shows nearly full RAM usage, even the best optimization won't help anymore: more players, plugins and mods simply need more memory. In that case you should upgrade your server with more RAM.

## Daily Restarts

A daily restart of your server can fix memory leaks (RAM leaks) and keep performance stable.

:::: info Info
Automatic restarts and backups can be requested for free via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
