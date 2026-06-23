---
description: "Change the scenario on an Insurgency: Sandstorm server"
---

# How to Change the Scenario on Your Insurgency: Sandstorm Server

The scenario determines the game mode and faction for the selected [map](change-map.md) (e.g. `Scenario_Ministry_Checkpoint_Insurgents`).

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Change the scenario</b><br>
   Enter the desired scenario in the **Scenario Name** field and save the setting.

4. <b>Restart the server</b><br>
   Restart your server for the change to take effect.

:::: info Note
The scenario must match the selected map. If no scenario is set, the server cycles through all available Versus (PvP) scenarios by default. A full list can be found below.
::::

## Structure of a scenario name

A scenario name consists of several parts separated by underscores: `Scenario_<Map>_<GameMode>_<Team>`.

- **Map** — the map the scenario is played on (e.g. `Ministry`).
- **Game mode** — `Checkpoint` is co-op; `Push`, `Firefight` and `Skirmish` are versus modes.
- **Team** — the faction (`Insurgents`/`Security`) or side (`East`/`West`). For the `Skirmish` mode this part is omitted.

## Available scenarios

| Map | Scenario | Game Type |
|-----|----------|-----------|
| Crossing | `Scenario_Crossing_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Crossing | `Scenario_Crossing_Checkpoint_Security` | Checkpoint (Security) |
| Crossing | `Scenario_Crossing_Domination` | Domination |
| Crossing | `Scenario_Crossing_Firefight_West` | Firefight (West) |
| Crossing | `Scenario_Crossing_Frontline` | Frontline |
| Crossing | `Scenario_Crossing_Push_Insurgents` | Push (Insurgents) |
| Crossing | `Scenario_Crossing_Push_Security` | Push (Security) |
| Crossing | `Scenario_Crossing_Skirmish` | Skirmish |
| Crossing | `Scenario_Crossing_Team_Deathmatch` | Team Deathmatch |
| Farmhouse | `Scenario_Farmhouse_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Farmhouse | `Scenario_Farmhouse_Checkpoint_Security` | Checkpoint (Security) |
| Farmhouse | `Scenario_Farmhouse_Domination` | Domination |
| Farmhouse | `Scenario_Farmhouse_Firefight_East` | Firefight (East) |
| Farmhouse | `Scenario_Farmhouse_Firefight_West` | Firefight (West) |
| Farmhouse | `Scenario_Farmhouse_Frontline` | Frontline |
| Farmhouse | `Scenario_Farmhouse_Push_Insurgents` | Push (Insurgents) |
| Farmhouse | `Scenario_Farmhouse_Push_Security` | Push (Security) |
| Farmhouse | `Scenario_Farmhouse_Skirmish` | Skirmish |
| Farmhouse | `Scenario_Farmhouse_Team_Deathmatch` | Team Deathmatch |
| Hideout | `Scenario_Hideout_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Hideout | `Scenario_Hideout_Checkpoint_Security` | Checkpoint (Security) |
| Hideout | `Scenario_Hideout_Domination` | Domination |
| Hideout | `Scenario_Hideout_Firefight_East` | Firefight (East) |
| Hideout | `Scenario_Hideout_Firefight_West` | Firefight (West) |
| Hideout | `Scenario_Hideout_Frontline` | Frontline |
| Hideout | `Scenario_Hideout_Push_Insurgents` | Push (Insurgents) |
| Hideout | `Scenario_Hideout_Push_Security` | Push (Security) |
| Hideout | `Scenario_Hideout_Skirmish` | Skirmish |
| Hideout | `Scenario_Hideout_Team_Deathmatch` | Team Deathmatch |
| Hillside | `Scenario_Hillside_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Hillside | `Scenario_Hillside_Checkpoint_Security` | Checkpoint (Security) |
| Hillside | `Scenario_Hillside_Domination` | Domination |
| Hillside | `Scenario_Hillside_Firefight_West` | Firefight (West) |
| Hillside | `Scenario_Hillside_Firefight_East` | Firefight (East) |
| Hillside | `Scenario_Hillside_Frontline` | Frontline |
| Hillside | `Scenario_Hillside_Push_Insurgents` | Push (Insurgents) |
| Hillside | `Scenario_Hillside_Push_Security` | Push (Security) |
| Hillside | `Scenario_Hillside_Skirmish` | Skirmish |
| Hillside | `Scenario_Hillside_Team_Deathmatch` | Team Deathmatch |
| Ministry | `Scenario_Ministry_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Ministry | `Scenario_Ministry_Checkpoint_Security` | Checkpoint (Security) |
| Ministry | `Scenario_Ministry_Domination` | Domination |
| Ministry | `Scenario_Ministry_Firefight_A` | Firefight |
| Ministry | `Scenario_Ministry_Skirmish` | Skirmish |
| Ministry | `Scenario_Ministry_Team_Deathmatch` | Team Deathmatch |
| Outskirts | `Scenario_Outskirts_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Outskirts | `Scenario_Outskirts_Checkpoint_Security` | Checkpoint (Security) |
| Outskirts | `Scenario_Outskirts_Firefight_East` | Firefight (East) |
| Outskirts | `Scenario_Outskirts_Firefight_West` | Firefight (West) |
| Outskirts | `Scenario_Outskirts_Frontline` | Frontline |
| Outskirts | `Scenario_Outskirts_Push_Insurgents` | Push (Insurgents) |
| Outskirts | `Scenario_Outskirts_Push_Security` | Push (Security) |
| Outskirts | `Scenario_Outskirts_Skirmish` | Skirmish |
| Outskirts | `Scenario_Outskirts_Team_Deathmatch` | Team Deathmatch |
| Precinct | `Scenario_Precinct_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Precinct | `Scenario_Precinct_Checkpoint_Security` | Checkpoint (Security) |
| Precinct | `Scenario_Precinct_Firefight_East` | Firefight (East) |
| Precinct | `Scenario_Precinct_Firefight_West` | Firefight (West) |
| Precinct | `Scenario_Precinct_Frontline` | Frontline |
| Precinct | `Scenario_Precinct_Push_Insurgents` | Push (Insurgents) |
| Precinct | `Scenario_Precinct_Push_Security` | Push (Security) |
| Precinct | `Scenario_Precinct_Skirmish` | Skirmish |
| Precinct | `Scenario_Precinct_Team_Deathmatch` | Team Deathmatch |
| Refinery | `Scenario_Refinery_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Refinery | `Scenario_Refinery_Checkpoint_Security` | Checkpoint (Security) |
| Refinery | `Scenario_Refinery_Firefight_West` | Firefight (West) |
| Refinery | `Scenario_Refinery_Frontline` | Frontline |
| Refinery | `Scenario_Refinery_Push_Insurgents` | Push (Insurgents) |
| Refinery | `Scenario_Refinery_Push_Security` | Push (Security) |
| Refinery | `Scenario_Refinery_Skirmish` | Skirmish |
| Refinery | `Scenario_Refinery_Team_Deathmatch` | Team Deathmatch |
| Summit | `Scenario_Summit_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Summit | `Scenario_Summit_Checkpoint_Security` | Checkpoint (Security) |
| Summit | `Scenario_Summit_Firefight_East` | Firefight (East) |
| Summit | `Scenario_Summit_Firefight_West` | Firefight (West) |
| Summit | `Scenario_Summit_Frontline` | Frontline |
| Summit | `Scenario_Summit_Push_Insurgents` | Push (Insurgents) |
| Summit | `Scenario_Summit_Push_Security` | Push (Security) |
| Summit | `Scenario_Summit_Skirmish` | Skirmish |
| Summit | `Scenario_Summit_Team_Deathmatch` | Team Deathmatch |
| Power Plant | `Scenario_PowerPlant_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Power Plant | `Scenario_PowerPlant_Checkpoint_Security` | Checkpoint (Security) |
| Power Plant | `Scenario_PowerPlant_Domination` | Domination |
| Power Plant | `Scenario_PowerPlant_Firefight_East` | Firefight (East) |
| Power Plant | `Scenario_PowerPlant_Firefight_West` | Firefight (West) |
| Tideway | `Scenario_Tideway_Checkpoint_Insurgents` | Checkpoint (Insurgents) |
| Tideway | `Scenario_Tideway_Checkpoint_Security` | Checkpoint (Security) |
| Tideway | `Scenario_Tideway_Domination` | Domination |
| Tideway | `Scenario_Tideway_Firefight_West` | Firefight (West) |
| Tideway | `Scenario_Tideway_Frontline` | Frontline |
| Tideway | `Scenario_Tideway_Push_Insurgents` | Push (Insurgents) |
| Tideway | `Scenario_Tideway_Push_Security` | Push (Security) |

:::: info Note
With each major game update, scenarios may be added or changed. The current list can always be found in the official [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).
::::
