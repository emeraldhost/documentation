---
description: "Szenario auf einem Insurgency: Sandstorm Server ändern"
---

# So änderst du das Szenario auf deinem Insurgency: Sandstorm Server

Das Szenario legt den Spielmodus und die Fraktion für die gewählte [Map](map-aendern.md) fest (z.B. `Scenario_Ministry_Checkpoint_Insurgents`).

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Szenario ändern</b><br>
   Trage im Feld **Szenario Name** das gewünschte Szenario ein und speichere die Einstellung.

4. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderung übernommen wird.

:::: info Hinweis
Das Szenario muss zur gewählten Map passen. Wird kein Szenario gesetzt, wechselt der Server standardmäßig durch alle verfügbaren Versus (PvP)-Szenarien. Eine vollständige Liste findest du unten.
::::

## Aufbau eines Szenario-Namens

Ein Szenario-Name besteht aus mehreren durch Unterstriche getrennten Teilen: `Scenario_<Karte>_<Spielmodus>_<Team>`.

- **Karte** — die Karte, auf der gespielt wird (z.B. `Ministry`).
- **Spielmodus** — `Checkpoint` ist Koop; `Push`, `Firefight` und `Skirmish` sind Versus-Modi.
- **Team** — die Fraktion (`Insurgents`/`Security`) bzw. die Seite (`East`/`West`). Beim Modus `Skirmish` entfällt dieser Teil.

## Verfügbare Szenarien

| Map | Szenario | Game Type |
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

:::: info Hinweis
Mit jedem größeren Spiel-Update können Szenarien hinzukommen oder sich ändern. Die jeweils aktuelle Liste findest du im offiziellen [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).
::::
