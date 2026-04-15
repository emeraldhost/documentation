---
description: Install uMod (formerly Oxide) on a Rust server
---

# How to Install uMod on Your Rust Server

uMod (formerly Oxide) is the most widely used modding framework for Rust and provides access to thousands of plugins. On EmeraldHost you can enable uMod directly via the dashboard.

:::: warning Warning
uMod does not work on the `staging` branch. If uMod is enabled anyway, client connections will fail with the following error:

```
Disconnected: Connection Attempt Failed
```

Switch the branch before installation as described below.
::::

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enable uMod</b><br>
   Set the **uMod** field to enabled.

4. <b>Switch branch</b><br>
   Change the **Branch** field from `staging` to `workcart` and save the settings.

5. <b>Reinstall the server</b><br>
   Click the three dots in the top right and select **Reinstall**. Confirm the action so the server is set up again with the new branch and uMod.

   :::: warning Warning
   Reinstalling resets all server files. Create a [backup](create-backup.md) beforehand if you want to keep your current save.
   ::::

6. <b>Start the server</b><br>
   Start your server. uMod will be loaded automatically.

## Adding plugins

After installing uMod, you can place plugins in the `/oxide/plugins/` folder. uMod automatically detects new `.cs` files and hot-reloads them while the server is running.

You can find plugins here, among others:

- [uMod plugin list](https://umod.org/plugins)

:::: tip Tip
After every Rust update, check whether your plugins are still compatible. Many plugins need to be updated after major game updates.
::::
