---
slug: "setup-plasmo-voice"
language: "en"
title: "How to Set Up Plasmo Voice on a Minecraft Java Edition Server"
description: "Set up Plasmo Voice on a Minecraft Java Edition server"
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
short_title: "Setup Plasmo Voice"
sort: 32
related: ["gameserver/minecraft/setup-bluemap", "gameserver/minecraft/setup-dynmap", "gameserver/minecraft/setup-pl3xmap", "gameserver/minecraft/setup-simple-voice-chat"]
---

Plasmo Voice brings proximity voice chat to your Minecraft server – similar to Simple Voice Chat, but with additional features like groups and radios.

> [!WARNING]
> Plasmo Voice requires its **own port**. Do **not** use your server's default port!

> [!NOTE]
> All players who want to use the voice chat must also have the [Plasmo Voice Mod](https://modrinth.com/mod/plasmo-voice) installed.

## Step 1: Install the Mod/Plugin

1. **Download mod**\
   Download [Plasmo Voice](https://modrinth.com/plugin/plasmo-voice) for your server version.
   - For **Fabric/Forge/NeoForge**: Download the mod version and place it in the `mods` folder.
   - For **Paper/Folia**: Download the plugin version and place it in the `plugins` folder.

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
> Do **not** use your server's default port! Plasmo Voice requires a separate port.

## Step 3: Configure the Config File

1. **Open config file**\
   Navigate to the Plasmo Voice config file in the file browser.
   - **Fabric/Forge/NeoForge**: `config/plasmovoice/config.toml`
   - **Paper/Folia**: `plugins/PlasmoVoice/config.toml`

2. **Find port line**\
   Open the file and look for the line:

   ```text
   port = 0
   ```

3. **Replace port**\
   Replace `0` with your chosen port from Step 2.

   ```text
   port = YOUR_PORT
   ```

4. **Save changes**\
   Save the file.

> [!TIP]
> The default value `0` means Plasmo Voice uses the same port as your Minecraft server. To avoid conflicts we recommend using a dedicated port.

## Step 4: Restart the Server

1. **Restart server**\
   Restart your server for the changes to take effect.

2. **Check console**\
   Check the server console to verify that Plasmo Voice started successfully.
