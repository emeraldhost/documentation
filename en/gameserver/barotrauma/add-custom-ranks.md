---
description: Add custom ranks on a Barotrauma server
---

# How to Add Custom Ranks on Your Barotrauma Server

You can create custom permission ranks to assign specific permissions to players.

:::: warning Warning
Make sure your server is stopped before editing the config file.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open permissionpresets.xml</b><br>
   Open the file `permissionpresets.xml` at:

   ```
   /config/permissionpresets.xml
   ```

4. <b>Add a custom rank</b><br>
   Add a new `<PresetPermission>` entry with the desired name and permissions. For example:

   ```xml
   <PresetPermission
     Name="Moderator"
     Permissions="Kick, Ban, Unban"
     Description="Can kick and ban players">
   </PresetPermission>
   ```

   You can combine multiple permissions by separating them with commas.

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
You can find a list of available permissions by looking at the existing presets in the file. Common permissions include `Kick`, `Ban`, `Unban`, `ConsoleCommands`, `ManageSettings`, and `ManageRound`.
::::
