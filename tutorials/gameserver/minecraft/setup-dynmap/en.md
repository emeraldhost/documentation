---
slug: "setup-dynmap"
language: "en"
title: "How to Set Up Dynmap on a Minecraft Java Edition Server"
description: "Set up Dynmap on a Minecraft Java Edition server"
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
short_title: "Setup Dynmap"
sort: 31
related: ["gameserver/minecraft/link-java-with-bedrock", "gameserver/minecraft/setup-bluemap", "gameserver/minecraft/setup-plasmo-voice", "gameserver/minecraft/setup-pl3xmap"]
---

Dynmap creates an interactive web map of your Minecraft server that you can open in a browser – similar to Google Maps for your world.

> [!WARNING]
> Dynmap requires its **own port** for the web server. Do **not** use your server's default port!

## Step 1: Install the Mod/Plugin

1. **Download mod**\
   Download [Dynmap](https://www.spigotmc.org/resources/dynmap%C2%AE.274/) for your server version.
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
> Do **not** use your server's default port! Dynmap requires a separate port.

## Step 3: Configure the Config File

1. **Open config file**\
   Navigate to the Dynmap config file in the file browser.
   - **Fabric/Forge**: `config/dynmap/configuration.txt`
   - **Paper/Spigot/Bukkit**: `plugins/dynmap/configuration.txt`

2. **Find port line**\
   Open the file and look for the line:

   ```text
   webserver-port: 8123
   ```

3. **Replace port**\
   Replace `8123` with your chosen port from Step 2.

   ```text
   webserver-port: YOUR_PORT
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
> On first start, Dynmap renders the entire world – depending on world size this can take several hours. After that, only changes are re-rendered.
