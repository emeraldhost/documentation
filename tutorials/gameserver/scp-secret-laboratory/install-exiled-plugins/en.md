---
slug: "install-exiled-plugins"
language: "en"
title: "How to Install EXILED Plugins on Your SCP: Secret Laboratory Server"
description: "Install EXILED plugins on a SCP: Secret Laboratory server"
tags: []
date: "2026-04-15"
visibility: "public"
updated: "2026-08-24"
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

EXILED is the most popular plugin framework for SCP: Secret Laboratory and must be installed before any plugins can be loaded.

## Prerequisite: EXILED

EXILED is usually pre-installed by hosting providers. If that is not the case on your server, you can find the official installation guide on the [EXILED GitHub page](https://github.com/ExMod-Team/EXILED).

## Install a plugin

1. **Download the plugin**\
   Download the `.dll` file of the plugin you want to install – usually from the GitHub release page of the plugin developer.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the plugin**\
   Upload the `.dll` file to the following directory:

   ```text
   /.config/EXILED/Plugins/
   ```

5. **Start the server**\
   Start your server via the dashboard. EXILED will load the plugin automatically on start-up.

## Configure a plugin

After a plugin is loaded for the first time, EXILED generates its configuration file automatically under:

```text
/.config/EXILED/Configs/
```

1. **Edit the configuration**\
   Open the configuration file of your plugin and adjust the values to your liking.

2. **Restart the server**\
   Restart your server so the changes take effect.

> [!WARNING]
> The plugin version must match the installed EXILED version. If the versions do not match, the plugin will fail to load or cause errors on server start.

> [!TIP]
> Install plugins one at a time and test the server start after each new plugin. This makes it much easier to spot conflicts or incompatibilities.
