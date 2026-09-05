---
slug: "install-labapi-plugins"
language: "en"
title: "How to Install LabAPI Plugins on Your SCP: Secret Laboratory Server"
description: "Install LabAPI plugins on a SCP: Secret Laboratory server"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install LabAPI Plugins"
sort: 8
related: ["gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/install-exiled-plugins", "gameserver/scp-secret-laboratory/join-server", "gameserver/scp-secret-laboratory/kick-and-ban-players"]
---

LabAPI is Northwood's official plugin loader for SCP: Secret Laboratory. It is already included in every dedicated server build – there is nothing to install, you can start uploading plugins right away.

## LabAPI and EXILED

EXILED is built on top of LabAPI: the Exiled Loader is itself loaded as a LabAPI plugin. Both systems therefore run alongside each other without issues. EXILED plugins still belong in their own directories – see [Install EXILED Plugins](/tutorials/gameserver/scp-secret-laboratory/install-exiled-plugins).

> [!NOTE]
> Many plugins are released in separate variants for LabAPI and EXILED. When downloading, check which framework the `.dll` file was built for – this guide covers LabAPI plugins.

## Where are the LabAPI folders?

LabAPI creates its folders automatically on the first server start. Replace `<Port>` with the Game Port of your server – you can find it in the dashboard under **Overview**:

| Directory | Purpose |
|-----------|---------|
| `/.config/SCP Secret Laboratory/LabAPI/plugins/global/` | Plugins the server always loads |
| `/.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/` | Plugins loaded only with this Game Port |
| `/.config/SCP Secret Laboratory/LabAPI/dependencies/global/` | Additional libraries some plugins require |
| `/.config/SCP Secret Laboratory/LabAPI/configs/` | Configuration files of the plugins |

> [!TIP]
> Use the `plugins/global/` folder for your plugins. The Game Port is assigned automatically and can change – plugins in the `global` folder are not affected by this and are always loaded.

## Install a plugin

1. **Download the plugin**\
   Download the `.dll` file of the plugin you want to install – usually from the GitHub release page of the plugin developer. Also download any dependencies the plugin lists in its description.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the plugin**\
   Upload the `.dll` file to the following directory:

   ```text
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   ```

5. **Upload dependencies**\
   If the plugin requires additional libraries, upload them to the following directory:

   ```text
   /.config/SCP Secret Laboratory/LabAPI/dependencies/global/
   ```

6. **Start the server**\
   Start your server via the dashboard. LabAPI loads the plugin automatically on start-up and reports it in the start-up output of the console.

> [!WARNING]
> If a plugin lists **another plugin** as a dependency, that plugin still belongs in the `plugins` folder, not in the `dependencies` folder. Only plain libraries go into the `dependencies` folder.

## Configure a plugin

After a plugin is loaded successfully for the first time, LabAPI creates a dedicated configuration folder for it – replace `<Port>` with the Game Port of your server:

```text
/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<plugin name>/
```

It always contains a `properties.yml`, which lets you enable or disable the plugin. If a plugin has settings of its own, its configuration file is stored there as well – a `config.yml` by default. All files use the YAML format.

1. **Edit the configuration**\
   Open the configuration file of your plugin and adjust the values to your liking. Make sure the file remains valid YAML – otherwise the plugin falls back to its default values or fails to load.

2. **Restart the server**\
   Restart your server so the changes take effect.

> [!NOTE]
> Some plugins store their configuration under `/.config/SCP Secret Laboratory/LabAPI/configs/global/<plugin name>/` instead – it then applies regardless of the Game Port.

> [!WARNING]
> The plugin version must match the LabAPI version of your server. LabAPI is updated together with the server build – a plugin built for a different major version of LabAPI will not be loaded, and the console shows a corresponding error message on start-up.

> [!TIP]
> Install plugins one at a time and watch the console during server start after each new plugin. Loading errors appear right at the beginning – this makes it much easier to spot conflicts or incompatibilities.
