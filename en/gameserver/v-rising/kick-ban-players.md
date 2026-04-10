---
description: Kick and ban players on a V Rising server
---

# How to Kick and Ban Players on Your V Rising Server

You can kick and ban players using in-game console commands or via the `banlist.txt`.

:::: info Note
You need admin rights to kick and ban players. See [Add Admin](add-admin.md).
::::

## Kick and ban players via console

1. <b>Open the console</b><br>
   Press the backtick key (`` ` ``) to open the admin console.

2. <b>Use commands</b><br>
   Use one of the following commands:

   **Kick a player:**
   ```
   kick <name>
   ```

   **Ban a player (by name):**
   ```
   banuser <name>
   ```

   **Ban a player (by character):**
   ```
   bancharacter <name>
   ```

   **Unban a player:**
   ```
   unban <name>
   ```

## Ban players via banlist.txt (alternative)

You can also ban players manually via the ban list:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open banlist.txt</b><br>
   Open the file `banlist.txt` at:

   ```
   /save-data/Settings/banlist.txt
   ```

4. <b>Add SteamID64</b><br>
   Add the player's SteamID64 on a new line. Each line contains one SteamID64.

5. <b>Start the server</b><br>
   Start your server.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Unban a player

Use the console command `unban <name>` or remove the corresponding SteamID64 from the `banlist.txt` and restart the server.
