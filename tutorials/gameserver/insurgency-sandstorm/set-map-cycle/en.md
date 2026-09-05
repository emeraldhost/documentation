---
slug: "set-map-cycle"
language: "en"
title: "How to Set Up a Map Cycle on Your Insurgency: Sandstorm Server"
description: "Set up a map cycle on an Insurgency: Sandstorm server"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Map Cycle"
sort: 19
related: ["gameserver/insurgency-sandstorm/set-game-stats-token", "gameserver/insurgency-sandstorm/set-gsl-token", "gameserver/insurgency-sandstorm/set-server-password", "gameserver/insurgency-sandstorm/setup-coop-server"]
---

With a map cycle your server automatically rotates through a list of scenarios (map + game mode) that you define. The list is stored in a text file and loaded via a launch parameter.

## Step 1: Create the map cycle file

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Create the folder**\
   Go to the folder `Insurgency/Config/Server/`. If the `Config` and `Server` folders do not exist yet, create them.

4. **Create the file**\
   In this folder, create a text file, e.g. `MapCycle.txt`. The name is up to you – you can also create several lists (e.g. `Coop.txt`, `Versus.txt`).

5. **Enter the scenarios**\
   Enter the desired scenarios – **one scenario per line**:

   ```text
   Scenario_Refinery_Checkpoint_Security
   Scenario_Hideout_Push_Insurgents
   Scenario_Crossing_Firefight_West
   ```

   A full list of scenarios can be found in the [Change Scenario](/tutorials/gameserver/insurgency-sandstorm/change-scenario) guide or in the official [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).

## Step 2: Load the map cycle

1. **Open settings**\
   Open the **Settings** in the dashboard.

2. **Adjust the parameter**\
   The **Additional Parameters** field defaults to `-Mods -Mapcycle=ppMapCycle`. Change the `-Mapcycle=` value to the name of your file (**without** `.txt`) and keep `-Mods` – only **one** `-Mapcycle=` may be active:

   ```text
   -Mods -Mapcycle=MapCycle
   ```

3. **Start the server**\
   Save the setting and start your server.

> [!NOTE]
> The structure of a scenario name: `Scenario_<Map>_<GameMode>_<Team>`. The game mode `Checkpoint` is co-op, `Push`/`Firefight`/`Skirmish` are versus modes. For the `Skirmish` mode the team part is omitted.
