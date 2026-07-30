---
description: Add an admin to a Longvinter server
---

# How to Add an Admin to Your Longvinter Server

Admins on a Longvinter server are defined through the configuration file `Game.ini`. What you enter is the player's **EOS Account ID** – a 32-character string of digits and letters.

:::: danger Important
Even though the key is called `AdminSteamID`, it expects the **EOS Account ID** and **not** the SteamID64. If you enter a 17-digit SteamID64 there, the player will not get admin rights.
::::

## Find the EOS Account ID

1. <b>Start Longvinter</b><br>
   Launch Longvinter on your PC.

2. <b>Open the settings</b><br>
   Open **Options** in the main menu.

3. <b>Read the ID</b><br>
   Switch to the **General** tab and scroll down. Your **EOS Account ID** is listed there – copy it.

:::: tip Tip
Every player can look up their own EOS Account ID this way and send it to you. Without that ID you cannot make anyone an admin. If you already are an admin, you can also copy a player's EOS ID in game by right-clicking that player.
::::

## Add the admin

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

   :::: warning Warning
   Never edit `Game.ini` while the server is running. The server saves roughly every ten minutes and overwrites your changes in the process.
   ::::

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /Longvinter/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Enter the EOS Account ID</b><br>
   Add the ID to the key `AdminSteamID` in the section `[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]`:

   ```ini
   [/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
   AdminSteamID=00023652dd9b4673be20d4f83ab42c5b
   ```

5. <b>Start the server</b><br>
   Save the file and start your server. Admin rights are only read on server start.

## Add multiple admins

Multiple admins go into the same line, separated by **exactly one space**:

```ini
[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
AdminSteamID=00023652dd9b4673be20d4f83ab42c5b 00023329455d4d6a972e875d39ebf20a
```

:::: warning Warning
Do **not** separate the IDs with commas and do not spread them over several lines. Both will result in none of the listed players getting admin rights.
::::

:::: info Note
The key belongs into the section `[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]`. It has no effect in the second section of the file, `[/Game/Blueprints/Server/GI_AdvancedSessions.GI_AdvancedSessions_C]`.
::::

## Open the admin panel in the game

1. <b>Join the server</b><br>
   Connect to your server – see [Join Server](join-server.md).

2. <b>Open the menu</b><br>
   Press `ESC` in the game.

3. <b>Open the admin panel</b><br>
   Click on **Admin panel** in the top left. The entry only appears if your EOS Account ID is stored correctly.

:::: info Note
If the **Admin panel** is not shown, check the ID for typos, verify the section in `Game.ini` and restart the server.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
