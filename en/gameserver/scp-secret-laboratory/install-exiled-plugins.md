---
description: "Install EXILED plugins on a SCP: Secret Laboratory server"
---

# How to Install EXILED Plugins on Your SCP: Secret Laboratory Server

EXILED is the most popular plugin framework for SCP: Secret Laboratory and must be installed before any plugins can be loaded.

## Prerequisite: EXILED

EXILED is usually pre-installed by hosting providers. If that is not the case on your server, you can find the official installation guide on the [EXILED GitHub page](https://github.com/Exiled-Team/EXILED).

## Install a plugin

1. <b>Download the plugin</b><br>
   Download the `.dll` file of the plugin you want to install — usually from the GitHub release page of the plugin developer.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the plugin</b><br>
   Upload the `.dll` file to the following directory:

   ```
   /.config/EXILED/Plugins/
   ```

5. <b>Start the server</b><br>
   Start your server via the dashboard. EXILED will load the plugin automatically on start-up.

## Configure a plugin

After a plugin is loaded for the first time, EXILED generates its configuration file automatically under:

```
/.config/EXILED/Configs/
```

1. <b>Edit the configuration</b><br>
   Open the configuration file of your plugin and adjust the values to your liking.

2. <b>Restart the server</b><br>
   Restart your server so the changes take effect.

:::: warning Warning
The plugin version must match the installed EXILED version. If the versions do not match, the plugin will fail to load or cause errors on server start.
::::

:::: tip Tip
Install plugins one at a time and test the server start after each new plugin. This makes it much easier to spot conflicts or incompatibilities.
::::
