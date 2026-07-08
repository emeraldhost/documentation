---
description: Allow in-game scripts on a Space Engineers server
---

# How to Allow In-Game Scripts on Your Space Engineers Server

This setting allows the execution of in-game scripts — the C# scripts in **Programmable Blocks**. Without this option such scripts are removed when the world loads.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enable in-game scripts</b><br>
   Set the **In-Game Scripts** option to `true` to allow them, or to `false` to disallow them.

4. <b>Restart the server</b><br>
   Save the setting and restart your server for the change to take effect.

:::: info Note
In-game scripts require [experimental mode](enable-experimental-mode.md) to be enabled — turn it on as well so the scripts run.
::::

:::: warning Caution
In-game scripts are **not mods**: they are not added to the mod list (see [Add Mods](add-mods.md)) but are pasted directly into a Programmable Block in-game.
::::
