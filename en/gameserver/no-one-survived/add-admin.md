---
description: Add an admin to a No One Survived server
---

# How to Add an Admin to Your No One Survived Server

No One Survived has **no admin list** and no way to grant rights via Steam IDs. Admin rights work exclusively through an **admin password**: whoever knows it can sign in as an admin in the game and open the admin panel.

:::: danger Important
Everyone who knows the admin password has full admin access on your server – including spawning items, changing weather and time as well as kicking and banning players. Only share it with people you trust.
::::

## Set the admin password

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The setting is only read on server start.

2. <b>Enter the admin password</b><br>
   Open the **dashboard** of your server and enter your desired password in the field for the admin password.

   :::: info Alternatively in the configuration file
   If you cannot find a matching field in the dashboard, the value is stored in the following file:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   In the `[ServerSetting]` section you enter it like this:

   ```ini
   [ServerSetting]
   AdminPassword=MyAdminPassword
   ```

   If you enter the value manually, it gets overwritten from the dashboard field on the next server start. That is why you should primarily use the dashboard.
   ::::

3. <b>Start the server</b><br>
   Save the change and start your server.

:::: warning Warning
The admin password is **not** the server password. All players need the server password to join, the admin password grants admin rights. Use two different passwords.
::::

:::: danger Change the default password
If a preset admin password is still stored in the dashboard, make sure to change it. A known default password means that any player can gain admin rights on your server.
::::

## Open the admin panel in the game

1. <b>Join the server</b><br>
   Join your server – see [Join Server](join-server.md).

2. <b>Open the panel</b><br>
   In the game, press `Alt` + `Shift` + `O` at the same time. Make sure it is the letter **O** and not the digit zero.

3. <b>Sign in</b><br>
   Enter the admin password and confirm your input.

4. <b>Verify your admin rights</b><br>
   If the panel opens with the tabs for items, the game world and the blacklist, the server recognised you as an admin. If nothing happens, the password was not applied – check the entry in the dashboard and restart the server.

:::: info Close the panel
You close the panel again with the same key combination `Alt` + `Shift` + `O`.
::::

## What can an admin do?

:::: info Functions of the admin panel
The admin panel is operated with buttons, not with typed commands. Among other things you find there:

- **Spawn items** – clothing, food, materials, tools, weapons and vehicles
- **Control the game world** – weather, time of day, season as well as refreshing loot
- **Adjust character attributes** – raise or lower individual stats of your character
- **Blacklist** – kick, ban and unban players, see [Kick & Ban Players](kick-ban-players.md)

Which tabs and buttons exactly are available can change with game updates.
::::

:::: warning No chat or console commands
There are **no** documented admin commands in the chat, no server console and no RCON for No One Survived. Commonly circulated commands such as `AdminLogin`, `Kick <player>` or configuration values such as `AdminSteamIDs` do not appear in the official documentation – you grant admin rights exclusively through the admin password and the in-game admin panel.
::::
