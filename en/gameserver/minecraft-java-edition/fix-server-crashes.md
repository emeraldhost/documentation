---
description: Find and fix crashes on a Minecraft Java Edition server
---

# How to Fix Crashes on Your Minecraft Java Edition Server

If your Minecraft Java Edition server suddenly crashes, there is no reason to panic: almost every crash leaves traces in the logs that let you track down the cause. This guide shows you step by step how to narrow down the culprit and fix the problem.

## Crash, Lag or Startup Problem?

Before you start troubleshooting, take a moment to identify what exactly is happening:

- **Crash**: The server suddenly shuts down or restarts on its own. That is what this guide is about.
- **Lag**: The server keeps running, but everything stutters and responds with a delay. In that case, [Improve Performance](improve-performance.md) is the right guide for you.
- **Server won't start at all**: If every start fails immediately, take a look at the console in the dashboard. Common causes are a [Minecraft EULA](accept-minecraft-eula.md) that has not been accepted yet or a Java version that doesn't match the Minecraft version (see the error table below).

## Reading the Logs

The logs are your most important troubleshooting tool — they almost always tell you why the server crashed.

### Where to Find the Logs

- **Console**: In the dashboard you can watch the server's output live. The last lines before the crash are usually the crucial ones.
- **Log file**: Connect to your server via [SFTP](../establish-sftp-connection.md). The `logs` folder contains the file `latest.log` with the complete log of the last start. Older logs sit in the same folder as compressed `.log.gz` files.
- **Crash reports**: For many crashes, the server additionally creates a detailed report in the `crash-reports` folder — with a timestamp in the file name, e.g. `crash-2026-08-20_14.30.05-server.txt`. If there is a file matching the time of your crash, start with it.

### How to Read a Crash Report

You don't need to understand Java code to make use of a crash report:

1. <b>Read the header</b><br>
   At the very top, the `Description:` line names the cause of the error in short form (e.g. `Ticking entity`), and directly below it you find the actual error message (e.g. `java.lang.OutOfMemoryError: Java heap space`).

2. <b>Skim the stack trace</b><br>
   Below that follows the so-called stack trace — many lines starting with `at`. They show where in the code the error occurred.

3. <b>Look for plugin and mod names</b><br>
   If the name of one of your plugins or mods appears in the stack trace, you have most likely found the culprit — continue with the section "Mods and Plugins as the Cause".

### Typical Error Messages

| Error message | Meaning | Solution |
| ------------- | ------- | -------- |
| `java.lang.OutOfMemoryError: Java heap space` | The server's memory is full. | See "If the RAM Is Not Enough" further below. |
| `java.lang.UnsupportedClassVersionError` | The Java version doesn't match the Minecraft version. | Set the Java version that matches your Minecraft version — [Change Version](change-version.md) shows how. |
| `Ticking entity` / `Ticking block entity` | A broken entity or block entity crashes the server while being processed — often caused by mods. | See "If the World Is Corrupted" further below. |
| `Server attempted to load chunk saved with newer version` | The world has already been loaded with a newer Minecraft version — downgrading a world is not possible. | Switch back to the newer version ([Change Version](change-version.md)) or restore a backup from before the update. |

:::: tip Tip
When you create a support ticket, attach the `latest.log` file or the matching crash report right away — this lets the team help you much faster.
::::

## Keeping the Server Software Up to Date

Older server versions contain known bugs, some of which can be triggered deliberately by players. Therefore, keep your server software up to date — via the **Version** and **Build ID** fields in the settings of the dashboard. You can find the individual steps in [Change Version](change-version.md).

:::: warning Warning
Don't update blindly: after a major Minecraft update, your plugins and mods often need an update themselves — otherwise the server crashes precisely **because** of the update. Check the download pages beforehand to make sure all plugins and mods support your target version, and create a [backup](create-backup.md).
::::

## Mods and Plugins as the Cause

Faulty or outdated plugins and mods are the most common cause of crashes by far.

### Checking for Known Issues

If a plugin or mod name appears in the stack trace, first check its download page ([Modrinth](https://modrinth.com/), [Hangar](https://hangar.papermc.io/), [CurseForge](https://www.curseforge.com/minecraft)):

- Is the plugin or mod compatible with your Minecraft version and your server software?
- Is there a newer version? Your problem is often already fixed there.

### Narrowing Down the Culprit (Binary Search)

If the log doesn't point to a clear culprit, you can find it by systematically halving:

1. <b>Create a backup</b><br>
   First create a [backup](create-backup.md) so you can return to the current state at any time.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Create a subfolder</b><br>
   Connect via [SFTP](../establish-sftp-connection.md) and create a subfolder inside the `plugins` or `mods` folder, e.g. `disabled`.

4. <b>Move half of the files</b><br>
   Move half of the `.jar` files into the subfolder — the server only loads files that sit directly in the `plugins` or `mods` folder. Don't delete anything!

5. <b>Start the server and test</b><br>
   Start the server and check whether the crash still occurs.

6. <b>Keep halving</b><br>
   If the server still crashes, the culprit is in the active half — move half of those files into the subfolder as well. If the server runs stable, the culprit is in the subfolder — move half of those files back. Repeat this until only one file remains as the culprit.

7. <b>Fix the culprit</b><br>
   Update the plugin or mod you found — or remove it permanently if there is no update. Afterwards, move all remaining files back.

:::: warning Warning
On modded servers, the world often depends on the mods: if you remove a mod whose blocks or items are built into the world, that content disappears — which can permanently corrupt the world. Only run the binary search with a recent [backup](create-backup.md) at hand.
::::

## If the RAM Is Not Enough

If the crash report shows `java.lang.OutOfMemoryError`, or if the server mainly crashes when many players are online or many mods are loaded, the server is running out of memory:

- Remove plugins and mods you don't really need — every single one costs RAM.
- Lower the view distance and optimize the configuration — [Improve Performance](improve-performance.md) shows the most effective levers.
- If that isn't enough, your players, plugins and mods simply need more memory — in that case you should upgrade your server with more RAM.

## If the World Is Corrupted

Sometimes the cause lies in the world itself — for example after a crash while saving, or because of a broken entity.

### Fixing Ticking Entity Crashes Directly

For a `Ticking entity` crash, the crash report names the entity type and its exact coordinates in the `Entity being ticked` section. After a restart, the server often runs again at first — remove the broken entity via the console as quickly as possible:

```
kill @e[type=minecraft:villager,x=123,y=64,z=-45,distance=..3]
```

:::: warning Warning
In the console, all commands must be entered without `/`!
::::

Replace the type and coordinates with the values from your crash report. If the server crashes again immediately, restoring a backup remains the safest way.

### Restoring a Backup

The most reliable way to deal with a corrupted world: restore a backup from a point in time before the first crash. [Create Backup](create-backup.md) shows how creating and restoring backups works.

### A New World as the Last Resort

If no backup helps either, a new world remains as the last resort — you can find the individual steps in [Delete World](delete-world.md).

:::: danger Important
When you delete the world, all builds, inventories and progress are lost irrevocably. Create a [backup](create-backup.md) beforehand in case you need the old world again later.
::::

## If Nothing Helps

You have checked the logs, narrowed down plugins and mods, and ruled out the world — and the server still crashes? Then create a support ticket and attach the `latest.log` file as well as the most recent crash report from the `crash-reports` folder. This way, the team can look into the crash directly.
