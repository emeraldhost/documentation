---
description: Kick and ban players on a CryoFall server
---

# How to Kick and Ban Players on Your CryoFall Server

In CryoFall you manage players through the in-game console. Alternatively you can edit the lists directly in the server configuration while the server is stopped.

:::: info Note
You need operator or moderator rights to use these commands. See [Add Admin](add-admin.md).
::::

## Use the commands in the game

1. <b>Open the console</b><br>
   Press the `~` key in the game to open the console.

2. <b>Enter a command</b><br>
   All commands start with `/`, for example:

   ```
   /ban PlayerName
   ```

3. <b>Auto-complete commands</b><br>
   The console completes partially typed commands with the Tab key.

## Kick a player

A kick removes the player from the server for a set amount of time. Afterwards they can join again.

```
/kick <playerName> [minutes] ["reason"]
```

Example – the player is removed for 60 minutes with a reason:

```
/kick PlayerName 60 "Please follow the server rules"
```

:::: info Note
The reason goes in double quotes directly after the number of minutes. If you leave out the minutes, the kick lasts 30 minutes. To lift a kick early, use `/mod.kickList.remove <playerName>`.
::::

## Ban a player

A ban is permanent and stays in place until you lift it.

```
/ban <playerName>
```

The player is disconnected immediately and can no longer connect.

:::: info Note
CryoFall has **no time-limited bans** – the command takes no time parameter. If a player should only stay out temporarily, use `/kick` with a number of minutes instead.
::::

## Lift a ban

```
/mod.blackList.remove <playerName>
```

`/mod.blackList.print` shows all banned players.

## Kick and ban factions

You can remove entire factions by their clan tag:

```
/banFaction <clanTag>
```

```
/kickFaction <clanTag> [minutes] ["reason"]
```

## Mute a player

```
/mute <playerName> [minutes]
```

```
/mod.muteList.remove <playerName>
```

## Command overview

| Command | Description |
|---------|-------------|
| `/ban <playerName>` | Ban a player permanently |
| `/mod.blackList.remove <playerName>` | Lift a ban |
| `/mod.blackList.print` | List banned players |
| `/banFaction <clanTag>` | Ban an entire faction |
| `/kick <playerName> [minutes] ["reason"]` | Remove a player for a set time |
| `/mod.kickList.remove <playerName>` | Lift a kick |
| `/mod.kickList.print` | List kicked players |
| `/kickFaction <clanTag> [minutes] ["reason"]` | Remove an entire faction for a set time |
| `/mute <playerName> [minutes]` | Mute a player |
| `/mod.muteList.remove <playerName>` | Unmute a player |
| `/whiteListAdd <playerName>` | Add a player to the whitelist |
| `/mod.whiteList.remove <playerName>` | Remove a player from the whitelist |
| `/mod.whiteList.print` | Show the whitelist |
| `/mod.whiteList.enabled 1` | Enable the whitelist |

:::: info Note
Banned players can no longer connect to the server – operators and moderators are exempt from this.
::::

## Open the server only for specific players

CryoFall has no server password. If you want to keep your server private, use the whitelist: while it is active only listed players can connect – operators and moderators excepted.

1. <b>Add the players</b><br>
   First add yourself and all of your players to the list:

   ```
   /whiteListAdd PlayerName
   ```

2. <b>Enable the whitelist</b><br>
   Only activate the whitelist afterwards:

   ```
   /mod.whiteList.enabled 1
   ```

3. <b>Check the list</b><br>
   Verify the result:

   ```
   /mod.whiteList.print
   ```

:::: danger Important
Only enable the whitelist once every player you want on the server is listed. Otherwise you lock your own players out.
::::

## Manage the lists in the configuration file

The lists are also stored as plain text in the server configuration. That helps you for example when you want to lift a ban and nobody with the required rights is in the game.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open the configuration</b><br>
   Open the following file via [SFTP](../establish-sftp-connection.md):

   ```
   /Data/SettingsServer.xml
   ```

3. <b>Edit the list</b><br>
   The names are stored comma-separated in these entries:

   ```xml
   <access_blacklist></access_blacklist>
   <access_whitelist></access_whitelist>
   <access_whitelist_enabled>0</access_whitelist_enabled>
   ```

   | Entry | Purpose |
   |-------|---------|
   | `access_blacklist` | Banned players. Removing a name is the same as an unban. |
   | `access_whitelist` | Allowed players |
   | `access_whitelist_enabled` | `1` enables the whitelist, `0` disables it |

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Caution
Only edit the file while the server is stopped. During operation the server manages these lists itself and overwrites your changes.
::::
