---
slug: "setup-spark"
language: "en"
title: "How to Set Up spark on Your Minecraft Java Edition Server and Find the Cause of Lag"
description: "Install spark on a Minecraft Java Edition server, use it and spot the cause of lag in the report"
tags: []
date: "2026-11-09"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Setup spark"
sort: 40
related: ["gameserver/minecraft/improve-performance", "gameserver/minecraft/fix-server-crashes", "gameserver/minecraft/install-mods", "gameserver/minecraft/install-plugins"]
---

[spark](https://spark.lucko.me/) is a free performance profiler for Minecraft servers. Instead of guessing why your server lags, spark shows you **what** is using up the processing time – a specific mod, too many mobs, world generation or full memory.

This guide shows you the essentials: install spark, collect data and spot the typical causes of lag. All commands and features in detail are in the official [spark documentation](https://spark.lucko.me/docs).

> [!NOTE]
> spark cannot be installed on a plain **Vanilla** server, because Vanilla loads neither plugins nor mods.

## Step 1: Install spark

The file you need depends on the server platform you selected in the [Change Version](/tutorials/gameserver/minecraft/change-version) wizard:

| Platform | What you need to do | Folder |
| -------- | ------------------- | ------ |
| Paper / Purpur 1.21 and newer | Nothing – spark is already built in | – |
| Paper / Purpur before 1.21, Spigot | Upload the **Bukkit (Paper/Spigot)** version | `plugins` |
| Fabric | Upload the **Fabric** version **and** the [Fabric API](https://modrinth.com/mod/fabric-api) | `mods` |
| Forge / NeoForge | Upload the **Forge** or **NeoForge** version | `mods` |
| Velocity / BungeeCord | Upload the **Velocity** or **BungeeCord** version – the commands there are `/sparkv` or `/sparkb` | `plugins` |

You can find the files on [spark.lucko.me/download](https://spark.lucko.me/download), and mod versions for older Minecraft versions on [Modrinth](https://modrinth.com/mod/spark). On mod servers, you can also install spark directly via the **Plugins & Mods** page in the dashboard (see [Install Mods](/tutorials/gameserver/minecraft/install-mods)). Restart the server afterwards. Your players do **not** need to install spark.

> [!WARNING]
> On **Fabric**, the required **Fabric API** is not installed automatically. If it is missing, the server does not start and the console names missing modules such as `fabric-api-base`.

## Step 2: Quick check with `/spark tps`

You can run the commands in the console in the dashboard or in-game with [OP rights](/tutorials/gameserver/minecraft/grant-op-rights). During heavy lag, the console responds more reliably.

> [!WARNING]
> In the console, all commands must be entered without `/`!

`/spark tps` shows you right away whether your server lags. This is the output of a heavily overloaded server:

```text
TPS from last 5s, 10s, 1m, 5m, 15m:
 4.54, 5.10, 7.83, 12.40, 15.02

Tick durations (min/med/95%ile/max ms) from last 10s, 1m:
 38.2/142.6/980.4/2066.0;  31.5/118.3/870.1/2066.0

CPU usage from last 10s, 1m, 15m:
 74%, 68%, 55%  (system)
 6%, 6%, 5%  (process)
```

- **TPS**: Ideally, the server calculates the world 20 times per second. Values below 18 mean noticeable lag.
- **Tick durations**: How long a tick takes (shortest, median, 95th percentile, longest). For 20 TPS, a tick may take **at most 50 ms**. This is the most important number.
- **CPU**: Often misread – see "Common misconceptions" below.

In the example, even the median is 142.6 ms – the server is **constantly** overloaded. If the median is low but the maximum is very high, the server only has individual **lag spikes**.

## Step 3: Create a profiler report

The profiler records what the server spends its time on. **The lag must occur during the recording** – a report from an empty server shows you nothing.

1. **Start the profiler**\
   Run this as soon as the lag occurs:

   ```text
   /spark profiler start --timeout 600
   ```

2. **Keep playing normally**\
   Let your players keep playing normally in the meantime. After 10 minutes, spark stops automatically.

3. **Open the report**\
   spark gives you a link to the report. You can also stop earlier with `/spark profiler stop`.

> [!TIP]
> If your server only has individual lag spikes, start the profiler with `/spark profiler start --only-ticks-over 100`. spark then only records ticks over 100 ms. More on this in the spark guide [Finding lag spikes](https://spark.lucko.me/docs/guides/Finding-lag-spikes).

## Step 4: Read the report

1. **Expand the server thread**\
   In the report, expand the **Server thread** entry – this is where the entire game world runs.

2. **Follow the highest percentages**\
   Always expand the entry with the highest percentage and work your way down until you arrive at a concrete cause.

3. **Sort by plugin or mod**\
   Use the eye icon to switch to the **Sources** view. It shows the time split by plugin or mod.

By the way, an entry like `waitForNextTick` means the server has nothing to do – that is good. The spark guide [Using the viewer](https://spark.lucko.me/docs/Using-the-viewer) explains how to read the report in detail.

## Spot the problems

| What you see in the report | Cause | What helps |
| -------------------------- | ----- | ---------- |
| `EntityTickList` or `tickNonPassenger` near the top | Too many mobs, animals, villagers or items on the ground | Make mob farms smaller, pick up items |
| `tickBlockEntities` near the top | Many hoppers, furnaces or machines from mods | Shorten hopper chains, make large mod factories smaller |
| `tickChunks` or world generation near the top | Players travel far and new chunks are generated constantly | Set a [world border](/tutorials/gameserver/minecraft/change-world-border) and pre-generate the world, e.g. with [Chunky](https://modrinth.com/plugin/chunky) |
| One plugin or mod name dominates in **Sources** | This plugin or mod causes the lag | Update it, configure it more conservatively or – with a backup – remove it as a test |
| **GC** tile in the report is red | Memory is running low | Remove unnecessary plugins and mods; if RAM stays full, upgrade to more RAM |

> [!WARNING]
> Create a [backup](/tutorials/gameserver/minecraft/create-backup) before you remove a mod. If blocks or items from that mod are placed in the world, they disappear – this can permanently damage the world.

[Improve Performance](/tutorials/gameserver/minecraft/improve-performance) shows how to fix the cause afterwards.

### Common misconceptions

- **"Can't keep up! … Running 5000ms or 100 ticks behind"**: The server is so far behind schedule overall that it skips ticks – a clear sign of server lag. Paper and Purpur do not print this message, so a console without it does not mean everything is fine.
- **"Process CPU is low, so the server isn't overloaded"**: It can be. The game world runs in a single thread on **one** processor core, but process CPU is measured against all cores. On a system with 16 threads, 6 % already equals one fully loaded core.
- **"System CPU is high, so it's the hardware"**: System CPU covers all processes of the entire system and can be inaccurate in containers. A test tells you more: run `/spark tps` when no players are online. If the tick duration drops significantly, the load comes from your world or your plugins and mods. If it stays high even with an empty server, contact support.
- **"The same mods ran fine on another server"**: Lag depends above all on the **world** – how many chunks, machines, farms and mobs there are. A new world often runs smoothly with the same mods, while a grown one no longer does.

## The most important commands

| Command | Description |
| ------- | ----------- |
| `/spark tps` | TPS, tick duration and CPU usage |
| `/spark health` | Health report with RAM, CPU and disk |
| `/spark profiler start --timeout 600` | Start the profiler for 10 minutes |
| `/spark profiler stop` | Stop the profiler and get the report link |

All other commands are in the [command reference of the spark documentation](https://spark.lucko.me/docs/Command-Usage).

> [!TIP]
> If you contact support about lag, include the report link from `/spark profiler stop`, the output of `/spark tps` and the time of the lag right away. That way the team can help you much faster.
