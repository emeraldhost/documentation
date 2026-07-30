---
description: Kick and ban players on a Garry's Mod server
---

# How to Kick and Ban Players on Your Garry's Mod Server

You can kick and ban players through the server console in the dashboard. Garry's Mod uses the standard Source Engine commands for this.

## List the players

1. <b>Open the server console</b><br>
   Open the console of your server via the dashboard.

2. <b>Show the player list</b><br>
   Enter the following command:

   ```
   status
   ```

   The output shows the **userid**, the SteamID in the format `STEAM_0:x:xxxxxxx` and the IP address for every connected player. You need these values for the commands below.

## Kick a player

A kicked player is removed from the server but can rejoin immediately.

```
kick <Name>
```

```
kickid <userid> Reason
```

Instead of the `userid` you can also use the SteamID:

```
kickid STEAM_0:1:12345678 Reason
```

## Ban a player

```
banid <minutes> <userid> kick
```

Here too you can use the SteamID instead of the `userid`:

```
banid 0 STEAM_0:1:12345678 kick
```

:::: info Note
Set the minutes to `0` to ban the player permanently. Adding `kick` removes the player from the server right away — without it the ban only takes effect on the next connection attempt.
::::

## Ban an IP address

```
banip <minutes> <IP address>
```

:::: info Note
The command `addip <minutes> <IP address>` does exactly the same as `banip` — it is just a second name for the same function.
::::

## Save bans permanently

:::: danger Important
Bans initially only live in the server's memory and are gone after a restart. Make sure to save them after every change.
::::

1. <b>Save SteamID bans</b><br>
   Enter the following in the server console:

   ```
   writeid
   ```

   The bans are written to the file `/garrysmod/cfg/banned_user.cfg`.

2. <b>Save IP bans</b><br>
   Enter the following in the server console:

   ```
   writeip
   ```

   The bans are written to the file `/garrysmod/cfg/banned_ip.cfg`.

:::: info Note
For the saved bans to apply again after a restart, both files have to be executed on server start. The `/garrysmod/cfg/server.cfg` that ships with your server already contains these two lines — do not delete them:

```
exec banned_ip.cfg
exec banned_user.cfg
```
::::

:::: warning Caution
Avoid editing the ban lists by hand while the server is running — `writeid` and `writeip` overwrite the files completely with the current state from memory.
::::

## Unban a player

```
removeid STEAM_0:1:12345678
```

```
removeip <IP address>
```

Afterwards run `writeid` or `writeip` again so the change is saved permanently.

## Command overview

| Command | Description |
|--------|-------------|
| `status` | Show all connected players with userid, SteamID and IP |
| `kick <Name>` | Kick a player by player name |
| `kickid <userid\|SteamID> [reason]` | Kick a player by ID |
| `banid <minutes> <userid\|SteamID> [kick]` | Ban a player (`0` = permanent) |
| `banip <minutes> <IP>` | Ban an IP address |
| `addip <minutes> <IP>` | Identical to `banip` |
| `removeid <SteamID>` | Remove a ban for a SteamID |
| `removeip <IP>` | Remove a ban for an IP address |
| `writeid` | Save SteamID bans permanently |
| `writeip` | Save IP bans permanently |
