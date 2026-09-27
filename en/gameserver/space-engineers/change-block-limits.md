---
description: Change the block and PCU limits on a Space Engineers server
---

# How to Change the Block and PCU Limits on Your Space Engineers Server

In Space Engineers, every block costs **PCU** (Performance Cost Units). Once the PCU budget is used up, the game shows `PCU limit reached.` and nothing more can be built. How much PCU there is, how it is split up and how many blocks are allowed is set in your world's config file. There is no field for this in the dashboard — but the dashboard does not overwrite these entries on startup either, so your change is kept.

:::: warning Warning
Stop your server before editing the config file. A running server can overwrite your changes when it saves or stops.
::::

## The settings at a glance

All settings are in your world's `Sandbox_config.sbc` file:

| Entry | Meaning | Preinstalled world |
| --- | --- | --- |
| `BlockLimitsEnabled` | How the PCU budget is split up (see below) | `GLOBALLY` |
| `TotalPCU` | The PCU budget. `0` removes the PCU limit | `100000` |
| `PiratePCU` | PCU budget of the NPC factions, for example the pirates | `50000` |
| `MaxGridSize` | Maximum number of blocks per grid (ship or station), `0` = unlimited | `0` |
| `MaxBlocksPerPlayer` | Maximum number of blocks per player, `0` = unlimited | `0` |
| `MaxFactionsCount` | Maximum number of factions, `0` = unlimited (exception with `PER_FACTION`, see below) | `0` |
| `EnablePcuTrading` | Players or factions can trade PCU with each other — with `PER_PLAYER` and `PER_FACTION` | `true` |
| `BlockTypeLimits` | Limits for individual block types (see below) | empty |

## How the PCU budget is split up

`BlockLimitsEnabled` determines who `TotalPCU` applies to:

