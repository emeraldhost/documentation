---
description: "Set additional launch parameters on an Insurgency: Sandstorm server"
---

# How to Set Additional Parameters on Your Insurgency: Sandstorm Server

The **Additional Parameters** field lets you pass extra options to the server on startup — for example to enable mods, set the map rotation or a server password.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter parameters</b><br>
   Enter the desired parameters in the **Additional Parameters** field and save the setting.

4. <b>Restart the server</b><br>
   Restart your server for the change to take effect.

## Commonly used parameters

| Parameter | Description |
|-----------|-------------|
| `-Mods` | Enables the mod system (mod.io) — see [Add Mods](add-mods.md) |
| `-ModDownloadTravelTo=<map>?Scenario=<scenario>` | Downloads the mods and then travels to the specified (modded) map |
| `-Mutators=<Name1,Name2>` | Enables mutators (required by some mods) |
| `-Mapcycle=<file>` | Uses the specified map rotation file (without file extension) |

:::: info Note
A full overview of all available parameters can be found in the official [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).
::::
