---
description: Install plugins on a Minecraft Java Edition server
---

# How to Install Plugins on a Minecraft Java Server

## Prerequisites

Plugins only work with plugin-capable server versions such as **Spigot**, **Paper**, **Purpur** or **Pufferfish**. Vanilla servers do not support plugins.

## Where can I find plugins?

You can find plugins on the following platforms:

- [Modrinth](https://modrinth.com/plugins)
- [Hangar](https://hangar.papermc.io/)
- [SpigotMC](https://www.spigotmc.org/resources/)
- [Bukkit](https://dev.bukkit.org/bukkit-plugins)

::: warning Important
Only download plugins from trusted sources. Plugins from unknown sources may contain malicious code.
:::

## How do I install plugins?

1. <strong>Download the plugin as a `.jar` file.</strong>

2. <strong>Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to the `plugins` folder.</strong>

3. <strong>Upload the `.jar` file to the `plugins` folder.</strong>

4. <strong>Restart the server so the plugin is loaded.</strong>

::: tip Note
After the first start, the plugin usually creates its own folder under `plugins/` with configuration files that you can customize.
:::

## How do I remove a plugin?

1. <strong>Stop the server.</strong>

2. <strong>Delete the plugin's `.jar` file from the `plugins` folder.</strong>

3. <strong>Optionally delete the associated configuration folder under `plugins/`.</strong>

4. <strong>Restart the server.</strong>
