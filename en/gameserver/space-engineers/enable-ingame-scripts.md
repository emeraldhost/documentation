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
If **In-Game Scripts** is set to `true`, the server automatically turns on [experimental mode](enable-experimental-mode.md) when loading the world — even if it is set to `false` in the dashboard. So you do not need to enable it as well. As long as in-game scripts are allowed, however, you cannot turn it off either.
::::

:::: warning Caution
In-game scripts are **not mods**: they are not added to the mod list (see [Add Mods](add-mods.md)) but are pasted directly into a Programmable Block in-game.
::::
