---
description: "Troubleshoot plugins that fail to load on a SCP: Secret Laboratory server"
---

# What to Do When Plugins Are Not Loading on Your SCP: Secret Laboratory Server

A plugin is installed but nothing happens in game? The cause is almost always right there in your server's console output. This guide shows you how to find the relevant message and fixes the most common causes: wrong folder, version conflict, missing dependencies, and a disabled plugin.

For the basics of installing plugins, see [Install EXILED Plugins](install-exiled-plugins.md) and [Install LabAPI Plugins](install-labapi-plugins.md).

## How to find the error message

The console in the dashboard is your server's LocalAdmin console — see [Use Remote Admin](use-remote-admin.md) for details. On server start, EXILED and LabAPI report every plugin they load there — including all errors.

1. <b>Restart the server</b><br>
   Restart your server via the dashboard. Plugins are loaded on start-up, so the relevant messages appear in the start-up output.

2. <b>Watch the console</b><br>
   Open the console in the dashboard and read the start-up output. Search for the name of your plugin.

3. <b>Match the message</b><br>
   If a plugin loads successfully, EXILED prints a line like `Loaded plugin <Name>@<Version>`, while LabAPI prints `[LOADER] Successfully loaded <Name>` followed by `[LOADER] Successfully enabled '<Name>', ...`. If your plugin is missing entirely or an error is shown, use the table below.

| Message (excerpt) | Meaning |
|-------------------|---------|
| Plugin does not appear in the start-up output at all | The `.dll` is in the wrong folder — see cause 1 |
| `Missing dependencies:` | The plugin is missing dependency DLLs — see cause 3 |
| `You're running an older version of Exiled (...)! <Name> won't be loaded!` | The plugin requires a newer EXILED version — see cause 2 |
| `It was built for an outdated major version of LabAPI` or `a newer major version of LabAPI` | Plugin and LabAPI versions do not match — see cause 2 |
| `SCP: SL is outdated. Update SCP: SL Dedicated Server to required version or downgrade Exiled.` or `Exiled is outdated, ...` | EXILED and the game version do not match — EXILED then loads no plugins at all, see cause 2 |
| `Error while loading an assembly at <path>` | The file is corrupted or not a valid plugin DLL — re-download the file and upload it again |
| `Couldn't load the plugin inside '<path>'` | LabAPI could not load the DLL — the exact cause follows right below, often together with `Missing dependencies:` |
| `Plugin "<Name>" threw an exception while enabling` | An error inside the plugin itself while enabling — check the plugin configuration and report the error to the developer |

## Cause 1: The DLL is in the wrong folder

EXILED plugins belong directly in the following directory:

```
/.config/EXILED/Plugins/
```

LabAPI plugins, on the other hand, are only loaded from two subfolders — a `.dll` placed directly in `plugins/` is ignored. Replace `<Port>` with the Game Port of your server from the **Overview** of the dashboard:

```
/.config/SCP Secret Laboratory/LabAPI/plugins/global/
/.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/
```

The `global` folder applies to all ports, the port folder only to that specific server.

:::: warning Warning
The subfolder `/.config/EXILED/Plugins/dependencies/` is reserved for dependency DLLs — a plugin DLL placed there is not loaded as a plugin.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and check where the `.dll` actually is.

3. <b>Move the file</b><br>
   Move the `.dll` to the correct folder: EXILED plugins to `/.config/EXILED/Plugins/`, LabAPI plugins to `/.config/SCP Secret Laboratory/LabAPI/plugins/global/`.

4. <b>Start the server</b><br>
   Start your server via the dashboard and check the start-up output again.

## Cause 2: Versions do not match

Three versions have to match each other: the game version, the version of the framework (EXILED or LabAPI), and the version of the plugin.

- **Plugin ↔ EXILED**: If a plugin requires a newer EXILED version, EXILED refuses to load it with the message `You're running an older version of Exiled (...)! <Name> won't be loaded! Required version to load it: ...`. Update EXILED or download a version of the plugin from its release page that matches your installed EXILED version.
- **EXILED ↔ game**: After a game update, EXILED can temporarily be incompatible. The console then shows `Exiled is outdated, a new version will be installed automatically as soon as it's available.` — until then, EXILED loads no plugins at all. If you see `SCP: SL is outdated. Update SCP: SL Dedicated Server to required version or downgrade Exiled.` instead, the installed EXILED version is newer than the game version of the server.
- **Plugin ↔ LabAPI**: LabAPI compares the major version the plugin was built for with the installed LabAPI version. On a mismatch, the plugin is not enabled; the error message shows both versions (`Current LabAPI version` and `Required by plugin`). Use a plugin version that matches the installed LabAPI version.

:::: warning Warning
LabAPI can load incompatible plugins anyway if you tell it to (`unsupported_loading` in the plugin's `properties.yml` or `load_unsupported_plugins` in the file `/.config/SCP Secret Laboratory/LabAPI/LabApi-<Port>.yml`). The error message explicitly warns about degraded functionality — use this option only as a last resort.
::::

:::: tip Tip
After every game update, first check whether your plugin framework is up to date, and only then check the individual plugins. An outdated framework often explains why all plugins suddenly disappear at once.
::::

## Cause 3: Missing dependencies

Many plugins require additional libraries that ship as separate `.dll` files — usually available on the plugin's release page. If they are missing, the console lists them one by one under the message `Missing dependencies:`.

Dependency DLLs belong in these directories:

- EXILED: `/.config/EXILED/Plugins/dependencies/`
- LabAPI: `/.config/SCP Secret Laboratory/LabAPI/dependencies/global/` or `/.config/SCP Secret Laboratory/LabAPI/dependencies/<Port>/` — a `.dll` placed directly in `dependencies/` is not loaded by LabAPI

1. <b>Note the missing dependencies</b><br>
   Write down the names from the `Missing dependencies:` list in the console.

2. <b>Download the dependencies</b><br>
   Download the missing `.dll` files — the plugin's release page or installation guide lists the required dependencies along with their downloads.

3. <b>Stop the server and upload the files</b><br>
   Stop your server, connect via [SFTP](../establish-sftp-connection.md), and upload the files to the appropriate directory.

4. <b>Start the server</b><br>
   Start your server via the dashboard. The `Missing dependencies:` message should now be gone.

## Cause 4: The plugin is disabled

If a plugin loads successfully according to the console but still does nothing, it may be disabled in its configuration. Both frameworks automatically generate a switch for this:

- EXILED: `is_enabled` in the plugin's section — depending on the EXILED setting, the plugin configs are either combined in `/.config/EXILED/Configs/<Port>-config.yml` or stored per plugin at `/.config/EXILED/Configs/Plugins/<plugin name>/<Port>.yml`; check which of the two variants exists on your server
- LabAPI: `is_enabled` in the file `/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<plugin name>/properties.yml`

Set the value to `true` and restart your server via the dashboard.

## Still no solution?

Install plugins one at a time and test the server start after each new plugin — this narrows down which plugin causes the problem. If nothing helps, contact the developer of the plugin and include the exact error message from the console.
