---
description: Add mods or plugins to a Minecraft PocketMine Edition server
---

# How to Add Mods to Your Minecraft PocketMine Edition Server

PocketMine-MP does **not** support classic mods. Instead, the server is extended through **plugins** – small PHP extensions in `.phar` format that run exclusively on the server.

:::: danger Important
Neither Forge or Fabric mods nor Bedrock add-ons work on a PocketMine server. Forge and Fabric belong to the Java Edition, and behaviour packs are explicitly not supported by PocketMine-MP. Packs that depend on a behaviour pack will not work correctly either.
::::

:::: info Note
Plugins run entirely on the server. Your fellow players do **not** have to install anything and can join with an unmodified Minecraft Bedrock client.
::::

## Where do I find plugins?

The official plugin platform for PocketMine-MP is Poggit:

- [Poggit Release](https://poggit.pmmp.io/plugins)

:::: warning Warning
Only download plugins from trustworthy sources and make sure the plugin matches the installed PocketMine major version.
::::

## Install a plugin

1. <b>Download the plugin</b><br>
   Download the plugin as a `.phar` file.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

4. <b>Upload the plugin</b><br>
   In the main folder of your server, upload the `.phar` file into the following folder:

   ```
   plugins
   ```

5. <b>Start the server</b><br>
   Start your server. The plugin is loaded on startup.

:::: tip Tip
On first start a plugin usually creates its own subfolder holding its configuration files. By default this subfolder is located in the `plugin_data` folder in the main folder of your server. You can adjust the files inside afterwards.
::::

## Update a plugin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the old version</b><br>
   Delete the old `.phar` file of the plugin from the `plugins` folder.

   :::: danger Important
   The official PocketMine documentation explicitly states that old versions of a plugin have to be deleted and the server restarted. Do not just leave the old file in place.
   ::::

3. <b>Upload the new version</b><br>
   Upload the new `.phar` file into the `plugins` folder.

4. <b>Start the server</b><br>
   Start your server so the change takes effect.

## Remove a plugin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the plugin</b><br>
   Delete the `.phar` file from the `plugins` folder.

3. <b>Delete the configuration</b><br>
   Optionally delete the matching subfolder of the plugin in the `plugin_data` folder.

4. <b>Start the server</b><br>
   Start your server.

## Where are the plugin configuration files?

By default PocketMine-MP collects the configurations of all plugins in the `plugin_data` folder in the main folder of your server – every plugin gets its own subfolder there.

If you prefer the legacy structure instead, where a plugin's configuration sits directly under `plugins/`, set the following value in the `pocketmine.yml` file in the main folder of your server:

```yaml
plugins:
  legacy-data-dir: true
```

:::: info Note
By default this value is set to `false`. According to the comment in `pocketmine.yml` the option only exists for backwards compatibility with existing installations – on a new server you do not have to change it.
::::

## Resource packs for visuals

Visual changes for all players are applied through resource packs.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Upload the pack</b><br>
   In the main folder of your server, upload the resource pack as a `.zip` or `.mcpack` file into the following folder:

   ```
   resource_packs
   ```

3. <b>Register the pack</b><br>
   In the `resource_packs` folder, open the `resource_packs.yml` file and add the file name including its extension to the `resource_stack` list:

   ```yaml
   resource_stack:
     - MyPack.mcpack
   ```

4. <b>Start the server</b><br>
   Start your server.

:::: info Note
The stack under `resource_stack` is applied from bottom to top: entries further up override entries further down.
::::

:::: warning Warning
Unpacked resource packs (plain folders) are not supported – only `.zip` and `.mcpack` are allowed. Resource packs also cannot be set per world, they always apply to the entire server.
::::

:::: tip Make a resource pack mandatory
The `force_resources` entry in the `resource_packs.yml` file inside the `resource_packs` folder defines whether players have to load the pack in order to join:

```yaml
force_resources: true
```
::::
