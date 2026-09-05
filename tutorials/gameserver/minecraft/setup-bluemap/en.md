---
slug: "setup-bluemap"
language: "en"
title: "How to Set Up BlueMap on a Minecraft Java Edition Server"
description: "Set up BlueMap on a Minecraft Java Edition server"
tags: []
date: "2026-04-17"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Setup BlueMap"
sort: 30
related: ["gameserver/minecraft/use-tp-command", "gameserver/minecraft/link-java-with-bedrock", "gameserver/minecraft/setup-dynmap", "gameserver/minecraft/setup-plasmo-voice"]
---

BlueMap creates a 3D web map of your Minecraft server that you can view in a browser. The map is rendered as a textured mesh and allows you to fly through the world with a camera.

> [!WARNING]
> BlueMap requires its **own port** for the web server. Do **not** use your server's default port!

## Step 1: Install the Mod/Plugin

1. **Download mod**\
   Download [BlueMap](https://modrinth.com/plugin/bluemap) for your server version.
   - For **Fabric/Forge**: Download the mod version and place it in the `mods` folder.
   - For **Paper/Spigot/Bukkit**: Download the plugin version and place it in the `plugins` folder.

2. **Restart server**\
   Restart your server so the config files are created.

## Step 2: Open a Port

1. **Open network section**\
   Open the **Network** section in your dashboard. There you will find an overview of all available ports.

2. **Choose a port**\
   Choose an available port and note it down.

> [!WARNING]
> **Important**
>
> Do **not** use your server's default port! BlueMap requires a separate port.

## Step 3: Configure the Config File

1. **Open config file**\
   Navigate to the BlueMap webserver config in the file browser.
   - **Fabric/Forge**: `config/bluemap/webserver.conf`
   - **Paper/Spigot/Bukkit**: `plugins/BlueMap/webserver.conf`

2. **Find port line**\
   Open the file and look for the line:

   ```text
   port: 8100
   ```

3. **Replace port**\
   Replace `8100` with your chosen port from Step 2.

   ```text
   port: YOUR_PORT
   ```

4. **Save changes**\
   Save the file.

## Step 4: Restart the Server

1. **Restart server**\
   Restart your server for the changes to take effect.

2. **Open the map**\
   Open the web map in your browser at:

   ```text
   http://YOUR_SERVER_IP:YOUR_PORT
   ```

> [!TIP]
> On first start, BlueMap renders the entire world – depending on world size this can take many hours. In `core.conf` you can adjust the render performance if your server gets too loaded.
