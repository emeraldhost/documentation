---
description: Install plugins on a Minecraft Java Edition server
---

# How to Install Plugins on a Minecraft Java Server

You can install plugins on your server to add new features, management tools or gameplay mechanics.

:::: info Note
Plugins only work with plugin-capable server versions such as Spigot, Paper, Purpur or Pufferfish. Vanilla servers do not support plugins. If you want to use mods (Forge, Fabric, etc.) instead, see: [Install Mods](install-mods.md).
::::

## Where can I find plugins?

You can find plugins on the following platforms:

- [Modrinth](https://modrinth.com/plugins)
- [Hangar](https://hangar.papermc.io/)
- [SpigotMC](https://www.spigotmc.org/resources/)
- [Bukkit](https://dev.bukkit.org/bukkit-plugins)

:::: warning Important
Only download plugins from trusted sources. Plugins from unknown sources may contain malicious code.
::::

## How do I install plugins?

1. <b>Download the plugin</b><br>
   Download the plugin as a `.jar` file.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to the `plugins` folder.

3. <b>Upload the plugin</b><br>
   Upload the `.jar` file to the `plugins` folder.

4. <b>Restart the server</b><br>
   Restart the server so the plugin is loaded.

:::: tip Note
After the first start, the plugin usually creates its own folder under `plugins/` with configuration files that you can customize.
::::

## How do I remove a plugin?

1. <b>Stop the server</b><br>
   Stop the server.

2. <b>Delete the plugin</b><br>
   Delete the plugin's `.jar` file from the `plugins` folder.

3. <b>Delete config folder</b><br>
   Optionally delete the associated configuration folder under `plugins/`.

4. <b>Restart the server</b><br>
   Restart the server.
