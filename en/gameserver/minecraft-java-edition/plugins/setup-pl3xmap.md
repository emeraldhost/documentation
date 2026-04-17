---
description: Set up Pl3xMap on a Minecraft Java Edition server
---

# How to Set Up Pl3xMap on a Minecraft Java Server

Pl3xMap creates a lightweight web map of your Minecraft server in the vanilla rendering style. You can open the map directly in a browser.

:::: warning Warning
Pl3xMap requires its **own port** for the web server. Do **not** use your server's default port!
::::

:::: info Note
Pl3xMap only works with **Paper** or **Purpur** servers. It does not run on Vanilla, Spigot, Forge or Fabric servers.
::::

## Step 1: Install the Plugin

1. <b>Download plugin</b><br>
   Download [Pl3xMap](https://modrinth.com/plugin/pl3xmap) for your server version and place the `.jar` file into the `plugins` folder.

2. <b>Restart server</b><br>
   Restart your server so the config files are created.

## Step 2: Open a Port

1. <b>Open network section</b><br>
   Open the **Network** section in your dashboard. There you will find an overview of all available ports.

2. <b>Choose a port</b><br>
   Choose an available port and note it down.

:::: warning Important
Do **not** use your server's default port! Pl3xMap requires a separate port.
::::

## Step 3: Configure the Config File

1. <b>Open config file</b><br>
   Open the file `plugins/Pl3xMap/config.yml`.

2. <b>Find port section</b><br>
   Look for the `internal-webserver` section:

   ```yaml
   settings:
     internal-webserver:
       enabled: true
       bind: 0.0.0.0
       port: 8080
   ```

3. <b>Replace port</b><br>
   Replace `8080` with your chosen port from Step 2.

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
