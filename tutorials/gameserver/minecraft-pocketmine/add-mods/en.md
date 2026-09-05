---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Minecraft PocketMine Edition Server"
description: "Add mods or plugins to a Minecraft PocketMine Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/minecraft-pocketmine/add-admin", "gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame"]
---

PocketMine-MP does **not** support classic mods. Instead, the server is extended through **plugins** – small PHP extensions in `.phar` format that run exclusively on the server.

> [!IMPORTANT]
> Neither Forge or Fabric mods nor Bedrock add-ons work on a PocketMine server. Forge and Fabric belong to the Minecraft Java Edition, and behaviour packs are explicitly not supported by PocketMine-MP. Packs that depend on a behaviour pack will not work correctly either.

> [!NOTE]
> Plugins run entirely on the server. Your fellow players do **not** have to install anything and can join with an unmodified Minecraft Bedrock client.

## Where do I find plugins?

The official plugin platform for PocketMine-MP is Poggit:

- [Poggit Release](https://poggit.pmmp.io/plugins)

> [!WARNING]
> Only download plugins from trustworthy sources and make sure the plugin matches the installed PocketMine major version.

## Install a plugin

1. **Download the plugin**\
   Download the plugin as a `.phar` file.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

4. **Upload the plugin**\
   In the main folder of your server, upload the `.phar` file into the following folder:

   ```text
   plugins
   ```

5. **Start the server**\
   Start your server. The plugin is loaded on startup.

> [!TIP]
> On first start a plugin usually creates its own subfolder holding its configuration files. By default this subfolder is located in the `plugin_data` folder in the main folder of your server. You can adjust the files inside afterwards.

## Update a plugin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the old version**\
   Delete the old `.phar` file of the plugin from the `plugins` folder.

   > [!IMPORTANT]
   > The official PocketMine documentation explicitly states that old versions of a plugin have to be deleted and the server restarted. Do not just leave the old file in place.

3. **Upload the new version**\
   Upload the new `.phar` file into the `plugins` folder.

4. **Start the server**\
   Start your server so the change takes effect.

## Remove a plugin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the plugin**\
   Delete the `.phar` file from the `plugins` folder.

3. **Delete the configuration**\
   Optionally delete the matching subfolder of the plugin in the `plugin_data` folder.

4. **Start the server**\
   Start your server.

## Where are the plugin configuration files?

By default PocketMine-MP collects the configurations of all plugins in the `plugin_data` folder in the main folder of your server – every plugin gets its own subfolder there.

If you prefer the legacy structure instead, where a plugin's configuration sits directly under `plugins/`, set the following value in the `pocketmine.yml` file in the main folder of your server:

```yaml
plugins:
  legacy-data-dir: true
```

> [!NOTE]
> By default this value is set to `false`. According to the comment in `pocketmine.yml` the option only exists for backwards compatibility with existing installations – on a new server you do not have to change it.

## Resource packs for visuals

Visual changes for all players are applied through resource packs.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Upload the pack**\
   In the main folder of your server, upload the resource pack as a `.zip` or `.mcpack` file into the following folder:

   ```text
   resource_packs
   ```

3. **Register the pack**\
   In the `resource_packs` folder, open the `resource_packs.yml` file and add the file name including its extension to the `resource_stack` list:

   ```yaml
   resource_stack:
     - MyPack.mcpack
   ```

4. **Start the server**\
   Start your server.

> [!NOTE]
> The stack under `resource_stack` is applied from bottom to top: entries further up override entries further down.

> [!WARNING]
> Unpacked resource packs (plain folders) are not supported – only `.zip` and `.mcpack` are allowed. Resource packs also cannot be set per world, they always apply to the entire server.

> [!TIP]
> **Make a resource pack mandatory**
>
> The `force_resources` entry in the `resource_packs.yml` file inside the `resource_packs` folder defines whether players have to load the pack in order to join:
>
> ```yaml
> force_resources: true
> ```
