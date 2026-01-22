---
description: Improve performance on a Hytale server
---

# How to Improve Performance on a Hytale Server

## Overview

The performance of a Hytale server can be influenced by various factors, including the number of players, the size of the loaded world, and the server configuration. In this article, we'll show you how to optimize the performance of your Hytale server.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Optimize the Configuration on a Hytale Server

If you don't want to install a plugin, you can also improve server performance by adjusting the configuration file. The most important setting for this is **MaxViewRadius**. The view radius determines how many chunks are loaded around a player. A smaller value significantly reduces server load.

1. <b>Stop the server</b><br>
   Stop your server via the management panel.

2. <b>Open the configuration file</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Find MaxViewRadius</b><br>
   Look for the `MaxViewRadius` setting in the `config.json`.

4. <b>Adjust the value</b><br>
   Reduce the value to improve performance:

   | Value | Recommendation |
   | ----- | -------------- |
   | 32 | Default - high server load |
   | 16 | Recommended - good balance |
   | 10 | Low - best performance |
   | 8 | Minimal - for weaker servers |

5. <b>Start the server</b><br>
   Start your server for the changes to take effect.

## How to Adjust Startup Parameters on a Hytale Server

Via the management panel, you can add additional startup parameters in the settings. This allows you to add custom Garbage Collector parameters to further optimize the server.

1. <b>Open the Management Panel</b><br>
   Open the management panel of your server.

2. <b>Open Settings</b><br>
   Navigate to **Settings**.

3. <b>Adjust Startup Parameters</b><br>
   Add your desired parameters in the **Additional Startup Parameters** field.
   ```
   -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200
   ```

4. <b>Restart the Server</b><br>
   Restart your server for the changes to take effect.

### Default Garbage Collector Parameters

The following parameters are already configured by default:

| Parameter | Description |
| --------- | ----------- |
| `-XX:+UseG1GC` | Enables the G1 Garbage Collector, optimized for servers with large RAM |
| `-XX:+ParallelRefProcEnabled` | Speeds up reference processing through parallelization |
| `-XX:MaxGCPauseMillis=200` | Limits Garbage Collection pauses to a maximum of 200ms |

:::: tip Tip
The default values are already optimal for most servers. Only change these if you know what you're doing.
::::

## Recommended Performance Plugins for Hytale Servers

To stabilize your server, we recommend the following plugins:

| Plugin | Description |
|--------|-------------|
| Server Optimizer | Dynamic performance adjustments, NPC AI optimization |
| Hyfixes | Bug fixes, crash prevention, RAM optimization |
| Performance Saver | TPS limiting, dynamic view radius adjustment |

### Downloads

- [Server Optimizer on CurseForge](https://www.curseforge.com/hytale/mods/server-optimizer)
- [Hyfixes on CurseForge](https://www.curseforge.com/hytale/mods/hyfixes)
- [Performance Saver on CurseForge](https://www.curseforge.com/hytale/mods/nitrado-performancesaver)

### Installation

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Download the Plugins</b><br>
   Download the .jar files of the desired plugins from CurseForge.

3. <b>Upload the Plugins</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the .jar files to the `mods/` folder.

4. <b>Start the Server</b><br>
   Start your server.


### Server Optimizer

The Server Optimizer Plugin provides the following benefits:

- **View Distance Management** - Lowers view distance on low TPS or high RAM usage
- **Per-Player Simulation Range** - Reduces simulation range per player during TPS drops
- **NPC AI Optimization** - Adjusts NPC tick rates based on distance and visibility
- **Self-Healing Config** - Missing settings are automatically added
- **Profiling** - Creates detailed performance reports

### Hyfixes

The Hyfixes Plugin provides the following benefits:

- **Crash Prevention** - Fixes server crashes from null references and iterator errors
- **Timeout Fixes** - Prevents player kicks during network lag in interactions
- **RAM Optimization** - Improved chunk cleanup (up to 77% RAM reduction)
- **Interaction Chain Fixes** - Removes corrupted interaction chains before crashes

:::: warning Note
Hyfixes consists of two files: `hyfixes.jar` goes in the `mods/` folder, `hyfixes-early.jar` goes in the `earlyplugins/` folder.
::::

### Performance Saver

The Performance Saver Plugin provides the following benefits:

- **TPS Limiting** - Intelligently limits ticks per second (20 TPS with players, 5 TPS without)
- **Dynamic View Radius Adjustment** - Automatically reduces view distance under high load
- **Automatic Garbage Collection** - Triggers memory cleanup on chunk unloads

## How to Install the Spark Plugin on a Hytale Server

The Spark Plugin is a performance profiler that allows you to analyze lag causes on your server. It shows you exactly which processes are consuming the most resources.

### Download

The plugin can be downloaded here: [Spark on CurseForge](https://www.curseforge.com/hytale/mods/spark)

### Installation

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Download the Plugin</b><br>
   Download the .jar file of the Spark Plugin from CurseForge.

3. <b>Upload the Plugin</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the .jar file to the `mods/` folder.

4. <b>Start the Server</b><br>
   Start your server.

### Using Spark

With Spark, you can use the following commands in-game as admin:

| Command | Description |
| ------- | ----------- |
| `/spark profiler start` | Start profiling |
| `/spark profiler stop` | Stop profiling and create report |
| `/spark tps` | Show current TPS |
| `/spark health` | Show server health |

## Daily Restarts

A daily restart of your server can fix memory leaks (RAM leaks) and keep performance stable.

:::: info Info
Automatic restarts and backups can be requested for free via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::

## Feedback to the Hytale Team

Have you discovered performance issues or bugs with the server software? You can send direct feedback to the Hytale development team:

[Send Feedback](https://accounts.hytale.com/feedback)
