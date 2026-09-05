---
slug: "add-mods"
language: "en"
title: "How to Add Plugins to Your Terraria tShock Server"
description: "Add plugins to a Terraria tShock server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/terraria-tshock/add-admin", "gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame"]
---

tShock has **no mod system for the client**. A tShock server is extended through **plugins**: `.dll` files that live on the server only and add new commands, rules or automations there.

> [!NOTE]
> Your players do not have to install anything for this. They keep connecting with the completely normal Terraria client: [Join server](/tutorials/gameserver/terraria-tshock/join-server).

> [!IMPORTANT]
> `.tmod` files do **not** work on a tShock server. They belong to tModLoader and require their own server type: [Add mods (tModLoader)](/tutorials/gameserver/terraria-tmodloader/add-mods).

## Download a plugin

1. **Find a suitable plugin**\
   A curated overview of available plugins can be found in the official [tShock wiki](https://github.com/Pryaxis/TShock/wiki) and on GitHub under the topic [tshock-plugin](https://github.com/topics/tshock-plugin).

2. **Check the version**\
   A plugin has to match the tShock version running on your server. Which version gets installed is controlled by the **tShock Version** field in the dashboard.

   > [!WARNING]
   > **Caution**
   >
   > If a plugin does not match the installed tShock version, it is not loaded on startup or the server aborts with an error. Always check the developer's notes on the supported version.

3. **Extract the file**\
   Download the plugin and extract it if it comes as an archive. What you need is the `.dll` file inside. If a plugin ships additional libraries, those `.dll` files belong on the server as well.

> [!CAUTION]
> **Trusted sources only**
>
> A plugin is executable program code that runs with the full permissions of your server. Only download plugins from official or well-known sources – the tShock wiki explicitly warns against installing plugins of unknown origin.

## Upload the plugin

1. **Stop the server**\
   Stop your server via the dashboard. Plugins are only loaded on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the plugin folder**\
   Navigate to the following directory:

   ```text
   /ServerPlugins/
   ```

   > [!NOTE]
   > This folder is created when tShock is installed and already contains the file `TShockAPI.dll`. Do not delete the files that are already there – they belong to tShock itself.

4. **Upload the file**\
   Upload the `.dll` file of the plugin into this folder.

5. **Start the server**\
   Start your server and watch the server console. Loaded plugins are listed there on startup with their name and version.

## Configure a plugin

Most plugins create their configuration file automatically in the `/tshock/` folder on first start. So proceed like this:

1. **Start the server once**\
   After uploading, start the server once so the plugin can create its files.

2. **Stop the server**\
   Stop the server again before editing the configuration.

3. **Adjust the configuration**\
   Open the plugin's configuration file in the `/tshock/` folder and adjust the values.

4. **Start the server**\
   Save the file and start your server.

> [!TIP]
> Many plugins come with their own commands. `/help` in the game shows you which commands are available. To let other groups use the new commands as well, you have to grant the matching permissions: [Add Admin](/tutorials/gameserver/terraria-tshock/add-admin).

## Remove a plugin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the file**\
   Delete the plugin's `.dll` file from the `/ServerPlugins/` folder.

3. **Start the server**\
   Start your server. The plugin is now disabled.

> [!WARNING]
> **Caution**
>
> If your server no longer starts after uploading a plugin, remove the `.dll` file you added last. It is best to add plugins one at a time and start the server in between – that way you immediately see which plugin causes trouble.

> [!TIP]
> Create a [backup](/tutorials/gameserver/terraria-tshock/create-backup) of your server before making major changes.
