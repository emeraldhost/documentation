---
slug: "setup-squaremap"
language: "en"
title: "How to Set Up squaremap on a Minecraft Java Edition Server"
description: "Set up squaremap on a Minecraft Java Edition server"
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
short_title: "Setup squaremap"
sort: 35
related: ["gameserver/minecraft/setup-pl3xmap", "gameserver/minecraft/setup-simple-voice-chat", "gameserver/minecraft/change-gamemode", "gameserver/minecraft/moderate-server"]
---

squaremap creates a minimalistic 2D web map of your Minecraft server. The map is rendered in vanilla style and can be opened directly in a browser.

> [!WARNING]
> squaremap requires its **own port** for the web server. Do **not** use your server's default port!

> [!NOTE]
> squaremap only works with **Paper** or **Purpur** servers. It does not run on Vanilla, Spigot, Forge or Fabric servers.

## Step 1: Install the Plugin

1. **Download plugin**\
   Download [squaremap](https://modrinth.com/plugin/squaremap) for your server version and place the `.jar` file into the `plugins` folder.

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
> Do **not** use your server's default port! squaremap requires a separate port.

## Step 3: Configure the Config File

1. **Open config file**\
   Open the file `plugins/squaremap/config.yml`.

2. **Find port section**\
   Look for the `internal-webserver` section:

   ```yaml
   settings:
     internal-webserver:
       enabled: true
       bind: 0.0.0.0
       port: 8080
   ```

3. **Replace port**\
   Replace `8080` with your chosen port from Step 2.

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
