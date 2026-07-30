---
description: Add an admin to an Unturned server
---

# How to Add an Admin to Your Unturned Server

Unturned knows two levels: the **owner**, who is configured permanently, and regular **admins**, whom you appoint while the server is running. In both cases you specify the player's **SteamID64** – a 17-digit number starting with `7656`.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Set the owner

The owner is the server owner. The entry lives in the configuration and persists across restarts.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The entry is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Commands.dat</b><br>
   Open the following file:

   ```
   /Servers/<ServerID>/Server/Commands.dat
   ```

   :::: info Which folder is mine?
   `<ServerID>` is the folder name inside `/Servers/`. It comes from your server's startup parameter – usually there is exactly one folder there.
   ::::

4. <b>Enter the SteamID64</b><br>
   Add a new line with your SteamID64:

   ```
   Owner 76561198012345678
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Structure of Commands.dat
`Commands.dat` holds one instruction per line. Lines starting with `//` are comments and are ignored. It is best to use exactly the spelling shown in the examples.
::::

## Appoint an admin while the server runs

You appoint additional admins with a command – either in the **console** of the dashboard or, as an admin, directly in the in-game chat.

1. <b>Open the console or chat</b><br>
   Open the **console** in the dashboard of your server. Alternatively open the chat in the game if you are already an admin.

2. <b>Enter the command</b><br>
   In the console you enter the command without a prefix:

   ```
   admin 76561198012345678
   ```

   In the in-game chat you prepend `/` or `@`:

   ```
   /admin 76561198012345678
   ```

   :::: tip Tip
   For connected players you can also use the player name instead of the SteamID64, for example `admin Sam`.
   ::::

3. <b>Revoke admin rights</b><br>
   To remove the rights again use:

   ```
   unadmin 76561198012345678
   ```

## Command overview

| Command | Location | Description |
|---------|----------|-------------|
| `Owner <SteamID64>` | `Commands.dat` | Sets the server owner, takes effect after a restart |
| `admin <SteamID64\|PlayerName>` | Console or chat | Makes a player an admin while the server is running |
| `unadmin <SteamID64\|PlayerName>` | Console or chat | Removes admin rights from a player |

:::: info Where is the admin list?
The list of admins is stored at `/Servers/<ServerID>/Server/Adminlist.dat` and is maintained by the `admin` and `unadmin` commands. It is best to manage your admins exclusively through these commands so the list always stays valid. If you want to remove all admins at once, you can also delete the file while the server is stopped.
::::

## Enable cheat commands

Commands such as `give` count as cheats and are disabled by default – even for admins.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Enable cheats</b><br>
   Add a separate line to `Commands.dat`:

   ```
   Cheats
   ```

3. <b>Start the server</b><br>
   Save the file and start your server.

:::: danger Important
With cheats enabled, every admin can spawn items. Only enable this if you really want it – on a survival server it quickly takes away the challenge.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
