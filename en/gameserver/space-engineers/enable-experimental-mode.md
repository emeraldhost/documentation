---
description: Enable experimental mode on a Space Engineers server
---

# How to Enable Experimental Mode on Your Space Engineers Server

Experimental mode unlocks advanced and experimental features. You do not need it for mods: since Update 1.206, mods run without experimental mode, including mods with their own code (see [Add Mods](add-mods.md)). Some settings, however, turn it on automatically (see [below](#settings-that-force-experimental-mode)).

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enable experimental mode</b><br>
   Set the **Experimental Mode** option to `true` to enable it, or to `false` to disable it.

4. <b>Restart the server</b><br>
   Save the setting and restart your server for the change to take effect.

:::: warning Warning
The field alone does not turn experimental mode on permanently. When loading the world, the server only keeps it if one of the [settings listed below](#settings-that-force-experimental-mode) requires it – otherwise it sets it back to `false`. After the start, the console line `Experimental mode: Yes` shows whether it is active.
::::

## Settings that force experimental mode

When loading the world, the server checks your settings. If one of the following applies, it turns experimental mode on automatically:

- **In-Game Scripts** is set to `true` in the **Settings** (see [Allow In-Game Scripts](enable-ingame-scripts.md)).
- **Max Players** is set to more than `16` in the **Settings**.
- A world setting in `Sandbox_config.sbc` forces it, for example `SyncDistance` above `3000`, `TotalPCU` above `600000` or `BlockLimitsEnabled` set to `NONE`. You can find the complete list under [Forced experimental mode](change-world-settings.md#forced-experimental-mode).

:::: warning Warning
As long as one of these applies, you cannot turn experimental mode off. If **Experimental Mode** is set to `false`, the server turns it back on anyway when loading. If your server should run without experimental mode, first change the settings that force it.
::::

The server console shows whether experimental mode is active and which setting forces it while the world loads, for example:

```
Experimental mode: Yes
Experimental mode reason: ExperimentalMode, EnableIngameScripts
```
