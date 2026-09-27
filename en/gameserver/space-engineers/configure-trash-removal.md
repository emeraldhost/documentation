---
description: Configure trash removal, the AFK kick and pausing when empty on a Space Engineers server
---

# How to Configure Trash Removal on Your Space Engineers Server

Space Engineers comes with its own cleanup system: **Trash Removal** deletes debris and small abandoned grids, limits floating objects and stops grids that move far away from players. This keeps your world tidy and leaves the server fewer objects to simulate — no plugins required.

In this guide you set up three things:

- **Trash Removal** — what the server deletes automatically
- **AFK kick** — automatically disconnect inactive players
- **Pause the simulation when nobody is online**

None of these settings has a field in the dashboard. You change them in your server's files or in the in-game admin screen. The dashboard does not overwrite these values on startup, so your changes are kept.

## How to edit the files

:::: warning Warning
Stop your server before editing a file. The server rewrites `Sandbox_config.sbc` every time it saves the world and overwrites your changes.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Create a backup</b><br>
   Create a [backup](../create-backup.md) or download a copy of the file you want to edit. This lets you restore the previous state if something goes wrong while editing.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser in the dashboard.

4. <b>Open the file</b><br>
   Open the matching file:

   | Settings | File |
   | --- | --- |
   | Trash Removal and AFK kick | `/config/Saves/World/Sandbox_config.sbc` |
   | Pause when empty | `/config/SpaceEngineers-Dedicated.cfg` |

5. <b>Change the values</b><br>
   Find the entry and change only the value between the tags. The entries are already in the file, so you do not need to add new lines.

6. <b>Start the server</b><br>
   Save the file and start your server.

For how to change world settings in general, see [Change world settings](change-world-settings.md).

:::: danger Important
Make sure the XML stays valid: every value sits between an opening tag and a closing tag with the same name, for example `<AFKTimeountMin>30</AFKTimeountMin>`.

- If the server cannot read `Sandbox_config.sbc`, it discards the file and loads the settings from `Sandbox.sbc` instead. On the next save it overwrites `Sandbox_config.sbc`, and your changes are lost.
- If the server cannot read `SpaceEngineers-Dedicated.cfg`, it discards the file and uses the game's default values. Among other things, the path to your world, your admins and your bans are then missing — your world is not loaded.
::::

:::: tip Tip
While loading the world, the server console shows the line `Sandbox world configuration file found, overriding checkpoint settings.` If it is missing, the server could not read your `Sandbox_config.sbc`. In that case, stop the server, restore your backup from step 2 and change the values again.
::::

## Trash Removal

Trash Removal is already active on your server. It keeps checking all grids — ships, stations and debris — and deletes those that do not meet any of the protection rules.

### What gets deleted with the default values

With the default values, the server only deletes a grid if **all** of the following apply:

- It has **fewer than 20 blocks**.
- It is **more than 500 m** away from every player.
- It is **not static**, so it is not a station.
- It has **no power**.
- It is **not being controlled**.
- It has **no production block** such as a refinery or an assembler.
- It has **no medical room and no survival kit**.

Typical examples are debris after a fight, single blocks that broke off, or small unpowered ships left behind. Grids that are firmly connected to a protected grid — for example via a rotor, a piston or a connector — are kept as well.

:::: info Note
Trash Removal only measures the distance to players who are currently online. If nobody is on the server, all grids count as protected, and cleanup only resumes once someone plays. The only exception is `PlayerInactivityThreshold` (see below).
::::

### The settings in Sandbox_config.sbc

The entries are listed one below the other in `Sandbox_config.sbc`. In the preinstalled world they look like this:

```xml
<RemoveOldIdentitiesH>0</RemoveOldIdentitiesH>
<TrashRemovalEnabled>true</TrashRemovalEnabled>
<StopGridsPeriodMin>15</StopGridsPeriodMin>
<TrashFlagsValue>1562</TrashFlagsValue>
<AFKTimeountMin>0</AFKTimeountMin>
<BlockCountThreshold>20</BlockCountThreshold>
<PlayerDistanceThreshold>500</PlayerDistanceThreshold>
<OptimalGridCount>0</OptimalGridCount>
<PlayerInactivityThreshold>0</PlayerInactivityThreshold>
<PlayerCharacterRemovalThreshold>15</PlayerCharacterRemovalThreshold>
```

