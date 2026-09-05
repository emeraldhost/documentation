---
slug: "setup-simple-voice-chat"
language: "en"
title: "How to Set Up Simple Voice Chat on a Minecraft Java Edition Server"
description: "Set up Simple Voice Chat on a Minecraft Java Edition server"
tags: []
date: "2026-01-02"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Setup Simple Voice Chat"
sort: 34
related: ["gameserver/minecraft/setup-plasmo-voice", "gameserver/minecraft/setup-pl3xmap", "gameserver/minecraft/setup-squaremap", "gameserver/minecraft/change-gamemode"]
---

Simple Voice Chat enables proximity voice chat on your Minecraft server – players can talk to each other based on how close they are in-game.

> [!WARNING]
> Simple Voice Chat requires its **own port**. Do **not** use your server's default port!

> [!NOTE]
> All players who want to use the voice chat must also have the [Simple Voice Chat Mod](https://modrinth.com/plugin/simple-voice-chat) installed.

## Step 1: Install the Mod/Plugin

1. **Download mod**\
   Download [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) for your server version.
   - For **Fabric/Forge**: Download the mod version and place it in the `mods` folder.
   - For **Paper/Spigot/Bukkit**: Download the plugin version and place it in the `plugins` folder.

2. **Restart server**\
   Restart your server so the config files are created.

## Step 2: Open a Port

1. **Open network section**\
   Open the "Network" section in your dashboard. There you will find an overview of all available ports.

2. **Choose a port**\
   Choose an available port and note it down.

> [!WARNING]
> **Important**
>
> Do **not** use your server's default port! Simple Voice Chat requires a separate port.

## Step 3: Configure the Config File

1. **Open config file**\
   Navigate to the Simple Voice Chat config file in the file browser.
   - **Fabric/Forge**: `config/voicechat/voicechat-server.properties`
   - **Paper/Spigot/Bukkit**: `plugins/voicechat/voicechat-server.properties`

2. **Find port line**\
   Open the file and look for the line:

   ```text
   port=24454
   ```

3. **Replace port**\
   Replace `24454` with your chosen port from Step 2.

   ```text
   port=YOUR_PORT
   ```

4. **Save changes**\
   Save the file.

> [!TIP]
> You can leave the other settings like `bind_address` or `voice_host` at their default values – they work for most servers.

## Step 4: Restart the Server

1. **Restart server**\
   Restart your server for the changes to take effect.

2. **Check console**\
   Check the server console to verify that Simple Voice Chat started successfully. You should see a message like: `Voice chat server started on port XXXXX`
