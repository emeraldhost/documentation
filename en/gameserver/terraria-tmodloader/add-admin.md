---
description: Add an admin on a Terraria tModLoader server
---

# How to Add an Admin to Your Terraria tModLoader Server

Admins in Terraria tModLoader are set up using an authentication code that is displayed in the server console when the server starts.

## Set Up Admin via Auth Code

1. <b>Start the server</b><br>
   Start your server via the dashboard.

2. <b>Read the auth code</b><br>
   Open the server console in the dashboard. On startup, an authentication code will be displayed, e.g.:

   ```
   To enable cheats, type in the command 'auth <code>'
   ```

   Note down this code.

3. <b>Join the server</b><br>
   Join your server as a player.

4. <b>Enter the auth command</b><br>
   Enter the following command in the in-game chat:

   ```
   /auth <code>
   ```

   Replace `<code>` with the auth code from the server console.

5. <b>Set a password (optional)</b><br>
   After successful authentication, you can set a permanent password:

   ```
   /password <new_password>
   ```

   With this password, you can log in as admin in the future without needing the auth code.

:::: info Note
The auth code changes with every server restart. If you have set a permanent password, you can log in using `/auth <password>`.
::::

:::: tip Tip
To give other players admin rights, share the current auth code with them or set up a permanent password they can use.
::::

:::: warning Note
The auth code system is a tModLoader feature. Vanilla Terraria servers use the server console directly for admin commands and do not have an auth system. If you are running vanilla Terraria without tModLoader, you will need a mod like Hero's Mod or TShock to get an in-game admin system.
::::
