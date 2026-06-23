---
description: "Set up a map cycle on an Insurgency: Sandstorm server"
---

# How to Set Up a Map Cycle on Your Insurgency: Sandstorm Server

With a map cycle your server automatically rotates through a list of scenarios (map + game mode) that you define. The list is stored in a text file and loaded via a launch parameter.

## Step 1: Create the map cycle file

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Create the folder</b><br>
   Go to the folder `Insurgency/Config/Server/`. If the `Config` and `Server` folders do not exist yet, create them.

4. <b>Create the file</b><br>
   In this folder, create a text file, e.g. `MapCycle.txt`. The name is up to you — you can also create several lists (e.g. `Coop.txt`, `Versus.txt`).

5. <b>Enter the scenarios</b><br>
   Enter the desired scenarios — **one scenario per line**:

   ```
   Scenario_Refinery_Checkpoint_Security
   Scenario_Hideout_Push_Insurgents
   Scenario_Crossing_Firefight_West
   ```

   A full list of scenarios can be found in the [Change Scenario](change-scenario.md) guide or in the official [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).

## Step 2: Load the map cycle

1. <b>Open settings</b><br>
   Open the **Settings** in the dashboard.

2. <b>Adjust the parameter</b><br>
   The **Additional Parameters** field defaults to `-Mods -Mapcycle=ppMapCycle`. Change the `-Mapcycle=` value to the name of your file (**without** `.txt`) and keep `-Mods` — only **one** `-Mapcycle=` may be active:

   ```
   -Mods -Mapcycle=MapCycle
   ```

3. <b>Start the server</b><br>
   Save the setting and start your server.

:::: info Note
The structure of a scenario name: `Scenario_<Map>_<GameMode>_<Team>`. The game mode `Checkpoint` is co-op, `Push`/`Firefight`/`Skirmish` are versus modes. For the `Skirmish` mode the team part is omitted.
::::
