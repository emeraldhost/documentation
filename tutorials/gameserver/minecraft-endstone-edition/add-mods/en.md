---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Minecraft Endstone Edition Server"
description: "Add mods or plugins to a Minecraft Endstone Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/minecraft-endstone-edition/add-admin", "gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame"]
---

Endstone does **not** support classic mods. Instead, the server is extended through **Endstone plugins** that run exclusively on the server.

> [!IMPORTANT]
> Mods for Forge or Fabric do not work on your server. They belong to Minecraft Java Edition, while Endstone builds on the Bedrock Dedicated Server.

> [!NOTE]
> Plugins run entirely on the server. Your fellow players do **not** have to install anything and can join with an unmodified Minecraft Bedrock client.

## Which plugin formats exist?

| Format | Language | Note |
|--------|----------|------|
| `.whl` | Python | The common format. Endstone loads every `.whl` file from the `plugins` folder. |
| `.so` | C++ | For Linux servers. Make sure to download the Linux build of the plugin. |

> [!WARNING]
> **Caution**
>
> A `.dll` file is the Windows build of a C++ plugin and does **not** work on your Linux server. If a plugin offers both, always download the `.so` file.

## Where do I find plugins?

There is **no** official plugin marketplace with a browser for Endstone. You can find plugins in these places:

- Python plugins are usually published as a package on [PyPI](https://pypi.org/)
- Many developers additionally provide their plugin as a release file on GitHub
- The GitHub topic [endstone-plugin](https://github.com/topics/endstone-plugin) gives an overview of public projects

> [!WARNING]
> **Caution**
>
> Only download plugins from trustworthy sources and make sure the plugin matches your installed Endstone version.

## Install a plugin

1. **Download the plugin**\
   Download the plugin as a `.whl` file (Python) or as a `.so` file (C++, Linux).

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

4. **Upload the plugin**\
   In the main folder of your server, upload the file into the following folder:

   ```text
   plugins
   ```

5. **Start the server**\
   Start your server. The plugin is loaded on startup.

6. **Check the result**\
   Enter the following command in the console of your server to list all loaded plugins:

   ```text
   plugins
   ```

> [!NOTE]
> In the console of your server you enter commands without a leading `/`. In the in-game chat you write them with `/`, for example `/plugins`.

> [!IMPORTANT]
> The `plugins` folder contains a `.local` subfolder. Endstone manages this folder itself – it holds the dependencies of the Python plugins. Do not edit or delete it.

## Update a plugin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the old version**\
   Delete the old plugin file from the `plugins` folder. If you leave it there, the server tries to load both versions.

3. **Upload the new version**\
   Upload the new file into the `plugins` folder.

4. **Start the server**\
   Start your server so the change takes effect.

## Remove a plugin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the plugin**\
   Delete the plugin file from the `plugins` folder.

3. **Delete the configuration**\
   Optionally delete the matching subfolder of the plugin under `plugins/`.

4. **Start the server**\
   Start your server.

## Reload plugins

The following command makes Endstone reload the configuration and the plugins:

```text
reload
```

> [!NOTE]
> The command has the short form `rl`. Both require operator rights, see [Add admin](/tutorials/gameserver/minecraft-endstone-edition/add-admin).

> [!WARNING]
> **Caution**
>
> `reload` is useful for applying configuration changes of an already installed plugin. For a **newly uploaded** or updated plugin, restart your server completely to be safe.

## Behavior and resource packs

Because the official Bedrock Dedicated Server still does the work under Endstone, behavior and resource packs work as usual in addition to plugins.

> [!TIP]
> To learn how to add packs, see [Add behavior and resource packs](/tutorials/gameserver/minecraft-bedrock/add-behavior-und-resource-packs).
