---
description: Kick and ban players on a Citadel Forged with Fire server
---

# How to Kick and Ban Players on Your Citadel Forged with Fire Server

You remove players from your Citadel Forged with Fire server using chat commands in the game. The parameter is always the **player name**, not the SteamID.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

## Use commands in the game

1. <b>Log in as an admin</b><br>
   Join your server, open the chat and log in with your admin password:

   ```
   /admin_login <password>
   ```

2. <b>Find the player name</b><br>
   The following command lists all currently logged-in players:

   ```
   /who
   ```

3. <b>Run the command</b><br>
   Enter the desired command together with the player name, for example:

   ```
   /server_kick Merlin Rulebreaking
   ```

:::: info Player names
Player names are limited to **12 characters and cannot contain spaces**. That makes the name unambiguous as a parameter – you do not have to put it in quotation marks.
::::

## Kick a player

```
/server_kick <player> <reason>
```

The player is disconnected from the server immediately and is shown the reason you entered. They can rejoin at any time afterwards.

## Ban a player

```
/server_ban <player> <reason>
```

The player is kicked immediately and banned permanently. On every further join attempt they are shown the reason you entered.

## Unban a player

```
/server_unban <player>
```

Afterwards the player can join your server normally again.

## Delete a character

```
/admin_delete <player>
```

This deletes a player's character completely from the server. If the player is currently online, they are disconnected immediately. They are **not** banned – they can rejoin but will start with a new character.

:::: danger Important
A deleted character cannot be restored. Create a [backup](create-backup.md) beforehand if you are unsure.
::::

## Command overview

| Command | Alternative | Description |
|---------|-------------|-------------|
| `/who` | – | Shows all currently logged-in players |
| `/whois <player>` | – | Shows information about a player including their SteamID – even when they are offline |
| `/server_kick <player> <reason>` | `/gtfo` | Disconnects a player from the server |
| `/server_ban <player> <reason>` | `/ban` | Bans a player permanently |
| `/server_unban <player>` | `/unban` | Lifts the ban again |
| `/admin_delete <player>` | `/wipe` | Deletes the player's character from the server |

:::: info Note
The commands in the **Alternative** column are just short forms and do exactly the same as the respective main command.
::::

:::: info Ban list
Citadel Forged with Fire does not offer a ban list that you could edit as a file. Bans are set and removed exclusively through the commands `/server_ban` and `/server_unban`.
::::

:::: tip Command has no effect?
If a command in the chat does not react, first check with `/who` whether you are still logged in as an admin – after a restart or a lost connection you have to log in again with `/admin_login`. Alternatively you can run the same commands through the Remote Console in your browser, see [Add Admin](add-admin.md).
::::
