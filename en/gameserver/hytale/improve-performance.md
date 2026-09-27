---
description: Improve performance on a Hytale server
---

# How to Improve Performance on a Hytale Server

## Overview

The performance of a Hytale server can be influenced by various factors, including the number of players, the size of the loaded world, and the server configuration. In this article, we'll show you how to optimize the performance of your Hytale server.

:::: info Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Optimize the Configuration on a Hytale Server

If you don't want to install a plugin, you can also improve server performance by adjusting the configuration file. The most important setting for this is **MaxViewRadius**. The view radius determines how many chunks are loaded around a player. A smaller value significantly reduces server load.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open the configuration file</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Find MaxViewRadius</b><br>
   Look for the `MaxViewRadius` setting in the `config.json`.

4. <b>Adjust the value</b><br>
   Reduce the value to improve performance:

   | Value | Recommendation |
   | ----- | -------------- |
   | 32 | Default and maximum - high server load |
   | 16 | Good balance between visibility and performance |
   | 12 | Recommended by Hytale for performance and gameplay (384 blocks) |
   | 10 | Low - for servers with many players or limited RAM |

5. <b>Start the server</b><br>
   Start your server for the changes to take effect.

:::: tip Tip
You can also change the value without a restart via the console in the dashboard, e.g. with `maxviewradius 12`. Learn more in [Change Max View Radius](change-max-view-radius.md).
::::

## How to Adjust Startup Parameters on a Hytale Server

Via the dashboard, you can add additional startup parameters in the settings. This allows you to add custom Garbage Collector parameters to further optimize the server.

1. <b>Open the Dashboard</b><br>
   Open the dashboard of your server.

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

## Recommended Performance Plugin for Hytale Servers

To stabilize your server, we recommend the **Nitrado PerformanceSaver** plugin. It is also recommended in Hytale's official server manual.

### Download

The plugin can be downloaded here: [Performance Saver on CurseForge](https://www.curseforge.com/hytale/mods/nitrado-performancesaver)

### Installing the Performance Plugin

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Download the Plugin</b><br>
   Download the .jar file of the plugin from CurseForge.

3. <b>Upload the Plugin</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the .jar file to the `mods/` folder.

4. <b>Start the Server</b><br>
   Start your server.

### Performance Saver

The Performance Saver Plugin provides the following benefits:

- **TPS Limiting** - Intelligently limits ticks per second (20 TPS with players, 5 TPS without)
- **Dynamic View Radius Adjustment** - Automatically reduces view distance under high load
- **Automatic Garbage Collection** - Triggers memory cleanup on chunk unloads

After the first start, you can find the plugin's settings in the `mods/Nitrado_PerformanceSaver/config.json` file.

## How to Install the Spark Plugin on a Hytale Server

The Spark Plugin is a performance profiler that allows you to analyze lag causes on your server. It shows you exactly which processes are consuming the most resources.

### Download

The plugin can be downloaded here: [Spark on CurseForge](https://www.curseforge.com/hytale/mods/spark)

### Installing Spark

1. <b>Stop the Server</b><br>
   Stop your server via the dashboard.

2. <b>Download the Plugin</b><br>
   Download the .jar file of the Spark Plugin from CurseForge.

3. <b>Upload the Plugin</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the .jar file to the `mods/` folder.

4. <b>Start the Server</b><br>
   Start your server.

### Using Spark

With Spark, you can use the following commands in-game as admin. In the console of the dashboard, enter them without the `/`:

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
