---
slug: "install-plugins"
language: "en"
title: "How to Install Plugins on a Minecraft Java Edition Server"
description: "Install plugins on a Minecraft Java Edition server"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install Plugins"
sort: 24
related: ["gameserver/minecraft/increase-slots", "gameserver/minecraft/install-mods", "gameserver/minecraft/join-server", "gameserver/minecraft/kick-ban-players"]
---

You can install plugins on your server to add new features, management tools or gameplay mechanics.

> [!NOTE]
> Plugins only work with plugin-capable server versions such as Spigot, Paper, Purpur or Pufferfish. Vanilla servers do not support plugins. If you want to use mods (Forge, Fabric, etc.) instead, see: [Install Mods](/tutorials/gameserver/minecraft/install-mods).

## Install plugins via the dashboard (recommended)

The easiest way to install plugins is directly in the dashboard. On the **Plugins & Mods** page you can search for suitable extensions and install them directly on your server.

1. **Open the page**\
   Open your server in the dashboard and click **Plugins & Mods** in the sidebar.

2. **Search for a plugin**\
   Search the page for the plugin you want.

3. **Install the plugin**\
   Click the install button on the plugin you want.

4. **Restart the server**\
   Restart your server so the plugin is loaded.

## Install plugins manually via SFTP

If a plugin is not available in the dashboard, you can also upload it yourself.

### Where can I find plugins?

You can find plugins on the following platforms:

- [Modrinth](https://modrinth.com/plugins)
- [Hangar](https://hangar.papermc.io/)
- [SpigotMC](https://www.spigotmc.org/resources/)
- [Bukkit](https://dev.bukkit.org/bukkit-plugins)

> [!WARNING]
> **Important**
>
> Only download plugins from trusted sources. Plugins from unknown sources may contain malicious code.

### How do I upload a plugin?

1. **Download the plugin**\
   Download the plugin as a `.jar` file.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and navigate to the `plugins` folder.

3. **Upload the plugin**\
   Upload the `.jar` file to the `plugins` folder.

4. **Restart the server**\
   Restart the server so the plugin is loaded.

> [!TIP]
> **Note**
>
> After the first start, the plugin usually creates its own folder under `plugins/` with configuration files that you can customize.

## How do I remove a plugin?

1. **Stop the server**\
   Stop the server.

2. **Delete the plugin**\
   Delete the plugin's `.jar` file from the `plugins` folder.

3. **Delete config folder**\
   Optionally delete the associated configuration folder under `plugins/`.

4. **Restart the server**\
   Restart the server.
