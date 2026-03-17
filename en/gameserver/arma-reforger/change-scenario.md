---
description: Change scenario on an Arma Reforger server and add custom workshop scenarios
---

# How to Change the Scenario on Your Arma Reforger Server

You can use both official and custom workshop scenarios on your server.

## Change scenario

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter scenario ID</b><br>
   Enter the desired scenario ID in the **Scenario ID** field.

   :::: tip Example
   ```
   {ECC61978EDCC2B5A}Missions/23_Campaign.conf
   ```
   ::::

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

### Available scenarios

| Scenario | Scenario ID |
|----------|-------------|
| Tutorial | `{90F086877C27B6F6}Missions/99_Tutorial.conf` |
| Conflict | `{ECC61978EDCC2B5A}Missions/23_Campaign.conf` |
| Game Master - Everon | `{59AD59368755F41A}Missions/21_GM_Eden.conf` |
| Game Master - Arland | `{2BBBE828037C6F4B}Missions/22_GM_Arland.conf` |
| Conflict: St. Philippe & Morton | `{C700DB41F0C546E1}Missions/23_Campaign_NorthCentral.conf` |
| Conflict: Morton & St. Pierre | `{28802845ADA64D52}Missions/23_Campaign_SWCoast.conf` |
| Combat Ops: Arland | `{DAA03C6E6099D50F}Missions/24_CombatOps.conf` |
| Conflict: Arland | `{C41618FD18E9D714}Missions/23_Campaign_Arland.conf` |
| Combat Ops - Everon | `{DFAC5FABD11F2390}Missions/26_CombatOpsEveron.conf` |

## Add workshop scenario

You can also use custom scenarios from the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop).

### Find mod information

1. <b>Open Workshop</b><br>
   Open the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) and find the desired scenario.

2. <b>Note information</b><br>
   Note the following information from the Workshop page:
   - **Mod ID** — the ID of the mod
   - **Name** — the name of the mod
   - **Version** — the current version number
   - **Scenario ID** — found in the **Scenarios** tab

### Edit config.json

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open config.json</b><br>
   Open the file `config.json` in the file browser.

3. <b>Add mod</b><br>
   Find the `"mods"` section and add the mod:

   ```json
   "mods": [
     {
       "modId": "596338F447D34E39",
       "name": "NightOps - Everon 1985",
       "version": "1.0.26"
     }
   ]
   ```

   For multiple mods, separate the entries with a comma:

   ```json
   "mods": [
     {
       "modId": "596338F447D34E39",
       "name": "NightOps - Everon 1985",
       "version": "1.0.26"
     },
     {
       "modId": "59655E11FDD04B97",
       "name": "Raid on Saint Pierre",
       "version": "1.0.49"
     }
   ]
   ```

4. <b>Set scenario ID</b><br>
   Enter the scenario ID of the workshop scenario in the dashboard under **Settings** in the **Scenario ID** field.

   :::: tip Example
   ```
   {1C7C31ACBB314DCF}Missions/MissionHeader_1.conf
   ```
   ::::

5. <b>Start the server</b><br>
   Save all changes and start your server.

:::: info Note
When a workshop scenario is updated, you also need to update the version number in `config.json`.
::::

:::: tip Tip
You can also find the mod information locally after subscribing to the mod in-game. Open the `ServerData.json` file in the folder `Documents/My Games/ArmaReforger/addons/`.
::::