| Value | Distribution |
| --- | --- |
| `GLOBALLY` | All players **share** one budget of `TotalPCU`. `MaxBlocksPerPlayer` and `BlockTypeLimits` then also count for all players together. |
| `PER_PLAYER` | Each player gets `TotalPCU` divided by **Max Players** from the dashboard — with `100000` PCU and 10 players, that is `10000` PCU per player. |
| `PER_FACTION` | Each faction gets `TotalPCU` divided by `MaxFactionsCount`. Players without a faction **cannot build**. |
| `NONE` | No block and PCU limits — see [Remove the limits entirely](#remove-the-limits-entirely). |

You set the number of players under [Change max players](change-max-players.md). The server recalculates the budget from the current settings on every start — so after a restart, a change also applies to existing players and factions. If you lower the limits below the current usage, existing builds are kept, but the affected players can only build again once they are below the new limit.

:::: info Factions with PER_FACTION
With `PER_FACTION`, set `MaxFactionsCount` to the number of factions you want on your server. If it is `0`, the server allows only **one** player faction in this mode — in the preinstalled world, that is the existing **First Colony** faction. It then gets the full `TotalPCU`, but no new factions can be founded.
::::

## Change the limits

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Create a backup</b><br>
   Create a [backup](../create-backup.md) or download a copy of the `Sandbox_config.sbc` file. This lets you restore the previous state if something goes wrong while editing.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser in the dashboard.

4. <b>Open the config file</b><br>
   In your world's folder `/config/Saves/World/`, open the file `Sandbox_config.sbc`.

5. <b>Adjust the values</b><br>
   Find the entries and change the values between the tags. In this example, the PCU budget is raised to `300000`:

   ```xml
   <MaxGridSize>0</MaxGridSize>
   <MaxBlocksPerPlayer>0</MaxBlocksPerPlayer>
   <TotalPCU>300000</TotalPCU>
   <PiratePCU>50000</PiratePCU>
   <MaxFactionsCount>0</MaxFactionsCount>
   <BlockLimitsEnabled>GLOBALLY</BlockLimitsEnabled>
   ```

6. <b>Start the server</b><br>
   Save the file and start your server.

7. <b>Check the change</b><br>
   While the world loads, this line must appear in the server console:

   ```
   Sandbox world configuration file found, overriding checkpoint settings.
   ```

   It shows that the server has applied your `Sandbox_config.sbc`.

:::: danger Important
Only change the values between the tags and leave the tags themselves as they are — every entry needs its opening and closing tag, for example `<TotalPCU>300000</TotalPCU>`. Write the values for `BlockLimitsEnabled` exactly in capital letters (`GLOBALLY`, `PER_PLAYER`, `PER_FACTION` or `NONE`).

If the file contains an error, the server ignores the entire `Sandbox_config.sbc` — without an error message in the console, only the line from step 7 is missing. It then loads the settings and mods from `Sandbox.sbc` and overwrites `Sandbox_config.sbc` the next time it saves. Your changes are lost. If the line is missing after the start, stop the server, restore your copy of the file and change the values again.
::::

:::: info Note
Most of these entries are also in the `<SessionSettings>` block of `SpaceEngineers-Dedicated.cfg`. However, the server only uses this block when it creates a new world — for your existing world, only `Sandbox_config.sbc` counts. Learn more under [Change world settings](change-world-settings.md).
::::

:::: info Performance
Higher limits put more load on your server: every additional block costs processing power, and large constructions can affect performance for all players. Raise the limits step by step.
::::

## Limits for individual block types

With `BlockTypeLimits`, you limit how often a specific block may be built — for example refineries or assemblers. You edit the list in `Sandbox_config.sbc` as described under [Change the limits](#change-the-limits). In the preinstalled world, it is empty:

```xml
<BlockTypeLimits>
  <dictionary />
</BlockTypeLimits>
```

Replace this block with your limits and add one `<item>` per block type:

```xml
<BlockTypeLimits>
  <dictionary>
    <item>
      <Key>Refinery</Key>
      <Value>24</Value>
    </item>
    <item>
      <Key>Assembler</Key>
      <Value>24</Value>
    </item>
  </dictionary>
</BlockTypeLimits>
```

- `<Key>` is the name of the block type.
- `<Value>` is the allowed number — a whole number up to `32767`.

Valid names from Keen Software House's default list include `Assembler`, `Refinery`, `Blast Furnace`, `Antenna`, `Drill`, `InteriorTurret`, `GatlingTurret`, `MissileTurret`, `ExtendedPistonBase`, `MotorStator`, `MotorAdvancedStator`, `ShipWelder` and `ShipGrinder`.

:::: info Note
The large and small versions of a block share one limit, while other variants of the same block count separately. Depending on `BlockLimitsEnabled`, the limit applies to the whole world, per player or per faction.
::::

## Remove the limits entirely

For an unlimited PCU budget, you have two options:

- **`<TotalPCU>0</TotalPCU>`** only removes the PCU limit. `MaxGridSize`, `MaxBlocksPerPlayer` and `BlockTypeLimits` still apply.
- **`<BlockLimitsEnabled>NONE</BlockLimitsEnabled>`** turns off all block and PCU limits.

:::: danger Important
If `BlockLimitsEnabled` is set to `NONE` or `TotalPCU` is above `600000`, the server automatically turns on [experimental mode](enable-experimental-mode.md) when loading — even if it is set to `false` in the dashboard. The server console shows the reason on startup, for example `Experimental mode reason: ExperimentalMode, TotalPCU`. To hand out more PCU without experimental mode, set `TotalPCU` to at most `600000`.
::::

:::: warning Crossplay servers
With [crossplay](enable-crossplay.md) enabled, `BlockLimitsEnabled` must not be `NONE` and `TotalPCU` must not be `0`. Otherwise the server switches console compatibility off while loading and players on Xbox and PlayStation can no longer join your server. The server console then reports `World does not have Block Limits Enabled.` or `Total PCU value is 0.` On a crossplay server, raise `TotalPCU` instead — ideally to at most `600000`, so that experimental mode stays off.
::::

:::: tip Admins without a PCU limit
Admins can ignore the PCU limits for themselves in-game without changing the limits for the whole server — via the **Ignore PCU limits** option in the admin menu (`Alt` + `F10`). To learn how to set admins, see [Add admins](add-admins.md).
::::
