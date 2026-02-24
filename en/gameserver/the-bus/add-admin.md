---
description: Add an admin on a The Bus server
---

# How to Add an Admin on a The Bus Server

The Bus uses a rank system with four levels. You can add players via `PlayerData.json` or through commands.

## Rank System

| Rank | Description |
|------|-------------|
| **Owner** | Full access, highest permission level |
| **Admin** | Administrative permissions, access to the admin menu without re-entering the password |
| **Moderator** | Moderation permissions |
| **User** | Default rank for all players |

## How to assign ranks via PlayerData.json

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open file</b><br>
   Open the file `TheBus/Saved/PlayerData.json`.

3. <b>Change rank</b><br>
   Find the desired player and change the value of `"perms"` to `"Owner"`, `"Admin"` or `"Moderator"`:

   ```json
   {
       "players": [
           {
               "name": "PlayerName",
               "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "perms": "Owner",
               "banned": false,
               "unbanDate": "0001.01.01-00.00.00",
               "adminPasswordUsed": ""
           },
           {
               "name": "AnotherPlayer",
               "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "perms": "Admin",
               "banned": false,
               "unbanDate": "0001.01.01-00.00.00",
               "adminPasswordUsed": ""
           }
       ]
   }
   ```

4. <b>Restart server</b><br>
   Save the changes and restart the server.

:::: warning Important
The player must have connected to the server at least once for an entry to exist in `PlayerData.json`.
::::

:::: tip Tip
Join your server first and assign yourself the Owner rank before other players connect.
::::

## How to assign ranks via commands

Ranks can also be assigned via commands – either through the console in the dashboard or directly in-game.

| Command | Description |
|---------|-------------|
| `/owner <playername>` | Promote player to Owner |
| `/admin <playername>` | Promote player to Admin |
| `/mod <playername>` | Promote player to Moderator |
| `/user <playername>` | Demote player to User |

:::: tip Tip
If you have assigned yourself the Owner rank via `PlayerData.json`, you can also use these commands directly through the in-game chat.
::::

## In-Game Admin Menu

Players with **Owner** or **Admin** permissions can open the **Admin Menu** via the pause menu. The following settings can be changed:

- **Map selection**
- **Operating plan**
- **Weather**

:::: info Info
It is recommended to set an admin password to prevent any player from opening the admin menu. The admin password can be set in the dashboard under settings.
::::
