---
description: Add an admin on a The Bus server
---

# How to Add an Admin on a The Bus Server

The Bus uses a rank system with four levels. You can assign ranks via `PlayerData.json` or via commands in-game. In addition, the admin password protects access to the admin menu.

## Rank System

| Rank | Description |
|------|-------------|
| **Owner** | Highest level |
| **Admin** | Access to the admin menu without re-entering the password |
| **Moderator** | Highlighted in chat like admins |
| **User** | No additional permissions |

## How to Assign Ranks via PlayerData.json

:::: warning Warning
The player must have connected to the server at least once for an entry to exist in `PlayerData.json`. To give yourself the Owner rank, join your server once first and then follow the steps below for your own entry.
::::

:::: tip Tip
Create a [backup](create-backup.md) before editing.
::::

1. <b>Stop server</b><br>
   Stop your server in the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open file</b><br>
   Open the file `/TheBus/Saved/PlayerData.json`.

4. <b>Change rank</b><br>
   Find the entry of the desired player and set the value of the field holding their rank to `"Owner"`, `"Admin"` or `"Moderator"`. Leave all other values of the entry unchanged.

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the player data unreadable for the server.
   ::::

5. <b>Start server</b><br>
   Save the file and start your server again.

## How to Open the Admin Menu with the Admin Password

:::: warning Warning
The default admin password is `BitteAendereMich`. Change it in the dashboard under **Settings** in the **Admin Passwort** field, because anyone who knows the password can open the admin menu. You can find more details under [Configure server](configure-server.md).
::::

1. <b>Open admin menu</b><br>
   Open the pause menu in-game and select the admin menu.

2. <b>Enter admin password</b><br>
   Enter your server's admin password. This gives you access to the admin menu. It does not give you a rank – you assign ranks via `PlayerData.json` or by command.

:::: info Note
Players with the Admin rank are not asked for the password when opening the admin menu.
::::

## How to Assign Ranks via Commands

As Owner, you can assign ranks to other players in the in-game chat with the following commands:

| Command | Description |
|---------|-------------|
| `/owner <playername>` | Turn player into an Owner |
| `/admin <playername>` | Turn player into an Admin |
| `/mod <playername>` | Turn player into a Moderator |
| `/user <playername>` | Turn player back into a regular player (User) |

Replace `<playername>` with the player's Steam name, for example:

```
/admin Player123
```

`/list` shows you the names of all players on the server. Use `/commands` to list all available commands.

:::: info Note
The `/owner` command comes from the official [server guide by TML-Studios](https://steamcommunity.com/sharedfiles/filedetails/?id=3464410642) and is not included in the `/commands` list. Enter the commands in-game via the chat. On our servers, the console in the dashboard only shows the server output and does not accept commands.
::::

## In-Game Admin Menu

As Owner, you see additional options in the admin menu (pause menu), e.g. for:

- the server name (see [Configure server](configure-server.md))
- the map (see [Change map](change-map.md))
- the operating plan (see [Change operating plan](change-operating-plan.md))
- the fleet (see [Change fleet](change-fleet.md))

:::: info Note
The dashboard resets the server name, server password, admin password, maximum player count and server list visibility to the values under **Settings** on every start. Change these values in the dashboard instead.
::::
