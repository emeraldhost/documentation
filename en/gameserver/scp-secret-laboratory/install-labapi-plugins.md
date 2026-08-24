---
description: "Install LabAPI plugins on a SCP: Secret Laboratory server"
---

# How to Install LabAPI Plugins on Your SCP: Secret Laboratory Server

LabAPI is Northwood's official plugin loader for SCP: Secret Laboratory. It is already included in every dedicated server build — there is nothing to install, you can start uploading plugins right away.

## LabAPI and EXILED

EXILED is built on top of LabAPI: the Exiled Loader is itself loaded as a LabAPI plugin. Both systems therefore run alongside each other without issues. EXILED plugins still belong in their own directories — see [Install EXILED Plugins](install-exiled-plugins.md).

:::: info Note
Many plugins are released in separate variants for LabAPI and EXILED. When downloading, check which framework the `.dll` file was built for — this guide covers LabAPI plugins.
::::

## Where are the LabAPI folders?

LabAPI creates its folders automatically on the first server start. Replace `<Port>` with the Game Port of your server — you can find it in the dashboard under **Overview**:

| Directory | Purpose |
|-----------|---------|
| `/.config/SCP Secret Laboratory/LabAPI/plugins/global/` | Plugins the server always loads |
| `/.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/` | Plugins loaded only with this Game Port |
| `/.config/SCP Secret Laboratory/LabAPI/dependencies/global/` | Additional libraries some plugins require |
| `/.config/SCP Secret Laboratory/LabAPI/configs/` | Configuration files of the plugins |

:::: tip Tip
Use the `plugins/global/` folder for your plugins. The Game Port is assigned automatically and can change — plugins in the `global` folder are not affected by this and are always loaded.
::::

## Install a plugin

1. <b>Download the plugin</b><br>
   Download the `.dll` file of the plugin you want to install — usually from the GitHub release page of the plugin developer. Also download any dependencies the plugin lists in its description.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the plugin</b><br>
   Upload the `.dll` file to the following directory:

   ```
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   ```

5. <b>Upload dependencies</b><br>
   If the plugin requires additional libraries, upload them to the following directory:

   ```
   /.config/SCP Secret Laboratory/LabAPI/dependencies/global/
   ```

6. <b>Start the server</b><br>
   Start your server via the dashboard. LabAPI loads the plugin automatically on start-up and reports it in the start-up output of the console.

:::: warning Warning
If a plugin lists <b>another plugin</b> as a dependency, that plugin still belongs in the `plugins` folder, not in the `dependencies` folder. Only plain libraries go into the `dependencies` folder.
::::

## Configure a plugin

After a plugin is loaded successfully for the first time, LabAPI creates a dedicated configuration folder for it — replace `<Port>` with the Game Port of your server:

```
/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<plugin name>/
```

It always contains a `properties.yml`, which lets you enable or disable the plugin. If a plugin has settings of its own, its configuration file is stored there as well — a `config.yml` by default. All files use the YAML format.

1. <b>Edit the configuration</b><br>
   Open the configuration file of your plugin and adjust the values to your liking. Make sure the file remains valid YAML — otherwise the plugin falls back to its default values or fails to load.

2. <b>Restart the server</b><br>
   Restart your server so the changes take effect.

:::: info Note
Some plugins store their configuration under `/.config/SCP Secret Laboratory/LabAPI/configs/global/<plugin name>/` instead — it then applies regardless of the Game Port.
::::

:::: warning Warning
The plugin version must match the LabAPI version of your server. LabAPI is updated together with the server build — a plugin built for a different major version of LabAPI will not be loaded, and the console shows a corresponding error message on start-up.
::::

:::: tip Tip
Install plugins one at a time and watch the console during server start after each new plugin. Loading errors appear right at the beginning — this makes it much easier to spot conflicts or incompatibilities.
::::
