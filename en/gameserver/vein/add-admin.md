---
description: Add an admin to a VEIN server
---

# How to Add an Admin to Your VEIN Server

You can add admins and super admins via the `Game.ini` file.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the file `Game.ini` at:

   ```
   /Vein/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Add admin</b><br>
   Add the section `[/Script/Vein.VeinGameSession]` (if not already present) and enter the SteamID64:

   ```ini
   [/Script/Vein.VeinGameSession]
   AdminSteamIDs=76561198012345678
   ```

   For multiple admins, add each SteamID64 on a new line:

   ```ini
   [/Script/Vein.VeinGameSession]
   AdminSteamIDs=76561198012345678
   AdminSteamIDs=76561198087654321
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## Add super admin

Super admins have extended permissions. Use `SuperAdminSteamIDs` instead of `AdminSteamIDs`:

```ini
[/Script/Vein.VeinGameSession]
SuperAdminSteamIDs=76561198012345678
AdminSteamIDs=76561198087654321
```

## Open admin menu

As an admin, you can open the admin menu in-game by pressing the `\` key (backslash). From there you can spawn items, manage gameplay and moderate the server.
