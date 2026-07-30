---
description: Add an admin to a Sons Of The Forest server
---

# How to Add an Admin to Your Sons Of The Forest Server

In Sons Of The Forest admin rights are granted through the file `ownerswhitelist.txt`. Every player whose SteamID64 is listed there counts as a server owner and can manage the server directly ingame.

:::: info Note
There is no ingame command to make someone an admin. Admin rights are granted exclusively through the file on the server.
::::

## Find the SteamID64

You need the **SteamID64** of every desired admin. This is a purely numeric, 17-digit number (e.g. `76561198000000000`). The guide [Find SteamID64](../steamid64-find-out.md) explains how to look it up.

:::: danger Important
Custom URLs, Steam nicknames or shorter ID formats do not work. A wrong format does not produce an error message – the entry is silently ignored and the player stays without admin rights.
::::

## Add the admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The file is only read on startup.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the file</b><br>
   Open the following file for editing:

   ```
   /serverconfig/ownerswhitelist.txt
   ```

4. <b>Enter the SteamID64</b><br>
   Add each SteamID64 on its own line – without commas, without quotation marks and without spaces. Lines starting with `#` are comments and are ignored.

   :::: tip Example
   ```
   # Max
   76561198000000000
   # Lisa
   76561198111111111
   ```
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

## Use the admin features ingame

1. <b>Join the server</b><br>
   Join your server with the Steam account whose SteamID64 you added.

2. <b>Open the admin menu</b><br>
   Press `ESC` and switch to the **Players** tab. It lists all connected players together with the management options.

3. <b>Open the cheat panel (optional)</b><br>
   Open the chat with `Enter`, type `cheatstick` and confirm with `Enter`. Afterwards you can open the panel with `F1`.

   :::: info Note
   The text `cheatstick` is not displayed in the chat while typing. Mind the exact capitalization and enter the command blindly.
   ::::

:::: warning Caution
The `cheatstick` command is only recognized reliably with a US keyboard layout. If the input does not work, check the keyboard language of your system.
::::
