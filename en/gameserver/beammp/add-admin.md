---
description: Add an admin on a BeamMP server
---

# How to Add an Admin to Your BeamMP Server

BeamMP does not have a built-in admin system by default. Admins are managed via server-side Lua plugins.

## Install an Admin Plugin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Download a plugin</b><br>
   Download an admin plugin from the BeamMP forum or a trusted source.

4. <b>Upload the plugin</b><br>
   Upload the plugin to the following directory on your server:

   ```
   /Resources/Server/
   ```

5. <b>Configure the plugin</b><br>
   Open the plugin's configuration file and add the desired admins. The exact steps depend on the plugin you are using.

6. <b>Start the server</b><br>
   Save all changes and start your server.

:::: warning Important
Only use plugins from trusted sources. Check the code or reviews before installing a plugin.
::::

:::: info Note
Since there is no standardized admin system, the available commands and permissions vary depending on the plugin used. Refer to the documentation of your chosen plugin for further details.
::::
