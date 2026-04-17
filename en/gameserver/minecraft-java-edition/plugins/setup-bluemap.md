---
description: Set up BlueMap on a Minecraft Java Edition server
---

# How to Set Up BlueMap on a Minecraft Java Server

BlueMap creates a 3D web map of your Minecraft server that you can view in a browser. The map is rendered as a textured mesh and allows you to fly through the world with a camera.

:::: warning Warning
BlueMap requires its **own port** for the web server. Do **not** use your server's default port!
::::

## Step 1: Install the Mod/Plugin

1. <b>Download mod</b><br>
   Download [BlueMap](https://modrinth.com/plugin/bluemap) for your server version.
   - For **Fabric/Forge**: Download the mod version and place it in the `mods` folder.
   - For **Paper/Spigot/Bukkit**: Download the plugin version and place it in the `plugins` folder.

2. <b>Restart server</b><br>
   Restart your server so the config files are created.

## Step 2: Open a Port

1. <b>Open network section</b><br>
   Open the **Network** section in your dashboard. There you will find an overview of all available ports.

2. <b>Choose a port</b><br>
   Choose an available port and note it down.

:::: warning Important
Do **not** use your server's default port! BlueMap requires a separate port.
::::

## Step 3: Configure the Config File

1. <b>Open config file</b><br>
   Navigate to the BlueMap webserver config in the file browser.
   - **Fabric/Forge**: `config/bluemap/webserver.conf`
   - **Paper/Spigot/Bukkit**: `plugins/BlueMap/webserver.conf`

2. <b>Find port line</b><br>
   Open the file and look for the line:
   ```
   port: 8100
   ```

3. <b>Replace port</b><br>
   Replace `8100` with your chosen port from Step 2.
   ```
   port: YOUR_PORT
   ```

4. <b>Save changes</b><br>
   Save the file.

## Step 4: Restart the Server

1. <b>Restart server</b><br>
   Restart your server for the changes to take effect.

2. <b>Open the map</b><br>
   Open the web map in your browser at:

   ```
   http://YOUR_SERVER_IP:YOUR_PORT
   ```

:::: tip Tip
On first start, BlueMap renders the entire world — depending on world size this can take many hours. In `core.conf` you can adjust the render performance if your server gets too loaded.
::::
