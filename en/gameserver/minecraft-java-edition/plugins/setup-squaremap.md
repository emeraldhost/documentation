---
description: Set up squaremap on a Minecraft Java Edition server
---

# How to Set Up squaremap on a Minecraft Java Server

squaremap creates a minimalistic 2D web map of your Minecraft server. The map is rendered in vanilla style and can be opened directly in a browser.

:::: warning Warning
squaremap requires its **own port** for the web server. Do **not** use your server's default port!
::::

:::: info Note
squaremap only works with **Paper** or **Purpur** servers. It does not run on Vanilla, Spigot, Forge or Fabric servers.
::::

## Step 1: Install the Plugin

1. <b>Download plugin</b><br>
   Download [squaremap](https://modrinth.com/plugin/squaremap) for your server version and place the `.jar` file into the `plugins` folder.

2. <b>Restart server</b><br>
   Restart your server so the config files are created.

## Step 2: Open a Port

1. <b>Open network section</b><br>
   Open the **Network** section in your dashboard. There you will find an overview of all available ports.

2. <b>Choose a port</b><br>
   Choose an available port and note it down.

:::: warning Important
Do **not** use your server's default port! squaremap requires a separate port.
::::

## Step 3: Configure the Config File

1. <b>Open config file</b><br>
   Open the file `plugins/squaremap/config.yml`.

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
