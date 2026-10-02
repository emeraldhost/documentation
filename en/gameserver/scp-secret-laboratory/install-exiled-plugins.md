---
description: "Install EXILED plugins on a SCP: Secret Laboratory server"
---

# How to Install EXILED Plugins on Your SCP: Secret Laboratory Server

EXILED is a plugin framework for SCP: Secret Laboratory. With EXILED plugins you can extend your server, for example with custom roles, items or admin features.

## Prerequisite: EXILED

EXILED must be installed on your server before you can use EXILED plugins. To learn how to install it, see the guide [Install EXILED](install-exiled.md).

:::: info Note
Many plugins are available in separate versions for EXILED and for LabAPI. When downloading, check which framework the `.dll` file was built for. This guide applies to EXILED plugins. For LabAPI plugins, use the guide [Install LabAPI Plugins](install-labapi-plugins.md).
::::

## Where are the EXILED folders?

| Directory | Purpose |
|-----------|---------|
| `/.config/EXILED/Plugins/` | EXILED plugins (`.dll` files) |
| `/.config/EXILED/Plugins/dependencies/` | Additional libraries that some plugins require |
| `/.config/EXILED/Configs/` | Configuration files of the plugins |

## Install a plugin

1. <b>Download the plugin</b><br>
   Download the `.dll` file of the plugin you want, usually from the plugin developer's GitHub releases page. Also download all dependencies the plugin requires according to its description.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the plugin</b><br>
   Upload the plugin's `.dll` file to the following directory:

   ```
   /.config/EXILED/Plugins/
   ```

5. <b>Upload the dependencies</b><br>
   If the plugin requires additional libraries, upload them to the following directory:

   ```
   /.config/EXILED/Plugins/dependencies/
   ```

   :::: warning Warning
   Only pure libraries belong in the `dependencies` folder. A plugin `.dll` in this folder is not loaded as a plugin. If a plugin lists another plugin as a requirement, that one also goes into `/.config/EXILED/Plugins/`.
   ::::

6. <b>Start the server</b><br>
   Start your server via the dashboard.

7. <b>Check that it loaded</b><br>
   Open the console in the dashboard. For every plugin that loaded successfully, EXILED prints a line like this during startup:

   ```
   Loaded plugin ExamplePlugin@1.0.0
   ```

   If the plugin is missing or an error appears, the guide [Plugins not loading](plugins-not-loading.md) will help you.

:::: warning Warning
The plugin version must match the installed EXILED version. If a plugin requires a newer EXILED version, EXILED does not load it.
::::

## Configure a plugin

After the first successful load, EXILED automatically creates a configuration file for each plugin. By default, every plugin gets its own file. Replace `<Port>` with your server's game port, which you can find in the dashboard under **Overview**:

```
/.config/EXILED/Configs/Plugins/<Plugin-Name>/<Port>.yml
```

A plugin's texts and translations are stored separately under:

```
/.config/EXILED/Configs/Translations/<Plugin-Name>/<Port>.yml
```

:::: info Note
EXILED can also store the configs together in one file. In that case you find all plugin settings in `/.config/EXILED/Configs/<Port>-config.yml` and all texts in `/.config/EXILED/Configs/<Port>-translations.yml`. Check which of the two variants exists on your server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Adjust the configuration</b><br>
   Open your plugin's configuration file via [SFTP](../establish-sftp-connection.md) and adjust the values. Use `is_enabled` to turn the plugin on (`true`) or off (`false`).

3. <b>Start the server</b><br>
   Save the file and start your server to apply the changes.

:::: danger Important
The files use the YAML format. Pay attention to the indentation with spaces and do not use tabs. If a file is invalid, EXILED cannot load the plugin's settings.
::::

## Remove a plugin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the plugin</b><br>
   Delete the plugin's `.dll` file from `/.config/EXILED/Plugins/` via [SFTP](../establish-sftp-connection.md).

3. <b>Start the server</b><br>
   Start your server via the dashboard.

:::: tip Tip
If you only want to turn a plugin off temporarily, set `is_enabled` to `false` in its configuration instead of deleting the file. Also, always install new plugins one at a time and check the startup after each plugin. This makes it much easier to find conflicts.
::::
