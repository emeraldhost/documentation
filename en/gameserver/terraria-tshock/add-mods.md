---
description: Add plugins to a Terraria tShock server
---

# How to Add Plugins to Your Terraria tShock Server

tShock has **no mod system for the client**. A tShock server is extended through **plugins**: `.dll` files that live on the server only and add new commands, rules or automations there.

:::: info Note
Your players do not have to install anything for this. They keep connecting with the completely normal Terraria client: [Join server](join-server.md).
::::

:::: danger Important
`.tmod` files do **not** work on a tShock server. They belong to tModLoader and require their own server type: [Add mods (tModLoader)](../terraria-tmodloader/add-mods.md).
::::

## Download a plugin

1. <b>Find a suitable plugin</b><br>
   A curated overview of available plugins can be found in the official [tShock wiki](https://github.com/Pryaxis/TShock/wiki) and on GitHub under the topic [tshock-plugin](https://github.com/topics/tshock-plugin).

2. <b>Check the version</b><br>
   A plugin has to match the tShock version running on your server. Which version gets installed is controlled by the **tShock Version** field in the dashboard.

   :::: warning Caution
   If a plugin does not match the installed tShock version, it is not loaded on startup or the server aborts with an error. Always check the developer's notes on the supported version.
   ::::

3. <b>Extract the file</b><br>
   Download the plugin and extract it if it comes as an archive. What you need is the `.dll` file inside. If a plugin ships additional libraries, those `.dll` files belong on the server as well.

:::: danger Trusted sources only
A plugin is executable program code that runs with the full permissions of your server. Only download plugins from official or well-known sources – the tShock wiki explicitly warns against installing plugins of unknown origin.
::::

## Upload the plugin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. Plugins are only loaded on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the plugin folder</b><br>
   Navigate to the following directory:

   ```
   /ServerPlugins/
   ```

   :::: info Note
   This folder is created when tShock is installed and already contains the file `TShockAPI.dll`. Do not delete the files that are already there – they belong to tShock itself.
   ::::

4. <b>Upload the file</b><br>
   Upload the `.dll` file of the plugin into this folder.

5. <b>Start the server</b><br>
   Start your server and watch the server console. Loaded plugins are listed there on startup with their name and version.

## Configure a plugin

Most plugins create their configuration file automatically in the `/tshock/` folder on first start. So proceed like this:

1. <b>Start the server once</b><br>
   After uploading, start the server once so the plugin can create its files.

2. <b>Stop the server</b><br>
   Stop the server again before editing the configuration.

3. <b>Adjust the configuration</b><br>
   Open the plugin's configuration file in the `/tshock/` folder and adjust the values.

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
Many plugins come with their own commands. `/help` in the game shows you which commands are available. To let other groups use the new commands as well, you have to grant the matching permissions: [Add Admin](add-admin.md).
::::

## Remove a plugin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the file</b><br>
   Delete the plugin's `.dll` file from the `/ServerPlugins/` folder.

3. <b>Start the server</b><br>
   Start your server. The plugin is now disabled.

:::: warning Caution
If your server no longer starts after uploading a plugin, remove the `.dll` file you added last. It is best to add plugins one at a time and start the server in between – that way you immediately see which plugin causes trouble.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your server before making major changes.
::::
