---
description: Improve performance on a Hytale server
---

# How to Improve Performance on a Hytale Server

## Overview

The performance of a Hytale server can be influenced by various factors, including the number of players, the size of the loaded world, and the server configuration. In this article, we'll show you how to optimize the performance of your Hytale server.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Optimize the Configuration

If you don't want to install a plugin, you can also improve server performance by adjusting the configuration file. The most important setting for this is **MaxViewRadius**.

### How to Adjust MaxViewRadius

The view radius determines how many chunks are loaded around a player. A smaller value significantly reduces server load.

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

## How to Install the Performance Saver Plugin

The Performance Saver Plugin by Nitrado is an effective tool for stabilizing your Hytale server. It optimizes resource usage under load and prevents server crashes during high traffic.

### Download

The plugin can be downloaded here: [Performance Saver Plugin on GitHub](https://github.com/nitrado/hytale-plugin-performance-saver)

### Installation

1. <b>Download the plugin</b><br>
   Download the .jar file of the Performance Saver Plugin from GitHub.

2. <b>Upload the plugin</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the .jar file to the `mods/` folder.

3. <b>Restart the server</b><br>
   Restart your server to load the plugin.

## Features of the Performance Saver Plugin

### TPS Limiting

The plugin intelligently limits ticks per second (TPS) to save resources. Based on network and client prediction mechanics, a lower but stable TPS is better for the player experience than fluctuating values.

- **Default with players:** 20 TPS
- **Default without players:** 5 TPS

### Dynamic View Radius Adjustment

The plugin continuously monitors CPU usage (via TPS) and RAM consumption (via Garbage Collection). Under high load, the view radius is automatically reduced to free up resources. Once the load decreases, the view radius is increased again.

### Automatic Garbage Collection

The plugin automatically triggers JVM garbage collection when chunk unloads indicate that memory can be freed. This prevents memory issues and ensures more stable performance.

## Daily Restarts

A daily restart of your server can fix memory leaks (RAM leaks) and keep performance stable.

:::: info Info
Automatic restarts and backups can be requested for free via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