`AFKTimeountMin` belongs to the [AFK kick](#afk-kick); this table explains the other entries:

| Entry | Default | Meaning |
| --- | --- | --- |
| `TrashRemovalEnabled` | `true` | Turns Trash Removal on (`true`) or off (`false`). With `false`, `StopGridsPeriodMin`, `PlayerCharacterRemovalThreshold` and `RemoveOldIdentitiesH` stop working as well. |
| `BlockCountThreshold` | `20` | Grids with at least this many blocks are never deleted by Trash Removal. |
| `PlayerDistanceThreshold` | `500` | Grids closer to a player than this distance in meters are kept. |
| `TrashFlagsValue` | `1562` | Defines which properties protect a grid from deletion. Change this value in-game, see [Change the protection rules in-game](#change-the-protection-rules-in-game). |
| `StopGridsPeriodMin` | `15` | Grids moving far away from players are stopped by the server after this time in minutes. `0` turns this off. |
| `PlayerCharacterRemovalThreshold` | `15` | Removes the character of a player who disconnected after this time in minutes. `0` turns this off. |
| `RemoveOldIdentitiesH` | `0` | Removes inactive player identities that do not own any grids after this time in hours. `0` turns this off. |
| `PlayerInactivityThreshold` | `0` | Deletes **all** grids of a player who has not been online for this many hours. `0` turns this off. |
| `OptimalGridCount` | `0` | Keeps the number of grids in the world at roughly this value. `0` turns this off. |

:::: warning Warning
`PlayerInactivityThreshold` deletes grids regardless of block count, power or distance. Keen explicitly warns in the setting's description: "!WARNING! This will remove all grids of the player." The time is counted from the owner's last logout. Choose a generous value, for example `720` for 30 days, so players on vacation do not lose their base.
::::

:::: warning Warning
`OptimalGridCount` also overrides protection rules. Keen warns: "It ignores Powered and Fixed flags, Block Count and lowers Distance from player." If there are more grids in the world than configured, the server gradually lowers the protected distance to players and then also removes stations, powered grids and grids with many blocks. Leave the value at `0` if you are unsure.
::::

:::: info Note
The `<SessionSettings>` block in `SpaceEngineers-Dedicated.cfg` also contains entries such as `<TrashRemovalEnabled>` or `<AFKTimeountMin>`. The server only uses them when it creates a new world. For your existing world, only the values in `Sandbox_config.sbc` count.
::::

### Limit floating objects

`MaxFloatingObjects` defines how many objects may float around freely in the world at the same time — for example ore, stone or components. When the limit is exceeded, the server removes the oldest objects first. The entry is also in `Sandbox_config.sbc`:

```xml
<MaxFloatingObjects>56</MaxFloatingObjects>
```

The game provides for values from `2` to `100`. If you enter more than `100`, the server automatically turns on [Experimental Mode](enable-experimental-mode.md) when loading the world — even if it is set to `false` in the dashboard (see [Forced experimental mode](change-world-settings.md#forced-experimental-mode)).

:::: info Crossplay servers
If [crossplay](enable-crossplay.md) is active on your server, the server applies fixed limits when loading the world: `MaxFloatingObjects` at most `50`, `BlockCountThreshold` at least `50` and `PlayerDistanceThreshold` at most `250`. It automatically corrects values outside these limits.
::::

### Revert modified voxels (optional)

Trash Removal can also revert modified voxels, for example dug-up planet surfaces. This feature is off by default:

```xml
<VoxelTrashRemovalEnabled>false</VoxelTrashRemovalEnabled>
<VoxelPlayerDistanceThreshold>5000</VoxelPlayerDistanceThreshold>
<VoxelGridDistanceThreshold>5000</VoxelGridDistanceThreshold>
<VoxelAgeThreshold>24</VoxelAgeThreshold>
```

With `true`, the server restores voxel areas to their original state if they are more than `VoxelPlayerDistanceThreshold` meters away from players, more than `VoxelGridDistanceThreshold` meters away from grids, and have not been changed for at least `VoxelAgeThreshold` minutes.

:::: tip Tip
Leave this feature off if players have dug tunnels, caves or mines away from their grids that should be kept.
::::

### Change the protection rules in-game

`TrashFlagsValue` stores which properties protect a grid as a number. You do not have to calculate this number yourself: in the admin screen you set the protection rules with checkboxes. Your server must be running for this. It applies the values immediately and writes them to `Sandbox_config.sbc` the next time it saves the world.

1. <b>Join as an admin</b><br>
   Join your server with an account that has admin rights — see [Add Admins](add-admins.md).

2. <b>Open the admin screen</b><br>
   Press `Alt` + `F10`.

3. <b>Select Trash Removal</b><br>
   Select **Trash Removal** in the drop-down list at the top of the admin screen and **General** in the second drop-down list below it.

4. <b>Set the protection rules</b><br>
   A **checkmark** means: grids with this property **may be deleted**. **Without a checkmark**, the property protects the grid.

   | Checkbox | Default | Applies to |
   | --- | --- | --- |
   | **Fixed (stations)** | unchecked | static grids, i.e. stations |
   | **Stationary** | checked | grids that are standing still |
   | **Linearly moving** | checked | grids moving at a steady speed |
   | **Accelerating** | checked | grids that are speeding up or slowing down |
   | **Powered** | unchecked | grids with power |
   | **Controlled** | unchecked | grids that are currently being controlled |
   | **With production** | unchecked | grids with a refinery, assembler or another production block |
   | **With respawn point** | unchecked | grids with a medical room or survival kit |

   Below the checkboxes you also set `BlockCountThreshold` (**With less blocks than**), `PlayerDistanceThreshold` (**Distance from player (m)**) and `PlayerInactivityThreshold` (**Time since logout of owner (h)**).

5. <b>Set further values</b><br>
   If you select **Other** in the second drop-down list, you find **Optimal grid count**, **Delete offline char. after (m)** (`PlayerCharacterRemovalThreshold`), **AFK Timeout**, **Stop Grids Period (m)** and **Remove Old Identities (h)**.

6. <b>Apply the changes</b><br>
   Click **Submit changes**. Only stop or restart your server once the server console has shown `Autosave` — only then are the new values stored in `Sandbox_config.sbc`. How often the server saves is set by **Automatic Backup Interval** (see [Set Up Automatic Backups](configure-automatic-backups.md)).

:::: warning Warning
If you check **With respawn point**, Trash Removal can also delete ships and stations with a medical room or survival kit — and possibly a player's only respawn point. The game warns you about this itself when you set the checkmark.
::::

:::: info Note
The **Suspend** or **Enable** button under **General** turns Trash Removal off completely or back on.
::::

## AFK kick

With the AFK kick, the server automatically disconnects players who have not made any input for a certain time. It is off by default.

In `Sandbox_config.sbc`, set the entry `AFKTimeountMin` to the desired time in minutes, for example `30`:

```xml
<AFKTimeountMin>30</AFKTimeountMin>
```

Setting it to `0` turns the AFK kick off again. Alternatively, set the value in the admin screen under **Trash Removal** > **Other** at **AFK Timeout**.

:::: warning Warning
The entry really is called `AFKTimeountMin` — with the typo "Timeount" from the game's original. Copy the spelling exactly. If you write `AFKTimeoutMin`, the server does not recognize the entry.
::::

One minute before the kick, the game shows the player the message `Please note: If you remain inactive for 1 minute you will be disconnected.` Any keyboard, mouse or controller input resets the timer. The AFK kick also applies to admins. Kicked players can rejoin right away.

## Pause the simulation when nobody is online

Normally your world keeps running even without players. With `PauseGameWhenEmpty`, the server only simulates the world while at least one player is connected. As soon as someone joins, the world continues.

This entry is not stored in the world but in `/config/SpaceEngineers-Dedicated.cfg`. Set it to `true`:

```xml
<PauseGameWhenEmpty>true</PauseGameWhenEmpty>
```

:::: warning Warning
During the pause everything stands still: refineries, assemblers, timer blocks, programmable blocks and other machines stop working while nobody is online. If your base should keep producing offline, leave the value at `false`.
::::

:::: info Note
Because the world is paused, the server also does not save automatically while it is empty. Anything that happened since the last automatic save is therefore only saved once someone is online again.
::::

## Was something deleted by mistake?

Trash Removal deletes permanently. If the server removed a grid that should have stayed, roll your world back with a backup — see [Restore an Automatic Backup](restore-automatic-backup.md). Then adjust the protection rules so it does not happen again.
