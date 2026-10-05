---
description: Kick and ban players on a The Bus server
---

# How to Kick and Ban Players on a The Bus Server

You enter all commands in this guide in the **in-game chat**. You need an appropriate rank for this (e.g. Owner or Admin). To learn how to assign ranks, see [Add Admin](add-admin.md).

:::: tip Tip
Use `/commands` in the in-game chat to show all available commands.
::::

:::: info Note
On our servers, the console in the dashboard only shows the server output and does not accept commands.
::::

## How to show the player list

To show all players on the server, enter the following command:

```
/list
```

## How to kick a player

```
/kick <playername>
```

This removes the player from the server.

## How to ban a player

```
/ban <playername>
```

This bans the player permanently.

## How to temporarily ban a player

Since Update 3.2 EA, you can also ban players for a limited time:

```
/tempban <playername> <duration>
```

:::: info Note
The unit in which `/tempban` expects the duration is not officially documented. Use `/commands` to show all available commands.
::::

## How to unban a player

```
/unban <playername>
```

## How to unban a player via SFTP

Alternatively, you can lift a ban directly in the player data file.

1. <b>Stop the server</b><br>
   Stop your server in the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the file</b><br>
   Open the file `/TheBus/Saved/PlayerData.json`.

4. <b>Lift the ban</b><br>
   Find the entry of the player you want to unban and set the value of `"banned"` to `false`, for example:

   ```json
   {
       "name": "Player123",
       "banned": false,
       ...
   }
   ```

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the player data unreadable for the server.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server again.

## How to mute a player

```
/mute <playername>
```

This mutes the player for the entire server.

## How to unmute a player

```
/unmute <playername>
```

## Command overview

| Command | Description |
|---------|-------------|
| `/list` | Show all players |
| `/kick <playername>` | Kick player from server |
| `/ban <playername>` | Permanently ban player |
| `/tempban <playername> <duration>` | Temporarily ban player |
| `/unban <playername>` | Unban player |
| `/mute <playername>` | Mute player for the entire server |
| `/unmute <playername>` | Unmute player for the entire server |
| `/commands` | Show available commands |
