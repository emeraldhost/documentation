---
slug: "install-exiled-plugins"
language: "en"
title: "How to Install EXILED Plugins on Your SCP: Secret Laboratory Server"
description: "Install EXILED plugins on a SCP: Secret Laboratory server"
tags: []
date: "2026-04-15"
visibility: "public"
updated: "2026-10-02"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install EXILED Plugins"
sort: 7
related: ["gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/install-labapi-plugins", "gameserver/scp-secret-laboratory/join-server"]
---

EXILED is a plugin framework for SCP: Secret Laboratory. With EXILED plugins you can extend your server, for example with custom roles, items or admin features.

## Prerequisite: EXILED

EXILED must be installed on your server before you can use EXILED plugins. To learn how to install it, see the guide [Install EXILED](/tutorials/gameserver/scp-secret-laboratory/install-exiled).

> [!NOTE]
> Many plugins are available in separate versions for EXILED and for LabAPI. When downloading, check which framework the `.dll` file was built for. This guide applies to EXILED plugins. For LabAPI plugins, use the guide [Install LabAPI Plugins](/tutorials/gameserver/scp-secret-laboratory/install-labapi-plugins).

## Where are the EXILED folders?

| Directory | Purpose |
|-----------|---------|
| `/.config/EXILED/Plugins/` | EXILED plugins (`.dll` files) |
| `/.config/EXILED/Plugins/dependencies/` | Additional libraries that some plugins require |
| `/.config/EXILED/Configs/` | Configuration files of the plugins |

## Install a plugin

1. **Download the plugin**\
   Download the `.dll` file of the plugin you want, usually from the plugin developer's GitHub releases page. Also download all dependencies the plugin requires according to its description.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the plugin**\
   Upload the plugin's `.dll` file to the following directory:

   ```text
   /.config/EXILED/Plugins/
   ```

5. **Upload the dependencies**\
   If the plugin requires additional libraries, upload them to the following directory:

   ```text
   /.config/EXILED/Plugins/dependencies/
   ```

   > [!WARNING]
   > Only pure libraries belong in the `dependencies` folder. A plugin `.dll` in this folder is not loaded as a plugin. If a plugin lists another plugin as a requirement, that one also goes into `/.config/EXILED/Plugins/`.

6. **Start the server**\
   Start your server via the dashboard.

7. **Check that it loaded**\
   Open the console in the dashboard. For every plugin that loaded successfully, EXILED prints a line like this during startup:

   ```text
   Loaded plugin ExamplePlugin@1.0.0
   ```

   If the plugin is missing or an error appears, the guide [Plugins not loading](/tutorials/gameserver/scp-secret-laboratory/plugins-not-loading) will help you.

> [!WARNING]
> The plugin version must match the installed EXILED version. If a plugin requires a newer EXILED version, EXILED does not load it.

## Configure a plugin

After the first successful load, EXILED automatically creates a configuration file for each plugin. By default, every plugin gets its own file. Replace `<Port>` with your server's game port, which you can find in the dashboard under **Overview**:

```text
/.config/EXILED/Configs/Plugins/<Plugin-Name>/<Port>.yml
```

A plugin's texts and translations are stored separately under:

```text
/.config/EXILED/Configs/Translations/<Plugin-Name>/<Port>.yml
```

> [!NOTE]
> EXILED can also store the configs together in one file. In that case you find all plugin settings in `/.config/EXILED/Configs/<Port>-config.yml` and all texts in `/.config/EXILED/Configs/<Port>-translations.yml`. Check which of the two variants exists on your server.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Adjust the configuration**\
   Open your plugin's configuration file via [SFTP](/tutorials/gameserver/establish-sftp-connection) and adjust the values. Use `is_enabled` to turn the plugin on (`true`) or off (`false`).

3. **Start the server**\
   Save the file and start your server to apply the changes.

> [!IMPORTANT]
> The files use the YAML format. Pay attention to the indentation with spaces and do not use tabs. If a file is invalid, EXILED cannot load the plugin's settings.

## Remove a plugin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the plugin**\
   Delete the plugin's `.dll` file from `/.config/EXILED/Plugins/` via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Start the server**\
   Start your server via the dashboard.

> [!TIP]
> If you only want to turn a plugin off temporarily, set `is_enabled` to `false` in its configuration instead of deleting the file. Also, always install new plugins one at a time and check the startup after each plugin. This makes it much easier to find conflicts.
