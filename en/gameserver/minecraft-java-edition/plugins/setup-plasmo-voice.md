---
description: Set up Plasmo Voice on a Minecraft Java Edition server
---

# How to Set Up Plasmo Voice on a Minecraft Java Server

Plasmo Voice brings proximity voice chat to your Minecraft server – similar to Simple Voice Chat, but with additional features like groups and radios.

:::: warning Warning
Plasmo Voice requires its **own port**. Do **not** use your server's default port!
::::

:::: info Note
All players who want to use the voice chat must also have the [Plasmo Voice Mod](https://modrinth.com/mod/plasmo-voice) installed.
::::

## Step 1: Install the Mod/Plugin

1. <b>Download mod</b><br>
   Download [Plasmo Voice](https://modrinth.com/plugin/plasmo-voice) for your server version.
   - For **Fabric/Forge/NeoForge**: Download the mod version and place it in the `mods` folder.
   - For **Paper/Folia**: Download the plugin version and place it in the `plugins` folder.

2. <b>Restart server</b><br>
   Restart your server so the config files are created.

## Step 2: Open a Port

1. <b>Open network section</b><br>
   Open the **Network** section in your dashboard. There you will find an overview of all available ports.

2. <b>Choose a port</b><br>
   Choose an available port and note it down.

:::: warning Important
Do **not** use your server's default port! Plasmo Voice requires a separate port.
::::

## Step 3: Configure the Config File

1. <b>Open config file</b><br>
   Navigate to the Plasmo Voice config file in the file browser.
   - **Fabric/Forge/NeoForge**: `config/plasmovoice/config.toml`
   - **Paper/Folia**: `plugins/PlasmoVoice/config.toml`

2. <b>Find port line</b><br>
   Open the file and look for the line:
   ```
   port = 0
   ```

3. <b>Replace port</b><br>
   Replace `0` with your chosen port from Step 2.
   ```
   port = YOUR_PORT
   ```

4. <b>Save changes</b><br>
   Save the file.

:::: tip Tip
The default value `0` means Plasmo Voice uses the same port as your Minecraft server. To avoid conflicts we recommend using a dedicated port.
::::

## Step 4: Restart the Server

1. <b>Restart server</b><br>
   Restart your server for the changes to take effect.

2. <b>Check console</b><br>
   Check the server console to verify that Plasmo Voice started successfully.
