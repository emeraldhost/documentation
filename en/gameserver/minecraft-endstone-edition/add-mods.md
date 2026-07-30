---
description: Add mods or plugins to a Minecraft Endstone Edition server
---

# How to Add Mods to Your Minecraft Endstone Edition Server

Endstone does **not** support classic mods. Instead, the server is extended through **Endstone plugins** that run exclusively on the server.

:::: danger Important
Mods for Forge or Fabric do not work on your server. They belong to Minecraft Java Edition, while Endstone builds on the Bedrock Dedicated Server.
::::

:::: info Note
Plugins run entirely on the server. Your fellow players do **not** have to install anything and can join with an unmodified Minecraft Bedrock client.
::::

## Which plugin formats exist?

| Format | Language | Note |
|--------|----------|------|
| `.whl` | Python | The common format. Endstone loads every `.whl` file from the `plugins` folder. |
| `.so` | C++ | For Linux servers. Make sure to download the Linux build of the plugin. |

:::: warning Caution
A `.dll` file is the Windows build of a C++ plugin and does **not** work on your Linux server. If a plugin offers both, always download the `.so` file.
::::

## Where do I find plugins?

There is **no** official plugin marketplace with a browser for Endstone. You can find plugins in these places:

- Python plugins are usually published as a package on [PyPI](https://pypi.org/)
- Many developers additionally provide their plugin as a release file on GitHub
- The GitHub topic [endstone-plugin](https://github.com/topics/endstone-plugin) gives an overview of public projects

:::: warning Caution
Only download plugins from trustworthy sources and make sure the plugin matches your installed Endstone version.
::::

## Install a plugin

1. <b>Download the plugin</b><br>
   Download the plugin as a `.whl` file (Python) or as a `.so` file (C++, Linux).

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

4. <b>Upload the plugin</b><br>
   In the main folder of your server, upload the file into the following folder:

   ```
   plugins
   ```

5. <b>Start the server</b><br>
   Start your server. The plugin is loaded on startup.

6. <b>Check the result</b><br>
   Enter the following command in the console of your server to list all loaded plugins:

   ```
   plugins
   ```

:::: info Note
In the console of your server you enter commands without a leading `/`. In the in-game chat you write them with `/`, for example `/plugins`.
::::

:::: danger Important
The `plugins` folder contains a `.local` subfolder. Endstone manages this folder itself – it holds the dependencies of the Python plugins. Do not edit or delete it.
::::

## Update a plugin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the old version</b><br>
   Delete the old plugin file from the `plugins` folder. If you leave it there, the server tries to load both versions.

3. <b>Upload the new version</b><br>
   Upload the new file into the `plugins` folder.

4. <b>Start the server</b><br>
   Start your server so the change takes effect.

## Remove a plugin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the plugin</b><br>
   Delete the plugin file from the `plugins` folder.

3. <b>Delete the configuration</b><br>
   Optionally delete the matching subfolder of the plugin under `plugins/`.

4. <b>Start the server</b><br>
   Start your server.

## Reload plugins

The following command makes Endstone reload the configuration and the plugins:

```
reload
```

:::: info Note
The command has the short form `rl`. Both require operator rights, see [Add admin](add-admin.md).
::::

:::: warning Caution
`reload` is useful for applying configuration changes of an already installed plugin. For a **newly uploaded** or updated plugin, restart your server completely to be safe.
::::

## Behavior and resource packs

Because the official Bedrock Dedicated Server still does the work under Endstone, behavior and resource packs work as usual in addition to plugins.

:::: tip Tip
To learn how to add packs, see [Add behavior and resource packs](../minecraft-bedrock-edition/add-behavior-und-resource-packs.md).
::::
