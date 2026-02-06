---
description: Set up Simple Voice Chat on a Minecraft Java Edition server
---

# How to Set Up Simple Voice Chat on a Minecraft Java Server

Simple Voice Chat enables proximity voice chat on your Minecraft server – players can talk to each other based on how close they are in-game.

::: warning Warning
Simple Voice Chat requires its **own UDP port**. Do **not** use your server's default port!
:::

::: info Info
All players who want to use the voice chat must also have the [Simple Voice Chat Mod](https://modrinth.com/plugin/simple-voice-chat) installed.
:::

## Step 1: Install the Mod/Plugin

1. <strong>Download [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) for your server version.</strong>
   - For **Fabric/Forge**: Download the mod version and place it in the `mods` folder.
   - For **Paper/Spigot/Bukkit**: Download the plugin version and place it in the `plugins` folder.

2. <strong>Restart your server so the config files are created.</strong>

## Step 2: Open a Port

1. <strong>Open the "Network" section in your dashboard.</strong>
   - There you will find an overview of all available ports.

2. <strong>Choose an available port and note it down.</strong>

::: warning Important
Do **not** use your server's default port! Simple Voice Chat requires a separate UDP port.
:::

## Step 3: Configure the Config File

1. <strong>Navigate to the Simple Voice Chat config file in the file browser.</strong>
   - **Fabric/Forge**: `config/voicechat/voicechat-server.properties`
   - **Paper/Spigot/Bukkit**: `plugins/voicechat/voicechat-server.properties`

2. <strong>Open the file and look for the line:</strong>
   ```
   port=24454
   ```

3. <strong>Replace `24454` with your chosen port from Step 2.</strong>
   ```
   port=YOUR_PORT
   ```

4. <strong>Save the changes.</strong>

::: tip Tip
You can leave the other settings like `bind_address` or `voice_host` at their default values – they work for most servers.
:::

## Step 4: Restart the Server

1. <strong>Restart your server for the changes to take effect.</strong>

2. <strong>Check the server console to verify that Simple Voice Chat started successfully.</strong>
   - You should see a message like: `Voice chat server started on port XXXXX`
